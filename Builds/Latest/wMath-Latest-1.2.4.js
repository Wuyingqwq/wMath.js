/*
Made By Wuying.
If you can't understand Chinese,you can use Google Translate.
You can find it in github.
Link(Only this):https://github.com/Wuyingqwq/wMath
*/

/*
本JS对常见数学的计算进行了类型判断以及弹出警告。
本JS将会持续更新。
*/

/*
如果用户输入的内容不是数字，则返回数的返回值为Undefined（处解方程外）
*/

/*
解二元二次方程函数名：eq()
需传入两个方程式子，且未知数必须要为x,y

使用时请务必引入Algebra.js，原Github链接为：https://github.com/nicolewhite/algebra.js
返回值是一个数组，[0]为x的表达式，[1]为y的表达式,[2]为x的值,[3]为y的值

注：
1.如果不输入正确的方程，会报错
2.运算符号只能为加减乘，注：乘无需加x或*，例如3x

E-mail:wuyingqwq@gmail.com
*/

var getDate = new Date();

//解方程所需的JS
window.onload = function () {
    (function (e) { if (typeof exports === "object" && typeof module !== "undefined") { module.exports = e() } else if (typeof define === "function" && define.amd) { define([], e) } else { var t; if (typeof window !== "undefined") { t = window } else if (typeof global !== "undefined") { t = global } else if (typeof self !== "undefined") { t = self } else { t = this } t.algebra = e() } })(function () { var e, t, r; return function n(e, t, r) { function i(o, a) { if (!t[o]) { if (!e[o]) { var u = typeof require == "function" && require; if (!a && u) return u(o, !0); if (s) return s(o, !0); var l = new Error("Cannot find module '" + o + "'"); throw l.code = "MODULE_NOT_FOUND", l } var c = t[o] = { exports: {} }; e[o][0].call(c.exports, function (t) { var r = e[o][1][t]; return i(r ? r : t) }, c, c.exports, n, e, t, r) } return t[o].exports } var s = typeof require == "function" && require; for (var o = 0; o < r.length; o++)i(r[o]); return i }({ 1: [function (e, t, r) { var n = e("./src/fractions"); var i = e("./src/expressions").Expression; var s = e("./src/equations"); var o = e("./src/parser"); var a = function (e) { var t = new o; var r = t.parse(e); return r }; t.exports = { Fraction: n, Expression: i, Equation: s, parse: a } }, { "./src/equations": 2, "./src/expressions": 3, "./src/fractions": 4, "./src/parser": 7 }], 2: [function (e, t, r) { var n = e("./expressions").Expression; var i = e("./expressions").Variable; var s = e("./expressions").Term; var o = e("./fractions"); var a = e("./helper").isInt; var u = function (e, t) { if (e instanceof n) { this.lhs = e; if (t instanceof n) { this.rhs = t } else if (t instanceof o || a(t)) { this.rhs = new n(t) } else { throw new TypeError("Invalid Argument (" + t.toString() + "): Right-hand side must be of type Expression, Fraction or Integer.") } } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Left-hand side must be of type Expression.") } }; u.prototype.solveFor = function (e) { if (!this.lhs._hasVariable(e) && !this.rhs._hasVariable(e)) { throw new TypeError("Invalid Argument (" + e.toString() + "): Variable does not exist in the equation.") } if (this._isLinear() || this._variableCanBeIsolated(e)) { var t = new s(new i(e)); var r = new n; var u = new n; for (var l = 0; l < this.rhs.terms.length; l++){ var c = this.rhs.terms[l]; if (c.canBeCombinedWith(t)) { r = r.subtract(c) } else { u = u.add(c) } } for (var l = 0; l < this.lhs.terms.length; l++){ var c = this.lhs.terms[l]; if (c.canBeCombinedWith(t)) { r = r.add(c) } else { u = u.subtract(c) } } u = u.subtract(this.lhs.constant()); u = u.add(this.rhs.constant()); if (r.terms.length === 0) { if (r.constant().equalTo(u.constant())) { return new o(1, 1) } else { throw new EvalError("No Solution") } } u = u.divide(r.terms[0].coefficient()); if (u.terms.length === 0) { return u.constant().reduce() } u._sort(); return u } else { var r = this.lhs.copy(); r = r.subtract(this.rhs); if (r.terms.length === 0) { if (r.constant().valueOf() === 0) { return [new o(1, 1)] } else { throw new EvalError("No Solution") } } else if (this._isQuadratic(e)) { var f = r._quadraticCoefficients(); var p = f.a; var h = f.b; var v = f.c; var m = h.pow(2).subtract(p.multiply(v).multiply(4)); if (m.valueOf() >= 0) { if (m.valueOf() === 0) { return [h.multiply(-1).divide(p.multiply(2)).reduce()] } else { var d; if (m._squareRootIsRational()) { d = m.pow(.5); var y = h.multiply(-1).subtract(d).divide(p.multiply(2)); var g = h.multiply(-1).add(d).divide(p.multiply(2)); return [y.reduce(), g.reduce()] } else { d = Math.sqrt(m.valueOf()); p = p.valueOf(); h = h.valueOf(); var y = (-h - d) / (2 * p); var g = (-h + d) / (2 * p); return [y, g] } } } else { return [] } } else if (this._isCubic(e)) { var f = r._cubicCoefficients(); var p = f.a; var h = f.b; var v = f.c; var b = f.d; var w = p.multiply(h).multiply(v).multiply(b).multiply(18); w = w.subtract(h.pow(3).multiply(b).multiply(4)); w = w.add(h.pow(2).multiply(v.pow(2))); w = w.subtract(p.multiply(v.pow(3)).multiply(4)); w = w.subtract(p.pow(2).multiply(b.pow(2)).multiply(27)); var _ = h.pow(2).subtract(p.multiply(v).multiply(3)); if (w.valueOf() === 0) { if (_.valueOf() === 0) { var y = h.multiply(-1).divide(p.multiply(3)); return [y.reduce()] } else { var y = p.multiply(h).multiply(v).multiply(4); y = y.subtract(p.pow(2).multiply(b).multiply(9)); y = y.subtract(h.pow(3)); y = y.divide(p.multiply(_)); var g = p.multiply(b).multiply(9).subtract(h.multiply(v)).divide(_.multiply(2)); return [y.reduce(), g.reduce()] } } else { var T = new n("t").subtract(h.divide(p.multiply(3))); var E = {}; E[e] = T; var x = r.eval(E); var S = x._cubicCoefficients(); var p = S.a.valueOf(); var h = S.b.valueOf(); var v = S.c.valueOf(); var b = S.d.valueOf(); if (w.valueOf() < 0) { var I = -h / 3 * p; var R = Math.pow(I, 3) + (h * v - 3 * p * b) / (6 * p ^ 2); var M = v / 3 * p; var O = Math.sqrt(Math.pow(R, 2) + Math.pow(M - Math.pow(I, 2), 3)); var A = Math.cbrt(R + O) + Math.cbrt(R - O) + I; A = a(A) ? new o(A, 1) : A; var E = {}; E[e] = Math.round(A); A = r.eval(E).toString() === "0" ? new o(Math.round(A), 1) : A; return [A] } else { var R = Math.sqrt(-3 * p * v / (9 * Math.pow(p, 2))); var D = 2 * p * Math.pow(R, 3); var k = 1 / 3 * Math.acos(-b / D); var P = 2 * R * Math.cos(k); var V = 2 * R * Math.cos(2 * Math.PI / 3 - k); var C = 2 * R * Math.cos(2 * Math.PI / 3 + k); var F = P + T.constant().valueOf(); var q = V + T.constant().valueOf(); var L = C + T.constant().valueOf(); F = a(F) ? new o(F, 1) : F; q = a(q) ? new o(q, 1) : q; L = a(L) ? new o(L, 1) : L; var N = {}; var W = {}; var U = {}; N[e] = Math.round(F); W[e] = Math.round(q); U[e] = Math.round(L); F = r.eval(N).toString() === "0" ? new o(Math.round(F), 1) : F; q = r.eval(W).toString() === "0" ? new o(Math.round(q), 1) : q; L = r.eval(U).toString() === "0" ? new o(Math.round(L), 1) : L; return [L, q, F] } } } } }; u.prototype.eval = function (e) { return new u(this.lhs.eval(e), this.rhs.eval(e)) }; u.prototype.toString = function () { return this.lhs.toString() + " = " + this.rhs.toString() }; u.prototype.toTex = function () { return this.lhs.toTex() + " = " + this.rhs.toTex() }; u.prototype._maxDegree = function () { var e = this.lhs._maxDegree(); var t = this.rhs._maxDegree(); return Math.max(e, t) }; u.prototype._maxDegreeOfVariable = function (e) { return Math.max(this.lhs._maxDegreeOfVariable(e), this.rhs._maxDegreeOfVariable(e)) }; u.prototype._variableCanBeIsolated = function (e) { return this._maxDegreeOfVariable(e) === 1 && this._noCrossProductsWithVariable(e) }; u.prototype._noCrossProductsWithVariable = function (e) { return this.lhs._noCrossProductsWithVariable(e) && this.rhs._noCrossProductsWithVariable(e) }; u.prototype._noCrossProducts = function () { return this.lhs._noCrossProducts() && this.rhs._noCrossProducts() }; u.prototype._onlyHasVariable = function (e) { return this.lhs._onlyHasVariable(e) && this.rhs._onlyHasVariable(e) }; u.prototype._isLinear = function () { return this._maxDegree() === 1 && this._noCrossProducts() }; u.prototype._isQuadratic = function (e) { return this._maxDegree() === 2 && this._onlyHasVariable(e) }; u.prototype._isCubic = function (e) { return this._maxDegree() === 3 && this._onlyHasVariable(e) }; t.exports = u }, { "./expressions": 3, "./fractions": 4, "./helper": 5 }], 3: [function (e, t, r) { var n = e("./fractions"); var i = e("./helper").isInt; var s = function (e) { this.constants = []; if (typeof e === "string") { var t = new o(e); var r = new Term(t); this.terms = [r] } else if (i(e)) { this.constants = [new n(e, 1)]; this.terms = [] } else if (e instanceof n) { this.constants = [e]; this.terms = [] } else if (e instanceof Term) { this.terms = [e] } else if (typeof e === "undefined") { this.terms = [] } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Argument must be of type String, Integer, Fraction or Term.") } }; s.prototype.constant = function () { return this.constants.reduce(function (e, t) { return e.add(t) }, new n(0, 1)) }; s.prototype.simplify = function () { var e = this.copy(); e.terms = e.terms.map(function (e) { return e.simplify() }); e._sort(); e._combineLikeTerms(); e._moveTermsWithDegreeZeroToConstants(); e._removeTermsWithCoefficientZero(); e.constants = e.constant().valueOf() === 0 ? [] : [e.constant()]; return e }; s.prototype.copy = function () { var e = new s; e.constants = this.constants.map(function (e) { return e.copy() }); e.terms = this.terms.map(function (e) { return e.copy() }); return e }; s.prototype.add = function (e, t) { var r = this.copy(); if (typeof e === "string" || e instanceof Term || i(e) || e instanceof n) { var o = new s(e); return r.add(o, t) } else if (e instanceof s) { var a = e.copy().terms; r.terms = r.terms.concat(a); r.constants = r.constants.concat(e.constants); r._sort() } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Summand must be of type String, Expression, Term, Fraction or Integer.") } return t || t === undefined ? r.simplify() : r }; s.prototype.subtract = function (e, t) { var r = e instanceof s ? e.multiply(-1) : new s(e).multiply(-1); return this.add(r, t) }; s.prototype.multiply = function (e, t) { var r = this.copy(); if (typeof e === "string" || e instanceof Term || i(e) || e instanceof n) { var o = new s(e); return r.multiply(o, t) } else if (e instanceof s) { var a = e.copy(); var u = []; for (var l = 0; l < r.terms.length; l++){ var c = r.terms[l]; for (var f = 0; f < a.terms.length; f++){ var p = a.terms[f]; u.push(c.multiply(p, t)) } for (var f = 0; f < a.constants.length; f++){ u.push(c.multiply(a.constants[f], t)) } } for (var l = 0; l < a.terms.length; l++){ var p = a.terms[l]; for (var f = 0; f < r.constants.length; f++){ u.push(p.multiply(r.constants[f], t)) } } var h = []; for (var l = 0; l < r.constants.length; l++){ var v = r.constants[l]; for (var f = 0; f < a.constants.length; f++){ var m = a.constants[f]; var d = new Term; d = d.multiply(m, false); d = d.multiply(v, false); u.push(d) } } r.constants = h; r.terms = u; r._sort() } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Multiplicand must be of type String, Expression, Term, Fraction or Integer.") } return t || t === undefined ? r.simplify() : r }; s.prototype.divide = function (e, t) { if (e instanceof n || i(e)) { if (e.valueOf() === 0) { throw new EvalError("Divide By Zero") } var r = this.copy(); for (var s = 0; s < r.terms.length; s++){ var o = r.terms[s]; for (var a = 0; a < o.coefficients.length; a++){ o.coefficients[a] = o.coefficients[a].divide(e, t) } } r.constants = r.constants.map(function (r) { return r.divide(e, t) }); return r } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Divisor must be of type Fraction or Integer.") } }; s.prototype.pow = function (e, t) { if (i(e)) { var r = this.copy(); if (e === 0) { return (new s).add(1) } else { for (var n = 1; n < e; n++){ r = r.multiply(this, t) } r._sort() } return t || t === undefined ? r.simplify() : r } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Exponent must be of type Integer.") } }; s.prototype.eval = function (e, t) { var r = new s; r.constants = t ? [this.constant()] : this.constants.slice(); r = this.terms.reduce(function (r, n) { return r.add(n.eval(e, t), t) }, r); return r }; s.prototype.summation = function (e, t, r, n) { var i = this.copy(); var o = new s; for (var a = t; a < r + 1; a++){ var u = {}; u[e] = a; o = o.add(i.eval(u, n), n) } return o }; s.prototype.toString = function () { var e = ""; for (var t = 0; t < this.terms.length; t++){ var r = this.terms[t]; e += (r.coefficients[0].valueOf() < 0 ? " - " : " + ") + r.toString() } for (var t = 0; t < this.constants.length; t++){ var n = this.constants[t]; e += (n.valueOf() < 0 ? " - " : " + ") + n.abs().toString() } if (e.substring(0, 3) === " - ") { return "-" + e.substring(3, e.length) } else if (e.substring(0, 3) === " + ") { return e.substring(3, e.length) } else { return "0" } }; s.prototype.toTex = function (e) { var t = ""; for (var r = 0; r < this.terms.length; r++){ var n = this.terms[r]; t += (n.coefficients[0].valueOf() < 0 ? " - " : " + ") + n.toTex(e) } for (var r = 0; r < this.constants.length; r++){ var i = this.constants[r]; t += (i.valueOf() < 0 ? " - " : " + ") + i.abs().toTex() } if (t.substring(0, 3) === " - ") { return "-" + t.substring(3, t.length) } else if (t.substring(0, 3) === " + ") { return t.substring(3, t.length) } else { return "0" } }; s.prototype._removeTermsWithCoefficientZero = function () { this.terms = this.terms.filter(function (e) { return e.coefficient().reduce().numer !== 0 }); return this }; s.prototype._combineLikeTerms = function () { function e(e, t) { for (var r = 0; r < t.length; r++){ if (e.canBeCombinedWith(t[r])) { return true } } return false } var t = []; var r = []; for (var n = 0; n < this.terms.length; n++){ var i = this.terms[n]; if (e(i, r)) { continue } else { for (var s = n + 1; s < this.terms.length; s++){ var o = this.terms[s]; if (i.canBeCombinedWith(o)) { i = i.add(o) } } t.push(i); r.push(i) } } this.terms = t; return this }; s.prototype._moveTermsWithDegreeZeroToConstants = function () { var e = []; var t = new n(0, 1); for (var r = 0; r < this.terms.length; r++){ var i = this.terms[r]; if (i.variables.length === 0) { t = t.add(i.coefficient()) } else { e.push(i) } } this.constants.push(t); this.terms = e; return this }; s.prototype._sort = function () { function e(e, t) { var r = e.maxDegree(); var n = t.maxDegree(); if (r === n) { var i = e.variables.length; var s = t.variables.length; return s - i } else { return n - r } } this.terms = this.terms.sort(e); return this }; s.prototype._hasVariable = function (e) { for (var t = 0; t < this.terms.length; t++){ if (this.terms[t].hasVariable(e)) { return true } } return false }; s.prototype._onlyHasVariable = function (e) { for (var t = 0; t < this.terms.length; t++){ if (!this.terms[t].onlyHasVariable(e)) { return false } } return true }; s.prototype._noCrossProductsWithVariable = function (e) { for (var t = 0; t < this.terms.length; t++){ var r = this.terms[t]; if (r.hasVariable(e) && !r.onlyHasVariable(e)) { return false } } return true }; s.prototype._noCrossProducts = function () { for (var e = 0; e < this.terms.length; e++){ var t = this.terms[e]; if (t.variables.length > 1) { return false } } return true }; s.prototype._maxDegree = function () { return this.terms.reduce(function (e, t) { return Math.max(e, t.maxDegree()) }, 1) }; s.prototype._maxDegreeOfVariable = function (e) { return this.terms.reduce(function (t, r) { return Math.max(t, r.maxDegreeOfVariable(e)) }, 1) }; s.prototype._quadraticCoefficients = function () { var e; var t = new n(0, 1); for (var r = 0; r < this.terms.length; r++){ var i = this.terms[r]; e = i.maxDegree() === 2 ? i.coefficient().copy() : e; t = i.maxDegree() === 1 ? i.coefficient().copy() : t } var s = this.constant(); return { a: e, b: t, c: s } }; s.prototype._cubicCoefficients = function () { var e; var t = new n(0, 1); var r = new n(0, 1); for (var i = 0; i < this.terms.length; i++){ var s = this.terms[i]; e = s.maxDegree() === 3 ? s.coefficient().copy() : e; t = s.maxDegree() === 2 ? s.coefficient().copy() : t; r = s.maxDegree() === 1 ? s.coefficient().copy() : r } var o = this.constant(); return { a: e, b: t, c: r, d: o } }; Term = function (e) { if (e instanceof o) { this.variables = [e.copy()] } else if (typeof e === "undefined") { this.variables = [] } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Term initializer must be of type Variable.") } this.coefficients = [new n(1, 1)] }; Term.prototype.coefficient = function () { return this.coefficients.reduce(function (e, t) { return e.multiply(t) }, new n(1, 1)) }; Term.prototype.simplify = function () { var e = this.copy(); e.coefficients = [this.coefficient()]; e.combineVars(); return e.sort() }; Term.prototype.combineVars = function () { var e = {}; for (var t = 0; t < this.variables.length; t++){ var r = this.variables[t]; if (r.variable in e) { e[r.variable] += r.degree } else { e[r.variable] = r.degree } } var n = []; for (var i in e) { var s = new o(i); s.degree = e[i]; n.push(s) } this.variables = n; return this }; Term.prototype.copy = function () { var e = new Term; e.coefficients = this.coefficients.map(function (e) { return e.copy() }); e.variables = this.variables.map(function (e) { return e.copy() }); return e }; Term.prototype.add = function (e) { if (e instanceof Term && this.canBeCombinedWith(e)) { var t = this.copy(); t.coefficients = [t.coefficient().add(e.coefficient())]; return t } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Summand must be of type String, Expression, Term, Fraction or Integer.") } }; Term.prototype.subtract = function (e) { if (e instanceof Term && this.canBeCombinedWith(e)) { var t = this.copy(); t.coefficients = [t.coefficient().subtract(e.coefficient())]; return t } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Subtrahend must be of type String, Expression, Term, Fraction or Integer.") } }; Term.prototype.multiply = function (e, t) { var r = this.copy(); if (e instanceof Term) { r.variables = r.variables.concat(e.variables); r.coefficients = e.coefficients.concat(r.coefficients) } else if (i(e) || e instanceof n) { var s = i(e) ? new n(e, 1) : e; if (r.variables.length === 0) { r.coefficients.push(s) } else { r.coefficients.unshift(s) } } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Multiplicand must be of type String, Expression, Term, Fraction or Integer.") } return t || t === undefined ? r.simplify() : r }; Term.prototype.divide = function (e, t) { if (i(e) || e instanceof n) { var r = this.copy(); r.coefficients = r.coefficients.map(function (r) { return r.divide(e, t) }); return r } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Argument must be of type Fraction or Integer.") } }; Term.prototype.eval = function (e, t) { var r = this.copy(); var o = Object.keys(e); var a = r.coefficients.reduce(function (e, r) { return e.multiply(r, t) }, new s(1)); for (var u = 0; u < r.variables.length; u++){ var l = r.variables[u]; var c; if (l.variable in e) { var f = e[l.variable]; if (f instanceof n || f instanceof s) { c = f.pow(l.degree) } else if (i(f)) { c = Math.pow(f, l.degree) } else { throw new TypeError("Invalid Argument (" + f + "): Can only evaluate Expressions or Fractions.") } } else { c = new s(l.variable).pow(l.degree) } a = a.multiply(c, t) } return a }; Term.prototype.hasVariable = function (e) { for (var t = 0; t < this.variables.length; t++){ if (this.variables[t].variable === e) { return true } } return false }; Term.prototype.maxDegree = function () { return this.variables.reduce(function (e, t) { return Math.max(e, t.degree) }, 1) }; Term.prototype.maxDegreeOfVariable = function (e) { return this.variables.reduce(function (t, r) { return r.variable === e ? Math.max(t, r.degree) : t }, 1) }; Term.prototype.canBeCombinedWith = function (e) { var t = this.variables; var r = e.variables; if (t.length != r.length) { return false } matches = 0; for (var n = 0; n < t.length; n++){ for (var i = 0; i < r.length; i++){ if (t[n].variable === r[i].variable && t[n].degree === r[i].degree) { matches += 1 } } } return matches === t.length }; Term.prototype.onlyHasVariable = function (e) { for (var t = 0; t < this.variables.length; t++){ if (this.variables[t].variable != e) { return false } } return true }; Term.prototype.sort = function () { function e(e, t) { return t.degree - e.degree } this.variables = this.variables.sort(e); return this }; Term.prototype.toString = function () { var e = ""; for (var t = 0; t < this.coefficients.length; t++){ var r = this.coefficients[t]; if (r.abs().numer !== 1 || r.abs().denom !== 1) { e += " * " + r.toString() } } e = this.variables.reduce(function (e, t) { return e.concat(t.toString()) }, e); e = e.substring(0, 3) === " * " ? e.substring(3, e.length) : e; e = e.substring(0, 1) === "-" ? e.substring(1, e.length) : e; return e }; Term.prototype.toTex = function (e) { var e = e === undefined ? {} : e; e.multiplication = !("multiplication" in e) ? "cdot" : e.multiplication; var t = " \\" + e.multiplication + " "; var r = ""; for (var n = 0; n < this.coefficients.length; n++){ var i = this.coefficients[n]; if (i.abs().numer !== 1 || i.abs().denom !== 1) { r += t + i.toTex() } } r = this.variables.reduce(function (e, t) { return e.concat(t.toTex()) }, r); r = r.substring(0, t.length) === t ? r.substring(t.length, r.length) : r; r = r.substring(0, 1) === "-" ? r.substring(1, r.length) : r; r = r.substring(0, 7) === "\\frac{-" ? "\\frac{" + r.substring(7, r.length) : r; return r }; var o = function (e) { if (typeof e === "string") { this.variable = e; this.degree = 1 } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Variable initalizer must be of type String.") } }; o.prototype.copy = function () { var e = new o(this.variable); e.degree = this.degree; return e }; o.prototype.toString = function () { var e = this.degree; var t = this.variable; if (e === 0) { return "" } else if (e === 1) { return t } else { return t + "^" + e } }; o.prototype.toTex = function () { var e = this.degree; var t = this.variable; if (GREEK_LETTERS.indexOf(t) > -1) { t = "\\" + t } if (e === 0) { return "" } else if (e === 1) { return t } else { return t + "^{" + e + "}" } }; t.exports = { Expression: s, Term: Term, Variable: o } }, { "./fractions": 4, "./helper": 5 }], 4: [function (e, t, r) { var n = e("./helper").isInt; var i = e("./helper").gcd; var s = e("./helper").lcm; var o = function (e, t) { if (t === 0) { throw new EvalError("Divide By Zero") } else if (n(e) && n(t)) { this.numer = e; this.denom = t } else { throw new TypeError("Invalid Argument (" + e.toString() + "," + t.toString() + "): Divisor and dividend must be of type Integer.") } }; o.prototype.copy = function () { return new o(this.numer, this.denom) }; o.prototype.reduce = function () { var e = this.copy(); var t = i(e.numer, e.denom); e.numer = e.numer / t; e.denom = e.denom / t; if (Math.sign(e.denom) == -1 && Math.sign(e.numer) == 1) { e.numer *= -1; e.denom *= -1 } return e }; o.prototype.equalTo = function (e) { if (e instanceof o) { var t = this.reduce(); var r = e.reduce(); return t.numer === r.numer && t.denom === r.denom } else { return false } }; o.prototype.add = function (e, t) { t = t === undefined ? true : t; var r, i; if (e instanceof o) { r = e.numer; i = e.denom } else if (n(e)) { r = e; i = 1 } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Summand must be of type Fraction or Integer.") } var a = this.copy(); if (this.denom == i) { a.numer += r } else { var u = s(a.denom, i); var l = u / a.denom; var c = u / i; a.numer *= l; a.denom *= l; r *= c; a.numer += r } return t ? a.reduce() : a }; o.prototype.subtract = function (e, t) { t = t === undefined ? true : t; var r = this.copy(); if (e instanceof o) { return r.add(new o(-e.numer, e.denom), t) } else if (n(e)) { return r.add(new o(-e, 1), t) } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Subtrahend must be of type Fraction or Integer.") } }; o.prototype.multiply = function (e, t) { t = t === undefined ? true : t; var r, i; if (e instanceof o) { r = e.numer; i = e.denom } else if (n(e) && e) { r = e; i = 1 } else if (e === 0) { r = 0; i = 1 } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Multiplicand must be of type Fraction or Integer.") } var s = this.copy(); s.numer *= r; s.denom *= i; return t ? s.reduce() : s }; o.prototype.divide = function (e, t) { t = t === undefined ? true : t; if (e.valueOf() === 0) { throw new EvalError("Divide By Zero") } var r = this.copy(); if (e instanceof o) { return r.multiply(new o(e.denom, e.numer), t) } else if (n(e)) { return r.multiply(new o(1, e), t) } else { throw new TypeError("Invalid Argument (" + e.toString() + "): Divisor must be of type Fraction or Integer.") } }; o.prototype.pow = function (e, t) { t = t === undefined ? true : t; var r = this.copy(); r.numer = Math.pow(r.numer, e); r.denom = Math.pow(r.denom, e); return t ? r.reduce() : r }; o.prototype.abs = function () { var e = this.copy(); e.numer = Math.abs(e.numer); e.denom = Math.abs(e.denom); return e }; o.prototype.valueOf = function () { return this.numer / this.denom }; o.prototype.toString = function () { if (this.numer === 0) { return "0" } else if (this.denom === 1) { return this.numer.toString() } else if (this.denom === -1) { return (-this.numer).toString() } else { return this.numer + "/" + this.denom } }; o.prototype.toTex = function () { if (this.numer === 0) { return "0" } else if (this.denom === 1) { return this.numer.toString() } else if (this.denom === -1) { return (-this.numer).toString() } else { return "\\frac{" + this.numer + "}{" + this.denom + "}" } }; o.prototype._squareRootIsRational = function () { if (this.valueOf() === 0) { return true } var e = Math.sqrt(this.numer); var t = Math.sqrt(this.denom); return n(e) && n(t) }; o.prototype._cubeRootIsRational = function () { if (this.valueOf() === 0) { return true } var e = Math.cbrt(this.numer); var t = Math.cbrt(this.denom); return n(e) && n(t) }; t.exports = o }, { "./helper": 5 }], 5: [function (e, t, r) { function n(e, t) { while (t) { var r = e; e = t; t = r % t } return e } function i(e, t) { return e * t / n(e, t) } function s(e) { return typeof e == "number" && e % 1 === 0 } function o(e, t) { t = typeof t === "undefined" ? 2 : t; var r = Math.pow(10, t); return Math.round(parseFloat(e) * r) / r } Number.prototype.toTex = function () { return this.toString() }; Array.prototype.toTex = function () { return this.map(function (e) { return e.toTex() }).join() }; GREEK_LETTERS = ["alpha", "beta", "gamma", "Gamma", "delta", "Delta", "epsilon", "varepsilon", "zeta", "eta", "theta", "vartheta", "Theta", "iota", "kappa", "lambda", "Lambda", "mu", "nu", "xi", "Xi", "pi", "Pi", "rho", "varrho", "sigma", "Sigma", "tau", "upsilon", "Upsilon", "phi", "varphi", "Phi", "chi", "psi", "Psi", "omega", "Omega"]; r.gcd = n; r.lcm = i; r.isInt = s; r.round = o; r.GREEK_LETTERS = GREEK_LETTERS }, {}], 6: [function (e, t, r) { "use strict"; var n = function () { this.pos = 0; this.buf = null; this.buflen = 0; this.optable = { "+": "PLUS", "-": "MINUS", "*": "MULTIPLY", "/": "DIVIDE", "^": "POWER", "(": "L_PAREN", ")": "R_PAREN", "=": "EQUALS" } }; n.prototype.input = function (e) { this.pos = 0; this.buf = e; this.buflen = e.length }; n.prototype.token = function () { this._skipnontokens(); if (this.pos >= this.buflen) { return null } var e = this.buf.charAt(this.pos); var t = this.optable[e]; if (t !== undefined) { if (t === "L_PAREN" || t === "R_PAREN") { return { type: "PAREN", value: t, pos: this.pos++ } } else { return { type: "OPERATOR", value: t, pos: this.pos++ } } } else { if (n._isalpha(e)) { return this._process_identifier() } else if (n._isdigit(e)) { return this._process_number() } else { throw new SyntaxError("Token error at character " + e + " at position " + this.pos) } } }; n._isdigit = function (e) { return e >= "0" && e <= "9" }; n._isalpha = function (e) { return e >= "a" && e <= "z" || e >= "A" && e <= "Z" }; n._isalphanum = function (e) { return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" }; n.prototype._process_digits = function (e) { var t = e; while (t < this.buflen && n._isdigit(this.buf.charAt(t))) { t++ } return t }; n.prototype._process_number = function () { var e = this._process_digits(this.pos); if (this.buf.charAt(e) === ".") { e = this._process_digits(e + 1) } if (this.buf.charAt(e - 1) === ".") { throw new SyntaxError("Decimal point without decimal digits at position " + (e - 1)) } var t = { type: "NUMBER", value: this.buf.substring(this.pos, e), pos: this.pos }; this.pos = e; return t }; n.prototype._process_identifier = function () { var e = this.pos + 1; while (e < this.buflen && n._isalphanum(this.buf.charAt(e))) { e++ } var t = { type: "IDENTIFIER", value: this.buf.substring(this.pos, e), pos: this.pos }; this.pos = e; return t }; n.prototype._skipnontokens = function () { while (this.pos < this.buflen) { var e = this.buf.charAt(this.pos); if (e == " " || e == "	" || e == "\r" || e == "\n") { this.pos++ } else { break } } }; t.exports = n }, {}], 7: [function (e, t, r) { "use strict"; var n = e("./lexer"), i = e("./expressions").Expression, s = e("./fractions"), o = e("./equations"); var a = function () { this.lexer = new n; this.current_token = null }; a.prototype.update = function () { this.current_token = this.lexer.token() }; a.prototype.match = function (e) { if (this.current_token === null) return e === "epsilon"; switch (e) { case "plus": return this.current_token.type === "OPERATOR" && this.current_token.value === "PLUS"; case "minus": return this.current_token.type === "OPERATOR" && this.current_token.value === "MINUS"; case "multiply": return this.current_token.type === "OPERATOR" && this.current_token.value === "MULTIPLY"; case "power": return this.current_token.type === "OPERATOR" && this.current_token.value === "POWER"; case "divide": return this.current_token.type === "OPERATOR" && this.current_token.value === "DIVIDE"; case "equal": return this.current_token.type === "OPERATOR" && this.current_token.value === "EQUALS"; case "lparen": return this.current_token.type === "PAREN" && this.current_token.value === "L_PAREN"; case "rparen": return this.current_token.type === "PAREN" && this.current_token.value === "R_PAREN"; case "num": return this.current_token.type === "NUMBER"; case "id": return this.current_token.type === "IDENTIFIER"; default: return false } }; a.prototype.parse = function (e) { this.lexer.input(e); this.update(); return this.parseEqn() }; a.prototype.parseEqn = function () { var e = this.parseExpr(); if (this.match("equal")) { this.update(); var t = this.parseExpr(); return new o(e, t) } else if (this.match("epsilon")) { return e } else { throw new SyntaxError("Unbalanced Parenthesis") } }; a.prototype.parseExpr = function () { var e = this.parseTerm(); return this.parseExprRest(e) }; a.prototype.parseExprRest = function (e) { if (this.match("plus")) { this.update(); var t = this.parseTerm(); if (e === undefined || t === undefined) throw new SyntaxError("Missing operand"); return this.parseExprRest(e.add(t)) } else if (this.match("minus")) { this.update(); var r = this.parseTerm(); if (e === undefined) { return r.multiply(-1) } else { return this.parseExprRest(e.subtract(r)) } } else { return e } }; a.prototype.parseTerm = function () { var e = this.parseFactor(); return this.parseTermRest(e) }; a.prototype.parseTermRest = function (e) { if (this.match("multiply")) { this.update(); var t = this.parseFactor(); return e.multiply(this.parseTermRest(t)) } else if (this.match("power")) { this.update(); var r = this.parseFactor(); return this.parseTermRest(e.pow(parseInt(r.toString()))) } else if (this.match("divide")) { this.update(); var n = this.parseFactor(); return this.parseTermRest(e.divide(this.convertToFraction(n))) } else if (this.match("epsilon")) { return e } else { var i = this.parseFactor(); if (i === undefined) { return e } else { return e.multiply(this.parseTermRest(i)) } } }; a.prototype.convertToFraction = function (e) { var t = e.constants[0]; return new s(t.numer, t.denom) }; a.prototype.parseFactor = function () { if (this.match("num")) { var e = this.parseNumber(); this.update(); return e } else if (this.match("id")) { var t = new i(this.current_token.value); this.update(); return t } else if (this.match("lparen")) { this.update(); var r = this.parseExpr(); if (this.match("rparen")) { this.update(); return r } else { throw new SyntaxError("Unbalanced Parenthesis") } } else { return undefined } }; a.prototype.parseNumber = function () { if (parseInt(this.current_token.value) == this.current_token.value) { return new i(parseInt(this.current_token.value)) } else { var e = this.current_token.value.split("."); var t = e[1].length; var r = Math.pow(10, t); var n = parseFloat(this.current_token.value); return new i(parseInt(n * r)).divide(r) } }; t.exports = a }, { "./equations": 2, "./expressions": 3, "./fractions": 4, "./lexer": 6 }] }, {}, [1])(1) });
}

