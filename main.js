(this.webpackJsonpdavislearningreact = this.webpackJsonpdavislearningreact || []).push([[0], {
    10: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0)
          , l = a.n(n)
          , s = a(4)
          , r = a.n(s)
          , c = (a(3),
        a(1));
        function i(e, t, a, n) {
            console.log(n);
            var s = !1;
            function r(e, t, a, n) {
                if (console.log("Percent: ".concat(e, " from ").concat(t, " to ").concat(a, " text ").concat(n)),
                e > t && e < a)
                    return l.a.createElement("li", null, n)
            }
            for (var c = [n.totals.GEN, n.totals.VRS, n.totals.HAS, n.totals.WMS, n.totals.MTM, n.totals.MAC, n.totals.BHD], i = 0; i < c.length; i++)
                c[i] > e && c[i] < t && (s = !0);
            return l.a.createElement(l.a.Fragment, null, s && l.a.createElement(l.a.Fragment, null, l.a.createElement("h5", null, a)), l.a.createElement("ul", null, r(n.totals.GEN, e, t, "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0432 \u0446\u0435\u043b\u043e\u043c"), r(n.totals.VRS, e, t, "\u0417\u0440\u0435\u043d\u0438\u0435, \u0447\u0442\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"), r(n.totals.HAS, e, t, "\u0421\u043b\u0443\u0445 \u0438/\u0438\u043b\u0438 \u0440\u0435\u0447\u044c"), r(n.totals.WMS, e, t, "\u041f\u0438\u0441\u044c\u043c\u043e \u0438/\u0438\u043b\u0438 \u043c\u043e\u0442\u043e\u0440\u0438\u043a\u0430"), r(n.totals.MTM, e, t, "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438/\u0438\u043b\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438"), r(n.totals.MAC, e, t, "\u041f\u0430\u043c\u044f\u0442\u044c \u0438/\u0438\u043b\u0438 \u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435"), r(n.totals.BHD, e, t, "\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435, \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438/\u0438\u043b\u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440")))
        }
        var m = function(e) {
            var t = e.totals.GEN > 40 || e.totals.VRS > 40 || e.totals.HAS > 40 || e.totals.WMS > 40 || e.totals.MTM > 40 || e.totals.MAC > 40 || e.totals.BHD > 40
              , a = e.totals.GEN > 20 && e.totals.GEN < 39 || e.totals.VRS > 20 && e.totals.VRS < 39 || e.totals.HAS > 20 && e.totals.HAS < 39 || e.totals.WMS > 20 && e.totals.WMS < 39 || e.totals.MTM > 20 && e.totals.MTM < 39 || e.totals.MAC > 20 && e.totals.MAC < 39 || e.totals.BHD > 20 && e.totals.BHD < 39
              , n = e.totals.GEN > 10 && e.totals.GEN < 19 || e.totals.VRS > 10 && e.totals.VRS < 19 || e.totals.HAS > 10 && e.totals.HAS < 19 || e.totals.WMS > 10 && e.totals.WMS < 19 || e.totals.MTM > 10 && e.totals.MTM < 19 || e.totals.MAC > 10 && e.totals.MAC < 19 || e.totals.BHD > 10 && e.totals.BHD < 19;
            return l.a.createElement("div", null, t && l.a.createElement(l.a.Fragment, null, i(40, 1e3, "\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0435 \u0441\u0444\u0435\u0440\u044b:", e)), a && l.a.createElement(l.a.Fragment, null, i(20, 39, "\u0414\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0442\u044c \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445:", e)), n && l.a.createElement(l.a.Fragment, null, i(10, 19, "\u0414\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u0437\u0430\u0442\u0440\u0443\u0434\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445:", e)))
        };
        var o = function(e) {
            return l.a.createElement("div", {
                className: "row question"
            }, l.a.createElement("p", null, e.title))
        };
        var E = function(e) {
            var t = Object(n.useState)("")
              , a = Object(c.a)(t, 2)
              , s = a[0]
              , r = a[1];
            return l.a.createElement("div", {
                className: "row answers"
            }, l.a.createElement("div", {
                className: "checkboxesItem",
                onClick: function() {
                    r("Absolutely"),
                    e.setAnswer(e.id, "1")
                }
            }, l.a.createElement("input", {
                onChange: function() {
                    return ""
                },
                type: "radio",
                checked: "Absolutely" === s
            }), "\u0414\u0430"), l.a.createElement("div", {
                className: "checkboxesItem",
                onClick: function() {
                    r("Somewhat"),
                    e.setAnswer(e.id, "2")
                }
            }, l.a.createElement("input", {
                onChange: function() {
                    return ""
                },
                type: "radio",
                checked: "Somewhat" === s
            }), "\u041e\u0442\u0447\u0430\u0441\u0442\u0438"), l.a.createElement("div", {
                className: "checkboxesItem",
                onClick: function() {
                    r("Rarely or Never"),
                    e.setAnswer(e.id, "3")
                }
            }, l.a.createElement("input", {
                onChange: function() {
                    return ""
                },
                type: "radio",
                checked: "Rarely or Never" === s
            }), "\u0420\u0435\u0434\u043a\u043e/\u041d\u0438\u043a\u043e\u0433\u0434\u0430"))
        };
        var u = function(e) {
            var t = Object(n.useState)({
                choices: []
            })
              , a = Object(c.a)(t, 2)
              , s = a[0]
              , r = a[1];
            function i(t, a) {
                var n = s.choices;
                n[t] = a,
                e.setChoicesFromSixth(n),
                r({
                    choices: n
                })
            }
            return Object(n.useEffect)((function() {
                var t = [0, 0, 0, 0, 0, 0, 0];
                -1 !== s.choices.indexOf("Absolutely") && (t[0] += 4),
                -1 !== s.choices.indexOf("Somewhat") && (t[0] += 2),
                e.setAnswer(t)
            }
            ), [s]),
            l.a.createElement("div", {
                style: {
                    overflowX: "auto"
                }
            }, l.a.createElement("table", {
                className: "sixthQuestionTable"
            }, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("th", null), l.a.createElement("th", null, "\u0414\u0430"), l.a.createElement("th", null, "\u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c"), l.a.createElement("th", null, "\u0420\u0435\u0434\u043a\u043e/\u041d\u0438\u043a\u043e\u0433\u0434\u0430")), function() {
                for (var e = ["\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e", "\u0422\u0435\u0430\u0442\u0440", "\u041c\u0443\u0437\u044b\u043a\u0430", "\u0421\u043f\u043e\u0440\u0442", "\u0422\u0430\u043d\u0446\u044b", "\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430", "\u0421\u043e\u0447\u0438\u043d\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0439", "\u041a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u044f \u0438 \u0431\u0438\u0437\u043d\u0435\u0441", "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435", "\u0414\u0438\u0437\u0430\u0439\u043d", "\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e", "\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u043e\u0435 \u0434\u0435\u043b\u043e"], t = [], a = function(a) {
                    t.push(l.a.createElement("tr", {
                        key: a
                    }, l.a.createElement("td", null, e[a]), l.a.createElement("td", {
                        style: {
                            textAlign: "center"
                        }
                    }, l.a.createElement("input", {
                        onClick: function() {
                            i(a, "Absolutely")
                        },
                        onChange: function() {
                            return ""
                        },
                        type: "radio",
                        checked: "Absolutely" === s.choices[a]
                    })), l.a.createElement("td", {
                        style: {
                            textAlign: "center"
                        }
                    }, l.a.createElement("input", {
                        onClick: function() {
                            i(a, "Somewhat")
                        },
                        onChange: function() {
                            return ""
                        },
                        type: "radio",
                        checked: "Somewhat" === s.choices[a]
                    })), l.a.createElement("td", {
                        style: {
                            textAlign: "center"
                        }
                    }, l.a.createElement("input", {
                        onClick: function() {
                            i(a, "Rarely or Never")
                        },
                        onChange: function() {
                            return ""
                        },
                        type: "radio",
                        checked: "Rarely or Never" === s.choices[a]
                    }))))
                }, n = 0; n < e.length; n++)
                    a(n);
                return t
            }())))
        };
        var d = function(e) {
            return l.a.createElement("div", {
                className: "mainForm"
            }, l.a.createElement("div", {
                className: "progressBar"
            }, l.a.createElement("div", {
                className: "progress",
                style: {
                    width: "20%"
                }
            }, "\u0448\u0430\u0433 1/5")), l.a.createElement("div", {
                className: "form"
            }, l.a.createElement("h2", {
                className: "TestTitles"
            }, "\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"), l.a.createElement(o, {
                title: "1. \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u0435 \u043e\u0447\u0435\u043d\u044c \u0443\u043c\u043d\u043e\u0433\u043e \u0438 \u0441\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e, \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u044b\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0432\u043e\u0438 \u043c\u044b\u0441\u043b\u0438, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0435\u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0447\u0438\u0442\u0430\u0442\u044c \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430."
            }), l.a.createElement(E, {
                id: "0",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "2. \u0415\u0433\u043e \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u043b\u0435\u043d\u0438\u0432\u044b\u043c, \u043d\u0435\u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u0433\u043b\u0443\u043f\u044b\u043c, \u043e\u0442\u0441\u0442\u0430\u044e\u0449\u0438\u043c \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438, \u043d\u0435\u043f\u043e\u0441\u043b\u0443\u0448\u043d\u044b\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u0442\u0430\u0440\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c."
            }), l.a.createElement(E, {
                id: "1",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "3. \u0418\u043c\u0435\u0435\u0442 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0443\u043c\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f, \u043d\u043e \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432 \u0443\u0447\u0451\u0431\u0435, \u0443\u0441\u0442\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u044b \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u044b\u0435."
            }), l.a.createElement(E, {
                id: "2",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "4. \u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0435\u0431\u044f \u0433\u043b\u0443\u043f\u044b\u043c, \u0438\u043c\u0435\u0435\u0442 \u043d\u0438\u0437\u043a\u0443\u044e \u0441\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0443, \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0441\u0432\u043e\u0438 \u0441\u043b\u0430\u0431\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439."
            }), l.a.createElement(E, {
                id: "3",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "5. \u041b\u0435\u0433\u043a\u043e \u0440\u0430\u0441\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e \u043f\u043e\u0432\u043e\u0434\u0443 \u0437\u0430\u043d\u044f\u0442\u0438\u0439 \u0432 \u0448\u043a\u043e\u043b\u0435, \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."
            }), l.a.createElement(E, {
                id: "4",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "6. \u0422\u0430\u043b\u0430\u043d\u0442\u043b\u0438\u0432 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0441\u0444\u0435\u0440\u0430\u0445:"
            }), l.a.createElement(u, {
                id: "5",
                setAnswer: e.sixthQuestionAnswer,
                setChoicesFromSixth: e.setChoicesFromSixth
            }), l.a.createElement(o, {
                title: "7. \u0427\u0430\u0441\u0442\u043e \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u043c\u0435\u0447\u0442\u044b, \u0433\u0440\u0435\u0437\u0438\u0442 \u043d\u0430\u044f\u0432\u0443, \u043b\u0435\u0433\u043a\u043e \u0442\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0438\u043b\u0438 \u0437\u0430\u0431\u044b\u0432\u0430\u0435\u0442 \u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."
            }), l.a.createElement(E, {
                id: "6",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "8. \u0421 \u0442\u0440\u0443\u0434\u043e\u043c \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u0447\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u043b\u0438 \u0433\u0438\u043f\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c\u044e."
            }), l.a.createElement(E, {
                id: "7",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "9. \u041b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0443\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u043f\u044b\u0442, \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u044b, \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b."
            }), l.a.createElement(E, {
                id: "8",
                setAnswer: e.setAnswer
            }), l.a.createElement("div", {
                className: "pageEnding"
            }, l.a.createElement("button", {
                className: "continueButton",
                onClick: function() {
                    return e.changePage("nextPage")
                }
            }, "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))
        };
        var w = function(e) {
            return l.a.createElement("div", {
                className: "mainForm nextPage"
            }, l.a.createElement("div", {
                className: "progressBar"
            }, l.a.createElement("div", {
                className: "progress",
                style: {
                    width: "40%"
                }
            }, "\u0448\u0430\u0433 2/5")), l.a.createElement("div", {
                className: "form"
            }, l.a.createElement("h2", {
                className: "TestTitles"
            }, "\u0417\u0440\u0435\u043d\u0438\u0435, \u0447\u0442\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"), l.a.createElement(o, {
                title: "10. \u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0436\u0430\u043b\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435, \u0442\u043e\u0448\u043d\u043e\u0442\u0443 \u0438\u043b\u0438 \u0433\u043e\u043b\u043e\u0432\u043d\u0443\u044e \u0431\u043e\u043b\u044c."
            }), l.a.createElement(E, {
                id: "9",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "11. \u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u0432 \u0437\u0430\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043f\u0440\u0438 \u0432\u0438\u0434\u0435 \u0431\u0443\u043a\u0432, \u0446\u0438\u0444\u0440, \u0441\u043b\u043e\u0432, \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u044f\u0445 \u0432\u0441\u043b\u0443\u0445."
            }), l.a.createElement(E, {
                id: "10",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "12. \u041d\u0430 \u043f\u0438\u0441\u044c\u043c\u0435 \u0438 \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0437\u0430\u043c\u0435\u0442\u043d\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u044b, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438, \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0431\u0443\u043a\u0432, \u0446\u0438\u0444\u0440 \u0438/\u0438\u043b\u0438 \u0441\u043b\u043e\u0432."
            }), l.a.createElement(E, {
                id: "11",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "13. \u0413\u043e\u0432\u043e\u0440\u0438\u0442, \u0447\u0442\u043e \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0432\u0438\u0434\u0438\u0442 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0447\u0442\u0435\u043d\u0438\u044f, \u043f\u0438\u0441\u044c\u043c\u0430 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u043d\u0438\u044f."
            }), l.a.createElement(E, {
                id: "12",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "14. \u041a\u0430\u0436\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441\u043e \u0437\u0440\u0435\u043d\u0438\u0435\u043c, \u0445\u043e\u0442\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u0440\u0435\u043d\u0438\u0435 \u0432 \u043d\u043e\u0440\u043c\u0435."
            }), l.a.createElement(E, {
                id: "13",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "15. \u041e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043d\u0430 \u0440\u0435\u0434\u043a\u043e\u0441\u0442\u044c \u043e\u0441\u0442\u0440\u044b\u043c \u0437\u0440\u0435\u043d\u0438\u0435\u043c \u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u0433\u043b\u0443\u0431\u0438\u043d\u044b \u0438\u043b\u0438 \u043f\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 (\u0431\u043e\u043a\u043e\u0432\u043e\u0435) \u0437\u0440\u0435\u043d\u0438\u0435."
            }), l.a.createElement(E, {
                id: "14",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "16. \u0427\u0438\u0442\u0430\u0435\u0442 \u0438 \u043f\u0435\u0440\u0435\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442, \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435 \u0443\u043b\u0430\u0432\u043b\u0438\u0432\u0430\u044f \u0441\u043c\u044b\u0441\u043b\u0430."
            }), l.a.createElement(E, {
                id: "15",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "17. \u041f\u0438\u0448\u0435\u0442 \xab\u043a\u0430\u043a \u0441\u043b\u044b\u0448\u0438\u0442\xbb, \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435."
            }), l.a.createElement(E, {
                id: "16",
                setAnswer: e.setAnswer
            }), l.a.createElement("div", {
                className: "pageEnding pageEndingLeftButton"
            }, l.a.createElement("button", {
                className: "continueButton",
                onClick: function() {
                    return e.changePage("nextPage")
                }
            }, "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))
        };
        var g = function(e) {
            return l.a.createElement("div", {
                className: "mainForm nextPage"
            }, l.a.createElement("div", {
                className: "progressBar"
            }, l.a.createElement("div", {
                className: "progress",
                style: {
                    width: "60%"
                }
            }, "\u0448\u0430\u0433 3/5")), l.a.createElement("div", {
                className: "form"
            }, l.a.createElement("h2", {
                className: "TestTitles"
            }, "\u0421\u043b\u0443\u0445 \u0438 \u0440\u0435\u0447\u044c"), l.a.createElement(o, {
                title: "18. \u0421\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0441\u043b\u044b\u0448\u0430\u0442\u044c \u0442\u043e, \u0447\u0442\u043e \u043d\u0435 \u0431\u044b\u043b\u043e \u0441\u043a\u0430\u0437\u0430\u043d\u043e \u0438\u043b\u0438 \u043d\u0435\u0443\u043b\u043e\u0432\u0438\u043c\u043e \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445, \u043b\u0435\u0433\u043a\u043e \u043e\u0442\u0432\u043b\u0435\u043a\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0437\u0432\u0443\u043a\u0438 \u0438\u043b\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d \u043a \u043d\u0438\u043c."
            }), l.a.createElement(E, {
                id: "17",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "19. \u0418\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0441\u0432\u043e\u0438\u0445 \u043c\u044b\u0441\u043b\u0435\u0439, \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u0441 \u0437\u0430\u043f\u0438\u043d\u043a\u0430\u043c\u0438 \u0438\u043b\u0438 \u043d\u0435 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f; \u043f\u0440\u0438 \u0432\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u0438\u043a\u0430\u0435\u0442\u0441\u044f; \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u043d\u043e\u0441\u0438\u0442 \u0434\u043b\u0438\u043d\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430; \u043c\u0435\u043d\u044f\u0435\u0442 \u043c\u0435\u0441\u0442\u0430\u043c\u0438 \u0441\u043b\u043e\u0432\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f, \u0441\u043b\u043e\u0432\u0430 \u0438 \u0441\u043b\u043e\u0433\u0438."
            }), l.a.createElement(E, {
                id: "18",
                setAnswer: e.setAnswer
            }), l.a.createElement("h2", {
                className: "pageMoreTitle"
            }, "\u041f\u0438\u0441\u044c\u043c\u043e \u0438 \u043c\u043e\u0442\u043e\u0440\u0438\u043a\u0430"), l.a.createElement(o, {
                title: "20. \u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0438 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0437\u0430\u0445\u0432\u0430\u0442 \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448\u0430."
            }), l.a.createElement(E, {
                id: "19",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "21. \u041f\u043e\u0447\u0435\u0440\u043a \u0438\u0437\u043c\u0435\u043d\u0447\u0438\u0432\u044b\u0439 \u0438\u043b\u0438 \u043d\u0435\u0440\u0430\u0437\u0431\u043e\u0440\u0447\u0438\u0432\u044b\u0439."
            }), l.a.createElement(E, {
                id: "20",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "22. \u041d\u0435\u0443\u043a\u043b\u044e\u0436\u0438\u0439, \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u043b\u043e\u0445\u043e\u0439 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0446\u0438\u0435\u0439 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0439; \u043d\u0435 \u0443\u0434\u0430\u044e\u0442\u0441\u044f \u0438\u0433\u0440\u044b \u0441 \u043c\u044f\u0447\u043e\u043c \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u0441\u043f\u043e\u0440\u0442\u0430; \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u043c\u0435\u043b\u043a\u043e\u0439 \u0438/\u0438\u043b\u0438 \u043a\u0440\u0443\u043f\u043d\u043e\u0439 \u043c\u043e\u0442\u043e\u0440\u0438\u043a\u043e\u0439."
            }), l.a.createElement(E, {
                id: "21",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "23. \u041f\u043e\u0434\u0432\u0435\u0440\u0436\u0435\u043d \u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u043b\u0435\u0437\u043d\u0438 \u0438 \u0443\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0438 \u0435\u0437\u0434\u0435."
            }), l.a.createElement(E, {
                id: "22",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "24. \u041c\u043e\u0436\u0435\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043b\u0430\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u043e\u0439, \u0442\u0430\u043a \u0438 \u043b\u0435\u0432\u043e\u0439 \u0440\u0443\u043a\u043e\u0439."
            }), l.a.createElement(E, {
                id: "23",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "25. \u041f\u0443\u0442\u0430\u0435\u0442 \u043f\u0440\u0430\u0432\u043e/\u043b\u0435\u0432\u043e, \u043d\u0430\u0434/\u043f\u043e\u0434."
            }), l.a.createElement(E, {
                id: "24",
                setAnswer: e.setAnswer
            }), l.a.createElement("div", {
                className: "pageEnding pageEndingLeftButton"
            }, l.a.createElement("button", {
                className: "continueButton",
                onClick: function() {
                    return e.changePage("nextPage")
                }
            }, "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))
        };
        var h = function(e) {
            return l.a.createElement("div", {
                className: "mainForm nextPage"
            }, l.a.createElement("div", {
                className: "progressBar"
            }, l.a.createElement("div", {
                className: "progress",
                style: {
                    width: "80%"
                }
            }, "\u0448\u0430\u0433 4/5")), l.a.createElement("div", {
                className: "form"
            }, l.a.createElement("h2", {
                className: "TestTitles"
            }, "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438"), l.a.createElement(o, {
                title: "26. \u0418\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442 \u0437\u0430\u0442\u0440\u0443\u0434\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043e\u043f\u0430\u0437\u0434\u044b\u0432\u0430\u0435\u0442, \u0441 \u0442\u0440\u0443\u0434\u043e\u043c \u0443\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e."
            }), l.a.createElement(E, {
                id: "25",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "27. \u041f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445 \u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0447\u0451\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0430\u043b\u044c\u0446\u0435\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u0438\u0451\u043c\u044b."
            }), l.a.createElement(E, {
                id: "26",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "28. \u0423\u043c\u0435\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u043d\u043e \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438 \u0441\u0447\u0451\u0442\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u0441 \u0434\u0435\u043d\u044c\u0433\u0430\u043c\u0438."
            }), l.a.createElement(E, {
                id: "27",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "29. \u041c\u043e\u0436\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f, \u043d\u043e \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435\u043c \u0437\u0430\u0434\u0430\u0447. \u0417\u043d\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u044b, \u043d\u043e \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u043d\u0430 \u0431\u0443\u043c\u0430\u0433\u0435."
            }), l.a.createElement(E, {
                id: "28",
                setAnswer: e.setAnswer
            }), l.a.createElement("h2", {
                className: "pageMoreTitle"
            }, "\u041f\u0430\u043c\u044f\u0442\u044c \u0438 \u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435"), l.a.createElement(o, {
                title: "30. \u041e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u0434\u043e\u043b\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c \u043d\u0430 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f, \u043c\u0435\u0441\u0442\u0430 \u0438 \u043b\u0438\u0446\u0430."
            }), l.a.createElement(E, {
                id: "29",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "31. \u041f\u043b\u043e\u0445\u0430\u044f \u043f\u0430\u043c\u044f\u0442\u044c \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0438\u043b\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0431\u044b\u043b\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0430 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435."
            }), l.a.createElement(E, {
                id: "30",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "32. \u0414\u0443\u043c\u0430\u0435\u0442, \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0431\u0440\u0430\u0437\u043e\u0432 \u0438 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0439, \u0430 \u043d\u0435 \u0437\u0432\u0443\u043a\u0430\u043c\u0438 \u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438 (\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0434\u0438\u0430\u043b\u043e\u0433)."
            }), l.a.createElement(E, {
                id: "31",
                setAnswer: e.setAnswer
            }), l.a.createElement("div", {
                className: "pageEnding pageEndingLeftButton"
            }, l.a.createElement("button", {
                className: "continueButton",
                onClick: function() {
                    return e.changePage("nextPage")
                }
            }, "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))
        };
        var p = function(e) {
            return l.a.createElement("div", {
                className: "mainForm nextPage"
            }, l.a.createElement("div", {
                className: "progressBar"
            }, l.a.createElement("div", {
                className: "progress",
                style: {
                    width: "100%"
                }
            }, "\u0448\u0430\u0433 5/5")), l.a.createElement("div", {
                className: "form"
            }, l.a.createElement("h2", {
                className: "TestTitles"
            }, "\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435, \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440"), l.a.createElement(o, {
                title: "33. \u041e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043d\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u043b\u0438, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043d\u0430\u0432\u044f\u0437\u0447\u0438\u0432\u043e\u0439 \u043c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c\u044e."
            }), l.a.createElement(E, {
                id: "32",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "34. \u0412 \u043a\u043b\u0430\u0441\u0441\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0448\u0443\u0442\u043e\u043c, \u0437\u0430\u0434\u0438\u0440\u043e\u0439 \u0438\u043b\u0438 \u043c\u043e\u043b\u0447\u0443\u043d\u043e\u043c."
            }), l.a.createElement(E, {
                id: "33",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "35. \u0427\u0435\u0440\u0435\u0437 \u044d\u0442\u0430\u043f\u044b \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f (\u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043f\u043e\u043b\u0437\u0430\u043d\u0438\u0435, \u0433\u043e\u0432\u043e\u0440\u0435\u043d\u0438\u0435, \u0445\u043e\u0434\u044c\u0431\u0430, \u0437\u0430\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u0448\u043d\u0443\u0440\u043a\u043e\u0432) \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b \u043e\u0447\u0435\u043d\u044c \u0431\u044b\u0441\u0442\u0440\u043e \u043b\u0438\u0431\u043e \u0447\u0440\u0435\u0437\u0432\u044b\u0447\u0430\u0439\u043d\u043e \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e."
            }), l.a.createElement(E, {
                id: "34",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "36. \u041f\u043e\u0434\u0432\u0435\u0440\u0436\u0435\u043d \u0443\u0448\u043d\u044b\u043c \u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u044f\u043c; \u0440\u0430\u0437\u0431\u043e\u0440\u0447\u0438\u0432 \u0432 \u0435\u0434\u0435, \u0432\u043e\u0441\u043f\u0440\u0438\u0438\u043c\u0447\u0438\u0432 \u043a \u043f\u0438\u0449\u0435\u0432\u044b\u043c \u0434\u043e\u0431\u0430\u0432\u043a\u0430\u043c \u0438 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438."
            }), l.a.createElement(E, {
                id: "35",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "37. \u0421\u043f\u0438\u0442 \u043e\u0447\u0435\u043d\u044c \u043a\u0440\u0435\u043f\u043a\u043e \u0438\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0443\u0442\u043a\u043e."
            }), l.a.createElement(E, {
                id: "36",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "38. \u041d\u043e\u0447\u043d\u043e\u0435 \u043d\u0435\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0430\u0440\u0448\u0435\u043c, \u0447\u0435\u043c \u043e\u0431\u044b\u0447\u043d\u043e, \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0435."
            }), l.a.createElement(E, {
                id: "37",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "39. \u0418\u043c\u0435\u0435\u0442 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u043e \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0438\u043b\u0438, \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043d\u0438\u0437\u043a\u0438\u0439 \u0431\u043e\u043b\u0435\u0432\u043e\u0439 \u043f\u043e\u0440\u043e\u0433."
            }), l.a.createElement(E, {
                id: "38",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "40. \u041e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043e\u0441\u0442\u0440\u044b\u043c \u0447\u0443\u0432\u0441\u0442\u0432\u043e\u043c \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e\u0441\u0442\u0438 \u0438 \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u043e\u0441\u043f\u0440\u0438\u0438\u043c\u0447\u0438\u0432\u043e\u0441\u0442\u044c\u044e, \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0441\u044f \u043a \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443."
            }), l.a.createElement(E, {
                id: "39",
                setAnswer: e.setAnswer
            }), l.a.createElement(o, {
                title: "41. \u0427\u0438\u0441\u043b\u043e \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u043e\u0432 \u0440\u0435\u0437\u043a\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0432 \u043f\u0435\u0440\u0438\u043e\u0434\u044b \u0437\u0430\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0438 \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0435\u0441\u0441\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438 \u0441\u043f\u0435\u0448\u043a\u0435 \u0438\u043b\u0438 \u043e\u0441\u043b\u0430\u0431\u043b\u0435\u043d\u043d\u043e\u043c \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435."
            }), l.a.createElement(E, {
                id: "40",
                setAnswer: e.setAnswer
            }), l.a.createElement("div", {
                className: "pageEnding pageEndingLeftButton"
            }, l.a.createElement("button", {
                className: "continueButton processAssessmentButton",
                onClick: function() {
                    return e.countResult()
                }
            }, "\u0420\u0415\u0417\u0423\u041b\u042c\u0422\u0410\u0422\u042b \u0422\u0415\u0421\u0422\u0410"))))
        };
        var A = function(e) {
            var t = 2 * Math.round(e.result[0] / 325 * 100)
              , a = 2 * Math.round(e.result[1] / 156 * 100)
              , n = 2 * Math.round(e.result[2] / 153 * 100)
              , s = 2 * Math.round(e.result[3] / 98 * 100)
              , r = 2 * Math.round(e.result[4] / 88 * 100)
              , c = 2 * Math.round(e.result[5] / 149 * 100)
              , i = null != e.sixthQuestionChoices;
            function o() {
                window.print()
            }
            return l.a.createElement("div", {
                className: "mainForm nextPage"
            }, l.a.createElement("div", {
                className: "progressBar"
            }, l.a.createElement("div", {
                className: "progress",
                style: {
                    width: "100%",
                    borderRadius: "5px"
                }
            })), l.a.createElement("div", {
                className: "row",
                style: {
                    paddingBottom: "20px"
                }
            }, l.a.createElement("p", {
                className: "offsetTop"
            }, "\u0414\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u0434\u0430\u0451\u0442 \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445 \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u0438, \u043d\u043e \u043e\u043d \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0444\u0435\u0440\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u043e\u0438\u0442 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435. \u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0430\u043c \xab\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043c\u043e\u0449\u044c\xbb \u0438\u043b\u0438 \xab\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435\xbb, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u043c\u0438 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0447\u0435\u0442\u0430."), l.a.createElement("p", {
                className: "youCanPrint"
            }, "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0442\u0430\u043a\u0436\u0435 \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0442\u0435\u0441\u0442\u0430. ", l.a.createElement("button", {
                className: "printButton",
                onClick: function() {
                    return o()
                }
            }, "\u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c")), i && l.a.createElement("h5", null, "\u0422\u0430\u043b\u0430\u043d\u0442\u044b"), l.a.createElement("ul", null, function() {
                var t = ["\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e", "\u0422\u0435\u0430\u0442\u0440", "\u041c\u0443\u0437\u044b\u043a\u0430", "\u0421\u043f\u043e\u0440\u0442", "\u0422\u0430\u043d\u0446\u044b", "\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430", "\u0421\u043e\u0447\u0438\u043d\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0439", "\u041a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u044f \u0438 \u0431\u0438\u0437\u043d\u0435\u0441", "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435", "\u0414\u0438\u0437\u0430\u0439\u043d", "\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e", "\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u043e\u0435 \u0434\u0435\u043b\u043e"]
                  , a = [];
                return i && e.sixthQuestionChoices.forEach((function(e, n) {
                    "Absolutely" == e && a.push(l.a.createElement("li", {
                        key: n
                    }, t[n]))
                }
                )),
                a
            }()), l.a.createElement(m, {
                totals: e.totals
            }), l.a.createElement("p", {
                className: "offsetTop"
            }, "\u041d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u0445\u043e\u0434\u0435 \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \xab\u041a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u0438 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u0414\u0435\u0439\u0432\u0438\u0441\u0430\xae\xbb. \u0415\u0441\u043b\u0438 \u0434\u0432\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 \u0443\u043c\u0435\u0440\u0435\u043d\u043d\u043e\u0439 \u0434\u043e \u0442\u044f\u0436\u0435\u043b\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u043f\u0440\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f, \u0442\u043e, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u044f \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u0438 \u044d\u0442\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c. \u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u043c \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u043e\u0434 \u0441\u0442\u043e\u043b\u0431\u0447\u0430\u0442\u044b\u043c \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u043c."), l.a.createElement("div", null, l.a.createElement("table", {
                className: "summaryTable"
            }, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("th", null), l.a.createElement("th", null, l.a.createElement("div", {
                style: {
                    display: "flex",
                    fontSize: "12px",
                    width: "202px",
                    justifyContent: "space-between"
                }
            }, l.a.createElement("div", null, "\u041b\u0451\u0433\u043a\u0430\u044f"), l.a.createElement("div", null, "\u2014"), l.a.createElement("div", {
                style: {
                    letterSpacing: ".8px"
                }
            }, "\u0423\u043c\u0435\u0440\u0435\u043d\u043d\u0430\u044f"), l.a.createElement("div", null, "\u2014"), l.a.createElement("div", null, "\u0422\u044f\u0436\u0451\u043b\u0430\u044f")))), l.a.createElement("tr", null, l.a.createElement("td", {
                style: {
                    fontWeight: "bold",
                    padding: "2px !important"
                }
            }, "\u0414\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f"), l.a.createElement("td", null, l.a.createElement("img", {
                className: "resultBar",
                title: "".concat(t),
                src: "/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif",
                style: {
                    width: "".concat(t, "px"),
                    height: "10px"
                }
            }))), l.a.createElement("tr", null, l.a.createElement("td", {
                style: {
                    fontWeight: "bold",
                    padding: "2px !important"
                }
            }, "\u0427\u0442\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"), l.a.createElement("td", null, l.a.createElement("img", {
                className: "resultBar",
                title: "".concat(a),
                src: "/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif",
                style: {
                    width: "".concat(a, "px"),
                    height: "10px"
                }
            }))), l.a.createElement("tr", null, l.a.createElement("td", {
                style: {
                    fontWeight: "bold",
                    padding: "2px !important"
                }
            }, "\u0423\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f"), l.a.createElement("td", null, l.a.createElement("img", {
                className: "resultBar",
                title: "".concat(n),
                src: "/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif",
                style: {
                    width: "".concat(n, "px"),
                    height: "10px"
                }
            }))), l.a.createElement("tr", null, l.a.createElement("td", {
                style: {
                    fontWeight: "bold",
                    padding: "2px !important"
                }
            }, "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438"), l.a.createElement("td", null, l.a.createElement("img", {
                className: "resultBar",
                title: "".concat(s),
                src: "/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif",
                style: {
                    width: "".concat(s, "px"),
                    height: "10px"
                }
            }))), l.a.createElement("tr", null, l.a.createElement("td", {
                style: {
                    fontWeight: "bold",
                    padding: "2px !important"
                }
            }, "\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0446\u0438\u044f \u0438 \u043f\u043e\u0447\u0435\u0440\u043a"), l.a.createElement("td", null, l.a.createElement("img", {
                className: "resultBar",
                title: "".concat(r),
                src: "/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif",
                style: {
                    width: "".concat(r, "px"),
                    height: "10px"
                }
            }))), l.a.createElement("tr", null, l.a.createElement("td", {
                style: {
                    fontWeight: "bold",
                    padding: "2px !important"
                }
            }, "\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430"), l.a.createElement("td", null, l.a.createElement("img", {
                className: "resultBar",
                title: "".concat(c),
                src: "/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif",
                style: {
                    width: "".concat(c, "px"),
                    height: "10px"
                }
            })))))), l.a.createElement("div", {
                className: "summaryDescription"
            }, l.a.createElement("div", {
                className: "summaryDescription__title",
                style: {}
            }, "\u0414\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f"), l.a.createElement("div", {
                className: "summaryDescription__desc"
            }, "\u0414\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u043e\u0435 \u0437\u0430\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0438\u043b\u0438 \u0441\u0442\u0440\u0435\u0441\u0441\u043e\u043c. \u0427\u0435\u043b\u043e\u0432\u0435\u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u0435\u0442\u043e\u0447\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u0443 \u043e\u043a\u0440\u0443\u0436\u0430\u044e\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044b \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0451 \u043d\u0430 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u0440\u0430\u0437\u044b. \u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u0414\u0435\u0439\u0432\u0438\u0441\u0430\xae \u043f\u043e \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0443\u0447\u0438\u0442 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0438\u043b\u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0443\u044e \u043d\u0435\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0443\u044e \u0434\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043f\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u0436\u0435\u043b\u0430\u043d\u0438\u044e."), l.a.createElement("div", {
                className: "summaryDescription__title",
                style: {}
            }, "\u0427\u0442\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"), l.a.createElement("div", {
                className: "summaryDescription__desc"
            }, "\u0422\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u0447\u0442\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u0430\u043c\u0438 \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u0438. \u041f\u0440\u0438\u0447\u0438\u043d\u043e\u0439 \u0438\u0445 \u0447\u0430\u0441\u0442\u043e \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u0441 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c (\u043f\u0440\u0435\u0434\u043b\u043e\u0433\u0438, \u0441\u043e\u044e\u0437\u044b), \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u043a\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0437. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u041e\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u0414\u0435\u0439\u0432\u0438\u0441\u0430\xae."), l.a.createElement("div", {
                className: "summaryDescription__title",
                style: {}
            }, "\u0423\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f"), l.a.createElement("div", {
                className: "summaryDescription__desc"
            }, "\u0421\u0434\u0432\u0438\u0433\u0438 \u0432\u043e \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0438, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439, \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u0432\u0438\u0434\u043e\u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c \u0432\u0441\u043f\u044f\u0442\u044c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f, \u0440\u0430\u0432\u043d\u043e\u0432\u0435\u0441\u0438\u044f \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0427\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0433\u0438\u043f\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c, \u0438\u043c\u043f\u0443\u043b\u044c\u0441\u0438\u0432\u043d\u044b\u043c, \u043b\u0435\u0433\u043a\u043e \u043e\u0442\u0432\u043b\u0435\u043a\u0430\u0442\u044c\u0441\u044f \u0438\u043b\u0438 \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u0432\u043e\u0438 \u043c\u044b\u0441\u043b\u0438."), l.a.createElement("div", {
                className: "summaryDescription__title",
                style: {}
            }, "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438"), l.a.createElement("div", {
                className: "summaryDescription__desc"
            }, "\u0414\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0442\u043e\u0447\u043d\u043e\u0435 \u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0435 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u0447\u0435\u043c \u043e\u0431\u044b\u0447\u043d\u043e. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0443 \u043d\u0435\u0433\u043e \u043d\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u0441\u0447\u0435\u0442\u0430, \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0439 \u0438 \u0434\u0430\u0436\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432."), l.a.createElement("div", {
                className: "summaryDescription__title",
                style: {}
            }, "\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0446\u0438\u044f \u0438 \u043f\u043e\u0447\u0435\u0440\u043a"), l.a.createElement("div", {
                className: "summaryDescription__desc"
            }, "\u0414\u0435\u0437\u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u043e \u0440\u0430\u0432\u043d\u043e\u0432\u0435\u0441\u0438\u044f \u0438 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f. \u0427\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u043e\u0449\u0443\u0449\u0430\u0442\u044c, \u0447\u0442\u043e \u0434\u0432\u0438\u0436\u0435\u0442\u0441\u044f, \u0434\u0430\u0436\u0435 \u0441\u0438\u0434\u044f \u043d\u0435\u043f\u043e\u0434\u0432\u0438\u0436\u043d\u043e. \u041d\u0430\u0432\u044b\u043a\u0438 \u043c\u0435\u043b\u043a\u043e\u0439 \u0438 \u043a\u0440\u0443\u043f\u043d\u043e\u0439 \u043c\u043e\u0442\u043e\u0440\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0434\u043e\u0440\u0430\u0437\u0432\u0438\u0442\u044b, \u043b\u0438\u0431\u043e \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043f\u0443\u0442\u0430\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \xab\u043b\u0435\u0432\u043e\xbb \u0438 \xab\u043f\u0440\u0430\u0432\u043e\xbb."), l.a.createElement("div", {
                className: "summaryDescription__title",
                style: {}
            }, "\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430"), l.a.createElement("div", {
                className: "summaryDescription__desc"
            }, "\u0414\u0438\u0441\u043b\u0435\u043a\u0442\u0438\u043a\u0438 \u043e\u0431\u0443\u0447\u0430\u044e\u0442\u0441\u044f \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0447\u0435\u0440\u0435\u0437 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u043c\u0438\u0440\u0435. \u0427\u0430\u0441\u0442\u043e \u0438\u0445 \u0432 \u0448\u043a\u043e\u043b\u0435 \u043d\u0435\u0441\u043f\u0440\u0430\u0432\u0434\u0435\u043b\u0438\u0432\u043e \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u043c\u0435\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438, \u043b\u0435\u043d\u0438\u0432\u044b\u043c\u0438 \u0438\u043b\u0438 \u043d\u0435\u0443\u043c\u043d\u044b\u043c\u0438. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044e \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430 \u043d\u0435\u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438. \u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u0438 \u043d\u0430\u0443\u0447\u0430\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u043e\u0441\u043e\u0431\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441\u043e \u0448\u043a\u043e\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u043e\u0439, \u0443 \u043d\u0438\u0445 \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0438\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0430\u0447\u043e\u043a \u0432 \u0441\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0435.")), l.a.createElement("div", {
                className: "linkedButtons"
            }, l.a.createElement("button", {
                className: "printButton",
                onClick: function() {
                    return o()
                }
            }, "\u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c"), l.a.createElement("a", {
                href: "//testdyslexia.eu/\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435/",
                className: "linkedButton"
            }, "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043c\u043e\u0449\u044c"), l.a.createElement("a", {
                href: "//testdyslexia.eu/\u0432\u044b-\u043c\u043e\u0436\u0435\u0442\u0435-\u0443\u0437\u043d\u0430\u0442\u044c-\u0431\u043e\u043b\u044c\u0448\u0435/",
                className: "linkedButton"
            }, "\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435")), l.a.createElement("p", null, "\u0414\u0430\u043d\u043d\u044b\u0439 \u043e\u043d\u043b\u0430\u0439\u043d-\u0442\u0435\u0441\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0439 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0435\u0439 \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u0438 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u0414\u0435\u0439\u0432\u0438\u0441\u0430 (Davis Dyslexia Association International), \u0438 \u0435\u0433\u043e \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ", l.a.createElement("a", {
                href: "http://www.testdyslexia.com"
            }, "http://www.testdyslexia.com")), l.a.createElement("p", null, "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u0438 \u0438 \u043e \u043c\u0435\u0442\u043e\u0434\u0435 \u0414\u0435\u0439\u0432\u0438\u0441\u0430\xae: ", l.a.createElement("a", {
                href: "https://www.dyslexiadar.com"
            }, "http://www.dyslexiadar.com")), l.a.createElement("p", null, "\u041d\u0430\u0439\u0442\u0438 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0438\u0441\u0442\u0430 \u043f\u043e \u041a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u0434\u0438\u0441\u043b\u0435\u043a\u0441\u0438\u0438 \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u0414\u0435\u0439\u0432\u0438\u0441\u0430\xae \u0432 \u0432\u0430\u0448\u0435\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u043c\u043e\u0436\u043d\u043e \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u0438\u0441\u0442\u043e\u0432 \u0414\u0435\u0439\u0432\u0438\u0441\u0430: \u0440\u0443\u0441\u0441\u043a\u043e\u044f\u0437\u044b\u0447\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u0438\u0441\u0442\u044b \u2014 ", l.a.createElement("a", {
                href: "https://www.dyslexiadar.com/metodisty"
            }, "http://www.dyslexiadar.com/metodisty"), ", \u043c\u0435\u0442\u043e\u0434\u0438\u0441\u0442\u044b \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443 \u2014 ", l.a.createElement("a", {
                href: "https://www.davismethod.org"
            }, "http://www.davismethod.org"), ".")))
        };
        var v = function() {
            var e = [[8, 10, 0, 0, 0, 8, 26], [10, 0, 10, 0, 0, 8, 28], [10, 0, 10, 0, 0, 8, 28], [8, 0, 7, 0, 0, 12, 27], [7, 8, 5, 0, 0, 6, 26], [6, 0, 0, 0, 0, 0, 6], [10, 0, 10, 4, 4, 0, 28], [10, 0, 10, 0, 0, 0, 20], [8, 6, 0, 0, 0, 0, 14], [10, 10, 4, 0, 0, 0, 24], [10, 8, 0, 8, 0, 0, 26], [10, 10, 0, 6, 0, 4, 30], [10, 10, 4, 0, 0, 0, 24], [10, 8, 0, 4, 6, 0, 28], [10, 8, 0, 0, 8, 0, 26], [4, 10, 6, 0, 0, 0, 20], [8, 4, 0, 0, 8, 0, 20], [8, 0, 8, 0, 0, 0, 16], [8, 2, 4, 0, 2, 10, 24], [6, 0, 0, 4, 10, 5, 25], [8, 4, 0, 0, 8, 6, 26], [10, 0, 0, 0, 10, 6, 26], [10, 0, 0, 0, 6, 0, 16], [10, 0, 5, 0, 0, 0, 15], [10, 5, 6, 8, 6, 4, 39], [8, 10, 0, 10, 0, 4, 32], [0, 0, 0, 10, 0, 5, 15], [4, 0, 0, 10, 0, 4, 18], [7, 8, 0, 4, 0, 2, 21], [8, 5, 10, 5, 0, 4, 32], [8, 5, 10, 5, 0, 4, 32], [8, 10, 8, 0, 0, 0, 26], [7, 0, 7, 5, 5, 5, 29], [4, 0, 4, 0, 0, 10, 18], [8, 5, 6, 5, 5, 5, 34], [8, 5, 6, 5, 5, 5, 34], [8, 0, 5, 0, 0, 0, 13], [10, 0, 0, 0, 0, 10, 20], [8, 0, 0, 0, 0, 0, 8], [0, 0, 0, 0, 0, 10, 10], [10, 5, 8, 5, 5, 4, 37]]
              , t = [[4, 5, 0, 0, 0, 4, 13], [5, 0, 5, 0, 0, 4, 14], [5, 5, 0, 2, 0, 2, 14], [4, 0, 3, 0, 0, 7, 14], [3, 4, 2, 0, 0, 3, 12], [3, 0, 0, 0, 0, 0, 3], [5, 0, 5, 2, 2, 0, 14], [5, 0, 5, 0, 0, 0, 10], [4, 3, 0, 0, 0, 0, 7], [5, 5, 2, 0, 0, 0, 12], [5, 4, 0, 4, 0, 0, 13], [5, 5, 0, 4, 0, 2, 16], [5, 5, 2, 0, 0, 0, 12], [5, 4, 0, 2, 3, 0, 14], [5, 3, 0, 0, 4, 0, 12], [2, 5, 3, 0, 0, 0, 10], [4, 2, 0, 0, 4, 0, 10], [4, 0, 4, 0, 0, 0, 8], [4, 1, 2, 0, 1, 5, 13], [3, 0, 2, 2, 5, 2, 14], [4, 2, 0, 0, 4, 3, 13], [5, 0, 0, 0, 5, 3, 13], [5, 0, 0, 0, 3, 0, 8], [5, 0, 2, 0, 0, 0, 7], [5, 2, 3, 4, 3, 2, 19], [4, 5, 0, 5, 0, 2, 16], [0, 0, 0, 5, 0, 2, 7], [2, 0, 0, 5, 0, 2, 9], [4, 4, 0, 2, 0, 1, 11], [4, 2, 5, 2, 0, 2, 15], [4, 2, 5, 2, 0, 2, 15], [4, 5, 4, 0, 0, 0, 13], [3, 0, 3, 2, 2, 3, 13], [2, 0, 2, 0, 0, 5, 9], [4, 3, 3, 3, 3, 3, 19], [4, 3, 3, 3, 3, 3, 19], [4, 0, 2, 0, 0, 0, 6], [5, 0, 0, 0, 0, 6, 11], [8, 0, 0, 0, 0, 0, 8], [0, 0, 0, 0, 0, 3, 3], [5, 2, 4, 2, 2, 2, 17]]
              , a = Object(n.useState)({
                result: [0, 0, 0, 0, 0, 0, 0]
            })
              , s = Object(c.a)(a, 2)
              , r = s[0]
              , i = s[1]
              , m = Object(n.useState)({
                answers: {}
            })
              , o = Object(c.a)(m, 2)
              , E = o[0]
              , u = o[1]
              , v = Object(n.useState)({
                sixthChoices: {}
            })
              , f = Object(c.a)(v, 2)
              , y = f[0]
              , N = f[1]
              , x = Object(n.useState)(1)
              , b = Object(c.a)(x, 2)
              , S = b[0]
              , M = b[1];
            function B(e, t) {
                var a = E.answers;
                a[5] = e,
                u({
                    answers: a,
                    choices: t
                })
            }
            function C(a, n) {
                console.log("setting asnwer");
                var l = E.answers;
                l[a] = "1" === n ? e[a] : "2" === n ? t[a] : [0, 0, 0, 0, 0, 0, 0],
                u({
                    answers: l
                })
            }
            function k(e) {
                "nextPage" === e ? M(S + 1) : "previousPage" === e && M(S - 1),
                setTimeout((function() {
                    document.getElementsByClassName("progress")[0].scrollIntoView({})
                }
                ), 250)
            }
            return l.a.createElement("div", {
                className: "home"
            }, 1 === S ? l.a.createElement(d, {
                sixthQuestionAnswer: B,
                setAnswer: C,
                setChoicesFromSixth: function(e) {
                    y.choices,
                    N({
                        choices: e
                    })
                },
                changePage: k
            }) : "", 2 === S ? l.a.createElement(w, {
                setAnswer: C,
                changePage: k
            }) : "", 3 === S ? l.a.createElement(g, {
                setAnswer: C,
                changePage: k
            }) : "", 4 === S ? l.a.createElement(h, {
                setAnswer: C,
                changePage: k
            }) : "", 5 === S ? l.a.createElement(p, {
                setAnswer: C,
                changePage: k,
                countResult: function() {
                    console.log("countResult()"),
                    console.log(E.answers);
                    var e = [0, 0, 0, 0, 0, 0, 0];
                    for (var t in E.answers)
                        for (var a = 0; a < 6; a++)
                            e[a] += E.answers[t][a];
                    for (var n = [0, 0, 0, 0, 0, 0, 0], l = [0, 8, 9, 16, 17, 18, 19, 24, 25, 28, 29, 31, 32, 40], s = 0, r = [0, 0, 0, 0, 0, 0, 0], c = [304, 297, 63, 221, 129, 133, 308], m = 0; m < n.length; m++) {
                        for (var o in E.answers)
                            5 !== o && o >= l[s] && o <= l[s + 1] && (o >= 29 && o <= 31 ? 0 !== E.answers[o][6] && (n[m] = n[4] + E.answers[o][6]) : n[m] += E.answers[o][6]);
                        r[m] = (n[m] / c[m] * 100).toFixed(),
                        console.log(n[m], c[m], r[m]),
                        s += 2
                    }
                    i({
                        result: e,
                        totals: {
                            GEN: r[0],
                            VRS: r[1],
                            HAS: r[2],
                            WMS: r[3],
                            MTM: r[4],
                            MAC: r[5],
                            BHD: r[6]
                        }
                    }),
                    k("nextPage")
                }
            }) : "", 6 === S ? l.a.createElement(l.a.Fragment, null, l.a.createElement(A, {
                result: r.result,
                totals: r.totals,
                sixthQuestionAnswer: B,
                sixthQuestionChoices: y.choices
            })) : "")
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        r.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(v, null)), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    },
    3: function(e, t, a) {},
    5: function(e, t, a) {
        e.exports = a(10)
    }
}, [[5, 1, 2]]]);
//# sourceMappingURL=main.d097f454.chunk.js.map
