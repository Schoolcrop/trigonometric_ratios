var _0x5ebcf3 = _0x3bcd; (function (_0x59ba73, _0xbff5b9) { var _0x3a10de = _0x3bcd, _0x2de7c2 = _0x59ba73(); while (!![]) { try { var _0xb6a071 = parseInt(_0x3a10de(0x1df)) / 0x1 + parseInt(_0x3a10de(0x1d6)) / 0x2 * (parseInt(_0x3a10de(0x1cc)) / 0x3) + parseInt(_0x3a10de(0x1da)) / 0x4 * (-parseInt(_0x3a10de(0x1c6)) / 0x5) + -parseInt(_0x3a10de(0x1f0)) / 0x6 + -parseInt(_0x3a10de(0x1c1)) / 0x7 * (parseInt(_0x3a10de(0x1d2)) / 0x8) + parseInt(_0x3a10de(0x1d9)) / 0x9 * (-parseInt(_0x3a10de(0x1dd)) / 0xa) + -parseInt(_0x3a10de(0x1ee)) / 0xb * (-parseInt(_0x3a10de(0x1d4)) / 0xc); if (_0xb6a071 === _0xbff5b9) break; else _0x2de7c2['push'](_0x2de7c2['shift']()); } catch (_0x3135ec) { _0x2de7c2['push'](_0x2de7c2['shift']()); } } }(_0x390d, 0x1909c)); var fixedRadius = 0x1e0, radius = parseFloat(document['getElementById'](_0x5ebcf3(0x1d3))[_0x5ebcf3(0x1c3)]), angle = parseFloat(document[_0x5ebcf3(0x1e6)](_0x5ebcf3(0x1c5))[_0x5ebcf3(0x1c3)]), running = ![], svg = d3['select']('#plot')['append'](_0x5ebcf3(0x1cf))[_0x5ebcf3(0x1d5)]('width', 0x3e8)['attr'](_0x5ebcf3(0x1bd), 0x3e8), startButton = document['getElementById'](_0x5ebcf3(0x1c8)), pauseButton = document[_0x5ebcf3(0x1e6)](_0x5ebcf3(0x1f1)), radiusInput = document[_0x5ebcf3(0x1e6)](_0x5ebcf3(0x1d3)), angleInput = document[_0x5ebcf3(0x1e6)](_0x5ebcf3(0x1c5)); function formatAngle(_0x5934e7) { var _0x2bf912 = _0x5ebcf3, _0x132505 = calculateGCD(_0x5934e7, 0xb4); if (_0x132505 === 0x1) return _0x5934e7 + _0x2bf912(0x1e9) + _0x5934e7 + _0x2bf912(0x1b9); else { var _0x42132f = _0x5934e7 / _0x132505; return _0x5934e7 + 'π/180\x20=\x20' + _0x42132f + 'π/' + 0xb4 / _0x132505; } } function calculateGCD(_0x4d26dc, _0x3dcd22) { return _0x3dcd22 === 0x0 ? _0x4d26dc : calculateGCD(_0x3dcd22, _0x4d26dc % _0x3dcd22); } function _0x3bcd(_0x4dac31, _0x273994) { var _0x390dca = _0x390d(); return _0x3bcd = function (_0x3bcd60, _0x10a7f0) { _0x3bcd60 = _0x3bcd60 - 0x1b9; var _0x311fee = _0x390dca[_0x3bcd60]; return _0x311fee; }, _0x3bcd(_0x4dac31, _0x273994); } function updateTable() { var _0x252c2c = _0x5ebcf3, _0x24429a = angle * (Math['PI'] / 0xb4), _0x1924d = Math[_0x252c2c(0x1d0)](_0x24429a), _0x3c7369 = Math[_0x252c2c(0x1f2)](_0x24429a); document[_0x252c2c(0x1e6)]('angleValue')[_0x252c2c(0x1e7)] = angle + '°', document['getElementById']('cosValue')[_0x252c2c(0x1e7)] = _0x1924d[_0x252c2c(0x1bf)](0x2), document[_0x252c2c(0x1e6)](_0x252c2c(0x1eb))['textContent'] = _0x3c7369[_0x252c2c(0x1bf)](0x2), document['getElementById']('angleRadiansValue')[_0x252c2c(0x1e7)] = formatAngle(angle), document[_0x252c2c(0x1e6)]('radiusValue')[_0x252c2c(0x1e7)] = radius['toFixed'](0x2), document[_0x252c2c(0x1e6)]('sineLengthValue')[_0x252c2c(0x1e7)] = (radius * _0x3c7369)[_0x252c2c(0x1bf)](0x2), document[_0x252c2c(0x1e6)]('cosineLengthValue')['textContent'] = (radius * _0x1924d)['toFixed'](0x2); } function updatePlot() { var _0x56a3e8 = _0x5ebcf3; svg[_0x56a3e8(0x1ba)]('*')[_0x56a3e8(0x1ea)](); var _0x3541b9 = fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)), _0xc37da5 = fixedRadius * Math[_0x56a3e8(0x1f2)](angle * (Math['PI'] / 0xb4)); svg[_0x56a3e8(0x1be)](_0x56a3e8(0x1bc))[_0x56a3e8(0x1d5)]('x1', 0x0)[_0x56a3e8(0x1d5)]('y1', 0x1f4)[_0x56a3e8(0x1d5)]('x2', 0x3e8)[_0x56a3e8(0x1d5)]('y2', 0x1f4)[_0x56a3e8(0x1d5)](_0x56a3e8(0x1e4), _0x56a3e8(0x1ef))[_0x56a3e8(0x1d5)](_0x56a3e8(0x1d7), _0x56a3e8(0x1cd)), svg[_0x56a3e8(0x1be)]('line')[_0x56a3e8(0x1d5)]('x1', 0x1f4)['attr']('y1', 0x0)[_0x56a3e8(0x1d5)]('x2', 0x1f4)['attr']('y2', 0x3e8)[_0x56a3e8(0x1d5)](_0x56a3e8(0x1e4), 'gray')[_0x56a3e8(0x1d5)]('stroke-dasharray', _0x56a3e8(0x1cd)), svg[_0x56a3e8(0x1be)](_0x56a3e8(0x1bc))[_0x56a3e8(0x1d5)]('x1', 0x1f4)[_0x56a3e8(0x1d5)]('y1', 0x1f4)[_0x56a3e8(0x1d5)]('x2', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)))[_0x56a3e8(0x1d5)]('y2', 0x1f4 - fixedRadius * Math[_0x56a3e8(0x1f2)](angle * (Math['PI'] / 0xb4)))[_0x56a3e8(0x1d5)]('stroke', _0x56a3e8(0x1c2))[_0x56a3e8(0x1d5)](_0x56a3e8(0x1db), 0x5), svg[_0x56a3e8(0x1be)](_0x56a3e8(0x1ec))[_0x56a3e8(0x1d5)]('x', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)) / 0x2)[_0x56a3e8(0x1d5)]('y', 0x1f4 - fixedRadius * Math[_0x56a3e8(0x1f2)](angle * (Math['PI'] / 0xb4)) / 0x2)['attr']('fill', 'blue')[_0x56a3e8(0x1e8)](_0x56a3e8(0x1e1), '30px')[_0x56a3e8(0x1e8)](_0x56a3e8(0x1de), 'bold')[_0x56a3e8(0x1ec)]('Radius\x20of\x20the\x20Circle'), svg[_0x56a3e8(0x1be)]('line')[_0x56a3e8(0x1d5)]('x1', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)))[_0x56a3e8(0x1d5)]('y1', 0x1f4 - fixedRadius * Math[_0x56a3e8(0x1f2)](angle * (Math['PI'] / 0xb4)))['attr']('x2', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)))[_0x56a3e8(0x1d5)]('y2', 0x1f4)[_0x56a3e8(0x1d5)](_0x56a3e8(0x1e4), _0x56a3e8(0x1cb))['attr'](_0x56a3e8(0x1db), 0x5), svg[_0x56a3e8(0x1be)](_0x56a3e8(0x1ec))[_0x56a3e8(0x1d5)]('x', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)) + 0xa)[_0x56a3e8(0x1d5)]('y', 0x190 - fixedRadius * Math[_0x56a3e8(0x1f2)](angle * (Math['PI'] / 0xb4)) / 0x2)[_0x56a3e8(0x1d5)](_0x56a3e8(0x1e2), 'red')[_0x56a3e8(0x1e8)](_0x56a3e8(0x1e1), '30px')[_0x56a3e8(0x1e8)](_0x56a3e8(0x1de), _0x56a3e8(0x1ce))['text'](_0x56a3e8(0x1e0)), svg[_0x56a3e8(0x1be)](_0x56a3e8(0x1bc))[_0x56a3e8(0x1d5)]('x1', 0x1f4)['attr']('y1', 0x1f4)[_0x56a3e8(0x1d5)]('x2', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)))[_0x56a3e8(0x1d5)]('y2', 0x1f4)[_0x56a3e8(0x1d5)]('stroke', _0x56a3e8(0x1f6))[_0x56a3e8(0x1d5)]('stroke-width', 0x5), svg['append'](_0x56a3e8(0x1ec))[_0x56a3e8(0x1d5)]('x', 0x1f4 + fixedRadius * Math[_0x56a3e8(0x1d0)](angle * (Math['PI'] / 0xb4)) / 0x2)[_0x56a3e8(0x1d5)]('y', 0x1f4 + 0x14)['attr']('fill', 'purple')['style'](_0x56a3e8(0x1e1), '30px')[_0x56a3e8(0x1e8)](_0x56a3e8(0x1de), _0x56a3e8(0x1ce))[_0x56a3e8(0x1ec)]('Cosine'), svg[_0x56a3e8(0x1be)]('circle')['attr']('cx', 0x1f4)['attr']('cy', 0x1f4)[_0x56a3e8(0x1d5)]('r', fixedRadius)[_0x56a3e8(0x1d5)]('fill', _0x56a3e8(0x1f4))[_0x56a3e8(0x1d5)](_0x56a3e8(0x1e4), _0x56a3e8(0x1f5)), updateTable(); } startButton[_0x5ebcf3(0x1e5)](_0x5ebcf3(0x1ed), function () { if (!running) { running = !![]; var _0x2fd94a = setInterval(function () { angle = (angle + 0x1) % 0x168, updatePlot(); if (!running) clearInterval(_0x2fd94a); }, 0x190); } }), pauseButton['addEventListener'](_0x5ebcf3(0x1ed), function () { running = ![]; }), radiusInput[_0x5ebcf3(0x1e5)]('input', function () { var _0x56ac11 = _0x5ebcf3, _0x522a0c = parseFloat(radiusInput[_0x56ac11(0x1c3)]); _0x522a0c < 0x1 ? (radiusInput[_0x56ac11(0x1c3)] = _0x56ac11(0x1d8), radius = 0x1f4) : radius = _0x522a0c, updatePlot(); }), angleInput[_0x5ebcf3(0x1e5)](_0x5ebcf3(0x1d1), function () { var _0x463036 = _0x5ebcf3; angle = parseFloat(angleInput[_0x463036(0x1c3)]), updatePlot(); }), updatePlot(); function _0x390d() { var _0x39f984 = ['remove', 'sinValue', 'text', 'click', '22aoewkP', 'gray', '151974ixiDxh', 'pauseButton', 'sin', 'https://schoolcrop.com', 'none', 'green', 'purple', 'π/180', 'selectAll', 'textAlign', 'line', 'height', 'append', 'toFixed', 'createElement', '155981YvdKgX', 'blue', 'value', 'body', 'angleInput', '15085UVbsua', 'appendChild', 'startButton', 'footer', 'target', 'red', '1137Xwcxlc', '5,5', 'bold', 'svg', 'cos', 'input', '32jVCEtY', 'radiusInput', '18924nkHRPl', 'attr', '782FhISnI', 'stroke-dasharray', '500', '1134279BrnsuT', '16yHWvpo', 'stroke-width', '_blank', '10YrrjBE', 'font-weight', '203773cXGctw', 'Sine', 'font-size', 'fill', 'center', 'stroke', 'addEventListener', 'getElementById', 'textContent', 'style', 'π/180\x20=\x20']; _0x390d = function () { return _0x39f984; }; return _0x390d(); }