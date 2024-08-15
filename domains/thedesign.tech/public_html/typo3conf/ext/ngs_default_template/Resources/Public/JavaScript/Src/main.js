/*!
 * Ngs Bootstrap Package v1.0.0 (https://naghashyan.com/)
 * Copyright 2017-2023 Karen Manukyan
 * Licensed under the GPL-2.0-or-later license
 */

var tns = function() {
  var t = window
    , Ai = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
      return setTimeout(t, 16)
    }
    , e = window
    , Ni = e.cancelAnimationFrame || e.mozCancelAnimationFrame || function(t) {
      clearTimeout(t)
    }
  ;
  function Li() {
    for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
      if (null !== (t = arguments[a]))
        for (e in t)
          i !== (n = t[e]) && void 0 !== n && (i[e] = n);
    return i
  }
  function Bi(t) {
    return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t
  }
  function Si(t, e, n, i) {
    if (i)
      try {
        t.setItem(e, n)
      } catch (t) {}
    return n
  }
  function Hi() {
    var t = document
      , e = t.body;
    return e || ((e = t.createElement("body")).fake = !0),
      e
  }
  var n = document.documentElement;
  function Oi(t) {
    var e = "";
    return t.fake && (e = n.style.overflow,
      t.style.background = "",
      t.style.overflow = n.style.overflow = "hidden",
      n.appendChild(t)),
      e
  }
  function Di(t, e) {
    t.fake && (t.remove(),
      n.style.overflow = e,
      n.offsetHeight)
  }
  function ki(t, e, n, i) {
    "insertRule"in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
  }
  function Ri(t) {
    return ("insertRule"in t ? t.cssRules : t.rules).length
  }
  function Ii(t, e, n) {
    for (var i = 0, a = t.length; i < a; i++)
      e.call(n, t[i], i)
  }
  var i = "classList"in document.createElement("_")
    , Pi = i ? function(t, e) {
      return t.classList.contains(e)
    }
    : function(t, e) {
      return 0 <= t.className.indexOf(e)
    }
    , zi = i ? function(t, e) {
      Pi(t, e) || t.classList.add(e)
    }
    : function(t, e) {
      Pi(t, e) || (t.className += " " + e)
    }
    , Wi = i ? function(t, e) {
      Pi(t, e) && t.classList.remove(e)
    }
    : function(t, e) {
      Pi(t, e) && (t.className = t.className.replace(e, ""))
    }
  ;
  function qi(t, e) {
    return t.hasAttribute(e)
  }
  function Fi(t, e) {
    return t.getAttribute(e)
  }
  function r(t) {
    return void 0 !== t.item
  }
  function ji(t, e) {
    if (t = r(t) || t instanceof Array ? t : [t],
    "[object Object]" === Object.prototype.toString.call(e))
      for (var n = t.length; n--; )
        for (var i in e)
          t[n].setAttribute(i, e[i])
  }
  function Vi(t, e) {
    t = r(t) || t instanceof Array ? t : [t];
    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; )
      for (var a = n; a--; )
        t[i].removeAttribute(e[a])
  }
  function Gi(t) {
    for (var e = [], n = 0, i = t.length; n < i; n++)
      e.push(t[n]);
    return e
  }
  function Qi(t, e) {
    "none" !== t.style.display && (t.style.display = "none")
  }
  function Xi(t, e) {
    "none" === t.style.display && (t.style.display = "")
  }
  function Yi(t) {
    return "none" !== window.getComputedStyle(t).display
  }
  function Ki(e) {
    if ("string" == typeof e) {
      var n = [e]
        , i = e.charAt(0).toUpperCase() + e.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function(t) {
        "ms" === t && "transform" !== e || n.push(t + i)
      }),
        e = n
    }
    for (var t = document.createElement("fakeelement"), a = (e.length,
      0); a < e.length; a++) {
      var r = e[a];
      if (void 0 !== t.style[r])
        return r
    }
    return !1
  }
  function Ji(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"),
      n
  }
  var a = !1;
  try {
    var o = Object.defineProperty({}, "passive", {
      get: function() {
        a = !0
      }
    });
    window.addEventListener("test", null, o)
  } catch (t) {}
  var u = !!a && {
    passive: !0
  };
  function Ui(t, e, n) {
    for (var i in e) {
      var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
      t.addEventListener(i, e[i], a)
    }
  }
  function _i(t, e) {
    for (var n in e) {
      var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
      t.removeEventListener(n, e[n], i)
    }
  }
  function Zi() {
    return {
      topics: {},
      on: function(t, e) {
        this.topics[t] = this.topics[t] || [],
          this.topics[t].push(e)
      },
      off: function(t, e) {
        if (this.topics[t])
          for (var n = 0; n < this.topics[t].length; n++)
            if (this.topics[t][n] === e) {
              this.topics[t].splice(n, 1);
              break
            }
      },
      emit: function(e, n) {
        n.type = e,
        this.topics[e] && this.topics[e].forEach(function(t) {
          t(n, e)
        })
      }
    }
  }
  Object.keys || (Object.keys = function(t) {
      var e = [];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      return e
    }
  ),
  "remove"in Element.prototype || (Element.prototype.remove = function() {
      this.parentNode && this.parentNode.removeChild(this)
    }
  );
  var $i = function(H) {
    H = Li({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0,
      nonce: !1
    }, H || {});
    var O = document
      , m = window
      , a = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }
      , e = {}
      , n = H.useLocalStorage;
    if (n) {
      var t = navigator.userAgent
        , i = new Date;
      try {
        (e = m.localStorage) ? (e.setItem(i, i),
          n = e.getItem(i) == i,
          e.removeItem(i)) : n = !1,
        n || (e = {})
      } catch (t) {
        n = !1
      }
      n && (e.tnsApp && e.tnsApp !== t && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
        e.removeItem(t)
      }),
        localStorage.tnsApp = t)
    }
    var y = e.tC ? Bi(e.tC) : Si(e, "tC", function() {
      var t = document
        , e = Hi()
        , n = Oi(e)
        , i = t.createElement("div")
        , a = !1;
      e.appendChild(i);
      try {
        for (var r, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++)
          if (r = u[l],
            i.style.width = r,
          100 === i.offsetWidth) {
            a = r.replace(o, "");
            break
          }
      } catch (t) {}
      return e.fake ? Di(e, n) : i.remove(),
        a
    }(), n)
      , g = e.tPL ? Bi(e.tPL) : Si(e, "tPL", function() {
      var t, e = document, n = Hi(), i = Oi(n), a = e.createElement("div"), r = e.createElement("div"), o = "";
      a.className = "tns-t-subp2",
        r.className = "tns-t-ct";
      for (var u = 0; u < 70; u++)
        o += "<div></div>";
      return r.innerHTML = o,
        a.appendChild(r),
        n.appendChild(a),
        t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2,
        n.fake ? Di(n, i) : a.remove(),
        t
    }(), n)
      , D = e.tMQ ? Bi(e.tMQ) : Si(e, "tMQ", function() {
      if (window.matchMedia || window.msMatchMedia)
        return !0;
      var t, e = document, n = Hi(), i = Oi(n), a = e.createElement("div"), r = e.createElement("style"), o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
      return r.type = "text/css",
        a.className = "tns-mq-test",
        n.appendChild(r),
        n.appendChild(a),
        r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(e.createTextNode(o)),
        t = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position,
        n.fake ? Di(n, i) : a.remove(),
      "absolute" === t
    }(), n)
      , r = e.tTf ? Bi(e.tTf) : Si(e, "tTf", Ki("transform"), n)
      , o = e.t3D ? Bi(e.t3D) : Si(e, "t3D", function(t) {
      if (!t)
        return !1;
      if (!window.getComputedStyle)
        return !1;
      var e, n = document, i = Hi(), a = Oi(i), r = n.createElement("p"), o = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
      return o += "transform",
        i.insertBefore(r, null),
        r.style[t] = "translate3d(1px,1px,1px)",
        e = window.getComputedStyle(r).getPropertyValue(o),
        i.fake ? Di(i, a) : r.remove(),
      void 0 !== e && 0 < e.length && "none" !== e
    }(r), n)
      , x = e.tTDu ? Bi(e.tTDu) : Si(e, "tTDu", Ki("transitionDuration"), n)
      , u = e.tTDe ? Bi(e.tTDe) : Si(e, "tTDe", Ki("transitionDelay"), n)
      , b = e.tADu ? Bi(e.tADu) : Si(e, "tADu", Ki("animationDuration"), n)
      , l = e.tADe ? Bi(e.tADe) : Si(e, "tADe", Ki("animationDelay"), n)
      , s = e.tTE ? Bi(e.tTE) : Si(e, "tTE", Ji(x, "Transition"), n)
      , c = e.tAE ? Bi(e.tAE) : Si(e, "tAE", Ji(b, "Animation"), n)
      , f = m.console && "function" == typeof m.console.warn
      , d = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"]
      , v = {};
    if (d.forEach(function(t) {
      if ("string" == typeof H[t]) {
        var e = H[t]
          , n = O.querySelector(e);
        if (v[t] = e,
        !n || !n.nodeName)
          return void (f && console.warn("Can't find", H[t]));
        H[t] = n
      }
    }),
      !(H.container.children.length < 1)) {
      var k = H.responsive
        , R = H.nested
        , I = "carousel" === H.mode;
      if (k) {
        0 in k && (H = Li(H, k[0]),
          delete k[0]);
        var p = {};
        for (var h in k) {
          var w = k[h];
          w = "number" == typeof w ? {
            items: w
          } : w,
            p[h] = w
        }
        k = p,
          p = null
      }
      if (I || function t(e) {
        for (var n in e)
          I || ("slideBy" === n && (e[n] = "page"),
          "edgePadding" === n && (e[n] = !1),
          "autoHeight" === n && (e[n] = !1)),
          "responsive" === n && t(e[n])
      }(H),
        !I) {
        H.axis = "horizontal",
          H.slideBy = "page",
          H.edgePadding = !1;
        var P = H.animateIn
          , z = H.animateOut
          , C = H.animateDelay
          , W = H.animateNormal
      }
      var M, q, F = "horizontal" === H.axis, T = O.createElement("div"), j = O.createElement("div"), V = H.container, E = V.parentNode, A = V.outerHTML, G = V.children, Q = G.length, X = rn(), Y = !1;
      k && En(),
      I && (V.className += " tns-vpfix");
      var N, L, B, S, K, J, U, _, Z, $ = H.autoWidth, tt = sn("fixedWidth"), et = sn("edgePadding"), nt = sn("gutter"), it = un(), at = sn("center"), rt = $ ? 1 : Math.floor(sn("items")), ot = sn("slideBy"), ut = H.viewportMax || H.fixedWidthViewportWidth, lt = sn("arrowKeys"), st = sn("speed"), ct = H.rewind, ft = !ct && H.loop, dt = sn("autoHeight"), vt = sn("controls"), pt = sn("controlsText"), ht = sn("nav"), mt = sn("touch"), yt = sn("mouseDrag"), gt = sn("autoplay"), xt = sn("autoplayTimeout"), bt = sn("autoplayText"), wt = sn("autoplayHoverPause"), Ct = sn("autoplayResetOnVisibility"), Mt = (U = null,
        _ = sn("nonce"),
        Z = document.createElement("style"),
      U && Z.setAttribute("media", U),
      _ && Z.setAttribute("nonce", _),
        document.querySelector("head").appendChild(Z),
        Z.sheet ? Z.sheet : Z.styleSheet), Tt = H.lazyload, Et = H.lazyloadSelector, At = [], Nt = ft ? (K = function() {
        {
          if ($ || tt && !ut)
            return Q - 1;
          var t = tt ? "fixedWidth" : "items"
            , e = [];
          if ((tt || H[t] < Q) && e.push(H[t]),
            k)
            for (var n in k) {
              var i = k[n][t];
              i && (tt || i < Q) && e.push(i)
            }
          return e.length || e.push(0),
            Math.ceil(tt ? ut / Math.min.apply(null, e) : Math.max.apply(null, e))
        }
      }(),
        J = I ? Math.ceil((5 * K - Q) / 2) : 4 * K - Q,
        J = Math.max(K, J),
        ln("edgePadding") ? J + 1 : J) : 0, Lt = I ? Q + 2 * Nt : Q + Nt, Bt = !(!tt && !$ || ft), St = tt ? _n() : null, Ht = !I || !ft, Ot = F ? "left" : "top", Dt = "", kt = "", Rt = tt ? function() {
          return at && !ft ? Q - 1 : Math.ceil(-St / (tt + nt))
        }
        : $ ? function() {
            for (var t = 0; t < Lt; t++)
              if (N[t] >= -St)
                return t
          }
          : function() {
            return at && I && !ft ? Q - 1 : ft || I ? Math.max(0, Lt - Math.ceil(rt)) : Lt - 1
          }
        , It = en(sn("startIndex")), Pt = It, zt = (tn(),
        0), Wt = $ ? null : Rt(), qt = H.preventActionWhenRunning, Ft = H.swipeAngle, jt = !Ft || "?", Vt = !1, Gt = H.onInit, Qt = new Zi, Xt = " tns-slider tns-" + H.mode, Yt = V.id || (S = window.tnsId,
        window.tnsId = S ? S + 1 : 1,
      "tns" + window.tnsId), Kt = sn("disable"), Jt = !1, Ut = H.freezable, _t = !(!Ut || $) && Tn(), Zt = !1, $t = {
        click: oi,
        keydown: function(t) {
          t = pi(t);
          var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
          0 <= e && (0 === e ? we.disabled || oi(t, -1) : Ce.disabled || oi(t, 1))
        }
      }, te = {
        click: function(t) {
          if (Vt) {
            if (qt)
              return;
            ai()
          }
          var e = hi(t = pi(t));
          for (; e !== Ae && !qi(e, "data-nav"); )
            e = e.parentNode;
          if (qi(e, "data-nav")) {
            var n = Se = Number(Fi(e, "data-nav"))
              , i = tt || $ ? n * Q / Le : n * rt
              , a = le ? n : Math.min(Math.ceil(i), Q - 1);
            ri(a, t),
            He === n && (Pe && fi(),
              Se = -1)
          }
        },
        keydown: function(t) {
          t = pi(t);
          var e = O.activeElement;
          if (!qi(e, "data-nav"))
            return;
          var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode)
            , i = Number(Fi(e, "data-nav"));
          0 <= n && (0 === n ? 0 < i && vi(Ee[i - 1]) : 1 === n ? i < Le - 1 && vi(Ee[i + 1]) : ri(Se = i, t))
        }
      }, ee = {
        mouseover: function() {
          Pe && (li(),
            ze = !0)
        },
        mouseout: function() {
          ze && (ui(),
            ze = !1)
        }
      }, ne = {
        visibilitychange: function() {
          O.hidden ? Pe && (li(),
            qe = !0) : qe && (ui(),
            qe = !1)
        }
      }, ie = {
        keydown: function(t) {
          t = pi(t);
          var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
          0 <= e && oi(t, 0 === e ? -1 : 1)
        }
      }, ae = {
        touchstart: xi,
        touchmove: bi,
        touchend: wi,
        touchcancel: wi
      }, re = {
        mousedown: xi,
        mousemove: bi,
        mouseup: wi,
        mouseleave: wi
      }, oe = ln("controls"), ue = ln("nav"), le = !!$ || H.navAsThumbnails, se = ln("autoplay"), ce = ln("touch"), fe = ln("mouseDrag"), de = "tns-slide-active", ve = "tns-slide-cloned", pe = "tns-complete", he = {
        load: function(t) {
          kn(hi(t))
        },
        error: function(t) {
          e = hi(t),
            zi(e, "failed"),
            Rn(e);
          var e
        }
      }, me = "force" === H.preventScrollOnTouch;
      if (oe)
        var ye, ge, xe = H.controlsContainer, be = H.controlsContainer ? H.controlsContainer.outerHTML : "", we = H.prevButton, Ce = H.nextButton, Me = H.prevButton ? H.prevButton.outerHTML : "", Te = H.nextButton ? H.nextButton.outerHTML : "";
      if (ue)
        var Ee, Ae = H.navContainer, Ne = H.navContainer ? H.navContainer.outerHTML : "", Le = $ ? Q : Mi(), Be = 0, Se = -1, He = an(), Oe = He, De = "tns-nav-active", ke = "Carousel Page ", Re = " (Current Slide)";
      if (se)
        var Ie, Pe, ze, We, qe, Fe = "forward" === H.autoplayDirection ? 1 : -1, je = H.autoplayButton, Ve = H.autoplayButton ? H.autoplayButton.outerHTML : "", Ge = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (ce || fe)
        var Qe, Xe, Ye = {}, Ke = {}, Je = !1, Ue = F ? function(t, e) {
            return t.x - e.x
          }
          : function(t, e) {
            return t.y - e.y
          }
        ;
      $ || $e(Kt || _t),
      r && (Ot = r,
        Dt = "translate",
        o ? (Dt += F ? "3d(" : "3d(0px, ",
          kt = F ? ", 0px, 0px)" : ", 0px)") : (Dt += F ? "X(" : "Y(",
          kt = ")")),
      I && (V.className = V.className.replace("tns-vpfix", "")),
        function() {
          ln("gutter");
          T.className = "tns-outer",
            j.className = "tns-inner",
            T.id = Yt + "-ow",
            j.id = Yt + "-iw",
          "" === V.id && (V.id = Yt);
          Xt += g || $ ? " tns-subpixel" : " tns-no-subpixel",
            Xt += y ? " tns-calc" : " tns-no-calc",
          $ && (Xt += " tns-autowidth");
          Xt += " tns-" + H.axis,
            V.className += Xt,
            I ? ((M = O.createElement("div")).id = Yt + "-mw",
              M.className = "tns-ovh",
              T.appendChild(M),
              M.appendChild(j)) : T.appendChild(j);
          if (dt) {
            var t = M || j;
            t.className += " tns-ah"
          }
          if (E.insertBefore(T, V),
            j.appendChild(V),
            Ii(G, function(t, e) {
              zi(t, "tns-item"),
              t.id || (t.id = Yt + "-item" + e),
              !I && W && zi(t, W),
                ji(t, {
                  "aria-hidden": "true",
                  tabindex: "-1"
                })
            }),
            Nt) {
            for (var e = O.createDocumentFragment(), n = O.createDocumentFragment(), i = Nt; i--; ) {
              var a = i % Q
                , r = G[a].cloneNode(!0);
              if (zi(r, ve),
                Vi(r, "id"),
                n.insertBefore(r, n.firstChild),
                I) {
                var o = G[Q - 1 - a].cloneNode(!0);
                zi(o, ve),
                  Vi(o, "id"),
                  e.appendChild(o)
              }
            }
            V.insertBefore(e, V.firstChild),
              V.appendChild(n),
              G = V.children
          }
        }(),
        function() {
          if (!I)
            for (var t = It, e = It + Math.min(Q, rt); t < e; t++) {
              var n = G[t];
              n.style.left = 100 * (t - It) / rt + "%",
                zi(n, P),
                Wi(n, W)
            }
          F && (g || $ ? (ki(Mt, "#" + Yt + " > .tns-item", "font-size:" + m.getComputedStyle(G[0]).fontSize + ";", Ri(Mt)),
            ki(Mt, "#" + Yt, "font-size:0;", Ri(Mt))) : I && Ii(G, function(t, e) {
            var n;
            t.style.marginLeft = (n = e,
              y ? y + "(" + 100 * n + "% / " + Lt + ")" : 100 * n / Lt + "%")
          }));
          if (D) {
            if (x) {
              var i = M && H.autoHeight ? hn(H.speed) : "";
              ki(Mt, "#" + Yt + "-mw", i, Ri(Mt))
            }
            i = cn(H.edgePadding, H.gutter, H.fixedWidth, H.speed, H.autoHeight),
              ki(Mt, "#" + Yt + "-iw", i, Ri(Mt)),
            I && (i = F && !$ ? "width:" + fn(H.fixedWidth, H.gutter, H.items) + ";" : "",
            x && (i += hn(st)),
              ki(Mt, "#" + Yt, i, Ri(Mt))),
              i = F && !$ ? dn(H.fixedWidth, H.gutter, H.items) : "",
            H.gutter && (i += vn(H.gutter)),
            I || (x && (i += hn(st)),
            b && (i += mn(st))),
            i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt))
          } else {
            I && dt && (M.style[x] = st / 1e3 + "s"),
              j.style.cssText = cn(et, nt, tt, dt),
            I && F && !$ && (V.style.width = fn(tt, nt, rt));
            var i = F && !$ ? dn(tt, nt, rt) : "";
            nt && (i += vn(nt)),
            i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt))
          }
          if (k && D)
            for (var a in k) {
              a = parseInt(a);
              var r = k[a]
                , i = ""
                , o = ""
                , u = ""
                , l = ""
                , s = ""
                , c = $ ? null : sn("items", a)
                , f = sn("fixedWidth", a)
                , d = sn("speed", a)
                , v = sn("edgePadding", a)
                , p = sn("autoHeight", a)
                , h = sn("gutter", a);
              x && M && sn("autoHeight", a) && "speed"in r && (o = "#" + Yt + "-mw{" + hn(d) + "}"),
              ("edgePadding"in r || "gutter"in r) && (u = "#" + Yt + "-iw{" + cn(v, h, f, d, p) + "}"),
              I && F && !$ && ("fixedWidth"in r || "items"in r || tt && "gutter"in r) && (l = "width:" + fn(f, h, c) + ";"),
              x && "speed"in r && (l += hn(d)),
              l && (l = "#" + Yt + "{" + l + "}"),
              ("fixedWidth"in r || tt && "gutter"in r || !I && "items"in r) && (s += dn(f, h, c)),
              "gutter"in r && (s += vn(h)),
              !I && "speed"in r && (x && (s += hn(d)),
              b && (s += mn(d))),
              s && (s = "#" + Yt + " > .tns-item{" + s + "}"),
              (i = o + u + l + s) && Mt.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", Mt.cssRules.length)
            }
        }(),
        yn();
      var _e = ft ? I ? function() {
          var t = zt
            , e = Wt;
          t += ot,
            e -= ot,
            et ? (t += 1,
              e -= 1) : tt && (it + nt) % (tt + nt) && (e -= 1),
          Nt && (e < It ? It -= Q : It < t && (It += Q))
        }
        : function() {
          if (Wt < It)
            for (; zt + Q <= It; )
              It -= Q;
          else if (It < zt)
            for (; It <= Wt - Q; )
              It += Q
        }
        : function() {
          It = Math.max(zt, Math.min(Wt, It))
        }
        , Ze = I ? function() {
          var e, n, i, a, t, r, o, u, l, s, c;
          Jn(V, ""),
            x || !st ? (ti(),
            st && Yi(V) || ai()) : (e = V,
              n = Ot,
              i = Dt,
              a = kt,
              t = Zn(),
              r = st,
              o = ai,
              u = Math.min(r, 10),
              l = 0 <= t.indexOf("%") ? "%" : "px",
              t = t.replace(l, ""),
              s = Number(e.style[n].replace(i, "").replace(a, "").replace(l, "")),
              c = (t - s) / r * u,
              setTimeout(function t() {
                r -= u,
                  s += c,
                  e.style[n] = i + s + l + a,
                  0 < r ? setTimeout(t, u) : o()
              }, u)),
          F || Ci()
        }
        : function() {
          At = [];
          var t = {};
          t[s] = t[c] = ai,
            _i(G[Pt], t),
            Ui(G[It], t),
            ei(Pt, P, z, !0),
            ei(It, W, P),
          s && c && st && Yi(V) || ai()
        }
      ;
      return {
        version: "2.9.4",
        getInfo: Ei,
        events: Qt,
        goTo: ri,
        play: function() {
          gt && !Pe && (ci(),
            We = !1)
        },
        pause: function() {
          Pe && (fi(),
            We = !0)
        },
        isOn: Y,
        updateSliderHeight: Fn,
        refresh: yn,
        destroy: function() {
          if (Mt.disabled = !0,
          Mt.ownerNode && Mt.ownerNode.remove(),
            _i(m, {
              resize: Cn
            }),
          lt && _i(O, ie),
          xe && _i(xe, $t),
          Ae && _i(Ae, te),
            _i(V, ee),
            _i(V, ne),
          je && _i(je, {
            click: di
          }),
          gt && clearInterval(Ie),
          I && s) {
            var t = {};
            t[s] = ai,
              _i(V, t)
          }
          mt && _i(V, ae),
          yt && _i(V, re);
          var r = [A, be, Me, Te, Ne, Ve];
          for (var e in d.forEach(function(t, e) {
            var n = "container" === t ? T : H[t];
            if ("object" == typeof n && n) {
              var i = !!n.previousElementSibling && n.previousElementSibling
                , a = n.parentNode;
              n.outerHTML = r[e],
                H[t] = i ? i.nextElementSibling : a.firstElementChild
            }
          }),
            d = P = z = C = W = F = T = j = V = E = A = G = Q = q = X = $ = tt = et = nt = it = rt = ot = ut = lt = st = ct = ft = dt = Mt = Tt = N = At = Nt = Lt = Bt = St = Ht = Ot = Dt = kt = Rt = It = Pt = zt = Wt = Ft = jt = Vt = Gt = Qt = Xt = Yt = Kt = Jt = Ut = _t = Zt = $t = te = ee = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = pe = he = L = vt = pt = xe = be = we = Ce = ye = ge = ht = Ae = Ne = Ee = Le = Be = Se = He = Oe = De = ke = Re = gt = xt = Fe = bt = wt = je = Ve = Ct = Ge = Ie = Pe = ze = We = qe = Ye = Ke = Qe = Je = Xe = Ue = mt = yt = null,
            this)
            "rebuild" !== e && (this[e] = null);
          Y = !1
        },
        rebuild: function() {
          return $i(Li(H, v))
        }
      }
    }
    function $e(t) {
      t && (vt = ht = mt = yt = lt = gt = wt = Ct = !1)
    }
    function tn() {
      for (var t = I ? It - Nt : It; t < 0; )
        t += Q;
      return t % Q + 1
    }
    function en(t) {
      return t = t ? Math.max(0, Math.min(ft ? Q - 1 : Q - rt, t)) : 0,
        I ? t + Nt : t
    }
    function nn(t) {
      for (null == t && (t = It),
           I && (t -= Nt); t < 0; )
        t += Q;
      return Math.floor(t % Q)
    }
    function an() {
      var t, e = nn();
      return t = le ? e : tt || $ ? Math.ceil((e + 1) * Le / Q - 1) : Math.floor(e / rt),
      !ft && I && It === Wt && (t = Le - 1),
        t
    }
    function rn() {
      return m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth
    }
    function on(t) {
      return "top" === t ? "afterbegin" : "beforeend"
    }
    function un() {
      var t = et ? 2 * et - nt : 0;
      return function t(e) {
        if (null != e) {
          var n, i, a = O.createElement("div");
          return e.appendChild(a),
            i = (n = a.getBoundingClientRect()).right - n.left,
            a.remove(),
          i || t(e.parentNode)
        }
      }(E) - t
    }
    function ln(t) {
      if (H[t])
        return !0;
      if (k)
        for (var e in k)
          if (k[e][t])
            return !0;
      return !1
    }
    function sn(t, e) {
      if (null == e && (e = X),
      "items" === t && tt)
        return Math.floor((it + nt) / (tt + nt)) || 1;
      var n = H[t];
      if (k)
        for (var i in k)
          e >= parseInt(i) && t in k[i] && (n = k[i][t]);
      return "slideBy" === t && "page" === n && (n = sn("items")),
      I || "slideBy" !== t && "items" !== t || (n = Math.floor(n)),
        n
    }
    function cn(t, e, n, i, a) {
      var r = "";
      if (void 0 !== t) {
        var o = t;
        e && (o -= e),
          r = F ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;"
      } else if (e && !n) {
        var u = "-" + e + "px";
        r = "margin: 0 " + (F ? u + " 0 0" : "0 " + u + " 0") + ";"
      }
      return !I && a && x && i && (r += hn(i)),
        r
    }
    function fn(t, e, n) {
      return t ? (t + e) * Lt + "px" : y ? y + "(" + 100 * Lt + "% / " + n + ")" : 100 * Lt / n + "%"
    }
    function dn(t, e, n) {
      var i;
      if (t)
        i = t + e + "px";
      else {
        I || (n = Math.floor(n));
        var a = I ? Lt : n;
        i = y ? y + "(100% / " + a + ")" : 100 / a + "%"
      }
      return i = "width:" + i,
        "inner" !== R ? i + ";" : i + " !important;"
    }
    function vn(t) {
      var e = "";
      !1 !== t && (e = (F ? "padding-" : "margin-") + (F ? "right" : "bottom") + ": " + t + "px;");
      return e
    }
    function pn(t, e) {
      var n = t.substring(0, t.length - e).toLowerCase();
      return n && (n = "-" + n + "-"),
        n
    }
    function hn(t) {
      return pn(x, 18) + "transition-duration:" + t / 1e3 + "s;"
    }
    function mn(t) {
      return pn(b, 17) + "animation-duration:" + t / 1e3 + "s;"
    }
    function yn() {
      if (ln("autoHeight") || $ || !F) {
        var t = V.querySelectorAll("img");
        Ii(t, function(t) {
          var e = t.src;
          Tt || (e && e.indexOf("data:image") < 0 ? (t.src = "",
            Ui(t, he),
            zi(t, "loading"),
            t.src = e) : kn(t))
        }),
          Ai(function() {
            zn(Gi(t), function() {
              L = !0
            })
          }),
        ln("autoHeight") && (t = In(It, Math.min(It + rt - 1, Lt - 1))),
          Tt ? gn() : Ai(function() {
            zn(Gi(t), gn)
          })
      } else
        I && $n(),
          bn(),
          wn()
    }
    function gn() {
      if ($ && 1 < Q) {
        var i = ft ? It : Q - 1;
        !function t() {
          var e = G[i].getBoundingClientRect().left
            , n = G[i - 1].getBoundingClientRect().right;
          Math.abs(e - n) <= 1 ? xn() : setTimeout(function() {
            t()
          }, 16)
        }()
      } else
        xn()
    }
    function xn() {
      F && !$ || (jn(),
        $ ? (St = _n(),
        Ut && (_t = Tn()),
          Wt = Rt(),
          $e(Kt || _t)) : Ci()),
      I && $n(),
        bn(),
        wn()
    }
    function bn() {
      if (Vn(),
        T.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Hn() + "</span>  of " + Q + "</div>"),
        B = T.querySelector(".tns-liveregion .current"),
        se) {
        var t = gt ? "stop" : "start";
        je ? ji(je, {
          "data-action": t
        }) : H.autoplayButtonOutput && (T.insertAdjacentHTML(on(H.autoplayPosition), '<button type="button" data-action="' + t + '">' + Ge[0] + t + Ge[1] + bt[0] + "</button>"),
          je = T.querySelector("[data-action]")),
        je && Ui(je, {
          click: di
        }),
        gt && (ci(),
        wt && Ui(V, ee),
        Ct && Ui(V, ne))
      }
      if (ue) {
        if (Ae)
          ji(Ae, {
            "aria-label": "Carousel Pagination"
          }),
            Ii(Ee = Ae.children, function(t, e) {
              ji(t, {
                "data-nav": e,
                tabindex: "-1",
                "aria-label": ke + (e + 1),
                "aria-controls": Yt
              })
            });
        else {
          for (var e = "", n = le ? "" : 'style="display:none"', i = 0; i < Q; i++)
            e += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + Yt + '" ' + n + ' aria-label="' + ke + (i + 1) + '"></button>';
          e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>",
            T.insertAdjacentHTML(on(H.navPosition), e),
            Ae = T.querySelector(".tns-nav"),
            Ee = Ae.children
        }
        if (Ti(),
          x) {
          var a = x.substring(0, x.length - 18).toLowerCase()
            , r = "transition: all " + st / 1e3 + "s";
          a && (r = "-" + a + "-" + r),
            ki(Mt, "[aria-controls^=" + Yt + "-item]", r, Ri(Mt))
        }
        ji(Ee[He], {
          "aria-label": ke + (He + 1) + Re
        }),
          Vi(Ee[He], "tabindex"),
          zi(Ee[He], De),
          Ui(Ae, te)
      }
      oe && (xe || we && Ce || (T.insertAdjacentHTML(on(H.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Yt + '">' + pt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Yt + '">' + pt[1] + "</button></div>"),
        xe = T.querySelector(".tns-controls")),
      we && Ce || (we = xe.children[0],
        Ce = xe.children[1]),
      H.controlsContainer && ji(xe, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }),
      (H.controlsContainer || H.prevButton && H.nextButton) && ji([we, Ce], {
        "aria-controls": Yt,
        tabindex: "-1"
      }),
      (H.controlsContainer || H.prevButton && H.nextButton) && (ji(we, {
        "data-controls": "prev"
      }),
        ji(Ce, {
          "data-controls": "next"
        })),
        ye = Qn(we),
        ge = Qn(Ce),
        Kn(),
        xe ? Ui(xe, $t) : (Ui(we, $t),
          Ui(Ce, $t))),
        An()
    }
    function wn() {
      if (I && s) {
        var t = {};
        t[s] = ai,
          Ui(V, t)
      }
      mt && Ui(V, ae, H.preventScrollOnTouch),
      yt && Ui(V, re),
      lt && Ui(O, ie),
        "inner" === R ? Qt.on("outerResized", function() {
          Mn(),
            Qt.emit("innerLoaded", Ei())
        }) : (k || tt || $ || dt || !F) && Ui(m, {
          resize: Cn
        }),
      dt && ("outer" === R ? Qt.on("innerLoaded", Pn) : Kt || Pn()),
        Dn(),
        Kt ? Bn() : _t && Ln(),
        Qt.on("indexChanged", Wn),
      "inner" === R && Qt.emit("innerLoaded", Ei()),
      "function" == typeof Gt && Gt(Ei()),
        Y = !0
    }
    function Cn(t) {
      Ai(function() {
        Mn(pi(t))
      })
    }
    function Mn(t) {
      if (Y) {
        "outer" === R && Qt.emit("outerResized", Ei(t)),
          X = rn();
        var e, n = q, i = !1;
        k && (En(),
        (e = n !== q) && Qt.emit("newBreakpointStart", Ei(t)));
        var a, r, o, u, l = rt, s = Kt, c = _t, f = lt, d = vt, v = ht, p = mt, h = yt, m = gt, y = wt, g = Ct, x = It;
        if (e) {
          var b = tt
            , w = dt
            , C = pt
            , M = at
            , T = bt;
          if (!D)
            var E = nt
              , A = et
        }
        if (lt = sn("arrowKeys"),
          vt = sn("controls"),
          ht = sn("nav"),
          mt = sn("touch"),
          at = sn("center"),
          yt = sn("mouseDrag"),
          gt = sn("autoplay"),
          wt = sn("autoplayHoverPause"),
          Ct = sn("autoplayResetOnVisibility"),
        e && (Kt = sn("disable"),
          tt = sn("fixedWidth"),
          st = sn("speed"),
          dt = sn("autoHeight"),
          pt = sn("controlsText"),
          bt = sn("autoplayText"),
          xt = sn("autoplayTimeout"),
        D || (et = sn("edgePadding"),
          nt = sn("gutter"))),
          $e(Kt),
          it = un(),
        F && !$ || Kt || (jn(),
        F || (Ci(),
          i = !0)),
        (tt || $) && (St = _n(),
          Wt = Rt()),
        (e || tt) && (rt = sn("items"),
          ot = sn("slideBy"),
        (r = rt !== l) && (tt || $ || (Wt = Rt()),
          _e())),
        e && Kt !== s && (Kt ? Bn() : function() {
          if (!Jt)
            return;
          if (Mt.disabled = !1,
            V.className += Xt,
            $n(),
            ft)
            for (var t = Nt; t--; )
              I && Xi(G[t]),
                Xi(G[Lt - t - 1]);
          if (!I)
            for (var e = It, n = It + Q; e < n; e++) {
              var i = G[e]
                , a = e < It + rt ? P : W;
              i.style.left = 100 * (e - It) / rt + "%",
                zi(i, a)
            }
          Nn(),
            Jt = !1
        }()),
        Ut && (e || tt || $) && (_t = Tn()) !== c && (_t ? (ti(Zn(en(0))),
          Ln()) : (!function() {
          if (!Zt)
            return;
          et && D && (j.style.margin = "");
          if (Nt)
            for (var t = "tns-transparent", e = Nt; e--; )
              I && Wi(G[e], t),
                Wi(G[Lt - e - 1], t);
          Nn(),
            Zt = !1
        }(),
          i = !0)),
          $e(Kt || _t),
        gt || (wt = Ct = !1),
        lt !== f && (lt ? Ui(O, ie) : _i(O, ie)),
        vt !== d && (vt ? xe ? Xi(xe) : (we && Xi(we),
        Ce && Xi(Ce)) : xe ? Qi(xe) : (we && Qi(we),
        Ce && Qi(Ce))),
        ht !== v && (ht ? (Xi(Ae),
          Ti()) : Qi(Ae)),
        mt !== p && (mt ? Ui(V, ae, H.preventScrollOnTouch) : _i(V, ae)),
        yt !== h && (yt ? Ui(V, re) : _i(V, re)),
        gt !== m && (gt ? (je && Xi(je),
        Pe || We || ci()) : (je && Qi(je),
        Pe && fi())),
        wt !== y && (wt ? Ui(V, ee) : _i(V, ee)),
        Ct !== g && (Ct ? Ui(O, ne) : _i(O, ne)),
          e) {
          if (tt === b && at === M || (i = !0),
          dt !== w && (dt || (j.style.height = "")),
          vt && pt !== C && (we.innerHTML = pt[0],
            Ce.innerHTML = pt[1]),
          je && bt !== T) {
            var N = gt ? 1 : 0
              , L = je.innerHTML
              , B = L.length - T[N].length;
            L.substring(B) === T[N] && (je.innerHTML = L.substring(0, B) + bt[N])
          }
        } else
          at && (tt || $) && (i = !0);
        if ((r || tt && !$) && (Le = Mi(),
          Ti()),
          (a = It !== x) ? (Qt.emit("indexChanged", Ei()),
            i = !0) : r ? a || Wn() : (tt || $) && (Dn(),
            Vn(),
            Sn()),
        r && !I && function() {
          for (var t = It + Math.min(Q, rt), e = Lt; e--; ) {
            var n = G[e];
            It <= e && e < t ? (zi(n, "tns-moving"),
              n.style.left = 100 * (e - It) / rt + "%",
              zi(n, P),
              Wi(n, W)) : n.style.left && (n.style.left = "",
              zi(n, W),
              Wi(n, P)),
              Wi(n, z)
          }
          setTimeout(function() {
            Ii(G, function(t) {
              Wi(t, "tns-moving")
            })
          }, 300)
        }(),
        !Kt && !_t) {
          if (e && !D && (et === A && nt === E || (j.style.cssText = cn(et, nt, tt, st, dt)),
            F)) {
            I && (V.style.width = fn(tt, nt, rt));
            var S = dn(tt, nt, rt) + vn(nt);
            u = Ri(o = Mt) - 1,
              "deleteRule"in o ? o.deleteRule(u) : o.removeRule(u),
              ki(Mt, "#" + Yt + " > .tns-item", S, Ri(Mt))
          }
          dt && Pn(),
          i && ($n(),
            Pt = It)
        }
        e && Qt.emit("newBreakpointEnd", Ei(t))
      }
    }
    function Tn() {
      if (!tt && !$)
        return Q <= (at ? rt - (rt - 1) / 2 : rt);
      var t = tt ? (tt + nt) * Q : N[Q]
        , e = et ? it + 2 * et : it + nt;
      return at && (e -= tt ? (it - tt) / 2 : (it - (N[It + 1] - N[It] - nt)) / 2),
      t <= e
    }
    function En() {
      for (var t in q = 0,
        k)
        (t = parseInt(t)) <= X && (q = t)
    }
    function An() {
      !gt && je && Qi(je),
      !ht && Ae && Qi(Ae),
      vt || (xe ? Qi(xe) : (we && Qi(we),
      Ce && Qi(Ce)))
    }
    function Nn() {
      gt && je && Xi(je),
      ht && Ae && Xi(Ae),
      vt && (xe ? Xi(xe) : (we && Xi(we),
      Ce && Xi(Ce)))
    }
    function Ln() {
      if (!Zt) {
        if (et && (j.style.margin = "0px"),
          Nt)
          for (var t = "tns-transparent", e = Nt; e--; )
            I && zi(G[e], t),
              zi(G[Lt - e - 1], t);
        An(),
          Zt = !0
      }
    }
    function Bn() {
      if (!Jt) {
        if (Mt.disabled = !0,
          V.className = V.className.replace(Xt.substring(1), ""),
          Vi(V, ["style"]),
          ft)
          for (var t = Nt; t--; )
            I && Qi(G[t]),
              Qi(G[Lt - t - 1]);
        if (F && I || Vi(j, ["style"]),
          !I)
          for (var e = It, n = It + Q; e < n; e++) {
            var i = G[e];
            Vi(i, ["style"]),
              Wi(i, P),
              Wi(i, W)
          }
        An(),
          Jt = !0
      }
    }
    function Sn() {
      var t = Hn();
      B.innerHTML !== t && (B.innerHTML = t)
    }
    function Hn() {
      var t = On()
        , e = t[0] + 1
        , n = t[1] + 1;
      return e === n ? e + "" : e + " to " + n
    }
    function On(t) {
      null == t && (t = Zn());
      var n, i, a, r = It;
      if (at || et ? ($ || tt) && (i = -(parseFloat(t) + et),
        a = i + it + 2 * et) : $ && (i = N[It],
        a = i + it),
        $)
        N.forEach(function(t, e) {
          e < Lt && ((at || et) && t <= i + .5 && (r = e),
          .5 <= a - t && (n = e))
        });
      else {
        if (tt) {
          var e = tt + nt;
          at || et ? (r = Math.floor(i / e),
            n = Math.ceil(a / e - 1)) : n = r + Math.ceil(it / e) - 1
        } else if (at || et) {
          var o = rt - 1;
          if (at ? (r -= o / 2,
            n = It + o / 2) : n = It + o,
            et) {
            var u = et * rt / it;
            r -= u,
              n += u
          }
          r = Math.floor(r),
            n = Math.ceil(n)
        } else
          n = r + rt - 1;
        r = Math.max(r, 0),
          n = Math.min(n, Lt - 1)
      }
      return [r, n]
    }
    function Dn() {
      if (Tt && !Kt) {
        var t = On();
        t.push(Et),
          In.apply(null, t).forEach(function(t) {
            if (!Pi(t, pe)) {
              var e = {};
              e[s] = function(t) {
                t.stopPropagation()
              }
                ,
                Ui(t, e),
                Ui(t, he),
                t.src = Fi(t, "data-src");
              var n = Fi(t, "data-srcset");
              n && (t.srcset = n),
                zi(t, "loading")
            }
          })
      }
    }
    function kn(t) {
      zi(t, "loaded"),
        Rn(t)
    }
    function Rn(t) {
      zi(t, pe),
        Wi(t, "loading"),
        _i(t, he)
    }
    function In(t, e, n) {
      var i = [];
      for (n || (n = "img"); t <= e; )
        Ii(G[t].querySelectorAll(n), function(t) {
          i.push(t)
        }),
          t++;
      return i
    }
    function Pn() {
      var t = In.apply(null, On());
      Ai(function() {
        zn(t, Fn)
      })
    }
    function zn(n, t) {
      return L ? t() : (n.forEach(function(t, e) {
        !Tt && t.complete && Rn(t),
        Pi(t, pe) && n.splice(e, 1)
      }),
        n.length ? void Ai(function() {
          zn(n, t)
        }) : t())
    }
    function Wn() {
      Dn(),
        Vn(),
        Sn(),
        Kn(),
        function() {
          if (ht && (He = 0 <= Se ? Se : an(),
            Se = -1,
          He !== Oe)) {
            var t = Ee[Oe]
              , e = Ee[He];
            ji(t, {
              tabindex: "-1",
              "aria-label": ke + (Oe + 1)
            }),
              Wi(t, De),
              ji(e, {
                "aria-label": ke + (He + 1) + Re
              }),
              Vi(e, "tabindex"),
              zi(e, De),
              Oe = He
          }
        }()
    }
    function qn(t, e) {
      for (var n = [], i = t, a = Math.min(t + e, Lt); i < a; i++)
        n.push(G[i].offsetHeight);
      return Math.max.apply(null, n)
    }
    function Fn() {
      var t = dt ? qn(It, rt) : qn(Nt, Q)
        , e = M || j;
      e.style.height !== t && (e.style.height = t + "px")
    }
    function jn() {
      N = [0];
      var n = F ? "left" : "top"
        , i = F ? "right" : "bottom"
        , a = G[0].getBoundingClientRect()[n];
      Ii(G, function(t, e) {
        e && N.push(t.getBoundingClientRect()[n] - a),
        e === Lt - 1 && N.push(t.getBoundingClientRect()[i] - a)
      })
    }
    function Vn() {
      var t = On()
        , n = t[0]
        , i = t[1];
      Ii(G, function(t, e) {
        n <= e && e <= i ? qi(t, "aria-hidden") && (Vi(t, ["aria-hidden", "tabindex"]),
          zi(t, de)) : qi(t, "aria-hidden") || (ji(t, {
          "aria-hidden": "true",
          tabindex: "-1"
        }),
          Wi(t, de))
      })
    }
    function Gn(t) {
      return t.nodeName.toLowerCase()
    }
    function Qn(t) {
      return "button" === Gn(t)
    }
    function Xn(t) {
      return "true" === t.getAttribute("aria-disabled")
    }
    function Yn(t, e, n) {
      t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
    }
    function Kn() {
      if (vt && !ct && !ft) {
        var t = ye ? we.disabled : Xn(we)
          , e = ge ? Ce.disabled : Xn(Ce)
          , n = It <= zt
          , i = !ct && Wt <= It;
        n && !t && Yn(ye, we, !0),
        !n && t && Yn(ye, we, !1),
        i && !e && Yn(ge, Ce, !0),
        !i && e && Yn(ge, Ce, !1)
      }
    }
    function Jn(t, e) {
      x && (t.style[x] = e)
    }
    function Un(t) {
      return null == t && (t = It),
        $ ? (it - (et ? nt : 0) - (N[t + 1] - N[t] - nt)) / 2 : tt ? (it - tt) / 2 : (rt - 1) / 2
    }
    function _n() {
      var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Lt : N[Lt]);
      return at && !ft && (t = tt ? -(tt + nt) * (Lt - 1) - Un() : Un(Lt - 1) - N[Lt - 1]),
      0 < t && (t = 0),
        t
    }
    function Zn(t) {
      var e;
      if (null == t && (t = It),
      F && !$)
        if (tt)
          e = -(tt + nt) * t,
          at && (e += Un());
        else {
          var n = r ? Lt : rt;
          at && (t -= Un()),
            e = 100 * -t / n
        }
      else
        e = -N[t],
        at && $ && (e += Un());
      return Bt && (e = Math.max(e, St)),
        e += !F || $ || tt ? "px" : "%"
    }
    function $n(t) {
      Jn(V, "0s"),
        ti(t)
    }
    function ti(t) {
      null == t && (t = Zn()),
        V.style[Ot] = Dt + t + kt
    }
    function ei(t, e, n, i) {
      var a = t + rt;
      ft || (a = Math.min(a, Lt));
      for (var r = t; r < a; r++) {
        var o = G[r];
        i || (o.style.left = 100 * (r - It) / rt + "%"),
        C && u && (o.style[u] = o.style[l] = C * (r - t) / 1e3 + "s"),
          Wi(o, e),
          zi(o, n),
        i && At.push(o)
      }
    }
    function ni(t, e) {
      Ht && _e(),
      (It !== Pt || e) && (Qt.emit("indexChanged", Ei()),
        Qt.emit("transitionStart", Ei()),
      dt && Pn(),
      Pe && t && 0 <= ["click", "keydown"].indexOf(t.type) && fi(),
        Vt = !0,
        Ze())
    }
    function ii(t) {
      return t.toLowerCase().replace(/-/g, "")
    }
    function ai(t) {
      if (I || Vt) {
        if (Qt.emit("transitionEnd", Ei(t)),
        !I && 0 < At.length)
          for (var e = 0; e < At.length; e++) {
            var n = At[e];
            n.style.left = "",
            l && u && (n.style[l] = "",
              n.style[u] = ""),
              Wi(n, z),
              zi(n, W)
          }
        if (!t || !I && t.target.parentNode === V || t.target === V && ii(t.propertyName) === ii(Ot)) {
          if (!Ht) {
            var i = It;
            _e(),
            It !== i && (Qt.emit("indexChanged", Ei()),
              $n())
          }
          "inner" === R && Qt.emit("innerLoaded", Ei()),
            Vt = !1,
            Pt = It
        }
      }
    }
    function ri(t, e) {
      if (!_t)
        if ("prev" === t)
          oi(e, -1);
        else if ("next" === t)
          oi(e, 1);
        else {
          if (Vt) {
            if (qt)
              return;
            ai()
          }
          var n = nn()
            , i = 0;
          if ("first" === t ? i = -n : "last" === t ? i = I ? Q - rt - n : Q - 1 - n : ("number" != typeof t && (t = parseInt(t)),
          isNaN(t) || (e || (t = Math.max(0, Math.min(Q - 1, t))),
            i = t - n)),
          !I && i && Math.abs(i) < rt) {
            var a = 0 < i ? 1 : -1;
            i += zt <= It + i - Q ? Q * a : 2 * Q * a * -1
          }
          It += i,
          I && ft && (It < zt && (It += Q),
          Wt < It && (It -= Q)),
          nn(It) !== nn(Pt) && ni(e)
        }
    }
    function oi(t, e) {
      if (Vt) {
        if (qt)
          return;
        ai()
      }
      var n;
      if (!e) {
        for (var i = hi(t = pi(t)); i !== xe && [we, Ce].indexOf(i) < 0; )
          i = i.parentNode;
        var a = [we, Ce].indexOf(i);
        0 <= a && (n = !0,
          e = 0 === a ? -1 : 1)
      }
      if (ct) {
        if (It === zt && -1 === e)
          return void ri("last", t);
        if (It === Wt && 1 === e)
          return void ri("first", t)
      }
      e && (It += ot * e,
      $ && (It = Math.floor(It)),
        ni(n || t && "keydown" === t.type ? t : null))
    }
    function ui() {
      Ie = setInterval(function() {
        oi(null, Fe)
      }, xt),
        Pe = !0
    }
    function li() {
      clearInterval(Ie),
        Pe = !1
    }
    function si(t, e) {
      ji(je, {
        "data-action": t
      }),
        je.innerHTML = Ge[0] + t + Ge[1] + e
    }
    function ci() {
      ui(),
      je && si("stop", bt[1])
    }
    function fi() {
      li(),
      je && si("start", bt[0])
    }
    function di() {
      Pe ? (fi(),
        We = !0) : (ci(),
        We = !1)
    }
    function vi(t) {
      t.focus()
    }
    function pi(t) {
      return mi(t = t || m.event) ? t.changedTouches[0] : t
    }
    function hi(t) {
      return t.target || m.event.srcElement
    }
    function mi(t) {
      return 0 <= t.type.indexOf("touch")
    }
    function yi(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
    function gi() {
      return a = Ke.y - Ye.y,
        r = Ke.x - Ye.x,
        t = Math.atan2(a, r) * (180 / Math.PI),
        e = Ft,
        n = !1,
        i = Math.abs(90 - Math.abs(t)),
        90 - e <= i ? n = "horizontal" : i <= e && (n = "vertical"),
      n === H.axis;
      var t, e, n, i, a, r
    }
    function xi(t) {
      if (Vt) {
        if (qt)
          return;
        ai()
      }
      gt && Pe && li(),
        Je = !0,
      Xe && (Ni(Xe),
        Xe = null);
      var e = pi(t);
      Qt.emit(mi(t) ? "touchStart" : "dragStart", Ei(t)),
      !mi(t) && 0 <= ["img", "a"].indexOf(Gn(hi(t))) && yi(t),
        Ke.x = Ye.x = e.clientX,
        Ke.y = Ye.y = e.clientY,
      I && (Qe = parseFloat(V.style[Ot].replace(Dt, "")),
        Jn(V, "0s"))
    }
    function bi(t) {
      if (Je) {
        var e = pi(t);
        Ke.x = e.clientX,
          Ke.y = e.clientY,
          I ? Xe || (Xe = Ai(function() {
            !function t(e) {
              if (!jt)
                return void (Je = !1);
              Ni(Xe);
              Je && (Xe = Ai(function() {
                t(e)
              }));
              "?" === jt && (jt = gi());
              if (jt) {
                !me && mi(e) && (me = !0);
                try {
                  e.type && Qt.emit(mi(e) ? "touchMove" : "dragMove", Ei(e))
                } catch (t) {}
                var n = Qe
                  , i = Ue(Ke, Ye);
                if (!F || tt || $)
                  n += i,
                    n += "px";
                else {
                  var a = r ? i * rt * 100 / ((it + nt) * Lt) : 100 * i / (it + nt);
                  n += a,
                    n += "%"
                }
                V.style[Ot] = Dt + n + kt
              }
            }(t)
          })) : ("?" === jt && (jt = gi()),
          jt && (me = !0)),
        ("boolean" != typeof t.cancelable || t.cancelable) && me && t.preventDefault()
      }
    }
    function wi(i) {
      if (Je) {
        Xe && (Ni(Xe),
          Xe = null),
        I && Jn(V, ""),
          Je = !1;
        var t = pi(i);
        Ke.x = t.clientX,
          Ke.y = t.clientY;
        var a = Ue(Ke, Ye);
        if (Math.abs(a)) {
          if (!mi(i)) {
            var n = hi(i);
            Ui(n, {
              click: function t(e) {
                yi(e),
                  _i(n, {
                    click: t
                  })
              }
            })
          }
          I ? Xe = Ai(function() {
            if (F && !$) {
              var t = -a * rt / (it + nt);
              t = 0 < a ? Math.floor(t) : Math.ceil(t),
                It += t
            } else {
              var e = -(Qe + a);
              if (e <= 0)
                It = zt;
              else if (e >= N[Lt - 1])
                It = Wt;
              else
                for (var n = 0; n < Lt && e >= N[n]; )
                  e > N[It = n] && a < 0 && (It += 1),
                    n++
            }
            ni(i, a),
              Qt.emit(mi(i) ? "touchEnd" : "dragEnd", Ei(i))
          }) : jt && oi(i, 0 < a ? -1 : 1)
        }
      }
      "auto" === H.preventScrollOnTouch && (me = !1),
      Ft && (jt = "?"),
      gt && !Pe && ui()
    }
    function Ci() {
      (M || j).style.height = N[It + rt] - N[It] + "px"
    }
    function Mi() {
      var t = tt ? (tt + nt) * Q / it : Q / rt;
      return Math.min(Math.ceil(t), Q)
    }
    function Ti() {
      if (ht && !le && Le !== Be) {
        var t = Be
          , e = Le
          , n = Xi;
        for (Le < Be && (t = Le,
          e = Be,
          n = Qi); t < e; )
          n(Ee[t]),
            t++;
        Be = Le
      }
    }
    function Ei(t) {
      return {
        container: V,
        slideItems: G,
        navContainer: Ae,
        navItems: Ee,
        controlsContainer: xe,
        hasControls: oe,
        prevButton: we,
        nextButton: Ce,
        items: rt,
        slideBy: ot,
        cloneCount: Nt,
        slideCount: Q,
        slideCountNew: Lt,
        index: It,
        indexCached: Pt,
        displayIndex: tn(),
        navCurrentIndex: He,
        navCurrentIndexCached: Oe,
        pages: Le,
        pagesCached: Be,
        sheet: Mt,
        isOn: Y,
        event: t || {}
      }
    }
    f && console.warn("No slides found in", H.container)
  };
  return $i
}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
/*! lightgallery - v1.6.6 - 2017-12-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
	  // AMD. Register as an anonymous module unless amdModuleId is set
	  define(['jquery'], function (a0) {
		return (factory(a0));
	  });
	} else if (typeof exports === 'object') {
	  // Node. Does not work with strict CommonJS, but
	  // only CommonJS-like environments that support module.exports,
	  // like Node.
	  module.exports = factory(require('jquery'));
	} else {
	  factory(root["jQuery"]);
	}
  }(this, function ($) {

  (function() {
	  'use strict';

	  var defaults = {

		  mode: 'lg-slide',

		  // Ex : 'ease'
		  cssEasing: 'ease',

		  //'for jquery animation'
		  easing: 'linear',
		  speed: 600,
		  height: '100%',
		  width: '100%',
		  addClass: '',
		  startClass: 'lg-start-zoom',
		  backdropDuration: 150,
		  hideBarsDelay: 6000,

		  useLeft: false,

		  closable: true,
		  loop: true,
		  escKey: true,
		  keyPress: true,
		  controls: true,
		  slideEndAnimatoin: true,
		  hideControlOnEnd: false,
		  mousewheel: true,

		  getCaptionFromTitleOrAlt: false,

		  // .lg-item || '.lg-sub-html'
		  appendSubHtmlTo: '.lg-sub-html',

		  subHtmlSelectorRelative: false,

		  /**
		   * @desc number of preload slides
		   * will exicute only after the current slide is fully loaded.
		   *
		   * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
		   * slide will be loaded in the background after the 4th slide is fully loaded..
		   * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
		   *
		   */
		  preload: 1,
		  showAfterLoad: true,
		  selector: '',
		  selectWithin: '',
		  nextHtml: '',
		  prevHtml: '',

		  // 0, 1
		  index: false,

		  iframeMaxWidth: '100%',

		  download: true,
		  counter: true,
		  appendCounterTo: '.lg-toolbar',

		  swipeThreshold: 50,
		  enableSwipe: true,
		  enableDrag: true,

		  dynamic: false,
		  dynamicEl: [],
		  galleryId: 1
	  };

	  function Plugin(element, options) {

		  // Current lightGallery element
		  this.el = element;

		  // Current jquery element
		  this.$el = $(element);

		  // lightGallery settings
		  this.s = $.extend({}, defaults, options);

		  // When using dynamic mode, ensure dynamicEl is an array
		  if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
			  throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
		  }

		  // lightGallery modules
		  this.modules = {};

		  // false when lightgallery complete first slide;
		  this.lGalleryOn = false;

		  this.lgBusy = false;

		  // Timeout function for hiding controls;
		  this.hideBartimeout = false;

		  // To determine browser supports for touch events;
		  this.isTouch = ('ontouchstart' in document.documentElement);

		  // Disable hideControlOnEnd if sildeEndAnimation is true
		  if (this.s.slideEndAnimatoin) {
			  this.s.hideControlOnEnd = false;
		  }

		  // Gallery items
		  if (this.s.dynamic) {
			  this.$items = this.s.dynamicEl;
		  } else {
			  if (this.s.selector === 'this') {
				  this.$items = this.$el;
			  } else if (this.s.selector !== '') {
				  if (this.s.selectWithin) {
					  this.$items = $(this.s.selectWithin).find(this.s.selector);
				  } else {
					  this.$items = this.$el.find($(this.s.selector));
				  }
			  } else {
				  this.$items = this.$el.children();
			  }
		  }

		  /* Begin NGS Custom (remove cloned items from owl gallery) */
		  this.$removeItems = Array();
		  var removeItemsCount = 0;

		 if (this.$items.length > 0) {

			for (var i = 0; i < this.$items.length; i++) {

				var galleryElement = this.$items[i];

				if ($(galleryElement).parents('.owl-item.cloned').length > 0) {

					this.$removeItems[removeItemsCount] = galleryElement;
					removeItemsCount++;

				}

			}

		 }

		 if (this.$removeItems.length > 0) {

			for (var i = 0; i < this.$removeItems.length; i++) {
				this.$items.splice($.inArray(this.$removeItems[i], this.$items), 1);
			}

		 }
		 /* End NGS Custom */

		  // .lg-item
		  this.$slide = '';

		  // .lg-outer
		  this.$outer = '';

		  this.init();

		  return this;
	  }

	  Plugin.prototype.init = function() {

		  var _this = this;

		  // s.preload should not be more than $item.length
		  if (_this.s.preload > _this.$items.length) {
			  _this.s.preload = _this.$items.length;
		  }

		  // if dynamic option is enabled execute immediately
		  var _hash = window.location.hash;
		  if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

			  _this.index = parseInt(_hash.split('&slide=')[1], 10);

			  $('body').addClass('lg-from-hash');
			  if (!$('body').hasClass('lg-on')) {
				  setTimeout(function() {
					  _this.build(_this.index);
				  });

				  $('body').addClass('lg-on');
			  }
		  }

		  if (_this.s.dynamic) {

			  _this.$el.trigger('onBeforeOpen.lg');

			  _this.index = _this.s.index || 0;

			  // prevent accidental double execution
			  if (!$('body').hasClass('lg-on')) {
				  setTimeout(function() {
					  _this.build(_this.index);
					  $('body').addClass('lg-on');
				  });
			  }
		  } else {

			  // Using different namespace for click because click event should not unbind if selector is same object('this')
			  _this.$items.on('click.lgcustom', function(event) {

				  // For IE8
				  try {
					  event.preventDefault();
					  event.preventDefault();
				  } catch (er) {
					  event.returnValue = false;
				  }

				  _this.$el.trigger('onBeforeOpen.lg');

				  _this.index = _this.s.index || _this.$items.index(this);

				  // prevent accidental double execution
				  if (!$('body').hasClass('lg-on')) {
					  _this.build(_this.index);
					  $('body').addClass('lg-on');
				  }
			  });

			  /* Begin NGS Custom (remove cloned items from owl gallery) */

			  if (_this.$removeItems.length) {

				$.each(_this.$removeItems, function() {

					$(this).on('click.lgcustom', function() {

						var oThis = this;

						$(_this.$items).each(function() {

							var bFound = false;

							if ($(oThis).attr('data-html') != undefined && $(oThis).attr('data-html') == $(this).attr('data-html')) {
								bFound = true;
							} else if ($(oThis).attr('data-src') != undefined && $(oThis).attr('data-src') == $(this).attr('data-src')) {
								bFound = true;
							}

							if (bFound) {
								$(this).trigger('click');
								return false;
							}

						});

					});

				});

			  }

			  /* End NGS Custom */

		  }

	  };

	  Plugin.prototype.build = function(index) {

		  var _this = this;

		  _this.structure();

		  // module constructor
		  $.each($.fn.lightGallery.modules, function(key) {
			  _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
		  });

		  // initiate slide function
		  _this.slide(index, false, false, false);

		  if (_this.s.keyPress) {
			  _this.keyPress();
		  }

		  if (_this.$items.length > 1) {

			  _this.arrow();

			  setTimeout(function() {
				  _this.enableDrag();
				  _this.enableSwipe();
			  }, 50);

			  if (_this.s.mousewheel) {
				  _this.mousewheel();
			  }
		  } else {
			  _this.$slide.on('click.lg', function() {
				  _this.$el.trigger('onSlideClick.lg');
			  });
		  }

		  _this.counter();

		  _this.closeGallery();

		  _this.$el.trigger('onAfterOpen.lg');

		  // Hide controllers if mouse doesn't move for some period
		  _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

			  _this.$outer.removeClass('lg-hide-items');

			  clearTimeout(_this.hideBartimeout);

			  // Timeout will be cleared on each slide movement also
			  _this.hideBartimeout = setTimeout(function() {
				  _this.$outer.addClass('lg-hide-items');
			  }, _this.s.hideBarsDelay);

		  });

		  _this.$outer.trigger('mousemove.lg');

	  };

	  Plugin.prototype.structure = function() {
		  var list = '';
		  var controls = '';
		  var i = 0;
		  var subHtmlCont = '';
		  var template;
		  var _this = this;

		  $('body').append('<div class="lg-backdrop"></div>');
		  $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

		  // Create gallery items
		  for (i = 0; i < this.$items.length; i++) {
			  /* Begin NGS Custom */
			  list += '<div class="lg-item"><span class="picture-loading"></span></div>';
			  /* End NGS Custom */
			  /* Original
			   list += '<div class="lg-item"></div>';
			  */

		  }

		  // Create controlls
		  if (this.s.controls && this.$items.length > 1) {
			  controls = '<div class="lg-actions">' +
				  '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
				  '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
				  '</div>';
		  }

		  if (this.s.appendSubHtmlTo === '.lg-sub-html') {
			  subHtmlCont = '<div class="lg-sub-html"></div>';
		  }

		  template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
			  '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
			  '<div class="lg-inner">' + list + '</div>' +
			  '<div class="lg-toolbar lg-group">' +
			  /* Begin NGS Custom */
			  '<span class="lg-close lg-icon"><svg class="icon icon-cross" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#icon-cross" /></svg></span>' +
			  /* End NGS Custom */
			  /* Original
			  '<span class="lg-close lg-icon"></span>' +
			  */
			  '</div>' +
			  controls +
			  subHtmlCont +
			  '</div>' +
			  '</div>';

		  $('body').append(template);
		  this.$outer = $('.lg-outer');
		  this.$slide = this.$outer.find('.lg-item');

		  if (this.s.useLeft) {
			  this.$outer.addClass('lg-use-left');

			  // Set mode lg-slide if use left is true;
			  this.s.mode = 'lg-slide';
		  } else {
			  this.$outer.addClass('lg-use-css3');
		  }

		  // For fixed height gallery
		  _this.setTop();
		  $(window).on('resize.lg orientationchange.lg', function() {
			  setTimeout(function() {
				  _this.setTop();
			  }, 100);
		  });

		  // add class lg-current to remove initial transition
		  this.$slide.eq(this.index).addClass('lg-current');

		  // add Class for css support and transition mode
		  if (this.doCss()) {
			  this.$outer.addClass('lg-css3');
		  } else {
			  this.$outer.addClass('lg-css');

			  // Set speed 0 because no animation will happen if browser doesn't support css3
			  this.s.speed = 0;
		  }

		  this.$outer.addClass(this.s.mode);

		  if (this.s.enableDrag && this.$items.length > 1) {
			  this.$outer.addClass('lg-grab');
		  }

		  if (this.s.showAfterLoad) {
			  this.$outer.addClass('lg-show-after-load');
		  }

		  if (this.doCss()) {
			  var $inner = this.$outer.find('.lg-inner');
			  $inner.css('transition-timing-function', this.s.cssEasing);
			  $inner.css('transition-duration', this.s.speed + 'ms');
		  }

		  setTimeout(function() {
			  $('.lg-backdrop').addClass('in');
		  });

		  setTimeout(function() {
			  _this.$outer.addClass('lg-visible');
		  }, this.s.backdropDuration);

		  if (this.s.download) {
			  /* Begin NGS Custom */
			  this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"><svg class="icon icon-download" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#icon-download" /></svg></a>');
			  /* Begin NGS Custom */
			  /* Original
			  this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');*/
		  }

		  // Store the current scroll top value to scroll back after closing the gallery..
		  this.prevScrollTop = $(window).scrollTop();

	  };

	  // For fixed height gallery
	  Plugin.prototype.setTop = function() {
		  if (this.s.height !== '100%') {
			  var wH = $(window).height();
			  var top = (wH - parseInt(this.s.height, 10)) / 2;
			  var $lGallery = this.$outer.find('.lg');
			  if (wH >= parseInt(this.s.height, 10)) {
				  $lGallery.css('top', top + 'px');
			  } else {
				  $lGallery.css('top', '0px');
			  }
		  }
	  };

	  // Find css3 support
	  Plugin.prototype.doCss = function() {
		  // check for css animation support
		  var support = function() {
			  var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
			  var root = document.documentElement;
			  var i = 0;
			  for (i = 0; i < transition.length; i++) {
				  if (transition[i] in root.style) {
					  return true;
				  }
			  }
		  };

		  if (support()) {
			  return true;
		  }

		  return false;
	  };

	  /**
	   *  @desc Check the given src is video
	   *  @param {String} src
	   *  @return {Object} video type
	   *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
	   */
	  Plugin.prototype.isVideo = function(src, index) {

		  var html;
		  if (this.s.dynamic) {
			  html = this.s.dynamicEl[index].html;
		  } else {
			  html = this.$items.eq(index).attr('data-html');
		  }

		  if (!src) {
			  if(html) {
				  /* Begin NGS Custom */
				  if ($(html).find('video')[0] != undefined) {
					  return {
						  html5: true
					  };
				  } else {
					  return false;
				  }
				  /* End NGS Custom */
				  /* Original
				  return {
					  html5: true
				  };
				  */
			  } else {
				  console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
				  return false;
			  }
		  }

		  var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
		  var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
		  var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
		  var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

		  if (youtube) {
			  return {
				  youtube: youtube
			  };
		  } else if (vimeo) {
			  return {
				  vimeo: vimeo
			  };
		  } else if (dailymotion) {
			  return {
				  dailymotion: dailymotion
			  };
		  } else if (vk) {
			  return {
				  vk: vk
			  };
		  }
	  };

	  /**
	   *  @desc Create image counter
	   *  Ex: 1/10
	   */
	  Plugin.prototype.counter = function() {
		  if (this.s.counter) {
			  $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
		  }
	  };

	    // Initialize Video Configurations
		Plugin.prototype.initVideos = function () {

			this.$slide.eq(this.index).find('video').each($.proxy(function(i, video){
				if (typeof(video.play) == 'function') {
					if ($(video).attr('data-autoplay') == 'true') {
						if (video.readyState == 4) {
							video.play();
							this.checkVideoControls(video);
						} else {
							video.onloadeddata = $.proxy(function() {
								video.play();
								this.checkVideoControls(video);
							}, this);
						}
					}
				}
			}, this));

			this.$slide.eq(this.index).find('iframe[src*="youtube.com/"][src*="enablejsapi=1"], iframe[src*="youtu.be/"][src*="enablejsapi=1"]').each($.proxy(function(i, video){

				if (typeof(YT) == 'undefined') {
					var tag = document.createElement('script');
					tag.src = "https://www.youtube.com/iframe_api";
					var youtubeiframe = document.getElementsByTagName('script')[0];
					youtubeiframe.parentNode.insertBefore(tag, youtubeiframe);
				}

				if ($(video).data('youtubeplayer') == undefined) {

					var lYoutubeInterval = window.setInterval($.proxy(function(){

						if (typeof(YT) != 'undefined' && typeof(YT.Player) != 'undefined') {

							clearInterval(lYoutubeInterval);

							if ($(video).data('youtubeplayer-initialized') != undefined) return;
							$(video).data('youtubeplayer-initialized', true);

							var onPlayerReady = function(){
								if ($(video).attr('src').indexOf('&mute=1') > -1) $(video).data('youtubeplayer').mute();
								if ($(video).attr('data-autoplay') == 'true') $(video).data('youtubeplayer').playVideo();
							};

							$(video).data('youtubeplayer', new YT.Player(video, {
								events: {
									'onReady': onPlayerReady
								}
							}));

						}

					}, this), 1000);

				} else {
					if ($(video).attr('data-autoplay') == 'true') {
						$(video).data('youtubeplayer').playVideo();
					}
				}

			}, this));

		};

		Plugin.prototype.checkVideoControls = function (video) {

			if ($(video).closest('div').find('div.video-controls').length) {
				if (video.paused) {
					$(video).closest('div').find('div.video-controls').addClass('paused');
					$(video).closest('div').find('div.video-controls').removeClass('playing');
				} else {
					$(video).closest('div').find('div.video-controls').addClass('playing');
					$(video).closest('div').find('div.video-controls').removeClass('paused');
				}
			}

		};

	  /**
	   *  @desc add sub-html into the slide
	   *  @param {Number} index - index of the slide
	   */
	  Plugin.prototype.addHtml = function(index) {
		  var subHtml = null;
		  var subHtmlUrl;
		  var $currentEle;
		  if (this.s.dynamic) {
			  if (this.s.dynamicEl[index].subHtmlUrl) {
				  subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
			  } else {
				  subHtml = this.s.dynamicEl[index].subHtml;
			  }
		  } else {
			  $currentEle = this.$items.eq(index);
			  if ($currentEle.attr('data-sub-html-url')) {
				  subHtmlUrl = $currentEle.attr('data-sub-html-url');
			  } else {
				  subHtml = $currentEle.attr('data-sub-html');
				  if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
					  subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
				  }
			  }
		  }

		  if (!subHtmlUrl) {
			  if (typeof subHtml !== 'undefined' && subHtml !== null) {

				  // get first letter of subhtml
				  // if first letter starts with . or # get the html form the jQuery object
				  var fL = subHtml.substring(0, 1);
				  if (fL === '.' || fL === '#') {
					  if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
						  subHtml = $currentEle.find(subHtml).html();
					  } else {
						  subHtml = $(subHtml).html();
					  }
				  }
			  } else {
				  subHtml = '';
			  }
		  }

		  if (this.s.appendSubHtmlTo === '.lg-sub-html') {

			  if (subHtmlUrl) {
				  this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
			  } else {
				  this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
			  }

		  } else {

			  if (subHtmlUrl) {
				  this.$slide.eq(index).load(subHtmlUrl);
			  } else {
				  this.$slide.eq(index).append(subHtml);
			  }
		  }

		  // Add lg-empty-html class if title doesn't exist
		  if (typeof subHtml !== 'undefined' && subHtml !== null) {
			  if (subHtml === '') {
				  this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
			  } else {
				  this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
			  }
		  }

		  this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
	  };

	  /**
	   *  @desc Preload slides
	   *  @param {Number} index - index of the slide
	   */
	  Plugin.prototype.preload = function(index) {
		  var i = 1;
		  var j = 1;
		  for (i = 1; i <= this.s.preload; i++) {
			  if (i >= this.$items.length - index) {
				  break;
			  }

			  this.loadContent(index + i, false, 0);
		  }

		  for (j = 1; j <= this.s.preload; j++) {
			  if (index - j < 0) {
				  break;
			  }

			  this.loadContent(index - j, false, 0);
		  }
	  };

	  /**
	   *  @desc Load slide content into slide.
	   *  @param {Number} index - index of the slide.
	   *  @param {Boolean} rec - if true call loadcontent() function again.
	   *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
	   */
	  Plugin.prototype.loadContent = function(index, rec, delay) {

		  var _this = this;
		  var _hasPoster = false;
		  var _$img;
		  var _src;
		  var _poster;
		  var _srcset;
		  var _sizes;
		  var _html;
		  var getResponsiveSrc = function(srcItms) {
			  var rsWidth = [];
			  var rsSrc = [];
			  for (var i = 0; i < srcItms.length; i++) {
				  var __src = srcItms[i].split(' ');

				  // Manage empty space
				  if (__src[0] === '') {
					  __src.splice(0, 1);
				  }

				  rsSrc.push(__src[0]);
				  rsWidth.push(__src[1]);
			  }

			  var wWidth = $(window).width();
			  for (var j = 0; j < rsWidth.length; j++) {
				  if (parseInt(rsWidth[j], 10) > wWidth) {
					  _src = rsSrc[j];
					  break;
				  }
			  }
		  };

		  if (_this.s.dynamic) {

			  if (_this.s.dynamicEl[index].poster) {
				  _hasPoster = true;
				  _poster = _this.s.dynamicEl[index].poster;
			  }

			  _html = _this.s.dynamicEl[index].html;
			  _src = _this.s.dynamicEl[index].src;

			  if (_this.s.dynamicEl[index].responsive) {
				  var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
				  getResponsiveSrc(srcDyItms);
			  }

			  _srcset = _this.s.dynamicEl[index].srcset;
			  _sizes = _this.s.dynamicEl[index].sizes;

		  } else {

			  if (_this.$items.eq(index).attr('data-poster')) {
				  _hasPoster = true;
				  _poster = _this.$items.eq(index).attr('data-poster');
			  }

			  _html = _this.$items.eq(index).attr('data-html');
			  _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

			  if (_this.$items.eq(index).attr('data-responsive')) {
				  var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
				  getResponsiveSrc(srcItms);
			  }

			  _srcset = _this.$items.eq(index).attr('data-srcset');
			  _sizes = _this.$items.eq(index).attr('data-sizes');

		  }

		  //if (_src || _srcset || _sizes || _poster) {

		  var iframe = false;
		  if (_this.s.dynamic) {
			  if (_this.s.dynamicEl[index].iframe) {
				  iframe = true;
			  }
		  } else {
			  if (_this.$items.eq(index).attr('data-iframe') === 'true') {
				  iframe = true;
			  }
		  }

		  /* Begin NGS Custom */
		  var ajax = false;
		  var ajaxparams = {};
		  if (_this.s.dynamic) {
			  if (_this.s.dynamicEl[index].ajax) {
				  ajax = true;
			  }
			  if (_this.s.dynamicEl[index].ajaxparams) {
				  ajaxparams = _this.s.dynamicEl[index].ajaxparams;
			  }
		  } else {
			  if (_this.$items.eq(index).attr('data-lightgallery-ajax') === 'true') {
				  ajax = true;
			  }
			  if (_this.$items.eq(index).attr('data-lightgallery-ajaxparams')) {
				  ajaxparams = jQuery.parseJSON(_this.$items.eq(index).attr('data-lightgallery-ajaxparams'));
			  }
		  }

		  if (ajax) {

			  var ua = window.navigator.userAgent;
			  var msie = ua.indexOf("MSIE ");

			  $.ajax(msie > 0 ? encodeURI(_src) : _src, {

				  data: ajaxparams,
				  type: "POST",
				  success: function(data){

					  _this.$slide.eq(index).prepend('<div class="lg-img-wrap lg-ajax-wrap"><div class="lg-object lg-ajax">' + data + '</div></div>');

					  // For first time add some delay for displaying the start animation.
					  var _speed = 0;

					  // Do not change the delay value because it is required for zoom plugin.
					  // If gallery opened from direct url (hash) speed value should be 0
					  if (delay && !$('body').hasClass('lg-from-hash')) {
						  _speed = delay;
					  }

					  setTimeout(function() {

						  _this.$slide.eq(index).addClass('lg-complete');
						  _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);

					  }, _speed);


					 var bCarousel = false;

					  setTimeout(function() {

						  $('[data-carousel="true"]', $('div.lg-ajax')).each(function(lIndex, oElement) {
							  initCarousel(this);
							  $('.lg-outer').addClass('lg-loadingcomplete');
							  bCarousel = true;
						  });

						  if (!bCarousel) {

							$('.lg-outer').addClass('lg-loadingcomplete');

						  }

						  /*$('video[data-resize="true"]', $('div.lg-video')).convertVideo();*/
						  _this.initVideos();

					  }, _speed);

				  }

			  });

		  }
		  /* End NGS Custom */

		  var _isVideo = _this.isVideo(_src, index);

		  if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
			  if (iframe) {
				  _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
			  } else if (_hasPoster) {
				  var videoClass = '';
				  if (_isVideo && _isVideo.youtube) {
					  videoClass = 'lg-has-youtube';
				  } else if (_isVideo && _isVideo.vimeo) {
					  videoClass = 'lg-has-vimeo';
				  } else {
					  videoClass = 'lg-has-html5';
				  }
				/* Begin NGS Custom */
				_this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"><svg class="icon icon-play" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#icon-play" /></svg></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
				/* End NGS Custom */
				/* Original
				_this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
  				*/
			  } else if (_isVideo) {
				  _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
				  _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
			  } else {
				  /* Begin NGS Custom */
				  if (!ajax) {
					  if ($(_html)[0] != undefined) {
						  _this.$slide.eq(index).prepend('<div class="lg-img-wrap lg-ajax-wrap"><div class="lg-object lg-ajax">' + $(_html).html() + '</div></div>');
					  } else {
				  /* End NGS Custom */
					   _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
				  /* Begin NGS Custom */
					  }
			  	  }
				   /* End NGS Custom */
			  }

			  _this.$el.trigger('onAferAppendSlide.lg', [index]);

			  _$img = _this.$slide.eq(index).find('.lg-object');
			  if (_sizes) {
				  _$img.attr('sizes', _sizes);
			  }

			  if (_srcset) {
				  _$img.attr('srcset', _srcset);
				  try {
					  picturefill({
						  elements: [_$img[0]]
					  });
				  } catch (e) {
					  console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
				  }
			  }

			  if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
				  _this.addHtml(index);
			  }

			  _this.$slide.eq(index).addClass('lg-loaded');
		  }

		  _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

			  // For first time add some delay for displaying the start animation.
			  var _speed = 0;

			  // Do not change the delay value because it is required for zoom plugin.
			  // If gallery opened from direct url (hash) speed value should be 0
			  if (delay && !$('body').hasClass('lg-from-hash')) {
				  _speed = delay;
			  }

			  setTimeout(function() {
				  _this.$slide.eq(index).addClass('lg-complete');
				  _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
			  }, _speed);

			  /* Begin NGS Custom */
			  if ($(_html)[0] != undefined) {
				setTimeout(function() {
					$('[data-lightgallery-carousel="true"]', $('div.lg-ajax')).each(function(lIndex, oElement) {
						initCarousel(this);
					});
					/*$('video[data-resize="true"]', $('div.lg-video')).convertVideo();*/
					_this.initVideos();
				}, _speed + 300);
			  }
			  /* End NGS Custom */

		  });

		  /* Begin NGS Custom */
		  if ($(_html)[0] != undefined) {
			  _this.$slide.eq(index).find('.lg-object').trigger('load.lg');
		  }
		  /* End NGS Custom */

		  // @todo check load state for html5 videos
		  if (_isVideo && _isVideo.html5 && !_hasPoster) {
			  _this.$slide.eq(index).addClass('lg-complete');
			  /* Begin NGS Custom */
			  /*$('video[data-resize="true"]', $('div.lg-video')).convertVideo();*/
			  _this.initVideos();
			   /* End NGS Custom */
		  }

		  if (rec === true) {
			  if (!_this.$slide.eq(index).hasClass('lg-complete')) {
				  _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
					  _this.preload(index);
				  });
			  } else {
				  _this.preload(index);
			  }
		  }

		  //}
	  };

	  /**
	  *   @desc slide function for lightgallery
		  ** Slide() gets call on start
		  ** ** Set lg.on true once slide() function gets called.
		  ** Call loadContent() on slide() function inside setTimeout
		  ** ** On first slide we do not want any animation like slide of fade
		  ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
		  ** ** Else loadContent() should wait for the transition to complete.
		  ** ** So set timeout s.speed + 50
	  <=> ** loadContent() will load slide content in to the particular slide
		  ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
		  ** ** preload will execute only when the previous slide is fully loaded (images iframe)
		  ** ** avoid simultaneous image load
	  <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
		  ** loadContent()  <====> Preload();

	  *   @param {Number} index - index of the slide
	  *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
	  *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
	  *   @param {String} direction - Direction of the slide(next/prev)
	  */
	  Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

		  var _prevIndex = this.$outer.find('.lg-current').index();
		  var _this = this;

		/* Begin NGS Custom */
		_this.$slide.eq(_prevIndex).find('iframe[src*="youtube.com/"][src*="enablejsapi=1"], iframe[src*="youtu.be/"][src*="enablejsapi=1"]').each(function(i, video) {
			var oVideo = $(video);

			if (oVideo.data('youtubeplayer') != undefined) {
				// stop video only when no autoplay, so the start button is visible. SeekTo 0 without autoplay is showing buffer
				if (oVideo.attr('data-autoplay') == 'true') {
					oVideo.data('youtubeplayer').pauseVideo();
					oVideo.data('youtubeplayer').seekTo(0, true);
				} else {
					oVideo.data('youtubeplayer').stopVideo();
				}
			}
		});
		/* End NGS Custom */

		  // Prevent if multiple call
		  // Required for hsh plugin
		  if (_this.lGalleryOn && (_prevIndex === index)) {
			  return;
		  }

		  var _length = this.$slide.length;
		  var _time = _this.lGalleryOn ? this.s.speed : 0;

		  if (!_this.lgBusy) {

			  if (this.s.download) {
				  var _src;
				  if (_this.s.dynamic) {
					  _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
				  } else {
					  _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

				  }

				  if (_src) {
					  $('#lg-download').attr('href', _src);
					  _this.$outer.removeClass('lg-hide-download');
				  } else {
					  _this.$outer.addClass('lg-hide-download');
				  }
			  }

			  this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

			  _this.lgBusy = true;

			  clearTimeout(_this.hideBartimeout);

			  // Add title if this.s.appendSubHtmlTo === lg-sub-html
			  if (this.s.appendSubHtmlTo === '.lg-sub-html') {

				  // wait for slide animation to complete
				  setTimeout(function() {
					  _this.addHtml(index);
				  }, _time);
			  }

			  this.arrowDisable(index);

			  if (!direction) {
				  if (index < _prevIndex) {
					  direction = 'prev';
				  } else if (index > _prevIndex) {
					  direction = 'next';
				  }
			  }

			  if (!fromTouch) {

				  // remove all transitions
				  _this.$outer.addClass('lg-no-trans');

				  this.$slide.removeClass('lg-prev-slide lg-next-slide');

				  if (direction === 'prev') {

					  //prevslide
					  this.$slide.eq(index).addClass('lg-prev-slide');
					  this.$slide.eq(_prevIndex).addClass('lg-next-slide');
				  } else {

					  // next slide
					  this.$slide.eq(index).addClass('lg-next-slide');
					  this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
				  }

				  // give 50 ms for browser to add/remove class
				  setTimeout(function() {
					  _this.$slide.removeClass('lg-current');

					  //_this.$slide.eq(_prevIndex).removeClass('lg-current');
					  _this.$slide.eq(index).addClass('lg-current');

					  // reset all transitions
					  _this.$outer.removeClass('lg-no-trans');
				  }, 50);
			  } else {

				  this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
				  var touchPrev;
				  var touchNext;
				  if (_length > 2) {
					  touchPrev = index - 1;
					  touchNext = index + 1;

					  if ((index === 0) && (_prevIndex === _length - 1)) {

						  // next slide
						  touchNext = 0;
						  touchPrev = _length - 1;
					  } else if ((index === _length - 1) && (_prevIndex === 0)) {

						  // prev slide
						  touchNext = 0;
						  touchPrev = _length - 1;
					  }

				  } else {
					  touchPrev = 0;
					  touchNext = 1;
				  }

				  if (direction === 'prev') {
					  _this.$slide.eq(touchNext).addClass('lg-next-slide');
				  } else {
					  _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
				  }

				  _this.$slide.eq(index).addClass('lg-current');
			  }

			  if (_this.lGalleryOn) {
				  setTimeout(function() {
					  _this.loadContent(index, true, 0);
				  }, this.s.speed + 50);

				  setTimeout(function() {
					  _this.lgBusy = false;
					  _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
				  }, this.s.speed);

			  } else {
				  _this.loadContent(index, true, _this.s.backdropDuration);

				  _this.lgBusy = false;
				  _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
			  }

			  _this.lGalleryOn = true;

			  if (this.s.counter) {
				  $('#lg-counter-current').text(index + 1);
			  }

		  }
		  _this.index = index;

	  };

	  /**
	   *  @desc Go to next slide
	   *  @param {Boolean} fromTouch - true if slide function called via touch event
	   */
	  Plugin.prototype.goToNextSlide = function(fromTouch) {
		  var _this = this;
		  var _loop = _this.s.loop;
		  if (fromTouch && _this.$slide.length < 3) {
			  _loop = false;
		  }

		  if (!_this.lgBusy) {
			  if ((_this.index + 1) < _this.$slide.length) {
				  _this.index++;
				  _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
				  _this.slide(_this.index, fromTouch, false, 'next');
			  } else {
				  if (_loop) {
					  _this.index = 0;
					  _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
					  _this.slide(_this.index, fromTouch, false, 'next');
				  } else if (_this.s.slideEndAnimatoin && !fromTouch) {
					  _this.$outer.addClass('lg-right-end');
					  setTimeout(function() {
						  _this.$outer.removeClass('lg-right-end');
					  }, 400);
				  }
			  }
		  }
	  };

	  /**
	   *  @desc Go to previous slide
	   *  @param {Boolean} fromTouch - true if slide function called via touch event
	   */
	  Plugin.prototype.goToPrevSlide = function(fromTouch) {
		  var _this = this;
		  var _loop = _this.s.loop;
		  if (fromTouch && _this.$slide.length < 3) {
			  _loop = false;
		  }

		  if (!_this.lgBusy) {
			  if (_this.index > 0) {
				  _this.index--;
				  _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
				  _this.slide(_this.index, fromTouch, false, 'prev');
			  } else {
				  if (_loop) {
					  _this.index = _this.$items.length - 1;
					  _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
					  _this.slide(_this.index, fromTouch, false, 'prev');
				  } else if (_this.s.slideEndAnimatoin && !fromTouch) {
					  _this.$outer.addClass('lg-left-end');
					  setTimeout(function() {
						  _this.$outer.removeClass('lg-left-end');
					  }, 400);
				  }
			  }
		  }
	  };

	  Plugin.prototype.keyPress = function() {
		  var _this = this;
		  if (this.$items.length > 1) {
			  $(window).on('keyup.lg', function(e) {
				  if (_this.$items.length > 1) {
					  if (e.keyCode === 37) {
						  e.preventDefault();
						  _this.goToPrevSlide();
					  }

					  if (e.keyCode === 39) {
						  e.preventDefault();
						  _this.goToNextSlide();
					  }
				  }
			  });
		  }

		  $(window).on('keydown.lg', function(e) {
			  if (_this.s.escKey === true && e.keyCode === 27) {
				  e.preventDefault();
				  if (!_this.$outer.hasClass('lg-thumb-open')) {
					  _this.destroy();
				  } else {
					  _this.$outer.removeClass('lg-thumb-open');
				  }
			  }
		  });
	  };

	  Plugin.prototype.arrow = function() {
		  var _this = this;
		  this.$outer.find('.lg-prev').on('click.lg', function() {
			  _this.goToPrevSlide();
		  });

		  this.$outer.find('.lg-next').on('click.lg', function() {
			  _this.goToNextSlide();
		  });
	  };

	  Plugin.prototype.arrowDisable = function(index) {

		  // Disable arrows if s.hideControlOnEnd is true
		  if (!this.s.loop && this.s.hideControlOnEnd) {
			  if ((index + 1) < this.$slide.length) {
				  this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
			  } else {
				  this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
			  }

			  if (index > 0) {
				  this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
			  } else {
				  this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
			  }
		  }
	  };

	  Plugin.prototype.setTranslate = function($el, xValue, yValue) {
		  // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
		  if (this.s.useLeft) {
			  $el.css('left', xValue);
		  } else {
			  $el.css({
				  transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
			  });
		  }
	  };

	  Plugin.prototype.touchMove = function(startCoords, endCoords) {

		  var distance = endCoords - startCoords;

		  if (Math.abs(distance) > 15) {
			  // reset opacity and transition duration
			  this.$outer.addClass('lg-dragging');

			  // move current slide
			  this.setTranslate(this.$slide.eq(this.index), distance, 0);

			  // move next and prev slide with current slide
			  this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
			  this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
		  }
	  };

	  Plugin.prototype.touchEnd = function(distance) {
		  var _this = this;

		  // keep slide animation for any mode while dragg/swipe
		  if (_this.s.mode !== 'lg-slide') {
			  _this.$outer.addClass('lg-slide');
		  }

		  this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

		  // set transition duration
		  setTimeout(function() {
			  _this.$outer.removeClass('lg-dragging');
			  if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
				  _this.goToNextSlide(true);
			  } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
				  _this.goToPrevSlide(true);
			  } else if (Math.abs(distance) < 5) {

				  // Trigger click if distance is less than 5 pix
				  _this.$el.trigger('onSlideClick.lg');
			  }

			  _this.$slide.removeAttr('style');
		  });

		  // remove slide class once drag/swipe is completed if mode is not slide
		  setTimeout(function() {
			  if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
				  _this.$outer.removeClass('lg-slide');
			  }
		  }, _this.s.speed + 100);

	  };

	  Plugin.prototype.enableSwipe = function() {
		  var _this = this;
		  var startCoords = 0;
		  var endCoords = 0;
		  var isMoved = false;

		  if (_this.s.enableSwipe && _this.doCss()) {

			  _this.$slide.on('touchstart.lg', function(e) {
				  if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
					  e.preventDefault();
					  _this.manageSwipeClass();
					  startCoords = e.originalEvent.targetTouches[0].pageX;
				  }
			  });

			  _this.$slide.on('touchmove.lg', function(e) {
				  if (!_this.$outer.hasClass('lg-zoomed')) {
					  e.preventDefault();
					  endCoords = e.originalEvent.targetTouches[0].pageX;
					  _this.touchMove(startCoords, endCoords);
					  isMoved = true;
				  }
			  });

			  _this.$slide.on('touchend.lg', function() {
				  if (!_this.$outer.hasClass('lg-zoomed')) {
					  if (isMoved) {
						  isMoved = false;
						  _this.touchEnd(endCoords - startCoords);
					  } else {
						  _this.$el.trigger('onSlideClick.lg');
					  }
				  }
			  });
		  }

	  };

	  Plugin.prototype.enableDrag = function() {
		  var _this = this;
		  var startCoords = 0;
		  var endCoords = 0;
		  var isDraging = false;
		  var isMoved = false;
		  if (_this.s.enableDrag && _this.doCss()) {
			  _this.$slide.on('mousedown.lg', function(e) {
				  // execute only on .lg-object
				  if (!_this.$outer.hasClass('lg-zoomed')) {
					  if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
						  e.preventDefault();

						  if (!_this.lgBusy) {
							  _this.manageSwipeClass();
							  startCoords = e.pageX;
							  isDraging = true;

							  // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
							  _this.$outer.scrollLeft += 1;
							  _this.$outer.scrollLeft -= 1;

							  // *

							  _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

							  _this.$el.trigger('onDragstart.lg');
						  }

					  }
				  }
			  });

			  $(window).on('mousemove.lg', function(e) {
				  if (isDraging) {
					  isMoved = true;
					  endCoords = e.pageX;
					  _this.touchMove(startCoords, endCoords);
					  _this.$el.trigger('onDragmove.lg');
				  }
			  });

			  $(window).on('mouseup.lg', function(e) {
				  if (isMoved) {
					  isMoved = false;
					  _this.touchEnd(endCoords - startCoords);
					  _this.$el.trigger('onDragend.lg');
				  } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
					  _this.$el.trigger('onSlideClick.lg');
				  }

				  // Prevent execution on click
				  if (isDraging) {
					  isDraging = false;
					  _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
				  }
			  });

		  }
	  };

	  Plugin.prototype.manageSwipeClass = function() {
		  var _touchNext = this.index + 1;
		  var _touchPrev = this.index - 1;
		  if (this.s.loop && this.$slide.length > 2) {
			  if (this.index === 0) {
				  _touchPrev = this.$slide.length - 1;
			  } else if (this.index === this.$slide.length - 1) {
				  _touchNext = 0;
			  }
		  }

		  this.$slide.removeClass('lg-next-slide lg-prev-slide');
		  if (_touchPrev > -1) {
			  this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
		  }

		  this.$slide.eq(_touchNext).addClass('lg-next-slide');
	  };

	  Plugin.prototype.mousewheel = function() {
		  var _this = this;
		  _this.$outer.on('mousewheel.lg', function(e) {

			  if (!e.deltaY) {
				  return;
			  }

			  if (e.deltaY > 0) {
				  _this.goToPrevSlide();
			  } else {
				  _this.goToNextSlide();
			  }

			  e.preventDefault();
		  });

	  };

	  Plugin.prototype.closeGallery = function() {

		  var _this = this;
		  var mousedown = false;
		  this.$outer.find('.lg-close').on('click.lg', function() {
			  _this.destroy();
		  });

		  if (_this.s.closable) {

			  // If you drag the slide and release outside gallery gets close on chrome
			  // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
			  _this.$outer.on('mousedown.lg', function(e) {

				  if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
					  mousedown = true;
				  } else {
					  mousedown = false;
				  }

			  });

			  _this.$outer.on('mouseup.lg', function(e) {

				  if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
					  if (!_this.$outer.hasClass('lg-dragging')) {
						  _this.destroy();
					  }
				  }

			  });

		  }

	  };

	  Plugin.prototype.destroy = function(d) {

		  var _this = this;

		  if (!d) {
			  _this.$el.trigger('onBeforeClose.lg');
			  $(window).scrollTop(_this.prevScrollTop);
		  }


		  /**
		   * if d is false or undefined destroy will only close the gallery
		   * plugins instance remains with the element
		   *
		   * if d is true destroy will completely remove the plugin
		   */

		  if (d) {
			  if (!_this.s.dynamic) {
				  // only when not using dynamic mode is $items a jquery collection
				  this.$items.off('click.lg click.lgcustom');
			  }

			  $.removeData(_this.el, 'lightGallery');
		  }

		  // Unbind all events added by lightGallery
		  this.$el.off('.lg.tm');

		  // Distroy all lightGallery modules
		  $.each($.fn.lightGallery.modules, function(key) {
			  if (_this.modules[key]) {
				  _this.modules[key].destroy();
			  }
		  });

		  this.lGalleryOn = false;

		  clearTimeout(_this.hideBartimeout);
		  this.hideBartimeout = false;
		  $(window).off('.lg');
		  $('body').removeClass('lg-on lg-from-hash');

		  if (_this.$outer) {
			  _this.$outer.removeClass('lg-visible');
		  }

		  $('.lg-backdrop').removeClass('in');

		  setTimeout(function() {
			  if (_this.$outer) {
				  _this.$outer.remove();
			  }

			  $('.lg-backdrop').remove();

			  if (!d) {
				  _this.$el.trigger('onCloseAfter.lg');
			  }

		  }, _this.s.backdropDuration + 50);
	  };

	  $.fn.lightGallery = function(options) {
		  return this.each(function() {
			  if (!$.data(this, 'lightGallery')) {
				  $.data(this, 'lightGallery', new Plugin(this, options));
			  } else {
				  try {
					  $(this).data('lightGallery').init();
				  } catch (err) {
					  console.error('lightGallery has not initiated properly');
				  }
			  }
		  });
	  };

	  $.fn.lightGallery.modules = {};

  })();


  }));
  /* Begin NGS Custom */

	var observeDOM = (function(){

		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
		eventListenerSupported = window.addEventListener;

		return function(obj, callback){
			if(MutationObserver){
				// define a new observer
				var obs = new MutationObserver(function(mutations, observer){
					if(mutations[0].addedNodes.length || mutations[0].removedNodes.length)
						callback();
				});
				// have the observer observe foo for changes in children
				obs.observe(obj, { childList:true, subtree:true });
			}
			else if( eventListenerSupported ){
				obj.addEventListener('DOMNodeInserted', callback, false);
				obj.addEventListener('DOMNodeRemoved', callback, false);
			}
		};

	})();

  // Observe a specific DOM element:

	$(document).ready(function () {

		var fn = function(){

			$('[data-lightgallery="true"][data-lightgallery-init!="true"]').each(function() {
				$(this).attr('data-lightgallery-init', true);
				initLightGallery(this);

			});

		};

		fn();

		observeDOM(document.getElementsByTagName('body')[0], fn);

	});

  function initLightGallery (oElement, options) {

	  var oOptions;
	  oElement = $(oElement);

	  // Check and retrieve LightGallery-Configurations
	  if (oElement.attr('data-lightgallery-config') && oElement.attr('data-lightgallery-config') != '') {
		  try {
			  oOptions = $.parseJSON(oElement.attr('data-lightgallery-config'));
		  } catch (err) {
			  console.warn('Error while JSON-Parsing from "data-lightgallery-config"! Please check JSON-String');
		  }
	  }

	  oOptions = $.extend({

		  nextHtml: '<svg class="icon icon-next" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#icon-next" /></svg>',
		  prevHtml: '<svg class="icon icon-prev" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#icon-prev" /></svg>'

	  }, oOptions || {}, options || {});

	  // Init LightGallery
	  oElement.lightGallery(oOptions);

	  // });

  }


  /* End NGS Custom */