var wMath = {
    //连续数相乘
    CMMNO: function (x, y) {
        let text1 = x;
        let text2 = y;

        if (isNaN(text1) || isNaN(text2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //定义变量
            var result = '';
            result = +result;
            result = 1;

            //计算
            for (var i2 = text1; i2 <= text2; i2++) {

                var num = i2;
                num = +num;

                result = result * num;
            }
        }


        //返回结果
        if (result == Infinity) {
            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            return result;
        }


    },


    //连续数相加
    AMNO: function (x, y) {
        let text1 = x;
        let text2 = y;

        if (isNaN(text1) || isNaN(text2)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //定义变量
            var result = '';
            result = +result;
            result = 0;

            //计算
            for (var i2 = text1; i2 <= text2; i2++) {
                var num = i2;
                num = +num;
            }
        }


        //返回结果
        if (result == Infinity) {
            //return "The number entered is too large!";
            return "您输入的数字过大！";
        } else {
            return result;
        }


    },

    //解二元一次方程（使用时请务必引入Algebra.js，原Github链接为：https://github.com/nicolewhite/algebra.js）
    //返回值是一个数组，[0]为x的表达式，[1]为y的表达式,[2]为x的值,[3]为y的值
    eq: function (x, y) {
        var Fraction = algebra.Fraction;
        var Expression = algebra.Expression;
        var Equation = algebra.Equation;
        //=======================================

        var x1 = algebra.parse(x);
        var answer1 = x1.solveFor("y");

        var x2 = algebra.parse(y);
        var answer2 = x2.solveFor("y");
        //=================================================
        //解出X值
        var eq = new Equation(answer1, answer2);
        var xsexpression = eq.toString();
        var answerX = eq.solveFor("x");
        var xsresult = answerX.toString();
        //=================================================
        //解出Y值（把x的值代入x1或x2）
        eq = x1.eval({
            x: answerX
        });
        var ysexpression = eq.toString();
        var answerY = eq.solveFor("y");
        var ysresult = answerY.toString();

        //创建数组
        var results = new Array(xsexpression, ysexpression, xsresult, ysresult);

        //返回结果
        return results;

    },

    //计算x的y次幂
    pow: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.pow(x, y);
        }
    },

    //求x的绝对值
    abs: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.abs(x);
        }
    },

    //求x和y的最大值
    max: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.max(x, y);
        }
    },

    //求x和y的最小值
    min: function (x, y) {
        x = +x;
        y = +y;

        if (isNaN(x) || isNaN(y)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.min(x, y);
        }
    },

    //使用去尾法将x取整
    trunc: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.trunc(x);
        }
    },

    //从0到1随机一个多位小数（不包括1）
    random: function () {
        //返回结果
        return Math.random();
    },

    //将一个小数使用四舍五入进行取整
    round: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.round(x);
        }
    },

    //判断两个比是否成比例
    proportion: function (w, x, y, z) {
        w = +w;
        x = +x;
        y = +y;
        z = +z;

        let temp1 = w * z;
        let temp2 = x * y;

        if (isNaN(temp1) || isNaN(temp2)) {
            //输入的内容不是数字
            return undefined;
        } else if (temp1 == temp2) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //判断今年是否为闰年
    thisYear: function () {
        if (getDate.getFullYear() % 4 == 0 && getDate.getFullYear() % 100 != 0 || getDate.getFullYear() % 400 == 0) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //判断指定年份是否为闰年
    year: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //判断两个分数的大小，如果第一个分数大，则返回true，否则返回false
    fraction: function (w, x, y, z) {
        w = +w;
        x = +x;
        y = +y;
        z = +z;

        if (isNaN(w / x) || isNaN(y / z)) {
            //输入的内容不是数字
            return undefined;
        } else if (w / x > y / z) {
            //返回结果
            return true;
        } else {
            //返回结果
            return false;
        }
    },

    //从x到y随机获取一个多位小数（x == max，y == min）
    randomFromXY: function (max, min) {
        max = +max;
        min = +min;

        if (isNaN(max) || isNaN(min)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.random() * (max - min) + min; //max>此得数>=min
        }
    },

    //从x到y随机获取一个整数（x == max，y == min）
    randomFromXYForInteger: function (max, min) {
        max = +max;
        min = +min

        if (isNaN(max) || isNaN(min)) {
            //输入的内容不是数字
            return undefined;
        } else {
            min = Math.ceil(min);
            max = Math.floor(max);
            //返回结果
            return Math.floor(Math.random() * (max - min)) + min; //max>此得数>min
        }
    },

    //从x到y随机获取一个整数（包括x，y）（x == max，y == min）
    randomFromXYForIntegerincludeXY: function (max, min) {
        max = +max;
        min = +min;

        if (isNaN(max) || isNaN(min)) {
            //输入的内容不是数字
            return undefined;
        } else {
            min = Math.ceil(min);
            max = Math.floor(max);
            //返回结果
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    //使用进一法对小数进行取整（向上取整）
    ceil: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.ceil(x);
        }
    },

    //将一个小数向下取整
    floor: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            //返回结果
            return Math.floor(x);
        }
    },

    //判断正负数
    sign: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else {
            let result = Math.sign(x);

            if (result == 1) {
                return true; //正数
            } else if (result == 0) {
                return 0; //输入的数字为0
            } else {
                return false; //负数
            }
        }
    },

    //获取x的相反数
    oppositeNumber: function (x) {
        x = +x;

        if (isNaN(x)) {
            //输入的内容不是数字
            return undefined;
        } else if (x == 0) {
            return 0;
        } else if (Math.abs(x) == x) {
            //返回结果
            return '-' + Math.abs(x); //负数
        } else {
            //返回结果
            return Math.abs(x);
        }

    },



    //获取今天星期几
    getWeek: function () {
        let week = [
            /*
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
            */

            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期天'
        ];


        //返回结果
        return week[getDate.getDay() - 1];
    },

    //获取当前月份
    getMonth: function () {
        //返回结果
        return getDate.getMonth() + 1;
    },

    //获取当前年份
    getYear: function () {
        //返回结果
        return getDate.getFullYear();
    },

    //获取当前日期
    getDate: function () {
        //返回结果
        return getDate.getDate();
    },

    //获取当前小时
    getHours: function () {
        //返回结果
        return getDate.getHours();
    },

    //获取当前分钟
    getMinutes: function () {
        //返回结果
        return getDate.getMinutes();
    },

    //获取当前秒数
    getSeconds: function () {
        //返回结果
        return getDate.getSeconds();
    },

    //获取当前时间
    getThisTime: function (thisTimessname, yearssname, monthssname, dayssname, hourssname, minutessname, secondssname) {
        location.reload();

        //返回结果
        return thisTimessname + this.getYear() + yearssname + this.getMonth() + monthssname + this.getDate() + dayssname + this.getHours() + hourssname + this.getMinutes() + minutessname + this.getSeconds() + secondssname;
    },

    //获取html中某个元素的值
    getValue: function (id) {
        return document.getElementById(id).value;
    },

    //更改html中某个元素的颜色
    changeColor: function (id,color) {
        document.getElementById(id).style.color = color;
    },

    //更改html中某个元素的值
    changeValue: function (id,value) {
        document.getElementById(id).value = value;
    }

}