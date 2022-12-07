(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es6.array.map.js'), require('core-js/modules/es6.object.keys.js'), require('core-js/modules/es6.symbol.js'), require('core-js/modules/es6.array.filter.js'), require('core-js/modules/es6.object.get-own-property-descriptor.js'), require('core-js/modules/es6.array.for-each.js'), require('core-js/modules/es7.object.get-own-property-descriptors.js'), require('core-js/modules/es6.object.define-properties.js'), require('core-js/modules/es6.object.define-property.js'), require('core-js/modules/es6.object.to-string.js'), require('core-js/modules/es6.promise.js'), require('axios')) :
	typeof define === 'function' && define.amd ? define(['core-js/modules/es6.array.map.js', 'core-js/modules/es6.object.keys.js', 'core-js/modules/es6.symbol.js', 'core-js/modules/es6.array.filter.js', 'core-js/modules/es6.object.get-own-property-descriptor.js', 'core-js/modules/es6.array.for-each.js', 'core-js/modules/es7.object.get-own-property-descriptors.js', 'core-js/modules/es6.object.define-properties.js', 'core-js/modules/es6.object.define-property.js', 'core-js/modules/es6.object.to-string.js', 'core-js/modules/es6.promise.js', 'axios'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["avatarid-js-sdk"] = factory(null, null, null, null, null, null, null, null, null, null, null, global.Axios));
})(this, (function (es6_array_map_js, es6_object_keys_js, es6_symbol_js, es6_array_filter_js, es6_object_getOwnPropertyDescriptor_js, es6_array_forEach_js, es7_object_getOwnPropertyDescriptors_js, es6_object_defineProperties_js, es6_object_defineProperty_js, es6_object_toString_js, es6_promise_js, Axios) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var asyncToGenerator = createCommonjsModule(function (module) {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }
	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	      args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);
	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }
	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }
	      _next(undefined);
	    });
	  };
	}
	module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _asyncToGenerator = unwrapExports(asyncToGenerator);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(_typeof_1);

	var toPrimitive = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];
	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPrimitive);

	var toPropertyKey = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];

	function _toPropertyKey(arg) {
	  var key = toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}
	module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPropertyKey);

	var createClass = createCommonjsModule(function (module) {
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass);

	var regeneratorRuntime$1 = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];
	function _regeneratorRuntime() {
	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return exports;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var exports = {},
	    Op = Object.prototype,
	    hasOwn = Op.hasOwnProperty,
	    defineProperty = Object.defineProperty || function (obj, key, desc) {
	      obj[key] = desc.value;
	    },
	    $Symbol = "function" == typeof Symbol ? Symbol : {},
	    iteratorSymbol = $Symbol.iterator || "@@iterator",
	    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  function define(obj, key, value) {
	    return Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }
	  try {
	    define({}, "");
	  } catch (err) {
	    define = function define(obj, key, value) {
	      return obj[key] = value;
	    };
	  }
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	      generator = Object.create(protoGenerator.prototype),
	      context = new Context(tryLocsList || []);
	    return defineProperty(generator, "_invoke", {
	      value: makeInvokeMethod(innerFn, self, context)
	    }), generator;
	  }
	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }
	  exports.wrap = wrap;
	  var ContinueSentinel = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf,
	    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }
	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if ("throw" !== record.type) {
	        var result = record.arg,
	          value = result.value;
	        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	      reject(record.arg);
	    }
	    var previousPromise;
	    defineProperty(this, "_invoke", {
	      value: function value(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }
	        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = "suspendedStart";
	    return function (method, arg) {
	      if ("executing" === state) throw new Error("Generator is already running");
	      if ("completed" === state) {
	        if ("throw" === method) throw arg;
	        return doneResult();
	      }
	      for (context.method = method, context.arg = arg;;) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	          if ("suspendedStart" === state) throw state = "completed", context.arg;
	          context.dispatchException(context.arg);
	        } else "return" === context.method && context.abrupt("return", context.arg);
	        state = "executing";
	        var record = tryCatch(innerFn, self, context);
	        if ("normal" === record.type) {
	          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        }
	        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method,
	      method = delegate.iterator[methodName];
	    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }
	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }
	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	          next = function next() {
	            for (; ++i < iterable.length;) {
	              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	            }
	            return next.value = undefined, next.done = !0, next;
	          };
	        return next.next = next;
	      }
	    }
	    return {
	      next: doneResult
	    };
	  }
	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (val) {
	    var object = Object(val),
	      keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    return keys.reverse(), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(skipTempReset) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
	        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
	      }
	    },
	    stop: function stop() {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(exception) {
	      if (this.done) throw exception;
	      var context = this;
	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	          record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	            hasFinally = hasOwn.call(entry, "finallyLoc");
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function complete(record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}
	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(regeneratorRuntime$1);

	// TODO(Babel 8): Remove this file.

	var runtime = regeneratorRuntime$1();
	var regenerator = runtime;

	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}

	var AvatarIdABI = [{
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "ercType",
	    "type": "uint256"
	  }],
	  "name": "addCollection",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "IAM",
	    "type": "address"
	  }],
	  "name": "addIAM",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "avatar721",
	    "type": "address"
	  }, {
	    "internalType": "string",
	    "name": "defaultUrl",
	    "type": "string"
	  }],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": false,
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "amount",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "NFT1155Received",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": false,
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "NFT721Received",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "previousOwner",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "newOwner",
	    "type": "address"
	  }],
	  "name": "OwnershipTransferred",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": false,
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "erdType",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "oldTokenId",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "address",
	    "name": "sender",
	    "type": "address"
	  }],
	  "name": "eSetAvatar",
	  "type": "event"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "internalType": "uint256",
	    "name": "amount",
	    "type": "uint256"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "onERC1155Received",
	  "outputs": [{
	    "internalType": "bytes4",
	    "name": "",
	    "type": "bytes4"
	  }],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "onERC721Received",
	  "outputs": [{
	    "internalType": "bytes4",
	    "name": "",
	    "type": "bytes4"
	  }],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }],
	  "name": "removeCollection",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "IAM",
	    "type": "address"
	  }],
	  "name": "removeIAM",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }],
	  "name": "resetAvatar",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "setAvatar",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "string",
	    "name": "defaultUrl",
	    "type": "string"
	  }],
	  "name": "setDefaultUrl",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "newOwner",
	    "type": "address"
	  }],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "erc1155",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "target",
	    "type": "address"
	  }, {
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }, {
	    "internalType": "uint256[]",
	    "name": "amounts",
	    "type": "uint256[]"
	  }],
	  "name": "urgencyWithdrawErc1155",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "target",
	    "type": "address"
	  }, {
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }],
	  "name": "urgencyWithdrawErc721",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "_defaultUrl",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }],
	  "name": "getAvatarId",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }],
	  "name": "getAvatarSet",
	  "outputs": [{
	    "components": [{
	      "internalType": "address",
	      "name": "collect",
	      "type": "address"
	    }, {
	      "internalType": "uint256",
	      "name": "tokenId",
	      "type": "uint256"
	    }],
	    "internalType": "struct AvatarProfile.AvatarSet[]",
	    "name": "",
	    "type": "tuple[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "collect",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }],
	  "name": "getAvatarUrl",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "getCollectSet",
	  "outputs": [{
	    "components": [{
	      "internalType": "address",
	      "name": "collect",
	      "type": "address"
	    }, {
	      "internalType": "uint256",
	      "name": "ercType",
	      "type": "uint256"
	    }],
	    "internalType": "struct AvatarProfile.CollectionSet[]",
	    "name": "",
	    "type": "tuple[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "owner",
	  "outputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}];

	var Avatar721ABI = [{
	  "inputs": [{
	    "internalType": "address",
	    "name": "minter",
	    "type": "address"
	  }],
	  "name": "addMinter",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "string",
	    "name": "name",
	    "type": "string"
	  }, {
	    "internalType": "string",
	    "name": "symbol",
	    "type": "string"
	  }, {
	    "internalType": "string",
	    "name": "base",
	    "type": "string"
	  }, {
	    "internalType": "string",
	    "name": "metatype",
	    "type": "string"
	  }],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	}, {
	  "inputs": [],
	  "name": "ApprovalCallerNotOwnerNorApproved",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "ApprovalQueryForNonexistentToken",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "ApprovalToCurrentOwner",
	  "type": "error"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "approve",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "ApproveToCaller",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "BalanceQueryForZeroAddress",
	  "type": "error"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "burn",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "components": [{
	      "internalType": "uint256",
	      "name": "id",
	      "type": "uint256"
	    }, {
	      "internalType": "address",
	      "name": "mintRule",
	      "type": "address"
	    }, {
	      "internalType": "address",
	      "name": "erc20",
	      "type": "address"
	    }, {
	      "internalType": "uint256",
	      "name": "erc20Amount",
	      "type": "uint256"
	    }, {
	      "internalType": "address",
	      "name": "erc721",
	      "type": "address"
	    }, {
	      "internalType": "uint256[]",
	      "name": "children721",
	      "type": "uint256[]"
	    }, {
	      "internalType": "address",
	      "name": "erc1155",
	      "type": "address"
	    }, {
	      "internalType": "uint256[]",
	      "name": "children1155",
	      "type": "uint256[]"
	    }, {
	      "internalType": "uint256[]",
	      "name": "amount1155",
	      "type": "uint256[]"
	    }],
	    "internalType": "struct IAvatar721.ExtraInfo",
	    "name": "info",
	    "type": "tuple"
	  }],
	  "name": "mint",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "MintToZeroAddress",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "MintZeroQuantity",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "MintedQueryForZeroAddress",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "OwnerQueryForNonexistentToken",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "TransferCallerNotOwnerNorApproved",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "TransferFromIncorrectOwner",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "TransferToNonERC721ReceiverImplementer",
	  "type": "error"
	}, {
	  "inputs": [],
	  "name": "TransferToZeroAddress",
	  "type": "error"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "approved",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "Approval",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "bool",
	    "name": "approved",
	    "type": "bool"
	  }],
	  "name": "ApprovalForAll",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "previousOwner",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "newOwner",
	    "type": "address"
	  }],
	  "name": "OwnershipTransferred",
	  "type": "event"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "minter",
	    "type": "address"
	  }],
	  "name": "removeMinter",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "safeBatchTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "safeTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "internalType": "bytes",
	    "name": "_data",
	    "type": "bytes"
	  }],
	  "name": "safeTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "internalType": "bool",
	    "name": "approved",
	    "type": "bool"
	  }],
	  "name": "setApprovalForAll",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "string",
	    "name": "uri",
	    "type": "string"
	  }],
	  "name": "setBaseURI",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "string",
	    "name": "metatype",
	    "type": "string"
	  }],
	  "name": "setMetaType",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "Transfer",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }],
	  "name": "TransferBatch",
	  "type": "event"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "transferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "newOwner",
	    "type": "address"
	  }],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "_baseUri",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "name": "_extraInfo",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }, {
	    "internalType": "address",
	    "name": "mintRule",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "erc20",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "erc20Amount",
	    "type": "uint256"
	  }, {
	    "internalType": "address",
	    "name": "erc721",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "erc1155",
	    "type": "address"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "_metatype",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "name": "_minters",
	  "outputs": [{
	    "internalType": "bool",
	    "name": "",
	    "type": "bool"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }],
	  "name": "balanceOf",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "getApproved",
	  "outputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "getExtraInfo",
	  "outputs": [{
	    "components": [{
	      "internalType": "uint256",
	      "name": "id",
	      "type": "uint256"
	    }, {
	      "internalType": "address",
	      "name": "mintRule",
	      "type": "address"
	    }, {
	      "internalType": "address",
	      "name": "erc20",
	      "type": "address"
	    }, {
	      "internalType": "uint256",
	      "name": "erc20Amount",
	      "type": "uint256"
	    }, {
	      "internalType": "address",
	      "name": "erc721",
	      "type": "address"
	    }, {
	      "internalType": "uint256[]",
	      "name": "children721",
	      "type": "uint256[]"
	    }, {
	      "internalType": "address",
	      "name": "erc1155",
	      "type": "address"
	    }, {
	      "internalType": "uint256[]",
	      "name": "children1155",
	      "type": "uint256[]"
	    }, {
	      "internalType": "uint256[]",
	      "name": "amount1155",
	      "type": "uint256[]"
	    }],
	    "internalType": "struct IAvatar721.ExtraInfo",
	    "name": "",
	    "type": "tuple"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "getOwnershipOf",
	  "outputs": [{
	    "components": [{
	      "internalType": "address",
	      "name": "addr",
	      "type": "address"
	    }, {
	      "internalType": "uint64",
	      "name": "startTimestamp",
	      "type": "uint64"
	    }, {
	      "internalType": "bool",
	      "name": "burned",
	      "type": "bool"
	    }],
	    "internalType": "struct ERC721A.TokenOwnership",
	    "name": "",
	    "type": "tuple"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }],
	  "name": "isApprovedForAll",
	  "outputs": [{
	    "internalType": "bool",
	    "name": "",
	    "type": "bool"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }],
	  "name": "listMyNFT",
	  "outputs": [{
	    "internalType": "uint256[]",
	    "name": "tokens",
	    "type": "uint256[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "addr",
	    "type": "address"
	  }],
	  "name": "mintedNumber",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "name",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "owner",
	  "outputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "ownerOf",
	  "outputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "bytes4",
	    "name": "interfaceId",
	    "type": "bytes4"
	  }],
	  "name": "supportsInterface",
	  "outputs": [{
	    "internalType": "bool",
	    "name": "",
	    "type": "bool"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "symbol",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "offset",
	    "type": "uint256"
	  }, {
	    "internalType": "uint256",
	    "name": "pageMax",
	    "type": "uint256"
	  }],
	  "name": "tokensInfoOfOwner",
	  "outputs": [{
	    "components": [{
	      "internalType": "uint256",
	      "name": "id",
	      "type": "uint256"
	    }, {
	      "internalType": "address",
	      "name": "mintRule",
	      "type": "address"
	    }, {
	      "internalType": "address",
	      "name": "erc20",
	      "type": "address"
	    }, {
	      "internalType": "uint256",
	      "name": "erc20Amount",
	      "type": "uint256"
	    }, {
	      "internalType": "address",
	      "name": "erc721",
	      "type": "address"
	    }, {
	      "internalType": "uint256[]",
	      "name": "children721",
	      "type": "uint256[]"
	    }, {
	      "internalType": "address",
	      "name": "erc1155",
	      "type": "address"
	    }, {
	      "internalType": "uint256[]",
	      "name": "children1155",
	      "type": "uint256[]"
	    }, {
	      "internalType": "uint256[]",
	      "name": "amount1155",
	      "type": "uint256[]"
	    }],
	    "internalType": "struct IAvatar721.ExtraInfo[]",
	    "name": "infos",
	    "type": "tuple[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "tokenURI",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "totalSupply",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}];

	var Avatar1155ABI = [{
	  "inputs": [{
	    "internalType": "address",
	    "name": "factory",
	    "type": "address"
	  }, {
	    "internalType": "string",
	    "name": "name",
	    "type": "string"
	  }, {
	    "internalType": "string",
	    "name": "symbol",
	    "type": "string"
	  }, {
	    "internalType": "string",
	    "name": "baseURI",
	    "type": "string"
	  }, {
	    "internalType": "string",
	    "name": "metatype",
	    "type": "string"
	  }],
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "bool",
	    "name": "approved",
	    "type": "bool"
	  }],
	  "name": "ApprovalForAll",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "previousOwner",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "newOwner",
	    "type": "address"
	  }],
	  "name": "OwnershipTransferred",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }, {
	    "indexed": false,
	    "internalType": "uint256[]",
	    "name": "values",
	    "type": "uint256[]"
	  }],
	  "name": "TransferBatch",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": true,
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "indexed": true,
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }, {
	    "indexed": false,
	    "internalType": "uint256",
	    "name": "value",
	    "type": "uint256"
	  }],
	  "name": "TransferSingle",
	  "type": "event"
	}, {
	  "anonymous": false,
	  "inputs": [{
	    "indexed": false,
	    "internalType": "string",
	    "name": "value",
	    "type": "string"
	  }, {
	    "indexed": true,
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }],
	  "name": "URI",
	  "type": "event"
	}, {
	  "inputs": [],
	  "name": "_baseURI",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "_metatype",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "name": "_minters",
	  "outputs": [{
	    "internalType": "bool",
	    "name": "",
	    "type": "bool"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "_name",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "_symbol",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "minter",
	    "type": "address"
	  }],
	  "name": "addMinter",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }],
	  "name": "balanceOf",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address[]",
	    "name": "accounts",
	    "type": "address[]"
	  }, {
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }],
	  "name": "balanceOfBatch",
	  "outputs": [{
	    "internalType": "uint256[]",
	    "name": "",
	    "type": "uint256[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "internalType": "uint256",
	    "name": "amount",
	    "type": "uint256"
	  }],
	  "name": "burn",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "internalType": "uint256[]",
	    "name": "tokenIds",
	    "type": "uint256[]"
	  }, {
	    "internalType": "uint256[]",
	    "name": "amounts",
	    "type": "uint256[]"
	  }],
	  "name": "burnBatch",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }],
	  "name": "holderCount",
	  "outputs": [{
	    "internalType": "uint256",
	    "name": "",
	    "type": "uint256"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }],
	  "name": "isApprovedForAll",
	  "outputs": [{
	    "internalType": "bool",
	    "name": "",
	    "type": "bool"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }, {
	    "internalType": "uint256",
	    "name": "amount",
	    "type": "uint256"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "mint",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "account",
	    "type": "address"
	  }, {
	    "internalType": "uint256[]",
	    "name": "tokenIds",
	    "type": "uint256[]"
	  }, {
	    "internalType": "uint256[]",
	    "name": "amounts",
	    "type": "uint256[]"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "mintBatch",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "owner",
	  "outputs": [{
	    "internalType": "address",
	    "name": "",
	    "type": "address"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "minter",
	    "type": "address"
	  }],
	  "name": "removeMinter",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "renounceOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }, {
	    "internalType": "uint256[]",
	    "name": "amounts",
	    "type": "uint256[]"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "safeBatchTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "from",
	    "type": "address"
	  }, {
	    "internalType": "address",
	    "name": "to",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "id",
	    "type": "uint256"
	  }, {
	    "internalType": "uint256",
	    "name": "amount",
	    "type": "uint256"
	  }, {
	    "internalType": "bytes",
	    "name": "data",
	    "type": "bytes"
	  }],
	  "name": "safeTransferFrom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "operator",
	    "type": "address"
	  }, {
	    "internalType": "bool",
	    "name": "approved",
	    "type": "bool"
	  }],
	  "name": "setApprovalForAll",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "string",
	    "name": "baseURI",
	    "type": "string"
	  }],
	  "name": "setURI",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "bytes4",
	    "name": "interfaceId",
	    "type": "bytes4"
	  }],
	  "name": "supportsInterface",
	  "outputs": [{
	    "internalType": "bool",
	    "name": "",
	    "type": "bool"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "owner",
	    "type": "address"
	  }, {
	    "internalType": "uint256",
	    "name": "offset",
	    "type": "uint256"
	  }, {
	    "internalType": "uint256",
	    "name": "pageMax",
	    "type": "uint256"
	  }],
	  "name": "tokensOfOwner",
	  "outputs": [{
	    "components": [{
	      "internalType": "uint256",
	      "name": "id",
	      "type": "uint256"
	    }, {
	      "internalType": "uint256",
	      "name": "amount",
	      "type": "uint256"
	    }],
	    "internalType": "struct IAdorn1155.NftInfo1155[]",
	    "name": "nftInfos",
	    "type": "tuple[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [],
	  "name": "totalIds",
	  "outputs": [{
	    "internalType": "uint256[]",
	    "name": "ids",
	    "type": "uint256[]"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "address",
	    "name": "newOwner",
	    "type": "address"
	  }],
	  "name": "transferOwnership",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}, {
	  "inputs": [{
	    "internalType": "uint256",
	    "name": "tokenId",
	    "type": "uint256"
	  }],
	  "name": "uri",
	  "outputs": [{
	    "internalType": "string",
	    "name": "",
	    "type": "string"
	  }],
	  "stateMutability": "view",
	  "type": "function"
	}];

	var ContractsAddr = {
	  56: {
	    AvatarId: "0x905De1Ac381b330c2C187cea0f1685E85a844390",
	    '721': '0xa2b2a7774e29f13E17F95b0fc9c0722e7Be36E49',
	    '1155': '0x2DFEb752222ccceCB9BC0a934b02C3A86f633900'
	  },
	  97: {
	    AvatarId: "0x3d639DD5098D502C7a8C11F515678F57C706eb20",
	    '721': '0x5D392622E85d7F360711604E2EEdCde82d482913',
	    '1155': '0xC4f609c43448b462a042e5E5E9E2100D070A0E04'
	  }
	};

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(obj, key, value) {
	  key = toPropertyKey(key);
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _defineProperty = unwrapExports(defineProperty);

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	var apiAxios = Axios;
	apiAxios.defaults.baseURL = 'https://pandora.lifeform.cc/web_avatar';
	var axios = function axios(config) {
	  var configCom = _objectSpread$1({
	    method: config.method || 'get',
	    headers: {}
	  }, config);
	  if (!('authorization' in config) || config.authorization) {
	    var token = window.localStorage.getItem('wallet_auth');
	    configCom.headers.Authorization = "".concat(token || '');
	  }
	  return new Promise(function (resolve, reject) {
	    apiAxios(configCom).then(function (res) {
	      resolve(res);
	    })["catch"](function (err) {
	      reject(err);
	    });
	  });
	};

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	var baseUrl = 'https://test-api.lifeform.cc/api/v1';
	function getMyNFTList(_x) {
	  return _getMyNFTList.apply(this, arguments);
	}
	function _getMyNFTList() {
	  _getMyNFTList = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(params) {
	    return regenerator.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            return _context.abrupt("return", axios({
	              method: 'get',
	              url: baseUrl + '/nft/nfts_online_paged',
	              params: params
	            }));
	          case 1:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee);
	  }));
	  return _getMyNFTList.apply(this, arguments);
	}
	function getNftDetail(_x2) {
	  return _getNftDetail.apply(this, arguments);
	}
	function _getNftDetail() {
	  _getNftDetail = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(params) {
	    return regenerator.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            return _context2.abrupt("return", axios({
	              method: 'get',
	              url: baseUrl + '/nft/my_nft',
	              params: _objectSpread({}, params)
	            }));
	          case 1:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, _callee2);
	  }));
	  return _getNftDetail.apply(this, arguments);
	}

	var AvatarId = /*#__PURE__*/function () {
	  function AvatarId(provider) {
	    _classCallCheck(this, AvatarId);
	    this.chainId = '';
	    this.avatarIdContract = '';
	    this.collectAddress = '';
	    this.contract = '';
	    this.provider = provider;
	    if (!this.chainId || this.avatarIdContract || !this.contract) {
	      this.initialize();
	    }
	  }
	  _createClass(AvatarId, [{
	    key: "initialize",
	    value: function () {
	      var _initialize = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this.provider.eth.getChainId();
	              case 2:
	                this.chainId = _context.sent;
	                this.avatarIdContract = ContractsAddr[this.chainId]['AvatarId'];
	                if (this.chainId && this.avatarIdContract) {
	                  this.contract = new this.provider.eth.Contract(AvatarIdABI, this.avatarIdContract);
	                }
	              case 5:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	      function initialize() {
	        return _initialize.apply(this, arguments);
	      }
	      return initialize;
	    }()
	    /**
	       * set AvatarId
	       * @collect avatar's contract address
	       * @tokenId avatar id
	       * @addr owner address
	       * */
	  }, {
	    key: "setAvatar",
	    value: function () {
	      var _setAvatar = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(collect, tokenId, addr) {
	        return regenerator.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return this.initialize();
	              case 2:
	                if (collect) {
	                  this.collectAddress = collect;
	                } else {
	                  this.collectAddress = ContractsAddr[this.chainId]['721'];
	                }
	                _context2.next = 5;
	                return this.contract.methods.setAvatar(this.collectAddress, tokenId).send({
	                  from: addr
	                });
	              case 5:
	                return _context2.abrupt("return", _context2.sent);
	              case 6:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	      function setAvatar(_x, _x2, _x3) {
	        return _setAvatar.apply(this, arguments);
	      }
	      return setAvatar;
	    }()
	    /**
	      * reset AvatarId
	      * @addr owner address
	      * @collect avatar's contract address
	      * */
	  }, {
	    key: "resetAvatar",
	    value: function () {
	      var _resetAvatar = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(addr, collect) {
	        return regenerator.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.next = 2;
	                return this.initialize();
	              case 2:
	                if (collect) {
	                  this.collectAddress = collect;
	                } else {
	                  this.collectAddress = ContractsAddr[this.chainId]['721'];
	                }
	                _context3.next = 5;
	                return this.contract.methods.resetAvatar(this.collectAddress).send({
	                  from: addr
	                });
	              case 5:
	                return _context3.abrupt("return", _context3.sent);
	              case 6:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	      function resetAvatar(_x4, _x5) {
	        return _resetAvatar.apply(this, arguments);
	      }
	      return resetAvatar;
	    }()
	    /**
	      * get AvatarId details
	      * @collect avatar's contract address
	      * @addr owner address
	      * */
	  }, {
	    key: "getStakeAvatarDetails",
	    value: function () {
	      var _getStakeAvatarDetails = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(collect, addr) {
	        var _this = this;
	        return regenerator.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                _context5.next = 2;
	                return this.initialize();
	              case 2:
	                if (collect) {
	                  this.collectAddress = collect;
	                } else {
	                  this.collectAddress = ContractsAddr[this.chainId]['721'];
	                }
	                _context5.next = 5;
	                return this.contract.methods.getAvatarId(this.collectAddress, addr).call().then(function (res) {
	                  var tempParams = {
	                    chain_id: _this.chainId,
	                    token_id: res,
	                    contract: _this.collectAddress
	                  };
	                  getNftDetail(tempParams).then(function (res) {
	                    return {
	                      image: res.data.data.image,
	                      token_id: res.data.data.token_id
	                    };
	                  });
	                })["catch"](function () {
	                  var tempParams = {
	                    page: 0,
	                    size: 10,
	                    chain_id: _this.chainId,
	                    sort: '-updated_at',
	                    address: addr,
	                    contract: _this.collectAddress
	                  };
	                  return getMyNFTList(tempParams).then( /*#__PURE__*/function () {
	                    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(res) {
	                      var itemList;
	                      return regenerator.wrap(function _callee4$(_context4) {
	                        while (1) {
	                          switch (_context4.prev = _context4.next) {
	                            case 0:
	                              itemList = res.data.data.items;
	                              if (!((itemList === null || itemList === void 0 ? void 0 : itemList.length) > 0)) {
	                                _context4.next = 3;
	                                break;
	                              }
	                              return _context4.abrupt("return", {
	                                image: itemList[0].image,
	                                token_id: -1
	                              });
	                            case 3:
	                              _context4.next = 5;
	                              return _this.contract.methods._defaultUrl().call();
	                            case 5:
	                              _context4.t0 = _context4.sent;
	                              _context4.t1 = -1;
	                              return _context4.abrupt("return", {
	                                image: _context4.t0,
	                                token_id: _context4.t1
	                              });
	                            case 8:
	                            case "end":
	                              return _context4.stop();
	                          }
	                        }
	                      }, _callee4);
	                    }));
	                    return function (_x8) {
	                      return _ref.apply(this, arguments);
	                    };
	                  }());
	                });
	              case 5:
	                return _context5.abrupt("return", _context5.sent);
	              case 6:
	              case "end":
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));
	      function getStakeAvatarDetails(_x6, _x7) {
	        return _getStakeAvatarDetails.apply(this, arguments);
	      }
	      return getStakeAvatarDetails;
	    }()
	    /**
	       * get avatar list
	       * @collect avatar's contract address
	       * @addr owner address
	       * @page  select a page, start at 0
	       * @size page size
	       * */
	  }, {
	    key: "getAvatarList",
	    value: function () {
	      var _getAvatarList = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(collect, addr, page, size) {
	        var tempParams;
	        return regenerator.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                _context6.next = 2;
	                return this.initialize();
	              case 2:
	                if (collect) {
	                  this.collectAddress = collect;
	                } else {
	                  this.collectAddress = ContractsAddr[this.chainId]['721'];
	                }
	                tempParams = {
	                  page: page,
	                  size: size,
	                  chain_id: this.chainId,
	                  sort: '-updated_at',
	                  address: addr,
	                  contract: this.collectAddress
	                };
	                return _context6.abrupt("return", getMyNFTList(tempParams).then(function (res) {
	                  var itemList = res.data.data.items;
	                  if ((itemList === null || itemList === void 0 ? void 0 : itemList.length) > 0) {
	                    return itemList.map(function (item) {
	                      return {
	                        image: item.image,
	                        token_id: item.token_id
	                      };
	                    });
	                  }
	                  return [];
	                }));
	              case 5:
	              case "end":
	                return _context6.stop();
	            }
	          }
	        }, _callee6, this);
	      }));
	      function getAvatarList(_x9, _x10, _x11, _x12) {
	        return _getAvatarList.apply(this, arguments);
	      }
	      return getAvatarList;
	    }()
	    /**
	      * approve avatar
	      * @collect avatar's contract address
	      * @addr owner address
	      * @type collect type
	      * */
	  }, {
	    key: "approve",
	    value: function () {
	      var _approve = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8(collect, addr, type) {
	        var _this2 = this;
	        var collectContract;
	        return regenerator.wrap(function _callee8$(_context8) {
	          while (1) {
	            switch (_context8.prev = _context8.next) {
	              case 0:
	                _context8.next = 2;
	                return this.initialize();
	              case 2:
	                if (collect) {
	                  this.collectAddress = collect;
	                } else {
	                  this.collectAddress = ContractsAddr[this.chainId][type];
	                }
	                collectContract = new this.provider.eth.Contract(type === '721' ? Avatar721ABI : Avatar1155ABI, this.collectAddress);
	                _context8.next = 6;
	                return collectContract.methods.isApprovedForAll(addr, this.avatarIdContract).call().then( /*#__PURE__*/function () {
	                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(allowance) {
	                    return regenerator.wrap(function _callee7$(_context7) {
	                      while (1) {
	                        switch (_context7.prev = _context7.next) {
	                          case 0:
	                            if (allowance) {
	                              _context7.next = 5;
	                              break;
	                            }
	                            _context7.next = 3;
	                            return collectContract.methods.setApprovalForAll(_this2.avatarIdContract, true).send({
	                              from: addr
	                            }).then(function () {
	                              return true;
	                            })["catch"](function (err) {
	                              throw new Error("approve error" + err);
	                            });
	                          case 3:
	                            _context7.next = 6;
	                            break;
	                          case 5:
	                            return _context7.abrupt("return", true);
	                          case 6:
	                          case "end":
	                            return _context7.stop();
	                        }
	                      }
	                    }, _callee7);
	                  }));
	                  return function (_x16) {
	                    return _ref2.apply(this, arguments);
	                  };
	                }())["catch"](function (err) {
	                  throw new Error("approve error" + err);
	                });
	              case 6:
	              case "end":
	                return _context8.stop();
	            }
	          }
	        }, _callee8, this);
	      }));
	      function approve(_x13, _x14, _x15) {
	        return _approve.apply(this, arguments);
	      }
	      return approve;
	    }()
	  }]);
	  return AvatarId;
	}();

	return AvatarId;

}));