/**
 * Forms
 */
var Forms = {

    init: function () {
        this.initJoinUsDubai();
        this.initDropzone();
        this.initFormPopupOpen();
    },

    initJoinUsDubai: function () {
        $('.dubai .f_join-us').on('click', function () {
            console.log(123);
            $('.f_join-us-dubai-container').show();
        });
    },

    initDropzone: function () {
        let $fileDropzone = $('.js-file-dropzone');
        $fileDropzone.on('dragover', function () {
            $(this).addClass('hover');
        });

        $fileDropzone.on('dragleave', function () {
            $(this).removeClass('hover');
        });

        $fileDropzone.find('input').on('change', function (e) {
            var file = this.files[0];

            $fileDropzone.removeClass('hover');

            if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
                return alert('File type not allowed.');
            }

            $fileDropzone.addClass('dropped');
            $fileDropzone.find('img').remove();

            if ((/^image\/(gif|png|jpeg)$/i).test(file.type)) {
                var reader = new FileReader(file);

                reader.readAsDataURL(file);

                reader.onload = function (e) {
                    var data = e.target.result,
                        $img = $('<img />').attr('src', data).fadeIn();
                    $fileDropzone.find('div').html($img);
                };
            } else {
                //<span class="x-icon js--clean-input-file"></span>
                var $successEl = $('<span class="is-success"></span><span class="success-text">' + $fileDropzone.attr('data-success-text') + '</span>');
                $fileDropzone.find('div').html($successEl);
            }
        });
    },

    initFormPopupOpen: function () {
        if (window.location.hash) {
            let $formEl = $(window.location.hash);
            if ($formEl.length > 0 && $formEl.is('form')) {
                let $parentEl = $formEl.parents('.f_modal-form-container');
                if ($parentEl.length > 0) {
                    $parentEl.addClass('is_active');
                }
            } else {
                if (window.location.hash.indexOf('#joinusDesign') === 0) {
                    $('.f_join-us-design-container').addClass('is_active');
                } else if (window.location.hash.indexOf('#joinUsDubai') === 0) {
                    $('.f_join-us-dubai-container').addClass('is_active');
                } else if (window.location.hash.indexOf('#contact') === 0) {
                    $('.f_join-us-container').addClass('is_active');
                }
            }
        }
    }

};

