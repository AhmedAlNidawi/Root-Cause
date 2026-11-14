const chartColors = {
  grid: '#1b3324',
  text: '#6fa07f',
  night: 'rgba(110, 150, 255, 0.07)',
  limit: '#ff6a55',
  main: '#8af0a6',
  other: '#7cc4ff',
  normal: '#55806a'
};

let chartTimer = null;

function drawChart(canvas, chart, animate) {
  let width = Math.max(canvas.clientWidth, 300);
  let height = Math.round(width * 0.45);
  if (width < 500) height = Math.round(width * 0.7);
  canvas.width = width * 2;
  canvas.height = height * 2;

  let ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  let left = 48;
  let right = 18;
  let top = 30;
  let bottom = 40;
  let plotW = width - left - right;
  let plotH = height - top - bottom;
  let count = chart.lines[0].data.length;

  function x(i) {
    if (chart.bars) return left + (i + 0.5) / count * plotW;
    return left + i / (count - 1) * plotW;
  }

  function y(value) {
    return top + plotH - (value - chart.min) / (chart.max - chart.min) * plotH;
  }

  function write(words, tx, ty, align, color) {
    ctx.fillStyle = color || chartColors.text;
    ctx.textAlign = align || 'left';
    ctx.direction = isNaN(words) ? 'inherit' : 'ltr';
    ctx.fillText(words, tx, ty);
  }

  function drawLine(data, color, lineWidth, dashed, upTo) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(dashed ? [3, 5] : []);
    ctx.shadowColor = color;
    ctx.shadowBlur = dashed ? 0 : 8;
    ctx.beginPath();
    let penDown = false;
    for (let i = 0; i <= upTo; i++) {
      let value = data[i];
      if (value === null || value === undefined) {
        penDown = false;
        continue;
      }
      if (!penDown) {
        ctx.moveTo(x(i), y(value));
        penDown = true;
      } else if (chart.step) {
        ctx.lineTo(x(i), y(data[i - 1]));
        ctx.lineTo(x(i), y(value));
      } else {
        ctx.lineTo(x(i), y(value));
      }
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.setLineDash([]);
  }

  function paint(progress) {
    ctx.clearRect(0, 0, width, height);
    ctx.font = '13px ' + getComputedStyle(canvas).getPropertyValue('--mono');
    ctx.lineWidth = 1;

    if (chart.hours) {
      let step = plotW / (count - 1);
      ctx.fillStyle = chartColors.night;
      for (let h = 0; h < count; h++) {
        let time = h % 24;
        if (time < 6 || time >= 18) ctx.fillRect(x(h) - step / 2, top, step, plotH);
      }
    }
// We had used AI (claude) to fix a logical error as our chart kept rendering wrongly :/
    let middle = (chart.min + chart.max) / 2;
    for (let value of [chart.min, middle, chart.max]) {
      ctx.strokeStyle = chartColors.grid;
      ctx.beginPath();
      ctx.moveTo(left, y(value));
      ctx.lineTo(width - right, y(value));
      ctx.stroke();
      let label = Number.isInteger(value) ? value : value.toFixed(1);
      write(label, left - 8, y(value) + 4, 'right');
    }
    write(chart.unit, left, top - 12);

    let bottomY = height - bottom + 20;
    if (chart.hours) {
      let w = text.chart;
      write(fill(w.sol, { n: 1 }), x(0), bottomY, 'left');
      write(fill(w.sol, { n: 2 }), x(24), bottomY, 'center');
      if (width > 500) {
        write(w.noon, x(12), bottomY, 'center');
        write(w.noon, x(36), bottomY, 'center');
      }
      write(w.now, x(count - 1), bottomY, 'right');
    }
    if (chart.labels) {
      for (let i = 0; i < chart.labels.length; i++) write(chart.labels[i], x(i), bottomY, 'center');
    }
    if (chart.xLabel) {
      let labelY = chart.labels ? height - 4 : bottomY;
      write(chart.xLabel, left + plotW / 2, labelY, 'center');
    }

    if (chart.limit !== undefined) {
      ctx.strokeStyle = chartColors.limit;
      ctx.setLineDash([6, 5]);
      ctx.beginPath();
      ctx.moveTo(left, y(chart.limit));
      ctx.lineTo(width - right, y(chart.limit));
      ctx.stroke();
      ctx.setLineDash([]);
      write(chart.limitLabel, width - right - 4, y(chart.limit) - 7, 'right', chartColors.limit);
    }

    if (chart.bars) {
      let groups = chart.lines.length;
      let slot = plotW / count / (groups + 1);
      for (let k = 0; k < groups; k++) {
        let color = k === 0 ? chartColors.main : chartColors.other;
        let data = chart.lines[k].data;
        for (let i = 0; i < data.length; i++) {
          let barX = x(i) - groups * slot / 2 + k * slot;
          let barTop = y(chart.min + (data[i] - chart.min) * progress);
          ctx.fillStyle = color;
          ctx.fillRect(barX, barTop, slot * 0.9, y(chart.min) - barTop);
          if (k === 0 && progress === 1) write(data[i], barX + slot * 0.45, barTop - 7, 'center', color);
        }
      }
      return;
    }

    let upTo = Math.floor(progress * (count - 1));
    for (let k = chart.lines.length - 1; k >= 0; k--) {
      let line = chart.lines[k];
      if (k === 0) drawLine(line.data, chartColors.main, 3, false, upTo);
      else if (line.normal) drawLine(line.data, chartColors.normal, 1.5, true, upTo);
      else drawLine(line.data, chartColors.other, 2, false, upTo);
    }
  }

  cancelAnimationFrame(chartTimer);
  if (!animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    paint(1);
    return;
  }

  let progress = 0;
  function frame() {
    progress = Math.min(1, progress + 0.04);
    paint(progress);
    if (progress < 1) chartTimer = requestAnimationFrame(frame);
  }
  frame();
}

function chartLegend(chart) {
  let html = '';
  for (let i = 0; i < chart.lines.length; i++) {
    let line = chart.lines[i];
    let type = 'other';
    if (i === 0) type = 'main';
    else if (line.normal) type = 'normal';
    html += '<span class="legend-' + type + '">' + line.name + '</span>';
  }
  return html;
}

function sparkline(data, min, max) {
  let points = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i] === null) continue;
    let px = i / (data.length - 1) * 120;
    let py = 38 - (data[i] - min) / (max - min) * 36;
    points += px.toFixed(1) + ',' + py.toFixed(1) + ' ';
  }
  return '<svg class="spark" viewBox="0 0 120 40" preserveAspectRatio="none"><polyline points="' + points + '"/></svg>';
}
