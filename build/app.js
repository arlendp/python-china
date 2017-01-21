webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(62);
	module.exports = __webpack_require__(64);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	(function (i, s, o, g, r, a, m) {
	  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	    (i[r].q = i[r].q || []).push(arguments);
	  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	
	if (ZERQU.GA) {
	  ga('create', ZERQU.GA);
	}
	
	ga('create', 'UA-21475122-6', 'auto', { 'name': 'z' });
	ga('z.set', 'dimension1', 'qingcheng');
	ga('z.send', 'pageview');
	
	window.addEventListener('error', function (e) {
	  ga('z.send', 'event', e.name, e.message, e.valueOf(), e.lineno);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _keys = __webpack_require__(4);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _vue = __webpack_require__(39);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(40);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _App = __webpack_require__(41);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _filters = __webpack_require__(52);
	
	var filters = _interopRequireWildcard(_filters);
	
	var _views = __webpack_require__(53);
	
	var _views2 = _interopRequireDefault(_views);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var zerqu = window.ZERQU || {};
	if (process.env.NODE_ENV == 'development') {
		window.ga = function () {};
		_vue2.default.config.debug = true;
	}
	
	__webpack_require__(54);
	__webpack_require__(56);
	
	Object.defineProperty(_vue2.default.prototype, '$site', {
		get: function get() {
			return zerqu.site || { name: 'ZERQU' };
		}
	});
	
	(0, _keys2.default)(filters).forEach(function (v) {
		_vue2.default.filter(v, filters[v]);
	});
	
	_vue2.default.use(_vueRouter2.default);
	
	var router = new _vueRouter2.default({
		hashbang: false,
		history: true,
		saveScrollPosition: true
	});
	
	router.map(_views2.default);
	
	router.start(_App2.default, "#app");
	__webpack_require__(58).register(router.app);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(26).Object.keys;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(7)
	  , $keys    = __webpack_require__(9);
	
	__webpack_require__(24)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(8);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(10)
	  , enumBugKeys = __webpack_require__(23);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(11)
	  , toIObject    = __webpack_require__(12)
	  , arrayIndexOf = __webpack_require__(15)(false)
	  , IE_PROTO     = __webpack_require__(19)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(13)
	  , defined = __webpack_require__(8);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(14);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(12)
	  , toLength  = __webpack_require__(16)
	  , toIndex   = __webpack_require__(18);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(17)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(17)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(20)('keys')
	  , uid    = __webpack_require__(22);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(21)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(25)
	  , core    = __webpack_require__(26)
	  , fails   = __webpack_require__(35);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(21)
	  , core      = __webpack_require__(26)
	  , ctx       = __webpack_require__(27)
	  , hide      = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 26 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(28);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(30)
	  , createDesc = __webpack_require__(38);
	module.exports = __webpack_require__(34) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(37)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function(){
	  return Object.defineProperty(__webpack_require__(36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(35)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32)
	  , document = __webpack_require__(21).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(32);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(42)
	__vue_script__ = __webpack_require__(46)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6e915be7/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Logo = __webpack_require__(47);
	
	var _Logo2 = _interopRequireDefault(_Logo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {
	        Logo: _Logo2.default
	    }
	};
	// </script>
	// <style>
	// header {
	// 	width: 1100px;
	//     div {
	//         max-width: 1100px;
	//         margin: 0 auto;
	//     }
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//     <header id="header">
	//         <div class="container">
	//             <div class="navs">
	//                 <div class="logo">
	//                     <a class="site-logo">
	//                         <logo></logo>
	//                     </a>
	//                 </div>
	//             </div>
	//         </div>
	//     </header>
	// </template>
	// <script>

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(48)
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-405f508a/Logo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"logo\" _v-405f508a=\"\">\n    <div _v-405f508a=\"\"><span class=\"left-yellow\" _v-405f508a=\"\"></span><span class=\"right-green\" _v-405f508a=\"\"></span></div>\n    <div _v-405f508a=\"\"><span class=\"full-green\" _v-405f508a=\"\"></span></div>\n    <div _v-405f508a=\"\"><span class=\"left-green\" _v-405f508a=\"\"></span><span class=\"right-red\" _v-405f508a=\"\"></span></div>\n</div>\n";

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n<header id=\"header\">\n    <div class=\"container\">\n        <div class=\"navs\">\n            <div class=\"logo\">\n                <a class=\"site-logo\">\n                    <logo></logo>\n                </a>\n            </div>\n        </div>\n    </div>\n</header>\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.timeago = timeago;
	exports.urlize = urlize;
	exports.logo = logo;
	function timeago(time) {
	    time = new Date(time);
	    var delta = parseInt((new Date() - time) / 1000, 10);
	    if (delta <= 0) return 'just now';
	
	    var minutes = delta / 60;
	    if (minutes < 1) return 'less than a minute ago';
	    if (minutes < 2) return 'about a minute ago';
	
	    var hours = minutes / 60;
	    if (hours < 1) return parseInt(minutes, 10) + ' minutes ago';
	    if (hours < 1.5) return 'about an hour ago';
	
	    var days = hours / 24;
	    if (days < 1) return Math.round(hours) + ' hours ago';
	    if (days < 7) return parseInt(days, 10) + ' days ago';
	
	    var month = time.getMonth() + 1;
	    if (month < 10) month = '0' + month;
	    var date = time.getDate();
	    if (date < 10) date = '0' + date;
	    return [time.getFullYear(), month, date].join('-');
	}
	
	function urlize(text) {
	    if (!text) return '';
	    var pattern = /https?:\/\/[^\s<]+[^<.,:;"')\]\s]/g;
	    return text.replace(pattern, function (u) {
	        var t = u.replace('http://', '');
	        return '<a href="' + u + '">' + t + '</a>';
	    });
	}
	
	function logo(style) {
	    style = style || {};
	    var rv = { 'background-color': style.color || '#222221' };
	    if (style.logo) {
	        rv['background-image'] = 'url(' + style.logo + ')';
	    }
	    return rv;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */,
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(4);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRY_CURRENT_USER_KEY = 'zq:try:me';
	
	var http = __webpack_require__(59);
	
	http.defaults.afterRequest = function (req, duration) {
	    ga('send', 'timing', 'AJAX', req.url, duration, req.status);
	};
	
	exports.register = function (app) {
	    trackUser.app = app;
	
	    http.defaults.error = function (resp, status) {
	        if (status === 401) {
	            cleanUser();
	            if (!sessionStorage[TRY_CURRENT_USER_KEY]) return;
	        }
	
	        if (resp.error_description) {
	            var type = 'error';
	            if (status === 429) {
	                type = 'warn';
	            }
	            app.show(type, resp.error_description);
	        } else if (status >= 500) {
	            app.show('error', 'There is a server error.');
	        }
	    };
	    if (sessionStorage[TRY_CURRENT_USER_KEY]) return;
	
	    exports.user.profile('me').error(function () {
	        sessionStorage[TRY_CURRENT_USER_KEY] = '1';
	    });
	};
	
	exports.cafe = {
	    list: function list(cb) {
	        ga('send', 'pageview', { title: 'Cafe List' });
	        http.get('/api/cafes?count=100', cb);
	    },
	    url: function url(slug) {
	        return '/api/cafes/' + slug;
	    },
	
	    view: function view(slug, cb) {
	        return http.get(this.url(slug), function (resp) {
	            if (resp.membership && resp.membership.label !== 'visitor') {
	                resp.is_following = true;
	            }
	            cb(resp);
	            ga('send', 'pageview', { title: resp.name });
	        });
	    },
	
	    topics: function topics(slug, page, cb) {
	        var url = this.url(slug) + '/topics';
	        if (page) {
	            url += '?page=' + page;
	        }
	        http.get(url, cb);
	    },
	
	    users: function users(slug, page, cb) {
	        var url = this.url(slug) + '/users';
	        if (page) {
	            url += '?page=' + page;
	        }
	        http.get(url, cb);
	    },
	
	    join: function join(slug, cb) {
	        http.post(this.url(slug) + '/users', cb);
	    },
	
	    leave: function leave(slug, cb) {
	        http.del(this.url(slug) + '/users', cb);
	    }
	};
	
	exports.timeline = function (params, cb) {
	    var url = '/api/topics/timeline';
	    ga('send', 'pageview', { title: 'Home' });
	    http.get(url, params, cb);
	};
	
	exports.preview = function (text, cb) {
	    http.post('/api/preview', { text: text }, cb);
	};
	
	exports.upload = function (file, transform, cb) {
	    var data = { 'content-type': file.type };
	    if (transform) {
	        data['image-type'] = transform;
	    }
	    http.get('/api/upload', data, function (resp) {
	        var body = new FormData();
	        body.append(resp.name, file);
	        (0, _keys2.default)(resp.payload).forEach(function (k) {
	            body.append(k, resp.payload[k]);
	        });
	        var value = resp.value;
	        http.post(resp.action, body, function (resp) {
	            resp.value = resp.value || value;
	            cb(resp);
	        });
	    });
	};
	
	exports.topic = {
	    create: function create(slug, payload, cb) {
	        var url = '/api/cafes/' + slug + '/topics';
	        http.post(url, payload, cb);
	    },
	
	    url: function url(tid) {
	        return '/api/topics/' + tid;
	    },
	    view: function view(tid, cb) {
	        return http.get(this.url(tid), function (resp) {
	            cb(resp);
	            ga('send', 'pageview', { title: resp.title });
	        });
	    },
	    viewRaw: function viewRaw(tid, cb) {
	        http.get(this.url(tid) + '?content=raw', function (resp) {
	            if (!resp.link) {
	                resp.link = '';
	            }
	            cb(resp);
	            ga('send', 'pageview', { title: 'Edit ' + resp.title });
	        });
	    },
	    update: function update(tid, payload, cb) {
	        http.post(this.url(tid), payload, cb);
	    },
	    read: function read(tid, percent, cb) {
	        var url = this.url(tid) + '/read';
	        http.post(url, { percent: percent }, cb);
	    },
	    like: function like(tid, cb) {
	        http.post(this.url(tid) + '/likes', cb);
	    },
	    unlike: function unlike(tid, cb) {
	        http.del(this.url(tid) + '/likes', cb);
	    },
	    comments: function comments(tid, cursor, cb) {
	        var url = this.url(tid) + '/comments';
	        var params = { order: 'asc' };
	        if (cursor) {
	            params.cursor = cursor;
	        }
	        http.get(url, params, cb);
	    }
	};
	
	exports.comment = {
	    url: function url(comment) {
	        return '/api/topics/' + comment.topic_id + '/comments/' + comment.id;
	    },
	    create: function create(tid, payload, cb) {
	        var url = '/api/topics/' + tid + '/comments';
	        http.post(url, payload, cb);
	    },
	    delete: function _delete(comment, cb) {
	        http.del(this.url(comment), cb);
	    },
	    like: function like(comment, cb) {
	        http.post(this.url(comment) + '/likes', cb);
	    },
	    unlike: function unlike(comment, cb) {
	        http.del(this.url(comment) + '/likes', cb);
	    },
	    flag: function flag(comment, cb) {
	        http.post(this.url(comment) + '/flag', cb);
	    }
	};
	
	exports.user = {
	    login: function login(data, cb) {
	        delete sessionStorage[TRY_CURRENT_USER_KEY];
	        var rv = {};
	        if (data.permanent) {
	            rv.permanent = 'yes';
	        }
	        var headers = {
	            'Authorization': 'Basic ' + btoa(data.username + ':' + data.password)
	        };
	        return http.post('/session', rv, function (user) {
	            trackUser(user);
	            cb && cb(user);
	        }, { headers: headers });
	    },
	    signup: function signup(email, cb) {
	        return http.post('/session/new', { email: email }, cb);
	    },
	    logout: function logout(cb) {
	        cleanUser();
	        http.del('/session', cb);
	    },
	
	    profile: function profile(uid, cb) {
	        var url = '/api/users/' + uid;
	
	        if (uid === 'me') {
	            return http.get(url, function (user) {
	                trackUser(user);
	                cb && cb(user);
	            });
	        } else {
	            ga('send', 'pageview', { title: uid });
	            return http.get(url, cb);
	        }
	    },
	
	    save: function save(data, cb) {
	        http.post('/api/users/me', data, function (user) {
	            trackUser(user);
	            cb && cb(user);
	        });
	    },
	
	    topics: function topics(uid, cursor, cb) {
	        var url = '/api/users/' + uid + '/topics';
	        if (cursor) {
	            url += '?cursor=' + cursor;
	        }
	        http.get(url, cb);
	    }
	};
	
	exports.notification = {
	    count: function count(cb) {
	        http.get('/api/users/me/notification/count', cb);
	    },
	    list: function list(cb) {
	        http.get('/api/users/me/notification?perpage=50', cb);
	    },
	    flush: function flush(cb) {
	        http.del('/api/users/me/notification', cb);
	    }
	};
	
	function trackUser(user) {
	    trackUser.app.user = user;
	    ga('set', 'userId', user.username);
	}
	trackUser.app = {};
	
	function cleanUser() {
	    trackUser.app.user = {};
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(60);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(4);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.get = get;
	exports.post = post;
	exports.del = del;
	exports.put = put;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaults = {};
	
	function request(url, options) {
	    var req = new XMLHttpRequest();
	    req.error = function (cb) {
	        options.error = cb;
	    };
	
	    var method = options.method || 'GET';
	    var data = options.data;
	    if (method === 'GET' && data) {
	        url += '?' + (0, _keys2.default)(data).filter(function (k) {
	            return k && data[k];
	        }).map(function (k) {
	            return k + '=' + data[k];
	        }).join('&');
	        data = null;
	    }
	    req.url = url;
	    req.open(method, url);
	
	    if (options.onload) {
	        req.onload = options.onload.bind(this);
	    }
	    if (options.onerror) {
	        req.onerror = options.onerror.bind(this);
	    }
	    if (options.onprogress) {
	        req.upload.onprogress = options.onprogress.bind(this);
	    }
	
	    var startTime = new Date().getTime();
	    var headers = {
	        'Content-Type': 'application/json',
	        'X-Requested-With': 'XMLHttpRequest',
	        'X-Requested-Time': startTime.toString()
	    };
	
	    if (window.FormData && data instanceof FormData) {
	        delete headers['Content-Type'];
	    } else if (data) {
	        data = (0, _stringify2.default)(data);
	    }
	
	    if (options.headers) {
	        (0, _keys2.default)(options.headers).forEach(function (k) {
	            headers[k] = options.headers[k];
	        });
	    }
	
	    (0, _keys2.default)(headers).forEach(function (k) {
	        req.setRequestHeader(k, headers[k]);
	    });
	
	    req.onreadystatechange = function () {
	        if (4 === req.readyState) {
	            var duration = new Date().getTime() - startTime;
	            req.data = parseResponse(req.responseText);
	            if (options.afterRequest) {
	                options.afterRequest(req, duration);
	            }
	            var type = req.status / 100 | 0;
	            if (2 === type) {
	                options.success && options.success(req.data, req);
	            } else {
	                options.error && options.error(req.data, req);
	            }
	        }
	    };
	
	    if (options.beforeRequest) {
	        options.beforeRequest(req);
	    }
	
	    if (data) {
	        req.send(data);
	    } else {
	        req.send();
	    }
	
	    return req;
	}
	
	function parseResponse(text) {
	    try {
	        return JSON.parse(text);
	    } catch (e) {
	        return text;
	    }
	}
	
	function extend(a, b) {
	    (0, _keys2.default)(b).forEach(function (k) {
	        if (!a[k]) {
	            a[k] = b[k];
	        }
	    });
	    return a;
	}
	
	function parseParams(method, data, success, options) {
	    if (typeof data === 'function') {
	        options = success;
	        success = data;
	        data = null;
	    }
	    options = extend({ method: method, data: data, success: success }, options || {});
	    return extend(options, defaults);
	}
	
	exports.defaults = defaults;
	
	exports.http = request;
	
	function get(url, data, success, options) {
	    return request(url, parseParams('GET', data, success, options));
	};
	
	function post(url, data, success, options) {
	    return request(url, parseParams('POST', data, success, options));
	};
	
	function del(url, data, success, options) {
	    return request(url, parseParams('DELETE', data, success, options));
	};
	
	function put(url, data, success, options) {
	    return request(url, parseParams('PUT', data, success, options));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(26)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map