var Helper = {
    _scrollToElem: function (scrollPos) {
        $('html, body').animate({
            scrollTop: scrollPos
        }, 200);
    },
}
var Masks = {
  init: function () {
    this.initCursorFilter();
    this.initTabsContainer();
    this.initScrollToContent();
    this.initThemestageTitleTextCarousel();
    this.initCriteriaOpen();
    this.initCardTextOpen();
    this.initDownloadLinks();
  },

  initDownloadLinks: function () {
    $.each($('.f_download-links:not(.is-initiated)'), function () {
      if (!$(this).hasClass('is-initiated')) {
        $(this).addClass('is-initiated');

        $(this).on('click', function() {
          var links = JSON.parse($(this).data('links'));

          links.forEach(function(link) {
            var a = $('<a style="display:none;"></a>').attr({
              href: link,
              download: link.split('/').pop() // Use the last part of the URL as the filename
            });

            $('body').append(a);
            a[0].click();
            a.remove();
          });
        });
      }
    });
  },

  initCardTextOpen: function () {
    $.each($('.f_card-text-list:not(.is-initiated)'), function () {
      if (!$(this).hasClass('is-initiated')) {
        $(this).addClass('is-initiated');

        $(this).find('.f_card-text-header-box').each(function () {
          $(this).on('click', function () {
            $(this).closest('.f_card-text-item').siblings().removeClass('is_active');

            $(this).closest('.f_card-text-item').toggleClass('is_active');
          });
        });
      }
    });
  },

  initCriteriaOpen: function () {
    $.each($('.f_criteria-list:not(.is-initiated)'), function () {
      if (!$(this).hasClass('is-initiated')) {
        $(this).addClass('is-initiated');

        $(this).find('.f_criteria-header-box').each(function () {
          $(this).on('click', function () {
            $(this).closest('.f_criteria-item').siblings().removeClass('is_active');

            $(this).closest('.f_criteria-item').toggleClass('is_active');
          });
        });
      }
    });
  },

  initThemestageTitleTextCarousel: function () {
    $.each($('.f_themestage-word-carousel:not(.is-initiated)'), function () {
      $(this).addClass('is-initiated');

      var elements              = $(this).find('em'),
          elements_length       = elements.length,
          visible_element_index = 0,
          visible_element       = $(elements[visible_element_index]),
          isStopped             = false;

      visible_element.addClass("is_active");

      var showhide = function() {
        visible_element.removeClass("is_active");
        visible_element_index += 1;
        visible_element_index = visible_element_index == elements_length ? 0 : visible_element_index;
        visible_element = $(elements[visible_element_index]).addClass("is_active");
      };

      if($('showhide_element')){
        var interval = setInterval(showhide, 1500);
      }

    });
  },

  initCursorFilter: function () {
    var cursor_main = document.getElementById("cursor-main");
    var cursor_inner = document.getElementById("cursor-inner");
    var cursor_inner_border = document.getElementById("cursor-inner-border");

    if(!cursor_main) {
      return;
    }

    document.querySelector(".f_themestage-item").addEventListener("mousemove", function (e) {
        cursor_main.style.left = e.clientX + "px",
        cursor_main.style.top = e.clientY + "px";

        cursor_inner.style.left = e.clientX + "px",
        cursor_inner.style.top = e.clientY + "px";

        cursor_inner_border.style.left = e.clientX + "px",
        cursor_inner_border.style.top = e.clientY + "px";
    });

    const $hoverables = document.querySelectorAll('.is_hoverable');

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', function (e) {
        cursor_main.classList.add("is_hovered");
        cursor_inner.classList.add("is_hovered");
        cursor_inner_border.classList.add("is_hovered");
      });
      $hoverables[i].addEventListener('mouseleave', function (e) {
        cursor_main.classList.remove("is_hovered");
        cursor_inner.classList.remove("is_hovered");
        cursor_inner_border.classList.remove("is_hovered");
      });
    }
  },

  initTabsContainer: function () {
    const tabs = document.querySelectorAll('[data-tab-target]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        const parentContainer = target.closest('.f_text-table-element');
        const tabContents = parentContainer.querySelectorAll('[data-tab-content]')
        const tabs = parentContainer.querySelectorAll('[data-tab-target]');

        tabContents.forEach(tabContent => {
          tabContent.classList.remove('is_active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('is_active')
        })
        tab.classList.add('is_active')
        target.classList.add('is_active')
      })
    })
  },

  initScrollToContent: function () {
    $('.f_qr-title').on('click', function () {
      Helper._scrollToElem($('#f_qr-list').offset().top);
    });
  },
};

