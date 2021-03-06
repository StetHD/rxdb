import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
/**
 * this plugin adds the checkAdapter-function to rxdb
 * you can use it to check if the given adapter is working in the current environmet
 */
import PouchDB from '../pouch-db';
import * as util from '../util';

export var checkAdapter = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(adapter) {
        var id, refoundDoc, pouch;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = 'rxdb-test-adapter-' + util.generate_id();
                        refoundDoc = null;
                        pouch = void 0;
                        _context.prev = 3;

                        pouch = new PouchDB(id, util.adapterObject(adapter), {
                            auto_compaction: false, // no compaction because this only stores local documents
                            revs_limit: 1
                        });
                        _context.next = 7;
                        return pouch.info();

                    case 7:
                        _context.next = 9;
                        return pouch.put({
                            _id: id,
                            value: true
                        });

                    case 9:
                        _context.next = 11;
                        return pouch.get(id);

                    case 11:
                        refoundDoc = _context.sent;
                        _context.next = 17;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context['catch'](3);
                        return _context.abrupt('return', false);

                    case 17:
                        _context.prev = 17;
                        _context.next = 20;
                        return pouch.destroy();

                    case 20:
                        _context.next = 24;
                        break;

                    case 22:
                        _context.prev = 22;
                        _context.t1 = _context['catch'](17);

                    case 24:
                        if (!(refoundDoc && refoundDoc.value)) {
                            _context.next = 28;
                            break;
                        }

                        return _context.abrupt('return', true);

                    case 28:
                        return _context.abrupt('return', false);

                    case 29:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 14], [17, 22]]);
    }));

    return function checkAdapter(_x) {
        return _ref.apply(this, arguments);
    };
}();

export var rxdb = true;
export var prototypes = {};
export var overwritable = {
    checkAdapter: checkAdapter
};

export default {
    rxdb: rxdb,
    prototypes: prototypes,
    overwritable: overwritable
};