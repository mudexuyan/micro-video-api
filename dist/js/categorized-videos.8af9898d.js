(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorized-videos"], {
    "02de": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return i
        }));
        var r = n("7a23");

        function i(t) {
            var e = Object(r["M"])(t);
            if (!e) return !1;
            var n = window.getComputedStyle(e), i = "none" === n.display,
                a = null === e.offsetParent && "fixed" !== n.position;
            return i || a
        }
    }, "09fe": function (t, e, n) {
    }, "14d3": function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return i
        })), n.d(e, "a", (function () {
            return a
        }));
        var r = n("f977");

        function i() {
            return Object(r["a"])({url: "/categories"})
        }

        function a(t) {
            return Object(r["a"])({url: "/categories/".concat(t)})
        }
    }, "159b": function (t, e, n) {
        var r = n("da84"), i = n("fdbc"), a = n("17c2"), o = n("9112");
        for (var c in i) {
            var u = r[c], s = u && u.prototype;
            if (s && s.forEach !== a) try {
                o(s, "forEach", a)
            } catch (d) {
                s.forEach = a
            }
        }
    }, "17c2": function (t, e, n) {
        "use strict";
        var r = n("b727").forEach, i = n("a640"), a = n("ae40"), o = i("forEach"), c = a("forEach");
        t.exports = o && c ? [].forEach : function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }, 2994: function (t, e, n) {
        "use strict";
        n("68ef"), n("e3b3"), n("c0c2")
    }, "2bdd": function (t, e, n) {
        "use strict";
        var r = n("3835"), i = n("7a23"), a = n("d282"), o = n("02de"), c = n("52709"), u = n("2744"), s = n("fa00"),
            d = n("4eda"), f = n("543e"), l = Object(a["a"])("list"), h = Object(r["a"])(l, 3), v = h[0], g = h[1],
            m = h[2];
        e["a"] = v({
            props: {
                error: Boolean,
                loading: Boolean,
                finished: Boolean,
                errorText: String,
                loadingText: String,
                finishedText: String,
                offset: {type: [Number, String], default: 300},
                direction: {type: String, default: "down"},
                immediateCheck: {type: Boolean, default: !0}
            }, emits: ["load", "update:error", "update:loading"], setup: function (t, e) {
                var n = e.emit, r = e.slots, a = Object(i["E"])(!1), l = Object(i["E"])(), h = Object(i["E"])(),
                    v = Object(c["a"])(l), b = function () {
                        Object(i["q"])((function () {
                            if (!(a.value || t.finished || t.error)) {
                                var e = t.offset, r = t.direction, i = Object(u["a"])(v);
                                if (!i.height || Object(o["a"])(l)) return !1;
                                var c = !1, s = Object(u["a"])(h);
                                c = "up" === r ? i.top - s.top <= e : s.bottom - i.bottom <= e, c && (a.value = !0, n("update:loading", !0), n("load"))
                            }
                        }))
                    }, p = function () {
                        if (t.finished) {
                            var e = r.finished ? r.finished() : t.finishedText;
                            if (e) return Object(i["j"])("div", {class: g("finished-text")}, [e])
                        }
                    }, O = function () {
                        n("update:error", !1), b()
                    }, j = function () {
                        if (t.error) {
                            var e = r.error ? r.error() : t.errorText;
                            if (e) return Object(i["j"])("div", {class: g("error-text"), onClick: O}, [e])
                        }
                    }, y = function () {
                        if (a.value && !t.finished) return Object(i["j"])("div", {class: g("loading")}, [r.loading ? r.loading() : Object(i["j"])(f["a"], {size: 16}, {
                            default: function () {
                                return [t.loadingText || m("loading")]
                            }
                        })])
                    };
                return Object(i["P"])([function () {
                    return t.loading
                }, function () {
                    return t.finished
                }], b), Object(i["y"])((function () {
                    a.value = t.loading
                })), Object(i["w"])((function () {
                    t.immediateCheck && b()
                })), Object(d["a"])({check: b}), Object(s["a"])("scroll", b, {target: v}), function () {
                    var e, n = null === (e = r.default) || void 0 === e ? void 0 : e.call(r),
                        o = Object(i["j"])("div", {ref: h, class: g("placeholder")}, null);
                    return Object(i["j"])("div", {
                        ref: l,
                        role: "feed",
                        class: g(),
                        "aria-busy": a.value
                    }, ["down" === t.direction ? n : o, y(), p(), j(), "up" === t.direction ? n : o])
                }
            }
        })
    }, "3bbd": function (t, e, n) {
    }, 4056: function (t, e, n) {
        "use strict";
        n("68ef"), n("cb51"), n("3743"), n("09fe")
    }, 4160: function (t, e, n) {
        "use strict";
        var r = n("23e7"), i = n("17c2");
        r({target: "Array", proto: !0, forced: [].forEach != i}, {forEach: i})
    }, "44bf": function (t, e, n) {
        "use strict";
        var r = n("3835"), i = n("7a23"), a = n("d282"), o = n("db17"), c = n("ea8e"), u = n("ad06"),
            s = Object(a["a"])("image"), d = Object(r["a"])(s, 2), f = d[0], l = d[1];
        e["a"] = f({
            props: {
                src: String,
                alt: String,
                fit: String,
                round: Boolean,
                width: [Number, String],
                height: [Number, String],
                radius: [Number, String],
                lazyLoad: Boolean,
                iconPrefix: String,
                showError: {type: Boolean, default: !0},
                showLoading: {type: Boolean, default: !0},
                errorIcon: {type: String, default: "photo-fail"},
                loadingIcon: {type: String, default: "photo"}
            }, emits: ["load", "error"], setup: function (t, e) {
                var n = e.emit, r = e.slots, a = Object(i["E"])(!1), s = Object(i["E"])(!0), d = Object(i["E"])(),
                    f = Object(i["e"])((function () {
                        var e = {};
                        return Object(o["c"])(t.width) && (e.width = Object(c["a"])(t.width)), Object(o["c"])(t.height) && (e.height = Object(c["a"])(t.height)), Object(o["c"])(t.radius) && (e.overflow = "hidden", e.borderRadius = Object(c["a"])(t.radius)), e
                    }));
                Object(i["P"])((function () {
                    return t.src
                }), (function () {
                    a.value = !1, s.value = !0
                }));
                var h = function (t) {
                    s.value = !1, n("load", t)
                }, v = function (t) {
                    a.value = !0, s.value = !1, n("error", t)
                }, g = function () {
                    return r.loading ? r.loading() : Object(i["j"])(u["a"], {
                        name: t.loadingIcon,
                        class: l("loading-icon"),
                        classPrefix: t.iconPrefix
                    }, null)
                }, m = function () {
                    return r.error ? r.error() : Object(i["j"])(u["a"], {
                        name: t.errorIcon,
                        class: l("error-icon"),
                        classPrefix: t.iconPrefix
                    }, null)
                }, b = function () {
                    return s.value && t.showLoading && o["b"] ? Object(i["j"])("div", {class: l("loading")}, [g()]) : a.value && t.showError ? Object(i["j"])("div", {class: l("error")}, [m()]) : void 0
                }, p = function () {
                    if (!a.value && t.src) {
                        var e = {alt: t.alt, class: l("img"), style: {objectFit: t.fit}};
                        return t.lazyLoad ? Object(i["R"])(Object(i["j"])("img", Object(i["p"])({ref: d}, e), null), [[Object(i["H"])("lazy"), t.src]]) : Object(i["j"])("img", Object(i["p"])({
                            src: t.src,
                            onLoad: h,
                            onError: v
                        }, e), null)
                    }
                };
                return function () {
                    var e;
                    return Object(i["j"])("div", {
                        class: l({round: t.round}),
                        style: f.value
                    }, [p(), b(), null === (e = r.default) || void 0 === e ? void 0 : e.call(r)])
                }
            }
        })
    }, "4fad": function (t, e, n) {
        var r = n("23e7"), i = n("6f53").entries;
        r({target: "Object", stat: !0}, {
            entries: function (t) {
                return i(t)
            }
        })
    }, 52709: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return c
        }));
        var r = n("7a23"), i = /scroll|auto/i;

        function a(t) {
            var e = 1;
            return "HTML" !== t.tagName && t.nodeType === e
        }

        function o(t, e) {
            void 0 === e && (e = window);
            var n = t;
            while (n && n !== e && a(n)) {
                var r = window.getComputedStyle(n).overflowY;
                if (i.test(r)) {
                    if ("BODY" !== n.tagName) return n;
                    var o = window.getComputedStyle(n.parentNode).overflowY;
                    if (i.test(o)) return n
                }
                n = n.parentNode
            }
            return e
        }

        function c(t) {
            var e = Object(r["E"])();
            return Object(r["w"])((function () {
                t.value && (e.value = o(t.value))
            })), e
        }
    }, 5994: function (t, e, n) {
        "use strict";
        n("3bbd")
    }, "5a0c": function (t, e, n) {
        !function (e, n) {
            t.exports = n()
        }(0, (function () {
            "use strict";
            var t = "millisecond", e = "second", n = "minute", r = "hour", i = "day", a = "week", o = "month",
                c = "quarter", u = "year", s = "date",
                d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
                f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, l = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                }, h = function (t, e, n) {
                    var r = String(t);
                    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                }, v = {
                    s: h, z: function (t) {
                        var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
                        return (e <= 0 ? "+" : "-") + h(r, 2, "0") + ":" + h(i, 2, "0")
                    }, m: function t(e, n) {
                        if (e.date() < n.date()) return -t(n, e);
                        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, o),
                            a = n - i < 0, c = e.clone().add(r + (a ? -1 : 1), o);
                        return +(-(r + (n - i) / (a ? i - c : c - i)) || 0)
                    }, a: function (t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    }, p: function (d) {
                        return {
                            M: o,
                            y: u,
                            w: a,
                            d: i,
                            D: s,
                            h: r,
                            m: n,
                            s: e,
                            ms: t,
                            Q: c
                        }[d] || String(d || "").toLowerCase().replace(/s$/, "")
                    }, u: function (t) {
                        return void 0 === t
                    }
                }, g = "en", m = {};
            m[g] = l;
            var b = function (t) {
                return t instanceof y
            }, p = function (t, e, n) {
                var r;
                if (!t) return g;
                if ("string" == typeof t) m[t] && (r = t), e && (m[t] = e, r = t); else {
                    var i = t.name;
                    m[i] = t, r = i
                }
                return !n && r && (g = r), r || !n && g
            }, O = function (t, e) {
                if (b(t)) return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t, n.args = arguments, new y(n)
            }, j = v;
            j.l = p, j.i = b, j.w = function (t, e) {
                return O(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset})
            };
            var y = function () {
                function l(t) {
                    this.$L = p(t.locale, null, !0), this.parse(t)
                }

                var h = l.prototype;
                return h.parse = function (t) {
                    this.$d = function (t) {
                        var e = t.date, n = t.utc;
                        if (null === e) return new Date(NaN);
                        if (j.u(e)) return new Date;
                        if (e instanceof Date) return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var r = e.match(d);
                            if (r) {
                                var i = r[2] - 1 || 0, a = (r[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)
                            }
                        }
                        return new Date(e)
                    }(t), this.$x = t.x || {}, this.init()
                }, h.init = function () {
                    var t = this.$d;
                    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                }, h.$utils = function () {
                    return j
                }, h.isValid = function () {
                    return !("Invalid Date" === this.$d.toString())
                }, h.isSame = function (t, e) {
                    var n = O(t);
                    return this.startOf(e) <= n && n <= this.endOf(e)
                }, h.isAfter = function (t, e) {
                    return O(t) < this.startOf(e)
                }, h.isBefore = function (t, e) {
                    return this.endOf(e) < O(t)
                }, h.$g = function (t, e, n) {
                    return j.u(t) ? this[e] : this.set(n, t)
                }, h.unix = function () {
                    return Math.floor(this.valueOf() / 1e3)
                }, h.valueOf = function () {
                    return this.$d.getTime()
                }, h.startOf = function (t, c) {
                    var d = this, f = !!j.u(c) || c, l = j.p(t), h = function (t, e) {
                        var n = j.w(d.$u ? Date.UTC(d.$y, e, t) : new Date(d.$y, e, t), d);
                        return f ? n : n.endOf(i)
                    }, v = function (t, e) {
                        return j.w(d.toDate()[t].apply(d.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), d)
                    }, g = this.$W, m = this.$M, b = this.$D, p = "set" + (this.$u ? "UTC" : "");
                    switch (l) {
                        case u:
                            return f ? h(1, 0) : h(31, 11);
                        case o:
                            return f ? h(1, m) : h(0, m + 1);
                        case a:
                            var O = this.$locale().weekStart || 0, y = (g < O ? g + 7 : g) - O;
                            return h(f ? b - y : b + (6 - y), m);
                        case i:
                        case s:
                            return v(p + "Hours", 0);
                        case r:
                            return v(p + "Minutes", 1);
                        case n:
                            return v(p + "Seconds", 2);
                        case e:
                            return v(p + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, h.endOf = function (t) {
                    return this.startOf(t, !1)
                }, h.$set = function (a, c) {
                    var d, f = j.p(a), l = "set" + (this.$u ? "UTC" : ""),
                        h = (d = {}, d[i] = l + "Date", d[s] = l + "Date", d[o] = l + "Month", d[u] = l + "FullYear", d[r] = l + "Hours", d[n] = l + "Minutes", d[e] = l + "Seconds", d[t] = l + "Milliseconds", d)[f],
                        v = f === i ? this.$D + (c - this.$W) : c;
                    if (f === o || f === u) {
                        var g = this.clone().set(s, 1);
                        g.$d[h](v), g.init(), this.$d = g.set(s, Math.min(this.$D, g.daysInMonth())).$d
                    } else h && this.$d[h](v);
                    return this.init(), this
                }, h.set = function (t, e) {
                    return this.clone().$set(t, e)
                }, h.get = function (t) {
                    return this[j.p(t)]()
                }, h.add = function (t, c) {
                    var s, d = this;
                    t = Number(t);
                    var f = j.p(c), l = function (e) {
                        var n = O(d);
                        return j.w(n.date(n.date() + Math.round(e * t)), d)
                    };
                    if (f === o) return this.set(o, this.$M + t);
                    if (f === u) return this.set(u, this.$y + t);
                    if (f === i) return l(1);
                    if (f === a) return l(7);
                    var h = (s = {}, s[n] = 6e4, s[r] = 36e5, s[e] = 1e3, s)[f] || 1, v = this.$d.getTime() + t * h;
                    return j.w(v, this)
                }, h.subtract = function (t, e) {
                    return this.add(-1 * t, e)
                }, h.format = function (t) {
                    var e = this;
                    if (!this.isValid()) return "Invalid Date";
                    var n = t || "YYYY-MM-DDTHH:mm:ssZ", r = j.z(this), i = this.$locale(), a = this.$H, o = this.$m,
                        c = this.$M, u = i.weekdays, s = i.months, d = function (t, r, i, a) {
                            return t && (t[r] || t(e, n)) || i[r].substr(0, a)
                        }, l = function (t) {
                            return j.s(a % 12 || 12, t, "0")
                        }, h = i.meridiem || function (t, e, n) {
                            var r = t < 12 ? "AM" : "PM";
                            return n ? r.toLowerCase() : r
                        }, v = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: c + 1,
                            MM: j.s(c + 1, 2, "0"),
                            MMM: d(i.monthsShort, c, s, 3),
                            MMMM: d(s, c),
                            D: this.$D,
                            DD: j.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: d(i.weekdaysMin, this.$W, u, 2),
                            ddd: d(i.weekdaysShort, this.$W, u, 3),
                            dddd: u[this.$W],
                            H: String(a),
                            HH: j.s(a, 2, "0"),
                            h: l(1),
                            hh: l(2),
                            a: h(a, o, !0),
                            A: h(a, o, !1),
                            m: String(o),
                            mm: j.s(o, 2, "0"),
                            s: String(this.$s),
                            ss: j.s(this.$s, 2, "0"),
                            SSS: j.s(this.$ms, 3, "0"),
                            Z: r
                        };
                    return n.replace(f, (function (t, e) {
                        return e || v[t] || r.replace(":", "")
                    }))
                }, h.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, h.diff = function (t, s, d) {
                    var f, l = j.p(s), h = O(t), v = 6e4 * (h.utcOffset() - this.utcOffset()), g = this - h,
                        m = j.m(this, h);
                    return m = (f = {}, f[u] = m / 12, f[o] = m, f[c] = m / 3, f[a] = (g - v) / 6048e5, f[i] = (g - v) / 864e5, f[r] = g / 36e5, f[n] = g / 6e4, f[e] = g / 1e3, f)[l] || g, d ? m : j.a(m)
                }, h.daysInMonth = function () {
                    return this.endOf(o).$D
                }, h.$locale = function () {
                    return m[this.$L]
                }, h.locale = function (t, e) {
                    if (!t) return this.$L;
                    var n = this.clone(), r = p(t, e, !0);
                    return r && (n.$L = r), n
                }, h.clone = function () {
                    return j.w(this.$d, this)
                }, h.toDate = function () {
                    return new Date(this.valueOf())
                }, h.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null
                }, h.toISOString = function () {
                    return this.$d.toISOString()
                }, h.toString = function () {
                    return this.$d.toUTCString()
                }, l
            }(), $ = y.prototype;
            return O.prototype = $, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", o], ["$y", u], ["$D", s]].forEach((function (t) {
                $[t[1]] = function (e) {
                    return this.$g(e, t[0], t[1])
                }
            })), O.extend = function (t, e) {
                return t(e, y, O), O
            }, O.locale = p, O.isDayjs = b, O.unix = function (t) {
                return O(1e3 * t)
            }, O.en = m[g], O.Ls = m, O.p = {}, O
        }))
    }, "6f53": function (t, e, n) {
        var r = n("83ab"), i = n("df75"), a = n("fc6a"), o = n("d1e7").f, c = function (t) {
            return function (e) {
                var n, c = a(e), u = i(c), s = u.length, d = 0, f = [];
                while (s > d) n = u[d++], r && !o.call(c, n) || f.push(t ? [n, c[n]] : c[n]);
                return f
            }
        };
        t.exports = {entries: c(!0), values: c(!1)}
    }, "7dc6": function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n("7a23"), i = {class: "container"}, a = {class: "video-list"};

        function o(t, e, n, o, c, u) {
            var s = Object(r["G"])("nav-bar-icon"), d = Object(r["G"])("van-nav-bar"), f = Object(r["G"])("video-row"),
                l = Object(r["G"])("van-list");
            return Object(r["z"])(), Object(r["g"])("div", i, [Object(r["j"])(d, {
                title: t.categoryName,
                onClickLeft: t.handleBack
            }, {
                left: Object(r["Q"])((function () {
                    return [Object(r["j"])(s, {name: "back"})]
                })), _: 1
            }, 8, ["title", "onClickLeft"]), Object(r["j"])(l, {
                class: "list-container",
                "immediate-check": !1,
                modelValue: t.loading,
                "onUpdate:modelValue": e[1] || (e[1] = function (e) {
                    return t.loading = e
                }),
                finished: t.finished,
                "finished-text": "没有更多了",
                onLoad: t.handleLoad
            }, {
                default: Object(r["Q"])((function () {
                    return [Object(r["j"])("div", a, [(Object(r["z"])(!0), Object(r["g"])(r["a"], null, Object(r["F"])(t.videoList, (function (e) {
                        return Object(r["z"])(), Object(r["g"])(f, {
                            key: e.id, video: e, onClick: function (n) {
                                return t.handleVideoRowClick(e.id)
                            }
                        }, null, 8, ["video", "onClick"])
                    })), 128))])]
                })), _: 1
            }, 8, ["modelValue", "finished", "onLoad"])])
        }

        n("99af"), n("b0c0"), n("d3b7"), n("25f0"), n("96cf");
        var c = n("1da1"), u = (n("2994"), n("2bdd")), s = (n("5246"), n("6b41")), d = n("f9d3"), f = n("2af5"),
            l = n("14d3"), h = n("c5e7"), v = Object(r["k"])({
                name: "CategorizedVideos",
                components: {VanNavBar: s["a"], VanList: u["a"], VideoRow: d["a"], NavBarIcon: f["a"]},
                props: {category_id: {type: String, required: !0}},
                data: function () {
                    return {
                        category: null,
                        videoList: [],
                        paging: {page: 1, per_page: 10},
                        refreshing: !1,
                        loading: !1,
                        finished: !1
                    }
                },
                computed: {
                    categoryName: function () {
                        return null !== this.category ? this.category.name : ""
                    }
                },
                methods: {
                    handleBack: function () {
                        this.$router.back()
                    }, getCategory: function () {
                        var t = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(l["a"])(t.category_id);
                                    case 3:
                                        n = e.sent, e.next = 10;
                                        break;
                                    case 6:
                                        return e.prev = 6, e.t0 = e["catch"](0), e.abrupt("return");
                                    case 10:
                                        t.category = n.data;
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[0, 6]])
                        })))()
                    }, getVideos: function () {
                        var t = arguments, e = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function n() {
                            var r, i, a;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r = t.length > 0 && void 0 !== t[0] && t[0], n.prev = 1, n.next = 4, Object(h["j"])({
                                            page: e.paging.page,
                                            per_page: e.paging.per_page,
                                            category: e.category_id
                                        });
                                    case 4:
                                        i = n.sent, n.next = 11;
                                        break;
                                    case 7:
                                        return n.prev = 7, n.t0 = n["catch"](1), n.abrupt("return");
                                    case 11:
                                        a = i.data, e.videoList = r ? e.videoList.concat(a) : a, e.finished = a.length < e.paging.per_page;
                                    case 14:
                                    case"end":
                                        return n.stop()
                                }
                            }), n, null, [[1, 7]])
                        })))()
                    }, handleLoad: function () {
                        var t = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (!0 !== t.loading) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t.loading = !0, t.paging.page++, e.next = 6, t.getVideos(!0);
                                    case 6:
                                        return e.next = 8, t.$nextTick();
                                    case 8:
                                        t.loading = !1;
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }, handleVideoRowClick: function (t) {
                        this.$router.push({name: "Video", params: {video_id: t.toString()}})
                    }
                },
                created: function () {
                    var t = this;
                    return Object(c["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.getCategory();
                                case 2:
                                    return e.next = 4, t.getVideos();
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            });
        v.render = o;
        e["default"] = v
    }, "99af": function (t, e, n) {
        "use strict";
        var r = n("23e7"), i = n("d039"), a = n("e8b5"), o = n("861d"), c = n("7b0b"), u = n("50c4"), s = n("8418"),
            d = n("65f0"), f = n("1dde"), l = n("b622"), h = n("2d00"), v = l("isConcatSpreadable"),
            g = 9007199254740991, m = "Maximum allowed index exceeded", b = h >= 51 || !i((function () {
                var t = [];
                return t[v] = !1, t.concat()[0] !== t
            })), p = f("concat"), O = function (t) {
                if (!o(t)) return !1;
                var e = t[v];
                return void 0 !== e ? !!e : a(t)
            }, j = !b || !p;
        r({target: "Array", proto: !0, forced: j}, {
            concat: function (t) {
                var e, n, r, i, a, o = c(this), f = d(o, 0), l = 0;
                for (e = -1, r = arguments.length; e < r; e++) if (a = -1 === e ? o : arguments[e], O(a)) {
                    if (i = u(a.length), l + i > g) throw TypeError(m);
                    for (n = 0; n < i; n++, l++) n in a && s(f, l, a[n])
                } else {
                    if (l >= g) throw TypeError(m);
                    s(f, l++, a)
                }
                return f.length = l, f
            }
        })
    }, c0c2: function (t, e, n) {
    }, c5e7: function (t, e, n) {
        "use strict";
        n.d(e, "f", (function () {
            return a
        })), n.d(e, "j", (function () {
            return o
        })), n.d(e, "m", (function () {
            return c
        })), n.d(e, "n", (function () {
            return u
        })), n.d(e, "g", (function () {
            return s
        })), n.d(e, "i", (function () {
            return d
        })), n.d(e, "k", (function () {
            return f
        })), n.d(e, "l", (function () {
            return l
        })), n.d(e, "h", (function () {
            return h
        })), n.d(e, "c", (function () {
            return v
        })), n.d(e, "e", (function () {
            return g
        })), n.d(e, "b", (function () {
            return m
        })), n.d(e, "d", (function () {
            return b
        })), n.d(e, "a", (function () {
            return p
        }));
        n("4160"), n("4fad"), n("159b");
        var r = n("3835"), i = n("f977");

        function a(t) {
            return Object(i["a"])({url: "/recommends", params: t})
        }

        function o(t) {
            return Object(i["a"])({url: "/videos", params: t})
        }

        function c(t) {
            return Object(i["a"])({url: "/search/videos", params: t})
        }

        function u(t, e) {
            var n = new FormData;
            return n.append("file", t), Object.entries(e).forEach((function (t) {
                var e = Object(r["a"])(t, 2), i = e[0], a = e[1];
                n.append(i, a)
            })), Object(i["a"])({
                url: "/user/videos",
                method: "POST",
                headers: {"Content-Type": "multipart/form-data"},
                data: n,
                timeout: 0
            })
        }

        function s(t) {
            return Object(i["a"])({url: "/videos/".concat(t)})
        }

        function d(t, e) {
            return Object(i["a"])({url: "/videos/".concat(t, "/comments"), params: e})
        }

        function f(t, e) {
            return Object(i["a"])({url: "/videos/".concat(t, "/comments"), method: "POST", data: e})
        }

        function l(t) {
            return Object(i["a"])({url: "/user/played/".concat(t), method: "PUT"})
        }

        function h(t) {
            return Object(i["a"])({url: "user/liked/".concat(t), method: "PUT"})
        }

        function v(t) {
            return Object(i["a"])({url: "user/liked/".concat(t), method: "DELETE"})
        }

        function g(t) {
            return Object(i["a"])({url: "user/disliked/".concat(t), method: "PUT"})
        }

        function m(t) {
            return Object(i["a"])({url: "user/disliked/".concat(t), method: "DELETE"})
        }

        function b(t) {
            return Object(i["a"])({url: "user/favorites/".concat(t), method: "PUT"})
        }

        function p(t) {
            return Object(i["a"])({url: "user/favorites/".concat(t), method: "DELETE"})
        }
    }, f19a: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }));
        var r = n("5a0c"), i = n.n(r), a = n("f906"), o = n.n(a);
        i.a.extend(o.a);
        var c = i.a;

        function u() {
            var t = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm";
                return c(t).format(e)
            };
            return {timeFormat: t}
        }
    }, f906: function (t, e, n) {
        !function (e, n) {
            t.exports = n()
        }(0, (function () {
            "use strict";
            var t, e = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, n = function (t, n) {
                    return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function (t, r, i) {
                        var a = i && i.toUpperCase();
                        return r || n[i] || e[i] || n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function (t, e, n) {
                            return e || n.slice(1)
                        }))
                    }))
                }, r = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/,
                a = /\d\d?/, o = /\d*[^\s\d-:/()]+/, c = function (t) {
                    return function (e) {
                        this[t] = +e
                    }
                }, u = [/[+-]\d\d:?\d\d/, function (t) {
                    var e, n;
                    (this.zone || (this.zone = {})).offset = (e = t.match(/([+-]|\d\d)/g), 0 === (n = 60 * e[1] + +e[2]) ? 0 : "+" === e[0] ? -n : n)
                }], s = function (e) {
                    var n = t[e];
                    return n && (n.indexOf ? n : n.s.concat(n.f))
                }, d = function (e, n) {
                    var r, i = t.meridiem;
                    if (i) {
                        for (var a = 1; a <= 24; a += 1) if (e.indexOf(i(a, 0, n)) > -1) {
                            r = a > 12;
                            break
                        }
                    } else r = e === (n ? "pm" : "PM");
                    return r
                }, f = {
                    A: [o, function (t) {
                        this.afternoon = d(t, !1)
                    }],
                    a: [o, function (t) {
                        this.afternoon = d(t, !0)
                    }],
                    S: [/\d/, function (t) {
                        this.milliseconds = 100 * +t
                    }],
                    SS: [i, function (t) {
                        this.milliseconds = 10 * +t
                    }],
                    SSS: [/\d{3}/, function (t) {
                        this.milliseconds = +t
                    }],
                    s: [a, c("seconds")],
                    ss: [a, c("seconds")],
                    m: [a, c("minutes")],
                    mm: [a, c("minutes")],
                    H: [a, c("hours")],
                    h: [a, c("hours")],
                    HH: [a, c("hours")],
                    hh: [a, c("hours")],
                    D: [a, c("day")],
                    DD: [i, c("day")],
                    Do: [o, function (e) {
                        var n = t.ordinal, r = e.match(/\d+/);
                        if (this.day = r[0], n) for (var i = 1; i <= 31; i += 1) n(i).replace(/\[|\]/g, "") === e && (this.day = i)
                    }],
                    M: [a, c("month")],
                    MM: [i, c("month")],
                    MMM: [o, function (t) {
                        var e = s("months"), n = (s("monthsShort") || e.map((function (t) {
                            return t.substr(0, 3)
                        }))).indexOf(t) + 1;
                        if (n < 1) throw new Error;
                        this.month = n % 12 || n
                    }],
                    MMMM: [o, function (t) {
                        var e = s("months").indexOf(t) + 1;
                        if (e < 1) throw new Error;
                        this.month = e % 12 || e
                    }],
                    Y: [/[+-]?\d+/, c("year")],
                    YY: [i, function (t) {
                        t = +t, this.year = t + (t > 68 ? 1900 : 2e3)
                    }],
                    YYYY: [/\d{4}/, c("year")],
                    Z: u,
                    ZZ: u
                }, l = function (e, i, a) {
                    try {
                        var o = function (e) {
                                for (var i = (e = n(e, t && t.formats)).match(r), a = i.length, o = 0; o < a; o += 1) {
                                    var c = i[o], u = f[c], s = u && u[0], d = u && u[1];
                                    i[o] = d ? {regex: s, parser: d} : c.replace(/^\[|\]$/g, "")
                                }
                                return function (t) {
                                    for (var e = {}, n = 0, r = 0; n < a; n += 1) {
                                        var o = i[n];
                                        if ("string" == typeof o) r += o.length; else {
                                            var c = o.regex, u = o.parser, s = t.substr(r), d = c.exec(s)[0];
                                            u.call(e, d), t = t.replace(d, "")
                                        }
                                    }
                                    return function (t) {
                                        var e = t.afternoon;
                                        if (void 0 !== e) {
                                            var n = t.hours;
                                            e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0), delete t.afternoon
                                        }
                                    }(e), e
                                }
                            }(i)(e), c = o.year, u = o.month, s = o.day, d = o.hours, l = o.minutes, h = o.seconds,
                            v = o.milliseconds, g = o.zone, m = new Date, b = s || (c || u ? 1 : m.getDate()),
                            p = c || m.getFullYear(), O = 0;
                        c && !u || (O = u > 0 ? u - 1 : m.getMonth());
                        var j = d || 0, y = l || 0, $ = h || 0, w = v || 0;
                        return g ? new Date(Date.UTC(p, O, b, j, y, $, w + 60 * g.offset * 1e3)) : a ? new Date(Date.UTC(p, O, b, j, y, $, w)) : new Date(p, O, b, j, y, $, w)
                    } catch (t) {
                        return new Date("")
                    }
                };
            return function (e, n, r) {
                r.p.customParseFormat = !0;
                var i = n.prototype, a = i.parse;
                i.parse = function (e) {
                    var n = e.date, i = e.utc, o = e.args;
                    this.$u = i;
                    var c = o[1];
                    if ("string" == typeof c) {
                        var u = !0 === o[2], s = !0 === o[3], d = u || s, f = o[2];
                        s && (f = o[2]), u || (t = f ? r.Ls[f] : this.$locale()), this.$d = l(n, c, i), this.init(), f && !0 !== f && (this.$L = this.locale(f).$L), d && n !== this.format(c) && (this.$d = new Date("")), t = void 0
                    } else if (c instanceof Array) for (var h = c.length, v = 1; v <= h; v += 1) {
                        o[1] = c[v - 1];
                        var g = r.apply(this, o);
                        if (g.isValid()) {
                            this.$d = g.$d, this.$L = g.$L, this.init();
                            break
                        }
                        v === h && (this.$d = new Date(""))
                    } else a.call(this, e)
                }
            }
        }))
    }, f9d3: function (t, e, n) {
        "use strict";
        var r = n("7a23"), i = Object(r["T"])("data-v-51387fea");
        Object(r["C"])("data-v-51387fea");
        var a = {class: "video-intro"}, o = {class: "video-title"}, c = {class: "video-created_at"},
            u = {class: "video-uploader"};
        Object(r["A"])();
        var s = i((function (t, e, n, i, s, d) {
            var f = Object(r["G"])("van-image");
            return Object(r["z"])(), Object(r["g"])("div", {
                class: "row-wrapper", onClick: e[1] || (e[1] = function () {
                    return t.handleClick.apply(t, arguments)
                })
            }, [Object(r["j"])(f, {
                class: "video-cover",
                fit: "contain",
                radius: 8,
                src: t.video.cover
            }, null, 8, ["src"]), Object(r["j"])("div", a, [Object(r["j"])("div", o, Object(r["K"])(t.video.title), 1), Object(r["j"])("div", c, Object(r["K"])(t.timeFormat(t.video.created_at)), 1), Object(r["j"])("div", u, Object(r["K"])(t.video.uploader), 1)])])
        })), d = (n("4056"), n("44bf")), f = n("f19a"), l = Object(r["k"])({
            name: "VideoRow",
            components: {VanImage: d["a"]},
            props: {video: {type: Object, required: !0}},
            setup: function () {
                var t = Object(f["a"])(), e = t.timeFormat;
                return {timeFormat: e}
            },
            methods: {
                handleClick: function (t) {
                    this.$emit("click", t)
                }
            }
        });
        n("5994");
        l.render = s, l.__scopeId = "data-v-51387fea";
        e["a"] = l
    }
}]);