/**
 * Menu
 */
var Menu = {

    init: function () {
        this.modalFormPopup();
        // this.registerMenuLinkEvents();
    },

    // registerMenuLinkEvents: function () {
    //     let self = this;
    //     let headerMenu = $('.f_header-main');
    //     let $topHeaderEl = headerMenu.find('.f_header-box');
    //
    //     $topHeaderEl.find('.f_noLink').on('click', function () {
    //         let targetContentUid = $(this).attr('data-target-uid');
    //         let $targetContentEl = $('#c' + targetContentUid);
    //         if ($targetContentEl.length) {
    //             let scrollPos = $targetContentEl.offset().top - $topHeaderEl.outerHeight();
    //             Helper._scrollToElem(scrollPos);
    //             return false;
    //         }
    //     });
    // },

    modalFormPopup: function () {
        $('.f_modal-form-open-btn').on('click', function () {
            let formItem = $(".f_" + $(this).attr("data-modal-form-btn") + "-container");

            formItem.toggleClass("is_active")
        });
        $('.f_modal-form-close').on('click', function () {
            $(this).parents(".f_modal-form-container").toggleClass("is_active");
        });
    },
};

/**
 * NGS main
 */
var NgsMain = {
    init: function () {
        Sliders.init();
        Masks.init();
        Menu.init();
        Forms.init();
    }
};

