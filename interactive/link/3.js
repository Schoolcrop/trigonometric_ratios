var _0x1601ec = _0x79d5; (function (_0x503f4c, _0x3df0e7) { var _0x38234c = _0x79d5, _0x163aad = _0x503f4c(); while (!![]) { try { var _0x11bec1 = parseInt(_0x38234c(0x16c)) / 0x1 + -parseInt(_0x38234c(0x15d)) / 0x2 * (parseInt(_0x38234c(0x15a)) / 0x3) + parseInt(_0x38234c(0x13e)) / 0x4 + -parseInt(_0x38234c(0x14c)) / 0x5 + -parseInt(_0x38234c(0x170)) / 0x6 + parseInt(_0x38234c(0x14e)) / 0x7 * (parseInt(_0x38234c(0x15f)) / 0x8) + parseInt(_0x38234c(0x158)) / 0x9; if (_0x11bec1 === _0x3df0e7) break; else _0x163aad['push'](_0x163aad['shift']()); } catch (_0x544009) { _0x163aad['push'](_0x163aad['shift']()); } } }(_0x3b47, 0x6ce64)); var fixedRadius = 0x15e, radius = parseFloat(document[_0x1601ec(0x156)](_0x1601ec(0x14f))['value']), angle = parseFloat(document[_0x1601ec(0x156)]('angleInput')['value']), running = ![], svg = d3[_0x1601ec(0x13d)](_0x1601ec(0x164))[_0x1601ec(0x14d)](_0x1601ec(0x137))['attr'](_0x1601ec(0x172), 0x3e8)[_0x1601ec(0x159)](_0x1601ec(0x140), 0x3e8), startButton = document[_0x1601ec(0x156)](_0x1601ec(0x161)), pauseButton = document[_0x1601ec(0x156)]('pauseButton'), radiusInput = document['getElementById']('radiusInput'), angleInput = document[_0x1601ec(0x156)](_0x1601ec(0x16b)); function formatAngle(_0x31a9e5) { var _0x436741 = _0x1601ec, _0x885e82 = calculateGCD(_0x31a9e5, 0xb4); if (_0x885e82 === 0x1) return _0x31a9e5 + 'π/180\x20=\x20' + _0x31a9e5 + _0x436741(0x173); else { var _0x2b935f = _0x31a9e5 / _0x885e82; return _0x31a9e5 + 'π/180\x20=\x20' + _0x2b935f + 'π/' + 0xb4 / _0x885e82; } } function calculateGCD(_0x454cfb, _0x38b43f) { return _0x38b43f === 0x0 ? _0x454cfb : calculateGCD(_0x38b43f, _0x454cfb % _0x38b43f); } function updateTable() { var _0x3e2761 = _0x1601ec, _0x364a3d = angle * (Math['PI'] / 0xb4), _0x253a9a = 0x1 / Math['cos'](_0x364a3d), _0x11a434 = Math[_0x3e2761(0x13b)](_0x364a3d); document['getElementById'](_0x3e2761(0x142))[_0x3e2761(0x14a)] = angle + '°', angle === 0x5a || angle === 0x10e ? (document[_0x3e2761(0x156)]('secValue')[_0x3e2761(0x14a)] = '∞', document[_0x3e2761(0x156)](_0x3e2761(0x152))[_0x3e2761(0x14a)] = '∞', document['getElementById'](_0x3e2761(0x174))['textContent'] = '∞', document[_0x3e2761(0x156)](_0x3e2761(0x16a))['textContent'] = '∞') : (document[_0x3e2761(0x156)](_0x3e2761(0x154))[_0x3e2761(0x14a)] = _0x253a9a[_0x3e2761(0x150)](0x2), document[_0x3e2761(0x156)](_0x3e2761(0x152))[_0x3e2761(0x14a)] = _0x11a434[_0x3e2761(0x150)](0x2), document['getElementById']('secantLengthValue')['textContent'] = (radius * _0x253a9a)[_0x3e2761(0x150)](0x2), document[_0x3e2761(0x156)](_0x3e2761(0x16a))[_0x3e2761(0x14a)] = (radius * _0x11a434)[_0x3e2761(0x150)](0x2)), document[_0x3e2761(0x156)](_0x3e2761(0x16d))['textContent'] = formatAngle(angle), document[_0x3e2761(0x156)](_0x3e2761(0x16f))[_0x3e2761(0x14a)] = radius[_0x3e2761(0x150)](0x2); } function updatePlot() { var _0x1daa33 = _0x1601ec; svg[_0x1daa33(0x138)]('*')[_0x1daa33(0x148)](); var _0x483a49 = fixedRadius / Math[_0x1daa33(0x165)](angle * (Math['PI'] / 0xb4)), _0x2a848e = fixedRadius * Math[_0x1daa33(0x13b)](angle * (Math['PI'] / 0xb4)); svg[_0x1daa33(0x14d)](_0x1daa33(0x13a))[_0x1daa33(0x159)]('x1', 0x0)[_0x1daa33(0x159)]('y1', 0x1f4)[_0x1daa33(0x159)]('x2', 0x3e8)[_0x1daa33(0x159)]('y2', 0x1f4)[_0x1daa33(0x159)](_0x1daa33(0x163), _0x1daa33(0x175))['attr']('stroke-dasharray', '5,5'), svg['append'](_0x1daa33(0x13a))[_0x1daa33(0x159)]('x1', 0x1f4)['attr']('y1', 0x0)['attr']('x2', 0x1f4)[_0x1daa33(0x159)]('y2', 0x3e8)['attr']('stroke', _0x1daa33(0x175))[_0x1daa33(0x159)]('stroke-dasharray', _0x1daa33(0x176)), svg['append']('line')[_0x1daa33(0x159)]('x1', 0x1f4)[_0x1daa33(0x159)]('y1', 0x1f4)['attr']('x2', 0x1f4 + fixedRadius * Math['cos'](angle * (Math['PI'] / 0xb4)))[_0x1daa33(0x159)]('y2', 0x1f4 - fixedRadius * Math['sin'](angle * (Math['PI'] / 0xb4)))['attr'](_0x1daa33(0x163), 'blue')[_0x1daa33(0x159)](_0x1daa33(0x162), 0x5), svg[_0x1daa33(0x14d)](_0x1daa33(0x13f))[_0x1daa33(0x159)]('x', 0x1f4 + fixedRadius * Math[_0x1daa33(0x165)](angle * (Math['PI'] / 0xb4)) / 0x2)['attr']('y', 0x1f4 - fixedRadius * Math['sin'](angle * (Math['PI'] / 0xb4)) / 0x2)[_0x1daa33(0x159)]('fill', _0x1daa33(0x169))[_0x1daa33(0x151)](_0x1daa33(0x144), _0x1daa33(0x149))[_0x1daa33(0x151)](_0x1daa33(0x178), _0x1daa33(0x139))[_0x1daa33(0x13f)](_0x1daa33(0x143)); var _0x2ef7b7 = angle * (Math['PI'] / 0xb4), _0x90fcc6 = Math['cos'](_0x2ef7b7), _0x214d7d = Math[_0x1daa33(0x15c)](_0x2ef7b7), _0x57bf92 = 0x1 / _0x90fcc6, _0x484404 = Math[_0x1daa33(0x13b)](_0x2ef7b7); svg[_0x1daa33(0x14d)](_0x1daa33(0x13a))[_0x1daa33(0x159)]('x1', 0x1f4)[_0x1daa33(0x159)]('y1', 0x1f4)[_0x1daa33(0x159)]('x2', 0x1f4 + fixedRadius / _0x90fcc6)[_0x1daa33(0x159)]('y2', 0x1f4)[_0x1daa33(0x159)](_0x1daa33(0x163), 'purple')[_0x1daa33(0x159)](_0x1daa33(0x162), 0x5), svg[_0x1daa33(0x14d)](_0x1daa33(0x13f))[_0x1daa33(0x159)]('x', 0x1f4 + fixedRadius / (0x2 * _0x90fcc6))[_0x1daa33(0x159)]('y', 0x1f4 + 0x14)['attr'](_0x1daa33(0x167), 'purple')[_0x1daa33(0x151)](_0x1daa33(0x144), '30px')[_0x1daa33(0x151)](_0x1daa33(0x178), _0x1daa33(0x139))[_0x1daa33(0x13f)](_0x1daa33(0x13c)), svg[_0x1daa33(0x14d)]('line')[_0x1daa33(0x159)]('x1', 0x1f4 + fixedRadius * Math['cos'](angle * (Math['PI'] / 0xb4)))[_0x1daa33(0x159)]('y1', 0x1f4 - fixedRadius * Math[_0x1daa33(0x15c)](angle * (Math['PI'] / 0xb4)))['attr']('x2', 0x1f4 + fixedRadius / _0x90fcc6)[_0x1daa33(0x159)]('y2', 0x1f4)['attr'](_0x1daa33(0x163), 'red')['attr'](_0x1daa33(0x162), 0x5), svg[_0x1daa33(0x14d)]('text')[_0x1daa33(0x159)]('x', 0x1f4 + fixedRadius * Math[_0x1daa33(0x165)](angle * (Math['PI'] / 0xb4)) + 0xa)[_0x1daa33(0x159)]('y', 0x1f4 - fixedRadius * Math[_0x1daa33(0x15c)](angle * (Math['PI'] / 0xb4)) + 0xa)[_0x1daa33(0x159)](_0x1daa33(0x167), _0x1daa33(0x153))[_0x1daa33(0x151)](_0x1daa33(0x144), _0x1daa33(0x149))[_0x1daa33(0x151)]('font-weight', _0x1daa33(0x139))['text']('Tangent'), svg[_0x1daa33(0x14d)](_0x1daa33(0x155))[_0x1daa33(0x159)]('cx', 0x1f4)['attr']('cy', 0x1f4)['attr']('r', fixedRadius)[_0x1daa33(0x159)](_0x1daa33(0x167), _0x1daa33(0x141))['attr'](_0x1daa33(0x163), 'green'), updateTable(); } startButton[_0x1601ec(0x146)](_0x1601ec(0x145), function () { if (!running) { running = !![]; var _0x32f4ab = setInterval(function () { angle = (angle + 0x1) % 0x168, updatePlot(); if (!running) clearInterval(_0x32f4ab); }, 0x320); } }), pauseButton[_0x1601ec(0x146)](_0x1601ec(0x145), function () { running = ![]; }), radiusInput[_0x1601ec(0x146)](_0x1601ec(0x147), function () { var _0x5a2106 = _0x1601ec, _0xf579e2 = parseFloat(radiusInput[_0x5a2106(0x168)]); _0xf579e2 < 0x1 ? (radiusInput[_0x5a2106(0x168)] = _0x5a2106(0x15e), radius = 0x1f4) : radius = _0xf579e2, updatePlot(); }), angleInput[_0x1601ec(0x146)](_0x1601ec(0x147), function () { var _0x9e9ae3 = _0x1601ec; angle = parseFloat(angleInput[_0x9e9ae3(0x168)]), updatePlot(); }), updatePlot(); var footer = document[_0x1601ec(0x177)]('footer'); footer[_0x1601ec(0x151)]['textAlign'] = _0x1601ec(0x166); var link = document['createElement']('a'); function _0x79d5(_0x175b55, _0x200294) { var _0x3b47fd = _0x3b47(); return _0x79d5 = function (_0x79d59, _0x3d3ab9) { _0x79d59 = _0x79d59 - 0x137; var _0x2eaa18 = _0x3b47fd[_0x79d59]; return _0x2eaa18; }, _0x79d5(_0x175b55, _0x200294); } link[_0x1601ec(0x14a)] = _0x1601ec(0x171), link[_0x1601ec(0x157)] = _0x1601ec(0x160), link[_0x1601ec(0x15b)] = _0x1601ec(0x14b), footer[_0x1601ec(0x16e)](link), document['body'][_0x1601ec(0x16e)](); function _0x3b47() { var _0x29afce = ['addEventListener', 'input', 'remove', '30px', 'textContent', '_blank', '1388890lVzyJV', 'append', '3255FZvbmN', 'radiusInput', 'toFixed', 'style', 'tanValue', 'red', 'secValue', 'circle', 'getElementById', 'href', '283716TOgoKP', 'attr', '9XXcmAj', 'target', 'sin', '37656bRYaaG', '500', '328bucKmI', 'https://schoolcrop.com', 'startButton', 'stroke-width', 'stroke', '#plot', 'cos', 'center', 'fill', 'value', 'blue', 'tangentLengthValue', 'angleInput', '636127umMixi', 'angleRadiansValue', 'appendChild', 'radiusValue', '256236JlJAdM', 'Schoolcrop', 'width', 'π/180', 'secantLengthValue', 'gray', '5,5', 'createElement', 'font-weight', 'svg', 'selectAll', 'bold', 'line', 'tan', 'Secant', 'select', '545216fGEiAZ', 'text', 'height', 'none', 'angleValue', 'Radius\x20of\x20the\x20Circle', 'font-size', 'click']; _0x3b47 = function () { return _0x29afce; }; return _0x3b47(); }