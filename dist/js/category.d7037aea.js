// (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category"], {
//     "09fe": function (e, t, n) {
//     }, "14d3": function (e, t, n) {
//         "use strict";
//         n.d(t, "b", (function () {
//             return a
//         })), n.d(t, "a", (function () {
//             return c
//         }));
//         var r = n("f977");
//
//         function a() {
//             return Object(r["a"])({url: "/categories"})
//         }
//
//         function c(e) {
//             return Object(r["a"])({url: "/categories/".concat(e)})
//         }
//     }, 4056: function (e, t, n) {
//         "use strict";
//         n("68ef"), n("cb51"), n("3743"), n("09fe")
//     }, "44bf": function (e, t, n) {
//         "use strict";
//         var r = n("3835"), a = n("7a23"), c = n("d282"), i = n("db17"), o = n("ea8e"), u = n("ad06"),
//             l = Object(c["a"])("image"), s = Object(r["a"])(l, 2), d = s[0], f = s[1];
//         t["a"] = d({
//             props: {
//                 src: String,
//                 alt: String,
//                 fit: String,
//                 round: Boolean,
//                 width: [Number, String],
//                 height: [Number, String],
//                 radius: [Number, String],
//                 lazyLoad: Boolean,
//                 iconPrefix: String,
//                 showError: {type: Boolean, default: !0},
//                 showLoading: {type: Boolean, default: !0},
//                 errorIcon: {type: String, default: "photo-fail"},
//                 loadingIcon: {type: String, default: "photo"}
//             }, emits: ["load", "error"], setup: function (e, t) {
//                 var n = t.emit, r = t.slots, c = Object(a["E"])(!1), l = Object(a["E"])(!0), s = Object(a["E"])(),
//                     d = Object(a["e"])((function () {
//                         var t = {};
//                         return Object(i["c"])(e.width) && (t.width = Object(o["a"])(e.width)), Object(i["c"])(e.height) && (t.height = Object(o["a"])(e.height)), Object(i["c"])(e.radius) && (t.overflow = "hidden", t.borderRadius = Object(o["a"])(e.radius)), t
//                     }));
//                 Object(a["P"])((function () {
//                     return e.src
//                 }), (function () {
//                     c.value = !1, l.value = !0
//                 }));
//                 var g = function (e) {
//                     l.value = !1, n("load", e)
//                 }, b = function (e) {
//                     c.value = !0, l.value = !1, n("error", e)
//                 }, j = function () {
//                     return r.loading ? r.loading() : Object(a["j"])(u["a"], {
//                         name: e.loadingIcon,
//                         class: f("loading-icon"),
//                         classPrefix: e.iconPrefix
//                     }, null)
//                 }, h = function () {
//                     return r.error ? r.error() : Object(a["j"])(u["a"], {
//                         name: e.errorIcon,
//                         class: f("error-icon"),
//                         classPrefix: e.iconPrefix
//                     }, null)
//                 }, v = function () {
//                     return l.value && e.showLoading && i["b"] ? Object(a["j"])("div", {class: f("loading")}, [j()]) : c.value && e.showError ? Object(a["j"])("div", {class: f("error")}, [h()]) : void 0
//                 }, O = function () {
//                     if (!c.value && e.src) {
//                         var t = {alt: e.alt, class: f("img"), style: {objectFit: e.fit}};
//                         return e.lazyLoad ? Object(a["R"])(Object(a["j"])("img", Object(a["p"])({ref: s}, t), null), [[Object(a["H"])("lazy"), e.src]]) : Object(a["j"])("img", Object(a["p"])({
//                             src: e.src,
//                             onLoad: g,
//                             onError: b
//                         }, t), null)
//                     }
//                 };
//                 return function () {
//                     var t;
//                     return Object(a["j"])("div", {
//                         class: f({round: e.round}),
//                         style: d.value
//                     }, [O(), v(), null === (t = r.default) || void 0 === t ? void 0 : t.call(r)])
//                 }
//             }
//         })
//     }, "4de4": function (e, t, n) {
//         "use strict";
//         var r = n("23e7"), a = n("b727").filter, c = n("1dde"), i = n("ae40"), o = c("filter"), u = i("filter");
//         r({target: "Array", proto: !0, forced: !o || !u}, {
//             filter: function (e) {
//                 return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
//             }
//         })
//     }, "79c7": function (e, t, n) {
//     }, "7b0a": function (e, t, n) {
//     }, a164: function (e, t, n) {
//         "use strict";
//         n("79c7")
//     }, a28e: function (e, t, n) {
//         "use strict";
//         n.r(t);
//         var r = n("7a23"), a = Object(r["T"])("data-v-08e83d6b");
//         Object(r["C"])("data-v-08e83d6b");
//         var c = {class: "container"};
//         Object(r["A"])();
//         var i = a((function (e, t, n, a, i, o) {
//             var u = Object(r["G"])("category-selector");
//             return Object(r["z"])(), Object(r["g"])("div", c, [Object(r["j"])(u, {onChange: e.handleCategoryChange}, null, 8, ["onChange"])])
//         })), o = (n("b0c0"), Object(r["T"])("data-v-e829ce7c"));
//         Object(r["C"])("data-v-e829ce7c");
//         var u = {class: "container"};
//         Object(r["A"])();
//         var l = o((function (e, t, a, c, i, l) {
//                 var s = Object(r["G"])("van-col"), d = Object(r["G"])("van-image"), f = Object(r["G"])("van-row");
//                 return Object(r["z"])(), Object(r["g"])("div", u, [Object(r["j"])(f, {
//                     style: {
//                         height: "100%",
//                         width: "100%"
//                     }
//                 }, {
//                     default: o((function () {
//                         return [Object(r["j"])(s, {span: "8", class: "categories-wrapper"}, {
//                             default: o((function () {
//                                 return [(Object(r["z"])(!0), Object(r["g"])(r["a"], null, Object(r["F"])(e.categories, (function (t) {
//                                     return Object(r["z"])(), Object(r["g"])("div", {
//                                         key: t.id,
//                                         class: ["category-tab", {selected: e.isSelected(t)}],
//                                         onClick: function (n) {
//                                             return e.handleCategoryChange(t)
//                                         }
//                                     }, Object(r["K"])(t.name), 11, ["onClick"])
//                                 })), 128))]
//                             })), _: 1
//                         }), Object(r["j"])(s, {span: "16", class: "sub-categories-wrapper"}, {
//                             default: o((function () {
//                                 return [(Object(r["z"])(!0), Object(r["g"])(r["a"], null, Object(r["F"])(e.subCategories, (function (t) {
//                                     return Object(r["z"])(), Object(r["g"])("div", {
//                                         key: t.id,
//                                         class: "sub-categories-cell",
//                                         onClick: function (n) {
//                                             return e.handleSubCategoryChange(t)
//                                         }
//                                     }, [Object(r["j"])(d, {
//                                         fit: "cover",
//                                         src: n("f0cd"),
//                                         class: "sub-categories-icon"
//                                     }, null, 8, ["src"]), Object(r["j"])("span", null, Object(r["K"])(t.name), 1)], 8, ["onClick"])
//                                 })), 128))]
//                             })), _: 1
//                         })]
//                     })), _: 1
//                 })])
//             })), s = (n("4de4"), n("96cf"), n("1da1")), d = (n("4056"), n("44bf")), f = (n("68ef"), n("bf60"), n("ade3")),
//             g = n("3835"), b = n("d282"), j = n("89b0"), h = Object(b["a"])("row"), v = Object(g["a"])(h, 2), O = v[0],
//             p = v[1], y = "vanRow", C = O({
//                 props: {
//                     align: String,
//                     justify: String,
//                     tag: {type: String, default: "div"},
//                     gutter: {type: [Number, String], default: 0}
//                 }, setup: function (e, t) {
//                     var n = t.slots, a = Object(j["a"])(y), c = a.children, i = a.linkChildren,
//                         o = Object(r["e"])((function () {
//                             var e = [[]], t = 0;
//                             return c.forEach((function (n, r) {
//                                 t += Number(n.span), t > 24 ? (e.push([r]), t -= 24) : e[e.length - 1].push(r)
//                             })), e
//                         })), u = Object(r["e"])((function () {
//                             var t = Number(e.gutter), n = [];
//                             return t ? (o.value.forEach((function (e) {
//                                 var r = t * (e.length - 1) / e.length;
//                                 e.forEach((function (e, a) {
//                                     if (0 === a) n.push({right: r}); else {
//                                         var c = t - n[e - 1].right, i = r - c;
//                                         n.push({left: c, right: i})
//                                     }
//                                 }))
//                             })), n) : n
//                         }));
//                     return i({spaces: u}), function () {
//                         var t, a, c = e.tag, i = e.align, o = e.justify;
//                         return Object(r["j"])(c, {class: p((t = {}, Object(f["a"])(t, "align-".concat(i), i), Object(f["a"])(t, "justify-".concat(o), o), t))}, {
//                             default: function () {
//                                 return [null === (a = n.default) || void 0 === a ? void 0 : a.call(n)]
//                             }
//                         })
//                     }
//                 }
//             }), m = (n("7b0a"), n("8579")), w = Object(b["a"])("col"), S = Object(g["a"])(w, 2), k = S[0], x = S[1], z = k({
//                 props: {
//                     offset: [Number, String],
//                     tag: {type: String, default: "div"},
//                     span: {type: [Number, String], default: 0}
//                 }, setup: function (e, t) {
//                     var n = t.slots, a = Object(m["a"])(y), c = a.parent, i = a.index, o = Object(r["e"])((function () {
//                         if (c) {
//                             var e = c.spaces;
//                             if (e && e.value && e.value[i.value]) {
//                                 var t = e.value[i.value], n = t.left, r = t.right;
//                                 return {
//                                     paddingLeft: n ? "".concat(n, "px") : null,
//                                     paddingRight: r ? "".concat(r, "px") : null
//                                 }
//                             }
//                         }
//                     }));
//                     return function () {
//                         var t, a, c = e.tag, i = e.span, u = e.offset;
//                         return Object(r["j"])(c, {
//                             style: o.value,
//                             class: x((t = {}, Object(f["a"])(t, i, i), Object(f["a"])(t, "offset-".concat(u), u), t))
//                         }, {
//                             default: function () {
//                                 return [null === (a = n.default) || void 0 === a ? void 0 : a.call(n)]
//                             }
//                         })
//                     }
//                 }
//             }), E = n("14d3"), R = Object(r["k"])({
//                 name: "CategorySelector", components: {VanCol: z, VanRow: C, VanImage: d["a"]}, data: function () {
//                     return {rawCategories: [], selectedCategory: null}
//                 }, created: function () {
//                     var e = this;
//                     return Object(s["a"])(regeneratorRuntime.mark((function t() {
//                         return regeneratorRuntime.wrap((function (t) {
//                             while (1) switch (t.prev = t.next) {
//                                 case 0:
//                                     return t.next = 2, e.getCategories();
//                                 case 2:
//                                     e.categories.length > 0 && (e.selectedCategory = e.categories[0]);
//                                 case 3:
//                                 case"end":
//                                     return t.stop()
//                             }
//                         }), t)
//                     })))()
//                 }, computed: {
//                     categories: function () {
//                         return this.rawCategories.filter((function (e) {
//                             return null != e.children && e.children.length > 0
//                         }))
//                     }, subCategories: function () {
//                         return null != this.selectedCategory && null != this.selectedCategory.children ? this.selectedCategory.children : []
//                     }
//                 }, methods: {
//                     getCategories: function () {
//                         var e = this;
//                         return Object(s["a"])(regeneratorRuntime.mark((function t() {
//                             var n;
//                             return regeneratorRuntime.wrap((function (t) {
//                                 while (1) switch (t.prev = t.next) {
//                                     case 0:
//                                         return t.prev = 0, t.next = 3, Object(E["b"])();
//                                     case 3:
//                                         n = t.sent, t.next = 9;
//                                         break;
//                                     case 6:
//                                         return t.prev = 6, t.t0 = t["catch"](0), t.abrupt("return");
//                                     case 9:
//                                         e.rawCategories = n.data;
//                                     case 10:
//                                     case"end":
//                                         return t.stop()
//                                 }
//                             }), t, null, [[0, 6]])
//                         })))()
//                     }, handleCategoryChange: function (e) {
//                         this.selectedCategory = e
//                     }, handleSubCategoryChange: function (e) {
//                         this.$emit("change", e)
//                     }, isSelected: function (e) {
//                         return null != this.selectedCategory && this.selectedCategory.id === e.id
//                     }
//                 }
//             });
//         n("a73d");
//         R.render = l, R.__scopeId = "data-v-e829ce7c";
//         var N = R, I = Object(r["k"])({
//             components: {CategorySelector: N},
//             name: "Category",
//             methods: {
//                 handleCategoryChange: function (e) {
//                     this.$router.push({name: "CategorizedVideos", query: {category: e.id}})
//                 }
//             }
//         });
//         n("a164");
//         I.render = i, I.__scopeId = "data-v-08e83d6b";
//         t["default"] = I
//     }, a73d: function (e, t, n) {
//         "use strict";
//         n("b90a")
//     }, b90a: function (e, t, n) {
//     }, bf60: function (e, t, n) {
//     }, f0cd: function (e, t, n) {
//         e.exports = n.p + "img/default-cover.322c00ef.png"
//     }
// }]);