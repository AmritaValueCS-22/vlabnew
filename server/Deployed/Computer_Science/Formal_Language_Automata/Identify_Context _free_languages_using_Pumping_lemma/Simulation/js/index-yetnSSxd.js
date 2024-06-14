(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ec = { exports: {} },
  Pl = {},
  Cc = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uo = Symbol.for("react.element"),
  Qp = Symbol.for("react.portal"),
  bp = Symbol.for("react.fragment"),
  Yp = Symbol.for("react.strict_mode"),
  Xp = Symbol.for("react.profiler"),
  Gp = Symbol.for("react.provider"),
  Zp = Symbol.for("react.context"),
  qp = Symbol.for("react.forward_ref"),
  Jp = Symbol.for("react.suspense"),
  eh = Symbol.for("react.memo"),
  th = Symbol.for("react.lazy"),
  Ha = Symbol.iterator;
function nh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ha && e[Ha]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var kc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jc = Object.assign,
  Nc = {};
function cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nc),
    (this.updater = n || kc);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tc() {}
Tc.prototype = cr.prototype;
function Is(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nc),
    (this.updater = n || kc);
}
var zs = (Is.prototype = new Tc());
zs.constructor = Is;
jc(zs, cr.prototype);
zs.isPureReactComponent = !0;
var Wa = Array.isArray,
  Oc = Object.prototype.hasOwnProperty,
  Ds = { current: null },
  Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Oc.call(t, r) && !Pc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: uo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ds.current,
  };
}
function rh(e, t) {
  return {
    $$typeof: uo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $s(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uo;
}
function oh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ka = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? oh("" + e.key)
    : t.toString(36);
}
function Vo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case uo:
          case Qp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Xl(i, 0) : r),
      Wa(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ka, "$&/") + "/"),
          Vo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          ($s(o) &&
            (o = rh(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ka, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Wa(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + Xl(l, s);
      i += Vo(l, t, n, a, o);
    }
  else if (((a = nh(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Xl(l, s++)), (i += Vo(l, t, n, a, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function So(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Vo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function lh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  Uo = { transition: null },
  ih = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: Uo,
    ReactCurrentOwner: Ds,
  };
W.Children = {
  map: So,
  forEach: function (e, t, n) {
    So(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      So(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      So(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$s(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = cr;
W.Fragment = bp;
W.Profiler = Xp;
W.PureComponent = Is;
W.StrictMode = Yp;
W.Suspense = Jp;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Ds.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Oc.call(t, a) &&
        !Pc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: uo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gp, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Rc;
W.createFactory = function (e) {
  var t = Rc.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: qp, render: e };
};
W.isValidElement = $s;
W.lazy = function (e) {
  return { $$typeof: th, _payload: { _status: -1, _result: e }, _init: lh };
};
W.memo = function (e, t) {
  return { $$typeof: eh, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Uo.transition;
  Uo.transition = {};
  try {
    e();
  } finally {
    Uo.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
W.useContext = function (e) {
  return _e.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
W.useId = function () {
  return _e.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return _e.current.useRef(e);
};
W.useState = function (e) {
  return _e.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return _e.current.useTransition();
};
W.version = "18.2.0";
Cc.exports = W;
var v = Cc.exports;
const Ct = ao(v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sh = v,
  ah = Symbol.for("react.element"),
  uh = Symbol.for("react.fragment"),
  ch = Object.prototype.hasOwnProperty,
  fh = sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) ch.call(t, r) && !dh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ah,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: fh.current,
  };
}
Pl.Fragment = uh;
Pl.jsx = Lc;
Pl.jsxs = Lc;
Ec.exports = Pl;
var c = Ec.exports,
  Ni = {},
  _c = { exports: {} },
  Ye = {},
  Mc = { exports: {} },
  Ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, M) {
    var z = P.length;
    P.push(M);
    e: for (; 0 < z; ) {
      var F = (z - 1) >>> 1,
        V = P[F];
      if (0 < o(V, M)) (P[F] = M), (P[z] = V), (z = F);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var M = P[0],
      z = P.pop();
    if (z !== M) {
      P[0] = z;
      e: for (var F = 0, V = P.length, ee = V >>> 1; F < ee; ) {
        var Z = 2 * (F + 1) - 1,
          te = P[Z],
          Q = Z + 1,
          T = P[Q];
        if (0 > o(te, z))
          Q < V && 0 > o(T, te)
            ? ((P[F] = T), (P[Q] = z), (F = Q))
            : ((P[F] = te), (P[Z] = z), (F = Z));
        else if (Q < V && 0 > o(T, z)) (P[F] = T), (P[Q] = z), (F = Q);
        else break e;
      }
    }
    return M;
  }
  function o(P, M) {
    var z = P.sortIndex - M.sortIndex;
    return z !== 0 ? z : P.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    f = 1,
    m = null,
    g = 3,
    x = !1,
    w = !1,
    S = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= P)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function y(P) {
    if (((S = !1), h(P), !w))
      if (n(a) !== null) (w = !0), U(E);
      else {
        var M = n(u);
        M !== null && H(y, M.startTime - P);
      }
  }
  function E(P, M) {
    (w = !1), S && ((S = !1), p(O), (O = -1)), (x = !0);
    var z = g;
    try {
      for (
        h(M), m = n(a);
        m !== null && (!(m.expirationTime > M) || (P && !$()));

      ) {
        var F = m.callback;
        if (typeof F == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var V = F(m.expirationTime <= M);
          (M = e.unstable_now()),
            typeof V == "function" ? (m.callback = V) : m === n(a) && r(a),
            h(M);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var ee = !0;
      else {
        var Z = n(u);
        Z !== null && H(y, Z.startTime - M), (ee = !1);
      }
      return ee;
    } finally {
      (m = null), (g = z), (x = !1);
    }
  }
  var k = !1,
    N = null,
    O = -1,
    I = 5,
    L = -1;
  function $() {
    return !(e.unstable_now() - L < I);
  }
  function X() {
    if (N !== null) {
      var P = e.unstable_now();
      L = P;
      var M = !0;
      try {
        M = N(!0, P);
      } finally {
        M ? A() : ((k = !1), (N = null));
      }
    } else k = !1;
  }
  var A;
  if (typeof d == "function")
    A = function () {
      d(X);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(),
      K = G.port2;
    (G.port1.onmessage = X),
      (A = function () {
        K.postMessage(null);
      });
  } else
    A = function () {
      j(X, 0);
    };
  function U(P) {
    (N = P), k || ((k = !0), A());
  }
  function H(P, M) {
    O = j(function () {
      P(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), U(E));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = g;
      }
      var z = g;
      g = M;
      try {
        return P();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, M) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = g;
      g = P;
      try {
        return M();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, M, z) {
      var F = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? F + z : F))
          : (z = F),
        P)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = z + V),
        (P = {
          id: f++,
          callback: M,
          priorityLevel: P,
          startTime: z,
          expirationTime: V,
          sortIndex: -1,
        }),
        z > F
          ? ((P.sortIndex = z),
            t(u, P),
            n(a) === null &&
              P === n(u) &&
              (S ? (p(O), (O = -1)) : (S = !0), H(y, z - F)))
          : ((P.sortIndex = V), t(a, P), w || x || ((w = !0), U(E))),
        P
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (P) {
      var M = g;
      return function () {
        var z = g;
        g = M;
        try {
          return P.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(Ic);
Mc.exports = Ic;
var ph = Mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc = v,
  Qe = ph;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Dc = new Set(),
  Ur = {};
function On(e, t) {
  Jn(e, t), Jn(e + "Capture", t);
}
function Jn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Dc.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ti = Object.prototype.hasOwnProperty,
  hh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qa = {},
  ba = {};
function mh(e) {
  return Ti.call(ba, e)
    ? !0
    : Ti.call(Qa, e)
    ? !1
    : hh.test(e)
    ? (ba[e] = !0)
    : ((Qa[e] = !0), !1);
}
function vh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gh(e, t, n, r) {
  if (t === null || typeof t > "u" || vh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Me(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fs = /[\-:]([a-z])/g;
function As(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fs, As);
    Ce[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fs, As);
    Ce[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fs, As);
  Ce[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bs(e, t, n, r) {
  var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gh(t, n, o, r) && (n = null),
    r || o === null
      ? mh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Eo = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Vs = Symbol.for("react.strict_mode"),
  Oi = Symbol.for("react.profiler"),
  $c = Symbol.for("react.provider"),
  Fc = Symbol.for("react.context"),
  Us = Symbol.for("react.forward_ref"),
  Pi = Symbol.for("react.suspense"),
  Ri = Symbol.for("react.suspense_list"),
  Hs = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  Ac = Symbol.for("react.offscreen"),
  Ya = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ya && e[Ya]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  Gl;
function jr(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Zl = !1;
function ql(e, t) {
  if (!e || Zl) return "";
  Zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function yh(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ql(e.type, !1)), e;
    case 11:
      return (e = ql(e.type.render, !1)), e;
    case 1:
      return (e = ql(e.type, !0)), e;
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case zn:
      return "Portal";
    case Oi:
      return "Profiler";
    case Vs:
      return "StrictMode";
    case Pi:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fc:
        return (e.displayName || "Context") + ".Consumer";
      case $c:
        return (e._context.displayName || "Context") + ".Provider";
      case Us:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hs:
        return (
          (t = e.displayName || null), t !== null ? t : Li(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return Li(e(t));
        } catch {}
    }
  return null;
}
function xh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Li(t);
    case 8:
      return t === Vs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wh(e) {
  var t = Bc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Co(e) {
  e._valueTracker || (e._valueTracker = wh(e));
}
function Vc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function nl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _i(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Uc(e, t) {
  (t = t.checked), t != null && Bs(e, "checked", t, !1);
}
function Mi(e, t) {
  Uc(e, t);
  var n = Jt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ii(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ii(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ga(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ii(e, t, n) {
  (t !== "number" || nl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Za(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function Hc(e, t) {
  var n = Jt(t.value),
    r = Jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ko,
  Kc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ko = ko || document.createElement("div"),
          ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ko.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Sh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]);
  });
});
function Qc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function bc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Qc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Eh = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function $i(e, t) {
  if (t) {
    if (Eh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Fi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ai = null;
function Ws(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Bi = null,
  Yn = null,
  Xn = null;
function Ja(e) {
  if ((e = po(e))) {
    if (typeof Bi != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Il(t)), Bi(e.stateNode, e.type, t));
  }
}
function Yc(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function Xc() {
  if (Yn) {
    var e = Yn,
      t = Xn;
    if (((Xn = Yn = null), Ja(e), t)) for (e = 0; e < t.length; e++) Ja(t[e]);
  }
}
function Gc(e, t) {
  return e(t);
}
function Zc() {}
var Jl = !1;
function qc(e, t, n) {
  if (Jl) return e(t, n);
  Jl = !0;
  try {
    return Gc(e, t, n);
  } finally {
    (Jl = !1), (Yn !== null || Xn !== null) && (Zc(), Xc());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Vi = !1;
if (Ot)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Vi = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Vi = !1;
  }
function Ch(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Lr = !1,
  rl = null,
  ol = !1,
  Ui = null,
  kh = {
    onError: function (e) {
      (Lr = !0), (rl = e);
    },
  };
function jh(e, t, n, r, o, l, i, s, a) {
  (Lr = !1), (rl = null), Ch.apply(kh, arguments);
}
function Nh(e, t, n, r, o, l, i, s, a) {
  if ((jh.apply(this, arguments), Lr)) {
    if (Lr) {
      var u = rl;
      (Lr = !1), (rl = null);
    } else throw Error(R(198));
    ol || ((ol = !0), (Ui = u));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function eu(e) {
  if (Pn(e) !== e) throw Error(R(188));
}
function Th(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return eu(o), e;
        if (l === r) return eu(o), t;
        l = l.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function ef(e) {
  return (e = Th(e)), e !== null ? tf(e) : null;
}
function tf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nf = Qe.unstable_scheduleCallback,
  tu = Qe.unstable_cancelCallback,
  Oh = Qe.unstable_shouldYield,
  Ph = Qe.unstable_requestPaint,
  pe = Qe.unstable_now,
  Rh = Qe.unstable_getCurrentPriorityLevel,
  Ks = Qe.unstable_ImmediatePriority,
  rf = Qe.unstable_UserBlockingPriority,
  ll = Qe.unstable_NormalPriority,
  Lh = Qe.unstable_LowPriority,
  of = Qe.unstable_IdlePriority,
  Rl = null,
  ht = null;
function _h(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : zh,
  Mh = Math.log,
  Ih = Math.LN2;
function zh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mh(e) / Ih) | 0)) | 0;
}
var jo = 64,
  No = 4194304;
function Tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Tr(s)) : ((l &= i), l !== 0 && (r = Tr(l)));
  } else (i = n & ~o), i !== 0 ? (r = Tr(i)) : l !== 0 && (r = Tr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - at(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Dh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $h(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - at(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = Dh(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Hi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lf() {
  var e = jo;
  return (jo <<= 1), !(jo & 4194240) && (jo = 64), e;
}
function ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function co(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function Fh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Qs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var q = 0;
function sf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var af,
  bs,
  uf,
  cf,
  ff,
  Wi = !1,
  To = [],
  Kt = null,
  Qt = null,
  bt = null,
  Kr = new Map(),
  Qr = new Map(),
  Vt = [],
  Ah =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Qt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = po(t)), t !== null && bs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Bh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Kt = yr(Kt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Qt = yr(Qt, e, t, n, r, o)), !0;
    case "mouseover":
      return (bt = yr(bt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Kr.set(l, yr(Kr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Qr.set(l, yr(Qr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function df(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jc(n)), t !== null)) {
          (e.blockedOn = t),
            ff(e.priority, function () {
              uf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ki(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ai = r), n.target.dispatchEvent(r), (Ai = null);
    } else return (t = po(n)), t !== null && bs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ru(e, t, n) {
  Ho(e) && n.delete(t);
}
function Vh() {
  (Wi = !1),
    Kt !== null && Ho(Kt) && (Kt = null),
    Qt !== null && Ho(Qt) && (Qt = null),
    bt !== null && Ho(bt) && (bt = null),
    Kr.forEach(ru),
    Qr.forEach(ru);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wi ||
      ((Wi = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Vh)));
}
function br(e) {
  function t(o) {
    return xr(o, e);
  }
  if (0 < To.length) {
    xr(To[0], e);
    for (var n = 1; n < To.length; n++) {
      var r = To[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kt !== null && xr(Kt, e),
      Qt !== null && xr(Qt, e),
      bt !== null && xr(bt, e),
      Kr.forEach(t),
      Qr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    df(n), n.blockedOn === null && Vt.shift();
}
var Gn = Mt.ReactCurrentBatchConfig,
  sl = !0;
function Uh(e, t, n, r) {
  var o = q,
    l = Gn.transition;
  Gn.transition = null;
  try {
    (q = 1), Ys(e, t, n, r);
  } finally {
    (q = o), (Gn.transition = l);
  }
}
function Hh(e, t, n, r) {
  var o = q,
    l = Gn.transition;
  Gn.transition = null;
  try {
    (q = 4), Ys(e, t, n, r);
  } finally {
    (q = o), (Gn.transition = l);
  }
}
function Ys(e, t, n, r) {
  if (sl) {
    var o = Ki(e, t, n, r);
    if (o === null) ci(e, t, r, al, n), nu(e, r);
    else if (Bh(o, e, t, n, r)) r.stopPropagation();
    else if ((nu(e, r), t & 4 && -1 < Ah.indexOf(e))) {
      for (; o !== null; ) {
        var l = po(o);
        if (
          (l !== null && af(l),
          (l = Ki(e, t, n, r)),
          l === null && ci(e, t, r, al, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else ci(e, t, r, null, n);
  }
}
var al = null;
function Ki(e, t, n, r) {
  if (((al = null), (e = Ws(r)), (e = hn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (al = e), null;
}
function pf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rh()) {
        case Ks:
          return 1;
        case rf:
          return 4;
        case ll:
        case Lh:
          return 16;
        case of:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ht = null,
  Xs = null,
  Wo = null;
function hf() {
  if (Wo) return Wo;
  var e,
    t = Xs,
    n = t.length,
    r,
    o = "value" in Ht ? Ht.value : Ht.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Wo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ko(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Oo() {
  return !0;
}
function ou() {
  return !1;
}
function Xe(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Oo
        : ou),
      (this.isPropagationStopped = ou),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Oo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Oo));
      },
      persist: function () {},
      isPersistent: Oo,
    }),
    t
  );
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Gs = Xe(fr),
  fo = fe({}, fr, { view: 0, detail: 0 }),
  Wh = Xe(fo),
  ti,
  ni,
  wr,
  Ll = fe({}, fo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wr &&
            (wr && e.type === "mousemove"
              ? ((ti = e.screenX - wr.screenX), (ni = e.screenY - wr.screenY))
              : (ni = ti = 0),
            (wr = e)),
          ti);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ni;
    },
  }),
  lu = Xe(Ll),
  Kh = fe({}, Ll, { dataTransfer: 0 }),
  Qh = Xe(Kh),
  bh = fe({}, fo, { relatedTarget: 0 }),
  ri = Xe(bh),
  Yh = fe({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xh = Xe(Yh),
  Gh = fe({}, fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zh = Xe(Gh),
  qh = fe({}, fr, { data: 0 }),
  iu = Xe(qh),
  Jh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  em = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tm[e]) ? !!t[e] : !1;
}
function Zs() {
  return nm;
}
var rm = fe({}, fo, {
    key: function (e) {
      if (e.key) {
        var t = Jh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ko(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? em[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zs,
    charCode: function (e) {
      return e.type === "keypress" ? Ko(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ko(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  om = Xe(rm),
  lm = fe({}, Ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  su = Xe(lm),
  im = fe({}, fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zs,
  }),
  sm = Xe(im),
  am = fe({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  um = Xe(am),
  cm = fe({}, Ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fm = Xe(cm),
  dm = [9, 13, 27, 32],
  qs = Ot && "CompositionEvent" in window,
  _r = null;
Ot && "documentMode" in document && (_r = document.documentMode);
var pm = Ot && "TextEvent" in window && !_r,
  mf = Ot && (!qs || (_r && 8 < _r && 11 >= _r)),
  au = " ",
  uu = !1;
function vf(e, t) {
  switch (e) {
    case "keyup":
      return dm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $n = !1;
function hm(e, t) {
  switch (e) {
    case "compositionend":
      return gf(t);
    case "keypress":
      return t.which !== 32 ? null : ((uu = !0), au);
    case "textInput":
      return (e = t.data), e === au && uu ? null : e;
    default:
      return null;
  }
}
function mm(e, t) {
  if ($n)
    return e === "compositionend" || (!qs && vf(e, t))
      ? ((e = hf()), (Wo = Xs = Ht = null), ($n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return mf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vm[e.type] : t === "textarea";
}
function yf(e, t, n, r) {
  Yc(r),
    (t = ul(t, "onChange")),
    0 < t.length &&
      ((n = new Gs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mr = null,
  Yr = null;
function gm(e) {
  Pf(e, 0);
}
function _l(e) {
  var t = Bn(e);
  if (Vc(t)) return e;
}
function ym(e, t) {
  if (e === "change") return t;
}
var xf = !1;
if (Ot) {
  var oi;
  if (Ot) {
    var li = "oninput" in document;
    if (!li) {
      var fu = document.createElement("div");
      fu.setAttribute("oninput", "return;"),
        (li = typeof fu.oninput == "function");
    }
    oi = li;
  } else oi = !1;
  xf = oi && (!document.documentMode || 9 < document.documentMode);
}
function du() {
  Mr && (Mr.detachEvent("onpropertychange", wf), (Yr = Mr = null));
}
function wf(e) {
  if (e.propertyName === "value" && _l(Yr)) {
    var t = [];
    yf(t, Yr, e, Ws(e)), qc(gm, t);
  }
}
function xm(e, t, n) {
  e === "focusin"
    ? (du(), (Mr = t), (Yr = n), Mr.attachEvent("onpropertychange", wf))
    : e === "focusout" && du();
}
function wm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _l(Yr);
}
function Sm(e, t) {
  if (e === "click") return _l(t);
}
function Em(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function Cm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : Cm;
function Xr(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ti.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hu(e, t) {
  var n = pu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pu(n);
  }
}
function Sf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ef() {
  for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nl(e.document);
  }
  return t;
}
function Js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function km(e) {
  var t = Ef(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Js(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = hu(n, l));
        var i = hu(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var jm = Ot && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Qi = null,
  Ir = null,
  bi = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bi ||
    Fn == null ||
    Fn !== nl(r) ||
    ((r = Fn),
    "selectionStart" in r && Js(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ir && Xr(Ir, r)) ||
      ((Ir = r),
      (r = ul(Qi, "onSelect")),
      0 < r.length &&
        ((t = new Gs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Po(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: Po("Animation", "AnimationEnd"),
    animationiteration: Po("Animation", "AnimationIteration"),
    animationstart: Po("Animation", "AnimationStart"),
    transitionend: Po("Transition", "TransitionEnd"),
  },
  ii = {},
  Cf = {};
Ot &&
  ((Cf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Ml(e) {
  if (ii[e]) return ii[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Cf) return (ii[e] = t[n]);
  return e;
}
var kf = Ml("animationend"),
  jf = Ml("animationiteration"),
  Nf = Ml("animationstart"),
  Tf = Ml("transitionend"),
  Of = new Map(),
  vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(e, t) {
  Of.set(e, t), On(t, [e]);
}
for (var si = 0; si < vu.length; si++) {
  var ai = vu[si],
    Nm = ai.toLowerCase(),
    Tm = ai[0].toUpperCase() + ai.slice(1);
  nn(Nm, "on" + Tm);
}
nn(kf, "onAnimationEnd");
nn(jf, "onAnimationIteration");
nn(Nf, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(Tf, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function gu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Nh(r, t, void 0, e), (e.currentTarget = null);
}
function Pf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          gu(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          gu(o, s, u), (l = a);
        }
    }
  }
  if (ol) throw ((e = Ui), (ol = !1), (Ui = null), e);
}
function le(e, t) {
  var n = t[qi];
  n === void 0 && (n = t[qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rf(t, e, 2, !1), n.add(r));
}
function ui(e, t, n) {
  var r = 0;
  t && (r |= 4), Rf(n, e, r, t);
}
var Ro = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[Ro]) {
    (e[Ro] = !0),
      Dc.forEach(function (n) {
        n !== "selectionchange" && (Om.has(n) || ui(n, !1, e), ui(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ro] || ((t[Ro] = !0), ui("selectionchange", !1, t));
  }
}
function Rf(e, t, n, r) {
  switch (pf(t)) {
    case 1:
      var o = Uh;
      break;
    case 4:
      o = Hh;
      break;
    default:
      o = Ys;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ci(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = hn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  qc(function () {
    var u = l,
      f = Ws(n),
      m = [];
    e: {
      var g = Of.get(e);
      if (g !== void 0) {
        var x = Gs,
          w = e;
        switch (e) {
          case "keypress":
            if (Ko(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = om;
            break;
          case "focusin":
            (w = "focus"), (x = ri);
            break;
          case "focusout":
            (w = "blur"), (x = ri);
            break;
          case "beforeblur":
          case "afterblur":
            x = ri;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Qh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = sm;
            break;
          case kf:
          case jf:
          case Nf:
            x = Xh;
            break;
          case Tf:
            x = um;
            break;
          case "scroll":
            x = Wh;
            break;
          case "wheel":
            x = fm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Zh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = su;
        }
        var S = (t & 4) !== 0,
          j = !S && e === "scroll",
          p = S ? (g !== null ? g + "Capture" : null) : g;
        S = [];
        for (var d = u, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              p !== null && ((y = Wr(d, p)), y != null && S.push(Zr(d, y, h)))),
            j)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((g = new x(g, w, null, n, f)), m.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Ai &&
            (w = n.relatedTarget || n.fromElement) &&
            (hn(w) || w[Pt]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            f.window === f
              ? f
              : (g = f.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = u),
              (w = w ? hn(w) : null),
              w !== null &&
                ((j = Pn(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = u)),
          x !== w)
        ) {
          if (
            ((S = lu),
            (y = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = su),
              (y = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (j = x == null ? g : Bn(x)),
            (h = w == null ? g : Bn(w)),
            (g = new S(y, d + "leave", x, n, f)),
            (g.target = j),
            (g.relatedTarget = h),
            (y = null),
            hn(f) === u &&
              ((S = new S(p, d + "enter", w, n, f)),
              (S.target = h),
              (S.relatedTarget = j),
              (y = S)),
            (j = y),
            x && w)
          )
            t: {
              for (S = x, p = w, d = 0, h = S; h; h = _n(h)) d++;
              for (h = 0, y = p; y; y = _n(y)) h++;
              for (; 0 < d - h; ) (S = _n(S)), d--;
              for (; 0 < h - d; ) (p = _n(p)), h--;
              for (; d--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = _n(S)), (p = _n(p));
              }
              S = null;
            }
          else S = null;
          x !== null && yu(m, g, x, S, !1),
            w !== null && j !== null && yu(m, j, w, S, !0);
        }
      }
      e: {
        if (
          ((g = u ? Bn(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var E = ym;
        else if (cu(g))
          if (xf) E = Em;
          else {
            E = wm;
            var k = xm;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (E = Sm);
        if (E && (E = E(e, u))) {
          yf(m, E, n, f);
          break e;
        }
        k && k(e, g, u),
          e === "focusout" &&
            (k = g._wrapperState) &&
            k.controlled &&
            g.type === "number" &&
            Ii(g, "number", g.value);
      }
      switch (((k = u ? Bn(u) : window), e)) {
        case "focusin":
          (cu(k) || k.contentEditable === "true") &&
            ((Fn = k), (Qi = u), (Ir = null));
          break;
        case "focusout":
          Ir = Qi = Fn = null;
          break;
        case "mousedown":
          bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bi = !1), mu(m, n, f);
          break;
        case "selectionchange":
          if (jm) break;
        case "keydown":
        case "keyup":
          mu(m, n, f);
      }
      var N;
      if (qs)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        $n
          ? vf(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (mf &&
          n.locale !== "ko" &&
          ($n || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && $n && (N = hf())
            : ((Ht = f),
              (Xs = "value" in Ht ? Ht.value : Ht.textContent),
              ($n = !0))),
        (k = ul(u, O)),
        0 < k.length &&
          ((O = new iu(O, e, null, n, f)),
          m.push({ event: O, listeners: k }),
          N ? (O.data = N) : ((N = gf(n)), N !== null && (O.data = N)))),
        (N = pm ? hm(e, n) : mm(e, n)) &&
          ((u = ul(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new iu("onBeforeInput", "beforeinput", null, n, f)),
            m.push({ event: f, listeners: u }),
            (f.data = N)));
    }
    Pf(m, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Wr(e, n)),
      l != null && r.unshift(Zr(e, l, o)),
      (l = Wr(e, t)),
      l != null && r.push(Zr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Wr(n, l)), a != null && i.unshift(Zr(n, a, s)))
        : o || ((a = Wr(n, l)), a != null && i.push(Zr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Pm = /\r\n?/g,
  Rm = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Pm,
      `
`
    )
    .replace(Rm, "");
}
function Lo(e, t, n) {
  if (((t = xu(t)), xu(e) !== t && n)) throw Error(R(425));
}
function cl() {}
var Yi = null,
  Xi = null;
function Gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zi = typeof setTimeout == "function" ? setTimeout : void 0,
  Lm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wu = typeof Promise == "function" ? Promise : void 0,
  _m =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wu < "u"
      ? function (e) {
          return wu.resolve(null).then(e).catch(Mm);
        }
      : Zi;
function Mm(e) {
  setTimeout(function () {
    throw e;
  });
}
function fi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  br(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Su(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + dr,
  qr = "__reactProps$" + dr,
  Pt = "__reactContainer$" + dr,
  qi = "__reactEvents$" + dr,
  Im = "__reactListeners$" + dr,
  zm = "__reactHandles$" + dr;
function hn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Su(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Su(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function po(e) {
  return (
    (e = e[pt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Il(e) {
  return e[qr] || null;
}
var Ji = [],
  Vn = -1;
function rn(e) {
  return { current: e };
}
function ie(e) {
  0 > Vn || ((e.current = Ji[Vn]), (Ji[Vn] = null), Vn--);
}
function oe(e, t) {
  Vn++, (Ji[Vn] = e.current), (e.current = t);
}
var en = {},
  Pe = rn(en),
  Fe = rn(!1),
  En = en;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function fl() {
  ie(Fe), ie(Pe);
}
function Eu(e, t, n) {
  if (Pe.current !== en) throw Error(R(168));
  oe(Pe, t), oe(Fe, n);
}
function Lf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, xh(e) || "Unknown", o));
  return fe({}, n, r);
}
function dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (En = Pe.current),
    oe(Pe, e),
    oe(Fe, Fe.current),
    !0
  );
}
function Cu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Lf(e, t, En)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Fe),
      ie(Pe),
      oe(Pe, e))
    : ie(Fe),
    oe(Fe, n);
}
var Et = null,
  zl = !1,
  di = !1;
function _f(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Dm(e) {
  (zl = !0), _f(e);
}
function on() {
  if (!di && Et !== null) {
    di = !0;
    var e = 0,
      t = q;
    try {
      var n = Et;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (zl = !1);
    } catch (o) {
      throw (Et !== null && (Et = Et.slice(e + 1)), nf(Ks, on), o);
    } finally {
      (q = t), (di = !1);
    }
  }
  return null;
}
var Un = [],
  Hn = 0,
  pl = null,
  hl = 0,
  Ge = [],
  Ze = 0,
  Cn = null,
  kt = 1,
  jt = "";
function un(e, t) {
  (Un[Hn++] = hl), (Un[Hn++] = pl), (pl = e), (hl = t);
}
function Mf(e, t, n) {
  (Ge[Ze++] = kt), (Ge[Ze++] = jt), (Ge[Ze++] = Cn), (Cn = e);
  var r = kt;
  e = jt;
  var o = 32 - at(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - at(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (kt = (1 << (32 - at(t) + o)) | (n << o) | r),
      (jt = l + e);
  } else (kt = (1 << l) | (n << o) | r), (jt = e);
}
function ea(e) {
  e.return !== null && (un(e, 1), Mf(e, 1, 0));
}
function ta(e) {
  for (; e === pl; )
    (pl = Un[--Hn]), (Un[Hn] = null), (hl = Un[--Hn]), (Un[Hn] = null);
  for (; e === Cn; )
    (Cn = Ge[--Ze]),
      (Ge[Ze] = null),
      (jt = Ge[--Ze]),
      (Ge[Ze] = null),
      (kt = Ge[--Ze]),
      (Ge[Ze] = null);
}
var Ke = null,
  We = null,
  ae = !1,
  st = null;
function If(e, t) {
  var n = qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (We = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: kt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function es(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ts(e) {
  if (ae) {
    var t = We;
    if (t) {
      var n = t;
      if (!ku(e, t)) {
        if (es(e)) throw Error(R(418));
        t = Yt(n.nextSibling);
        var r = Ke;
        t && ku(e, t)
          ? If(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Ke = e));
      }
    } else {
      if (es(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (Ke = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function _o(e) {
  if (e !== Ke) return !1;
  if (!ae) return ju(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gi(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (es(e)) throw (zf(), Error(R(418)));
    for (; t; ) If(e, t), (t = Yt(t.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Ke ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function zf() {
  for (var e = We; e; ) e = Yt(e.nextSibling);
}
function tr() {
  (We = Ke = null), (ae = !1);
}
function na(e) {
  st === null ? (st = [e]) : st.push(e);
}
var $m = Mt.ReactCurrentBatchConfig;
function lt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ml = rn(null),
  vl = null,
  Wn = null,
  ra = null;
function oa() {
  ra = Wn = vl = null;
}
function la(e) {
  var t = ml.current;
  ie(ml), (e._currentValue = t);
}
function ns(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (vl = e),
    (ra = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (vl === null) throw Error(R(308));
      (Wn = e), (vl.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var mn = null;
function ia(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function Df(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ia(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function sa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $f(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ia(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Qo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qs(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function gl(e, t, n, r) {
  var o = e.updateQueue;
  At = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== i &&
        (s === null ? (f.firstBaseUpdate = u) : (s.next = u),
        (f.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var m = o.baseState;
    (i = 0), (f = u = a = null), (s = l);
    do {
      var g = s.lane,
        x = s.eventTime;
      if ((r & g) === g) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((g = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(x, m, g);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (g = typeof w == "function" ? w.call(x, m, g) : w),
                g == null)
              )
                break e;
              m = fe({}, m, g);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [s]) : g.push(s));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((u = f = x), (a = m)) : (f = f.next = x),
          (i |= g);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (g = s),
          (s = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (a = m),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (jn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Tu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Ff = new zc.Component().refs;
function rs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = Zt(e),
      l = Tt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Xt(e, l, o)),
      t !== null && (ut(t, e, o, r), Qo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = Zt(e),
      l = Tt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Xt(e, l, o)),
      t !== null && (ut(t, e, o, r), Qo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = Zt(e),
      o = Tt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Xt(e, o, r)),
      t !== null && (ut(t, e, r, n), Qo(t, e, r));
  },
};
function Ou(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xr(n, r) || !Xr(o, l)
      : !0
  );
}
function Af(e, t, n) {
  var r = !1,
    o = en,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = et(l))
      : ((o = Ae(t) ? En : Pe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? er(e, o) : en)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Pu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Dl.enqueueReplaceState(t, t.state, null);
}
function os(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ff), sa(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = et(l))
    : ((l = Ae(t) ? En : Pe.current), (o.context = er(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (rs(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Dl.enqueueReplaceState(o, o.state, null),
      gl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            s === Ff && (s = o.refs = {}),
              i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Mo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ru(e) {
  var t = e._init;
  return t(e._payload);
}
function Bf(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function o(p, d) {
    return (p = qt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = xi(h, p.mode, y)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d);
  }
  function a(p, d, h, y) {
    var E = h.type;
    return E === Dn
      ? f(p, d, h.props.children, y, h.key)
      : d !== null &&
        (d.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ft &&
            Ru(E) === d.type))
      ? ((y = o(d, h.props)), (y.ref = Sr(p, d, h)), (y.return = p), y)
      : ((y = qo(h.type, h.key, h.props, null, p.mode, y)),
        (y.ref = Sr(p, d, h)),
        (y.return = p),
        y);
  }
  function u(p, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = wi(h, p.mode, y)), (d.return = p), d)
      : ((d = o(d, h.children || [])), (d.return = p), d);
  }
  function f(p, d, h, y, E) {
    return d === null || d.tag !== 7
      ? ((d = xn(h, p.mode, y, E)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d);
  }
  function m(p, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = xi("" + d, p.mode, h)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Eo:
          return (
            (h = qo(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = Sr(p, null, d)),
            (h.return = p),
            h
          );
        case zn:
          return (d = wi(d, p.mode, h)), (d.return = p), d;
        case Ft:
          var y = d._init;
          return m(p, y(d._payload), h);
      }
      if (Nr(d) || vr(d))
        return (d = xn(d, p.mode, h, null)), (d.return = p), d;
      Mo(p, d);
    }
    return null;
  }
  function g(p, d, h, y) {
    var E = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return E !== null ? null : s(p, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Eo:
          return h.key === E ? a(p, d, h, y) : null;
        case zn:
          return h.key === E ? u(p, d, h, y) : null;
        case Ft:
          return (E = h._init), g(p, d, E(h._payload), y);
      }
      if (Nr(h) || vr(h)) return E !== null ? null : f(p, d, h, y, null);
      Mo(p, h);
    }
    return null;
  }
  function x(p, d, h, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (p = p.get(h) || null), s(d, p, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Eo:
          return (p = p.get(y.key === null ? h : y.key) || null), a(d, p, y, E);
        case zn:
          return (p = p.get(y.key === null ? h : y.key) || null), u(d, p, y, E);
        case Ft:
          var k = y._init;
          return x(p, d, h, k(y._payload), E);
      }
      if (Nr(y) || vr(y)) return (p = p.get(h) || null), f(d, p, y, E, null);
      Mo(d, y);
    }
    return null;
  }
  function w(p, d, h, y) {
    for (
      var E = null, k = null, N = d, O = (d = 0), I = null;
      N !== null && O < h.length;
      O++
    ) {
      N.index > O ? ((I = N), (N = null)) : (I = N.sibling);
      var L = g(p, N, h[O], y);
      if (L === null) {
        N === null && (N = I);
        break;
      }
      e && N && L.alternate === null && t(p, N),
        (d = l(L, d, O)),
        k === null ? (E = L) : (k.sibling = L),
        (k = L),
        (N = I);
    }
    if (O === h.length) return n(p, N), ae && un(p, O), E;
    if (N === null) {
      for (; O < h.length; O++)
        (N = m(p, h[O], y)),
          N !== null &&
            ((d = l(N, d, O)), k === null ? (E = N) : (k.sibling = N), (k = N));
      return ae && un(p, O), E;
    }
    for (N = r(p, N); O < h.length; O++)
      (I = x(N, p, O, h[O], y)),
        I !== null &&
          (e && I.alternate !== null && N.delete(I.key === null ? O : I.key),
          (d = l(I, d, O)),
          k === null ? (E = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        N.forEach(function ($) {
          return t(p, $);
        }),
      ae && un(p, O),
      E
    );
  }
  function S(p, d, h, y) {
    var E = vr(h);
    if (typeof E != "function") throw Error(R(150));
    if (((h = E.call(h)), h == null)) throw Error(R(151));
    for (
      var k = (E = null), N = d, O = (d = 0), I = null, L = h.next();
      N !== null && !L.done;
      O++, L = h.next()
    ) {
      N.index > O ? ((I = N), (N = null)) : (I = N.sibling);
      var $ = g(p, N, L.value, y);
      if ($ === null) {
        N === null && (N = I);
        break;
      }
      e && N && $.alternate === null && t(p, N),
        (d = l($, d, O)),
        k === null ? (E = $) : (k.sibling = $),
        (k = $),
        (N = I);
    }
    if (L.done) return n(p, N), ae && un(p, O), E;
    if (N === null) {
      for (; !L.done; O++, L = h.next())
        (L = m(p, L.value, y)),
          L !== null &&
            ((d = l(L, d, O)), k === null ? (E = L) : (k.sibling = L), (k = L));
      return ae && un(p, O), E;
    }
    for (N = r(p, N); !L.done; O++, L = h.next())
      (L = x(N, p, O, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? O : L.key),
          (d = l(L, d, O)),
          k === null ? (E = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        N.forEach(function (X) {
          return t(p, X);
        }),
      ae && un(p, O),
      E
    );
  }
  function j(p, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Dn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Eo:
          e: {
            for (var E = h.key, k = d; k !== null; ) {
              if (k.key === E) {
                if (((E = h.type), E === Dn)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (d = o(k, h.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ft &&
                    Ru(E) === k.type)
                ) {
                  n(p, k.sibling),
                    (d = o(k, h.props)),
                    (d.ref = Sr(p, k, h)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            h.type === Dn
              ? ((d = xn(h.props.children, p.mode, y, h.key)),
                (d.return = p),
                (p = d))
              : ((y = qo(h.type, h.key, h.props, null, p.mode, y)),
                (y.ref = Sr(p, d, h)),
                (y.return = p),
                (p = y));
          }
          return i(p);
        case zn:
          e: {
            for (k = h.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling),
                    (d = o(d, h.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = wi(h, p.mode, y)), (d.return = p), (p = d);
          }
          return i(p);
        case Ft:
          return (k = h._init), j(p, d, k(h._payload), y);
      }
      if (Nr(h)) return w(p, d, h, y);
      if (vr(h)) return S(p, d, h, y);
      Mo(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = xi(h, p.mode, y)), (d.return = p), (p = d)),
        i(p))
      : n(p, d);
  }
  return j;
}
var nr = Bf(!0),
  Vf = Bf(!1),
  ho = {},
  mt = rn(ho),
  Jr = rn(ho),
  eo = rn(ho);
function vn(e) {
  if (e === ho) throw Error(R(174));
  return e;
}
function aa(e, t) {
  switch ((oe(eo, t), oe(Jr, e), oe(mt, ho), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Di(t, e));
  }
  ie(mt), oe(mt, t);
}
function rr() {
  ie(mt), ie(Jr), ie(eo);
}
function Uf(e) {
  vn(eo.current);
  var t = vn(mt.current),
    n = Di(t, e.type);
  t !== n && (oe(Jr, e), oe(mt, n));
}
function ua(e) {
  Jr.current === e && (ie(mt), ie(Jr));
}
var ue = rn(0);
function yl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var pi = [];
function ca() {
  for (var e = 0; e < pi.length; e++)
    pi[e]._workInProgressVersionPrimary = null;
  pi.length = 0;
}
var bo = Mt.ReactCurrentDispatcher,
  hi = Mt.ReactCurrentBatchConfig,
  kn = 0,
  ce = null,
  ve = null,
  ye = null,
  xl = !1,
  zr = !1,
  to = 0,
  Fm = 0;
function ke() {
  throw Error(R(321));
}
function fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function da(e, t, n, r, o, l) {
  if (
    ((kn = l),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bo.current = e === null || e.memoizedState === null ? Um : Hm),
    (e = n(r, o)),
    zr)
  ) {
    l = 0;
    do {
      if (((zr = !1), (to = 0), 25 <= l)) throw Error(R(301));
      (l += 1),
        (ye = ve = null),
        (t.updateQueue = null),
        (bo.current = Wm),
        (e = n(r, o));
    } while (zr);
  }
  if (
    ((bo.current = wl),
    (t = ve !== null && ve.next !== null),
    (kn = 0),
    (ye = ve = ce = null),
    (xl = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function pa() {
  var e = to !== 0;
  return (to = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (ce.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function tt() {
  if (ve === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = ye === null ? ce.memoizedState : ye.next;
  if (t !== null) (ye = t), (ve = e);
  else {
    if (e === null) throw Error(R(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      ye === null ? (ce.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function no(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mi(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ve,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
    do {
      var f = u.lane;
      if ((kn & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = m), (i = r)) : (a = a.next = m),
          (ce.lanes |= f),
          (jn |= f);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      ct(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ce.lanes |= l), (jn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vi(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    ct(l, t.memoizedState) || ($e = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Hf() {}
function Wf(e, t) {
  var n = ce,
    r = tt(),
    o = t(),
    l = !ct(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), ($e = !0)),
    (r = r.queue),
    ha(bf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ro(9, Qf.bind(null, n, r, o, t), void 0, null),
      we === null)
    )
      throw Error(R(349));
    kn & 30 || Kf(n, t, o);
  }
  return o;
}
function Kf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yf(t) && Xf(e);
}
function bf(e, t, n) {
  return n(function () {
    Yf(t) && Xf(e);
  });
}
function Yf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function Xf(e) {
  var t = Rt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function Lu(e) {
  var t = dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: no,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vm.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function ro(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gf() {
  return tt().memoizedState;
}
function Yo(e, t, n, r) {
  var o = dt();
  (ce.flags |= e),
    (o.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r));
}
function $l(e, t, n, r) {
  var o = tt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((l = i.destroy), r !== null && fa(r, i.deps))) {
      o.memoizedState = ro(t, n, l, r);
      return;
    }
  }
  (ce.flags |= e), (o.memoizedState = ro(1 | t, n, l, r));
}
function _u(e, t) {
  return Yo(8390656, 8, e, t);
}
function ha(e, t) {
  return $l(2048, 8, e, t);
}
function Zf(e, t) {
  return $l(4, 2, e, t);
}
function qf(e, t) {
  return $l(4, 4, e, t);
}
function Jf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $l(4, 4, Jf.bind(null, t, e), n)
  );
}
function ma() {}
function td(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nd(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rd(e, t, n) {
  return kn & 21
    ? (ct(n, t) || ((n = lf()), (ce.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Am(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hi.transition;
  hi.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (hi.transition = r);
  }
}
function od() {
  return tt().memoizedState;
}
function Bm(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ld(e))
  )
    id(t, n);
  else if (((n = Df(e, t, n, r)), n !== null)) {
    var o = Le();
    ut(n, e, r, o), sd(n, t, r);
  }
}
function Vm(e, t, n) {
  var r = Zt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ld(e)) id(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ct(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ia(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Df(e, t, o, r)),
      n !== null && ((o = Le()), ut(n, e, r, o), sd(n, t, r));
  }
}
function ld(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function id(e, t) {
  zr = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qs(e, n);
  }
}
var wl = {
    readContext: et,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Um = {
    readContext: et,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: _u,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yo(4194308, 4, Jf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bm.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Lu,
    useDebugValue: ma,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Lu(!1),
        t = e[0];
      return (e = Am.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        o = dt();
      if (ae) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(R(349));
        kn & 30 || Kf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        _u(bf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ro(9, Qf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = we.identifierPrefix;
      if (ae) {
        var n = jt,
          r = kt;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = to++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Fm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hm = {
    readContext: et,
    useCallback: td,
    useContext: et,
    useEffect: ha,
    useImperativeHandle: ed,
    useInsertionEffect: Zf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: mi,
    useRef: Gf,
    useState: function () {
      return mi(no);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = tt();
      return rd(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(no)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hf,
    useSyncExternalStore: Wf,
    useId: od,
    unstable_isNewReconciler: !1,
  },
  Wm = {
    readContext: et,
    useCallback: td,
    useContext: et,
    useEffect: ha,
    useImperativeHandle: ed,
    useInsertionEffect: Zf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: vi,
    useRef: Gf,
    useState: function () {
      return vi(no);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = tt();
      return ve === null ? (t.memoizedState = e) : rd(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = vi(no)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hf,
    useSyncExternalStore: Wf,
    useId: od,
    unstable_isNewReconciler: !1,
  };
function or(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yh(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ls(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Km = typeof WeakMap == "function" ? WeakMap : Map;
function ad(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      El || ((El = !0), (ms = r)), ls(e, t);
    }),
    n
  );
}
function ud(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ls(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ls(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Km();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = lv.bind(null, e, t, n)), t.then(e, e));
}
function Iu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Qm = Mt.ReactCurrentOwner,
  $e = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Vf(t, null, n, r) : nr(t, e.child, n, r);
}
function Du(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Zn(t, o),
    (r = da(e, t, n, r, l, o)),
    (n = pa()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : (ae && n && ea(t), (t.flags |= 1), Re(e, t, r, o), t.child)
  );
}
function $u(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Ca(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), cd(e, t, l, r, o))
      : ((e = qo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xr), n(i, r) && e.ref === t.ref)
    )
      return Lt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = qt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Xr(l, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), Lt(e, t, o);
  }
  return is(e, t, n, r, o);
}
function fd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Qn, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(Qn, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        oe(Qn, He),
        (He |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Qn, He),
      (He |= r);
  return Re(e, t, o, n), t.child;
}
function dd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function is(e, t, n, r, o) {
  var l = Ae(n) ? En : Pe.current;
  return (
    (l = er(t, l)),
    Zn(t, o),
    (n = da(e, t, n, r, l, o)),
    (r = pa()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : (ae && r && ea(t), (t.flags |= 1), Re(e, t, n, o), t.child)
  );
}
function Fu(e, t, n, r, o) {
  if (Ae(n)) {
    var l = !0;
    dl(t);
  } else l = !1;
  if ((Zn(t, o), t.stateNode === null))
    Xo(e, t), Af(t, n, r), os(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = et(u))
      : ((u = Ae(n) ? En : Pe.current), (u = er(t, u)));
    var f = n.getDerivedStateFromProps,
      m =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Pu(t, i, r, u)),
      (At = !1);
    var g = t.memoizedState;
    (i.state = g),
      gl(t, r, i, o),
      (a = t.memoizedState),
      s !== r || g !== a || Fe.current || At
        ? (typeof f == "function" && (rs(t, n, f, r), (a = t.memoizedState)),
          (s = At || Ou(t, n, s, r, g, a, u))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      $f(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : lt(t.type, s)),
      (i.props = u),
      (m = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = et(a))
        : ((a = Ae(n) ? En : Pe.current), (a = er(t, a)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== m || g !== a) && Pu(t, i, r, a)),
      (At = !1),
      (g = t.memoizedState),
      (i.state = g),
      gl(t, r, i, o);
    var w = t.memoizedState;
    s !== m || g !== w || Fe.current || At
      ? (typeof x == "function" && (rs(t, n, x, r), (w = t.memoizedState)),
        (u = At || Ou(t, n, u, r, g, w, a) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ss(e, t, n, r, l, o);
}
function ss(e, t, n, r, o, l) {
  dd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Cu(t, n, !1), Lt(e, t, l);
  (r = t.stateNode), (Qm.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nr(t, e.child, null, l)), (t.child = nr(t, null, s, l)))
      : Re(e, t, s, l),
    (t.memoizedState = r.state),
    o && Cu(t, n, !0),
    t.child
  );
}
function pd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    aa(e, t.containerInfo);
}
function Au(e, t, n, r, o) {
  return tr(), na(o), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var as = { dehydrated: null, treeContext: null, retryLane: 0 };
function us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hd(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(ue, o & 1),
    e === null)
  )
    return (
      ts(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Bl(i, r, 0, null)),
              (e = xn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = us(n)),
              (t.memoizedState = as),
              e)
            : va(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return bm(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = qt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = qt(s, l)) : ((l = xn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? us(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = as),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = qt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function va(e, t) {
  return (
    (t = Bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Io(e, t, n, r) {
  return (
    r !== null && na(r),
    nr(t, e.child, null, n),
    (e = va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gi(Error(R(422)))), Io(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Bl({ mode: "visible", children: r.children }, o, 0, null)),
        (l = xn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, i),
        (t.child.memoizedState = us(i)),
        (t.memoizedState = as),
        l);
  if (!(t.mode & 1)) return Io(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(R(419))), (r = gi(l, r, void 0)), Io(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), $e || s)) {
    if (((r = we), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Rt(e, o), ut(r, e, o, -1));
    }
    return Ea(), (r = gi(Error(R(421)))), Io(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = iv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (We = Yt(o.nextSibling)),
      (Ke = t),
      (ae = !0),
      (st = null),
      e !== null &&
        ((Ge[Ze++] = kt),
        (Ge[Ze++] = jt),
        (Ge[Ze++] = Cn),
        (kt = e.id),
        (jt = e.overflow),
        (Cn = t)),
      (t = va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ns(e.return, t, n);
}
function yi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function md(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Re(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bu(e, n, t);
        else if (e.tag === 19) Bu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && yl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          yi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        yi(t, !0, n, null, l);
        break;
      case "together":
        yi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ym(e, t, n) {
  switch (t.tag) {
    case 3:
      pd(t), tr();
      break;
    case 5:
      Uf(t);
      break;
    case 1:
      Ae(t.type) && dl(t);
      break;
    case 4:
      aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(ml, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hd(e, t, n)
          : (oe(ue, ue.current & 1),
            (e = Lt(e, t, n)),
            e !== null ? e.sibling : null);
      oe(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return md(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fd(e, t, n);
  }
  return Lt(e, t, n);
}
var vd, cs, gd, yd;
vd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cs = function () {};
gd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), vn(mt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = _i(e, o)), (r = _i(e, r)), (l = []);
        break;
      case "select":
        (o = fe({}, o, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = zi(e, o)), (r = zi(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cl);
    }
    $i(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ur.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ur.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && le("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Xm(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Ae(t.type) && fl(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        ie(Fe),
        ie(Pe),
        ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (ys(st), (st = null)))),
        cs(e, t),
        je(t),
        null
      );
    case 5:
      ua(t);
      var o = vn(eo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return je(t), null;
        }
        if (((e = vn(mt.current)), _o(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[pt] = t), (r[qr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Or.length; o++) le(Or[o], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              Xa(r, l), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              Za(r, l), le("invalid", r);
          }
          $i(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Lo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Lo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ur.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              Co(r), Ga(r, l, !0);
              break;
            case "textarea":
              Co(r), qa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = cl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[pt] = t),
            (e[qr] = r),
            vd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Fi(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Or.length; o++) le(Or[o], e);
                o = r;
                break;
              case "source":
                le("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (o = r);
                break;
              case "details":
                le("toggle", e), (o = r);
                break;
              case "input":
                Xa(e, r), (o = _i(e, r)), le("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = fe({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                Za(e, r), (o = zi(e, r)), le("invalid", e);
                break;
              default:
                o = r;
            }
            $i(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? bc(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Kc(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Hr(e, a)
                    : typeof a == "number" && Hr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Ur.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && le("scroll", e)
                      : a != null && Bs(e, l, a, i));
              }
            switch (n) {
              case "input":
                Co(e), Ga(e, r, !1);
                break;
              case "textarea":
                Co(e), qa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? bn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) yd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = vn(eo.current)), vn(mt.current), _o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (l = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (ie(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && We !== null && t.mode & 1 && !(t.flags & 128))
          zf(), tr(), (t.flags |= 98560), (l = !1);
        else if (((l = _o(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(R(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(R(317));
            l[pt] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (l = !1);
        } else st !== null && (ys(st), (st = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? ge === 0 && (ge = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        rr(), cs(e, t), e === null && Gr(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return la(t.type._context), je(t), null;
    case 17:
      return Ae(t.type) && fl(), je(t), null;
    case 19:
      if ((ie(ue), (l = t.memoizedState), l === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Er(l, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = yl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Er(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            pe() > lr &&
            ((t.flags |= 128), (r = !0), Er(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !ae)
            )
              return je(t), null;
          } else
            2 * pe() - l.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ue.current),
          oe(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Gm(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && fl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        ie(Fe),
        ie(Pe),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ua(t), null;
    case 13:
      if (
        (ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ue), null;
    case 4:
      return rr(), null;
    case 10:
      return la(t.type._context), null;
    case 22:
    case 23:
      return Sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zo = !1,
  Ne = !1,
  Zm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function fs(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Vu = !1;
function qm(e, t) {
  if (((Yi = sl), (e = Ef()), Js(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            m = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (o !== 0 && m.nodeType !== 3) || (s = i + o),
                m !== l || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (g = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++u === o && (s = i),
                g === l && ++f === r && (a = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = g), (g = m.parentNode);
            }
            m = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xi = { focusedElem: e, selectionRange: n }, sl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    j = w.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : lt(t.type, S),
                      j
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (y) {
          de(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Vu), (Vu = !1), w;
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && fs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Fl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ds(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[qr], delete t[qi], delete t[Im], delete t[zm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ps(e, t, n), e = e.sibling; e !== null; ) ps(e, t, n), (e = e.sibling);
}
function hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), (e = e.sibling);
}
var Se = null,
  it = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Sd(e, t, n), (n = n.sibling);
}
function Sd(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(Rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || Kn(n, t);
    case 6:
      var r = Se,
        o = it;
      (Se = null),
        $t(e, t, n),
        (Se = r),
        (it = o),
        Se !== null &&
          (it
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (it
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? fi(e.parentNode, n)
              : e.nodeType === 1 && fi(e, n),
            br(e))
          : fi(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (o = it),
        (Se = n.stateNode.containerInfo),
        (it = !0),
        $t(e, t, n),
        (Se = r),
        (it = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && fs(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (Kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          de(n, t, s);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), $t(e, t, n), (Ne = r))
        : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function Hu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zm()),
      t.forEach(function (r) {
        var o = sv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Se = s.stateNode), (it = !1);
              break e;
            case 3:
              (Se = s.stateNode.containerInfo), (it = !0);
              break e;
            case 4:
              (Se = s.stateNode.containerInfo), (it = !0);
              break e;
          }
          s = s.return;
        }
        if (Se === null) throw Error(R(160));
        Sd(l, i, o), (Se = null), (it = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        de(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ed(t, e), (t = t.sibling);
}
function Ed(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), ft(e), r & 4)) {
        try {
          Dr(3, e, e.return), Fl(3, e);
        } catch (S) {
          de(e, e.return, S);
        }
        try {
          Dr(5, e, e.return);
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 1:
      ot(t, e), ft(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        ft(e),
        r & 512 && n !== null && Kn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Hr(o, "");
        } catch (S) {
          de(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Uc(o, l),
              Fi(s, i);
            var u = Fi(s, l);
            for (i = 0; i < a.length; i += 2) {
              var f = a[i],
                m = a[i + 1];
              f === "style"
                ? bc(o, m)
                : f === "dangerouslySetInnerHTML"
                ? Kc(o, m)
                : f === "children"
                ? Hr(o, m)
                : Bs(o, f, m, u);
            }
            switch (s) {
              case "input":
                Mi(o, l);
                break;
              case "textarea":
                Hc(o, l);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? bn(o, !!l.multiple, x, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? bn(o, !!l.multiple, l.defaultValue, !0)
                      : bn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[qr] = l;
          } catch (S) {
            de(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ot(t, e), ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          br(t.containerInfo);
        } catch (S) {
          de(e, e.return, S);
        }
      break;
    case 4:
      ot(t, e), ft(e);
      break;
    case 13:
      ot(t, e),
        ft(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (xa = pe())),
        r & 4 && Hu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (u = Ne) || f), ot(t, e), (Ne = u)) : ot(t, e),
        ft(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (_ = e, f = e.child; f !== null; ) {
            for (m = _ = f; _ !== null; ) {
              switch (((g = _), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, g, g.return);
                  break;
                case 1:
                  Kn(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      de(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Kn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Ku(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (_ = x)) : Ku(m);
            }
            f = f.sibling;
          }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                (o = m.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = m.stateNode),
                      (a = m.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Qc("display", i)));
              } catch (S) {
                de(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (f === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (S) {
                de(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            f === m && (f = null), (m = m.return);
          }
          f === m && (f = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), ft(e), r & 4 && Hu(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Hr(o, ""), (r.flags &= -33));
          var l = Uu(e);
          hs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Uu(e);
          ps(e, s, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      de(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jm(e, t, n) {
  (_ = e), Cd(e);
}
function Cd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || zo;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ne;
        s = zo;
        var u = Ne;
        if (((zo = i), (Ne = a) && !u))
          for (_ = o; _ !== null; )
            (i = _),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Qu(o)
                : a !== null
                ? ((a.return = i), (_ = a))
                : Qu(o);
        for (; l !== null; ) (_ = l), Cd(l), (l = l.sibling);
        (_ = o), (zo = s), (Ne = u);
      }
      Wu(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (_ = l)) : Wu(e);
  }
}
function Wu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || Fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : lt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Tu(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Tu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var m = f.dehydrated;
                    m !== null && br(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ne || (t.flags & 512 && ds(t));
      } catch (g) {
        de(t, t.return, g);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ku(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Qu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fl(4, t);
          } catch (a) {
            de(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              de(t, o, a);
            }
          }
          var l = t.return;
          try {
            ds(t);
          } catch (a) {
            de(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ds(t);
          } catch (a) {
            de(t, i, a);
          }
      }
    } catch (a) {
      de(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var ev = Math.ceil,
  Sl = Mt.ReactCurrentDispatcher,
  ga = Mt.ReactCurrentOwner,
  Je = Mt.ReactCurrentBatchConfig,
  Y = 0,
  we = null,
  he = null,
  Ee = 0,
  He = 0,
  Qn = rn(0),
  ge = 0,
  oo = null,
  jn = 0,
  Al = 0,
  ya = 0,
  $r = null,
  De = null,
  xa = 0,
  lr = 1 / 0,
  St = null,
  El = !1,
  ms = null,
  Gt = null,
  Do = !1,
  Wt = null,
  Cl = 0,
  Fr = 0,
  vs = null,
  Go = -1,
  Zo = 0;
function Le() {
  return Y & 6 ? pe() : Go !== -1 ? Go : (Go = pe());
}
function Zt(e) {
  return e.mode & 1
    ? Y & 2 && Ee !== 0
      ? Ee & -Ee
      : $m.transition !== null
      ? (Zo === 0 && (Zo = lf()), Zo)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pf(e.type))),
        e)
    : 1;
}
function ut(e, t, n, r) {
  if (50 < Fr) throw ((Fr = 0), (vs = null), Error(R(185)));
  co(e, n, r),
    (!(Y & 2) || e !== we) &&
      (e === we && (!(Y & 2) && (Al |= n), ge === 4 && Ut(e, Ee)),
      Be(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((lr = pe() + 500), zl && on()));
}
function Be(e, t) {
  var n = e.callbackNode;
  $h(e, t);
  var r = il(e, e === we ? Ee : 0);
  if (r === 0)
    n !== null && tu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tu(n), t === 1))
      e.tag === 0 ? Dm(bu.bind(null, e)) : _f(bu.bind(null, e)),
        _m(function () {
          !(Y & 6) && on();
        }),
        (n = null);
    else {
      switch (sf(r)) {
        case 1:
          n = Ks;
          break;
        case 4:
          n = rf;
          break;
        case 16:
          n = ll;
          break;
        case 536870912:
          n = of;
          break;
        default:
          n = ll;
      }
      n = Ld(n, kd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kd(e, t) {
  if (((Go = -1), (Zo = 0), Y & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = il(e, e === we ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var o = Y;
    Y |= 2;
    var l = Nd();
    (we !== e || Ee !== t) && ((St = null), (lr = pe() + 500), yn(e, t));
    do
      try {
        rv();
        break;
      } catch (s) {
        jd(e, s);
      }
    while (!0);
    oa(),
      (Sl.current = l),
      (Y = o),
      he !== null ? (t = 0) : ((we = null), (Ee = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Hi(e)), o !== 0 && ((r = o), (t = gs(e, o)))), t === 1)
    )
      throw ((n = oo), yn(e, 0), Ut(e, r), Be(e, pe()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !tv(o) &&
          ((t = kl(e, r)),
          t === 2 && ((l = Hi(e)), l !== 0 && ((r = l), (t = gs(e, l)))),
          t === 1))
      )
        throw ((n = oo), yn(e, 0), Ut(e, r), Be(e, pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          cn(e, De, St);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = xa + 500 - pe()), 10 < t))
          ) {
            if (il(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Zi(cn.bind(null, e, De, St), t);
            break;
          }
          cn(e, De, St);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - at(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ev(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zi(cn.bind(null, e, De, St), r);
            break;
          }
          cn(e, De, St);
          break;
        case 5:
          cn(e, De, St);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Be(e, pe()), e.callbackNode === n ? kd.bind(null, e) : null;
}
function gs(e, t) {
  var n = $r;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = kl(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && ys(t)),
    e
  );
}
function ys(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function tv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ct(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~ya,
      t &= ~Al,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bu(e) {
  if (Y & 6) throw Error(R(327));
  qn();
  var t = il(e, 0);
  if (!(t & 1)) return Be(e, pe()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hi(e);
    r !== 0 && ((t = r), (n = gs(e, r)));
  }
  if (n === 1) throw ((n = oo), yn(e, 0), Ut(e, t), Be(e, pe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, De, St),
    Be(e, pe()),
    null
  );
}
function wa(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((lr = pe() + 500), zl && on());
  }
}
function Nn(e) {
  Wt !== null && Wt.tag === 0 && !(Y & 6) && qn();
  var t = Y;
  Y |= 1;
  var n = Je.transition,
    r = q;
  try {
    if (((Je.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (Je.transition = n), (Y = t), !(Y & 6) && on();
  }
}
function Sa() {
  (He = Qn.current), ie(Qn);
}
function yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Lm(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fl();
          break;
        case 3:
          rr(), ie(Fe), ie(Pe), ca();
          break;
        case 5:
          ua(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          ie(ue);
          break;
        case 19:
          ie(ue);
          break;
        case 10:
          la(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (he = e = qt(e.current, null)),
    (Ee = He = t),
    (ge = 0),
    (oo = null),
    (ya = Al = jn = 0),
    (De = $r = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function jd(e, t) {
  do {
    var n = he;
    try {
      if ((oa(), (bo.current = wl), xl)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((kn = 0),
        (ye = ve = ce = null),
        (zr = !1),
        (to = 0),
        (ga.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (oo = t), (he = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = Ee),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            f = s,
            m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = f.alternate;
            g
              ? ((f.updateQueue = g.updateQueue),
                (f.memoizedState = g.memoizedState),
                (f.lanes = g.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = Iu(i);
          if (x !== null) {
            (x.flags &= -257),
              zu(x, i, s, l, t),
              x.mode & 1 && Mu(l, u, t),
              (t = x),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(l, u, t), Ea();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ae && s.mode & 1) {
          var j = Iu(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              zu(j, i, s, l, t),
              na(or(a, s));
            break e;
          }
        }
        (l = a = or(a, s)),
          ge !== 4 && (ge = 2),
          $r === null ? ($r = [l]) : $r.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = ad(l, a, t);
              Nu(l, p);
              break e;
            case 1:
              s = a;
              var d = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = ud(l, s, t);
                Nu(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Od(n);
    } catch (E) {
      (t = E), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nd() {
  var e = Sl.current;
  return (Sl.current = wl), e === null ? wl : e;
}
function Ea() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    we === null || (!(jn & 268435455) && !(Al & 268435455)) || Ut(we, Ee);
}
function kl(e, t) {
  var n = Y;
  Y |= 2;
  var r = Nd();
  (we !== e || Ee !== t) && ((St = null), yn(e, t));
  do
    try {
      nv();
      break;
    } catch (o) {
      jd(e, o);
    }
  while (!0);
  if ((oa(), (Y = n), (Sl.current = r), he !== null)) throw Error(R(261));
  return (we = null), (Ee = 0), ge;
}
function nv() {
  for (; he !== null; ) Td(he);
}
function rv() {
  for (; he !== null && !Oh(); ) Td(he);
}
function Td(e) {
  var t = Rd(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? Od(e) : (he = t),
    (ga.current = null);
}
function Od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gm(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (he = null);
        return;
      }
    } else if (((n = Xm(n, t, He)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function cn(e, t, n) {
  var r = q,
    o = Je.transition;
  try {
    (Je.transition = null), (q = 1), ov(e, t, n, r);
  } finally {
    (Je.transition = o), (q = r);
  }
  return null;
}
function ov(e, t, n, r) {
  do qn();
  while (Wt !== null);
  if (Y & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Fh(e, l),
    e === we && ((he = we = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Do ||
      ((Do = !0),
      Ld(ll, function () {
        return qn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Je.transition), (Je.transition = null);
    var i = q;
    q = 1;
    var s = Y;
    (Y |= 4),
      (ga.current = null),
      qm(e, n),
      Ed(n, e),
      km(Xi),
      (sl = !!Yi),
      (Xi = Yi = null),
      (e.current = n),
      Jm(n),
      Ph(),
      (Y = s),
      (q = i),
      (Je.transition = l);
  } else e.current = n;
  if (
    (Do && ((Do = !1), (Wt = e), (Cl = o)),
    (l = e.pendingLanes),
    l === 0 && (Gt = null),
    _h(n.stateNode),
    Be(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (El) throw ((El = !1), (e = ms), (ms = null), e);
  return (
    Cl & 1 && e.tag !== 0 && qn(),
    (l = e.pendingLanes),
    l & 1 ? (e === vs ? Fr++ : ((Fr = 0), (vs = e))) : (Fr = 0),
    on(),
    null
  );
}
function qn() {
  if (Wt !== null) {
    var e = sf(Cl),
      t = Je.transition,
      n = q;
    try {
      if (((Je.transition = null), (q = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (Cl = 0), Y & 6)) throw Error(R(331));
        var o = Y;
        for (Y |= 4, _ = e.current; _ !== null; ) {
          var l = _,
            i = l.child;
          if (_.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (_ = u; _ !== null; ) {
                  var f = _;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, f, l);
                  }
                  var m = f.child;
                  if (m !== null) (m.return = f), (_ = m);
                  else
                    for (; _ !== null; ) {
                      f = _;
                      var g = f.sibling,
                        x = f.return;
                      if ((xd(f), f === u)) {
                        _ = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (_ = g);
                        break;
                      }
                      _ = x;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var j = S.sibling;
                    (S.sibling = null), (S = j);
                  } while (S !== null);
                }
              }
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dr(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (_ = p);
                break e;
              }
              _ = l.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          i = _;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (_ = h);
          else
            e: for (i = d; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fl(9, s);
                  }
                } catch (E) {
                  de(s, s.return, E);
                }
              if (s === i) {
                _ = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (_ = y);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((Y = o), on(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(Rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (Je.transition = t);
    }
  }
  return !1;
}
function Yu(e, t, n) {
  (t = or(n, t)),
    (t = ad(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Le()),
    e !== null && (co(e, 1, t), Be(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Yu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = or(n, e)),
            (e = ud(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = Le()),
            t !== null && (co(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function lv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ee & n) === n &&
      (ge === 4 || (ge === 3 && (Ee & 130023424) === Ee && 500 > pe() - xa)
        ? yn(e, 0)
        : (ya |= n)),
    Be(e, t);
}
function Pd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = No), (No <<= 1), !(No & 130023424) && (No = 4194304))
      : (t = 1));
  var n = Le();
  (e = Rt(e, t)), e !== null && (co(e, t, n), Be(e, n));
}
function iv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pd(e, n);
}
function sv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Pd(e, n);
}
var Rd;
Rd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), Ym(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), ae && t.flags & 1048576 && Mf(t, hl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xo(e, t), (e = t.pendingProps);
      var o = er(t, Pe.current);
      Zn(t, n), (o = da(null, t, r, e, o, n));
      var l = pa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((l = !0), dl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            sa(t),
            (o.updater = Dl),
            (t.stateNode = o),
            (o._reactInternals = t),
            os(t, r, e, n),
            (t = ss(null, t, r, !0, l, n)))
          : ((t.tag = 0), ae && l && ea(t), Re(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = uv(r)),
          (e = lt(r, e)),
          o)
        ) {
          case 0:
            t = is(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = $u(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : lt(r, o)),
        is(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : lt(r, o)),
        Fu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((pd(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          $f(e, t),
          gl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = or(Error(R(423)), t)), (t = Au(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = or(Error(R(424)), t)), (t = Au(e, t, r, n, o));
            break e;
          } else
            for (
              We = Yt(t.stateNode.containerInfo.firstChild),
                Ke = t,
                ae = !0,
                st = null,
                n = Vf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === o)) {
            t = Lt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uf(t),
        e === null && ts(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Gi(r, o) ? (i = null) : l !== null && Gi(r, l) && (t.flags |= 32),
        dd(e, t),
        Re(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ts(t), null;
    case 13:
      return hd(e, t, n);
    case 4:
      return (
        aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : lt(r, o)),
        Du(e, t, r, o, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          oe(ml, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (ct(l.value, i)) {
            if (l.children === o.children && !Fe.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Tt(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      ns(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  ns(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Re(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (o = et(o)),
        (r = r(o)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = lt(r, t.pendingProps)),
        (o = lt(r.type, o)),
        $u(e, t, r, o, n)
      );
    case 15:
      return cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : lt(r, o)),
        Xo(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), dl(t)) : (e = !1),
        Zn(t, n),
        Af(t, r, o),
        os(t, r, o, n),
        ss(null, t, r, !0, e, n)
      );
    case 19:
      return md(e, t, n);
    case 22:
      return fd(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Ld(e, t) {
  return nf(e, t);
}
function av(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function qe(e, t, n, r) {
  return new av(e, t, n, r);
}
function Ca(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function uv(e) {
  if (typeof e == "function") return Ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Us)) return 11;
    if (e === Hs) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ca(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dn:
        return xn(n.children, o, l, t);
      case Vs:
        (i = 8), (o |= 8);
        break;
      case Oi:
        return (
          (e = qe(12, n, t, o | 2)), (e.elementType = Oi), (e.lanes = l), e
        );
      case Pi:
        return (e = qe(13, n, t, o)), (e.elementType = Pi), (e.lanes = l), e;
      case Ri:
        return (e = qe(19, n, t, o)), (e.elementType = Ri), (e.lanes = l), e;
      case Ac:
        return Bl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $c:
              i = 10;
              break e;
            case Fc:
              i = 9;
              break e;
            case Us:
              i = 11;
              break e;
            case Hs:
              i = 14;
              break e;
            case Ft:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function xn(e, t, n, r) {
  return (e = qe(7, e, r, t)), (e.lanes = n), e;
}
function Bl(e, t, n, r) {
  return (
    (e = qe(22, e, r, t)),
    (e.elementType = Ac),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xi(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function wi(e, t, n) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ei(0)),
    (this.expirationTimes = ei(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ei(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ka(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new cv(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = qe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sa(l),
    e
  );
}
function fv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _d(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Lf(e, n, t);
  }
  return t;
}
function Md(e, t, n, r, o, l, i, s, a) {
  return (
    (e = ka(n, r, !0, e, o, l, i, s, a)),
    (e.context = _d(null)),
    (n = e.current),
    (r = Le()),
    (o = Zt(n)),
    (l = Tt(r, o)),
    (l.callback = t ?? null),
    Xt(n, l, o),
    (e.current.lanes = o),
    co(e, o, r),
    Be(e, r),
    e
  );
}
function Vl(e, t, n, r) {
  var o = t.current,
    l = Le(),
    i = Zt(o);
  return (
    (n = _d(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(o, t, i)),
    e !== null && (ut(e, o, i, l), Qo(e, o, i)),
    i
  );
}
function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ja(e, t) {
  Xu(e, t), (e = e.alternate) && Xu(e, t);
}
function dv() {
  return null;
}
var Id =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
Ul.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Vl(e, t, null, null);
};
Ul.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      Vl(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function Ul(e) {
  this._internalRoot = e;
}
Ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && df(e);
  }
};
function Ta(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gu() {}
function pv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = jl(i);
        l.call(u);
      };
    }
    var i = Md(t, r, e, 0, null, !1, !1, "", Gu);
    return (
      (e._reactRootContainer = i),
      (e[Pt] = i.current),
      Gr(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = jl(a);
      s.call(u);
    };
  }
  var a = ka(e, 0, !1, null, null, !1, !1, "", Gu);
  return (
    (e._reactRootContainer = a),
    (e[Pt] = a.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      Vl(t, a, n, r);
    }),
    a
  );
}
function Wl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = jl(i);
        s.call(a);
      };
    }
    Vl(t, i, e, o);
  } else i = pv(n, t, e, o, r);
  return jl(i);
}
af = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 &&
          (Qs(t, n | 1), Be(t, pe()), !(Y & 6) && ((lr = pe() + 500), on()));
      }
      break;
    case 13:
      Nn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var o = Le();
          ut(r, e, 1, o);
        }
      }),
        ja(e, 1);
  }
};
bs = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Le();
      ut(t, e, 134217728, n);
    }
    ja(e, 134217728);
  }
};
uf = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Le();
      ut(n, e, t, r);
    }
    ja(e, t);
  }
};
cf = function () {
  return q;
};
ff = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Bi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Mi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Il(r);
            if (!o) throw Error(R(90));
            Vc(r), Mi(r, o);
          }
        }
      }
      break;
    case "textarea":
      Hc(e, n);
      break;
    case "select":
      (t = n.value), t != null && bn(e, !!n.multiple, t, !1);
  }
};
Gc = wa;
Zc = Nn;
var hv = { usingClientEntryPoint: !1, Events: [po, Bn, Il, Yc, Xc, wa] },
  Cr = {
    findFiberByHostInstance: hn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mv = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ef(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || dv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (Rl = $o.inject(mv)), (ht = $o);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hv;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ta(t)) throw Error(R(200));
  return fv(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!Ta(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = Id;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ka(e, 1, !1, null, null, n, !1, r, o)),
    (e[Pt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = ef(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return Nn(e);
};
Ye.hydrate = function (e, t, n) {
  if (!Hl(t)) throw Error(R(200));
  return Wl(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!Ta(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Id;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Md(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Pt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ul(t);
};
Ye.render = function (e, t, n) {
  if (!Hl(t)) throw Error(R(200));
  return Wl(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!Hl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Nn(function () {
        Wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = wa;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hl(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Wl(e, t, n, !1, r);
};
Ye.version = "18.2.0-next-9e3b772b8-20220608";
function zd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd);
    } catch (e) {
      console.error(e);
    }
}
zd(), (_c.exports = Ye);
var Dd = _c.exports;
const gn = ao(Dd);
var Zu = Dd;
(Ni.createRoot = Zu.createRoot), (Ni.hydrateRoot = Zu.hydrateRoot);
var $d = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (l = o(l, r(s)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == "string" || typeof l == "number") return l;
      if (typeof l != "object") return "";
      if (Array.isArray(l)) return n.apply(null, l);
      if (
        l.toString !== Object.prototype.toString &&
        !l.toString.toString().includes("[native code]")
      )
        return l.toString();
      var i = "";
      for (var s in l) t.call(l, s) && l[s] && (i = o(i, s));
      return i;
    }
    function o(l, i) {
      return i ? (l ? l + " " + i : l + i) : l;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})($d);
var vv = $d.exports;
const J = ao(vv);
function xs() {
  return (
    (xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xs.apply(this, arguments)
  );
}
function Fd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qu(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function gv(e) {
  var t = yv(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function yv(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ad(e, t, n) {
  var r = v.useRef(e !== void 0),
    o = v.useState(t),
    l = o[0],
    i = o[1],
    s = e !== void 0,
    a = r.current;
  return (
    (r.current = s),
    !s && a && l !== t && i(t),
    [
      s ? e : l,
      v.useCallback(
        function (u) {
          for (
            var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), g = 1;
            g < f;
            g++
          )
            m[g - 1] = arguments[g];
          n && n.apply(void 0, [u].concat(m)), i(u);
        },
        [n]
      ),
    ]
  );
}
function xv(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      l = n,
      i = l[qu(r)],
      s = l[r],
      a = Fd(l, [qu(r), r].map(gv)),
      u = t[r],
      f = Ad(s, i, e[u]),
      m = f[0],
      g = f[1];
    return xs({}, a, ((o = {}), (o[r] = m), (o[u] = g), o));
  }, e);
}
function ws(e, t) {
  return (
    (ws = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    ws(e, t)
  );
}
function wv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ws(e, t);
}
const Sv = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Ev = "xs",
  Bd = v.createContext({ prefixes: {}, breakpoints: Sv, minBreakpoint: Ev });
function se(e, t) {
  const { prefixes: n } = v.useContext(Bd);
  return e || n[t] || t;
}
function Oa() {
  const { dir: e } = v.useContext(Bd);
  return e === "rtl";
}
function pr(e) {
  return (e && e.ownerDocument) || document;
}
function Cv(e) {
  var t = pr(e);
  return (t && t.defaultView) || window;
}
function kv(e, t) {
  return Cv(e).getComputedStyle(e, t);
}
var jv = /([A-Z])/g;
function Nv(e) {
  return e.replace(jv, "-$1").toLowerCase();
}
var Tv = /^ms-/;
function Fo(e) {
  return Nv(e).replace(Tv, "-ms-");
}
var Ov =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Pv(e) {
  return !!(e && Ov.test(e));
}
function wn(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Fo(t)) || kv(e).getPropertyValue(Fo(t));
  Object.keys(t).forEach(function (o) {
    var l = t[o];
    !l && l !== 0
      ? e.style.removeProperty(Fo(o))
      : Pv(o)
      ? (r += o + "(" + l + ") ")
      : (n += Fo(o) + ": " + l + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var Vd = { exports: {} },
  Rv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Lv = Rv,
  _v = Lv;
function Ud() {}
function Hd() {}
Hd.resetWarningCache = Ud;
var Mv = function () {
  function e(r, o, l, i, s, a) {
    if (a !== _v) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Hd,
    resetWarningCache: Ud,
  };
  return (n.PropTypes = n), n;
};
Vd.exports = Mv();
var Iv = Vd.exports;
const Jo = ao(Iv),
  Ju = { disabled: !1 },
  Wd = Ct.createContext(null);
var zv = function (t) {
    return t.scrollTop;
  },
  Pr = "unmounted",
  fn = "exited",
  Bt = "entering",
  pn = "entered",
  Ss = "exiting",
  It = (function (e) {
    wv(t, e);
    function t(r, o) {
      var l;
      l = e.call(this, r, o) || this;
      var i = o,
        s = i && !i.isMounting ? r.enter : r.appear,
        a;
      return (
        (l.appearStatus = null),
        r.in
          ? s
            ? ((a = fn), (l.appearStatus = Bt))
            : (a = pn)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = Pr)
          : (a = fn),
        (l.state = { status: a }),
        (l.nextCallback = null),
        l
      );
    }
    t.getDerivedStateFromProps = function (o, l) {
      var i = o.in;
      return i && l.status === Pr ? { status: fn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var l = null;
        if (o !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== Bt && i !== pn && (l = Bt)
            : (i === Bt || i === pn) && (l = Ss);
        }
        this.updateStatus(!1, l);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          l,
          i,
          s;
        return (
          (l = i = s = o),
          o != null &&
            typeof o != "number" &&
            ((l = o.exit),
            (i = o.enter),
            (s = o.appear !== void 0 ? o.appear : i)),
          { exit: l, enter: i, appear: s }
        );
      }),
      (n.updateStatus = function (o, l) {
        if ((o === void 0 && (o = !1), l !== null))
          if ((this.cancelNextCallback(), l === Bt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : gn.findDOMNode(this);
              i && zv(i);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === fn &&
            this.setState({ status: Pr });
      }),
      (n.performEnter = function (o) {
        var l = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [s] : [gn.findDOMNode(this), s],
          u = a[0],
          f = a[1],
          m = this.getTimeouts(),
          g = s ? m.appear : m.enter;
        if ((!o && !i) || Ju.disabled) {
          this.safeSetState({ status: pn }, function () {
            l.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, f),
          this.safeSetState({ status: Bt }, function () {
            l.props.onEntering(u, f),
              l.onTransitionEnd(g, function () {
                l.safeSetState({ status: pn }, function () {
                  l.props.onEntered(u, f);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          l = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : gn.findDOMNode(this);
        if (!l || Ju.disabled) {
          this.safeSetState({ status: fn }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Ss }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(i.exit, function () {
                o.safeSetState({ status: fn }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, l) {
        (l = this.setNextCallback(l)), this.setState(o, l);
      }),
      (n.setNextCallback = function (o) {
        var l = this,
          i = !0;
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (l.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, l) {
        this.setNextCallback(l);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : gn.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!i || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            u = a[0],
            f = a[1];
          this.props.addEndListener(u, f);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Pr) return null;
        var l = this.props,
          i = l.children;
        l.in,
          l.mountOnEnter,
          l.unmountOnExit,
          l.appear,
          l.enter,
          l.exit,
          l.timeout,
          l.addEndListener,
          l.onEnter,
          l.onEntering,
          l.onEntered,
          l.onExit,
          l.onExiting,
          l.onExited,
          l.nodeRef;
        var s = Fd(l, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Ct.createElement(
          Wd.Provider,
          { value: null },
          typeof i == "function"
            ? i(o, s)
            : Ct.cloneElement(Ct.Children.only(i), s)
        );
      }),
      t
    );
  })(Ct.Component);
It.contextType = Wd;
It.propTypes = {};
function Mn() {}
It.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Mn,
  onEntering: Mn,
  onEntered: Mn,
  onExit: Mn,
  onExiting: Mn,
  onExited: Mn,
};
It.UNMOUNTED = Pr;
It.EXITED = fn;
It.ENTERING = Bt;
It.ENTERED = pn;
It.EXITING = Ss;
const Dv = It,
  hr = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
var Es = !1,
  Cs = !1;
try {
  var Si = {
    get passive() {
      return (Es = !0);
    },
    get once() {
      return (Cs = Es = !0);
    },
  };
  hr &&
    (window.addEventListener("test", Si, Si),
    window.removeEventListener("test", Si, !0));
} catch {}
function Kd(e, t, n, r) {
  if (r && typeof r != "boolean" && !Cs) {
    var o = r.once,
      l = r.capture,
      i = n;
    !Cs &&
      o &&
      ((i =
        n.__once ||
        function s(a) {
          this.removeEventListener(t, s, l), n.call(this, a);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, Es ? r : l);
  }
  e.addEventListener(t, n, r);
}
function ks(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o);
}
function Nt(e, t, n, r) {
  return (
    Kd(e, t, n, r),
    function () {
      ks(e, t, n, r);
    }
  );
}
function $v(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function Fv(e) {
  var t = wn(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Av(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r || $v(e, "transitionend", !0);
    }, t + n),
    l = Nt(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(o), l();
  };
}
function Qd(e, t, n, r) {
  n == null && (n = Fv(e) || 0);
  var o = Av(e, n, r),
    l = Nt(e, "transitionend", t);
  return function () {
    o(), l();
  };
}
function ec(e, t) {
  const n = wn(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Bv(e, t) {
  const n = ec(e, "transitionDuration"),
    r = ec(e, "transitionDelay"),
    o = Qd(
      e,
      (l) => {
        l.target === e && (o(), t(l));
      },
      n + r
    );
}
function Vv(e) {
  e.offsetHeight;
}
const tc = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function Uv(e, t) {
  const n = tc(e),
    r = tc(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function ln(e, t) {
  return v.useMemo(() => Uv(e, t), [e, t]);
}
function Nl(e) {
  return e && "setState" in e ? gn.findDOMNode(e) : e ?? null;
}
const Hv = Ct.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: l,
        addEndListener: i,
        children: s,
        childRef: a,
        ...u
      },
      f
    ) => {
      const m = v.useRef(null),
        g = ln(m, a),
        x = (k) => {
          g(Nl(k));
        },
        w = (k) => (N) => {
          k && m.current && k(m.current, N);
        },
        S = v.useCallback(w(e), [e]),
        j = v.useCallback(w(t), [t]),
        p = v.useCallback(w(n), [n]),
        d = v.useCallback(w(r), [r]),
        h = v.useCallback(w(o), [o]),
        y = v.useCallback(w(l), [l]),
        E = v.useCallback(w(i), [i]);
      return c.jsx(Dv, {
        ref: f,
        ...u,
        onEnter: S,
        onEntered: p,
        onEntering: j,
        onExit: d,
        onExited: y,
        onExiting: h,
        addEndListener: E,
        nodeRef: m,
        children:
          typeof s == "function"
            ? (k, N) => s(k, { ...N, ref: x })
            : Ct.cloneElement(s, { ref: x }),
      });
    }
  ),
  Wv = Hv;
function Kv(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Te(e) {
  const t = Kv(e);
  return v.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const Pa = (e) =>
  v.forwardRef((t, n) =>
    c.jsx("div", { ...t, ref: n, className: J(t.className, e) })
  );
function js() {
  return v.useState(null);
}
function Ra() {
  const e = v.useRef(!0),
    t = v.useRef(() => e.current);
  return (
    v.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function Qv(e) {
  const t = v.useRef(null);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const bv =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  Yv = typeof document < "u",
  Ns = Yv || bv ? v.useLayoutEffect : v.useEffect,
  Xv = ["as", "disabled"];
function Gv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Zv(e) {
  return !e || e.trim() === "#";
}
function bd({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: l,
  onClick: i,
  tabIndex: s = 0,
  type: a,
}) {
  e || (n != null || r != null || o != null ? (e = "a") : (e = "button"));
  const u = { tagName: e };
  if (e === "button") return [{ type: a || "button", disabled: t }, u];
  const f = (g) => {
      if (((t || (e === "a" && Zv(n))) && g.preventDefault(), t)) {
        g.stopPropagation();
        return;
      }
      i == null || i(g);
    },
    m = (g) => {
      g.key === " " && (g.preventDefault(), f(g));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: l ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: f,
        onKeyDown: m,
      },
      u,
    ]
  );
}
const Yd = v.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = Gv(e, Xv);
  const [l, { tagName: i }] = bd(Object.assign({ tagName: n, disabled: r }, o));
  return c.jsx(i, Object.assign({}, o, l, { ref: t }));
});
Yd.displayName = "Button";
const qv = { [Bt]: "show", [pn]: "show" },
  Xd = v.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
      },
      l
    ) => {
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o,
        },
        s = v.useCallback(
          (a, u) => {
            Vv(a), r == null || r(a, u);
          },
          [r]
        );
      return c.jsx(Wv, {
        ref: l,
        addEndListener: Bv,
        ...i,
        onEnter: s,
        childRef: t.ref,
        children: (a, u) =>
          v.cloneElement(t, {
            ...u,
            className: J("fade", e, t.props.className, qv[a], n[a]),
          }),
      });
    }
  );
Xd.displayName = "Fade";
const Tl = Xd,
  Jv = {
    "aria-label": Jo.string,
    onClick: Jo.func,
    variant: Jo.oneOf(["white"]),
  },
  La = v.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, o) =>
      c.jsx("button", {
        ref: o,
        type: "button",
        className: J("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
La.displayName = "CloseButton";
La.propTypes = Jv;
const eg = La,
  Gd = v.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: o = !1,
        disabled: l = !1,
        className: i,
        ...s
      },
      a
    ) => {
      const u = se(t, "btn"),
        [f, { tagName: m }] = bd({ tagName: e, disabled: l, ...s }),
        g = m;
      return c.jsx(g, {
        ...f,
        ...s,
        ref: a,
        disabled: l,
        className: J(
          i,
          u,
          o && "active",
          n && `${u}-${n}`,
          r && `${u}-${r}`,
          s.href && l && "disabled"
        ),
      });
    }
  );
Gd.displayName = "Button";
const xe = Gd,
  Zd = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
      (t = se(t, "card-body")), c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
Zd.displayName = "CardBody";
const qd = Zd,
  Jd = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
      (t = se(t, "card-footer")), c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
Jd.displayName = "CardFooter";
const tg = Jd,
  ep = v.createContext(null);
ep.displayName = "CardHeaderContext";
const ng = ep,
  tp = v.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
    const l = se(e, "card-header"),
      i = v.useMemo(() => ({ cardHeaderBsPrefix: l }), [l]);
    return c.jsx(ng.Provider, {
      value: i,
      children: c.jsx(n, { ref: o, ...r, className: J(t, l) }),
    });
  });
tp.displayName = "CardHeader";
const rg = tp,
  np = v.forwardRef(
    ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...o }, l) => {
      const i = se(e, "card-img");
      return c.jsx(r, { ref: l, className: J(n ? `${i}-${n}` : i, t), ...o });
    }
  );
np.displayName = "CardImg";
const og = np,
  rp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
      (t = se(t, "card-img-overlay")),
      c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
rp.displayName = "CardImgOverlay";
const lg = rp,
  op = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "a", ...r }, o) => (
      (t = se(t, "card-link")), c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
op.displayName = "CardLink";
const ig = op,
  sg = Pa("h6"),
  lp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = sg, ...r }, o) => (
      (t = se(t, "card-subtitle")),
      c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
lp.displayName = "CardSubtitle";
const ag = lp,
  ip = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "p", ...r }, o) => (
      (t = se(t, "card-text")), c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
ip.displayName = "CardText";
const ug = ip,
  cg = Pa("h5"),
  sp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = cg, ...r }, o) => (
      (t = se(t, "card-title")), c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
sp.displayName = "CardTitle";
const fg = sp,
  ap = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: o,
        body: l = !1,
        children: i,
        as: s = "div",
        ...a
      },
      u
    ) => {
      const f = se(e, "card");
      return c.jsx(s, {
        ref: u,
        ...a,
        className: J(
          t,
          f,
          n && `bg-${n}`,
          r && `text-${r}`,
          o && `border-${o}`
        ),
        children: l ? c.jsx(qd, { children: i }) : i,
      });
    }
  );
ap.displayName = "Card";
const yt = Object.assign(ap, {
  Img: og,
  Title: fg,
  Subtitle: ag,
  Body: qd,
  Link: ig,
  Text: ug,
  Header: rg,
  Footer: tg,
  ImgOverlay: lg,
});
function dg(e) {
  const t = v.useRef(e);
  return (t.current = e), t;
}
function _a(e) {
  const t = dg(e);
  v.useEffect(() => () => t.current(), []);
}
const Ts = 2 ** 31 - 1;
function up(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Ts ? setTimeout(t, r) : setTimeout(() => up(e, t, n), Ts);
}
function pg() {
  const e = Ra(),
    t = v.useRef();
  return (
    _a(() => clearTimeout(t.current)),
    v.useMemo(() => {
      const n = () => clearTimeout(t.current);
      function r(o, l = 0) {
        e() &&
          (n(),
          l <= Ts ? (t.current = setTimeout(o, l)) : up(t, o, Date.now() + l));
      }
      return { set: r, clear: n, handleRef: t };
    }, [])
  );
}
var hg = Function.prototype.bind.call(Function.prototype.call, [].slice);
function dn(e, t) {
  return hg(e.querySelectorAll(t));
}
function mg() {
  const [, e] = v.useReducer((t) => !t, !1);
  return e;
}
var nc = Object.prototype.hasOwnProperty;
function rc(e, t, n) {
  for (n of e.keys()) if (Ar(n, t)) return n;
}
function Ar(e, t) {
  var n, r, o;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Ar(e[r], t[r]); );
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((o = r),
          (o && typeof o == "object" && ((o = rc(t, o)), !o)) || !t.has(o))
        )
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((o = r[0]),
          (o && typeof o == "object" && ((o = rc(t, o)), !o)) ||
            !Ar(r[1], t.get(o)))
        )
          return !1;
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (
          (nc.call(e, n) && ++r && !nc.call(t, n)) ||
          !(n in t) ||
          !Ar(e[n], t[n])
        )
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function vg(e) {
  const t = Ra();
  return [
    e[0],
    v.useCallback(
      (n) => {
        if (t()) return e[1](n);
      },
      [t, e[1]]
    ),
  ];
}
var Ve = "top",
  nt = "bottom",
  rt = "right",
  Ue = "left",
  Ma = "auto",
  mo = [Ve, nt, rt, Ue],
  ir = "start",
  lo = "end",
  gg = "clippingParents",
  cp = "viewport",
  kr = "popper",
  yg = "reference",
  oc = mo.reduce(function (e, t) {
    return e.concat([t + "-" + ir, t + "-" + lo]);
  }, []),
  fp = [].concat(mo, [Ma]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ir, t + "-" + lo]);
  }, []),
  xg = "beforeRead",
  wg = "read",
  Sg = "afterRead",
  Eg = "beforeMain",
  Cg = "main",
  kg = "afterMain",
  jg = "beforeWrite",
  Ng = "write",
  Tg = "afterWrite",
  Og = [xg, wg, Sg, Eg, Cg, kg, jg, Ng, Tg];
function vt(e) {
  return e.split("-")[0];
}
function be(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Tn(e) {
  var t = be(e).Element;
  return e instanceof t || e instanceof Element;
}
function gt(e) {
  var t = be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ia(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Sn = Math.max,
  Ol = Math.min,
  sr = Math.round;
function Os() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function dp() {
  return !/^((?!chrome|android).)*safari/i.test(Os());
}
function ar(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    l = 1;
  t &&
    gt(e) &&
    ((o = (e.offsetWidth > 0 && sr(r.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && sr(r.height) / e.offsetHeight) || 1));
  var i = Tn(e) ? be(e) : window,
    s = i.visualViewport,
    a = !dp() && n,
    u = (r.left + (a && s ? s.offsetLeft : 0)) / o,
    f = (r.top + (a && s ? s.offsetTop : 0)) / l,
    m = r.width / o,
    g = r.height / l;
  return {
    width: m,
    height: g,
    top: f,
    right: u + m,
    bottom: f + g,
    left: u,
    x: u,
    y: f,
  };
}
function za(e) {
  var t = ar(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function pp(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ia(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function tn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _t(e) {
  return be(e).getComputedStyle(e);
}
function Pg(e) {
  return ["table", "td", "th"].indexOf(tn(e)) >= 0;
}
function sn(e) {
  return ((Tn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Kl(e) {
  return tn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Ia(e) ? e.host : null) || sn(e);
}
function lc(e) {
  return !gt(e) || _t(e).position === "fixed" ? null : e.offsetParent;
}
function Rg(e) {
  var t = /firefox/i.test(Os()),
    n = /Trident/i.test(Os());
  if (n && gt(e)) {
    var r = _t(e);
    if (r.position === "fixed") return null;
  }
  var o = Kl(e);
  for (Ia(o) && (o = o.host); gt(o) && ["html", "body"].indexOf(tn(o)) < 0; ) {
    var l = _t(o);
    if (
      l.transform !== "none" ||
      l.perspective !== "none" ||
      l.contain === "paint" ||
      ["transform", "perspective"].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === "filter") ||
      (t && l.filter && l.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function vo(e) {
  for (var t = be(e), n = lc(e); n && Pg(n) && _t(n).position === "static"; )
    n = lc(n);
  return n &&
    (tn(n) === "html" || (tn(n) === "body" && _t(n).position === "static"))
    ? t
    : n || Rg(e) || t;
}
function Da(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Br(e, t, n) {
  return Sn(e, Ol(t, n));
}
function Lg(e, t, n) {
  var r = Br(e, t, n);
  return r > n ? n : r;
}
function hp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mp(e) {
  return Object.assign({}, hp(), e);
}
function vp(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var _g = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    mp(typeof t != "number" ? t : vp(t, mo))
  );
};
function Mg(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    l = n.elements.arrow,
    i = n.modifiersData.popperOffsets,
    s = vt(n.placement),
    a = Da(s),
    u = [Ue, rt].indexOf(s) >= 0,
    f = u ? "height" : "width";
  if (!(!l || !i)) {
    var m = _g(o.padding, n),
      g = za(l),
      x = a === "y" ? Ve : Ue,
      w = a === "y" ? nt : rt,
      S =
        n.rects.reference[f] + n.rects.reference[a] - i[a] - n.rects.popper[f],
      j = i[a] - n.rects.reference[a],
      p = vo(l),
      d = p ? (a === "y" ? p.clientHeight || 0 : p.clientWidth || 0) : 0,
      h = S / 2 - j / 2,
      y = m[x],
      E = d - g[f] - m[w],
      k = d / 2 - g[f] / 2 + h,
      N = Br(y, k, E),
      O = a;
    n.modifiersData[r] = ((t = {}), (t[O] = N), (t.centerOffset = N - k), t);
  }
}
function Ig(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (pp(t.elements.popper, o) && (t.elements.arrow = o)));
}
const zg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Mg,
  effect: Ig,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ur(e) {
  return e.split("-")[1];
}
var Dg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function $g(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: sr(n * o) / o || 0, y: sr(r * o) / o || 0 };
}
function ic(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    l = e.variation,
    i = e.offsets,
    s = e.position,
    a = e.gpuAcceleration,
    u = e.adaptive,
    f = e.roundOffsets,
    m = e.isFixed,
    g = i.x,
    x = g === void 0 ? 0 : g,
    w = i.y,
    S = w === void 0 ? 0 : w,
    j = typeof f == "function" ? f({ x, y: S }) : { x, y: S };
  (x = j.x), (S = j.y);
  var p = i.hasOwnProperty("x"),
    d = i.hasOwnProperty("y"),
    h = Ue,
    y = Ve,
    E = window;
  if (u) {
    var k = vo(n),
      N = "clientHeight",
      O = "clientWidth";
    if (
      (k === be(n) &&
        ((k = sn(n)),
        _t(k).position !== "static" &&
          s === "absolute" &&
          ((N = "scrollHeight"), (O = "scrollWidth"))),
      (k = k),
      o === Ve || ((o === Ue || o === rt) && l === lo))
    ) {
      y = nt;
      var I = m && k === E && E.visualViewport ? E.visualViewport.height : k[N];
      (S -= I - r.height), (S *= a ? 1 : -1);
    }
    if (o === Ue || ((o === Ve || o === nt) && l === lo)) {
      h = rt;
      var L = m && k === E && E.visualViewport ? E.visualViewport.width : k[O];
      (x -= L - r.width), (x *= a ? 1 : -1);
    }
  }
  var $ = Object.assign({ position: s }, u && Dg),
    X = f === !0 ? $g({ x, y: S }, be(n)) : { x, y: S };
  if (((x = X.x), (S = X.y), a)) {
    var A;
    return Object.assign(
      {},
      $,
      ((A = {}),
      (A[y] = d ? "0" : ""),
      (A[h] = p ? "0" : ""),
      (A.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + x + "px, " + S + "px)"
          : "translate3d(" + x + "px, " + S + "px, 0)"),
      A)
    );
  }
  return Object.assign(
    {},
    $,
    ((t = {}),
    (t[y] = d ? S + "px" : ""),
    (t[h] = p ? x + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Fg(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    l = n.adaptive,
    i = l === void 0 ? !0 : l,
    s = n.roundOffsets,
    a = s === void 0 ? !0 : s,
    u = {
      placement: vt(t.placement),
      variation: ur(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ic(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: a,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ic(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: a,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Ag = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Fg,
  data: {},
};
var Ao = { passive: !0 };
function Bg(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    l = o === void 0 ? !0 : o,
    i = r.resize,
    s = i === void 0 ? !0 : i,
    a = be(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    l &&
      u.forEach(function (f) {
        f.addEventListener("scroll", n.update, Ao);
      }),
    s && a.addEventListener("resize", n.update, Ao),
    function () {
      l &&
        u.forEach(function (f) {
          f.removeEventListener("scroll", n.update, Ao);
        }),
        s && a.removeEventListener("resize", n.update, Ao);
    }
  );
}
const Vg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Bg,
  data: {},
};
var Ug = { left: "right", right: "left", bottom: "top", top: "bottom" };
function el(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ug[t];
  });
}
var Hg = { start: "end", end: "start" };
function sc(e) {
  return e.replace(/start|end/g, function (t) {
    return Hg[t];
  });
}
function $a(e) {
  var t = be(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Fa(e) {
  return ar(sn(e)).left + $a(e).scrollLeft;
}
function Wg(e, t) {
  var n = be(e),
    r = sn(e),
    o = n.visualViewport,
    l = r.clientWidth,
    i = r.clientHeight,
    s = 0,
    a = 0;
  if (o) {
    (l = o.width), (i = o.height);
    var u = dp();
    (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: l, height: i, x: s + Fa(e), y: a };
}
function Kg(e) {
  var t,
    n = sn(e),
    r = $a(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = Sn(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    i = Sn(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + Fa(e),
    a = -r.scrollTop;
  return (
    _t(o || n).direction === "rtl" &&
      (s += Sn(n.clientWidth, o ? o.clientWidth : 0) - l),
    { width: l, height: i, x: s, y: a }
  );
}
function Aa(e) {
  var t = _t(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function gp(e) {
  return ["html", "body", "#document"].indexOf(tn(e)) >= 0
    ? e.ownerDocument.body
    : gt(e) && Aa(e)
    ? e
    : gp(Kl(e));
}
function Vr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = gp(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    l = be(r),
    i = o ? [l].concat(l.visualViewport || [], Aa(r) ? r : []) : r,
    s = t.concat(i);
  return o ? s : s.concat(Vr(Kl(i)));
}
function Ps(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Qg(e, t) {
  var n = ar(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function ac(e, t, n) {
  return t === cp ? Ps(Wg(e, n)) : Tn(t) ? Qg(t, n) : Ps(Kg(sn(e)));
}
function bg(e) {
  var t = Vr(Kl(e)),
    n = ["absolute", "fixed"].indexOf(_t(e).position) >= 0,
    r = n && gt(e) ? vo(e) : e;
  return Tn(r)
    ? t.filter(function (o) {
        return Tn(o) && pp(o, r) && tn(o) !== "body";
      })
    : [];
}
function Yg(e, t, n, r) {
  var o = t === "clippingParents" ? bg(e) : [].concat(t),
    l = [].concat(o, [n]),
    i = l[0],
    s = l.reduce(function (a, u) {
      var f = ac(e, u, r);
      return (
        (a.top = Sn(f.top, a.top)),
        (a.right = Ol(f.right, a.right)),
        (a.bottom = Ol(f.bottom, a.bottom)),
        (a.left = Sn(f.left, a.left)),
        a
      );
    }, ac(e, i, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function yp(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? vt(r) : null,
    l = r ? ur(r) : null,
    i = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    a;
  switch (o) {
    case Ve:
      a = { x: i, y: t.y - n.height };
      break;
    case nt:
      a = { x: i, y: t.y + t.height };
      break;
    case rt:
      a = { x: t.x + t.width, y: s };
      break;
    case Ue:
      a = { x: t.x - n.width, y: s };
      break;
    default:
      a = { x: t.x, y: t.y };
  }
  var u = o ? Da(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (l) {
      case ir:
        a[u] = a[u] - (t[f] / 2 - n[f] / 2);
        break;
      case lo:
        a[u] = a[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return a;
}
function io(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    l = n.strategy,
    i = l === void 0 ? e.strategy : l,
    s = n.boundary,
    a = s === void 0 ? gg : s,
    u = n.rootBoundary,
    f = u === void 0 ? cp : u,
    m = n.elementContext,
    g = m === void 0 ? kr : m,
    x = n.altBoundary,
    w = x === void 0 ? !1 : x,
    S = n.padding,
    j = S === void 0 ? 0 : S,
    p = mp(typeof j != "number" ? j : vp(j, mo)),
    d = g === kr ? yg : kr,
    h = e.rects.popper,
    y = e.elements[w ? d : g],
    E = Yg(Tn(y) ? y : y.contextElement || sn(e.elements.popper), a, f, i),
    k = ar(e.elements.reference),
    N = yp({ reference: k, element: h, strategy: "absolute", placement: o }),
    O = Ps(Object.assign({}, h, N)),
    I = g === kr ? O : k,
    L = {
      top: E.top - I.top + p.top,
      bottom: I.bottom - E.bottom + p.bottom,
      left: E.left - I.left + p.left,
      right: I.right - E.right + p.right,
    },
    $ = e.modifiersData.offset;
  if (g === kr && $) {
    var X = $[o];
    Object.keys(L).forEach(function (A) {
      var G = [rt, nt].indexOf(A) >= 0 ? 1 : -1,
        K = [Ve, nt].indexOf(A) >= 0 ? "y" : "x";
      L[A] += X[K] * G;
    });
  }
  return L;
}
function Xg(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    l = n.rootBoundary,
    i = n.padding,
    s = n.flipVariations,
    a = n.allowedAutoPlacements,
    u = a === void 0 ? fp : a,
    f = ur(r),
    m = f
      ? s
        ? oc
        : oc.filter(function (w) {
            return ur(w) === f;
          })
      : mo,
    g = m.filter(function (w) {
      return u.indexOf(w) >= 0;
    });
  g.length === 0 && (g = m);
  var x = g.reduce(function (w, S) {
    return (
      (w[S] = io(e, { placement: S, boundary: o, rootBoundary: l, padding: i })[
        vt(S)
      ]),
      w
    );
  }, {});
  return Object.keys(x).sort(function (w, S) {
    return x[w] - x[S];
  });
}
function Gg(e) {
  if (vt(e) === Ma) return [];
  var t = el(e);
  return [sc(e), t, sc(t)];
}
function Zg(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        l = o === void 0 ? !0 : o,
        i = n.altAxis,
        s = i === void 0 ? !0 : i,
        a = n.fallbackPlacements,
        u = n.padding,
        f = n.boundary,
        m = n.rootBoundary,
        g = n.altBoundary,
        x = n.flipVariations,
        w = x === void 0 ? !0 : x,
        S = n.allowedAutoPlacements,
        j = t.options.placement,
        p = vt(j),
        d = p === j,
        h = a || (d || !w ? [el(j)] : Gg(j)),
        y = [j].concat(h).reduce(function (Z, te) {
          return Z.concat(
            vt(te) === Ma
              ? Xg(t, {
                  placement: te,
                  boundary: f,
                  rootBoundary: m,
                  padding: u,
                  flipVariations: w,
                  allowedAutoPlacements: S,
                })
              : te
          );
        }, []),
        E = t.rects.reference,
        k = t.rects.popper,
        N = new Map(),
        O = !0,
        I = y[0],
        L = 0;
      L < y.length;
      L++
    ) {
      var $ = y[L],
        X = vt($),
        A = ur($) === ir,
        G = [Ve, nt].indexOf(X) >= 0,
        K = G ? "width" : "height",
        U = io(t, {
          placement: $,
          boundary: f,
          rootBoundary: m,
          altBoundary: g,
          padding: u,
        }),
        H = G ? (A ? rt : Ue) : A ? nt : Ve;
      E[K] > k[K] && (H = el(H));
      var P = el(H),
        M = [];
      if (
        (l && M.push(U[X] <= 0),
        s && M.push(U[H] <= 0, U[P] <= 0),
        M.every(function (Z) {
          return Z;
        }))
      ) {
        (I = $), (O = !1);
        break;
      }
      N.set($, M);
    }
    if (O)
      for (
        var z = w ? 3 : 1,
          F = function (te) {
            var Q = y.find(function (T) {
              var C = N.get(T);
              if (C)
                return C.slice(0, te).every(function (D) {
                  return D;
                });
            });
            if (Q) return (I = Q), "break";
          },
          V = z;
        V > 0;
        V--
      ) {
        var ee = F(V);
        if (ee === "break") break;
      }
    t.placement !== I &&
      ((t.modifiersData[r]._skip = !0), (t.placement = I), (t.reset = !0));
  }
}
const qg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Zg,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function uc(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function cc(e) {
  return [Ve, rt, nt, Ue].some(function (t) {
    return e[t] >= 0;
  });
}
function Jg(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = io(t, { elementContext: "reference" }),
    s = io(t, { altBoundary: !0 }),
    a = uc(i, r),
    u = uc(s, o, l),
    f = cc(a),
    m = cc(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: m,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": f,
      "data-popper-escaped": m,
    }));
}
const ey = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Jg,
};
function ty(e, t, n) {
  var r = vt(e),
    o = [Ue, Ve].indexOf(r) >= 0 ? -1 : 1,
    l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    i = l[0],
    s = l[1];
  return (
    (i = i || 0),
    (s = (s || 0) * o),
    [Ue, rt].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function ny(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    l = o === void 0 ? [0, 0] : o,
    i = fp.reduce(function (f, m) {
      return (f[m] = ty(m, t.rects, l)), f;
    }, {}),
    s = i[t.placement],
    a = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += a),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = i);
}
const ry = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ny,
};
function oy(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = yp({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const ly = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: oy,
  data: {},
};
function iy(e) {
  return e === "x" ? "y" : "x";
}
function sy(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    l = o === void 0 ? !0 : o,
    i = n.altAxis,
    s = i === void 0 ? !1 : i,
    a = n.boundary,
    u = n.rootBoundary,
    f = n.altBoundary,
    m = n.padding,
    g = n.tether,
    x = g === void 0 ? !0 : g,
    w = n.tetherOffset,
    S = w === void 0 ? 0 : w,
    j = io(t, { boundary: a, rootBoundary: u, padding: m, altBoundary: f }),
    p = vt(t.placement),
    d = ur(t.placement),
    h = !d,
    y = Da(p),
    E = iy(y),
    k = t.modifiersData.popperOffsets,
    N = t.rects.reference,
    O = t.rects.popper,
    I =
      typeof S == "function"
        ? S(Object.assign({}, t.rects, { placement: t.placement }))
        : S,
    L =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    X = { x: 0, y: 0 };
  if (k) {
    if (l) {
      var A,
        G = y === "y" ? Ve : Ue,
        K = y === "y" ? nt : rt,
        U = y === "y" ? "height" : "width",
        H = k[y],
        P = H + j[G],
        M = H - j[K],
        z = x ? -O[U] / 2 : 0,
        F = d === ir ? N[U] : O[U],
        V = d === ir ? -O[U] : -N[U],
        ee = t.elements.arrow,
        Z = x && ee ? za(ee) : { width: 0, height: 0 },
        te = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : hp(),
        Q = te[G],
        T = te[K],
        C = Br(0, N[U], Z[U]),
        D = h ? N[U] / 2 - z - C - Q - L.mainAxis : F - C - Q - L.mainAxis,
        B = h ? -N[U] / 2 + z + C + T + L.mainAxis : V + C + T + L.mainAxis,
        ne = t.elements.arrow && vo(t.elements.arrow),
        Ie = ne ? (y === "y" ? ne.clientTop || 0 : ne.clientLeft || 0) : 0,
        ze = (A = $ == null ? void 0 : $[y]) != null ? A : 0,
        zt = H + D - ze - Ie,
        re = H + B - ze,
        an = Br(x ? Ol(P, zt) : P, H, x ? Sn(M, re) : M);
      (k[y] = an), (X[y] = an - H);
    }
    if (s) {
      var Dt,
        bl = y === "x" ? Ve : Ue,
        Yl = y === "x" ? nt : rt,
        xt = k[E],
        Rn = E === "y" ? "height" : "width",
        yo = xt + j[bl],
        xo = xt - j[Yl],
        Ln = [Ve, Ue].indexOf(p) !== -1,
        wo = (Dt = $ == null ? void 0 : $[E]) != null ? Dt : 0,
        b = Ln ? yo : xt - N[Rn] - O[Rn] - wo + L.altAxis,
        wt = Ln ? xt + N[Rn] + O[Rn] - wo - L.altAxis : xo,
        mr = x && Ln ? Lg(b, xt, wt) : Br(x ? b : yo, xt, x ? wt : xo);
      (k[E] = mr), (X[E] = mr - xt);
    }
    t.modifiersData[r] = X;
  }
}
const ay = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sy,
  requiresIfExists: ["offset"],
};
function uy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function cy(e) {
  return e === be(e) || !gt(e) ? $a(e) : uy(e);
}
function fy(e) {
  var t = e.getBoundingClientRect(),
    n = sr(t.width) / e.offsetWidth || 1,
    r = sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function dy(e, t, n) {
  n === void 0 && (n = !1);
  var r = gt(t),
    o = gt(t) && fy(t),
    l = sn(t),
    i = ar(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((tn(t) !== "body" || Aa(l)) && (s = cy(t)),
      gt(t)
        ? ((a = ar(t, !0)), (a.x += t.clientLeft), (a.y += t.clientTop))
        : l && (a.x = Fa(l))),
    {
      x: i.left + s.scrollLeft - a.x,
      y: i.top + s.scrollTop - a.y,
      width: i.width,
      height: i.height,
    }
  );
}
function py(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (l) {
    t.set(l.name, l);
  });
  function o(l) {
    n.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function (s) {
      if (!n.has(s)) {
        var a = t.get(s);
        a && o(a);
      }
    }),
      r.push(l);
  }
  return (
    e.forEach(function (l) {
      n.has(l.name) || o(l);
    }),
    r
  );
}
function hy(e) {
  var t = py(e);
  return Og.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function my(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function vy(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var fc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function dc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function gy(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    l = o === void 0 ? fc : o;
  return function (s, a, u) {
    u === void 0 && (u = l);
    var f = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, fc, l),
        modifiersData: {},
        elements: { reference: s, popper: a },
        attributes: {},
        styles: {},
      },
      m = [],
      g = !1,
      x = {
        state: f,
        setOptions: function (p) {
          var d = typeof p == "function" ? p(f.options) : p;
          S(),
            (f.options = Object.assign({}, l, f.options, d)),
            (f.scrollParents = {
              reference: Tn(s)
                ? Vr(s)
                : s.contextElement
                ? Vr(s.contextElement)
                : [],
              popper: Vr(a),
            });
          var h = hy(vy([].concat(r, f.options.modifiers)));
          return (
            (f.orderedModifiers = h.filter(function (y) {
              return y.enabled;
            })),
            w(),
            x.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var p = f.elements,
              d = p.reference,
              h = p.popper;
            if (dc(d, h)) {
              (f.rects = {
                reference: dy(d, vo(h), f.options.strategy === "fixed"),
                popper: za(h),
              }),
                (f.reset = !1),
                (f.placement = f.options.placement),
                f.orderedModifiers.forEach(function (L) {
                  return (f.modifiersData[L.name] = Object.assign({}, L.data));
                });
              for (var y = 0; y < f.orderedModifiers.length; y++) {
                if (f.reset === !0) {
                  (f.reset = !1), (y = -1);
                  continue;
                }
                var E = f.orderedModifiers[y],
                  k = E.fn,
                  N = E.options,
                  O = N === void 0 ? {} : N,
                  I = E.name;
                typeof k == "function" &&
                  (f = k({ state: f, options: O, name: I, instance: x }) || f);
              }
            }
          }
        },
        update: my(function () {
          return new Promise(function (j) {
            x.forceUpdate(), j(f);
          });
        }),
        destroy: function () {
          S(), (g = !0);
        },
      };
    if (!dc(s, a)) return x;
    x.setOptions(u).then(function (j) {
      !g && u.onFirstUpdate && u.onFirstUpdate(j);
    });
    function w() {
      f.orderedModifiers.forEach(function (j) {
        var p = j.name,
          d = j.options,
          h = d === void 0 ? {} : d,
          y = j.effect;
        if (typeof y == "function") {
          var E = y({ state: f, name: p, instance: x, options: h }),
            k = function () {};
          m.push(E || k);
        }
      });
    }
    function S() {
      m.forEach(function (j) {
        return j();
      }),
        (m = []);
    }
    return x;
  };
}
const yy = gy({ defaultModifiers: [ey, ly, Ag, Vg, ry, qg, ay, zg] }),
  xy = ["enabled", "placement", "strategy", "modifiers"];
function wy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Sy = {
    name: "applyStyles",
    enabled: !1,
    phase: "afterWrite",
    fn: () => {},
  },
  Ey = {
    name: "ariaDescribedBy",
    enabled: !0,
    phase: "afterWrite",
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ("removeAttribute" in t) {
          const r = (t.getAttribute("aria-describedby") || "")
            .split(",")
            .filter((o) => o.trim() !== n.id);
          r.length
            ? t.setAttribute("aria-describedby", r.join(","))
            : t.removeAttribute("aria-describedby");
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        o = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
      if (n.id && o === "tooltip" && "setAttribute" in r) {
        const l = r.getAttribute("aria-describedby");
        if (l && l.split(",").indexOf(n.id) !== -1) return;
        r.setAttribute("aria-describedby", l ? `${l},${n.id}` : n.id);
      }
    },
  },
  Cy = [];
function ky(e, t, n = {}) {
  let {
      enabled: r = !0,
      placement: o = "bottom",
      strategy: l = "absolute",
      modifiers: i = Cy,
    } = n,
    s = wy(n, xy);
  const a = v.useRef(i),
    u = v.useRef(),
    f = v.useCallback(() => {
      var j;
      (j = u.current) == null || j.update();
    }, []),
    m = v.useCallback(() => {
      var j;
      (j = u.current) == null || j.forceUpdate();
    }, []),
    [g, x] = vg(
      v.useState({
        placement: o,
        update: f,
        forceUpdate: m,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })
    ),
    w = v.useMemo(
      () => ({
        name: "updateStateModifier",
        enabled: !0,
        phase: "write",
        requires: ["computeStyles"],
        fn: ({ state: j }) => {
          const p = {},
            d = {};
          Object.keys(j.elements).forEach((h) => {
            (p[h] = j.styles[h]), (d[h] = j.attributes[h]);
          }),
            x({
              state: j,
              styles: p,
              attributes: d,
              update: f,
              forceUpdate: m,
              placement: j.placement,
            });
        },
      }),
      [f, m, x]
    ),
    S = v.useMemo(() => (Ar(a.current, i) || (a.current = i), a.current), [i]);
  return (
    v.useEffect(() => {
      !u.current ||
        !r ||
        u.current.setOptions({
          placement: o,
          strategy: l,
          modifiers: [...S, w, Sy],
        });
    }, [l, o, w, r, S]),
    v.useEffect(() => {
      if (!(!r || e == null || t == null))
        return (
          (u.current = yy(
            e,
            t,
            Object.assign({}, s, {
              placement: o,
              strategy: l,
              modifiers: [...S, Ey, w],
            })
          )),
          () => {
            u.current != null &&
              (u.current.destroy(),
              (u.current = void 0),
              x((j) =>
                Object.assign({}, j, { attributes: {}, styles: { popper: {} } })
              ));
          }
        );
    }, [r, e, t]),
    g
  );
}
function so(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var jy = function () {},
  Ny = jy;
const Ty = ao(Ny),
  pc = () => {};
function Oy(e) {
  return e.button === 0;
}
function Py(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const tl = (e) => e && ("current" in e ? e.current : e),
  hc = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function Ry(e, t = pc, { disabled: n, clickTrigger: r = "click" } = {}) {
  const o = v.useRef(!1),
    l = v.useRef(!1),
    i = v.useCallback(
      (u) => {
        const f = tl(e);
        Ty(
          !!f,
          "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
        ),
          (o.current = !f || Py(u) || !Oy(u) || !!so(f, u.target) || l.current),
          (l.current = !1);
      },
      [e]
    ),
    s = Te((u) => {
      const f = tl(e);
      f && so(f, u.target) && (l.current = !0);
    }),
    a = Te((u) => {
      o.current || t(u);
    });
  v.useEffect(() => {
    var u, f;
    if (n || e == null) return;
    const m = pr(tl(e)),
      g = m.defaultView || window;
    let x =
        (u = g.event) != null ? u : (f = g.parent) == null ? void 0 : f.event,
      w = null;
    hc[r] && (w = Nt(m, hc[r], s, !0));
    const S = Nt(m, r, i, !0),
      j = Nt(m, r, (d) => {
        if (d === x) {
          x = void 0;
          return;
        }
        a(d);
      });
    let p = [];
    return (
      "ontouchstart" in m.documentElement &&
        (p = [].slice.call(m.body.children).map((d) => Nt(d, "mousemove", pc))),
      () => {
        w == null || w(), S(), j(), p.forEach((d) => d());
      }
    );
  }, [e, n, r, i, s, a]);
}
function Ly(e) {
  const t = {};
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((n) => {
          t[n.name] = n;
        }),
      t)
    : e || t;
}
function _y(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function My({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: o,
  fixed: l,
  containerPadding: i,
  arrowElement: s,
  popperConfig: a = {},
}) {
  var u, f, m, g, x;
  const w = Ly(a.modifiers);
  return Object.assign({}, a, {
    placement: n,
    enabled: e,
    strategy: l ? "fixed" : a.strategy,
    modifiers: _y(
      Object.assign({}, w, {
        eventListeners: {
          enabled: t,
          options: (u = w.eventListeners) == null ? void 0 : u.options,
        },
        preventOverflow: Object.assign({}, w.preventOverflow, {
          options: i
            ? Object.assign(
                { padding: i },
                (f = w.preventOverflow) == null ? void 0 : f.options
              )
            : (m = w.preventOverflow) == null
            ? void 0
            : m.options,
        }),
        offset: {
          options: Object.assign(
            { offset: o },
            (g = w.offset) == null ? void 0 : g.options
          ),
        },
        arrow: Object.assign({}, w.arrow, {
          enabled: !!s,
          options: Object.assign(
            {},
            (x = w.arrow) == null ? void 0 : x.options,
            { element: s }
          ),
        }),
        flip: Object.assign({ enabled: !!r }, w.flip),
      })
    ),
  });
}
const Rs = v.createContext(null),
  Ba = (e, t = null) => (e != null ? String(e) : t || null),
  xp = v.createContext(null);
xp.displayName = "NavContext";
const wp = xp,
  Iy = "data-rr-ui-",
  zy = "rrUi";
function Ql(e) {
  return `${Iy}${e}`;
}
function Dy(e) {
  return `${zy}${e}`;
}
const Sp = v.createContext(hr ? window : void 0);
Sp.Provider;
function Va() {
  return v.useContext(Sp);
}
const $y = v.createContext(null),
  Ep = $y,
  Fy = ["as", "active", "eventKey"];
function Ay(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Cp({ key: e, onClick: t, active: n, id: r, role: o, disabled: l }) {
  const i = v.useContext(Rs),
    s = v.useContext(wp),
    a = v.useContext(Ep);
  let u = n;
  const f = { role: o };
  if (s) {
    !o && s.role === "tablist" && (f.role = "tab");
    const m = s.getControllerId(e ?? null),
      g = s.getControlledId(e ?? null);
    (f[Ql("event-key")] = e),
      (f.id = m || r),
      (u = n == null && e != null ? s.activeKey === e : n),
      (u ||
        (!(a != null && a.unmountOnExit) && !(a != null && a.mountOnEnter))) &&
        (f["aria-controls"] = g);
  }
  return (
    f.role === "tab" &&
      ((f["aria-selected"] = u),
      u || (f.tabIndex = -1),
      l && ((f.tabIndex = -1), (f["aria-disabled"] = !0))),
    (f.onClick = Te((m) => {
      l ||
        (t == null || t(m),
        e != null && i && !m.isPropagationStopped() && i(e, m));
    })),
    [f, { isActive: u }]
  );
}
const kp = v.forwardRef((e, t) => {
  let { as: n = Yd, active: r, eventKey: o } = e,
    l = Ay(e, Fy);
  const [i, s] = Cp(Object.assign({ key: Ba(o, l.href), active: r }, l));
  return (
    (i[Ql("active")] = s.isActive),
    c.jsx(n, Object.assign({}, l, i, { ref: t }))
  );
});
kp.displayName = "NavItem";
const By = kp,
  Vy = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Uy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const mc = () => {},
  vc = Ql("event-key"),
  jp = v.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: o, role: l, onKeyDown: i } = e,
      s = Uy(e, Vy);
    const a = mg(),
      u = v.useRef(!1),
      f = v.useContext(Rs),
      m = v.useContext(Ep);
    let g, x;
    m &&
      ((l = l || "tablist"),
      (o = m.activeKey),
      (g = m.getControlledId),
      (x = m.getControllerId));
    const w = v.useRef(null),
      S = (h) => {
        const y = w.current;
        if (!y) return null;
        const E = dn(y, `[${vc}]:not([aria-disabled=true])`),
          k = y.querySelector("[aria-selected=true]");
        if (!k || k !== document.activeElement) return null;
        const N = E.indexOf(k);
        if (N === -1) return null;
        let O = N + h;
        return O >= E.length && (O = 0), O < 0 && (O = E.length - 1), E[O];
      },
      j = (h, y) => {
        h != null && (r == null || r(h, y), f == null || f(h, y));
      },
      p = (h) => {
        if ((i == null || i(h), !m)) return;
        let y;
        switch (h.key) {
          case "ArrowLeft":
          case "ArrowUp":
            y = S(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            y = S(1);
            break;
          default:
            return;
        }
        y &&
          (h.preventDefault(),
          j(y.dataset[Dy("EventKey")] || null, h),
          (u.current = !0),
          a());
      };
    v.useEffect(() => {
      if (w.current && u.current) {
        const h = w.current.querySelector(`[${vc}][aria-selected=true]`);
        h == null || h.focus();
      }
      u.current = !1;
    });
    const d = ln(t, w);
    return c.jsx(Rs.Provider, {
      value: j,
      children: c.jsx(wp.Provider, {
        value: {
          role: l,
          activeKey: Ba(o),
          getControlledId: g || mc,
          getControllerId: x || mc,
        },
        children: c.jsx(
          n,
          Object.assign({}, s, { onKeyDown: p, ref: d, role: l })
        ),
      }),
    });
  });
jp.displayName = "Nav";
const Hy = Object.assign(jp, { Item: By }),
  Np = v.forwardRef(
    (
      {
        bsPrefix: e,
        active: t,
        disabled: n,
        eventKey: r,
        className: o,
        variant: l,
        action: i,
        as: s,
        ...a
      },
      u
    ) => {
      e = se(e, "list-group-item");
      const [f, m] = Cp({ key: Ba(r, a.href), active: t, ...a }),
        g = Te((w) => {
          if (n) {
            w.preventDefault(), w.stopPropagation();
            return;
          }
          f.onClick(w);
        });
      n &&
        a.tabIndex === void 0 &&
        ((a.tabIndex = -1), (a["aria-disabled"] = !0));
      const x = s || (i ? (a.href ? "a" : "button") : "div");
      return c.jsx(x, {
        ref: u,
        ...a,
        ...f,
        onClick: g,
        className: J(
          o,
          e,
          m.isActive && "active",
          n && "disabled",
          l && `${e}-${l}`,
          i && `${e}-action`
        ),
      });
    }
  );
Np.displayName = "ListGroupItem";
const Wy = Np,
  Tp = v.forwardRef((e, t) => {
    const {
        className: n,
        bsPrefix: r,
        variant: o,
        horizontal: l,
        numbered: i,
        as: s = "div",
        ...a
      } = xv(e, { activeKey: "onSelect" }),
      u = se(r, "list-group");
    let f;
    return (
      l && (f = l === !0 ? "horizontal" : `horizontal-${l}`),
      c.jsx(Hy, {
        ref: t,
        ...a,
        as: s,
        className: J(
          n,
          u,
          o && `${u}-${o}`,
          f && `${u}-${f}`,
          i && `${u}-numbered`
        ),
      })
    );
  });
Tp.displayName = "ListGroup";
const gc = Object.assign(Tp, { Item: Wy });
var Bo;
function yc(e) {
  if (((!Bo && Bo !== 0) || e) && hr) {
    var t = document.createElement("div");
    (t.style.position = "absolute"),
      (t.style.top = "-9999px"),
      (t.style.width = "50px"),
      (t.style.height = "50px"),
      (t.style.overflow = "scroll"),
      document.body.appendChild(t),
      (Bo = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return Bo;
}
function Ei(e) {
  e === void 0 && (e = pr());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Ky(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const xc = Ql("modal-open");
class Qy {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return Ky(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.getElement();
    (t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(wn(o, r) || "0", 10) + t.scrollBarWidth}px`),
      o.setAttribute(xc, ""),
      wn(o, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(xc), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Ua = Qy,
  Ci = (e, t) =>
    hr
      ? e == null
        ? (t || pr()).body
        : (typeof e == "function" && (e = e()),
          e && "current" in e && (e = e.current),
          e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
      : null;
function Ls(e, t) {
  const n = Va(),
    [r, o] = v.useState(() => Ci(e, n == null ? void 0 : n.document));
  if (!r) {
    const l = Ci(e);
    l && o(l);
  }
  return (
    v.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    v.useEffect(() => {
      const l = Ci(e);
      l !== r && o(l);
    }, [e, r]),
    r
  );
}
function by({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o,
}) {
  const l = v.useRef(null),
    i = v.useRef(t),
    s = Te(n);
  v.useEffect(() => {
    t ? (i.current = !0) : s(l.current);
  }, [t, s]);
  const a = ln(l, e.ref),
    u = v.cloneElement(e, { ref: a });
  return t ? u : o || (!i.current && r) ? null : u;
}
function Yy({ in: e, onTransition: t }) {
  const n = v.useRef(null),
    r = v.useRef(!0),
    o = Te(t);
  return (
    Ns(() => {
      if (!n.current) return;
      let l = !1;
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => l }),
        () => {
          l = !0;
        }
      );
    }, [e, o]),
    Ns(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function Xy({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [l, i] = v.useState(!t);
  t && l && i(!1);
  const s = Yy({
      in: !!t,
      onTransition: (u) => {
        const f = () => {
          u.isStale() ||
            (u.in
              ? r == null || r(u.element, u.initial)
              : (i(!0), n == null || n(u.element)));
        };
        Promise.resolve(o(u)).then(f, (m) => {
          throw (u.in || i(!0), m);
        });
      },
    }),
    a = ln(s, e.ref);
  return l && !t ? null : v.cloneElement(e, { ref: a });
}
function _s(e, t, n) {
  return e
    ? c.jsx(e, Object.assign({}, n))
    : t
    ? c.jsx(Xy, Object.assign({}, n, { transition: t }))
    : c.jsx(by, Object.assign({}, n));
}
function Op(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const Gy = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function Zy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
let ki;
function qy(e) {
  return (
    ki || (ki = new Ua({ ownerDocument: e == null ? void 0 : e.document })), ki
  );
}
function Jy(e) {
  const t = Va(),
    n = e || qy(t),
    r = v.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: v.useCallback((o) => {
      r.current.dialog = o;
    }, []),
    setBackdropRef: v.useCallback((o) => {
      r.current.backdrop = o;
    }, []),
  });
}
const Pp = v.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: o,
      style: l,
      children: i,
      backdrop: s = !0,
      keyboard: a = !0,
      onBackdropClick: u,
      onEscapeKeyDown: f,
      transition: m,
      runTransition: g,
      backdropTransition: x,
      runBackdropTransition: w,
      autoFocus: S = !0,
      enforceFocus: j = !0,
      restoreFocus: p = !0,
      restoreFocusOptions: d,
      renderDialog: h,
      renderBackdrop: y = (re) => c.jsx("div", Object.assign({}, re)),
      manager: E,
      container: k,
      onShow: N,
      onHide: O = () => {},
      onExit: I,
      onExited: L,
      onExiting: $,
      onEnter: X,
      onEntering: A,
      onEntered: G,
    } = e,
    K = Zy(e, Gy);
  const U = Va(),
    H = Ls(k),
    P = Jy(E),
    M = Ra(),
    z = Qv(n),
    [F, V] = v.useState(!n),
    ee = v.useRef(null);
  v.useImperativeHandle(t, () => P, [P]),
    hr && !z && n && (ee.current = Ei(U == null ? void 0 : U.document)),
    n && F && V(!1);
  const Z = Te(() => {
      if (
        (P.add(),
        (B.current = Nt(document, "keydown", C)),
        (D.current = Nt(document, "focus", () => setTimeout(Q), !0)),
        N && N(),
        S)
      ) {
        var re, an;
        const Dt = Ei(
          (re = (an = P.dialog) == null ? void 0 : an.ownerDocument) != null
            ? re
            : U == null
            ? void 0
            : U.document
        );
        P.dialog &&
          Dt &&
          !so(P.dialog, Dt) &&
          ((ee.current = Dt), P.dialog.focus());
      }
    }),
    te = Te(() => {
      if (
        (P.remove(),
        B.current == null || B.current(),
        D.current == null || D.current(),
        p)
      ) {
        var re;
        (re = ee.current) == null || re.focus == null || re.focus(d),
          (ee.current = null);
      }
    });
  v.useEffect(() => {
    !n || !H || Z();
  }, [n, H, Z]),
    v.useEffect(() => {
      F && te();
    }, [F, te]),
    _a(() => {
      te();
    });
  const Q = Te(() => {
      if (!j || !M() || !P.isTopModal()) return;
      const re = Ei(U == null ? void 0 : U.document);
      P.dialog && re && !so(P.dialog, re) && P.dialog.focus();
    }),
    T = Te((re) => {
      re.target === re.currentTarget && (u == null || u(re), s === !0 && O());
    }),
    C = Te((re) => {
      a &&
        Op(re) &&
        P.isTopModal() &&
        (f == null || f(re), re.defaultPrevented || O());
    }),
    D = v.useRef(),
    B = v.useRef(),
    ne = (...re) => {
      V(!0), L == null || L(...re);
    };
  if (!H) return null;
  const Ie = Object.assign(
    {
      role: r,
      ref: P.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    K,
    { style: l, className: o, tabIndex: -1 }
  );
  let ze = h
    ? h(Ie)
    : c.jsx(
        "div",
        Object.assign({}, Ie, {
          children: v.cloneElement(i, { role: "document" }),
        })
      );
  ze = _s(m, g, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: I,
    onExiting: $,
    onExited: ne,
    onEnter: X,
    onEntering: A,
    onEntered: G,
    children: ze,
  });
  let zt = null;
  return (
    s &&
      ((zt = y({ ref: P.setBackdropRef, onClick: T })),
      (zt = _s(x, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: zt,
      }))),
    c.jsx(c.Fragment, {
      children: gn.createPortal(c.jsxs(c.Fragment, { children: [zt, ze] }), H),
    })
  );
});
Pp.displayName = "Modal";
const e0 = Object.assign(Pp, { Manager: Ua });
function Ms(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function t0(e, t) {
  e.classList
    ? e.classList.add(t)
    : Ms(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function wc(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function n0(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = wc(e.className, t))
    : e.setAttribute(
        "class",
        wc((e.className && e.className.baseVal) || "", t)
      );
}
const In = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class r0 extends Ua {
  adjustAndStore(t, n, r) {
    const o = n.style[t];
    (n.dataset[t] = o), wn(n, { [t]: `${parseFloat(wn(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], wn(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((t0(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    dn(n, In.FIXED_CONTENT).forEach((l) =>
      this.adjustAndStore(r, l, t.scrollBarWidth)
    ),
      dn(n, In.STICKY_CONTENT).forEach((l) =>
        this.adjustAndStore(o, l, -t.scrollBarWidth)
      ),
      dn(n, In.NAVBAR_TOGGLER).forEach((l) =>
        this.adjustAndStore(o, l, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    n0(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    dn(n, In.FIXED_CONTENT).forEach((l) => this.restore(r, l)),
      dn(n, In.STICKY_CONTENT).forEach((l) => this.restore(o, l)),
      dn(n, In.NAVBAR_TOGGLER).forEach((l) => this.restore(o, l));
  }
}
let ji;
function o0(e) {
  return ji || (ji = new r0(e)), ji;
}
const Rp = v.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
    (t = se(t, "modal-body")), c.jsx(n, { ref: o, className: J(e, t), ...r })
  )
);
Rp.displayName = "ModalBody";
const l0 = Rp,
  i0 = v.createContext({ onHide() {} }),
  Lp = i0,
  _p = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        contentClassName: n,
        centered: r,
        size: o,
        fullscreen: l,
        children: i,
        scrollable: s,
        ...a
      },
      u
    ) => {
      e = se(e, "modal");
      const f = `${e}-dialog`,
        m = typeof l == "string" ? `${e}-fullscreen-${l}` : `${e}-fullscreen`;
      return c.jsx("div", {
        ...a,
        ref: u,
        className: J(
          f,
          t,
          o && `${e}-${o}`,
          r && `${f}-centered`,
          s && `${f}-scrollable`,
          l && m
        ),
        children: c.jsx("div", {
          className: J(`${e}-content`, n),
          children: i,
        }),
      });
    }
  );
_p.displayName = "ModalDialog";
const Mp = _p,
  Ip = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
      (t = se(t, "modal-footer")),
      c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
Ip.displayName = "ModalFooter";
const s0 = Ip,
  a0 = v.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...l
      },
      i
    ) => {
      const s = v.useContext(Lp),
        a = Te(() => {
          s == null || s.onHide(), r == null || r();
        });
      return c.jsxs("div", {
        ref: i,
        ...l,
        children: [
          o,
          n && c.jsx(eg, { "aria-label": e, variant: t, onClick: a }),
        ],
      });
    }
  ),
  u0 = a0,
  zp = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...o
      },
      l
    ) => (
      (e = se(e, "modal-header")),
      c.jsx(u0, {
        ref: l,
        ...o,
        className: J(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
zp.displayName = "ModalHeader";
const c0 = zp,
  f0 = Pa("h4"),
  Dp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = f0, ...r }, o) => (
      (t = se(t, "modal-title")), c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
Dp.displayName = "ModalTitle";
const d0 = Dp;
function p0(e) {
  return c.jsx(Tl, { ...e, timeout: null });
}
function h0(e) {
  return c.jsx(Tl, { ...e, timeout: null });
}
const $p = v.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: n,
      dialogClassName: r,
      contentClassName: o,
      children: l,
      dialogAs: i = Mp,
      "data-bs-theme": s,
      "aria-labelledby": a,
      "aria-describedby": u,
      "aria-label": f,
      show: m = !1,
      animation: g = !0,
      backdrop: x = !0,
      keyboard: w = !0,
      onEscapeKeyDown: S,
      onShow: j,
      onHide: p,
      container: d,
      autoFocus: h = !0,
      enforceFocus: y = !0,
      restoreFocus: E = !0,
      restoreFocusOptions: k,
      onEntered: N,
      onExit: O,
      onExiting: I,
      onEnter: L,
      onEntering: $,
      onExited: X,
      backdropClassName: A,
      manager: G,
      ...K
    },
    U
  ) => {
    const [H, P] = v.useState({}),
      [M, z] = v.useState(!1),
      F = v.useRef(!1),
      V = v.useRef(!1),
      ee = v.useRef(null),
      [Z, te] = js(),
      Q = ln(U, te),
      T = Te(p),
      C = Oa();
    e = se(e, "modal");
    const D = v.useMemo(() => ({ onHide: T }), [T]);
    function B() {
      return G || o0({ isRTL: C });
    }
    function ne(b) {
      if (!hr) return;
      const wt = B().getScrollbarWidth() > 0,
        mr = b.scrollHeight > pr(b).documentElement.clientHeight;
      P({
        paddingRight: wt && !mr ? yc() : void 0,
        paddingLeft: !wt && mr ? yc() : void 0,
      });
    }
    const Ie = Te(() => {
      Z && ne(Z.dialog);
    });
    _a(() => {
      ks(window, "resize", Ie), ee.current == null || ee.current();
    });
    const ze = () => {
        F.current = !0;
      },
      zt = (b) => {
        F.current && Z && b.target === Z.dialog && (V.current = !0),
          (F.current = !1);
      },
      re = () => {
        z(!0),
          (ee.current = Qd(Z.dialog, () => {
            z(!1);
          }));
      },
      an = (b) => {
        b.target === b.currentTarget && re();
      },
      Dt = (b) => {
        if (x === "static") {
          an(b);
          return;
        }
        if (V.current || b.target !== b.currentTarget) {
          V.current = !1;
          return;
        }
        p == null || p();
      },
      bl = (b) => {
        w ? S == null || S(b) : (b.preventDefault(), x === "static" && re());
      },
      Yl = (b, wt) => {
        b && ne(b), L == null || L(b, wt);
      },
      xt = (b) => {
        ee.current == null || ee.current(), O == null || O(b);
      },
      Rn = (b, wt) => {
        $ == null || $(b, wt), Kd(window, "resize", Ie);
      },
      yo = (b) => {
        b && (b.style.display = ""),
          X == null || X(b),
          ks(window, "resize", Ie);
      },
      xo = v.useCallback(
        (b) =>
          c.jsx("div", {
            ...b,
            className: J(`${e}-backdrop`, A, !g && "show"),
          }),
        [g, A, e]
      ),
      Ln = { ...n, ...H };
    Ln.display = "block";
    const wo = (b) =>
      c.jsx("div", {
        role: "dialog",
        ...b,
        style: Ln,
        className: J(t, e, M && `${e}-static`, !g && "show"),
        onClick: x ? Dt : void 0,
        onMouseUp: zt,
        "data-bs-theme": s,
        "aria-label": f,
        "aria-labelledby": a,
        "aria-describedby": u,
        children: c.jsx(i, {
          ...K,
          onMouseDown: ze,
          className: r,
          contentClassName: o,
          children: l,
        }),
      });
    return c.jsx(Lp.Provider, {
      value: D,
      children: c.jsx(e0, {
        show: m,
        ref: Q,
        backdrop: x,
        container: d,
        keyboard: !0,
        autoFocus: h,
        enforceFocus: y,
        restoreFocus: E,
        restoreFocusOptions: k,
        onEscapeKeyDown: bl,
        onShow: j,
        onHide: p,
        onEnter: Yl,
        onEntering: Rn,
        onEntered: N,
        onExit: xt,
        onExiting: I,
        onExited: yo,
        manager: B(),
        transition: g ? p0 : void 0,
        backdropTransition: g ? h0 : void 0,
        renderBackdrop: xo,
        renderDialog: wo,
      }),
    });
  }
);
$p.displayName = "Modal";
const me = Object.assign($p, {
    Body: l0,
    Header: c0,
    Title: d0,
    Footer: s0,
    Dialog: Mp,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150,
  }),
  m0 = () => {};
function v0(e, t, { disabled: n, clickTrigger: r } = {}) {
  const o = t || m0;
  Ry(e, o, { disabled: n, clickTrigger: r });
  const l = Te((i) => {
    Op(i) && o(i);
  });
  v.useEffect(() => {
    if (n || e == null) return;
    const i = pr(tl(e));
    let s = (i.defaultView || window).event;
    const a = Nt(i, "keyup", (u) => {
      if (u === s) {
        s = void 0;
        return;
      }
      l(u);
    });
    return () => {
      a();
    };
  }, [e, n, l]);
}
const Fp = v.forwardRef((e, t) => {
  const {
      flip: n,
      offset: r,
      placement: o,
      containerPadding: l,
      popperConfig: i = {},
      transition: s,
      runTransition: a,
    } = e,
    [u, f] = js(),
    [m, g] = js(),
    x = ln(f, t),
    w = Ls(e.container),
    S = Ls(e.target),
    [j, p] = v.useState(!e.show),
    d = ky(
      S,
      u,
      My({
        placement: o,
        enableEvents: !!e.show,
        containerPadding: l || 5,
        flip: n,
        offset: r,
        arrowElement: m,
        popperConfig: i,
      })
    );
  e.show && j && p(!1);
  const h = (...$) => {
      p(!0), e.onExited && e.onExited(...$);
    },
    y = e.show || !j;
  if (
    (v0(u, e.onHide, {
      disabled: !e.rootClose || e.rootCloseDisabled,
      clickTrigger: e.rootCloseEvent,
    }),
    !y)
  )
    return null;
  const {
    onExit: E,
    onExiting: k,
    onEnter: N,
    onEntering: O,
    onEntered: I,
  } = e;
  let L = e.children(
    Object.assign({}, d.attributes.popper, { style: d.styles.popper, ref: x }),
    {
      popper: d,
      placement: o,
      show: !!e.show,
      arrowProps: Object.assign({}, d.attributes.arrow, {
        style: d.styles.arrow,
        ref: g,
      }),
    }
  );
  return (
    (L = _s(s, a, {
      in: !!e.show,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: L,
      onExit: E,
      onExiting: k,
      onExited: h,
      onEnter: N,
      onEntering: O,
      onEntered: I,
    })),
    w ? gn.createPortal(L, w) : null
  );
});
Fp.displayName = "Overlay";
const g0 = Fp,
  Ap = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
      (t = se(t, "popover-header")),
      c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
Ap.displayName = "PopoverHeader";
const y0 = Ap,
  Bp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
      (t = se(t, "popover-body")),
      c.jsx(n, { ref: o, className: J(e, t), ...r })
    )
  );
Bp.displayName = "PopoverBody";
const Vp = Bp;
function Up(e, t) {
  let n = e;
  return (
    e === "left"
      ? (n = t ? "end" : "start")
      : e === "right" && (n = t ? "start" : "end"),
    n
  );
}
function Hp(e = "absolute") {
  return {
    position: e,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none",
  };
}
const x0 = v.forwardRef(
    (
      {
        bsPrefix: e,
        placement: t = "right",
        className: n,
        style: r,
        children: o,
        body: l,
        arrowProps: i,
        hasDoneInitialMeasure: s,
        popper: a,
        show: u,
        ...f
      },
      m
    ) => {
      const g = se(e, "popover"),
        x = Oa(),
        [w] = (t == null ? void 0 : t.split("-")) || [],
        S = Up(w, x);
      let j = r;
      return (
        u && !s && (j = { ...r, ...Hp(a == null ? void 0 : a.strategy) }),
        c.jsxs("div", {
          ref: m,
          role: "tooltip",
          style: j,
          "x-placement": w,
          className: J(n, g, w && `bs-popover-${S}`),
          ...f,
          children: [
            c.jsx("div", { className: "popover-arrow", ...i }),
            l ? c.jsx(Vp, { children: o }) : o,
          ],
        })
      );
    }
  ),
  w0 = Object.assign(x0, { Header: y0, Body: Vp, POPPER_OFFSET: [0, 8] }),
  Wp = v.forwardRef(
    (
      {
        bsPrefix: e,
        placement: t = "right",
        className: n,
        style: r,
        children: o,
        arrowProps: l,
        hasDoneInitialMeasure: i,
        popper: s,
        show: a,
        ...u
      },
      f
    ) => {
      e = se(e, "tooltip");
      const m = Oa(),
        [g] = (t == null ? void 0 : t.split("-")) || [],
        x = Up(g, m);
      let w = r;
      return (
        a && !i && (w = { ...r, ...Hp(s == null ? void 0 : s.strategy) }),
        c.jsxs("div", {
          ref: f,
          style: w,
          role: "tooltip",
          "x-placement": g,
          className: J(n, e, `bs-tooltip-${x}`),
          ...u,
          children: [
            c.jsx("div", { className: "tooltip-arrow", ...l }),
            c.jsx("div", { className: `${e}-inner`, children: o }),
          ],
        })
      );
    }
  );
Wp.displayName = "Tooltip";
const go = Object.assign(Wp, { TOOLTIP_OFFSET: [0, 6] });
function S0(e) {
  const t = v.useRef(null),
    n = se(void 0, "popover"),
    r = se(void 0, "tooltip"),
    o = v.useMemo(
      () => ({
        name: "offset",
        options: {
          offset: () => {
            if (e) return e;
            if (t.current) {
              if (Ms(t.current, n)) return w0.POPPER_OFFSET;
              if (Ms(t.current, r)) return go.TOOLTIP_OFFSET;
            }
            return [0, 0];
          },
        },
      }),
      [e, n, r]
    );
  return [t, [o]];
}
function E0(e, t) {
  const { ref: n } = e,
    { ref: r } = t;
  (e.ref = n.__wrapped || (n.__wrapped = (o) => n(Nl(o)))),
    (t.ref = r.__wrapped || (r.__wrapped = (o) => r(Nl(o))));
}
const Kp = v.forwardRef(
  (
    {
      children: e,
      transition: t = Tl,
      popperConfig: n = {},
      rootClose: r = !1,
      placement: o = "top",
      show: l = !1,
      ...i
    },
    s
  ) => {
    const a = v.useRef({}),
      [u, f] = v.useState(null),
      [m, g] = S0(i.offset),
      x = ln(s, m),
      w = t === !0 ? Tl : t || void 0,
      S = Te((j) => {
        f(j), n == null || n.onFirstUpdate == null || n.onFirstUpdate(j);
      });
    return (
      Ns(() => {
        u &&
          i.target &&
          (a.current.scheduleUpdate == null || a.current.scheduleUpdate());
      }, [u, i.target]),
      v.useEffect(() => {
        l || f(null);
      }, [l]),
      c.jsx(g0, {
        ...i,
        ref: x,
        popperConfig: {
          ...n,
          modifiers: g.concat(n.modifiers || []),
          onFirstUpdate: S,
        },
        transition: w,
        rootClose: r,
        placement: o,
        show: l,
        children: (j, { arrowProps: p, popper: d, show: h }) => {
          var y, E;
          E0(j, p);
          const k = d == null ? void 0 : d.placement,
            N = Object.assign(a.current, {
              state: d == null ? void 0 : d.state,
              scheduleUpdate: d == null ? void 0 : d.update,
              placement: k,
              outOfBoundaries:
                (d == null ||
                (y = d.state) == null ||
                (E = y.modifiersData.hide) == null
                  ? void 0
                  : E.isReferenceHidden) || !1,
              strategy: n.strategy,
            }),
            O = !!u;
          return typeof e == "function"
            ? e({
                ...j,
                placement: k,
                show: h,
                ...(!t && h && { className: "show" }),
                popper: N,
                arrowProps: p,
                hasDoneInitialMeasure: O,
              })
            : v.cloneElement(e, {
                ...j,
                placement: k,
                arrowProps: p,
                popper: N,
                hasDoneInitialMeasure: O,
                className: J(e.props.className, !t && h && "show"),
                style: { ...e.props.style, ...j.style },
              });
        },
      })
    );
  }
);
Kp.displayName = "Overlay";
const C0 = Kp;
function k0(e) {
  return e && typeof e == "object" ? e : { show: e, hide: e };
}
function Sc(e, t, n) {
  const [r] = t,
    o = r.currentTarget,
    l = r.relatedTarget || r.nativeEvent[n];
  (!l || l !== o) && !so(o, l) && e(...t);
}
Jo.oneOf(["click", "hover", "focus"]);
const j0 = ({
    trigger: e = ["hover", "focus"],
    overlay: t,
    children: n,
    popperConfig: r = {},
    show: o,
    defaultShow: l = !1,
    onToggle: i,
    delay: s,
    placement: a,
    flip: u = a && a.indexOf("auto") !== -1,
    ...f
  }) => {
    const m = v.useRef(null),
      g = ln(m, n.ref),
      x = pg(),
      w = v.useRef(""),
      [S, j] = Ad(o, l, i),
      p = k0(s),
      {
        onFocus: d,
        onBlur: h,
        onClick: y,
      } = typeof n != "function" ? v.Children.only(n).props : {},
      E = (K) => {
        g(Nl(K));
      },
      k = v.useCallback(() => {
        if ((x.clear(), (w.current = "show"), !p.show)) {
          j(!0);
          return;
        }
        x.set(() => {
          w.current === "show" && j(!0);
        }, p.show);
      }, [p.show, j, x]),
      N = v.useCallback(() => {
        if ((x.clear(), (w.current = "hide"), !p.hide)) {
          j(!1);
          return;
        }
        x.set(() => {
          w.current === "hide" && j(!1);
        }, p.hide);
      }, [p.hide, j, x]),
      O = v.useCallback(
        (...K) => {
          k(), d == null || d(...K);
        },
        [k, d]
      ),
      I = v.useCallback(
        (...K) => {
          N(), h == null || h(...K);
        },
        [N, h]
      ),
      L = v.useCallback(
        (...K) => {
          j(!S), y == null || y(...K);
        },
        [y, j, S]
      ),
      $ = v.useCallback(
        (...K) => {
          Sc(k, K, "fromElement");
        },
        [k]
      ),
      X = v.useCallback(
        (...K) => {
          Sc(N, K, "toElement");
        },
        [N]
      ),
      A = e == null ? [] : [].concat(e),
      G = { ref: E };
    return (
      A.indexOf("click") !== -1 && (G.onClick = L),
      A.indexOf("focus") !== -1 && ((G.onFocus = O), (G.onBlur = I)),
      A.indexOf("hover") !== -1 && ((G.onMouseOver = $), (G.onMouseOut = X)),
      c.jsxs(c.Fragment, {
        children: [
          typeof n == "function" ? n(G) : v.cloneElement(n, G),
          c.jsx(C0, {
            ...f,
            show: S,
            onHide: N,
            flip: u,
            placement: a,
            popperConfig: r,
            target: m.current,
            children: t,
          }),
        ],
      })
    );
  },
  Oe = j0,
  N0 = ({ selectedRows: e }) => {
    const [t, n] = v.useState(""),
      [r, o] = v.useState(""),
      [l, i] = v.useState(!1),
      [s, a] = v.useState(""),
      [u, f] = v.useState(""),
      [m, g] = v.useState(!1),
      [x, w] = v.useState(""),
      [S, j] = v.useState(""),
      [p, d] = v.useState(""),
      [h, y] = v.useState(""),
      [E, k] = v.useState(""),
      [N, O] = v.useState(!1),
      [I, L] = v.useState(""),
      [$, X] = v.useState(!0),
      [A, G] = v.useState(""),
      [K, U] = v.useState(!1),
      H = (T) => {
        let C = 0,
          D = 0,
          B = !0;
        for (let ne = 0; ne < T.length; ne++)
          if (T[ne] === "a") C++;
          else if (T[ne] === "b") {
            if ((D++, D > C)) {
              B = !1;
              break;
            }
          } else {
            B = !1;
            break;
          }
        return !!(B && C === D && /^[ab]+$/.test(T) && /^(a+b+)$/.test(T));
      },
      P = (T) => {
        const C = T.target.value;
        n(C),
          C < 4 || C > 12
            ? o(
                "Please enter a positive integer in the range [4, 12] for best results"
              )
            : (o(""), i(!0));
      },
      M = (T) => {
        const C = T.target.value;
        a(C),
          C.length < t
            ? f(`String must contain at least ${t} characters`)
            : H(C)
            ? f("")
            : f("String does not belong to the language L = {aⁿbⁿ : n ≥ 0}");
      },
      z = (T) => {
        T.key === "Enter" && g(!0);
      },
      F = () => {
        if (x.length + S.length > t)
          y("|xy| should be less than or equal to pumping length (p)");
        else if (S.length === 0) y("|y| should be greater than or equal to 0");
        else {
          const C = s,
            D = x + S + p,
            B = C.split("a").length - 1,
            ne = C.split("b").length - 1,
            Ie = D.split("a").length - 1,
            ze = D.split("b").length - 1;
          B === Ie && ne === ze
            ? (y(""), O(!0))
            : y(
                "Invalid decomposition. Number of 'a' and 'b' characters should match the original string."
              );
        }
      },
      V = () => {
        const T = ee(S, parseInt(E, 10)),
          C = T.split("a").length - 1,
          D = T.split("b").length - 1,
          B = /^(a+b+)$/.test(T);
        let ne = "";
        C !== D
          ? (ne = "The count of 'a' and 'b' characters is not equal.")
          : B || (ne = "The pattern of 'a' followed by 'b' is not maintained."),
          G(ne),
          X(C === D && B),
          L(`${x}<span style="color: aqua;">${T}</span>${p}`);
      },
      ee = (T, C) => {
        let D = T;
        for (let B = 1; B < C; B++) D += T;
        return D;
      },
      Z = () => {
        U(!0);
      },
      te = () => {
        U(!1);
      },
      Q = (T) =>
        c.jsx(go, {
          id: "button-tooltip",
          style: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          children: T,
        });
    return c.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      children: [
        c.jsx(yt, {
          className: "cardbody",
          style: {
            width: "800px",
            maxHeight: "600px",
            overflowY: "auto",
            backgroundColor: "transparent",
            border: "3px solid antiquewhite",
            color: "white",
            fontSize: "15px",
          },
          children: c.jsx(yt.Body, {
            children: e.map((T) =>
              c.jsxs(
                "div",
                {
                  style: { fontSize: "15px" },
                  children: [
                    c.jsxs("div", {
                      style: { fontSize: "25px", textAlign: "center" },
                      children: [T, ","],
                    }),
                    c.jsx("p", {
                      children:
                        "Assume the language is regular over the alphabet Σ = {a, b}",
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsxs("label", {
                          htmlFor: "pumpingLength",
                          children: [
                            '1. Please select a value for P (pumping length) and press "Enter"  ',
                            c.jsx(Oe, {
                              placement: "right",
                              overlay: Q(
                                "The pumping lemma states that for any regular language L, there exists a pumping length p. This means for any string s in L with length |s| >= p,"
                              ),
                              children: c.jsx("i", {
                                className: "bi bi-info-circle",
                              }),
                            }),
                          ],
                        }),
                        c.jsx("br", {}),
                        c.jsx("input", {
                          style: {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                          type: "number",
                          id: "pumpingLength",
                          value: t,
                          onChange: P,
                          onKeyPress: z,
                          className: "form-control",
                          placeholder: "Enter pumping length",
                        }),
                        m && r && c.jsx("p", { children: r }),
                      ],
                    }),
                    l &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "stringInput",
                            children: [
                              "2. Please enter a string that belongs to L with |s| ≥ p  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: Q(
                                  "Enter a string (s) that belongs to the language L = {aⁿbⁿ : n ≥ 0} with a length greater than or equal to the pumping length (P).for example if p=4 string will be aabb"
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "stringInput",
                            value: s,
                            onChange: M,
                            onKeyPress: z,
                            className: "form-control",
                            placeholder: "Enter string",
                          }),
                          m && u && c.jsx("p", { children: u }),
                        ],
                      }),
                    l &&
                      !u &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "decomposition",
                            children: [
                              "3. Select decomposition of S into xyz  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: Q(
                                  "Enter the values for x, y, and z to decompose the string S into the form xyz. Ensure that |xy| ≤ P and |y| > 0."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("label", {
                            htmlFor: "xValue",
                            children: "Enter x:",
                          }),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "xValue",
                            value: x,
                            onChange: (C) => w(C.target.value),
                            className: "form-control",
                            placeholder: "Enter x",
                          }),
                          c.jsx("label", {
                            htmlFor: "yValue",
                            children: "Enter y:",
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "yValue",
                            value: S,
                            onChange: (C) => j(C.target.value),
                            className: "form-control",
                            placeholder: "Enter y",
                          }),
                          c.jsx("label", {
                            htmlFor: "zValue",
                            children: "Enter z:",
                          }),
                          c.jsx("br", {}),
                          c.jsxs("div", {
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            },
                            children: [
                              c.jsx("input", {
                                style: {
                                  backgroundColor: "transparent",
                                  color: "white",
                                  marginRight: "5px",
                                },
                                type: "text",
                                id: "zValue",
                                value: p,
                                onChange: (C) => d(C.target.value),
                                className: "form-control",
                                placeholder: "Enter z",
                              }),
                              h && c.jsx("p", { children: h }),
                              c.jsx(xe, {
                                onClick: F,
                                style: { fontSize: "small" },
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      N &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "iValue",
                            children: [
                              "4. Enter i value to give contradiction  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: Q(
                                  "Enter the value for 'i' to pump the 'y' value 'i' times and check the conditions for regularity."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsxs("div", {
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            },
                            children: [
                              c.jsx("input", {
                                style: {
                                  backgroundColor: "transparent",
                                  color: "white",
                                  marginRight: "5px",
                                },
                                type: "number",
                                id: "iValue",
                                value: E,
                                onChange: (C) => k(C.target.value),
                                className: "form-control",
                                placeholder: "Enter i value",
                              }),
                              c.jsx(xe, {
                                onClick: V,
                                style: { fontSize: "small" },
                                children: "Submit",
                              }),
                            ],
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      I &&
                      c.jsxs("div", {
                        children: [
                          c.jsx("label", { children: "Pumped String:" }),
                          c.jsx("br", {}),
                          c.jsx("div", {
                            style: {
                              fontSize: "25px",
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            dangerouslySetInnerHTML: { __html: I },
                          }),
                          $
                            ? c.jsx("p", { children: "The string is regular." })
                            : c.jsx("p", {
                                children: "The string is not regular.",
                              }),
                          c.jsx(xe, { onClick: Z, children: "Explanation" }),
                        ],
                      }),
                  ],
                },
                T
              )
            ),
          }),
        }),
        c.jsxs(me, {
          show: K,
          onHide: te,
          centered: !0,
          children: [
            c.jsx(me.Header, {
              closeButton: !0,
              children: c.jsx(me.Title, { children: "Explanation" }),
            }),
            c.jsx(me.Body, { children: A && c.jsx("p", { children: A }) }),
            c.jsx(me.Footer, {
              children: c.jsx(xe, {
                variant: "secondary",
                onClick: te,
                children: "Close",
              }),
            }),
          ],
        }),
      ],
    });
  },
  T0 = ({ selectedRows: e }) => {
    const [t, n] = v.useState(""),
      [r, o] = v.useState(""),
      [l, i] = v.useState(!1),
      [s, a] = v.useState(""),
      [u, f] = v.useState(""),
      [m, g] = v.useState(!1),
      [x, w] = v.useState(""),
      [S, j] = v.useState(""),
      [p, d] = v.useState(""),
      [h, y] = v.useState(""),
      [E, k] = v.useState(""),
      [N, O] = v.useState(!1),
      [I, L] = v.useState(""),
      [$, X] = v.useState(!0),
      [A, G] = v.useState(""),
      [K, U] = v.useState(!1),
      H = (T) =>
        c.jsx(go, {
          id: "button-tooltip",
          style: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          children: T,
        }),
      P = (T) => {
        if (T <= 1) return !1;
        for (let C = 2; C <= Math.sqrt(T); C++) if (T % C === 0) return !1;
        return !0;
      },
      M = (T) => {
        const C = T.target.value;
        n(C),
          C < 4 || C > 12
            ? o(
                "Please enter a positive integer in the range [4, 12] for best results"
              )
            : (o(""), i(!0));
      },
      z = (T) => {
        const C = T.target.value;
        a(C),
          C.length < t
            ? f(`String must contain at least ${t} characters`)
            : !P(C.length) || C.length <= t
            ? f(
                "Length of 'a' should be a prime number greater than pumping length"
              )
            : f("");
      },
      F = (T) => {
        T.key === "Enter" && g(!0);
      },
      V = () => {
        if (x.length + S.length > t)
          y("|xy| should be less than or equal to pumping length (p)");
        else if (S.length === 0) y("|y| should be greater than or equal to 0");
        else {
          const C = s,
            D = x + S + p,
            B = C.split("a").length - 1,
            ne = C.split("b").length - 1,
            Ie = D.split("a").length - 1,
            ze = D.split("b").length - 1;
          B === Ie && ne === ze
            ? (y(""), O(!0))
            : y(
                "Invalid decomposition. Number of 'a' characters should match the original string."
              );
        }
      },
      ee = () => {
        const T = Z(S, parseInt(E, 10)),
          C = P(T.length);
        let D = "";
        C || (D = "The length of the pumped string is not a prime number."),
          G(D),
          X(C),
          L(`${x}<span style="color: blue;">${T}</span>${p}`);
      },
      Z = (T, C) => {
        let D = T;
        for (let B = 1; B < C; B++) D += T;
        return D;
      },
      te = () => {
        U(!0);
      },
      Q = () => {
        U(!1);
      };
    return c.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      children: [
        c.jsx(yt, {
          className: "cardbody",
          style: {
            width: "800px",
            backgroundColor: "transparent",
            border: "3px solid antiquewhite",
            color: "white",
            fontSize: "15px",
            overflowY: "auto",
            maxHeight: "calc(4 * 90px)",
          },
          children: c.jsx(yt.Body, {
            children: e.map((T) =>
              c.jsxs(
                "div",
                {
                  style: { fontSize: "15px" },
                  children: [
                    c.jsxs("div", {
                      style: { fontSize: "25px", textAlign: "center" },
                      children: [T, ","],
                    }),
                    c.jsx("p", {
                      style: { marginLeft: "10px" },
                      children:
                        "Assume the language is regular over the alphabet Σ = {a, b}",
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsxs("label", {
                          htmlFor: "pumpingLength",
                          children: [
                            '1. Please select a value for P (pumping length) and press "Enter"  ',
                            c.jsx(Oe, {
                              placement: "right",
                              overlay: H(
                                "The pumping lemma states that for any regular language L, there exists a pumping length p. This means for any string s in L with length |s| >= p,"
                              ),
                              children: c.jsx("i", {
                                className: "bi bi-info-circle",
                              }),
                            }),
                          ],
                        }),
                        c.jsx("br", {}),
                        c.jsx("input", {
                          style: {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                          type: "number",
                          id: "pumpingLength",
                          value: t,
                          onChange: M,
                          onKeyPress: F,
                          className: "form-control",
                          placeholder: "Enter pumping length",
                        }),
                        m && r && c.jsx("p", { children: r }),
                      ],
                    }),
                    l &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "stringInput",
                            children: [
                              "2. Please enter a string that belongs to L with |s| ≥ p  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: H(
                                  "The string must be in the language L and have a length greater than or equal to the pumping length (p)."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "stringInput",
                            value: s,
                            onChange: z,
                            onKeyPress: F,
                            className: "form-control",
                            placeholder: "Enter string",
                          }),
                          m && u && c.jsx("p", { children: u }),
                        ],
                      }),
                    l &&
                      !u &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "decomposition",
                            children: [
                              "3. Select decomposition of S into xyz  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: H(
                                  "Choose a valid decomposition of the string S into three parts: x, y, and z. Ensure |xy| <= p and |y| > 0. The pumping lemma asserts that for any valid decomposition, you can pump 'y' any number of times to obtain a string that is still in L."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("label", {
                            htmlFor: "xValue",
                            children: "Enter x:",
                          }),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "xValue",
                            value: x,
                            onChange: (C) => w(C.target.value),
                            className: "form-control",
                            placeholder: "Enter x",
                          }),
                          c.jsx("label", {
                            htmlFor: "yValue",
                            children: "Enter y:",
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "yValue",
                            value: S,
                            onChange: (C) => j(C.target.value),
                            className: "form-control",
                            placeholder: "Enter y",
                          }),
                          c.jsx("label", {
                            htmlFor: "zValue",
                            children: "Enter z:",
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "zValue",
                            value: p,
                            onChange: (C) => d(C.target.value),
                            className: "form-control",
                            placeholder: "Enter z",
                          }),
                          h && c.jsx("p", { children: h }),
                          c.jsx(xe, {
                            onClick: V,
                            style: { marginTop: "10px", fontSize: "15px" },
                            children: "Next",
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      N &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "iValue",
                            children: [
                              "4. Enter i value to give contradiction  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: H(
                                  "Choose an 'i' value to pump 'y' that contradicts the pumping lemma. The pumping lemma states that for any regular language L, there exists a pumping length p such that for any string s in L with length |s| >= p, any decomposition of s into xyz (|xy| <= p and |y| > 0) can be pumped any number of times to obtain a string still in L. Choosing 'i' in this step tests the validity of the pumping lemma for the chosen string."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "number",
                            id: "iValue",
                            value: E,
                            onChange: (C) => k(C.target.value),
                            className: "form-control",
                            placeholder: "Enter i value",
                          }),
                          c.jsx(xe, {
                            onClick: ee,
                            style: { marginTop: "10px", fontSize: "15px" },
                            children: "Submit",
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      I &&
                      c.jsxs("div", {
                        children: [
                          c.jsx("label", { children: "Pumped String:" }),
                          c.jsx("br", {}),
                          c.jsx("div", {
                            style: {
                              fontSize: "25px",
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            dangerouslySetInnerHTML: { __html: I },
                          }),
                          $
                            ? c.jsx("p", { children: "The string is regular." })
                            : c.jsx("p", {
                                children: "The string is not regular.",
                              }),
                          c.jsx(xe, {
                            onClick: te,
                            style: { marginTop: "10px", fontSize: "15px" },
                            children: "Explanation",
                          }),
                        ],
                      }),
                  ],
                },
                T
              )
            ),
          }),
        }),
        c.jsxs(me, {
          show: K,
          onHide: Q,
          centered: !0,
          style: { fontSize: "20px" },
          children: [
            c.jsx(me.Header, {
              closeButton: !0,
              children: c.jsx(me.Title, { children: "Explanation" }),
            }),
            c.jsx(me.Body, { children: A && c.jsx("p", { children: A }) }),
            c.jsx(me.Footer, {
              children: c.jsx(xe, {
                variant: "secondary",
                onClick: Q,
                children: "Close",
              }),
            }),
          ],
        }),
      ],
    });
  },
  O0 = ({ selectedRows: e }) => {
    const [t, n] = v.useState(""),
      [r, o] = v.useState(""),
      [l, i] = v.useState(!1),
      [s, a] = v.useState(""),
      [u, f] = v.useState(""),
      [m, g] = v.useState(!1),
      [x, w] = v.useState(""),
      [S, j] = v.useState(""),
      [p, d] = v.useState(""),
      [h, y] = v.useState(""),
      [E, k] = v.useState(""),
      [N, O] = v.useState(!1),
      [I, L] = v.useState(""),
      [$, X] = v.useState(!0),
      [A, G] = v.useState(""),
      [K, U] = v.useState(!1),
      H = (T) => {
        const C = T.target.value;
        n(C),
          C < 4 || C > 12
            ? o(
                "Please enter a positive integer in the range [4, 12] for best results"
              )
            : (o(""), i(!0));
      },
      P = (T) => {
        let C = 0,
          D = 0,
          B = !0;
        for (let ne = 0; ne < T.length; ne++)
          if (T[ne] === "a") C++;
          else if (T[ne] === "b") {
            if ((D++, D > C ** 2)) {
              B = !1;
              break;
            }
          } else {
            B = !1;
            break;
          }
        return B && C ** 2 === D && /^[ab]+$/.test(T);
      },
      M = (T) => {
        const C = T.target.value;
        a(C);
        const D = P(C);
        C.length < t
          ? f(`String must contain at least ${t} characters`)
          : f(D ? "" : "Invalid string for the language L={aⁿ bⁿ²|n∈N}");
      },
      z = (T) => {
        T.key === "Enter" && g(!0);
      },
      F = () => {
        if (x.length + S.length > t)
          y("|xy| should be less than or equal to pumping length (p)");
        else if (S.length === 0) y("|y| should be greater than or equal to 0");
        else {
          const C = s,
            D = x + S + p,
            B = C.split("a").length - 1,
            ne = C.split("b").length - 1,
            Ie = D.split("a").length - 1,
            ze = D.split("b").length - 1;
          B === Ie && ne === ze
            ? (y(""), O(!0))
            : y(
                "Invalid decomposition. Number of 'a' and 'b' characters should match the original string."
              );
        }
      },
      V = () => {
        const T = ee(S, parseInt(E, 10)),
          C = T.split("a").length - 1,
          D = T.split("b").length - 1;
        let B = "";
        C === 2 * D
          ? (B = "The string is regular.")
          : (B =
              "Invalid pattern. The count of 'a' should be exactly double the count of 'b'."),
          G(B),
          X(C === 2 * D),
          L(`${x}<span style="color: blue;">${T}</span>${p}`);
      },
      ee = (T, C) => {
        let D = "";
        for (let B = 0; B < C; B++) D += T;
        return D;
      },
      Z = () => {
        U(!0);
      },
      te = () => {
        U(!1);
      },
      Q = (T) =>
        c.jsx(go, {
          id: "button-tooltip",
          style: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          children: T,
        });
    return c.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      children: [
        c.jsx(yt, {
          className: "cardbody",
          style: {
            width: "800px",
            maxHeight: "600px",
            overflowY: "auto",
            backgroundColor: "transparent",
            border: "3px solid antiquewhite",
            color: "white",
            fontSize: "15px",
          },
          children: c.jsx(yt.Body, {
            children: e.map((T) =>
              c.jsxs(
                "div",
                {
                  style: { fontSize: "15px" },
                  children: [
                    c.jsxs("div", {
                      style: { fontSize: "25px", textAlign: "center" },
                      children: [T, ","],
                    }),
                    c.jsx("p", {
                      children:
                        "Assume the language is regular over the alphabet Σ = {a, b}",
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsxs("label", {
                          htmlFor: "pumpingLength",
                          children: [
                            '1. Please select a value for P (pumping length) and press "Enter"  ',
                            c.jsx(Oe, {
                              placement: "right",
                              overlay: Q(
                                "The pumping lemma states that for any regular language L, there exists a pumping length p. This means for any string s in L with length |s| >= p,"
                              ),
                              children: c.jsx("i", {
                                className: "bi bi-info-circle",
                              }),
                            }),
                          ],
                        }),
                        c.jsx("br", {}),
                        c.jsx("input", {
                          style: {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                          type: "number",
                          id: "pumpingLength",
                          value: t,
                          onChange: H,
                          onKeyPress: z,
                          className: "form-control",
                          placeholder: "Enter pumping length",
                        }),
                        m && r && c.jsx("p", { children: r }),
                      ],
                    }),
                    l &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "stringInput",
                            children: [
                              "2. Please enter a string that belongs to L with |s| ≥ p  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: Q(
                                  "Enter a string (s) that belongs to the language L = {aⁿbⁿ : n ≥ 0} with a length greater than or equal to the pumping length (P).for example if p=4 string will be aabb"
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "stringInput",
                            value: s,
                            onChange: M,
                            onKeyPress: z,
                            className: "form-control",
                            placeholder: "Enter string",
                          }),
                          m && u && c.jsx("p", { children: u }),
                        ],
                      }),
                    l &&
                      !u &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "decomposition",
                            children: [
                              "3. Select decomposition of S into xyz  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: Q(
                                  "Enter the values for x, y, and z to decompose the string S into the form xyz. Ensure that |xy| ≤ P and |y| > 0."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("label", {
                            htmlFor: "xValue",
                            children: "Enter x:",
                          }),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "xValue",
                            value: x,
                            onChange: (C) => w(C.target.value),
                            className: "form-control",
                            placeholder: "Enter x",
                          }),
                          c.jsx("label", {
                            htmlFor: "yValue",
                            children: "Enter y:",
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "yValue",
                            value: S,
                            onChange: (C) => j(C.target.value),
                            className: "form-control",
                            placeholder: "Enter y",
                          }),
                          c.jsx("label", {
                            htmlFor: "zValue",
                            children: "Enter z:",
                          }),
                          c.jsx("br", {}),
                          c.jsxs("div", {
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            },
                            children: [
                              c.jsx("input", {
                                style: {
                                  backgroundColor: "transparent",
                                  color: "white",
                                  marginRight: "5px",
                                },
                                type: "text",
                                id: "zValue",
                                value: p,
                                onChange: (C) => d(C.target.value),
                                className: "form-control",
                                placeholder: "Enter z",
                              }),
                              h && c.jsx("p", { children: h }),
                              c.jsx(xe, {
                                onClick: F,
                                style: { fontSize: "small" },
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      N &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "iValue",
                            children: [
                              "4. Enter i value to give contradiction  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: Q(
                                  "Enter the value for 'i' to pump the 'y' value 'i' times and check the conditions for regularity."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsxs("div", {
                            style: {
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            },
                            children: [
                              c.jsx("input", {
                                style: {
                                  backgroundColor: "transparent",
                                  color: "white",
                                  marginRight: "5px",
                                },
                                type: "number",
                                id: "iValue",
                                value: E,
                                onChange: (C) => k(C.target.value),
                                className: "form-control",
                                placeholder: "Enter i value",
                              }),
                              c.jsx(xe, {
                                onClick: V,
                                style: { fontSize: "small" },
                                children: "Submit",
                              }),
                            ],
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      I &&
                      c.jsxs("div", {
                        children: [
                          c.jsx("label", { children: "Pumped String:" }),
                          c.jsx("br", {}),
                          c.jsx("div", {
                            style: {
                              fontSize: "25px",
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            dangerouslySetInnerHTML: { __html: I },
                          }),
                          $
                            ? c.jsx("p", { children: "The string is regular." })
                            : c.jsx("p", {
                                children: "The string is not regular.",
                              }),
                          c.jsx(xe, { onClick: Z, children: "Explanation" }),
                        ],
                      }),
                  ],
                },
                T
              )
            ),
          }),
        }),
        c.jsxs(me, {
          show: K,
          onHide: te,
          centered: !0,
          children: [
            c.jsx(me.Header, {
              closeButton: !0,
              children: c.jsx(me.Title, { children: "Explanation" }),
            }),
            c.jsx(me.Body, { children: A && c.jsx("p", { children: A }) }),
            c.jsx(me.Footer, {
              children: c.jsx(xe, {
                variant: "secondary",
                onClick: te,
                children: "Close",
              }),
            }),
          ],
        }),
      ],
    });
  },
  P0 = ({ selectedRows: e }) => {
    const [t, n] = v.useState(""),
      [r, o] = v.useState(""),
      [l, i] = v.useState(!1),
      [s, a] = v.useState(""),
      [u, f] = v.useState(""),
      [m, g] = v.useState(!1),
      [x, w] = v.useState(""),
      [S, j] = v.useState(""),
      [p, d] = v.useState(""),
      [h, y] = v.useState(""),
      [E, k] = v.useState(""),
      [N, O] = v.useState(!1),
      [I, L] = v.useState(""),
      [$, X] = v.useState(!0),
      [A, G] = v.useState(""),
      [K, U] = v.useState(!1),
      H = (T) =>
        c.jsx(go, {
          id: "button-tooltip",
          style: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          children: T,
        }),
      P = (T) => T.match(/^(a+)(b)(\1)$/) !== null,
      M = (T) => {
        const C = T.target.value;
        n(C),
          C < 4 || C > 12
            ? o(
                "Please enter a positive integer in the range [4, 12] for best results"
              )
            : (o(""), i(!0));
      },
      z = (T) => {
        const C = T.target.value;
        a(C),
          C.length < t
            ? f(`String must contain at least ${t} characters`)
            : !P(C) || C.length <= t
            ? f("The string should follow the pattern 'aⁿbaⁿ'")
            : f("");
      },
      F = (T) => {
        T.key === "Enter" && g(!0);
      },
      V = () => {
        if (x.length + S.length > t)
          y("|xy| should be less than or equal to pumping length (p)");
        else if (S.length === 0) y("|y| should be greater than or equal to 0");
        else {
          const C = x + S + p;
          P(C)
            ? (y(""), O(!0))
            : y(
                "Invalid decomposition. The string should follow the pattern 'aⁿbaⁿ'."
              );
        }
      },
      ee = () => {
        const T = Z(S, parseInt(E, 10)),
          C = P(x + T + p);
        let D = "";
        C || (D = "The pumped string does not follow the pattern 'aⁿbaⁿ'."),
          G(D),
          X(C),
          L(`${x}<span style="color: blue;">${T}</span>${p}`);
      },
      Z = (T, C) => {
        let D = T;
        for (let B = 1; B < C; B++) D += T;
        return D;
      },
      te = () => {
        U(!0);
      },
      Q = () => {
        U(!1);
      };
    return c.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      children: [
        c.jsx(yt, {
          className: "cardbody",
          style: {
            width: "600px",
            backgroundColor: "transparent",
            border: "3px solid antiquewhite",
            color: "white",
            fontSize: "15px",
            overflowY: "auto",
            maxHeight: "calc(4 * 90px)",
          },
          children: c.jsx(yt.Body, {
            children: e.map((T) =>
              c.jsxs(
                "div",
                {
                  style: { fontSize: "15px" },
                  children: [
                    c.jsxs("div", {
                      style: { fontSize: "25px", textAlign: "center" },
                      children: [T, ","],
                    }),
                    c.jsx("p", {
                      style: { marginLeft: "10px" },
                      children:
                        "Assume the language is regular over the alphabet Σ = {a, b}",
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsxs("label", {
                          htmlFor: "pumpingLength",
                          children: [
                            '1. Please select a value for P (pumping length) and press "Enter"  ',
                            c.jsx(Oe, {
                              placement: "right",
                              overlay: H(
                                "The pumping lemma states that for any regular language L, there exists a pumping length p. This means for any string s in L with length |s| >= p,"
                              ),
                              children: c.jsx("i", {
                                className: "bi bi-info-circle",
                              }),
                            }),
                          ],
                        }),
                        c.jsx("br", {}),
                        c.jsx("input", {
                          style: {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                          type: "number",
                          id: "pumpingLength",
                          value: t,
                          onChange: M,
                          onKeyPress: F,
                          className: "form-control",
                          placeholder: "Enter pumping length",
                        }),
                        m && r && c.jsx("p", { children: r }),
                      ],
                    }),
                    l &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "stringInput",
                            children: [
                              "2. Please enter a string that belongs to L with |s| ≥ p  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: H(
                                  "The string must be in the language L and have a length greater than or equal to the pumping length (p)."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "stringInput",
                            value: s,
                            onChange: z,
                            onKeyPress: F,
                            className: "form-control",
                            placeholder: "Enter string",
                          }),
                          m && u && c.jsx("p", { children: u }),
                        ],
                      }),
                    l &&
                      !u &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "decomposition",
                            children: [
                              "3. Select decomposition of S into xyz  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: H(
                                  "Choose a valid decomposition of the string S into three parts: x, y, and z. Ensure |xy| <= p and |y| > 0. The pumping lemma asserts that for any valid decomposition, you can pump 'y' any number of times to obtain a string that is still in L."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("label", {
                            htmlFor: "xValue",
                            children: "Enter x:",
                          }),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "xValue",
                            value: x,
                            onChange: (C) => w(C.target.value),
                            className: "form-control",
                            placeholder: "Enter x",
                          }),
                          c.jsx("label", {
                            htmlFor: "yValue",
                            children: "Enter y:",
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "yValue",
                            value: S,
                            onChange: (C) => j(C.target.value),
                            className: "form-control",
                            placeholder: "Enter y",
                          }),
                          c.jsx("label", {
                            htmlFor: "zValue",
                            children: "Enter z:",
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "text",
                            id: "zValue",
                            value: p,
                            onChange: (C) => d(C.target.value),
                            className: "form-control",
                            placeholder: "Enter z",
                          }),
                          h && c.jsx("p", { children: h }),
                          c.jsx(xe, {
                            onClick: V,
                            style: { marginTop: "10px", fontSize: "15px" },
                            children: "Next",
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      N &&
                      c.jsxs("div", {
                        children: [
                          c.jsxs("label", {
                            htmlFor: "iValue",
                            children: [
                              "4. Enter i value to give contradiction  ",
                              c.jsx(Oe, {
                                placement: "right",
                                overlay: H(
                                  "Choose an 'i' value to pump 'y' that contradicts the pumping lemma. Choosing 'i' in this step tests the validity of the pumping lemma for the chosen string."
                                ),
                                children: c.jsx("i", {
                                  className: "bi bi-info-circle",
                                }),
                              }),
                            ],
                          }),
                          c.jsx("br", {}),
                          c.jsx("input", {
                            style: {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            type: "number",
                            id: "iValue",
                            value: E,
                            onChange: (C) => k(C.target.value),
                            className: "form-control",
                            placeholder: "Enter i value",
                          }),
                          c.jsx(xe, {
                            onClick: ee,
                            style: { marginTop: "10px", fontSize: "15px" },
                            children: "Submit",
                          }),
                        ],
                      }),
                    l &&
                      !u &&
                      I &&
                      c.jsxs("div", {
                        children: [
                          c.jsx("label", { children: "Pumped String:" }),
                          c.jsx("br", {}),
                          c.jsx("div", {
                            style: {
                              fontSize: "25px",
                              backgroundColor: "transparent",
                              color: "white",
                            },
                            dangerouslySetInnerHTML: { __html: I },
                          }),
                          $
                            ? c.jsx("p", { children: "The string is regular." })
                            : c.jsx("p", {
                                children: "The string is not regular.",
                              }),
                          c.jsx(xe, {
                            onClick: te,
                            style: { marginTop: "10px", fontSize: "15px" },
                            children: "Explanation",
                          }),
                        ],
                      }),
                  ],
                },
                T
              )
            ),
          }),
        }),
        c.jsxs(me, {
          show: K,
          onHide: Q,
          centered: !0,
          style: { fontSize: "20px" },
          children: [
            c.jsx(me.Header, {
              closeButton: !0,
              children: c.jsx(me.Title, { children: "Explanation" }),
            }),
            c.jsx(me.Body, { children: A && c.jsx("p", { children: A }) }),
            c.jsx(me.Footer, {
              children: c.jsx(xe, {
                variant: "secondary",
                onClick: Q,
                children: "Close",
              }),
            }),
          ],
        }),
      ],
    });
  },
  R0 = () => {
    const [e, t] = v.useState(!1),
      [n, r] = v.useState([]),
      o = {
        " L = {aⁿ bⁿ :n ≥ 0 }": N0,
        "L = {aⁿ | n is prime }": T0,
        " L={aⁿ bⁿ²|n∈N}": O0,
        "L={aⁿbaⁿ|n∈N}": P0,
      },
      l = (i) => {
        n.includes(i) ? r(n.filter((s) => s !== i)) : r([i]), t(!0);
      };
    return c.jsx("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#022e42",
      },
      children: e
        ? Ct.createElement(o[n[0]], { selectedRows: n })
        : c.jsxs(yt, {
            style: {
              width: "15rem",
              marginTop: "20px",
              borderColor: "aqua",
              backgroundColor: "#022e42",
              color: "white",
            },
            children: [
              c.jsx(yt.Header, {
                style: { borderColor: "aqua" },
                children: "Select a Pumping Lemma",
              }),
              c.jsx(gc, {
                variant: "flush",
                children: Object.keys(o).map((i) =>
                  c.jsx(
                    gc.Item,
                    {
                      style: {
                        borderColor: "aqua",
                        backgroundColor: "#022e42",
                        color: "white",
                      },
                      children: c.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        children: [
                          c.jsxs("span", { children: [" ", i] }),
                          c.jsx(xe, {
                            style: {
                              borderColor: "aqua",
                              backgroundColor: "#022e42",
                              color: "white",
                            },
                            onClick: () => l(i),
                            children: "Select",
                          }),
                        ],
                      }),
                    },
                    i
                  )
                ),
              }),
            ],
          }),
    });
  };
function L0() {
  const [e, t] = v.useState(!1),
    n = () => {
      t(!0);
    };
  return c.jsx("div", {
    children: c.jsxs("div", {
      style: { display: "flex", height: "130vh", justifyContent: "flex-end" },
      children: [
        c.jsx("div", {
          style: { flex: 1.5, backgroundColor: "#022e42" },
          children: e ? c.jsx(R0, {}) : null,
        }),
        c.jsxs("div", {
          style: { flex: 0.32, backgroundColor: "white" },
          children: [
            c.jsx("h5", {
              style: {
                fontSize: "20px",
                marginLeft: "10px",
                marginTop: "10PX",
              },
              children: "Theorem:",
            }),
            c.jsx("p", {
              style: { marginLeft: "10px", fontSize: "20px" },
              children:
                "Let A be a regular language. Then there exists an integer p ≥ 1, called the pumping length, such that the following holds: Every string s in A, with |s| ≥ p, can be written as s = xyz, such that",
            }),
            c.jsxs("p", {
              style: { marginLeft: "10px", fontSize: "20px" },
              children: [
                "1. y ",
                c.jsx("span", { children: "≠" }),
                " ",
                c.jsx("span", { children: "ε " }),
                " (i.e., |y| ≥ 1),",
              ],
            }),
            c.jsx("p", {
              style: { marginLeft: "10px", fontSize: "20px" },
              children: "2. |xy| ≤ p",
            }),
            c.jsxs("p", {
              style: { marginLeft: "10px", fontSize: "20px" },
              children: [
                "3. for all i ≥ 0, , xy ",
                c.jsx("sup", { children: "i" }),
                " z ∈ A.",
              ],
            }),
            c.jsx("p", {
              style: { marginLeft: "10px", fontSize: "20px" },
              children:
                "This proof enables us to determine whether the given string is regular or not ",
            }),
            c.jsx(xe, {
              variant: "primary",
              style: { marginLeft: "10px" },
              onClick: n,
              children: "Start",
            }),
          ],
        }),
      ],
    }),
  });
}
function _0() {
  return c.jsx(c.Fragment, {
    children: c.jsx("div", { children: c.jsx(L0, {}) }),
  });
}
Ni.createRoot(document.getElementById("root")).render(
  c.jsx(Ct.StrictMode, { children: c.jsx(_0, {}) })
);
