(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l) if (i.type === "childList") for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }).observe(document, {childList: !0, subtree: !0});

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();
const Kt = !1;
var gt = Array.isArray, Mn = Array.prototype.indexOf, wt = Array.from, vt = Object.defineProperty,
    Pe = Object.getOwnPropertyDescriptor, qn = Object.getOwnPropertyDescriptors, Dn = Object.prototype,
    Ln = Array.prototype, Qt = Object.getPrototypeOf, Ft = Object.isExtensible;

function Wn(e) {
    return e()
}

function dt(e) {
    for (var t = 0; t < e.length; t++) e[t]()
}

function jn() {
    var e, t, n = new Promise((r, l) => {
        e = r, t = l
    });
    return {promise: n, resolve: e, reject: t}
}

const W = 2, $t = 4, Qe = 8, je = 16, te = 32, he = 64, Gt = 128, U = 256, Ue = 512, P = 1024, Y = 2048, ue = 4096,
    K = 8192, Ae = 16384, yt = 32768, mt = 65536, Mt = 1 << 17, Vn = 1 << 18, bt = 1 << 19, Et = 1 << 20, ht = 1 << 21,
    xt = 1 << 22, fe = 1 << 23, Fe = Symbol("$state"), At = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed"
    };

function Hn() {
    throw new Error("https://svelte.dev/e/await_outside_boundary")
}

