var _0x4b8602 = _0x4a1a; (function (_0x553dd2, _0x5757f3) { var _0x4fb1e0 = _0x4a1a, _0x3ca1b6 = _0x553dd2(); while (!![]) { try { var _0x22d33a = -parseInt(_0x4fb1e0(0xd1)) / 0x1 + parseInt(_0x4fb1e0(0xce)) / 0x2 * (parseInt(_0x4fb1e0(0xed)) / 0x3) + parseInt(_0x4fb1e0(0x108)) / 0x4 + parseInt(_0x4fb1e0(0xff)) / 0x5 * (-parseInt(_0x4fb1e0(0x10e)) / 0x6) + parseInt(_0x4fb1e0(0xd3)) / 0x7 * (parseInt(_0x4fb1e0(0xf6)) / 0x8) + parseInt(_0x4fb1e0(0xe5)) / 0x9 + parseInt(_0x4fb1e0(0xef)) / 0xa * (-parseInt(_0x4fb1e0(0xe1)) / 0xb); if (_0x22d33a === _0x5757f3) break; else _0x3ca1b6['push'](_0x3ca1b6['shift']()); } catch (_0x26aed5) { _0x3ca1b6['push'](_0x3ca1b6['shift']()); } } }(_0x33e3, 0x3bf18)); var fixedRadius = 0x15e, radius = parseFloat(document[_0x4b8602(0xeb)]('radiusInput')[_0x4b8602(0x107)]), angle = parseFloat(document['getElementById'](_0x4b8602(0xec))['value']), running = ![], svg = d3[_0x4b8602(0xc3)](_0x4b8602(0xdd))['append'](_0x4b8602(0x101))[_0x4b8602(0xd4)](_0x4b8602(0xc7), 0x3e8)['attr'](_0x4b8602(0xf9), 0x3e8), startButton = document[_0x4b8602(0xeb)](_0x4b8602(0xe6)), pauseButton = document['getElementById']('pauseButton'), radiusInput = document[_0x4b8602(0xeb)](_0x4b8602(0x10c)), angleInput = document[_0x4b8602(0xeb)](_0x4b8602(0xec)); function formatAngle(_0x54482b) { var _0x5ac562 = _0x4b8602, _0x257299 = calculateGCD(_0x54482b, 0xb4); if (_0x257299 === 0x1) return _0x54482b + 'π/180\x20=\x20' + _0x54482b + _0x5ac562(0xcd); else { var _0x43a9fe = _0x54482b / _0x257299; return _0x54482b + _0x5ac562(0x10b) + _0x43a9fe + 'π/' + 0xb4 / _0x257299; } } function calculateGCD(_0x3bd16a, _0x2cb1e5) { return _0x2cb1e5 === 0x0 ? _0x3bd16a : calculateGCD(_0x2cb1e5, _0x3bd16a % _0x2cb1e5); } function _0x4a1a(_0x12baa3, _0x2c0fa3) { var _0x33e361 = _0x33e3(); return _0x4a1a = function (_0x4a1a2b, _0x5e68d3) { _0x4a1a2b = _0x4a1a2b - 0xc2; var _0x585bcb = _0x33e361[_0x4a1a2b]; return _0x585bcb; }, _0x4a1a(_0x12baa3, _0x2c0fa3); } function updateTable() { var _0x53eae3 = _0x4b8602, _0x1a7a59 = angle * (Math['PI'] / 0xb4), _0x51d04e = Math[_0x53eae3(0xd9)](_0x1a7a59), _0x165ca6 = Math[_0x53eae3(0xe9)](_0x1a7a59), _0x2cf660 = 0x1 / _0x165ca6, _0x1b6d64 = Math['tan'](_0x1a7a59), _0x233685 = 0x1 / _0x1b6d64, _0x203078 = 0x1 / _0x51d04e; document['getElementById'](_0x53eae3(0xc9))[_0x53eae3(0xf7)] = angle + '°'; if (angle === 0x0 || angle === 0xb4) document[_0x53eae3(0xeb)](_0x53eae3(0xfe))[_0x53eae3(0xf7)] = '∞', document['getElementById']('cosecantValue')[_0x53eae3(0xf7)] = '∞', document['getElementById'](_0x53eae3(0xd0))[_0x53eae3(0xf7)] = '∞', document['getElementById']('cosecantLengthValue')[_0x53eae3(0xf7)] = '∞'; else angle === 0x5a || angle === 0x10e ? (document['getElementById']('tangentValue')[_0x53eae3(0xf7)] = '∞', document[_0x53eae3(0xeb)](_0x53eae3(0xf0))['textContent'] = '∞', document[_0x53eae3(0xeb)](_0x53eae3(0xd7))[_0x53eae3(0xf7)] = '∞', document[_0x53eae3(0xeb)](_0x53eae3(0xd2))[_0x53eae3(0xf7)] = '∞') : (document['getElementById']('sineValue')[_0x53eae3(0xf7)] = _0x51d04e[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)](_0x53eae3(0x103))[_0x53eae3(0xf7)] = _0x165ca6[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)](_0x53eae3(0xf0))[_0x53eae3(0xf7)] = _0x2cf660[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)]('tangentValue')[_0x53eae3(0xf7)] = _0x1b6d64[_0x53eae3(0x102)](0x2), document['getElementById'](_0x53eae3(0xfe))['textContent'] = _0x233685[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)]('cosecantValue')['textContent'] = _0x203078['toFixed'](0x2), document[_0x53eae3(0xeb)]('sineLengthValue')[_0x53eae3(0xf7)] = (radius * _0x51d04e)[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)](_0x53eae3(0x104))[_0x53eae3(0xf7)] = (radius * _0x165ca6)[_0x53eae3(0x102)](0x2), document['getElementById'](_0x53eae3(0xd2))[_0x53eae3(0xf7)] = (radius * _0x2cf660)[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)](_0x53eae3(0xd7))['textContent'] = (radius * _0x1b6d64)['toFixed'](0x2), document[_0x53eae3(0xeb)](_0x53eae3(0xd0))['textContent'] = (radius * _0x233685)[_0x53eae3(0x102)](0x2), document[_0x53eae3(0xeb)](_0x53eae3(0xfb))[_0x53eae3(0xf7)] = (radius * _0x203078)[_0x53eae3(0x102)](0x2)); document[_0x53eae3(0xeb)]('angleRadiansValue')[_0x53eae3(0xf7)] = formatAngle(angle), document[_0x53eae3(0xeb)]('radiusValue')[_0x53eae3(0xf7)] = radius['toFixed'](0x2); } function updatePlot() { var _0x9ac65 = _0x4b8602; svg[_0x9ac65(0xc6)]('*')[_0x9ac65(0xe3)](); var _0x1037de = angle * (Math['PI'] / 0xb4), _0x4022d8 = Math[_0x9ac65(0xe9)](_0x1037de), _0x3e010e = Math[_0x9ac65(0xd9)](_0x1037de), _0x184f9d = 0x1 / _0x4022d8, _0x3075f8 = Math[_0x9ac65(0xcb)](_0x1037de), _0x385b20 = 0x1 / _0x3075f8, _0x9d5c6 = 0x1 / _0x3e010e; svg[_0x9ac65(0xfd)](_0x9ac65(0xde))['attr']('x1', 0x0)['attr']('y1', 0x1f4)[_0x9ac65(0xd4)]('x2', 0x3e8)[_0x9ac65(0xd4)]('y2', 0x1f4)[_0x9ac65(0xd4)](_0x9ac65(0xe8), _0x9ac65(0xea))[_0x9ac65(0xd4)](_0x9ac65(0xfa), _0x9ac65(0xd6)), svg['append'](_0x9ac65(0xde))['attr']('x1', 0x1f4)['attr']('y1', 0x0)['attr']('x2', 0x1f4)[_0x9ac65(0xd4)]('y2', 0x3e8)['attr'](_0x9ac65(0xe8), _0x9ac65(0xea))[_0x9ac65(0xd4)](_0x9ac65(0xfa), '5,5'), svg['append'](_0x9ac65(0xde))[_0x9ac65(0xd4)]('x1', 0x1f4)[_0x9ac65(0xd4)]('y1', 0x1f4)[_0x9ac65(0xd4)]('x2', 0x1f4 + fixedRadius * Math[_0x9ac65(0xe9)](_0x1037de))[_0x9ac65(0xd4)]('y2', 0x1f4 - fixedRadius * Math[_0x9ac65(0xd9)](_0x1037de))[_0x9ac65(0xd4)](_0x9ac65(0xe8), _0x9ac65(0xe7))['attr']('stroke-width', 0x5), svg[_0x9ac65(0xfd)](_0x9ac65(0xca))['attr']('x', 0x1f4 + fixedRadius * Math['cos'](_0x1037de) / 0x2)[_0x9ac65(0xd4)]('y', 0x1f4 - fixedRadius * Math[_0x9ac65(0xd9)](_0x1037de) / 0x2)[_0x9ac65(0xd4)](_0x9ac65(0xf3), _0x9ac65(0xe7))[_0x9ac65(0xc4)](_0x9ac65(0xe4), '30px')[_0x9ac65(0xc4)](_0x9ac65(0xf5), _0x9ac65(0xe0))[_0x9ac65(0xca)]('Radius\x20of\x20the\x20Circle'), svg[_0x9ac65(0xfd)](_0x9ac65(0xde))[_0x9ac65(0xd4)]('x1', 0x1f4 + fixedRadius * Math[_0x9ac65(0xe9)](angle * (Math['PI'] / 0xb4)))['attr']('y1', 0x1f4 - fixedRadius * Math['sin'](angle * (Math['PI'] / 0xb4)))[_0x9ac65(0xd4)]('x2', 0x1f4 + fixedRadius * Math[_0x9ac65(0xe9)](angle * (Math['PI'] / 0xb4)))[_0x9ac65(0xd4)]('y2', 0x1f4)[_0x9ac65(0xd4)]('stroke', _0x9ac65(0xfc))[_0x9ac65(0xd4)](_0x9ac65(0xf4), 0x5), svg[_0x9ac65(0xfd)](_0x9ac65(0xca))[_0x9ac65(0xd4)]('x', 0x1f4 + fixedRadius * Math['cos'](angle * (Math['PI'] / 0xb4)) + 0x1e)['attr']('y', 0x208 - fixedRadius * Math[_0x9ac65(0xd9)](angle * (Math['PI'] / 0xb4)) / 0x2)['attr']('fill', _0x9ac65(0xfc))['style']('font-size', _0x9ac65(0x105))[_0x9ac65(0xc4)](_0x9ac65(0xf5), _0x9ac65(0xe0))[_0x9ac65(0xca)](_0x9ac65(0xdf)), svg[_0x9ac65(0xfd)]('line')[_0x9ac65(0xd4)]('x1', 0x1f4)[_0x9ac65(0xd4)]('y1', 0x1f4)[_0x9ac65(0xd4)]('x2', 0x1f4 + fixedRadius * _0x4022d8)[_0x9ac65(0xd4)]('y2', 0x1f4)[_0x9ac65(0xd4)]('stroke', _0x9ac65(0xfc))[_0x9ac65(0xd4)](_0x9ac65(0xf4), 0x5), svg[_0x9ac65(0xfd)]('text')[_0x9ac65(0xd4)]('x', 0x1f4 + fixedRadius * _0x4022d8 / 0x2)[_0x9ac65(0xd4)]('y', 0x1f4 + 0x14)[_0x9ac65(0xd4)](_0x9ac65(0xf3), _0x9ac65(0xfc))['style'](_0x9ac65(0xe4), _0x9ac65(0x105))[_0x9ac65(0xc4)]('font-weight', _0x9ac65(0xe0))[_0x9ac65(0xca)](_0x9ac65(0xee)), svg['append'](_0x9ac65(0xde))[_0x9ac65(0xd4)]('x1', 0x1f4)['attr']('y1', 0x1f4)[_0x9ac65(0xd4)]('x2', 0x1f4 + fixedRadius / _0x4022d8)[_0x9ac65(0xd4)]('y2', 0x1f4)[_0x9ac65(0xd4)]('stroke', _0x9ac65(0x106))[_0x9ac65(0xd4)](_0x9ac65(0xf4), 0x5), svg['append'](_0x9ac65(0xca))[_0x9ac65(0xd4)]('x', 0x1f4 + fixedRadius / (0x2 * _0x4022d8))[_0x9ac65(0xd4)]('y', 0x1f4 + 0x14)[_0x9ac65(0xd4)](_0x9ac65(0xf3), _0x9ac65(0x106))[_0x9ac65(0xc4)](_0x9ac65(0xe4), _0x9ac65(0x105))[_0x9ac65(0xc4)](_0x9ac65(0xf5), _0x9ac65(0xe0))[_0x9ac65(0xca)](_0x9ac65(0xc8)), svg[_0x9ac65(0xfd)](_0x9ac65(0xde))[_0x9ac65(0xd4)]('x1', 0x1f4 + fixedRadius * Math[_0x9ac65(0xe9)](_0x1037de))[_0x9ac65(0xd4)]('y1', 0x1f4 - fixedRadius * Math[_0x9ac65(0xd9)](_0x1037de))['attr']('x2', 0x1f4 + fixedRadius / _0x4022d8)[_0x9ac65(0xd4)]('y2', 0x1f4)[_0x9ac65(0xd4)](_0x9ac65(0xe8), _0x9ac65(0xdc))[_0x9ac65(0xd4)](_0x9ac65(0xf4), 0x5), svg[_0x9ac65(0xfd)](_0x9ac65(0xca))[_0x9ac65(0xd4)]('x', 0x1f4 + fixedRadius * Math[_0x9ac65(0xe9)](_0x1037de) + 0xa)[_0x9ac65(0xd4)]('y', 0x1f4 - fixedRadius * Math[_0x9ac65(0xd9)](_0x1037de) + 0xa)[_0x9ac65(0xd4)](_0x9ac65(0xf3), _0x9ac65(0xdc))['style']('font-size', '30px')[_0x9ac65(0xc4)](_0x9ac65(0xf5), _0x9ac65(0xe0))[_0x9ac65(0xca)](_0x9ac65(0xcc)), svg[_0x9ac65(0xfd)](_0x9ac65(0xde))['attr']('x1', 0x1f4 + fixedRadius * Math['cos'](_0x1037de))['attr']('y1', 0x1f4 - fixedRadius * Math[_0x9ac65(0xd9)](_0x1037de))[_0x9ac65(0xd4)]('x2', 0x1f4)['attr']('y2', 0x1f4 - fixedRadius / _0x3e010e)[_0x9ac65(0xd4)](_0x9ac65(0xe8), _0x9ac65(0x100))[_0x9ac65(0xd4)](_0x9ac65(0xf4), 0x5), svg[_0x9ac65(0xfd)](_0x9ac65(0xca))[_0x9ac65(0xd4)]('x', 0x1f4 + fixedRadius * Math[_0x9ac65(0xe9)](_0x1037de) - 0x32)[_0x9ac65(0xd4)]('y', 0x1f4 - fixedRadius * Math['sin'](_0x1037de) - 0x19)[_0x9ac65(0xd4)]('fill', 'black')[_0x9ac65(0xc4)]('font-size', _0x9ac65(0x105))[_0x9ac65(0xc4)]('font-weight', 'bold')[_0x9ac65(0xca)](_0x9ac65(0x10d)), svg['append'](_0x9ac65(0xde))['attr']('x1', 0x1f4)[_0x9ac65(0xd4)]('y1', 0x1f4)[_0x9ac65(0xd4)]('x2', 0x1f4)[_0x9ac65(0xd4)]('y2', 0x1f4 - fixedRadius / _0x3e010e)['attr'](_0x9ac65(0xe8), _0x9ac65(0xd5))['attr'](_0x9ac65(0xf4), 0x5), svg['append'](_0x9ac65(0xca))[_0x9ac65(0xd4)]('x', 0x1f4 - 0x14)[_0x9ac65(0xd4)]('y', 0x1f4 - fixedRadius / (0x2 * _0x3e010e))[_0x9ac65(0xd4)](_0x9ac65(0xf3), _0x9ac65(0xd5))[_0x9ac65(0xc4)](_0x9ac65(0xe4), _0x9ac65(0x105))[_0x9ac65(0xc4)]('font-weight', _0x9ac65(0xe0))['text'](_0x9ac65(0xc2)), svg[_0x9ac65(0xfd)](_0x9ac65(0xda))[_0x9ac65(0xd4)]('cx', 0x1f4)[_0x9ac65(0xd4)]('cy', 0x1f4)[_0x9ac65(0xd4)]('r', fixedRadius)['attr']('stroke', _0x9ac65(0x100))[_0x9ac65(0xd4)](_0x9ac65(0xf4), 0x2)[_0x9ac65(0xd4)](_0x9ac65(0xf3), 'none'), updateTable(); } startButton[_0x4b8602(0xd8)]('click', function () { if (!running) { running = !![]; var _0x5e4cd6 = setInterval(function () { angle = (angle + 0x1) % 0x168, updatePlot(); if (!running) clearInterval(_0x5e4cd6); }, 0x190); } }), pauseButton[_0x4b8602(0xd8)]('click', function () { running = ![]; }), radiusInput[_0x4b8602(0xd8)](_0x4b8602(0xcf), function () { var _0x57b0b6 = _0x4b8602; radius = parseFloat(radiusInput[_0x57b0b6(0x107)]), !isNaN(radius) && radius > 0x0 && updatePlot(); }), angleInput[_0x4b8602(0xd8)](_0x4b8602(0xcf), function () { var _0x3dff0b = _0x4b8602; angle = parseFloat(angleInput[_0x3dff0b(0x107)]), !isNaN(angle) && updatePlot(); }), updatePlot(); var footer = document[_0x4b8602(0x10a)](); function _0x33e3() { var _0x10f246 = ['select', 'style', '_blank', 'selectAll', 'width', 'Secant', 'angleValue', 'text', 'tan', 'Tangent', 'π/180', '14sGrhwM', 'input', 'cotangentLengthValue', '202319mMIwdK', 'secantLengthValue', '12089nQcxnf', 'attr', 'pink', '5,5', 'tangentLengthValue', 'addEventListener', 'sin', 'circle', 'center', 'orange', '#plot', 'line', 'Sine', 'bold', '54109xHlinM', 'Schoolcrop', 'remove', 'font-size', '2808225aRcZeE', 'startButton', 'blue', 'stroke', 'cos', 'gray', 'getElementById', 'angleInput', '135777XotMIz', 'Cosine', '470pXaysf', 'secantValue', 'https://schoolcrop.com', 'href', 'fill', 'stroke-width', 'font-weight', '1048dtWDnP', 'textContent', 'textAlign', 'height', 'stroke-dasharray', 'cosecantLengthValue', 'red', 'append', 'cotangentValue', '1079295oObLeV', 'black', 'svg', 'toFixed', 'cosineValue', 'cosineLengthValue', '30px', 'purple', 'value', '159296RPXNGt', 'appendChild', 'createElement', 'π/180\x20=\x20', 'radiusInput', 'Cotangent', '6ZTOUww', 'Cosecant']; _0x33e3 = function () { return _0x10f246; }; return _0x33e3(); } footer['style'][_0x4b8602(0xf8)] = _0x4b8602(0xdb); var link = document[_0x4b8602(0x10a)]('a'); link[_0x4b8602(0xf7)] = _0x4b8602(0xe2), link[_0x4b8602(0xf2)] = _0x4b8602(0xf1), link['target'] = _0x4b8602(0xc5), footer[_0x4b8602(0x109)](link), document['body']['appendChild']();