$(function () {
    NgsMain.init();
});

var Sliders = {
  init: function () {
    this.initSliders();
    this.initTeamSlider();
    this.initUspsSlider();
    this.initTableSlider();
    this.initVideoSlider();
    this.initZoomListSlider();
    this.initJuriListSlider();
    this.initSpeakersSlider();
    this.initImageTextSlider();
    this.initImageTextLabsSlider();
    this.initCarouselImageSlider();
    this.initLandingPageBannerSlider();
  },

  initUspsSlider: function () {
    var usps = $('.f_usps-list');

    for (var i = 0; i < usps.length; i++) {
      var uspsItem = usps[i];

      var $sliderWrapper = $(uspsItem).closest('.f_slider-wrapper');

      var slider = tns({
        container: uspsItem,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        responsive: {
          950: {
            items: 3,
          },
          580: {
            items: 2,
          }
        },
      });
    }
  },

  initLandingPageBannerSlider: function () {
    var video = $('.f_landing-page-banner-slider-inner');

    for (var i = 0; i < video.length; i++) {

      var item = video[i];
      // var $sliderWrapper = $(item).closest('.f_slider-wrapper');
      var $sliderWrapper = $(item).closest(`.f_landing-page-banner-slider`);
      var slideTimeout = $(item).attr(`data-slideTimeout`);

      var prevButton = false;
      var nextButton = false;

      if ( $sliderWrapper.length) {
        prevButton = $sliderWrapper.find('.f_cursor-left').length ? $sliderWrapper.find('.f_cursor-left')[0]: false;
        nextButton = $sliderWrapper.find('.f_cursor-right').length ? $sliderWrapper.find('.f_cursor-right')[0] : false;
      }

      var slider = tns({
        container: item,
        items: 1,
        loop: true,
        controls: true,
        mouseDrag: true,
        swipeAngle: false,
        autoplay: true,
        autoplayTimeout: slideTimeout,
        prevButton: prevButton,
        nextButton: nextButton,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto'
      });

      item.classList.add('is_init');
    }
  },

  initVideoSlider: function () {
    var video = $('.f_video-list');

    for (var i = 0; i < video.length; i++) {

      var item = video[i];
      // var $sliderWrapper = $(item).closest('.f_slider-wrapper');
      var $sliderWrapper = $(item).closest(`.f_video-list-inner-${i}`);

      var prevButton = false;
      var nextButton = false;

      if ( $sliderWrapper.length) {
        prevButton = $sliderWrapper.find('.f_cursor-left').length ? $sliderWrapper.find('.f_cursor-left')[0]: false;
        nextButton = $sliderWrapper.find('.f_cursor-right').length ? $sliderWrapper.find('.f_cursor-right')[0] : false;
      }

      var slider = tns({
        container: item,
        items: 3,
        nav: false,
        loop: false,
        controls: true,
        mouseDrag: true,
        swipeAngle: false,
        prevButton: prevButton,
        nextButton: nextButton,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        responsive: {
          950: {
            items: 4,
          }
        },
      });
    }
  },

  initImageTextSlider: function () {
    var imageLists = $('.f_image-list');

    for (var i = 0; i < imageLists.length; i++) {
      var item = imageLists[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var prevButton = false;
      var nextButton = false;

      if ( $sliderWrapper.length) {
        prevButton = $sliderWrapper.find('.f_cursor-left').length ? $sliderWrapper.find('.f_cursor-left')[0] : false;
        nextButton = $sliderWrapper.find('.f_cursor-right').length ? $sliderWrapper.find('.f_cursor-right')[0] : false;
      }

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: true,
        controls: true,
        mouseDrag: true,
        swipeAngle: false,
        prevButton: prevButton,
        nextButton: nextButton,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initImageTextLabsSlider: function () {
    var imageListsLabs = $('.f_image-text-slider-list');

    for (var i = 0; i < imageListsLabs.length; i++) {
      var item = imageListsLabs[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initZoomListSlider: function () {
    var zoomList = $('.f_zoom-list');

    for (var i = 0; i < zoomList.length; i++) {
      var item = zoomList[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initJuriListSlider: function () {
    var zoomList = $('.f_juri-list');

    for (var i = 0; i < zoomList.length; i++) {
      var item = zoomList[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        responsive: {
          1200: {
            items: 5,
          },
          950: {
            items: 4,
          },
          768: {
            items: 3,
          },
        },
      });
    }
  },

  initTeamSlider: function () {
    var imageListsLabs = $('.f_team-list');

    for (var i = 0; i < imageListsLabs.length; i++) {
      var item = imageListsLabs[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        center : true,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initCarouselImageSlider: function () {
    var carouselImages = $('.f_image-list-carousel');

    for (var i = 0; i < carouselImages.length; i++) {
      var item = carouselImages[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: false,
        loop: true,
        controls: false,
        autoplay: true,
        mouseDrag: true,
        swipeAngle: false,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initSpeakersSlider: function () {
    var speakers = $('.f_speakers-list');

    for (var i = 0; i < speakers.length; i++) {
      var item = speakers[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initTableSlider: function () {
    var tables = $('.f_table-list');

    for (var i = 0; i < tables.length; i++) {
      var item = tables[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initSliders: function () {
    var sliders = $('.f_slider-list');

    for (var i = 0; i < sliders.length; i++) {
      var item = sliders[i];

      var sliderNav = item.parentNode.querySelector('.f_slider-nav');

      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        navContainer: sliderNav,
      });

      slider.events.on('indexChanged', function (data) {
        var active_item_dom = $sliderWrapper.find('.f_slider-item')[data.displayIndex-1];
        var active_item = $(active_item_dom);

        if(!(active_item.hasClass("is_active"))) {
          $('.f_slider-list.is_active').removeClass("is_active");
          active_item.addClass("is_active");
        }
      });
    }
  }
};
