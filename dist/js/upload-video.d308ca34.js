(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-video"], {
    "02de": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var o = n("7a23");

        function a(e) {
            var t = Object(o["M"])(e);
            if (!t) return !1;
            var n = window.getComputedStyle(t), a = "none" === n.display,
                r = null === t.offsetParent && "fixed" !== n.position;
            return a || r
        }
    }, "0b40": function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n("7a23"), a = {class: "container"};

        function r(e, t, n, r, i, c) {
            var u = Object(o["G"])("van-nav-bar"), l = Object(o["G"])("van-field"), s = Object(o["G"])("van-uploader"),
                f = Object(o["G"])("van-picker"), d = Object(o["G"])("van-popup"), v = Object(o["G"])("van-form");
            return Object(o["z"])(), Object(o["g"])("div", a, [Object(o["j"])(u, {
                title: "发布视频",
                "left-text": "返回",
                "right-text": "发布",
                onClickLeft: e.handleBack,
                onClickRight: e.handleSubmitClick
            }, null, 8, ["onClickLeft", "onClickRight"]), Object(o["j"])(v, {
                ref: "formComponent",
                onSubmit: e.handleSubmit
            }, {
                default: Object(o["Q"])((function () {
                    return [Object(o["j"])(l, {
                        modelValue: e.form.intro,
                        "onUpdate:modelValue": t[1] || (t[1] = function (t) {
                            return e.form.intro = t
                        }),
                        name: "视频简介",
                        placeholder: "视频简介..."
                    }, null, 8, ["modelValue"]), Object(o["j"])(l, {
                        name: "video", rules: [{
                            validator: function (e) {
                                return 0 !== e.length
                            }, message: "请选择视频", trigger: "onChange"
                        }]
                    }, {
                        input: Object(o["Q"])((function () {
                            return [Object(o["j"])(s, {
                                modelValue: e.videoUploader.files,
                                "onUpdate:modelValue": t[2] || (t[2] = function (t) {
                                    return e.videoUploader.files = t
                                }),
                                "before-read": e.handleUploaderBeforeRead,
                                accept: "video/*",
                                "preview-size": "120px",
                                "max-count": 1
                            }, null, 8, ["modelValue", "before-read"])]
                        })), _: 1
                    }, 8, ["rules"]), Object(o["j"])(l, {
                        modelValue: e.form.title,
                        "onUpdate:modelValue": t[3] || (t[3] = function (t) {
                            return e.form.title = t
                        }),
                        type: "text",
                        name: "标题",
                        label: "标题",
                        placeholder: "请输入视频标题(不少于5个字)",
                        rules: [{
                            validator: function (e) {
                                return 5 <= e.length
                            }, message: "视频标题不少于5个字"
                        }]
                    },
                    //     null, 8, ["modelValue", "rules"]), Object(o["j"])(l, {
                    //     readonly: "",
                    //     clickable: "",
                    //     name: "分类",
                    //     modelValue: e.selectedCategoryText,
                    //     label: "分类",
                    //     placeholder: "选择视频分类",
                    //     onClick: t[4] || (t[4] = function (t) {
                    //         return e.categoryPicker.show = !0
                    //     }),
                    //     rules: [{
                    //         validator: function (e) {
                    //             return 0 !== e.length
                    //         }, message: "请选择视频分类", trigger: "onChange"
                    //     }]
                    // },
                        null, 8, ["modelValue", "rules"]), Object(o["j"])(d, {
                        show: e.categoryPicker.show,
                        "onUpdate:show": t[6] || (t[6] = function (t) {
                            return e.categoryPicker.show = t
                        }),
                        position: "bottom"
                    },
                    {
                        default: Object(o["Q"])((function () {
                            return [Object(o["j"])(f, {
                                "value-key": "name",
                                columns: e.categoryPicker.categories,
                                onConfirm: e.handleCategoryPickerConfirm,
                                onCancel: t[5] || (t[5] = function (t) {
                                    return e.categoryPicker.show = !1
                                })
                            }, null, 8, ["columns", "onConfirm"])]
                        })), _: 1
                    }, 8, ["show"])]
                })), _: 1
            }, 8, ["onSubmit"])])
        }

        n("b0c0"), n("d3b7"), n("25f0"), n("2ca0"), n("e7e5");
        var i = n("d399"), c = (n("96cf"), n("1da1")), u = (n("68ef"), n("e3b3"), n("a526"), n("ade3")), l = n("3835"),
            s = "vanPicker", f = {
                title: String,
                loading: Boolean,
                readonly: Boolean,
                allowHtml: Boolean,
                cancelButtonText: String,
                confirmButtonText: String,
                itemHeight: {type: [Number, String], default: 44},
                showToolbar: {type: Boolean, default: !0},
                visibleItemCount: {type: [Number, String], default: 6},
                swipeDuration: {type: [Number, String], default: 1e3}
            }, d = n("d282"), v = n("ea8e"), b = n("1325"), p = n("b1d2"), m = n("89b0"), j = n("4eda"), h = n("543e"),
            O = n("53ca"), g = n("1128");

        function w(e) {
            return Array.isArray(e) ? e.map((function (e) {
                return w(e)
            })) : "object" === Object(O["a"])(e) ? Object(g["a"])({}, e) : e
        }

        var y = n("db17"), x = n("482d"), P = n("8579"), S = n("cdd8"), C = 200, k = 300, D = 15,
            E = Object(d["a"])("picker-column"), T = Object(l["a"])(E, 2), I = T[0], V = T[1];

        function z(e) {
            var t = window.getComputedStyle(e), n = t.transform || t.webkitTransform,
                o = n.slice(7, n.length - 1).split(", ")[5];
            return Number(o)
        }

        function N(e) {
            return Object(y["e"])(e) && e.disabled
        }

        var B = I({
            props: {
                valueKey: String,
                readonly: Boolean,
                allowHtml: Boolean,
                className: String,
                itemHeight: Number,
                defaultIndex: Number,
                swipeDuration: [Number, String],
                visibleItemCount: [Number, String],
                initialOptions: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, emits: ["change"], setup: function (e, t) {
                var n, a, r, i, c, l = t.emit, f = t.slots, d = Object(o["E"])(),
                    v = Object(o["D"])({index: e.defaultIndex, offset: 0, duration: 0, options: w(e.initialOptions)}),
                    p = Object(S["a"])(), m = function () {
                        return v.options.length
                    }, h = function () {
                        return e.itemHeight * (e.visibleItemCount - 1) / 2
                    }, O = function (e) {
                        e = Object(x["b"])(e, 0, m());
                        for (var t = e; t < m(); t++) if (!N(v.options[t])) return t;
                        for (var n = e - 1; n >= 0; n--) if (!N(v.options[n])) return n
                    }, g = function (t, o) {
                        t = O(t) || 0;
                        var a = -t * e.itemHeight, r = function () {
                            t !== v.index && (v.index = t, o && l("change", t))
                        };
                        n && a !== v.offset ? c = r : r(), v.offset = a
                    }, E = function (t) {
                        JSON.stringify(t) !== JSON.stringify(v.options) && (v.options = w(t), g(e.defaultIndex))
                    }, T = function (t) {
                        n || e.readonly || (c = null, v.duration = C, g(t, !0))
                    }, I = function (t) {
                        return Object(y["e"])(t) && e.valueKey in t ? t[e.valueKey] : t
                    }, B = function (t) {
                        return Object(x["b"])(Math.round(-t / e.itemHeight), 0, m() - 1)
                    }, H = function (t, n) {
                        var o = Math.abs(t / n);
                        t = v.offset + o / .003 * (t < 0 ? -1 : 1);
                        var a = B(t);
                        v.duration = +e.swipeDuration, g(a, !0)
                    }, R = function () {
                        n = !1, v.duration = 0, c && (c(), c = null)
                    }, X = function (t) {
                        if (!e.readonly) {
                            if (p.start(t), n) {
                                var o = z(d.value);
                                v.offset = Math.min(0, o - h()), a = v.offset
                            } else a = v.offset;
                            v.duration = 0, r = Date.now(), i = a, c = null
                        }
                    }, U = function (t) {
                        if (!e.readonly) {
                            p.move(t), p.isVertical() && (n = !0, Object(b["a"])(t, !0)), v.offset = Object(x["b"])(a + p.deltaY.value, -m() * e.itemHeight, e.itemHeight);
                            var o = Date.now();
                            o - r > k && (r = o, i = v.offset)
                        }
                    }, A = function () {
                        if (!e.readonly) {
                            var t = v.offset - i, o = Date.now() - r, a = o < k && Math.abs(t) > D;
                            if (a) H(t, o); else {
                                var c = B(v.offset);
                                v.duration = C, g(c, !0), setTimeout((function () {
                                    n = !1
                                }), 0)
                            }
                        }
                    }, M = function () {
                        var t = {height: "".concat(e.itemHeight, "px")};
                        return v.options.map((function (n, a) {
                            var r = I(n), i = N(n), c = {
                                role: "button",
                                style: t,
                                tabindex: i ? -1 : 0,
                                class: V("item", {disabled: i, selected: a === v.index}),
                                onClick: function () {
                                    T(a)
                                }
                            }, l = Object(u["a"])({class: "van-ellipsis"}, e.allowHtml ? "innerHTML" : "textContent", r);
                            return Object(o["j"])("li", c, [f.option ? f.option(n) : Object(o["j"])("div", l, null)])
                        }))
                    }, Y = function (e) {
                        for (var t = v.options, n = 0; n < t.length; n++) if (I(t[n]) === e) return g(n)
                    }, F = function () {
                        return v.options[v.index]
                    };
                return g(v.index), Object(P["a"])(s), Object(j["a"])({
                    state: v,
                    setIndex: g,
                    getValue: F,
                    setValue: Y,
                    setOptions: E,
                    stopMomentum: R
                }), Object(o["P"])((function () {
                    return e.initialOptions
                }), E), Object(o["P"])((function () {
                    return e.defaultIndex
                }), (function (e) {
                    g(e)
                })), function () {
                    var t = {
                        transform: "translate3d(0, ".concat(v.offset + h(), "px, 0)"),
                        transitionDuration: "".concat(v.duration, "ms"),
                        transitionProperty: v.duration ? "all" : "none"
                    };
                    return Object(o["j"])("div", {
                        class: [V(), e.className],
                        onTouchstart: X,
                        onTouchmove: U,
                        onTouchend: A,
                        onTouchcancel: A
                    }, [Object(o["j"])("ul", {ref: d, style: t, class: V("wrapper"), onTransitionend: R}, [M()])])
                }
            }
        });

        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function (t) {
                    Object(u["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var X = Object(d["a"])("picker"), U = Object(l["a"])(X, 3), A = U[0], M = U[1], Y = U[2], F = A({
                props: R(R({}, f), {}, {
                    columns: {
                        type: Array, default: function () {
                            return []
                        }
                    },
                    defaultIndex: {type: [Number, String], default: 0},
                    toolbarPosition: {type: String, default: "top"},
                    valueKey: {type: String, default: "text"}
                }), emits: ["confirm", "cancel", "change"], setup: function (e, t) {
                    var n = t.emit, a = t.slots, r = Object(o["E"])([]), i = Object(m["a"])(s), c = i.children,
                        u = i.linkChildren;
                    u();
                    var l = Object(o["e"])((function () {
                        return Object(v["c"])(e.itemHeight)
                    })), f = Object(o["e"])((function () {
                        var t = e.columns, n = t[0] || {};
                        return n.children ? "cascade" : n.values ? "object" : "text"
                    })), d = function () {
                        var t = [], n = {children: e.columns};
                        while (n && n.children) {
                            var o, a = n, i = a.children,
                                c = null !== (o = n.defaultIndex) && void 0 !== o ? o : +e.defaultIndex;
                            while (i[c] && i[c].disabled) {
                                if (!(c < i.length - 1)) {
                                    c = 0;
                                    break
                                }
                                c++
                            }
                            t.push({values: n.children, className: n.className, defaultIndex: c}), n = i[c]
                        }
                        r.value = t
                    }, O = function () {
                        var t = e.columns;
                        "text" === f.value ? r.value = [{values: t}] : "cascade" === f.value ? d() : r.value = t
                    }, g = function () {
                        return c.map((function (e) {
                            return e.state.index
                        }))
                    }, w = function (e, t) {
                        var n = c[e];
                        n && n.setOptions(t)
                    }, y = function (t) {
                        for (var n = {children: e.columns}, o = g(), a = 0; a <= t; a++) n = n.children[o[a]];
                        while (n && n.children) t++, w(t, n.children), n = n.children[n.defaultIndex || 0]
                    }, x = function (e) {
                        return c[e]
                    }, P = function (e) {
                        var t = x(e);
                        return t && t.getValue()
                    }, S = function (e, t) {
                        var n = x(e);
                        n && (n.setValue(t), "cascade" === f.value && y(e))
                    }, C = function (e) {
                        return (x(e) || {}).state.index
                    }, k = function (t, n) {
                        var o = x(t);
                        o && (o.setIndex(n), "cascade" === e.dataType && y(t))
                    }, D = function (e) {
                        return (c[e] || {}).state.options
                    }, E = function () {
                        return c.map((function (e) {
                            return e.getValue()
                        }))
                    }, T = function (e) {
                        e.forEach((function (e, t) {
                            S(t, e)
                        }))
                    }, I = function (e) {
                        e.forEach((function (e, t) {
                            k(t, e)
                        }))
                    }, V = function (e) {
                        "text" === f.value ? n(e, P(0), C(0)) : n(e, E(), g())
                    }, z = function (e) {
                        "cascade" === f.value && y(e), "text" === f.value ? n("change", P(0), C(0)) : n("change", E(), e)
                    }, N = function () {
                        c.forEach((function (e) {
                            return e.stopMomentum()
                        })), V("confirm")
                    }, H = function () {
                        V("cancel")
                    }, R = function () {
                        return a.title ? a.title() : e.title ? Object(o["j"])("div", {class: [M("title"), "van-ellipsis"]}, [e.title]) : void 0
                    }, X = function () {
                        var t = e.cancelButtonText || Y("cancel");
                        return Object(o["j"])("button", {
                            type: "button",
                            class: M("cancel"),
                            onClick: H
                        }, [a.cancel ? a.cancel() : t])
                    }, U = function () {
                        var t = e.confirmButtonText || Y("confirm");
                        return Object(o["j"])("button", {
                            type: "button",
                            class: M("confirm"),
                            onClick: N
                        }, [a.confirm ? a.confirm() : t])
                    }, A = function () {
                        if (e.showToolbar) return Object(o["j"])("div", {class: M("toolbar")}, [a.default ? a.default() : [X(), R(), U()]])
                    }, F = function () {
                        return r.value.map((function (t, n) {
                            var r;
                            return Object(o["j"])(B, {
                                readonly: e.readonly,
                                valueKey: e.valueKey,
                                allowHtml: e.allowHtml,
                                className: t.className,
                                itemHeight: l.value,
                                defaultIndex: null !== (r = t.defaultIndex) && void 0 !== r ? r : +e.defaultIndex,
                                swipeDuration: e.swipeDuration,
                                visibleItemCount: e.visibleItemCount,
                                initialOptions: t.values,
                                onChange: function () {
                                    z(n)
                                }
                            }, {option: a.option})
                        }))
                    }, L = function () {
                        var t = l.value * e.visibleItemCount, n = {height: "".concat(l.value, "px")},
                            a = {height: "".concat(t, "px")}, r = {backgroundSize: "100% ".concat((t - l.value) / 2, "px")};
                        return Object(o["j"])("div", {
                            class: M("columns"),
                            style: a,
                            onTouchmove: b["a"]
                        }, [F(), Object(o["j"])("div", {
                            class: M("mask"),
                            style: r
                        }, null), Object(o["j"])("div", {class: [p["d"], M("frame")], style: n}, null)])
                    };
                    return Object(o["P"])((function () {
                        return e.columns
                    }), O, {immediate: !0}), Object(j["a"])({
                        confirm: N,
                        getValues: E,
                        setValues: T,
                        getIndexes: g,
                        setIndexes: I,
                        getColumnIndex: C,
                        setColumnIndex: k,
                        getColumnValue: P,
                        setColumnValue: S,
                        getColumnValues: D,
                        setColumnValues: w
                    }), function () {
                        var t, n;
                        return Object(o["j"])("div", {class: M()}, ["top" === e.toolbarPosition ? A() : null, e.loading ? Object(o["j"])(h["a"], {class: M("loading")}, null) : null, null === (t = a["columns-top"]) || void 0 === t ? void 0 : t.call(a), L(), null === (n = a["columns-bottom"]) || void 0 === n ? void 0 : n.call(a), "bottom" === e.toolbarPosition ? A() : null])
                    }
                }
            }), L = (n("cb51"), n("3743"), n("a71a"), n("4d75"), n("e41f")),
            W = (n("09fe"), n("1a04"), n("1146"), n("8270"), n("786d"), n("504b"), n("bcd3"), n("2909")),
            Z = Object(d["a"])("uploader"), _ = Object(l["a"])(Z, 2), G = _[0], K = _[1];

        function J(e) {
            return Array.isArray(e) ? e : [e]
        }

        function q(e, t) {
            return new Promise((function (n) {
                if ("file" !== t) {
                    var o = new FileReader;
                    o.onload = function (e) {
                        n(e.target.result)
                    }, "dataUrl" === t ? o.readAsDataURL(e) : "text" === t && o.readAsText(e)
                } else n()
            }))
        }

        function Q(e, t) {
            return J(e).some((function (e) {
                return e.file && e.file.size > t
            }))
        }

        function $(e, t) {
            var n = [], o = [];
            return e.forEach((function (e) {
                e.file && e.file.size > t ? o.push(e) : n.push(e)
            })), {valid: n, invalid: o}
        }

        var ee = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

        function te(e) {
            return ee.test(e)
        }

        function ne(e) {
            return !!e.isImage || (e.file && e.file.type ? 0 === e.file.type.indexOf("image") : e.url ? te(e.url) : !!e.content && 0 === e.content.indexOf("data:image"))
        }

        var oe = n("565f");

        function ae(e) {
            var t = Object(o["n"])(oe["a"], null);
            t && !t.childFieldValue.value && (t.childFieldValue.value = e, Object(o["P"])(e, (function () {
                t.resetValidation(), t.validateWithTrigger("onChange")
            })))
        }

        var re = n("ad06"), ie = n("7e3e"), ce = n("44bf");

        function ue(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ue(Object(n), !0).forEach((function (t) {
                    Object(u["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var se = {
                props: {
                    name: String,
                    item: Object,
                    index: Number,
                    imageFit: String,
                    lazyLoad: Boolean,
                    deletable: Boolean,
                    previewSize: [Number, String],
                    beforeDelete: Function
                }, emits: ["delete", "preview"], setup: function (e, t) {
                    var n = t.emit, a = t.slots, r = function () {
                        var t = e.item, n = t.status, a = t.message;
                        if ("uploading" === n || "failed" === n) {
                            var r = "failed" === n ? Object(o["j"])(re["a"], {
                                    name: "close",
                                    class: K("mask-icon")
                                }, null) : Object(o["j"])(h["a"], {class: K("loading")}, null),
                                i = Object(y["c"])(a) && "" !== a;
                            return Object(o["j"])("div", {class: K("mask")}, [r, i && Object(o["j"])("div", {class: K("mask-message")}, [a])])
                        }
                    }, i = function (t) {
                        var o = e.name, a = e.item, r = e.index, i = e.beforeDelete;
                        t.stopPropagation(), Object(ie["a"])({
                            interceptor: i,
                            args: [a, {name: o, index: r}],
                            done: function () {
                                n("delete")
                            }
                        })
                    }, c = function () {
                        n("preview")
                    }, u = function () {
                        if (e.deletable && "uploading" !== e.item.status) return Object(o["j"])("div", {
                            class: K("preview-delete"),
                            onClick: i
                        }, [Object(o["j"])(re["a"], {name: "cross", class: K("preview-delete-icon")}, null)])
                    }, l = function () {
                        if (a["preview-cover"]) {
                            var t = e.index, n = e.item;
                            return Object(o["j"])("div", {class: K("preview-cover")}, [a["preview-cover"](le({index: t}, n))])
                        }
                    }, s = function () {
                        var t = e.item;
                        return ne(t) ? Object(o["j"])(ce["a"], {
                            fit: e.imageFit,
                            src: t.content || t.url,
                            class: K("preview-image"),
                            width: e.previewSize,
                            height: e.previewSize,
                            lazyLoad: e.lazyLoad,
                            onClick: c
                        }, {
                            default: function () {
                                return [l()]
                            }
                        }) : Object(o["j"])("div", {
                            class: K("file"),
                            style: Object(v["b"])(e.previewSize)
                        }, [Object(o["j"])(re["a"], {
                            class: K("file-icon"),
                            name: "description"
                        }, null), Object(o["j"])("div", {class: [K("file-name"), "van-ellipsis"]}, [t.file ? t.file.name : t.url]), l()])
                    };
                    return function () {
                        return Object(o["j"])("div", {class: K("preview")}, [s(), r(), u()])
                    }
                }
            }, fe = n("1da4"), de = Object(d["a"])("image-preview"), ve = Object(l["a"])(de, 2), be = ve[0], pe = ve[1],
            me = n("5f67"), je = n("5596"), he = n("2bb1");

        function Oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oe(Object(n), !0).forEach((function (t) {
                    Object(u["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function we(e) {
            return Math.sqrt(Math.pow(e[0].clientX - e[1].clientX, 2) + Math.pow(e[0].clientY - e[1].clientY, 2))
        }

        var ye, xe = {
            props: {
                src: String,
                show: Boolean,
                active: Number,
                minZoom: [Number, String],
                maxZoom: [Number, String],
                rootWidth: Number,
                rootHeight: Number
            }, emits: ["scale", "close"], setup: function (e, t) {
                var n, a, r, i, c, u, l = t.emit, s = Object(o["D"])({
                    scale: 1,
                    moveX: 0,
                    moveY: 0,
                    moving: !1,
                    zooming: !1,
                    imageRatio: 0,
                    displayWidth: 0,
                    displayHeight: 0
                }), f = Object(S["a"])(), d = Object(o["e"])((function () {
                    var t = e.rootWidth, n = e.rootHeight, o = n / t;
                    return s.imageRatio > o
                })), v = Object(o["e"])((function () {
                    var e = s.scale, t = s.moveX, n = s.moveY, o = s.moving, a = s.zooming,
                        r = {transitionDuration: a || o ? "0s" : ".3s"};
                    if (1 !== e) {
                        var i = t / e, c = n / e;
                        r.transform = "scale(".concat(e, ", ").concat(e, ") translate(").concat(i, "px, ").concat(c, "px)")
                    }
                    return r
                })), p = Object(o["e"])((function () {
                    if (s.imageRatio) {
                        var t = e.rootWidth, n = e.rootHeight, o = d.value ? n / s.imageRatio : t;
                        return Math.max(0, (s.scale * o - t) / 2)
                    }
                    return 0
                })), m = Object(o["e"])((function () {
                    if (s.imageRatio) {
                        var t = e.rootWidth, n = e.rootHeight, o = d.value ? n : t * s.imageRatio;
                        return Math.max(0, (s.scale * o - n) / 2)
                    }
                    return 0
                })), j = function (t) {
                    s.scale = Object(x["b"])(t, +e.minZoom, +e.maxZoom), l("scale", {scale: s.scale, index: s.active})
                }, O = function () {
                    j(1), s.moveX = 0, s.moveY = 0
                }, g = function () {
                    var e = s.scale > 1 ? 1 : 2;
                    j(e), s.moveX = 0, s.moveY = 0
                }, w = function (e) {
                    var t = e.touches, o = f.offsetX;
                    f.start(e), n = s.moveX, a = s.moveY, u = new Date, s.moving = 1 === t.length && 1 !== s.scale, s.zooming = 2 === t.length && !o.value, s.zooming && (r = s.scale, i = we(e.touches))
                }, y = function (e) {
                    var t = e.touches;
                    if (f.move(e), (s.moving || s.zooming) && Object(b["a"])(e, !0), s.moving) {
                        var o = f.deltaX, c = f.deltaY, u = o.value + n, l = c.value + a;
                        s.moveX = Object(x["b"])(u, -p.value, p.value), s.moveY = Object(x["b"])(l, -m.value, m.value)
                    }
                    if (s.zooming && 2 === t.length) {
                        var d = we(t), v = r * d / i;
                        j(v)
                    }
                }, P = function () {
                    var e = f.offsetX, t = f.offsetY, n = new Date - u, o = 250, a = 10;
                    e.value < a && t.value < a && n < o && (c ? (clearTimeout(c), c = null, g()) : c = setTimeout((function () {
                        l("close"), c = null
                    }), o))
                }, C = function (e) {
                    var t = !1;
                    (s.moving || s.zooming) && (t = !0, s.moving && n === s.moveX && a === s.moveY && (t = !1), e.touches.length || (s.zooming && (s.moveX = Object(x["b"])(s.moveX, -p.value, p.value), s.moveY = Object(x["b"])(s.moveY, -m.value, m.value), s.zooming = !1), s.moving = !1, n = 0, a = 0, r = 1, s.scale < 1 && O())), Object(b["a"])(e, t), P(), f.reset()
                }, k = function (e) {
                    var t = e.target, n = t.naturalWidth, o = t.naturalHeight;
                    s.imageRatio = o / n
                };
                return Object(o["P"])((function () {
                    return e.show
                }), (function (e) {
                    e || O()
                })), function () {
                    var t = {
                        loading: function () {
                            return Object(o["j"])(h["a"], {type: "spinner"}, null)
                        }
                    };
                    return Object(o["j"])(he["a"], {
                        class: pe("swipe-item"),
                        onTouchstart: w,
                        onTouchmove: y,
                        onTouchend: C,
                        onTouchcancel: C
                    }, {
                        default: function () {
                            return [Object(o["j"])(ce["a"], {
                                src: e.src,
                                fit: "contain",
                                class: pe("image", {vertical: d.value}),
                                style: v.value,
                                onLoad: k
                            }, ge({}, t))]
                        }
                    })
                }
            }
        }, Pe = be({
            props: {
                show: Boolean,
                className: null,
                closeable: Boolean,
                beforeClose: Function,
                showIndicators: Boolean,
                images: {
                    type: Array, default: function () {
                        return []
                    }
                },
                loop: {type: Boolean, default: !0},
                overlay: {type: Boolean, default: !0},
                minZoom: {type: [Number, String], default: 1 / 3},
                maxZoom: {type: [Number, String], default: 3},
                showIndex: {type: Boolean, default: !0},
                swipeDuration: {type: [Number, String], default: 500},
                startPosition: {type: [Number, String], default: 0},
                closeIcon: {type: String, default: "clear"},
                closeOnPopstate: {type: Boolean, default: !0},
                closeIconPosition: {type: String, default: "top-right"}
            }, emits: ["scale", "close", "closed", "change", "update:show"], setup: function (e, t) {
                var n = t.emit, a = t.slots, r = Object(o["E"])(), i = Object(me["a"])(),
                    c = Object(o["D"])({active: 0, rootWidth: 0, rootHeight: 0}), u = function () {
                        if (r.value) {
                            var e = r.value.$el.getBoundingClientRect();
                            c.rootWidth = e.width, c.rootHeight = e.height
                        }
                    }, l = function (e) {
                        n("scale", e)
                    }, s = function () {
                        Object(ie["a"])({
                            interceptor: e.beforeClose, args: [c.active], done: function () {
                                n("update:show", !1)
                            }
                        })
                    }, f = function (e) {
                        e !== c.active && (c.active = e, n("change", e))
                    }, d = function () {
                        if (e.showIndex) return Object(o["j"])("div", {class: pe("index")}, [a.index ? a.index({index: c.active}) : "".concat(c.active + 1, " / ").concat(e.images.length)])
                    }, v = function () {
                        if (a.cover) return Object(o["j"])("div", {class: pe("cover")}, [a.cover()])
                    }, b = function () {
                        return Object(o["j"])(je["b"], {
                            ref: r,
                            lazyRender: !0,
                            loop: e.loop,
                            class: pe("swipe"),
                            duration: e.swipeDuration,
                            initialSwipe: e.startPosition,
                            showIndicators: e.showIndicators,
                            indicatorColor: "white",
                            onChange: f
                        }, {
                            default: function () {
                                return [e.images.map((function (t) {
                                    return Object(o["j"])(xe, {
                                        src: t,
                                        show: e.show,
                                        active: c.active,
                                        maxZoom: e.maxZoom,
                                        minZoom: e.minZoom,
                                        rootWidth: c.rootWidth,
                                        rootHeight: c.rootHeight,
                                        onScale: l,
                                        onClose: s
                                    }, null)
                                }))]
                            }
                        })
                    }, p = function () {
                        if (e.closeable) return Object(o["j"])(re["a"], {
                            role: "button",
                            name: e.closeIcon,
                            class: pe("close-icon", e.closeIconPosition),
                            onClick: s
                        }, null)
                    }, m = function () {
                        n("closed")
                    }, h = function (e, t) {
                        r.value && r.value.swipeTo(e, t)
                    };
                return Object(j["a"])({swipeTo: h}), Object(o["w"])(u), Object(o["P"])([i.width, i.height], u), Object(o["P"])((function () {
                    return e.startPosition
                }), f), Object(o["P"])((function () {
                    return e.show
                }), (function (t) {
                    var a = e.images, r = e.startPosition;
                    t ? (f(+r), Object(o["q"])((function () {
                        u(), h(+r, {immediate: !0})
                    }))) : n("close", {index: c.active, url: a[c.active]})
                })), function () {
                    return Object(o["j"])(L["a"], {
                        show: e.show,
                        class: [pe(), e.className],
                        overlayClass: pe("overlay"),
                        closeOnPopstate: e.closeOnPopstate,
                        onClosed: m
                    }, {
                        default: function () {
                            return [p(), b(), d(), v()]
                        }
                    })
                }
            }
        });

        function Se(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Se(Object(n), !0).forEach((function (t) {
                    Object(u["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var ke = {
            loop: !0,
            images: [],
            maxZoom: 3,
            minZoom: 1 / 3,
            onScale: null,
            onClose: null,
            onChange: null,
            teleport: "body",
            className: "",
            showIndex: !0,
            closeable: !1,
            closeIcon: "clear",
            beforeClose: null,
            startPosition: 0,
            swipeDuration: 500,
            showIndicators: !1,
            closeOnPopstate: !0,
            closeIconPosition: "top-right"
        };

        function De() {
            var e = Object(fe["a"])({
                setup: function () {
                    var e = Object(fe["b"])(), t = e.state, n = e.toggle, a = function () {
                        t.images = []
                    };
                    return function () {
                        return Object(o["j"])(Pe, Ce(Ce({}, t), {}, {onClosed: a, "onUpdate:show": n}), null)
                    }
                }
            });
            ye = e.instance
        }

        var Ee = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (y["b"]) {
                ye || De();
                var n = Array.isArray(e) ? {images: e, startPosition: t} : e;
                return ye.open(Ce(Ce({}, ke), n)), ye
            }
        };
        Ee.Component = Pe, Ee.install = function (e) {
            e.use(Pe)
        };
        var Te = Ee;

        function Ie(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ve(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ie(Object(n), !0).forEach((function (t) {
                    Object(u["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var ze = G({
                props: {
                    capture: String,
                    multiple: Boolean,
                    disabled: Boolean,
                    lazyLoad: Boolean,
                    uploadText: String,
                    afterRead: Function,
                    beforeRead: Function,
                    beforeDelete: Function,
                    previewSize: [Number, String],
                    previewOptions: Object,
                    name: {type: [Number, String], default: ""},
                    accept: {type: String, default: "image/*"},
                    modelValue: {
                        type: Array, default: function () {
                            return []
                        }
                    },
                    maxSize: {type: [Number, String], default: Number.MAX_VALUE},
                    maxCount: {type: [Number, String], default: Number.MAX_VALUE},
                    deletable: {type: Boolean, default: !0},
                    showUpload: {type: Boolean, default: !0},
                    previewImage: {type: Boolean, default: !0},
                    previewFullImage: {type: Boolean, default: !0},
                    imageFit: {type: String, default: "cover"},
                    resultType: {type: String, default: "dataUrl"},
                    uploadIcon: {type: String, default: "photograph"}
                },
                emits: ["delete", "oversize", "close-preview", "click-preview", "update:modelValue"],
                setup: function (e, t) {
                    var n, a = t.emit, r = t.slots, i = Object(o["E"])(), c = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.modelValue.length;
                        return {name: e.name, index: t}
                    }, u = function () {
                        i.value && (i.value.value = "")
                    }, l = function (t) {
                        if (u(), Q(t, e.maxSize)) {
                            if (!Array.isArray(t)) return void a("oversize", t, c());
                            var n = $(t, e.maxSize);
                            if (t = n.valid, a("oversize", n.invalid, c()), !t.length) return
                        }
                        a("update:modelValue", [].concat(Object(W["a"])(e.modelValue), Object(W["a"])(J(t)))), e.afterRead && e.afterRead(t, c())
                    }, s = function (t) {
                        var n = e.maxCount, o = e.modelValue, a = e.resultType;
                        if (Array.isArray(t)) {
                            var r = n - o.length;
                            t.length > r && (t = t.slice(0, r)), Promise.all(t.map((function (e) {
                                return q(e, a)
                            }))).then((function (e) {
                                var n = t.map((function (t, n) {
                                    var o = {file: t, status: "", message: ""};
                                    return e[n] && (o.content = e[n]), o
                                }));
                                l(n)
                            }))
                        } else q(t, a).then((function (e) {
                            var n = {file: t, status: "", message: ""};
                            e && (n.content = e), l(n)
                        }))
                    }, f = function (t) {
                        var n = t.target.files;
                        if (!e.disabled && n.length) {
                            if (n = 1 === n.length ? n[0] : [].slice.call(n), e.beforeRead) {
                                var o = e.beforeRead(n, c());
                                if (!o) return void u();
                                if (Object(y["f"])(o)) return void o.then((function (e) {
                                    s(e || n)
                                })).catch(u)
                            }
                            s(n)
                        }
                    }, d = function () {
                        a("close-preview")
                    }, b = function (t) {
                        if (e.previewFullImage) {
                            var o = e.modelValue.filter(ne), a = o.map((function (e) {
                                return e.content || e.url
                            }));
                            n = Te(Ve({images: a, startPosition: o.indexOf(t), onClose: d}, e.previewOptions))
                        }
                    }, p = function () {
                        n && n.close()
                    }, m = function (t, n) {
                        var o = e.modelValue.slice(0);
                        o.splice(n, 1), a("update:modelValue", o), a("delete", t, c(n))
                    }, h = function (t, n) {
                        return Object(o["j"])(se, Object(o["p"])({
                            item: t, index: n, onClick: function () {
                                a("click-preview", t, c(n))
                            }, onDelete: function () {
                                m(t, n)
                            }, onPreview: function () {
                                b(t)
                            }
                        }, Object(y["h"])(e, ["name", "lazyLoad", "imageFit", "deletable", "previewSize", "beforeDelete"])), {"preview-cover": r["preview-cover"]})
                    }, O = function () {
                        if (e.previewImage) return e.modelValue.map(h)
                    }, g = function () {
                        if (!(e.modelValue.length >= e.maxCount) && e.showUpload) {
                            var t = Object(o["j"])("input", {
                                ref: i,
                                type: "file",
                                class: K("input"),
                                accept: e.accept,
                                capture: e.capture,
                                multiple: e.multiple,
                                disabled: e.disabled,
                                onChange: f
                            }, null);
                            return r.default ? Object(o["j"])("div", {class: K("input-wrapper")}, [r.default(), t]) : Object(o["j"])("div", {
                                class: K("upload"),
                                style: Object(v["b"])(e.previewSize)
                            }, [Object(o["j"])(re["a"], {
                                name: e.uploadIcon,
                                class: K("upload-icon")
                            }, null), e.uploadText && Object(o["j"])("span", {class: K("upload-text")}, [e.uploadText]), t])
                        }
                    }, w = function () {
                        i.value && !e.disabled && i.value.click()
                    };
                    return Object(j["a"])({chooseFile: w, closeImagePreview: p}), ae((function () {
                        return e.modelValue
                    })), function () {
                        return Object(o["j"])("div", {class: K()}, [Object(o["j"])("div", {class: K("wrapper", {disabled: e.disabled})}, [O(), g()])])
                    }
                }
            }), Ne = (n("be7f"), n("772a")), Be = (n("5246"), n("6b41")), He = n("14d3"), Re = n("c5e7"),
            Xe = Object(o["k"])({
                name: "UploadVideo",
                components: {
                    VanNavBar: Be["a"],
                    VanForm: Ne["b"],
                    VanField: oe["b"],
                    VanUploader: ze,
                    VanPopup: L["a"],
                    // VanPicker: F
                },
                setup: function () {
                    var e = Object(o["E"])(null);
                    return {formComponent: e}
                },
                data: function () {
                    return {
                        form: {title: "", file: null, intro: "", category_id: null},
                        videoUploader: {files: []},
                        categoryPicker: {show: !1, categories: [], selected: null}
                    }
                },
                computed: {
                    selectedCategoryText: function () {
                        return null !== this.categoryPicker.selected ? this.categoryPicker.selected.name : ""
                    }
                },
                watch: {
                    "videoUploader.files": function (e) {
                        0 !== e.length ? this.form.file = e[0].file : this.form.file = null
                    }
                },
                methods: {
                    getCategories: function () {
                        var e = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Object(He["b"])();
                                    case 3:
                                        n = t.sent, t.next = 10;
                                        break;
                                    case 6:
                                        return t.prev = 6, t.t0 = t["catch"](0), t.abrupt("return");
                                    case 10:
                                        e.categoryPicker.categories = n.data;
                                    case 11:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 6]])
                        })))()
                    }, handleBack: function () {
                        this.$router.back()
                    }, handleCategoryPickerConfirm: function (e) {
                        this.categoryPicker.selected = e[e.length - 1], this.form.category_id = this.categoryPicker.selected.id, this.categoryPicker.show = !1
                    }, handleUploaderBeforeRead: function (e) {
                        return !!e.type.startsWith("video/") || (i["a"].fail("请上传视频文件"), !1)
                    }, handleSubmitClick: function () {
                        this.formComponent.submit()
                    }, handleSubmit: function () {
                        var e = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function t() {
                            var n, o, a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = i["a"].loading("上传中..."), o = e.form.file, a = {
                                            title: e.form.title,
                                            intro: e.form.intro,
                                            // category_id: e.form.category_id.toString()
                                        }, t.prev = 3, t.next = 6, Object(Re["n"])(o, a);
                                    case 6:
                                        t.next = 13;
                                        break;
                                    case 8:
                                        return t.prev = 8, t.t0 = t["catch"](3), n.clear(), t.abrupt("return");
                                    case 13:
                                        n.clear(), i["a"].success("上传成功"), e.handleBack();
                                    case 16:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[3, 8]])
                        })))()
                    }
                },
                created: function () {
                    var e = this;
                    return Object(c["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.getCategories();
                                case 2:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            });
        Xe.render = r;
        t["default"] = Xe
    }, "14d3": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "a", (function () {
            return r
        }));
        var o = n("f977");

        function a() {
            return Object(o["a"])({url: "/categories"})
        }

        function r(e) {
            return Object(o["a"])({url: "/categories/".concat(e)})
        }
    }, "159b": function (e, t, n) {
        var o = n("da84"), a = n("fdbc"), r = n("17c2"), i = n("9112");
        for (var c in a) {
            var u = o[c], l = u && u.prototype;
            if (l && l.forEach !== r) try {
                i(l, "forEach", r)
            } catch (s) {
                l.forEach = r
            }
        }
    }, "17c2": function (e, t, n) {
        "use strict";
        var o = n("b727").forEach, a = n("a640"), r = n("ae40"), i = a("forEach"), c = r("forEach");
        e.exports = i && c ? [].forEach : function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }, "2bb1": function (e, t, n) {
        "use strict";
        var o = n("3835"), a = n("7a23"), r = n("5596"), i = n("d282"), c = n("8579"), u = n("4eda"),
            l = Object(i["a"])("swipe-item"), s = Object(o["a"])(l, 2), f = s[0], d = s[1];
        t["a"] = f({
            setup: function (e, t) {
                var n, o = t.slots, i = Object(a["D"])({offset: 0, inited: !1, mounted: !1}),
                    l = Object(c["a"])(r["a"]), s = l.parent, f = l.index, v = Object(a["e"])((function () {
                        var e = {}, t = s.props.vertical;
                        return e[t ? "height" : "width"] = "".concat(s.size.value, "px"), i.offset && (e.transform = "translate".concat(t ? "Y" : "X", "(").concat(i.offset, "px)")), e
                    })), b = Object(a["e"])((function () {
                        var e = s.props, t = e.loop, o = e.lazyRender;
                        if (!o || n) return !0;
                        if (!i.mounted) return !1;
                        var a = s.activeIndicator.value, r = s.count.value - 1, c = 0 === a && t ? r : a - 1,
                            u = a === r && t ? 0 : a + 1;
                        return n = f.value === a || f.value === c || f.value === u, n
                    })), p = function (e) {
                        i.offset = e
                    };
                return Object(a["w"])((function () {
                    Object(a["q"])((function () {
                        i.mounted = !0
                    }))
                })), Object(u["a"])({setOffset: p}), function () {
                    var e;
                    return Object(a["j"])("div", {
                        class: d(),
                        style: v.value
                    }, [b.value ? null === (e = o.default) || void 0 === e ? void 0 : e.call(o) : null])
                }
            }
        })
    }, 4160: function (e, t, n) {
        "use strict";
        var o = n("23e7"), a = n("17c2");
        o({target: "Array", proto: !0, forced: [].forEach != a}, {forEach: a})
    }, "4fad": function (e, t, n) {
        var o = n("23e7"), a = n("6f53").entries;
        o({target: "Object", stat: !0}, {
            entries: function (e) {
                return a(e)
            }
        })
    }, "504b": function (e, t, n) {
    }, 5596: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return P
        }));
        var o = n("2909"), a = n("ade3"), r = n("3835"), i = n("7a23"), c = n("d282"), u = n("482d"), l = n("02de"),
            s = n("1325"), f = n("5f67"), d = n("89b0"), v = n("d339"), b = n("2744"), p = n("fa00");

        function m() {
            var e = Object(i["E"])("visible"), t = function () {
                v["c"] && (e.value = document.hidden ? "hidden" : "visible")
            };
            return t(), Object(p["a"])("visibilitychange", t), e
        }

        var j = n("076c"), h = n("cdd8"), O = n("4eda"), g = Object(c["a"])("swipe"), w = Object(r["a"])(g, 2),
            y = w[0], x = w[1], P = "vanSwipe";
        t["b"] = y({
            props: {
                width: [Number, String],
                height: [Number, String],
                autoplay: [Number, String],
                vertical: Boolean,
                lazyRender: Boolean,
                indicatorColor: String,
                loop: {type: Boolean, default: !0},
                duration: {type: [Number, String], default: 500},
                touchable: {type: Boolean, default: !0},
                initialSwipe: {type: [Number, String], default: 0},
                showIndicators: {type: Boolean, default: !0},
                stopPropagation: {type: Boolean, default: !0}
            }, emits: ["change"], setup: function (e, t) {
                var n, r, c = t.emit, p = t.slots, g = Object(i["E"])(),
                    w = Object(i["D"])({rect: null, width: 0, height: 0, offset: 0, active: 0, swiping: !1}),
                    y = Object(h["a"])(), S = Object(f["a"])(), C = Object(d["a"])(P), k = C.children,
                    D = C.linkChildren, E = Object(i["e"])((function () {
                        return k.length
                    })), T = Object(i["e"])((function () {
                        return w[e.vertical ? "height" : "width"]
                    })), I = Object(i["e"])((function () {
                        return e.vertical ? y.deltaY.value : y.deltaX.value
                    })), V = Object(i["e"])((function () {
                        return (e.vertical ? w.rect.height : w.rect.width) - T.value * E.value
                    })), z = Object(i["e"])((function () {
                        return Math.ceil(Math.abs(V.value) / T.value)
                    })), N = Object(i["e"])((function () {
                        return E.value * T.value
                    })), B = Object(i["e"])((function () {
                        return (w.active + E.value) % E.value
                    })), H = Object(i["e"])((function () {
                        var t = e.vertical ? "vertical" : "horizontal";
                        return y.direction.value === t
                    })), R = Object(i["e"])((function () {
                        var t, n = e.vertical ? "height" : "width", o = e.vertical ? "width" : "height";
                        return t = {}, Object(a["a"])(t, n, "".concat(N.value, "px")), Object(a["a"])(t, o, e[o] ? "".concat(e[o], "px") : ""), Object(a["a"])(t, "transitionDuration", "".concat(w.swiping ? 0 : e.duration, "ms")), Object(a["a"])(t, "transform", "translate".concat(e.vertical ? "Y" : "X", "(").concat(w.offset, "px)")), t
                    })), X = function (t) {
                        var n = w.active;
                        return t ? e.loop ? Object(u["b"])(n + t, -1, E.value) : Object(u["b"])(n + t, 0, z.value) : n
                    }, U = function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, o = t * T.value;
                        e.loop || (o = Math.min(o, -V.value));
                        var a = n - o;
                        return e.loop || (a = Object(u["b"])(a, V.value, 0)), a
                    }, A = function (t) {
                        var n = t.pace, o = void 0 === n ? 0 : n, a = t.offset, r = void 0 === a ? 0 : a, i = t.emitChange;
                        if (!(E.value <= 1)) {
                            var u = w.active, l = X(o), s = U(l, r);
                            if (e.loop) {
                                if (k[0] && s !== V.value) {
                                    var f = s < V.value;
                                    k[0].setOffset(f ? N.value : 0)
                                }
                                if (k[E.value - 1] && 0 !== s) {
                                    var d = s > 0;
                                    k[E.value - 1].setOffset(d ? -N.value : 0)
                                }
                            }
                            w.active = l, w.offset = s, i && l !== u && c("change", B.value)
                        }
                    }, M = function () {
                        w.swiping = !0, w.active <= -1 && A({pace: E.value}), w.active >= E.value && A({pace: -E.value})
                    }, Y = function () {
                        M(), y.reset(), Object(v["b"])((function () {
                            w.swiping = !1, A({pace: -1, emitChange: !0})
                        }))
                    }, F = function () {
                        M(), y.reset(), Object(v["b"])((function () {
                            w.swiping = !1, A({pace: 1, emitChange: !0})
                        }))
                    }, L = function () {
                        clearTimeout(n)
                    }, W = function t() {
                        e.autoplay > 0 && E.value > 1 && (L(), n = setTimeout((function () {
                            F(), t()
                        }), e.autoplay))
                    }, Z = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : +e.initialSwipe;
                        if (g.value && !Object(l["a"])(g)) {
                            L();
                            var n = Object(b["a"])(g);
                            w.rect = n, w.swiping = !0, w.active = t, w.width = +e.width || n.width, w.height = +e.height || n.height, w.offset = U(t), k.forEach((function (e) {
                                e.setOffset(0)
                            })), W()
                        }
                    }, _ = function () {
                        Z(B.value)
                    }, G = function (t) {
                        e.touchable && (y.start(t), r = Date.now(), L(), M())
                    }, K = function (t) {
                        e.touchable && w.swiping && (y.move(t), H.value && (Object(s["a"])(t, e.stopPropagation), A({offset: I.value})))
                    }, J = function () {
                        if (e.touchable && w.swiping) {
                            var t = Date.now() - r, n = I.value / t,
                                o = Math.abs(n) > .25 || Math.abs(I.value) > T.value / 2;
                            if (o && H.value) {
                                var a = e.vertical ? y.offsetY.value : y.offsetX.value, i = 0;
                                i = e.loop ? a > 0 ? I.value > 0 ? -1 : 1 : 0 : -Math[I.value > 0 ? "ceil" : "floor"](I.value / T.value), A({
                                    pace: i,
                                    emitChange: !0
                                })
                            } else I.value && A({pace: 0});
                            w.swiping = !1, W()
                        }
                    }, q = function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        M(), y.reset(), Object(v["b"])((function () {
                            var o;
                            o = e.loop && t === E.value ? 0 === w.active ? 0 : t : t % E.value, n.immediate ? Object(v["b"])((function () {
                                w.swiping = !1
                            })) : w.swiping = !1, A({pace: o - w.active, emitChange: !0})
                        }))
                    }, Q = function (t, n) {
                        var o = n === B.value, a = o ? {backgroundColor: e.indicatorColor} : null;
                        return Object(i["j"])("i", {style: a, class: x("indicator", {active: o})}, null)
                    }, $ = function () {
                        return p.indicator ? p.indicator() : e.showIndicators && E.value > 1 ? Object(i["j"])("div", {class: x("indicators", {vertical: e.vertical})}, [Array.apply(void 0, Object(o["a"])(Array(E.value))).map(Q)]) : void 0
                    };
                return Object(O["a"])({prev: Y, next: F, state: w, resize: _, swipeTo: q}), D({
                    size: T,
                    props: e,
                    count: E,
                    activeIndicator: B
                }), Object(i["P"])([function () {
                    return k.length
                }, function () {
                    return e.initialSwipe
                }], (function () {
                    Z()
                })), Object(i["P"])((function () {
                    return e.autoplay
                }), (function (e) {
                    e > 0 ? W() : L()
                })), Object(i["P"])([S.width, S.height], _), Object(i["P"])(m(), (function (e) {
                    e ? W() : L()
                })), Object(i["v"])(L), Object(i["t"])(L), Object(j["a"])(Z), function () {
                    var t;
                    return Object(i["j"])("div", {ref: g, class: x()}, [Object(i["j"])("div", {
                        style: R.value,
                        class: x("track", {vertical: e.vertical}),
                        onTouchstart: G,
                        onTouchmove: K,
                        onTouchend: J,
                        onTouchcancel: J
                    }, [null === (t = p.default) || void 0 === t ? void 0 : t.call(p)]), $()])
                }
            }
        })
    }, "5f67": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var o = n("7a23"), a = n("d339"), r = n("fa00");

        function i() {
            var e = Object(o["E"])(a["c"] ? window.innerWidth : 0), t = Object(o["E"])(a["c"] ? window.innerHeight : 0),
                n = function () {
                    e.value = window.innerWidth, t.value = window.innerHeight
                };
            return Object(r["a"])("resize", n), Object(r["a"])("orientationchange", n), {width: e, height: t}
        }
    }, "6f53": function (e, t, n) {
        var o = n("83ab"), a = n("df75"), r = n("fc6a"), i = n("d1e7").f, c = function (e) {
            return function (t) {
                var n, c = r(t), u = a(c), l = u.length, s = 0, f = [];
                while (l > s) n = u[s++], o && !i.call(c, n) || f.push(e ? [n, c[n]] : c[n]);
                return f
            }
        };
        e.exports = {entries: c(!0), values: c(!1)}
    }, "786d": function (e, t, n) {
    }, 8270: function (e, t, n) {
    }, a526: function (e, t, n) {
    }, bcd3: function (e, t, n) {
    }, be7f: function (e, t, n) {
        "use strict";
        n("68ef"), n("cb51"), n("3743"), n("1a04"), n("1146")
    }, c5e7: function (e, t, n) {
        "use strict";
        n.d(t, "f", (function () {
            return r
        })), n.d(t, "j", (function () {
            return i
        })), n.d(t, "m", (function () {
            return c
        })), n.d(t, "n", (function () {
            return u
        })), n.d(t, "g", (function () {
            return l
        })), n.d(t, "i", (function () {
            return s
        })), n.d(t, "k", (function () {
            return f
        })), n.d(t, "l", (function () {
            return d
        })), n.d(t, "h", (function () {
            return v
        })), n.d(t, "c", (function () {
            return b
        })), n.d(t, "e", (function () {
            return p
        })), n.d(t, "b", (function () {
            return m
        })), n.d(t, "d", (function () {
            return j
        })), n.d(t, "a", (function () {
            return h
        }));
        n("4160"), n("4fad"), n("159b");
        var o = n("3835"), a = n("f977");

        function r(e) {
            return Object(a["a"])({url: "/recommends", params: e})
        }

        function i(e) {
            return Object(a["a"])({url: "/videos", params: e})
        }

        function c(e) {
            return Object(a["a"])({url: "/search/videos", params: e})
        }

        function u(e, t) {
            var n = new FormData;
            return n.append("file", e), Object.entries(t).forEach((function (e) {
                var t = Object(o["a"])(e, 2), a = t[0], r = t[1];
                n.append(a, r)
            })), Object(a["a"])({
                url: "/user/videos",
                method: "POST",
                headers: {"Content-Type": "multipart/form-data"},
                data: n,
                timeout: 0
            })
        }

        function l(e) {
            return Object(a["a"])({url: "/videos/".concat(e)})
        }

        function s(e, t) {
            return Object(a["a"])({url: "/videos/".concat(e, "/comments"), params: t})
        }

        function f(e, t) {
            return Object(a["a"])({url: "/videos/".concat(e, "/comments"), method: "POST", data: t})
        }

        function d(e) {
            return Object(a["a"])({url: "/user/played/".concat(e), method: "PUT"})
        }

        function v(e) {
            return Object(a["a"])({url: "user/liked/".concat(e), method: "PUT"})
        }

        function b(e) {
            return Object(a["a"])({url: "user/liked/".concat(e), method: "DELETE"})
        }

        function p(e) {
            return Object(a["a"])({url: "user/disliked/".concat(e), method: "PUT"})
        }

        function m(e) {
            return Object(a["a"])({url: "user/disliked/".concat(e), method: "DELETE"})
        }

        function j(e) {
            return Object(a["a"])({url: "user/favorites/".concat(e), method: "PUT"})
        }

        function h(e) {
            return Object(a["a"])({url: "user/favorites/".concat(e), method: "DELETE"})
        }
    }, cdd8: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var o = n("7a23"), a = 10;

        function r(e, t) {
            return e > t && e > a ? "horizontal" : t > e && t > a ? "vertical" : ""
        }

        function i() {
            var e = Object(o["E"])(0), t = Object(o["E"])(0), n = Object(o["E"])(0), a = Object(o["E"])(0),
                i = Object(o["E"])(0), c = Object(o["E"])(0), u = Object(o["E"])(""), l = function () {
                    return "vertical" === u.value
                }, s = function () {
                    return "horizontal" === u.value
                }, f = function () {
                    n.value = 0, a.value = 0, i.value = 0, c.value = 0, u.value = ""
                }, d = function (n) {
                    f(), e.value = n.touches[0].clientX, t.value = n.touches[0].clientY
                }, v = function (o) {
                    var l = o.touches[0];
                    n.value = l.clientX - e.value, a.value = l.clientY - t.value, i.value = Math.abs(n.value), c.value = Math.abs(a.value), u.value || (u.value = r(i.value, c.value))
                };
            return {
                move: v,
                start: d,
                reset: f,
                startX: e,
                startY: t,
                deltaX: n,
                deltaY: a,
                offsetX: i,
                offsetY: c,
                direction: u,
                isVertical: l,
                isHorizontal: s
            }
        }
    }
}]);