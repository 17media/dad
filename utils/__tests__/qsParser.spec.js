'use strict';

var _qsParser = require('../qsParser');

var _qsParser2 = _interopRequireDefault(_qsParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('qsParser spec', function () {
  it('test location.search spec', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect((0, _qsParser2.default)('?foo=17&dad.now=2017-12-12 18:00&bar=media')['dad.now']).toBe('2017-12-12 18:00');

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('Node env by cli', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            expect((0, _qsParser2.default)('--foo&17&--dad.now=2017-12-12 00:00&--bar')['--dad.now']).toEqual('2017-12-12 00:00');

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  it('test if argv is passed', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            process.argv = [null, null, '--foo', '17', '--dad.now=2017-12-12 19', '--bar'];
            expect((0, _qsParser2.default)()).toEqual({
              '--foo': true,
              '--bar': true,
              17: true,
              '--dad.now': '2017-12-12 19'
            });

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));
});