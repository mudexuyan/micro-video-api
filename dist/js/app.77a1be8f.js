(function (e) {
    function t(t) {
        for (var n, o, c = t[0], u = t[1], s = t[2], d = 0, l = []; d < c.length; d++) o = c[d], Object.prototype.hasOwnProperty.call(a, o) && a[o] && l.push(a[o][0]), a[o] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        f && f(t);
        while (l.length) l.shift()();
        return i.push.apply(i, s || []), r()
    }

    function r() {
        for (var e, t = 0; t < i.length; t++) {
            for (var r = i[t], n = !0, o = 1; o < r.length; o++) {
                var c = r[o];
                0 !== a[c] && (n = !1)
            }
            n && (i.splice(t--, 1), e = u(u.s = r[0]))
        }
        return e
    }

    var n = {}, o = {app: 0}, a = {app: 0}, i = [];

    function c(e) {
        return u.p + "js/" + ({
            "categorized-videos": "categorized-videos",
            category: "category",
            favorite: "favorite",
            history: "history",
            home: "home",
            login: "login",
            personal: "personal",
            "personal-edit~search~upload-video~video": "personal-edit~search~upload-video~video",
            "personal-edit": "personal-edit",
            "search~video": "search~video",
            search: "search",
            video: "video",
            "upload-video": "upload-video",
            user: "user"
        }[e] || e) + "." + {
            "categorized-videos": "8af9898d",
            category: "d7037aea",
            favorite: "de1b9ded",
            history: "fc007e92",
            home: "d069bbe2",
            login: "9adea94e",
            personal: "21338c86",
            "personal-edit~search~upload-video~video": "bfa7b213",
            "personal-edit": "16985449",
            "search~video": "10494571",
            search: "630548b5",
            video: "f8e6299b",
            "upload-video": "d308ca34",
            user: "8ed17495"
        }[e] + ".js"
    }

    function u(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(r.exports, r, r.exports, u), r.l = !0, r.exports
    }

    u.e = function (e) {
        var t = [], r = {
            "categorized-videos": 1,
            category: 1,
            favorite: 1,
            history: 1,
            home: 1,
            login: 1,
            personal: 1,
            "personal-edit~search~upload-video~video": 1,
            "personal-edit": 1,
            "search~video": 1,
            search: 1,
            video: 1,
            "upload-video": 1,
            user: 1
        };
        o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise((function (t, r) {
            for (var n = "css/" + ({
                "categorized-videos": "categorized-videos",
                category: "category",
                favorite: "favorite",
                history: "history",
                home: "home",
                login: "login",
                personal: "personal",
                "personal-edit~search~upload-video~video": "personal-edit~search~upload-video~video",
                "personal-edit": "personal-edit",
                "search~video": "search~video",
                search: "search",
                video: "video",
                "upload-video": "upload-video",
                user: "user"
            }[e] || e) + "." + {
                "categorized-videos": "539adf1e",
                category: "e27ec4b5",
                favorite: "cd6638f3",
                history: "cd6638f3",
                home: "b66d33a8",
                login: "1c4d229d",
                personal: "0b8037e4",
                "personal-edit~search~upload-video~video": "3d195219",
                "personal-edit": "41603e3e",
                "search~video": "b073d853",
                search: "52864f09",
                video: "03df9474",
                "upload-video": "822b5c15",
                user: "e185e612"
            }[e] + ".css", a = u.p + n, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
                var s = i[c], d = s.getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (d === n || d === a)) return t()
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
                s = l[c], d = s.getAttribute("data-href");
                if (d === n || d === a) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
                var n = t && t.target && t.target.src || a,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = n, delete o[e], f.parentNode.removeChild(f), r(i)
            }, f.href = a;
            var g = document.getElementsByTagName("head")[0];
            g.appendChild(f)
        })).then((function () {
            o[e] = 0
        })));
        var n = a[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var i = new Promise((function (t, r) {
                n = a[e] = [t, r]
            }));
            t.push(n[2] = i);
            var s, d = document.createElement("script");
            d.charset = "utf-8", d.timeout = 120, u.nc && d.setAttribute("nonce", u.nc), d.src = c(e);
            var l = new Error;
            s = function (t) {
                d.onerror = d.onload = null, clearTimeout(f);
                var r = a[e];
                if (0 !== r) {
                    if (r) {
                        var n = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src;
                        l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", l.name = "ChunkLoadError", l.type = n, l.request = o, r[1](l)
                    }
                    a[e] = void 0
                }
            };
            var f = setTimeout((function () {
                s({type: "timeout", target: d})
            }), 12e4);
            d.onerror = d.onload = s, document.head.appendChild(d)
        }
        return Promise.all(t)
    }, u.m = e, u.c = n, u.d = function (e, t, r) {
        u.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, u.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, u.t = function (e, t) {
        if (1 & t && (e = u(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (u.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) u.d(r, n, function (t) {
            return e[t]
        }.bind(null, n));
        return r
    }, u.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return u.d(t, "a", t), t
    }, u.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, u.p = "/", u.oe = function (e) {
        throw e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [], d = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var f = d;
    i.push([0, "chunk-vendors"]), r()
})({
    0: function (e, t, r) {
        e.exports = r("cd49")
    }, "0613": function (e, t, r) {
        "use strict";
        r.d(t, "b", (function () {
            return i
        }));
        r("a4d3"), r("e01a"), r("13d5"), r("d3b7"), r("ac1f"), r("5319"), r("ddb0");
        var n = r("5502"), o = r("e9e8"), a = o.keys().reduce((function (e, t) {
            var r = t.replace(/^\.\/(.*)\.\w+$/, "$1"), n = o(t);
            return e[r] = n.default, e
        }), {});
        t["a"] = Object(n["a"])({state: {}, mutations: {}, actions: {}, modules: a});
        Symbol("vuex");

        function i() {
            return Object(n["b"])()
        }
    }, "16de": function (e, t) {
        e.exports = "data:image/png;base64,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sobvScoHgSDlmSftyJMkCV90MYJEI6tfgCTlMkCQcqyz7oQkWXGebIYgZTir7IIkKljfa4og+oxVd0ASVbwDgujyLdKd327pYUYQPbZFOys+SZZlWa53u93zogcyshmCGAkixxgKkrxd5fg4x3wt9kCQFlM7M3NGSd6scnzqDFHUcRAkClcbizNI8nqV4/M2Tqw3JYLosa3aWSrJOI7/vHv37tFut5uqHsDI5ghiJAiNMQSS/LUsy16OLzTmabEngrSYWsTMEZL8sdlsHm+3268i2rtfiiDuI777G/f9XyXu/zrx1M9v4zg+mabpmw5wRB0RQaJwtbv4zJPkl81m82S73b5o93R6kyOIHltznY9I8tM4jk+nafre3LBGBkIQI0GUGuOeJK/Wj1U/ltq7xX0QpMXUEmdeJflgnueXia3clyOI+4g5YAoBBEmhR617AgjiPmIOmEIAQVLoUeueAIK4j5gDphBAkBR61LongCDuI+aAKQQQJIUete4JIIj7iDlgCgEESaFHrXsCCOI+Yg6YQgBBUuhR654AgriPmAOmEECQFHrUuieAIO4j5oApBBAkhR617gkgiPuIOWAKAQRJoUetewII4j5iDphCAEFS6FHrngCCuI+YA6YQQJAUetS6J4Ag7iPmgCkEECSFHrXuCSCI+4g5YAoBBEmhR617AgjiPmIOmEIAQVLoUeueAIK4j5gDphD4Dzlb+ucZUjcmAAAAAElFTkSuQmCC"
    }, "21d9": function (e, t, r) {
    }, "2af5": function (e, t, r) {
        "use strict";
        r("b0c0");
        var n = r("7a23");

        function o(e, t, o, a, i, c) {
            var u = Object(n["G"])("van-icon");
            return Object(n["z"])(), Object(n["g"])(u, {
                name: r("8cba")("./".concat(e.name, ".png")),
                size: "30"
            }, null, 8, ["name"])
        }

        r("c3a6");
        var a = r("ad06"), i = Object(n["k"])({
            name: "NavBarIcon",
            components: {VanIcon: a["a"]},
            props: {name: {type: String, required: !0}}
        });
        i.render = o;
        t["a"] = i
    }, "4ece": function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 5458: function (e, t, r) {
        "use strict";
        r("21d9")
    }, 5849: function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return i
        }));
        r("96cf");
        var n = r("1da1"), o = r("7a23"), a = r("0613");

        function i() {
            var e = Object(a["b"])(), t = Object(o["e"])({
                get: function () {
                    return e.state.user.token
                }, set: function () {
                    var t = Object(n["a"])(regeneratorRuntime.mark((function t(r) {
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e.dispatch("user/setToken", r));
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));

                    function r(e) {
                        return t.apply(this, arguments)
                    }

                    return r
                }()
            });
            return {token: t}
        }
    }, "8cba": function (e, t, r) {
        var n = {"./add.png": "9b8d", "./back.png": "16de", "./log-out.png": "4ece", "./search.png": "8f8b"};

        function o(e) {
            var t = a(e);
            return r(t)
        }

        function a(e) {
            if (!r.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }

        o.keys = function () {
            return Object.keys(n)
        }, o.resolve = a, e.exports = o, o.id = "8cba"
    }, "8f8b": function (e, t, r) {
        e.exports = r.p + "img/search.5be1f439.png"
    }, "9b8d": function (e, t, r) {
        e.exports = r.p + "img/add.6fff3976.png"
    }, "9cdc": function (e, t, r) {
        "use strict";
        r("c701")
    }, "9dba": function (e, t, r) {
        "use strict";
        r.r(t);
        r("96cf");
        var n, o = r("1da1"), a = r("ade3"), i = "SET_TOKEN", c = "SET_PERSONAL", u = r("ea9b"), s = "token", d = {
            namespaced: !0,
            state: {token: localStorage.getItem(s) || "", personal: null},
            mutations: (n = {}, Object(a["a"])(n, i, (function (e, t) {
                e.token = t
            })), Object(a["a"])(n, c, (function (e, t) {
                e.personal = t
            })), n),
            actions: {
                setToken: function (e, t) {
                    var r = e.commit;
                    localStorage.setItem(s, t), r(i, t)
                }, setPersonal: function (e, t) {
                    var r = e.commit;
                    r(c, t)
                }, fetchPersonal: function (e) {
                    return Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var r, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return r = e.dispatch, t.prev = 1, t.next = 4, Object(u["a"])();
                                case 4:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    return t.prev = 7, t.t0 = t["catch"](1), t.abrupt("return");
                                case 11:
                                    r("setPersonal", n.data);
                                case 12:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[1, 7]])
                    })))()
                }, cleanPersonal: function (e) {
                    var t = e.commit;
                    t(c, null)
                }
            }
        };
        t["default"] = d
    }, c701: function (e, t, r) {
    }, cd49: function (e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var n = r("7a23");

        function o(e, t, r, o, a, i) {
            var c = Object(n["G"])("router-view");
            return Object(n["z"])(), Object(n["g"])(c)
        }

        var a = Object(n["k"])({});
        r("9cdc");
        a.render = o;
        var i = a, c = (r("d3b7"), r("6c02")), u = (r("b0c0"), Object(n["T"])("data-v-6efe1080"));
        Object(n["C"])("data-v-6efe1080");
        var s = {class: "layout-container"}, d = Object(n["i"])(" 首页 "),
            f = Object(n["i"])(" 我的 ");
        Object(n["A"])();
        var g = u((function (e, t, r, o, a, i) {
                var c = Object(n["G"])("nav-bar-icon"), g = Object(n["G"])("van-popover"),
                    p = Object(n["G"])("van-nav-bar"), A = Object(n["G"])("router-view"),
                    h = Object(n["G"])("van-tabbar-item"), m = Object(n["G"])("van-tabbar");
                return Object(n["z"])(), Object(n["g"])("div", s, [Object(n["R"])(Object(n["j"])(p, {
                    class: "nav-bar",
                    fixed: "",
                    placeholder: "",
                    title: e.title,
                    onClickLeft: e.handleClickLeft,
                    onClickRight: e.handleClickRight
                }, {
                    left: u((function () {
                        return ["Home" === e.$route.name ? (Object(n["z"])(), Object(n["g"])(c, {
                            key: 0,
                            name: "search"
                        })) : Object(n["h"])("", !0)]
                    })), right: u((function () {
                        return ["Home" === e.$route.name ? (Object(n["z"])(), Object(n["g"])(g, {
                            key: 0,
                            show: e.showUploadPopover,
                            "onUpdate:show": t[1] || (t[1] = function (t) {
                                return e.showUploadPopover = t
                            }),
                            placement: "bottom-end",
                            theme: "dark",
                            actions: [{text: "发布视频", icon: "play-circle-o"}],
                            onSelect: e.handleUploadVideo
                        }, {
                            reference: u((function () {
                                return [Object(n["j"])(c, {name: "add"})]
                            })), _: 1
                        }, 8, ["show", "onSelect"])) : Object(n["h"])("", !0), "Personal" === e.$route.name && e.isLoggedIn ? (Object(n["z"])(), Object(n["g"])(c, {
                            key: 1,
                            name: "log-out"
                        })) : Object(n["h"])("", !0)]
                    })), _: 1
                }, 8, ["title", "onClickLeft", "onClickRight"]), [[n["O"], e.hasHeader]]), Object(n["j"])(A, null, {
                    default: u((function (e) {
                        var t = e.Component;
                        return [(Object(n["z"])(), Object(n["g"])(n["b"], null, [(Object(n["z"])(), Object(n["g"])(Object(n["I"])(t)))], 1024))]
                    })), _: 1
                }), Object(n["R"])(Object(n["j"])(m, {
                    class: "tabbar",
                    fixed: "",
                    placeholder: "",
                    route: "",
                    "active-color": "#07c160",
                    "inactive-color": "#000"
                }, {
                    default: u((function () {
                        return [Object(n["j"])(h, {
                            replace: "",
                            to: {name: "Home"},
                            icon: "home-o"
                        }, {
                            default: u((function () {
                                return [d]
                            })), _: 1
                        }), Object(n["j"])(h, {
                            replace: "",
                            to: {name: "Category"},
                            icon: "apps-o"
                        }, {
                            default: u((function () {
                                return [l]
                            })), _: 1
                        }), Object(n["j"])(h, {
                            replace: "",
                            to: {name: "Personal"},
                            icon: "contact"
                        }, {
                            default: u((function () {
                                return [f]
                            })), _: 1
                        })]
                    })), _: 1
                }, 512), [[n["O"], e.hasTabbar]])])
            })), p = (r("96cf"), r("1da1")), A = (r("d82d"), r("7278")), h = (r("a52c"), r("2ed4")),
            m = (r("537a"), r("ac28")), b = (r("5246"), r("6b41")), I = r("2af5"), v = r("0613"), C = r("5849"),
            E = r("ea9b"), k = Object(n["k"])({
                components: {
                    VanNavBar: b["a"],
                    VanTabbar: m["b"],
                    VanTabbarItem: h["a"],
                    VanPopover: A["a"],
                    NavBarIcon: I["a"]
                }, setup: function () {
                    var e = Object(C["a"])(), t = e.token;
                    return {token: t}
                }, data: function () {
                    return {showUploadPopover: !1}
                }, computed: {
                    title: function () {
                        return this.$route.meta.title || ""
                    }, hasHeader: function () {
                        return this.$route.meta.header
                    }, hasTabbar: function () {
                        return this.$route.meta.tabbar
                    }, isLoggedIn: function () {
                        return "" !== this.token
                    }
                }, methods: {
                    handleClickRight: function () {
                        switch (this.$route.name) {
                            case"Home":
                                this.showUploadPopover = !0;
                                break;
                            case"Personal":
                                this.handleLogOut();
                                break
                        }
                    }, handleUploadVideo: function () {
                        this.$router.push({name: "UploadVideo"})
                    }, handleClickLeft: function () {
                        this.$router.push({name: "Search"})
                    }, handleLogOut: function () {
                        return Object(p["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(E["e"])();
                                    case 2:
                                        return e.next = 4, v["a"].dispatch("user/setToken", "");
                                    case 4:
                                        return e.next = 6, v["a"].dispatch("user/cleanPersonal");
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            });
        r("5458");
        k.render = g, k.__scopeId = "data-v-6efe1080";
        var O = k, Q = [{
            path: "/login", name: "Login", component: function () {
                return r.e("login").then(r.bind(null, "a55b"))
            }
        }, {
            path: "/", component: O, children: [{
                path: "", name: "Home", component: function () {
                    return r.e("home").then(r.bind(null, "bb51"))
                }, meta: {header: !0, tabbar: !0, title: "首页"}
            }]
        }, {
            path: "/category", component: O, children: [{
                path: "", name: "Category", component: function () {
                    return r.e("category").then(r.bind(null, "a28e"))
                }, meta: {header: !0, tabbar: !0, title: "分类"}
            }]
        }, {
            path: "/categorized-videos", name: "CategorizedVideos", component: function () {
                return r.e("categorized-videos").then(r.bind(null, "7dc6"))
            }, props: function (e) {
                return {category_id: e.query.category}
            }
        }, {
            path: "/personal", component: O, children: [{
                path: "", name: "Personal", component: function () {
                    return r.e("personal").then(r.bind(null, "20a6"))
                }, meta: {header: !0, tabbar: !0, title: "我的"}
            }]
        }, {
            path: "/personal/edit", name: "EditPersonal", component: function () {
                return Promise.all([r.e("personal-edit~search~upload-video~video"), r.e("personal-edit")]).then(r.bind(null, "ebfe"))
            }
        }, {
            path: "/personal/history", name: "History", component: function () {
                return r.e("history").then(r.bind(null, "6018"))
            }
        }, {
            path: "/personal/favorite", name: "Favorite", component: function () {
                return r.e("favorite").then(r.bind(null, "1e80"))
            }
        }, {
            path: "/upload-video", name: "UploadVideo", component: function () {
                return Promise.all([r.e("personal-edit~search~upload-video~video"), r.e("upload-video")]).then(r.bind(null, "0b40"))
            }
        }, {
            path: "/videos/:video_id", name: "Video", component: function () {
                return Promise.all([r.e("personal-edit~search~upload-video~video"), r.e("search~video"), r.e("video")]).then(r.bind(null, "4aa1"))
            }, props: function (e) {
                return {videoID: e.params.video_id}
            }
        }, {
            path: "/search", name: "Search", component: function () {
                return Promise.all([r.e("personal-edit~search~upload-video~video"), r.e("search~video"), r.e("search")]).then(r.bind(null, "2d3b"))
            }
        }, {
            path: "/user/:id", name: "User", component: function () {
                return r.e("user").then(r.bind(null, "1511"))
            }, props: function (e) {
                return {userID: e.params.id}
            }
        }], S = Object(c["a"])({history: Object(c["b"])(), routes: Q}), y = S;
        Object(n["f"])(i).use(v["a"]).use(y).mount("#app")
    }, e9e8: function (e, t, r) {
        var n = {"./user.ts": "9dba"};

        function o(e) {
            var t = a(e);
            return r(t)
        }

        function a(e) {
            if (!r.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }

        o.keys = function () {
            return Object.keys(n)
        }, o.resolve = a, e.exports = o, o.id = "e9e8"
    }, ea9b: function (e, t, r) {
        "use strict";
        r.d(t, "f", (function () {
            return o
        })), r.d(t, "e", (function () {
            return a
        })), r.d(t, "a", (function () {
            return i
        })), r.d(t, "b", (function () {
            return c
        })), r.d(t, "g", (function () {
            return u
        })), r.d(t, "d", (function () {
            return s
        })), r.d(t, "c", (function () {
            return d
        }));
        var n = r("f977");

        function o(e) {
            return Object(n["a"])({url: "/tokens", method: "POST", data: e})
        }

        function a() {
            return Object(n["a"])({url: "/tokens", method: "DELETE"})
        }

        function i() {
            return Object(n["a"])({url: "/user"})
        }

        function c(e) {
            return Object(n["a"])({url: "/users/".concat(e)})
        }

        function u(e) {
            return Object(n["a"])({method: "PATCH", url: "/user", data: e})
        }

        function s(e) {
            return Object(n["a"])({method: "GET", url: "/user/played", params: e})
        }

        function d(e) {
            return Object(n["a"])({method: "GET", url: "/user/favorites", params: e})
        }
    }, f977: function (e, t, r) {
        "use strict";
        r("d3b7"), r("2ca0"), r("e7e5");
        var n = r("d399"), o = r("bc3a"), a = r.n(o), i = r("0613");
        n["a"].allowMultiple(!0);
        var c = a.a.create({
            baseURL: window.CONFIG.axiosBaseUrl, timeout: 5e3, validateStatus: function () {
                return !0
            }
        });
        c.interceptors.request.use((function (e) {
            return "" !== i["a"].state.user.token && (e.params = e.params || {}, e.params.token = i["a"].state.user.token), e
        }), (function (e) {
            return Promise.reject(e)
        })), c.interceptors.response.use((function (e) {
            var t = e.data;
            if (e.status >= 500 && !t.err_msg) return Promise.reject(new Error(e.statusText));
            if (t.err_msg) {
                var r = t;
                if ("提示: 无效token!" === r.err_msg) {
                    i["a"].dispatch("user/setToken", "").then(), i["a"].dispatch("user/cleanPersonal").then();
                    var o = "身份验证已过期,请重新登录";
                    return n["a"].fail(o), Promise.reject(new Error(o))
                }
                return n["a"].fail(r.err_msg), Promise.reject(new Error(r.err_msg))
            }
            return e
        }), (function (e) {
            if (e.message) {
                var t = e.message;
                t.startsWith("timeout of") && n["a"].fail("请求超时"), t.startsWith("Network Error") && n["a"].fail("网络异常")
            }
            return Promise.reject(e)
        })), t["a"] = c
    }
});