function Un() {
    throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function Yn(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Bn() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Jn(e) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function zn() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Kn() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Qn() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function $n() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

const Gn = 1, Xn = 2, Zn = 16, er = 2, I = Symbol();
let tr = !1;

function Xt(e) {
    return e === this.v
}

function nr(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function Zt(e) {
    return !nr(e, this.v)
}

let $e = !1, rr = !1;

function ir() {
    $e = !0
}

let R = null;

function Ye(e) {
    R = e
}

function en(e, t = !1, n) {
    R = {p: R, c: null, e: null, s: e, x: null, l: $e && !t ? {s: null, u: null, $: []} : null}
}

function tn(e) {
    var t = R, n = t.e;
    if (n !== null) {
        t.e = null;
        for (var r of n) pn(r)
    }
    return R = t.p, {}
}

function ke() {
    return !$e || R !== null && R.l === null
}

const lr = new WeakMap;

function ar(e) {
    var t = y;
    if (t === null) return w.f |= fe, e;
    if ((t.f & yt) === 0) {
        if ((t.f & Gt) === 0) throw !t.parent && e instanceof Error && nn(e), e;
        t.b.error(e)
    } else kt(e, t)
}

function kt(e, t) {
    for (; t !== null;) {
        if ((t.f & Gt) !== 0) try {
            t.b.error(e);
            return
        } catch (n) {
            e = n
        }
        t = t.parent
    }
    throw e instanceof Error && nn(e), e
}

function nn(e) {
    const t = lr.get(e);
    t && (vt(e, "message", {value: t.message}), vt(e, "stack", {value: t.stack}))
}

let Be = [];

function sr() {
    var e = Be;
    Be = [], dt(e)
}

function or(e) {
    Be.length === 0 && queueMicrotask(sr), Be.push(e)
}

function ur() {
    for (var e = y.b; e !== null && !e.has_pending_snippet();) e = e.parent;
    return e === null && Hn(), e
}

function Tt(e) {
    var t = W | Y, n = w !== null && (w.f & W) !== 0 ? w : null;
    return y === null || n !== null && (n.f & U) !== 0 ? t |= U : y.f |= bt, {
        ctx: R,
        deps: null,
        effects: null,
        equals: Xt,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: I,
        wv: 0,
        parent: n ?? y,
        ac: null
    }
}

function fr(e, t) {
    let n = y;
    n === null && Un();
    var r = n.b, l = void 0, i = De(I), a = null, u = !w;
    return kr(() => {
        try {
            var s = e()
        } catch (v) {
            s = Promise.reject(v)
        }
        var o = () => s;
        l = a?.then(o, o) ?? Promise.resolve(s), a = l;
        var d = A, h = r.pending;
        u && (r.update_pending_count(1), h || d.increment());
        const f = (v, c = void 0) => {
            a = null, h || d.activate(), c ? c !== At && (i.f |= fe, ze(i, c)) : ((i.f & fe) !== 0 && (i.f ^= fe), ze(i, v)), u && (r.update_pending_count(-1), h || d.decrement()), sn()
        };
        if (l.then(f, v => f(null, v || "unknown")), d) return () => {
            queueMicrotask(() => d.neuter())
        }
    }), new Promise(s => {
        function o(d) {
            function h() {
                d === l ? s(i) : o(l)
            }

            d.then(h, h)
        }

        o(l)
    })
}

function rn(e) {
    const t = Tt(e);
    return t.equals = Zt, t
}

function ln(e) {
    var t = e.effects;
    if (t !== null) {
        e.effects = null;
        for (var n = 0; n < t.length; n += 1) ee(t[n])
    }
}

function cr(e) {
    for (var t = e.parent; t !== null;) {
        if ((t.f & W) === 0) return t;
        t = t.parent
    }
    return null
}

function Ct(e) {
    var t, n = y;
    oe(cr(e));
    try {
        ln(e), t = Tn(e)
    } finally {
        oe(n)
    }
    return t
}

function an(e) {
    var t = Ct(e);
    if (e.equals(t) || (e.v = t, e.wv = An()), !Te) if (Ee !== null) Ee.set(e, e.v); else {
        var n = (se || (e.f & U) !== 0) && e.deps !== null ? ue : P;
        q(e, n)
    }
}

function vr(e, t, n) {
    const r = ke() ? Tt : rn;
    if (t.length === 0) {
        n(e.map(r));
        return
    }
    var l = A, i = y, a = dr(), u = ur();
    Promise.all(t.map(s => fr(s))).then(s => {
        l?.activate(), a();
        try {
            n([...e.map(r), ...s])
        } catch (o) {
            (i.f & Ae) === 0 && kt(o, i)
        }
        l?.deactivate(), sn()
    }).catch(s => {
        u.error(s)
    })
}

function dr() {
    var e = y, t = w, n = R;
    return function () {
        oe(e), X(t), Ye(n)
    }
}

function sn() {
    oe(null), X(null), Ye(null)
}

const Ne = new Set;
let A = null, He = null, Ee = null, qt = new Set, Je = [];

function on() {
    const e = Je.shift();
    Je.length > 0 && queueMicrotask(on), e()
}

let qe = [], St = null, _t = !1;

class xe {
    current = new Map;
    #i = new Map;
    #l = new Set;
    #e = 0;
    #u = null;
    #f = !1;
    #n = [];
    #a = [];
    #r = [];
    #t = [];
    #s = [];
    #c = [];
    #v = [];
    skipped_effects = new Set;

    static ensure() {
        if (A === null) {
            const t = A = new xe;
            Ne.add(A), xe.enqueue(() => {
                A === t && t.flush()
            })
        }
        return A
    }

    static enqueue(t) {
        Je.length === 0 && queueMicrotask(on), Je.unshift(t)
    }

    process(t) {
        qe = [], He = null;
        var n = null;
        if (Ne.size > 1) {
            n = new Map, Ee = new Map;
            for (const [i, a] of this.current) n.set(i, {v: i.v, wv: i.wv}), i.v = a;
            for (const i of Ne) if (i !== this) for (const [a, u] of i.#i) n.has(a) || (n.set(a, {
                v: a.v,
                wv: a.wv
            }), a.v = u)
        }
        for (const i of t) this.#h(i);
        if (this.#n.length === 0 && this.#e === 0) {
            this.#d();
            var r = this.#r, l = this.#t;
            this.#r = [], this.#t = [], this.#s = [], He = A, A = null, Dt(r), Dt(l), A === null ? A = this : Ne.delete(this), this.#u?.resolve()
        } else this.#o(this.#r), this.#o(this.#t), this.#o(this.#s);
        if (n) {
            for (const [i, {v: a, wv: u}] of n) i.wv <= u && (i.v = a);
            Ee = null
        }
        for (const i of this.#n) Me(i);
        for (const i of this.#a) Me(i);
        this.#n = [], this.#a = []
    }

    #h(t) {
        t.f ^= P;
        for (var n = t.first; n !== null;) {
            var r = n.f, l = (r & (te | he)) !== 0, i = l && (r & P) !== 0,
                a = i || (r & K) !== 0 || this.skipped_effects.has(n);
            if (!a && n.fn !== null) {
                if (l) n.f ^= P; else if ((r & P) === 0) if ((r & $t) !== 0) this.#t.push(n); else if ((r & xt) !== 0) {
                    var u = n.b?.pending ? this.#a : this.#n;
                    u.push(n)
                } else Ze(n) && ((n.f & je) !== 0 && this.#s.push(n), Me(n));
                var s = n.first;
                if (s !== null) {
                    n = s;
                    continue
                }
            }
            var o = n.parent;
            for (n = n.next; n === null && o !== null;) n = o.next, o = o.parent
        }
    }

    #o(t) {
        for (const n of t) ((n.f & Y) !== 0 ? this.#c : this.#v).push(n), q(n, P);
        t.length = 0
    }

    capture(t, n) {
        this.#i.has(t) || this.#i.set(t, n), this.current.set(t, t.v)
    }

    activate() {
        A = this
    }

    deactivate() {
        A = null, He = null;
        for (const t of qt) if (qt.delete(t), t(), A !== null) break
    }

    neuter() {
        this.#f = !0
    }

    flush() {
        qe.length > 0 ? hr() : this.#d(), A === this && (this.#e === 0 && Ne.delete(this), this.deactivate())
    }

    #d() {
        if (!this.#f) for (const t of this.#l) t();
        this.#l.clear()
    }

    increment() {
        this.#e += 1
    }

    decrement() {
        if (this.#e -= 1, this.#e === 0) {
            for (const t of this.#c) q(t, Y), de(t);
            for (const t of this.#v) q(t, ue), de(t);
            this.#r = [], this.#t = [], this.flush()
        } else this.deactivate()
    }

    add_callback(t) {
        this.#l.add(t)
    }

    settled() {
        return (this.#u ??= jn()).promise
    }
}

function hr() {
    var e = be;
    _t = !0;
    try {
        var t = 0;
        for (Vt(!0); qe.length > 0;) {
            var n = xe.ensure();
            if (t++ > 1e3) {
                var r, l;
                _r()
            }
            n.process(qe), ce.clear()
        }
    } finally {
        _t = !1, Vt(e), St = null
    }
}

function _r() {
    try {
        zn()
    } catch (e) {
        kt(e, St)
    }
}

function Dt(e) {
    var t = e.length;
    if (t !== 0) {
        for (var n = 0; n < t;) {
            var r = e[n++];
            if ((r.f & (Ae | K)) === 0 && Ze(r)) {
                var l = A ? A.current.size : 0;
                if (Me(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? mn(r) : r.fn = null), A !== null && A.current.size > l && (r.f & Et) !== 0) break
            }
        }
        for (; n < t;) de(e[n++])
    }
}

function de(e) {
    for (var t = St = e; t.parent !== null;) {
        t = t.parent;
        var n = t.f;
        if (_t && t === y && (n & je) !== 0) return;
        if ((n & (he | te)) !== 0) {
            if ((n & P) === 0) return;
            t.f ^= P
        }
    }
    qe.push(t)
}

const ce = new Map;

function De(e, t) {
    var n = {f: 0, v: e, reactions: null, equals: Xt, rv: 0, wv: 0};
    return n
}

function ae(e, t) {
    const n = De(e);
    return Nr(n), n
}

function me(e, t = !1, n = !0) {
    const r = De(e);
    return t || (r.equals = Zt), $e && n && R !== null && R.l !== null && (R.l.s ??= []).push(r), r
}

function x(e, t, n = !1) {
    w !== null && (!G || (w.f & Mt) !== 0) && ke() && (w.f & (W | je | xt | Mt)) !== 0 && !Z?.includes(e) && $n();
    let r = n ? Ie(t) : t;
    return ze(e, r)
}

function ze(e, t) {
    if (!e.equals(t)) {
        var n = e.v;
        Te ? ce.set(e, t) : ce.set(e, n), e.v = t;
        var r = xe.ensure();
        r.capture(e, n), (e.f & W) !== 0 && ((e.f & Y) !== 0 && Ct(e), q(e, (e.f & U) === 0 ? P : ue)), e.wv = An(), un(e, Y), ke() && y !== null && (y.f & P) !== 0 && (y.f & (te | he)) === 0 && (H === null ? Or([e]) : H.push(e))
    }
    return t
}

function pr(e, t = 1) {
    var n = _(e), r = t === 1 ? n++ : n--;
    return x(e, n), r
}

function at(e) {
    x(e, e.v + 1)
}

function un(e, t) {
    var n = e.reactions;
    if (n !== null) for (var r = ke(), l = n.length, i = 0; i < l; i++) {
        var a = n[i], u = a.f;
        if (!(!r && a === y)) {
            var s = (u & Y) === 0;
            s && q(a, t), (u & W) !== 0 ? un(a, ue) : s && de(a)
        }
    }
}

function Ie(e) {
    if (typeof e != "object" || e === null || Fe in e) return e;
    const t = Qt(e);
    if (t !== Dn && t !== Ln) return e;
    var n = new Map, r = gt(e), l = ae(0), i = ve, a = u => {
        if (ve === i) return u();
        var s = w, o = ve;
        X(null), Ut(i);
        var d = u();
        return X(s), Ut(o), d
    };
    return r && n.set("length", ae(e.length)), new Proxy(e, {
        defineProperty(u, s, o) {
            (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Kn();
            var d = n.get(s);
            return d === void 0 ? d = a(() => {
                var h = ae(o.value);
                return n.set(s, h), h
            }) : x(d, o.value, !0), !0
        }, deleteProperty(u, s) {
            var o = n.get(s);
            if (o === void 0) {
                if (s in u) {
                    const d = a(() => ae(I));
                    n.set(s, d), at(l)
                }
            } else x(o, I), at(l);
            return !0
        }, get(u, s, o) {
            if (s === Fe) return e;
            var d = n.get(s), h = s in u;
            if (d === void 0 && (!h || Pe(u, s)?.writable) && (d = a(() => {
                var v = Ie(h ? u[s] : I), c = ae(v);
                return c
            }), n.set(s, d)), d !== void 0) {
                var f = _(d);
                return f === I ? void 0 : f
            }
            return Reflect.get(u, s, o)
        }, getOwnPropertyDescriptor(u, s) {
            var o = Reflect.getOwnPropertyDescriptor(u, s);
            if (o && "value" in o) {
                var d = n.get(s);
                d && (o.value = _(d))
            } else if (o === void 0) {
                var h = n.get(s), f = h?.v;
                if (h !== void 0 && f !== I) return {enumerable: !0, configurable: !0, value: f, writable: !0}
            }
            return o
        }, has(u, s) {
            if (s === Fe) return !0;
            var o = n.get(s), d = o !== void 0 && o.v !== I || Reflect.has(u, s);
            if (o !== void 0 || y !== null && (!d || Pe(u, s)?.writable)) {
                o === void 0 && (o = a(() => {
                    var f = d ? Ie(u[s]) : I, v = ae(f);
                    return v
                }), n.set(s, o));
                var h = _(o);
                if (h === I) return !1
            }
            return d
        }, set(u, s, o, d) {
            var h = n.get(s), f = s in u;
            if (r && s === "length") for (var v = o; v < h.v; v += 1) {
                var c = n.get(v + "");
                c !== void 0 ? x(c, I) : v in u && (c = a(() => ae(I)), n.set(v + "", c))
            }
            if (h === void 0) (!f || Pe(u, s)?.writable) && (h = a(() => ae(void 0)), x(h, Ie(o)), n.set(s, h)); else {
                f = h.v !== I;
                var p = a(() => Ie(o));
                x(h, p)
            }
            var b = Reflect.getOwnPropertyDescriptor(u, s);
            if (b?.set && b.set.call(d, o), !f) {
                if (r && typeof s == "string") {
                    var T = n.get("length"), m = Number(s);
                    Number.isInteger(m) && m >= T.v && x(T, m + 1)
                }
                at(l)
            }
            return !0
        }, ownKeys(u) {
            _(l);
            var s = Reflect.ownKeys(u).filter(h => {
                var f = n.get(h);
                return f === void 0 || f.v !== I
            });
            for (var [o, d] of n) d.v !== I && !(o in u) && s.push(o);
            return s
        }, setPrototypeOf() {
            Qn()
        }
    })
}

var Lt, fn, cn, vn;

function gr() {
    if (Lt === void 0) {
        Lt = window, fn = /Firefox/.test(navigator.userAgent);
        var e = Element.prototype, t = Node.prototype, n = Text.prototype;
        cn = Pe(t, "firstChild").get, vn = Pe(t, "nextSibling").get, Ft(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ft(n) && (n.__t = void 0)
    }
}

function Ge(e = "") {
    return document.createTextNode(e)
}

function dn(e) {
    return cn.call(e)
}

function Nt(e) {
    return vn.call(e)
}

function N(e, t) {
    return dn(e)
}

function V(e, t = 1, n = !1) {
    let r = e;
    for (; t--;) r = Nt(r);
    return r
}

function wr(e) {
    e.textContent = ""
}

function hn() {
    return !1
}

let Wt = !1;

function yr() {
    Wt || (Wt = !0, document.addEventListener("reset", e => {
        Promise.resolve().then(() => {
            if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.()
        })
    }, {capture: !0}))
}

function Xe(e) {
    var t = w, n = y;
    X(null), oe(null);
    try {
        return e()
    } finally {
        X(t), oe(n)
    }
}

function mr(e, t, n, r = n) {
    e.addEventListener(t, () => Xe(n));
    const l = e.__on_r;
    l ? e.__on_r = () => {
        l(), r(!0)
    } : e.__on_r = () => r(!0), yr()
}

function _n(e) {
    y === null && w === null && Jn(), w !== null && (w.f & U) !== 0 && y === null && Bn(), Te && Yn()
}

function br(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function ne(e, t, n, r = !0) {
    var l = y;
    l !== null && (l.f & K) !== 0 && (e |= K);
    var i = {
        ctx: R,
        deps: null,
        nodes_start: null,
        nodes_end: null,
        f: e | Y,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: l,
        b: l && l.b,
        prev: null,
        teardown: null,
        transitions: null,
        wv: 0,
        ac: null
    };
    if (n) try {
        Me(i), i.f |= yt
    } catch (s) {
        throw ee(i), s
    } else t !== null && de(i);
    var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & bt) === 0;
    if (!a && r && (l !== null && br(i, l), w !== null && (w.f & W) !== 0 && (e & he) === 0)) {
        var u = w;
        (u.effects ??= []).push(i)
    }
    return i
}

function Er(e) {
    const t = ne(Qe, null, !1);
    return q(t, P), t.teardown = e, t
}

function jt(e) {
    _n();
    var t = y.f, n = !w && (t & te) !== 0 && (t & yt) === 0;
    if (n) {
        var r = R;
        (r.e ??= []).push(e)
    } else return pn(e)
}

function pn(e) {
    return ne($t | Et, e, !1)
}

function xr(e) {
    return _n(), ne(Qe | Et, e, !0)
}

function Ar(e) {
    xe.ensure();
    const t = ne(he, e, !0);
    return (n = {}) => new Promise(r => {
        n.outro ? Ot(t, () => {
            ee(t), r(void 0)
        }) : (ee(t), r(void 0))
    })
}

function kr(e) {
    return ne(xt | bt, e, !0)
}

function Tr(e, t = 0) {
    return ne(Qe | t, e, !0)
}

function pe(e, t = [], n = []) {
    vr(t, n, r => {
        ne(Qe, () => e(...r.map(_)), !0)
    })
}

function gn(e, t = 0) {
    var n = ne(je | t, e, !0);
    return n
}

function Le(e, t = !0) {
    return ne(te, e, !0, t)
}

function wn(e) {
    var t = e.teardown;
    if (t !== null) {
        const n = Te, r = w;
        Ht(!0), X(null);
        try {
            t.call(null)
        } finally {
            Ht(n), X(r)
        }
    }
}

function yn(e, t = !1) {
    var n = e.first;
    for (e.first = e.last = null; n !== null;) {
        const l = n.ac;
        l !== null && Xe(() => {
            l.abort(At)
        });
        var r = n.next;
        (n.f & he) !== 0 ? n.parent = null : ee(n, t), n = r
    }
}

function Cr(e) {
    for (var t = e.first; t !== null;) {
        var n = t.next;
        (t.f & te) === 0 && ee(t), t = n
    }
}

function ee(e, t = !0) {
    var n = !1;
    (t || (e.f & Vn) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Sr(e.nodes_start, e.nodes_end), n = !0), yn(e, t && !n), Ke(e, 0), q(e, Ae);
    var r = e.transitions;
    if (r !== null) for (const i of r) i.stop();
    wn(e);
    var l = e.parent;
    l !== null && l.first !== null && mn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null
}

function Sr(e, t) {
    for (; e !== null;) {
        var n = e === t ? null : Nt(e);
        e.remove(), e = n
    }
}

function mn(e) {
    var t = e.parent, n = e.prev, r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Ot(e, t) {
    var n = [];
    It(e, n, !0), bn(n, () => {
        ee(e), t && t()
    })
}

function bn(e, t) {
    var n = e.length;
    if (n > 0) {
        var r = () => --n || t();
        for (var l of e) l.out(r)
    } else t()
}

function It(e, t, n) {
    if ((e.f & K) === 0) {
        if (e.f ^= K, e.transitions !== null) for (const a of e.transitions) (a.is_global || n) && t.push(a);
        for (var r = e.first; r !== null;) {
            var l = r.next, i = (r.f & mt) !== 0 || (r.f & te) !== 0;
            It(r, t, i ? n : !1), r = l
        }
    }
}

function Rt(e) {
    En(e, !0)
}

function En(e, t) {
    if ((e.f & K) !== 0) {
        e.f ^= K, (e.f & P) === 0 && (q(e, Y), de(e));
        for (var n = e.first; n !== null;) {
            var r = n.next, l = (n.f & mt) !== 0 || (n.f & te) !== 0;
            En(n, l ? t : !1), n = r
        }
        if (e.transitions !== null) for (const i of e.transitions) (i.is_global || t) && i.in()
    }
}

let be = !1;

function Vt(e) {
    be = e
}

let Te = !1;

function Ht(e) {
    Te = e
}

let w = null, G = !1;

function X(e) {
    w = e
}

let y = null;

function oe(e) {
    y = e
}

let Z = null;

function Nr(e) {
    w !== null && (Z === null ? Z = [e] : Z.push(e))
}

let F = null, L = 0, H = null;

function Or(e) {
    H = e
}

let xn = 1, We = 0, ve = We;

function Ut(e) {
    ve = e
}

let se = !1;

function An() {
    return ++xn
}

function Ze(e) {
    var t = e.f;
    if ((t & Y) !== 0) return !0;
    if ((t & ue) !== 0) {
        var n = e.deps, r = (t & U) !== 0;
        if (n !== null) {
            var l, i, a = (t & Ue) !== 0, u = r && y !== null && !se, s = n.length;
            if ((a || u) && (y === null || (y.f & Ae) === 0)) {
                var o = e, d = o.parent;
                for (l = 0; l < s; l++) i = n[l], (a || !i?.reactions?.includes(o)) && (i.reactions ??= []).push(o);
                a && (o.f ^= Ue), u && d !== null && (d.f & U) === 0 && (o.f ^= U)
            }
            for (l = 0; l < s; l++) if (i = n[l], Ze(i) && an(i), i.wv > e.wv) return !0
        }
        (!r || y !== null && !se) && q(e, P)
    }
    return !1
}

function kn(e, t, n = !0) {
    var r = e.reactions;
    if (r !== null && !Z?.includes(e)) for (var l = 0; l < r.length; l++) {
        var i = r[l];
        (i.f & W) !== 0 ? kn(i, t, !1) : t === i && (n ? q(i, Y) : (i.f & P) !== 0 && q(i, ue), de(i))
    }
}

function Tn(e) {
    var t = F, n = L, r = H, l = w, i = se, a = Z, u = R, s = G, o = ve, d = e.f;
    F = null, L = 0, H = null, se = (d & U) !== 0 && (G || !be || w === null), w = (d & (te | he)) === 0 ? e : null, Z = null, Ye(e.ctx), G = !1, ve = ++We, e.ac !== null && (Xe(() => {
        e.ac.abort(At)
    }), e.ac = null);
    try {
        e.f |= ht;
        var h = e.fn, f = h(), v = e.deps;
        if (F !== null) {
            var c;
            if (Ke(e, L), v !== null && L > 0) for (v.length = L + F.length, c = 0; c < F.length; c++) v[L + c] = F[c]; else e.deps = v = F;
            if (!se || (d & W) !== 0 && e.reactions !== null) for (c = L; c < v.length; c++) (v[c].reactions ??= []).push(e)
        } else v !== null && L < v.length && (Ke(e, L), v.length = L);
        if (ke() && H !== null && !G && v !== null && (e.f & (W | ue | Y)) === 0) for (c = 0; c < H.length; c++) kn(H[c], e);
        return l !== null && l !== e && (We++, H !== null && (r === null ? r = H : r.push(...H))), (e.f & fe) !== 0 && (e.f ^= fe), f
    } catch (p) {
        return ar(p)
    } finally {
        e.f ^= ht, F = t, L = n, H = r, w = l, se = i, Z = a, Ye(u), G = s, ve = o
    }
}

function Ir(e, t) {
    let n = t.reactions;
    if (n !== null) {
        var r = Mn.call(n, e);
        if (r !== -1) {
            var l = n.length - 1;
            l === 0 ? n = t.reactions = null : (n[r] = n[l], n.pop())
        }
    }
    n === null && (t.f & W) !== 0 && (F === null || !F.includes(t)) && (q(t, ue), (t.f & (U | Ue)) === 0 && (t.f ^= Ue), ln(t), Ke(t, 0))
}

function Ke(e, t) {
    var n = e.deps;
    if (n !== null) for (var r = t; r < n.length; r++) Ir(e, n[r])
}

function Me(e) {
    var t = e.f;
    if ((t & Ae) === 0) {
        q(e, P);
        var n = y, r = be;
        y = e, be = !0;
        try {
            (t & je) !== 0 ? Cr(e) : yn(e), wn(e);
            var l = Tn(e);
            e.teardown = typeof l == "function" ? l : null, e.wv = xn;
            var i;
            Kt && rr && (e.f & Y) !== 0 && e.deps
        } finally {
            be = r, y = n
        }
    }
}

function _(e) {
    var t = e.f, n = (t & W) !== 0;
    if (w !== null && !G) {
        var r = y !== null && (y.f & Ae) !== 0;
        if (!r && !Z?.includes(e)) {
            var l = w.deps;
            if ((w.f & ht) !== 0) e.rv < We && (e.rv = We, F === null && l !== null && l[L] === e ? L++ : F === null ? F = [e] : (!se || !F.includes(e)) && F.push(e)); else {
                (w.deps ??= []).push(e);
                var i = e.reactions;
                i === null ? e.reactions = [w] : i.includes(w) || i.push(w)
            }
        }
    } else if (n && e.deps === null && e.effects === null) {
        var a = e, u = a.parent;
        u !== null && (u.f & U) === 0 && (a.f ^= U)
    }
    if (Te) {
        if (ce.has(e)) return ce.get(e);
        if (n) {
            a = e;
            var s = a.v;
            return ((a.f & P) === 0 && a.reactions !== null || Cn(a)) && (s = Ct(a)), ce.set(a, s), s
        }
    } else if (n) {
        if (a = e, Ee?.has(a)) return Ee.get(a);
        Ze(a) && an(a)
    }
    if ((e.f & fe) !== 0) throw e.v;
    return e.v
}

function Cn(e) {
    if (e.v === I) return !0;
    if (e.deps === null) return !1;
    for (const t of e.deps) if (ce.has(t) || (t.f & W) !== 0 && Cn(t)) return !0;
    return !1
}

function Sn(e) {
    var t = G;
    try {
        return G = !0, e()
    } finally {
        G = t
    }
}

const Rr = -7169;

function q(e, t) {
    e.f = e.f & Rr | t
}

function Pr(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
        if (Fe in e) pt(e); else if (!Array.isArray(e)) for (let t in e) {
            const n = e[t];
            typeof n == "object" && n && Fe in n && pt(n)
        }
    }
}

function pt(e, t = new Set) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
        t.add(e), e instanceof Date && e.getTime();
        for (let r in e) try {
            pt(e[r], t)
        } catch {
        }
        const n = Qt(e);
        if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
            const r = qn(n);
            for (let l in r) {
                const i = r[l].get;
                if (i) try {
                    i.call(e)
                } catch {
                }
            }
        }
    }
}

const Fr = ["touchstart", "touchmove"];

function Mr(e) {
    return Fr.includes(e)
}

const qr = new Set, Yt = new Set;

function Dr(e, t, n, r = {}) {
    function l(i) {
        if (r.capture || Re.call(t, i), !i.cancelBubble) return Xe(() => n?.call(this, i))
    }

    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? or(() => {
        t.addEventListener(e, l, r)
    }) : t.addEventListener(e, l, r), l
}

function Oe(e, t, n, r, l) {
    var i = {capture: r, passive: l}, a = Dr(e, t, n, i);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Er(() => {
        t.removeEventListener(e, a, i)
    })
}

let Bt = null;

function Re(e) {
    var t = this, n = t.ownerDocument, r = e.type, l = e.composedPath?.() || [], i = l[0] || e.target;
    Bt = e;
    var a = 0, u = Bt === e && e.__root;
    if (u) {
        var s = l.indexOf(u);
        if (s !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var o = l.indexOf(t);
        if (o === -1) return;
        s <= o && (a = s)
    }
    if (i = l[a] || e.target, i !== t) {
        vt(e, "currentTarget", {
            configurable: !0, get() {
                return i || n
            }
        });
        var d = w, h = y;
        X(null), oe(null);
        try {
            for (var f, v = []; i !== null;) {
                var c = i.assignedSlot || i.parentNode || i.host || null;
                try {
                    var p = i["__" + r];
                    if (p != null && (!i.disabled || e.target === i)) if (gt(p)) {
                        var [b, ...T] = p;
                        b.apply(i, [e, ...T])
                    } else p.call(i, e)
                } catch (m) {
                    f ? v.push(m) : f = m
                }
                if (e.cancelBubble || c === t || c === null) break;
                i = c
            }
            if (f) {
                for (let m of v) queueMicrotask(() => {
                    throw m
                });
                throw f
            }
        } finally {
            e.__root = t, delete e.currentTarget, X(d), oe(h)
        }
    }
}

function Lr(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content
}

function Wr(e, t) {
    var n = y;
    n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t)
}

function Q(e, t) {
    var n = (t & er) !== 0, r, l = !e.startsWith("<!>");
    return () => {
        r === void 0 && (r = Lr(l ? e : "<!>" + e), r = dn(r));
        var i = n || fn ? document.importNode(r, !0) : r.cloneNode(!0);
        return Wr(i, i), i
    }
}

function z(e, t) {
    e !== null && e.before(t)
}

function ge(e, t) {
    var n = t == null ? "" : typeof t == "object" ? t + "" : t;
    n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "")
}

function jr(e, t) {
    return Vr(e, t)
}

const we = new Map;

function Vr(e, {target: t, anchor: n, props: r = {}, events: l, context: i, intro: a = !0}) {
    gr();
    var u = new Set, s = h => {
        for (var f = 0; f < h.length; f++) {
            var v = h[f];
            if (!u.has(v)) {
                u.add(v);
                var c = Mr(v);
                t.addEventListener(v, Re, {passive: c});
                var p = we.get(v);
                p === void 0 ? (document.addEventListener(v, Re, {passive: c}), we.set(v, 1)) : we.set(v, p + 1)
            }
        }
    };
    s(wt(qr)), Yt.add(s);
    var o = void 0, d = Ar(() => {
        var h = n ?? t.appendChild(Ge());
        return Le(() => {
            if (i) {
                en({});
                var f = R;
                f.c = i
            }
            l && (r.$$events = l), o = e(h, r) || {}, i && tn()
        }), () => {
            for (var f of u) {
                t.removeEventListener(f, Re);
                var v = we.get(f);
                --v === 0 ? (document.removeEventListener(f, Re), we.delete(f)) : we.set(f, v)
            }
            Yt.delete(s), h !== n && h.parentNode?.removeChild(h)
        }
    });
    return Hr.set(o, d), o
}

let Hr = new WeakMap;

function ye(e, t, n = !1) {
    var r = e, l = null, i = null, a = I, u = n ? mt : 0, s = !1;
    const o = (v, c = !0) => {
        s = !0, f(c, v)
    };
    var d = null;

    function h() {
        d !== null && (d.lastChild.remove(), r.before(d), d = null);
        var v = a ? l : i, c = a ? i : l;
        v && Rt(v), c && Ot(c, () => {
            a ? i = null : l = null
        })
    }

    const f = (v, c) => {
        if (a !== (a = v)) {
            var p = hn(), b = r;
            if (p && (d = document.createDocumentFragment(), d.append(b = Ge())), a ? l ??= c && Le(() => c(b)) : i ??= c && Le(() => c(b)), p) {
                var T = A, m = a ? l : i, E = a ? i : l;
                m && T.skipped_effects.delete(m), E && T.skipped_effects.add(E), T.add_callback(h)
            } else h()
        }
    };
    gn(() => {
        s = !1, t(o), s || f(null, null)
    }, u)
}

function st(e, t) {
    return t
}

function Ur(e, t, n) {
    for (var r = e.items, l = [], i = t.length, a = 0; a < i; a++) It(t[a].e, l, !0);
    var u = i > 0 && l.length === 0 && n !== null;
    if (u) {
        var s = n.parentNode;
        wr(s), s.append(n), r.clear(), $(e, t[0].prev, t[i - 1].next)
    }
    bn(l, () => {
        for (var o = 0; o < i; o++) {
            var d = t[o];
            u || (r.delete(d.k), $(e, d.prev, d.next)), ee(d.e, !u)
        }
    })
}

function ot(e, t, n, r, l, i = null) {
    var a = e, u = {flags: t, items: new Map, first: null};
    {
        var s = e;
        a = s.appendChild(Ge())
    }
    var o = null, d = !1, h = new Map, f = rn(() => {
        var b = n();
        return gt(b) ? b : b == null ? [] : wt(b)
    }), v, c;

    function p() {
        Yr(c, v, u, h, a, l, t, r, n), i !== null && (v.length === 0 ? o ? Rt(o) : o = Le(() => i(a)) : o !== null && Ot(o, () => {
            o = null
        }))
    }

    gn(() => {
        c ??= y, v = _(f);
        var b = v.length;
        if (!(d && b === 0)) {
            d = b === 0;
            var T, m, E, O;
            if (hn()) {
                var B = new Set, re = A;
                for (m = 0; m < b; m += 1) {
                    E = v[m], O = r(E, m);
                    var _e = u.items.get(O) ?? h.get(O);
                    _e ? Nn(_e, E, m) : (T = On(null, u, null, null, E, O, m, l, t, n, !0), h.set(O, T)), B.add(O)
                }
                for (const [ie, j] of u.items) B.has(ie) || re.skipped_effects.add(j.e);
                re.add_callback(p)
            } else p();
            _(f)
        }
    })
}

function Yr(e, t, n, r, l, i, a, u, s) {
    var o = t.length, d = n.items, h = n.first, f = h, v, c = null, p = [], b = [], T, m, E, O;
    for (O = 0; O < o; O += 1) {
        if (T = t[O], m = u(T, O), E = d.get(m), E === void 0) {
            var B = r.get(m);
            if (B !== void 0) {
                r.delete(m), d.set(m, B);
                var re = c ? c.next : f;
                $(n, c, B), $(n, B, re), ut(B, re, l), c = B
            } else {
                var _e = f ? f.e.nodes_start : l;
                c = On(_e, n, c, c === null ? n.first : c.next, T, m, O, i, a, s)
            }
            d.set(m, c), p = [], b = [], f = c.next;
            continue
        }
        if (Nn(E, T, O), (E.e.f & K) !== 0 && Rt(E.e), E !== f) {
            if (v !== void 0 && v.has(E)) {
                if (p.length < b.length) {
                    var ie = b[0], j;
                    c = ie.prev;
                    var Ve = p[0], g = p[p.length - 1];
                    for (j = 0; j < p.length; j += 1) ut(p[j], ie, l);
                    for (j = 0; j < b.length; j += 1) v.delete(b[j]);
                    $(n, Ve.prev, g.next), $(n, c, Ve), $(n, g, ie), f = ie, c = g, O -= 1, p = [], b = []
                } else v.delete(E), ut(E, f, l), $(n, E.prev, E.next), $(n, E, c === null ? n.first : c.next), $(n, c, E), c = E;
                continue
            }
            for (p = [], b = []; f !== null && f.k !== m;) (f.e.f & K) === 0 && (v ??= new Set).add(f), b.push(f), f = f.next;
            if (f === null) continue;
            E = f
        }
        p.push(E), c = E, f = E.next
    }
    if (f !== null || v !== void 0) {
        for (var k = v === void 0 ? [] : wt(v); f !== null;) (f.e.f & K) === 0 && k.push(f), f = f.next;
        var M = k.length;
        if (M > 0) {
            var S = o === 0 ? l : null;
            Ur(n, k, S)
        }
    }
    e.first = n.first && n.first.e, e.last = c && c.e;
    for (var J of r.values()) ee(J.e);
    r.clear()
}

function Nn(e, t, n, r) {
    ze(e.v, t), e.i = n
}

function On(e, t, n, r, l, i, a, u, s, o, d) {
    var h = (s & Gn) !== 0, f = (s & Zn) === 0, v = h ? f ? me(l, !1, !1) : De(l) : l, c = (s & Xn) === 0 ? a : De(a),
        p = {i: c, v, k: i, a: null, e: null, prev: n, next: r};
    try {
        if (e === null) {
            var b = document.createDocumentFragment();
            b.append(e = Ge())
        }
        return p.e = Le(() => u(e, v, c, o), tr), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p
    } finally {
    }
}

function ut(e, t, n) {
    for (var r = e.next ? e.next.e.nodes_start : n, l = t ? t.e.nodes_start : n, i = e.e.nodes_start; i !== null && i !== r;) {
        var a = Nt(i);
        l.before(i), i = a
    }
}

function $(e, t, n) {
    t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e)
}

const Jt = [...` 	
\r\f \v\uFEFF`];

function Br(e, t, n) {
    var r = "" + e;
    if (n) {
        for (var l in n) if (n[l]) r = r ? r + " " + l : l; else if (r.length) for (var i = l.length, a = 0; (a = r.indexOf(l, a)) >= 0;) {
            var u = a + i;
            (a === 0 || Jt.includes(r[a - 1])) && (u === r.length || Jt.includes(r[u])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(u + 1) : a = u
        }
    }
    return r === "" ? null : r
}

function Jr(e, t, n, r, l, i) {
    var a = e.__className;
    if (a !== n || a === void 0) {
        var u = Br(n, r, i);
        u == null ? e.removeAttribute("class") : e.className = u, e.__className = n
    } else if (i && l !== i) for (var s in i) {
        var o = !!i[s];
        (l == null || o !== !!l[s]) && e.classList.toggle(s, o)
    }
    return i
}

function zr(e, t, n = t) {
    var r = ke(), l = new WeakSet;
    mr(e, "input", i => {
        var a = i ? e.defaultValue : e.value;
        if (a = ft(e) ? ct(a) : a, n(a), A !== null && l.add(A), r && a !== (a = t())) {
            var u = e.selectionStart, s = e.selectionEnd;
            e.value = a ?? "", s !== null && (e.selectionStart = u, e.selectionEnd = Math.min(s, e.value.length))
        }
    }), Sn(t) == null && e.value && (n(ft(e) ? ct(e.value) : e.value), A !== null && l.add(A)), Tr(() => {
        var i = t();
        if (e === document.activeElement) {
            var a = He ?? A;
            if (l.has(a)) return
        }
        ft(e) && i === ct(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "")
    })
}

function ft(e) {
    var t = e.type;
    return t === "number" || t === "range"
}

function ct(e) {
    return e === "" ? null : +e
}

function Kr(e = !1) {
    const t = R, n = t.l.u;
    if (!n) return;
    let r = () => Pr(t.s);
    if (e) {
        let l = 0, i = {};
        const a = Tt(() => {
            let u = !1;
            const s = t.s;
            for (const o in s) s[o] !== i[o] && (i[o] = s[o], u = !0);
            return u && l++, l
        });
        r = () => _(a)
    }
    n.b.length && xr(() => {
        zt(t, r), dt(n.b)
    }), jt(() => {
        const l = Sn(() => n.m.map(Wn));
        return () => {
            for (const i of l) typeof i == "function" && i()
        }
    }), n.a.length && jt(() => {
        zt(t, r), dt(n.a)
    })
}

function zt(e, t) {
    if (e.l.s) for (const n of e.l.s) _(n);
    t()
}

const Qr = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= new Set).add(Qr);
ir();
const C = [{
    id: 1,
    text: "What is the output of this code?",
    code: 'console.log(1 + "2" + 3);',
    options: ["123", "6", "15", "1233"],
    correctAnswer: "123"
}, {
    id: 2,
    text: "What is the difference between `==` and `===` in JavaScript?",
    code: "",
    options: ["`==` performs type coercion, while `===` does not.", "`===` performs type coercion, while `==` does not.", "They are the same.", "None of the above."],
    correctAnswer: "`==` performs type coercion, while `===` does not."
}, {
    id: 3,
    text: "What is the event loop in JavaScript?",
    code: "",
    options: ["A mechanism that allows JavaScript to perform non-blocking I/O operations.", "A way to loop over events.", "A new feature in ES2025.", "All of the above."],
    correctAnswer: "A mechanism that allows JavaScript to perform non-blocking I/O operations."
}, {
    id: 4,
    text: "What is the output of this code?",
    code: "console.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "false"
}, {
    id: 5,
    text: "What is a closure in JavaScript?",
    code: "",
    options: ["A function that has access to its own scope, the scope of the outer function, and the global scope.", "A function that is closed.", "A way to close a program.", "None of the above."],
    correctAnswer: "A function that has access to its own scope, the scope of the outer function, and the global scope."
}, {
    id: 6,
    text: "What is the difference between `let` and `const`?",
    code: "",
    options: ["`let` can be reassigned, while `const` cannot.", "`const` can be reassigned, while `let` cannot.", "They are the same.", "None of the above."],
    correctAnswer: "`let` can be reassigned, while `const` cannot."
}, {
    id: 7,
    text: "What is the output of this code?",
    code: "console.log(typeof null);",
    options: ["object", "null", "undefined", "number"],
    correctAnswer: "object"
}, {
    id: 8,
    text: "What is the `this` keyword in JavaScript?",
    code: "",
    options: ["It refers to the object that it belongs to.", "It refers to the current function.", "It refers to the global object.", "None of the above."],
    correctAnswer: "It refers to the object that it belongs to."
}, {
    id: 9,
    text: "What is the output of this code?",
    code: "console.log(2 + 2 * 2);",
    options: ["6", "8", "4", "10"],
    correctAnswer: "6"
}, {
    id: 10,
    text: "What is the difference between `map` and `forEach`?",
    code: "",
    options: ["`map` returns a new array, while `forEach` does not.", "`forEach` returns a new array, while `map` does not.", "They are the same.", "None of the above."],
    correctAnswer: "`map` returns a new array, while `forEach` does not."
}, {
    id: 11, text: "Write a function that returns the sum of two numbers.", type: "challenge", challenge: {
        initialCode: `function sum(a, b) {
 // your code here 
}`,
        testCases: [{input: [1, 2], expected: 3}, {input: [5, 5], expected: 10}, {input: [-1, 1], expected: 0}],
        reading: ["Remember that the `+` operator can be used for both addition and string concatenation in JavaScript.", "Make sure to handle both positive and negative numbers."],
        hints: ["You can use the `+` operator to add two numbers.", "The function should return the sum of the two numbers."]
    }
}, {
    id: 12, text: "Write a function that reverses a string.", type: "challenge", challenge: {
        initialCode: `function reverseString(str) {
 // your code here 
}`,
        testCases: [{input: ["hello"], expected: "olleh"}, {input: ["world"], expected: "dlrow"}, {
            input: [""],
            expected: ""
        }],
        reading: ["You can use the `split()`, `reverse()`, and `join()` methods to reverse a string.", "Consider the case of an empty string."],
        hints: ["First, split the string into an array of characters.", "Then, reverse the array.", "Finally, join the array back into a string."]
    }
}, {
    id: 13, text: "Write a function that returns the factorial of a number.", type: "challenge", challenge: {
        initialCode: `function factorial(n) {
 // your code here 
}`,
        testCases: [{input: [5], expected: 120}, {input: [0], expected: 1}, {input: [1], expected: 1}],
        reading: ["A factorial is the product of all positive integers up to that number.", "The factorial of 0 is 1.", "You can use recursion or a loop to solve this problem."],
        hints: ["If you use a loop, you can initialize a variable to 1 and then multiply it by each number from 1 to n.", "If you use recursion, the base case is when n is 0, in which case you should return 1."]
    }
}];
var $r = Q("<pre><code> </code></pre>"), Gr = Q('<button class="hint-button svelte-1aiy06t">Show Hint</button>'),
    Xr = Q('<li class="svelte-1aiy06t"> </li>'),
    Zr = Q('<div class="hints svelte-1aiy06t"><h3 class="svelte-1aiy06t">Hints</h3> <ul class="svelte-1aiy06t"></ul></div>'),
    ei = Q('<li class="svelte-1aiy06t"> </li>'),
    ti = Q('<div class="reading svelte-1aiy06t"><h3 class="svelte-1aiy06t">Good to know / Remember</h3> <ul class="svelte-1aiy06t"></ul></div>'),
    ni = Q('<div class="challenge svelte-1aiy06t"><div class="challenge-editor svelte-1aiy06t"><textarea class="svelte-1aiy06t"></textarea> <div class="challenge-buttons svelte-1aiy06t"><button class="svelte-1aiy06t">Run Code</button> <!></div></div> <div class="challenge-info svelte-1aiy06t"><!> <!></div></div>'),
    ri = Q("<button> </button>"), ii = Q('<div class="options svelte-1aiy06t"></div>'),
    li = Q('<div class="result svelte-1aiy06t"><p class="svelte-1aiy06t"> </p> <button class="svelte-1aiy06t">Next Question</button></div>'),
    ai = Q('<main class="svelte-1aiy06t"><div class="header svelte-1aiy06t"><h1 class="svelte-1aiy06t">Coding Quiz</h1> <button class="svelte-1aiy06t">Skip to Challenge</button></div> <div class="quiz-container svelte-1aiy06t"><div class="question svelte-1aiy06t"><p> </p> <!></div> <!> <!></div></main>');

function si(e, t) {
    en(t, !1);
    let n = me(0), r = me(""), l = me(""), i = me(""), a = me([]);

    function u(g) {
        x(l, g), g === C[_(n)].correctAnswer ? x(r, "Correct!") : x(r, "Incorrect. The correct answer is: " + C[_(n)].correctAnswer)
    }

    function s() {
        const g = C[_(n)];
        if (g.type === "challenge") try {
            const k = new Function("return " + _(i))();
            let M = !0;
            for (const S of g.challenge.testCases) if (k(...S.input) !== S.expected) {
                M = !1;
                break
            }
            M ? x(r, "Correct!") : x(r, "Incorrect. Please try again.")
        } catch (k) {
            x(r, "Error: " + k.message)
        }
    }

    function o() {
        if (_(n) < C.length - 1) {
            pr(n), x(r, ""), x(l, ""), x(a, []);
            const g = C[_(n)];
            g.type === "challenge" && x(i, g.challenge.initialCode)
        }
    }

    function d() {
        const g = C.findIndex(k => k.type === "challenge");
        if (g !== -1) {
            x(n, g), x(r, ""), x(l, ""), x(a, []);
            const k = C[_(n)];
            k.type === "challenge" && x(i, k.challenge.initialCode)
        }
    }

    function h() {
        const g = C[_(n)];
        g.type === "challenge" && g.challenge.hints && _(a).length < g.challenge.hints.length && x(a, [..._(a), g.challenge.hints[_(a).length]])
    }

    const f = C[_(n)];
    f.type === "challenge" && x(i, f.challenge.initialCode), Kr();
    var v = ai(), c = N(v), p = V(N(c), 2), b = V(c, 2), T = N(b), m = N(T), E = N(m), O = V(m, 2);
    {
        var B = g => {
            var k = $r(), M = N(k), S = N(M);
            pe(() => ge(S, C[_(n)].code)), z(g, k)
        };
        ye(O, g => {
            C[_(n)].code && g(B)
        })
    }
    var re = V(T, 2);
    {
        var _e = g => {
            var k = ni(), M = N(k), S = N(M), J = V(S, 2), Ce = N(J), et = V(Ce, 2);
            {
                var tt = D => {
                    var le = Gr();
                    Oe("click", le, h), z(D, le)
                };
                ye(et, D => {
                    C[_(n)].challenge?.hints && D(tt)
                })
            }
            var In = V(M, 2), Pt = N(In);
            {
                var Rn = D => {
                    var le = Zr(), nt = V(N(le), 2);
                    ot(nt, 5, () => _(a), st, (rt, it) => {
                        var Se = Xr(), lt = N(Se);
                        pe(() => ge(lt, _(it))), z(rt, Se)
                    }), z(D, le)
                };
                ye(Pt, D => {
                    _(a).length > 0 && D(Rn)
                })
            }
            var Pn = V(Pt, 2);
            {
                var Fn = D => {
                    var le = ti(), nt = V(N(le), 2);
                    ot(nt, 5, () => C[_(n)].challenge.reading, st, (rt, it) => {
                        var Se = ei(), lt = N(Se);
                        pe(() => ge(lt, _(it))), z(rt, Se)
                    }), z(D, le)
                };
                ye(Pn, D => {
                    C[_(n)].challenge?.reading && D(Fn)
                })
            }
            zr(S, () => _(i), D => x(i, D)), Oe("click", Ce, s), z(g, k)
        }, ie = g => {
            var k = ii();
            ot(k, 5, () => C[_(n)].options, st, (M, S) => {
                var J = ri();
                let Ce;
                var et = N(J);
                pe(tt => {
                    Ce = Jr(J, 1, "svelte-1aiy06t", null, Ce, tt), ge(et, _(S))
                }, [() => ({
                    selected: _(l) === _(S),
                    correct: _(r) && _(S) === C[_(n)].correctAnswer,
                    incorrect: _(r) && _(l) === _(S) && _(S) !== C[_(n)].correctAnswer
                })]), Oe("click", J, () => u(_(S))), z(M, J)
            }), z(g, k)
        };
        ye(re, g => {
            C[_(n)].type === "challenge" ? g(_e) : g(ie, !1)
        })
    }
    var j = V(re, 2);
    {
        var Ve = g => {
            var k = li(), M = N(k), S = N(M), J = V(M, 2);
            pe(() => ge(S, _(r))), Oe("click", J, o), z(g, k)
        };
        ye(j, g => {
            _(r) && g(Ve)
        })
    }
    pe(() => ge(E, C[_(n)].text)), Oe("click", p, d), z(e, v), tn()
}

jr(si, {target: document.getElementById("app")});
