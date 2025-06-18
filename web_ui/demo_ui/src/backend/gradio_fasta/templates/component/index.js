const {
  SvelteComponent: Rs,
  assign: Us,
  create_slot: xs,
  detach: Fs,
  element: Gs,
  get_all_dirty_from_scope: qs,
  get_slot_changes: js,
  get_spread_update: Vs,
  init: zs,
  insert: Xs,
  safe_not_equal: Ws,
  set_dynamic_element_data: vr,
  set_style: ie,
  toggle_class: Me,
  transition_in: Ni,
  transition_out: Ii,
  update_slot_base: Zs
} = window.__gradio__svelte__internal;
function Js(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[18].default
  ), s = xs(
    i,
    e,
    /*$$scope*/
    e[17],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-1t38q2d"
    }
  ], u = {};
  for (let o = 0; o < l.length; o += 1)
    u = Us(u, l[o]);
  return {
    c() {
      t = Gs(
        /*tag*/
        e[14]
      ), s && s.c(), vr(
        /*tag*/
        e[14]
      )(t, u), Me(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), Me(
        t,
        "padded",
        /*padding*/
        e[6]
      ), Me(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), Me(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), ie(
        t,
        "height",
        /*get_dimension*/
        e[15](
          /*height*/
          e[0]
        )
      ), ie(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : (
        /*get_dimension*/
        e[15](
          /*width*/
          e[1]
        )
      )), ie(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), ie(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), ie(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), ie(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), ie(t, "border-width", "var(--block-border-width)");
    },
    m(o, a) {
      Xs(o, t, a), s && s.m(t, null), r = !0;
    },
    p(o, a) {
      s && s.p && (!r || a & /*$$scope*/
      131072) && Zs(
        s,
        i,
        o,
        /*$$scope*/
        o[17],
        r ? js(
          i,
          /*$$scope*/
          o[17],
          a,
          null
        ) : qs(
          /*$$scope*/
          o[17]
        ),
        null
      ), vr(
        /*tag*/
        o[14]
      )(t, u = Vs(l, [
        (!r || a & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          o[7]
        ) },
        (!r || a & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          o[2]
        ) },
        (!r || a & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        o[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), Me(
        t,
        "hidden",
        /*visible*/
        o[10] === !1
      ), Me(
        t,
        "padded",
        /*padding*/
        o[6]
      ), Me(
        t,
        "border_focus",
        /*border_mode*/
        o[5] === "focus"
      ), Me(t, "hide-container", !/*explicit_call*/
      o[8] && !/*container*/
      o[9]), a & /*height*/
      1 && ie(
        t,
        "height",
        /*get_dimension*/
        o[15](
          /*height*/
          o[0]
        )
      ), a & /*width*/
      2 && ie(t, "width", typeof /*width*/
      o[1] == "number" ? `calc(min(${/*width*/
      o[1]}px, 100%))` : (
        /*get_dimension*/
        o[15](
          /*width*/
          o[1]
        )
      )), a & /*variant*/
      16 && ie(
        t,
        "border-style",
        /*variant*/
        o[4]
      ), a & /*allow_overflow*/
      2048 && ie(
        t,
        "overflow",
        /*allow_overflow*/
        o[11] ? "visible" : "hidden"
      ), a & /*scale*/
      4096 && ie(
        t,
        "flex-grow",
        /*scale*/
        o[12]
      ), a & /*min_width*/
      8192 && ie(t, "min-width", `calc(min(${/*min_width*/
      o[13]}px, 100%))`);
    },
    i(o) {
      r || (Ni(s, o), r = !0);
    },
    o(o) {
      Ii(s, o), r = !1;
    },
    d(o) {
      o && Fs(t), s && s.d(o);
    }
  };
}
function Qs(e) {
  let t, n = (
    /*tag*/
    e[14] && Js(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), t = !0;
    },
    p(r, [i]) {
      /*tag*/
      r[14] && n.p(r, i);
    },
    i(r) {
      t || (Ni(n, r), t = !0);
    },
    o(r) {
      Ii(n, r), t = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Ys(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { height: s = void 0 } = t, { width: l = void 0 } = t, { elem_id: u = "" } = t, { elem_classes: o = [] } = t, { variant: a = "solid" } = t, { border_mode: f = "base" } = t, { padding: c = !0 } = t, { type: _ = "normal" } = t, { test_id: h = void 0 } = t, { explicit_call: d = !1 } = t, { container: b = !0 } = t, { visible: y = !0 } = t, { allow_overflow: v = !0 } = t, { scale: S = null } = t, { min_width: p = 0 } = t, A = _ === "fieldset" ? "fieldset" : "div";
  const T = (w) => {
    if (w !== void 0) {
      if (typeof w == "number")
        return w + "px";
      if (typeof w == "string")
        return w;
    }
  };
  return e.$$set = (w) => {
    "height" in w && n(0, s = w.height), "width" in w && n(1, l = w.width), "elem_id" in w && n(2, u = w.elem_id), "elem_classes" in w && n(3, o = w.elem_classes), "variant" in w && n(4, a = w.variant), "border_mode" in w && n(5, f = w.border_mode), "padding" in w && n(6, c = w.padding), "type" in w && n(16, _ = w.type), "test_id" in w && n(7, h = w.test_id), "explicit_call" in w && n(8, d = w.explicit_call), "container" in w && n(9, b = w.container), "visible" in w && n(10, y = w.visible), "allow_overflow" in w && n(11, v = w.allow_overflow), "scale" in w && n(12, S = w.scale), "min_width" in w && n(13, p = w.min_width), "$$scope" in w && n(17, i = w.$$scope);
  }, [
    s,
    l,
    u,
    o,
    a,
    f,
    c,
    h,
    d,
    b,
    y,
    v,
    S,
    p,
    A,
    T,
    _,
    i,
    r
  ];
}
class Li extends Rs {
  constructor(t) {
    super(), zs(this, t, Ys, Qs, Ws, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Ks,
  append: hn,
  attr: Ut,
  create_component: $s,
  destroy_component: el,
  detach: tl,
  element: yr,
  init: nl,
  insert: rl,
  mount_component: il,
  safe_not_equal: sl,
  set_data: ll,
  space: ol,
  text: al,
  toggle_class: De,
  transition_in: ul,
  transition_out: fl
} = window.__gradio__svelte__internal;
function cl(e) {
  let t, n, r, i, s, l;
  return r = new /*Icon*/
  e[1]({}), {
    c() {
      t = yr("label"), n = yr("span"), $s(r.$$.fragment), i = ol(), s = al(
        /*label*/
        e[0]
      ), Ut(n, "class", "svelte-9gxdi0"), Ut(t, "for", ""), Ut(t, "data-testid", "block-label"), Ut(t, "class", "svelte-9gxdi0"), De(t, "hide", !/*show_label*/
      e[2]), De(t, "sr-only", !/*show_label*/
      e[2]), De(
        t,
        "float",
        /*float*/
        e[4]
      ), De(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(u, o) {
      rl(u, t, o), hn(t, n), il(r, n, null), hn(t, i), hn(t, s), l = !0;
    },
    p(u, [o]) {
      (!l || o & /*label*/
      1) && ll(
        s,
        /*label*/
        u[0]
      ), (!l || o & /*show_label*/
      4) && De(t, "hide", !/*show_label*/
      u[2]), (!l || o & /*show_label*/
      4) && De(t, "sr-only", !/*show_label*/
      u[2]), (!l || o & /*float*/
      16) && De(
        t,
        "float",
        /*float*/
        u[4]
      ), (!l || o & /*disable*/
      8) && De(
        t,
        "hide-label",
        /*disable*/
        u[3]
      );
    },
    i(u) {
      l || (ul(r.$$.fragment, u), l = !0);
    },
    o(u) {
      fl(r.$$.fragment, u), l = !1;
    },
    d(u) {
      u && tl(t), el(r);
    }
  };
}
function hl(e, t, n) {
  let { label: r = null } = t, { Icon: i } = t, { show_label: s = !0 } = t, { disable: l = !1 } = t, { float: u = !0 } = t;
  return e.$$set = (o) => {
    "label" in o && n(0, r = o.label), "Icon" in o && n(1, i = o.Icon), "show_label" in o && n(2, s = o.show_label), "disable" in o && n(3, l = o.disable), "float" in o && n(4, u = o.float);
  }, [r, i, s, l, u];
}
class Oi extends Ks {
  constructor(t) {
    super(), nl(this, t, hl, cl, sl, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: _l,
  append: In,
  attr: ke,
  bubble: dl,
  create_component: ml,
  destroy_component: pl,
  detach: Mi,
  element: Ln,
  init: gl,
  insert: Di,
  listen: bl,
  mount_component: vl,
  safe_not_equal: yl,
  set_data: wl,
  set_style: xt,
  space: El,
  text: Sl,
  toggle_class: ce,
  transition_in: Tl,
  transition_out: Al
} = window.__gradio__svelte__internal;
function wr(e) {
  let t, n;
  return {
    c() {
      t = Ln("span"), n = Sl(
        /*label*/
        e[1]
      ), ke(t, "class", "svelte-lpi64a");
    },
    m(r, i) {
      Di(r, t, i), In(t, n);
    },
    p(r, i) {
      i & /*label*/
      2 && wl(
        n,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && Mi(t);
    }
  };
}
function Bl(e) {
  let t, n, r, i, s, l, u, o = (
    /*show_label*/
    e[2] && wr(e)
  );
  return i = new /*Icon*/
  e[0]({}), {
    c() {
      t = Ln("button"), o && o.c(), n = El(), r = Ln("div"), ml(i.$$.fragment), ke(r, "class", "svelte-lpi64a"), ce(
        r,
        "small",
        /*size*/
        e[4] === "small"
      ), ce(
        r,
        "large",
        /*size*/
        e[4] === "large"
      ), t.disabled = /*disabled*/
      e[7], ke(
        t,
        "aria-label",
        /*label*/
        e[1]
      ), ke(
        t,
        "aria-haspopup",
        /*hasPopup*/
        e[8]
      ), ke(
        t,
        "title",
        /*label*/
        e[1]
      ), ke(t, "class", "svelte-lpi64a"), ce(
        t,
        "pending",
        /*pending*/
        e[3]
      ), ce(
        t,
        "padded",
        /*padded*/
        e[5]
      ), ce(
        t,
        "highlight",
        /*highlight*/
        e[6]
      ), ce(
        t,
        "transparent",
        /*transparent*/
        e[9]
      ), xt(t, "color", !/*disabled*/
      e[7] && /*_color*/
      e[11] ? (
        /*_color*/
        e[11]
      ) : "var(--block-label-text-color)"), xt(t, "--bg-color", /*disabled*/
      e[7] ? "auto" : (
        /*background*/
        e[10]
      ));
    },
    m(a, f) {
      Di(a, t, f), o && o.m(t, null), In(t, n), In(t, r), vl(i, r, null), s = !0, l || (u = bl(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), l = !0);
    },
    p(a, [f]) {
      /*show_label*/
      a[2] ? o ? o.p(a, f) : (o = wr(a), o.c(), o.m(t, n)) : o && (o.d(1), o = null), (!s || f & /*size*/
      16) && ce(
        r,
        "small",
        /*size*/
        a[4] === "small"
      ), (!s || f & /*size*/
      16) && ce(
        r,
        "large",
        /*size*/
        a[4] === "large"
      ), (!s || f & /*disabled*/
      128) && (t.disabled = /*disabled*/
      a[7]), (!s || f & /*label*/
      2) && ke(
        t,
        "aria-label",
        /*label*/
        a[1]
      ), (!s || f & /*hasPopup*/
      256) && ke(
        t,
        "aria-haspopup",
        /*hasPopup*/
        a[8]
      ), (!s || f & /*label*/
      2) && ke(
        t,
        "title",
        /*label*/
        a[1]
      ), (!s || f & /*pending*/
      8) && ce(
        t,
        "pending",
        /*pending*/
        a[3]
      ), (!s || f & /*padded*/
      32) && ce(
        t,
        "padded",
        /*padded*/
        a[5]
      ), (!s || f & /*highlight*/
      64) && ce(
        t,
        "highlight",
        /*highlight*/
        a[6]
      ), (!s || f & /*transparent*/
      512) && ce(
        t,
        "transparent",
        /*transparent*/
        a[9]
      ), f & /*disabled, _color*/
      2176 && xt(t, "color", !/*disabled*/
      a[7] && /*_color*/
      a[11] ? (
        /*_color*/
        a[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && xt(t, "--bg-color", /*disabled*/
      a[7] ? "auto" : (
        /*background*/
        a[10]
      ));
    },
    i(a) {
      s || (Tl(i.$$.fragment, a), s = !0);
    },
    o(a) {
      Al(i.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Mi(t), o && o.d(), pl(i), l = !1, u();
    }
  };
}
function Hl(e, t, n) {
  let r, { Icon: i } = t, { label: s = "" } = t, { show_label: l = !1 } = t, { pending: u = !1 } = t, { size: o = "small" } = t, { padded: a = !0 } = t, { highlight: f = !1 } = t, { disabled: c = !1 } = t, { hasPopup: _ = !1 } = t, { color: h = "var(--block-label-text-color)" } = t, { transparent: d = !1 } = t, { background: b = "var(--background-fill-primary)" } = t;
  function y(v) {
    dl.call(this, e, v);
  }
  return e.$$set = (v) => {
    "Icon" in v && n(0, i = v.Icon), "label" in v && n(1, s = v.label), "show_label" in v && n(2, l = v.show_label), "pending" in v && n(3, u = v.pending), "size" in v && n(4, o = v.size), "padded" in v && n(5, a = v.padded), "highlight" in v && n(6, f = v.highlight), "disabled" in v && n(7, c = v.disabled), "hasPopup" in v && n(8, _ = v.hasPopup), "color" in v && n(12, h = v.color), "transparent" in v && n(9, d = v.transparent), "background" in v && n(10, b = v.background);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlight, color*/
    4160 && n(11, r = f ? "var(--color-accent)" : h);
  }, [
    i,
    s,
    l,
    u,
    o,
    a,
    f,
    c,
    _,
    d,
    b,
    r,
    h,
    y
  ];
}
class kl extends _l {
  constructor(t) {
    super(), gl(this, t, Hl, Bl, yl, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: Cl,
  append: Pl,
  attr: _n,
  binding_callbacks: Nl,
  create_slot: Il,
  detach: Ll,
  element: Er,
  get_all_dirty_from_scope: Ol,
  get_slot_changes: Ml,
  init: Dl,
  insert: Rl,
  safe_not_equal: Ul,
  toggle_class: Re,
  transition_in: xl,
  transition_out: Fl,
  update_slot_base: Gl
} = window.__gradio__svelte__internal;
function ql(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[5].default
  ), s = Il(
    i,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = Er("div"), n = Er("div"), s && s.c(), _n(n, "class", "icon svelte-3w3rth"), _n(t, "class", "empty svelte-3w3rth"), _n(t, "aria-label", "Empty value"), Re(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), Re(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), Re(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), Re(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(l, u) {
      Rl(l, t, u), Pl(t, n), s && s.m(n, null), e[6](t), r = !0;
    },
    p(l, [u]) {
      s && s.p && (!r || u & /*$$scope*/
      16) && Gl(
        s,
        i,
        l,
        /*$$scope*/
        l[4],
        r ? Ml(
          i,
          /*$$scope*/
          l[4],
          u,
          null
        ) : Ol(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!r || u & /*size*/
      1) && Re(
        t,
        "small",
        /*size*/
        l[0] === "small"
      ), (!r || u & /*size*/
      1) && Re(
        t,
        "large",
        /*size*/
        l[0] === "large"
      ), (!r || u & /*unpadded_box*/
      2) && Re(
        t,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!r || u & /*parent_height*/
      8) && Re(
        t,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      r || (xl(s, l), r = !0);
    },
    o(l) {
      Fl(s, l), r = !1;
    },
    d(l) {
      l && Ll(t), s && s.d(l), e[6](null);
    }
  };
}
function jl(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], s = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = s(n)) : (i === "call" || i === "optionalCall") && (n = s((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function Vl(e, t, n) {
  let r, { $$slots: i = {}, $$scope: s } = t, { size: l = "small" } = t, { unpadded_box: u = !1 } = t, o;
  function a(c) {
    if (!c)
      return !1;
    const { height: _ } = c.getBoundingClientRect(), { height: h } = jl([
      c,
      "access",
      (d) => d.parentElement,
      "optionalAccess",
      (d) => d.getBoundingClientRect,
      "call",
      (d) => d()
    ]) || { height: _ };
    return _ > h + 2;
  }
  function f(c) {
    Nl[c ? "unshift" : "push"](() => {
      o = c, n(2, o);
    });
  }
  return e.$$set = (c) => {
    "size" in c && n(0, l = c.size), "unpadded_box" in c && n(1, u = c.unpadded_box), "$$scope" in c && n(4, s = c.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, r = a(o));
  }, [l, u, o, r, s, i, f];
}
class zl extends Cl {
  constructor(t) {
    super(), Dl(this, t, Vl, ql, Ul, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Xl,
  append: dn,
  attr: be,
  detach: Wl,
  init: Zl,
  insert: Jl,
  noop: mn,
  safe_not_equal: Ql,
  set_style: we,
  svg_element: Ft
} = window.__gradio__svelte__internal;
function Yl(e) {
  let t, n, r, i;
  return {
    c() {
      t = Ft("svg"), n = Ft("g"), r = Ft("path"), i = Ft("path"), be(r, "d", "M18,6L6.087,17.913"), we(r, "fill", "none"), we(r, "fill-rule", "nonzero"), we(r, "stroke-width", "2px"), be(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), be(i, "d", "M4.364,4.364L19.636,19.636"), we(i, "fill", "none"), we(i, "fill-rule", "nonzero"), we(i, "stroke-width", "2px"), be(t, "width", "100%"), be(t, "height", "100%"), be(t, "viewBox", "0 0 24 24"), be(t, "version", "1.1"), be(t, "xmlns", "http://www.w3.org/2000/svg"), be(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), be(t, "xml:space", "preserve"), be(t, "stroke", "currentColor"), we(t, "fill-rule", "evenodd"), we(t, "clip-rule", "evenodd"), we(t, "stroke-linecap", "round"), we(t, "stroke-linejoin", "round");
    },
    m(s, l) {
      Jl(s, t, l), dn(t, n), dn(n, r), dn(t, i);
    },
    p: mn,
    i: mn,
    o: mn,
    d(s) {
      s && Wl(t);
    }
  };
}
class Kl extends Xl {
  constructor(t) {
    super(), Zl(this, t, null, Yl, Ql, {});
  }
}
const {
  SvelteComponent: $l,
  append: Sr,
  attr: he,
  detach: eo,
  init: to,
  insert: no,
  noop: pn,
  safe_not_equal: ro,
  svg_element: gn
} = window.__gradio__svelte__internal;
function io(e) {
  let t, n, r;
  return {
    c() {
      t = gn("svg"), n = gn("path"), r = gn("polyline"), he(n, "d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"), he(r, "points", "13 2 13 9 20 9"), he(t, "xmlns", "http://www.w3.org/2000/svg"), he(t, "width", "100%"), he(t, "height", "100%"), he(t, "viewBox", "0 0 24 24"), he(t, "fill", "none"), he(t, "stroke", "currentColor"), he(t, "stroke-width", "1.5"), he(t, "stroke-linecap", "round"), he(t, "stroke-linejoin", "round"), he(t, "class", "feather feather-file");
    },
    m(i, s) {
      no(i, t, s), Sr(t, n), Sr(t, r);
    },
    p: pn,
    i: pn,
    o: pn,
    d(i) {
      i && eo(t);
    }
  };
}
let sr = class extends $l {
  constructor(t) {
    super(), to(this, t, null, io, ro, {});
  }
};
const {
  SvelteComponent: so,
  append: lo,
  attr: st,
  detach: oo,
  init: ao,
  insert: uo,
  noop: bn,
  safe_not_equal: fo,
  svg_element: Tr
} = window.__gradio__svelte__internal;
function co(e) {
  let t, n;
  return {
    c() {
      t = Tr("svg"), n = Tr("path"), st(n, "fill", "currentColor"), st(n, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), st(t, "xmlns", "http://www.w3.org/2000/svg"), st(t, "width", "100%"), st(t, "height", "100%"), st(t, "viewBox", "0 0 24 24");
    },
    m(r, i) {
      uo(r, t, i), lo(t, n);
    },
    p: bn,
    i: bn,
    o: bn,
    d(r) {
      r && oo(t);
    }
  };
}
class ho extends so {
  constructor(t) {
    super(), ao(this, t, null, co, fo, {});
  }
}
const {
  SvelteComponent: _o,
  append: vn,
  attr: Q,
  detach: mo,
  init: po,
  insert: go,
  noop: yn,
  safe_not_equal: bo,
  svg_element: Gt
} = window.__gradio__svelte__internal;
function vo(e) {
  let t, n, r, i;
  return {
    c() {
      t = Gt("svg"), n = Gt("path"), r = Gt("polyline"), i = Gt("line"), Q(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Q(r, "points", "17 8 12 3 7 8"), Q(i, "x1", "12"), Q(i, "y1", "3"), Q(i, "x2", "12"), Q(i, "y2", "15"), Q(t, "xmlns", "http://www.w3.org/2000/svg"), Q(t, "width", "90%"), Q(t, "height", "90%"), Q(t, "viewBox", "0 0 24 24"), Q(t, "fill", "none"), Q(t, "stroke", "currentColor"), Q(t, "stroke-width", "2"), Q(t, "stroke-linecap", "round"), Q(t, "stroke-linejoin", "round"), Q(t, "class", "feather feather-upload");
    },
    m(s, l) {
      go(s, t, l), vn(t, n), vn(t, r), vn(t, i);
    },
    p: yn,
    i: yn,
    o: yn,
    d(s) {
      s && mo(t);
    }
  };
}
let yo = class extends _o {
  constructor(t) {
    super(), po(this, t, null, vo, bo, {});
  }
};
const wo = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Ar = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
wo.reduce(
  (e, { color: t, primary: n, secondary: r }) => ({
    ...e,
    [t]: {
      primary: Ar[t][n],
      secondary: Ar[t][r]
    }
  }),
  {}
);
const {
  SvelteComponent: Eo,
  append: Je,
  attr: On,
  check_outros: So,
  create_component: Ri,
  destroy_component: Ui,
  detach: Xt,
  element: Mn,
  group_outros: To,
  init: Ao,
  insert: Wt,
  mount_component: xi,
  safe_not_equal: Bo,
  set_data: Dn,
  space: Rn,
  text: At,
  toggle_class: Br,
  transition_in: Qt,
  transition_out: Yt
} = window.__gradio__svelte__internal;
function Ho(e) {
  let t, n;
  return t = new yo({}), {
    c() {
      Ri(t.$$.fragment);
    },
    m(r, i) {
      xi(t, r, i), n = !0;
    },
    i(r) {
      n || (Qt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Yt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Ui(t, r);
    }
  };
}
function ko(e) {
  let t, n;
  return t = new ho({}), {
    c() {
      Ri(t.$$.fragment);
    },
    m(r, i) {
      xi(t, r, i), n = !0;
    },
    i(r) {
      n || (Qt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Yt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Ui(t, r);
    }
  };
}
function Hr(e) {
  let t, n, r = (
    /*i18n*/
    e[1]("common.or") + ""
  ), i, s, l, u = (
    /*message*/
    (e[2] || /*i18n*/
    e[1]("upload_text.click_to_upload")) + ""
  ), o;
  return {
    c() {
      t = Mn("span"), n = At("- "), i = At(r), s = At(" -"), l = Rn(), o = At(u), On(t, "class", "or svelte-kzcjhc");
    },
    m(a, f) {
      Wt(a, t, f), Je(t, n), Je(t, i), Je(t, s), Wt(a, l, f), Wt(a, o, f);
    },
    p(a, f) {
      f & /*i18n*/
      2 && r !== (r = /*i18n*/
      a[1]("common.or") + "") && Dn(i, r), f & /*message, i18n*/
      6 && u !== (u = /*message*/
      (a[2] || /*i18n*/
      a[1]("upload_text.click_to_upload")) + "") && Dn(o, u);
    },
    d(a) {
      a && (Xt(t), Xt(l), Xt(o));
    }
  };
}
function Co(e) {
  let t, n, r, i, s, l = (
    /*i18n*/
    e[1](
      /*defs*/
      e[5][
        /*type*/
        e[0]
      ] || /*defs*/
      e[5].file
    ) + ""
  ), u, o, a;
  const f = [ko, Ho], c = [];
  function _(d, b) {
    return (
      /*type*/
      d[0] === "clipboard" ? 0 : 1
    );
  }
  r = _(e), i = c[r] = f[r](e);
  let h = (
    /*mode*/
    e[3] !== "short" && Hr(e)
  );
  return {
    c() {
      t = Mn("div"), n = Mn("span"), i.c(), s = Rn(), u = At(l), o = Rn(), h && h.c(), On(n, "class", "icon-wrap svelte-kzcjhc"), Br(
        n,
        "hovered",
        /*hovered*/
        e[4]
      ), On(t, "class", "wrap svelte-kzcjhc");
    },
    m(d, b) {
      Wt(d, t, b), Je(t, n), c[r].m(n, null), Je(t, s), Je(t, u), Je(t, o), h && h.m(t, null), a = !0;
    },
    p(d, [b]) {
      let y = r;
      r = _(d), r !== y && (To(), Yt(c[y], 1, 1, () => {
        c[y] = null;
      }), So(), i = c[r], i || (i = c[r] = f[r](d), i.c()), Qt(i, 1), i.m(n, null)), (!a || b & /*hovered*/
      16) && Br(
        n,
        "hovered",
        /*hovered*/
        d[4]
      ), (!a || b & /*i18n, type*/
      3) && l !== (l = /*i18n*/
      d[1](
        /*defs*/
        d[5][
          /*type*/
          d[0]
        ] || /*defs*/
        d[5].file
      ) + "") && Dn(u, l), /*mode*/
      d[3] !== "short" ? h ? h.p(d, b) : (h = Hr(d), h.c(), h.m(t, null)) : h && (h.d(1), h = null);
    },
    i(d) {
      a || (Qt(i), a = !0);
    },
    o(d) {
      Yt(i), a = !1;
    },
    d(d) {
      d && Xt(t), c[r].d(), h && h.d();
    }
  };
}
function Po(e, t, n) {
  let { type: r = "file" } = t, { i18n: i } = t, { message: s = void 0 } = t, { mode: l = "full" } = t, { hovered: u = !1 } = t;
  const o = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return e.$$set = (a) => {
    "type" in a && n(0, r = a.type), "i18n" in a && n(1, i = a.i18n), "message" in a && n(2, s = a.message), "mode" in a && n(3, l = a.mode), "hovered" in a && n(4, u = a.hovered);
  }, [r, i, s, l, u, o];
}
class No extends Eo {
  constructor(t) {
    super(), Ao(this, t, Po, Co, Bo, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
var wn = new Intl.Collator(0, { numeric: 1 }).compare;
function kr(e, t, n) {
  return e = e.split("."), t = t.split("."), wn(e[0], t[0]) || wn(e[1], t[1]) || (t[2] = t.slice(2).join("."), n = /[.-]/.test(e[2] = e.slice(2).join(".")), n == /[.-]/.test(t[2]) ? wn(e[2], t[2]) : n ? -1 : 1);
}
function Fi(e, t, n) {
  return t.startsWith("http://") || t.startsWith("https://") ? n ? e : t : e + t;
}
function En(e) {
  if (e.startsWith("http")) {
    const { protocol: t, host: n } = new URL(e);
    return n.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: n,
      http_protocol: t
    } : {
      ws_protocol: t === "https:" ? "wss" : "ws",
      http_protocol: t,
      host: n
    };
  } else if (e.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: e
  };
}
const Gi = /^[^\/]*\/[^\/]*$/, Io = /.*hf\.space\/{0,1}$/;
async function Lo(e, t) {
  const n = {};
  t && (n.Authorization = `Bearer ${t}`);
  const r = e.trim();
  if (Gi.test(r))
    try {
      const i = await fetch(
        `https://huggingface.co/api/spaces/${r}/host`,
        { headers: n }
      );
      if (i.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const s = (await i.json()).host;
      return {
        space_id: e,
        ...En(s)
      };
    } catch (i) {
      throw new Error("Space metadata could not be loaded." + i.message);
    }
  if (Io.test(r)) {
    const { ws_protocol: i, http_protocol: s, host: l } = En(r);
    return {
      space_id: l.replace(".hf.space", ""),
      ws_protocol: i,
      http_protocol: s,
      host: l
    };
  }
  return {
    space_id: !1,
    ...En(r)
  };
}
function Oo(e) {
  let t = {};
  return e.forEach(({ api_name: n }, r) => {
    n && (t[n] = r);
  }), t;
}
const Mo = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function Cr(e) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${e}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && Mo.test(n));
  } catch {
    return !1;
  }
}
function Ce(e, t, n) {
  if (e == null)
    return null;
  if (Array.isArray(e)) {
    const r = [];
    for (const i of e)
      i == null ? r.push(null) : r.push(Ce(i, t, n));
    return r;
  }
  return e.is_stream ? n == null ? new ft({
    ...e,
    url: t + "/stream/" + e.path
  }) : new ft({
    ...e,
    url: "/proxy=" + n + "stream/" + e.path
  }) : new ft({
    ...e,
    url: Ro(e.path, t, n)
  });
}
function Do(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function Ro(e, t, n) {
  return e == null ? n ? `/proxy=${n}file=` : `${t}/file=` : Do(e) ? e : n ? `/proxy=${n}file=${e}` : `${t}/file=${e}`;
}
async function Uo(e, t, n, r = Go) {
  let i = (Array.isArray(e) ? e : [e]).map(
    (s) => s.blob
  );
  return await Promise.all(
    await r(t, i, void 0, n).then(
      async (s) => {
        if (s.error)
          throw new Error(s.error);
        return s.files ? s.files.map((l, u) => {
          const o = new ft({ ...e[u], path: l });
          return Ce(o, t, null);
        }) : [];
      }
    )
  );
}
async function xo(e, t) {
  return e.map(
    (n, r) => new ft({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: t
    })
  );
}
class ft {
  constructor({
    path: t,
    url: n,
    orig_name: r,
    size: i,
    blob: s,
    is_stream: l,
    mime_type: u,
    alt_text: o
  }) {
    this.path = t, this.url = n, this.orig_name = r, this.size = i, this.blob = n ? void 0 : s, this.is_stream = l, this.mime_type = u, this.alt_text = o;
  }
}
const qi = "This application is too busy. Keep trying!", je = "Connection errored out.";
let ji;
function Fo(e, t) {
  return { post_data: n, upload_files: r, client: i, handle_blob: s };
  async function n(l, u, o) {
    const a = { "Content-Type": "application/json" };
    o && (a.Authorization = `Bearer ${o}`);
    try {
      var f = await e(l, {
        method: "POST",
        body: JSON.stringify(u),
        headers: a
      });
    } catch {
      return [{ error: je }, 500];
    }
    let c, _;
    try {
      c = await f.json(), _ = f.status;
    } catch (h) {
      c = { error: `Could not parse server response: ${h}` }, _ = 500;
    }
    return [c, _];
  }
  async function r(l, u, o, a) {
    const f = {};
    o && (f.Authorization = `Bearer ${o}`);
    const c = 1e3, _ = [];
    for (let d = 0; d < u.length; d += c) {
      const b = u.slice(d, d + c), y = new FormData();
      b.forEach((S) => {
        y.append("files", S);
      });
      try {
        const S = a ? `${l}/upload?upload_id=${a}` : `${l}/upload`;
        var h = await e(S, {
          method: "POST",
          body: y,
          headers: f
        });
      } catch {
        return { error: je };
      }
      const v = await h.json();
      _.push(...v);
    }
    return { files: _ };
  }
  async function i(l, u = { normalise_files: !0 }) {
    return new Promise(async (o) => {
      const { status_callback: a, hf_token: f, normalise_files: c } = u, _ = {
        predict: oe,
        submit: qe,
        view_api: Be,
        component_server: rt
      }, h = c ?? !0;
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const m = await import("./wrapper-6f348d45-f837cf34.js");
        ji = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = m.WebSocket;
      }
      const { ws_protocol: d, http_protocol: b, host: y, space_id: v } = await Lo(l, f), S = Math.random().toString(36).substring(2), p = {};
      let A = !1, T = {}, w = null;
      const j = {}, B = /* @__PURE__ */ new Set();
      let H, Z = {}, le = !1;
      f && v && (le = await jo(v, f));
      async function Ge(m) {
        if (H = m, Z = Oo((m == null ? void 0 : m.dependencies) || []), H.auth_required)
          return {
            config: H,
            ..._
          };
        try {
          $ = await Be(H);
        } catch (N) {
          console.error(`Could not get api details: ${N.message}`);
        }
        return {
          config: H,
          ..._
        };
      }
      let $;
      async function Ae(m) {
        if (a && a(m), m.status === "running")
          try {
            H = await Lr(
              e,
              `${b}//${y}`,
              f
            );
            const N = await Ge(H);
            o(N);
          } catch (N) {
            console.error(N), a && a({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        H = await Lr(
          e,
          `${b}//${y}`,
          f
        );
        const m = await Ge(H);
        o(m);
      } catch (m) {
        console.error(m), v ? xn(
          v,
          Gi.test(v) ? "space_name" : "subdomain",
          Ae
        ) : a && a({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function oe(m, N, g) {
        let M = !1, E = !1, X;
        if (typeof m == "number")
          X = H.dependencies[m];
        else {
          const V = m.replace(/^\//, "");
          X = H.dependencies[Z[V]];
        }
        if (X.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((V, ae) => {
          const He = qe(m, N, g);
          let P;
          He.on("data", (ue) => {
            E && (He.destroy(), V(ue)), M = !0, P = ue;
          }).on("status", (ue) => {
            ue.stage === "error" && ae(ue), ue.stage === "complete" && (E = !0, M && (He.destroy(), V(P)));
          });
        });
      }
      function qe(m, N, g, M = null) {
        let E, X;
        if (typeof m == "number")
          E = m, X = $.unnamed_endpoints[E];
        else {
          const W = m.replace(/^\//, "");
          E = Z[W], X = $.named_endpoints[m.trim()];
        }
        if (typeof E != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let V, ae, He = H.protocol ?? "ws";
        const P = typeof m == "number" ? "/predict" : m;
        let ue, pe = null, re = !1;
        const Et = {};
        let Oe = "";
        typeof window < "u" && (Oe = new URLSearchParams(window.location.search).toString()), s(`${H.root}`, N, X, f).then(
          (W) => {
            if (ue = {
              data: W || [],
              event_data: g,
              fn_index: E,
              trigger_id: M
            }, Vo(E, H))
              D({
                type: "status",
                endpoint: P,
                stage: "pending",
                queue: !1,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${H.root}/run${P.startsWith("/") ? P : `/${P}`}${Oe ? "?" + Oe : ""}`,
                {
                  ...ue,
                  session_hash: S
                },
                f
              ).then(([G, z]) => {
                const ge = h ? qt(
                  G.data,
                  X,
                  H.root,
                  H.root_url
                ) : G.data;
                z == 200 ? (D({
                  type: "data",
                  endpoint: P,
                  fn_index: E,
                  data: ge,
                  time: /* @__PURE__ */ new Date()
                }), D({
                  type: "status",
                  endpoint: P,
                  fn_index: E,
                  stage: "complete",
                  eta: G.average_duration,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                })) : D({
                  type: "status",
                  stage: "error",
                  endpoint: P,
                  fn_index: E,
                  message: G.error,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              }).catch((G) => {
                D({
                  type: "status",
                  stage: "error",
                  message: G.message,
                  endpoint: P,
                  fn_index: E,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              });
            else if (He == "ws") {
              D({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: P,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              });
              let G = new URL(`${d}://${Fi(
                y,
                H.path,
                !0
              )}
							/queue/join${Oe ? "?" + Oe : ""}`);
              le && G.searchParams.set("__sign", le), V = new WebSocket(G), V.onclose = (z) => {
                z.wasClean || D({
                  type: "status",
                  stage: "error",
                  broken: !0,
                  message: je,
                  queue: !0,
                  endpoint: P,
                  fn_index: E,
                  time: /* @__PURE__ */ new Date()
                });
              }, V.onmessage = function(z) {
                const ge = JSON.parse(z.data), { type: J, status: U, data: x } = Sn(
                  ge,
                  p[E]
                );
                if (J === "update" && U && !re)
                  D({
                    type: "status",
                    endpoint: P,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date(),
                    ...U
                  }), U.stage === "error" && V.close();
                else if (J === "hash") {
                  V.send(JSON.stringify({ fn_index: E, session_hash: S }));
                  return;
                } else
                  J === "data" ? V.send(JSON.stringify({ ...ue, session_hash: S })) : J === "complete" ? re = U : J === "log" ? D({
                    type: "log",
                    log: x.log,
                    level: x.level,
                    endpoint: P,
                    fn_index: E
                  }) : J === "generating" && D({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...U,
                    stage: U == null ? void 0 : U.stage,
                    queue: !0,
                    endpoint: P,
                    fn_index: E
                  });
                x && (D({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: h ? qt(
                    x.data,
                    X,
                    H.root,
                    H.root_url
                  ) : x.data,
                  endpoint: P,
                  fn_index: E
                }), re && (D({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...re,
                  stage: U == null ? void 0 : U.stage,
                  queue: !0,
                  endpoint: P,
                  fn_index: E
                }), V.close()));
              }, kr(H.version || "2.0.0", "3.6") < 0 && addEventListener(
                "open",
                () => V.send(JSON.stringify({ hash: S }))
              );
            } else if (He == "sse") {
              D({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: P,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              });
              var fe = new URLSearchParams({
                fn_index: E.toString(),
                session_hash: S
              }).toString();
              let G = new URL(
                `${H.root}/queue/join?${Oe ? Oe + "&" : ""}${fe}`
              );
              ae = t(G), ae.onmessage = async function(z) {
                const ge = JSON.parse(z.data), { type: J, status: U, data: x } = Sn(
                  ge,
                  p[E]
                );
                if (J === "update" && U && !re)
                  D({
                    type: "status",
                    endpoint: P,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date(),
                    ...U
                  }), U.stage === "error" && ae.close();
                else if (J === "data") {
                  pe = ge.event_id;
                  let [it, Ds] = await n(
                    `${H.root}/queue/data`,
                    {
                      ...ue,
                      session_hash: S,
                      event_id: pe
                    },
                    f
                  );
                  Ds !== 200 && (D({
                    type: "status",
                    stage: "error",
                    message: je,
                    queue: !0,
                    endpoint: P,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date()
                  }), ae.close());
                } else
                  J === "complete" ? re = U : J === "log" ? D({
                    type: "log",
                    log: x.log,
                    level: x.level,
                    endpoint: P,
                    fn_index: E
                  }) : J === "generating" && D({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...U,
                    stage: U == null ? void 0 : U.stage,
                    queue: !0,
                    endpoint: P,
                    fn_index: E
                  });
                x && (D({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: h ? qt(
                    x.data,
                    X,
                    H.root,
                    H.root_url
                  ) : x.data,
                  endpoint: P,
                  fn_index: E
                }), re && (D({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...re,
                  stage: U == null ? void 0 : U.stage,
                  queue: !0,
                  endpoint: P,
                  fn_index: E
                }), ae.close()));
              };
            } else
              He == "sse_v1" && (D({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: P,
                fn_index: E,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${H.root}/queue/join?${Oe}`,
                {
                  ...ue,
                  session_hash: S
                },
                f
              ).then(([G, z]) => {
                if (z === 503)
                  D({
                    type: "status",
                    stage: "error",
                    message: qi,
                    queue: !0,
                    endpoint: P,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date()
                  });
                else if (z !== 200)
                  D({
                    type: "status",
                    stage: "error",
                    message: je,
                    queue: !0,
                    endpoint: P,
                    fn_index: E,
                    time: /* @__PURE__ */ new Date()
                  });
                else {
                  pe = G.event_id;
                  let ge = async function(J) {
                    try {
                      const { type: U, status: x, data: it } = Sn(
                        J,
                        p[E]
                      );
                      if (U == "heartbeat")
                        return;
                      if (U === "update" && x && !re)
                        D({
                          type: "status",
                          endpoint: P,
                          fn_index: E,
                          time: /* @__PURE__ */ new Date(),
                          ...x
                        });
                      else if (U === "complete")
                        re = x;
                      else if (U == "unexpected_error")
                        console.error("Unexpected error", x == null ? void 0 : x.message), D({
                          type: "status",
                          stage: "error",
                          message: (x == null ? void 0 : x.message) || "An Unexpected Error Occurred!",
                          queue: !0,
                          endpoint: P,
                          fn_index: E,
                          time: /* @__PURE__ */ new Date()
                        });
                      else if (U === "log") {
                        D({
                          type: "log",
                          log: it.log,
                          level: it.level,
                          endpoint: P,
                          fn_index: E
                        });
                        return;
                      } else
                        U === "generating" && D({
                          type: "status",
                          time: /* @__PURE__ */ new Date(),
                          ...x,
                          stage: x == null ? void 0 : x.stage,
                          queue: !0,
                          endpoint: P,
                          fn_index: E
                        });
                      it && (D({
                        type: "data",
                        time: /* @__PURE__ */ new Date(),
                        data: h ? qt(
                          it.data,
                          X,
                          H.root,
                          H.root_url
                        ) : it.data,
                        endpoint: P,
                        fn_index: E
                      }), re && D({
                        type: "status",
                        time: /* @__PURE__ */ new Date(),
                        ...re,
                        stage: x == null ? void 0 : x.stage,
                        queue: !0,
                        endpoint: P,
                        fn_index: E
                      })), ((x == null ? void 0 : x.stage) === "complete" || (x == null ? void 0 : x.stage) === "error") && j[pe] && delete j[pe];
                    } catch (U) {
                      console.error("Unexpected client exception", U), D({
                        type: "status",
                        stage: "error",
                        message: "An Unexpected Error Occurred!",
                        queue: !0,
                        endpoint: P,
                        fn_index: E,
                        time: /* @__PURE__ */ new Date()
                      }), Le();
                    }
                  };
                  pe in T && (T[pe].forEach(
                    (J) => ge(J)
                  ), delete T[pe]), j[pe] = ge, B.add(pe), A || wt();
                }
              }));
          }
        );
        function D(W) {
          const G = Et[W.type] || [];
          G == null || G.forEach((z) => z(W));
        }
        function un(W, fe) {
          const G = Et, z = G[W] || [];
          return G[W] = z, z == null || z.push(fe), { on: un, off: Rt, cancel: fn, destroy: cn };
        }
        function Rt(W, fe) {
          const G = Et;
          let z = G[W] || [];
          return z = z == null ? void 0 : z.filter((ge) => ge !== fe), G[W] = z, { on: un, off: Rt, cancel: fn, destroy: cn };
        }
        async function fn() {
          const W = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          re = W, D({
            ...W,
            type: "status",
            endpoint: P,
            fn_index: E
          });
          let fe = {};
          He === "ws" ? (V && V.readyState === 0 ? V.addEventListener("open", () => {
            V.close();
          }) : V.close(), fe = { fn_index: E, session_hash: S }) : (ae.close(), fe = { event_id: pe });
          try {
            await e(`${H.root}/reset`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(fe)
            });
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function cn() {
          for (const W in Et)
            Et[W].forEach((fe) => {
              Rt(W, fe);
            });
        }
        return {
          on: un,
          off: Rt,
          cancel: fn,
          destroy: cn
        };
      }
      function wt() {
        A = !0;
        let m = new URLSearchParams({
          session_hash: S
        }).toString(), N = new URL(`${H.root}/queue/data?${m}`);
        w = t(N), w.onmessage = async function(g) {
          let M = JSON.parse(g.data);
          const E = M.event_id;
          if (!E)
            await Promise.all(
              Object.keys(j).map(
                (X) => j[X](M)
              )
            );
          else if (j[E]) {
            M.msg === "process_completed" && (B.delete(E), B.size === 0 && Le());
            let X = j[E];
            window.setTimeout(X, 0, M);
          } else
            T[E] || (T[E] = []), T[E].push(M);
        }, w.onerror = async function(g) {
          await Promise.all(
            Object.keys(j).map(
              (M) => j[M]({
                msg: "unexpected_error",
                message: je
              })
            )
          ), Le();
        };
      }
      function Le() {
        A = !1, w == null || w.close();
      }
      async function rt(m, N, g) {
        var M;
        const E = { "Content-Type": "application/json" };
        f && (E.Authorization = `Bearer ${f}`);
        let X, V = H.components.find(
          (P) => P.id === m
        );
        (M = V == null ? void 0 : V.props) != null && M.root_url ? X = V.props.root_url : X = H.root;
        const ae = await e(
          `${X}/component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: g,
              component_id: m,
              fn_name: N,
              session_hash: S
            }),
            headers: E
          }
        );
        if (!ae.ok)
          throw new Error(
            "Could not connect to component server: " + ae.statusText
          );
        return await ae.json();
      }
      async function Be(m) {
        if ($)
          return $;
        const N = { "Content-Type": "application/json" };
        f && (N.Authorization = `Bearer ${f}`);
        let g;
        if (kr(m.version || "2.0.0", "3.30") < 0 ? g = await e(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(m)
            }),
            headers: N
          }
        ) : g = await e(`${m.root}/info`, {
          headers: N
        }), !g.ok)
          throw new Error(je);
        let M = await g.json();
        return "api" in M && (M = M.api), M.named_endpoints["/predict"] && !M.unnamed_endpoints[0] && (M.unnamed_endpoints[0] = M.named_endpoints["/predict"]), qo(M, m, Z);
      }
    });
  }
  async function s(l, u, o, a) {
    const f = await Un(
      u,
      void 0,
      [],
      !0,
      o
    );
    return Promise.all(
      f.map(async ({ path: c, blob: _, type: h }) => {
        if (_) {
          const d = (await r(l, [_], a)).files[0];
          return { path: c, file_url: d, type: h, name: _ == null ? void 0 : _.name };
        }
        return { path: c, type: h };
      })
    ).then((c) => (c.forEach(({ path: _, file_url: h, type: d, name: b }) => {
      if (d === "Gallery")
        Ir(u, h, _);
      else if (h) {
        const y = new ft({ path: h, orig_name: b });
        Ir(u, y, _);
      }
    }), u));
  }
}
const { post_data: m0, upload_files: Go, client: p0, handle_blob: g0 } = Fo(
  fetch,
  (...e) => new EventSource(...e)
);
function qt(e, t, n, r) {
  return e.map((i, s) => {
    var l, u, o, a;
    return ((u = (l = t == null ? void 0 : t.returns) == null ? void 0 : l[s]) == null ? void 0 : u.component) === "File" ? Ce(i, n, r) : ((a = (o = t == null ? void 0 : t.returns) == null ? void 0 : o[s]) == null ? void 0 : a.component) === "Gallery" ? i.map((f) => Array.isArray(f) ? [Ce(f[0], n, r), f[1]] : [Ce(f, n, r), null]) : typeof i == "object" && i.path ? Ce(i, n, r) : i;
  });
}
function Pr(e, t, n, r) {
  switch (e.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (n === "JSONSerializable" || n === "StringSerializable")
    return "any";
  if (n === "ListStringSerializable")
    return "string[]";
  if (t === "Image")
    return r === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (e == null ? void 0 : e.type) === "array" ? r === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : r === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return r === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function Nr(e, t) {
  return t === "GallerySerializable" ? "array of [file, label] tuples" : t === "ListStringSerializable" ? "array of strings" : t === "FileSerializable" ? "array of files or single file" : e.description;
}
function qo(e, t, n) {
  const r = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const i in e) {
    const s = e[i];
    for (const l in s) {
      const u = t.dependencies[l] ? l : n[l.replace("/", "")], o = s[l];
      r[i][l] = {}, r[i][l].parameters = {}, r[i][l].returns = {}, r[i][l].type = t.dependencies[u].types, r[i][l].parameters = o.parameters.map(
        ({ label: a, component: f, type: c, serializer: _ }) => ({
          label: a,
          component: f,
          type: Pr(c, f, _, "parameter"),
          description: Nr(c, _)
        })
      ), r[i][l].returns = o.returns.map(
        ({ label: a, component: f, type: c, serializer: _ }) => ({
          label: a,
          component: f,
          type: Pr(c, f, _, "return"),
          description: Nr(c, _)
        })
      );
    }
  }
  return r;
}
async function jo(e, t) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${e}/jwt`, {
      headers: {
        Authorization: `Bearer ${t}`
      }
    })).json()).token || !1;
  } catch (n) {
    return console.error(n), !1;
  }
}
function Ir(e, t, n) {
  for (; n.length > 1; )
    e = e[n.shift()];
  e[n.shift()] = t;
}
async function Un(e, t = void 0, n = [], r = !1, i = void 0) {
  if (Array.isArray(e)) {
    let s = [];
    return await Promise.all(
      e.map(async (l, u) => {
        var o;
        let a = n.slice();
        a.push(u);
        const f = await Un(
          e[u],
          r ? ((o = i == null ? void 0 : i.parameters[u]) == null ? void 0 : o.component) || void 0 : t,
          a,
          !1,
          i
        );
        s = s.concat(f);
      })
    ), s;
  } else {
    if (globalThis.Buffer && e instanceof globalThis.Buffer)
      return [
        {
          path: n,
          blob: t === "Image" ? !1 : new ji([e]),
          type: t
        }
      ];
    if (typeof e == "object") {
      let s = [];
      for (let l in e)
        if (e.hasOwnProperty(l)) {
          let u = n.slice();
          u.push(l), s = s.concat(
            await Un(
              e[l],
              void 0,
              u,
              !1,
              i
            )
          );
        }
      return s;
    }
  }
  return [];
}
function Vo(e, t) {
  var n, r, i, s;
  return !(((r = (n = t == null ? void 0 : t.dependencies) == null ? void 0 : n[e]) == null ? void 0 : r.queue) === null ? t.enable_queue : (s = (i = t == null ? void 0 : t.dependencies) == null ? void 0 : i[e]) != null && s.queue) || !1;
}
async function Lr(e, t, n) {
  const r = {};
  if (n && (r.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const i = window.gradio_config.root, s = window.gradio_config;
    return s.root = Fi(t, s.root, !1), { ...s, path: i };
  } else if (t) {
    let i = await e(`${t}/config`, {
      headers: r
    });
    if (i.status === 200) {
      const s = await i.json();
      return s.path = s.path ?? "", s.root = t, s;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function xn(e, t, n) {
  let r = t === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${e}` : `https://huggingface.co/api/spaces/${e}`, i, s;
  try {
    if (i = await fetch(r), s = i.status, s !== 200)
      throw new Error();
    i = await i.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!i || s !== 200)
    return;
  const {
    runtime: { stage: l },
    id: u
  } = i;
  switch (l) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: l
      }), setTimeout(() => {
        xn(e, t, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: l,
        discussions_enabled: await Cr(u)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: l
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: l
      }), setTimeout(() => {
        xn(e, t, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: l,
        discussions_enabled: await Cr(u)
      });
      break;
  }
}
function Sn(e, t) {
  switch (e.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: qi,
          stage: "error",
          code: e.code,
          success: e.success
        }
      };
    case "heartbeat":
      return {
        type: "heartbeat"
      };
    case "unexpected_error":
      return {
        type: "unexpected_error",
        status: {
          queue: !0,
          message: e.message,
          stage: "error",
          success: !1
        }
      };
    case "estimation":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: t || "pending",
          code: e.code,
          size: e.queue_size,
          position: e.rank,
          eta: e.rank_eta,
          success: e.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          progress_data: e.progress_data,
          success: e.success
        }
      };
    case "log":
      return { type: "log", data: e };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: e.success ? null : e.output.error,
          stage: e.success ? "generating" : "error",
          code: e.code,
          progress_data: e.progress_data,
          eta: e.average_duration
        },
        data: e.success ? e.output : null
      };
    case "process_completed":
      return "error" in e.output ? {
        type: "update",
        status: {
          queue: !0,
          message: e.output.error,
          stage: "error",
          code: e.code,
          success: e.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: e.success ? void 0 : e.output.error,
          stage: e.success ? "complete" : "error",
          code: e.code,
          progress_data: e.progress_data
        },
        data: e.success ? e.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          size: e.rank,
          position: 0,
          success: e.success,
          eta: e.eta
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
const {
  SvelteComponent: zo,
  attr: Or,
  check_outros: Xo,
  create_component: lr,
  destroy_component: or,
  detach: Fn,
  element: Wo,
  empty: Zo,
  group_outros: Jo,
  init: Qo,
  insert: Gn,
  mount_component: ar,
  noop: Mr,
  safe_not_equal: Yo,
  space: Ko,
  transition_in: Ht,
  transition_out: kt
} = window.__gradio__svelte__internal;
function $o(e) {
  let t;
  return {
    c() {
      t = Wo("div"), Or(t, "id", "fasta_content"), Or(t, "class", "svelte-1r6bt2i");
    },
    m(n, r) {
      Gn(n, t, r), t.innerHTML = /*fasta_text*/
      e[4];
    },
    p(n, r) {
      r & /*fasta_text*/
      16 && (t.innerHTML = /*fasta_text*/
      n[4]);
    },
    i: Mr,
    o: Mr,
    d(n) {
      n && Fn(t);
    }
  };
}
function ea(e) {
  let t, n;
  return t = new zl({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [ta] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      lr(t.$$.fragment);
    },
    m(r, i) {
      ar(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$$scope*/
      256 && (s.$$scope = { dirty: i, ctx: r }), t.$set(s);
    },
    i(r) {
      n || (Ht(t.$$.fragment, r), n = !0);
    },
    o(r) {
      kt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      or(t, r);
    }
  };
}
function ta(e) {
  let t, n;
  return t = new sr({}), {
    c() {
      lr(t.$$.fragment);
    },
    m(r, i) {
      ar(t, r, i), n = !0;
    },
    i(r) {
      n || (Ht(t.$$.fragment, r), n = !0);
    },
    o(r) {
      kt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      or(t, r);
    }
  };
}
function na(e) {
  let t, n, r, i, s, l;
  t = new Oi({
    props: {
      show_label: (
        /*show_label*/
        e[2]
      ),
      Icon: sr,
      label: (
        /*label*/
        e[1] || /*i18n*/
        e[3]("image.image")
      )
    }
  });
  const u = [ea, $o], o = [];
  function a(f, c) {
    return (
      /*value*/
      f[0] === null || !/*value*/
      f[0].url ? 0 : 1
    );
  }
  return r = a(e), i = o[r] = u[r](e), {
    c() {
      lr(t.$$.fragment), n = Ko(), i.c(), s = Zo();
    },
    m(f, c) {
      ar(t, f, c), Gn(f, n, c), o[r].m(f, c), Gn(f, s, c), l = !0;
    },
    p(f, [c]) {
      const _ = {};
      c & /*show_label*/
      4 && (_.show_label = /*show_label*/
      f[2]), c & /*label, i18n*/
      10 && (_.label = /*label*/
      f[1] || /*i18n*/
      f[3]("image.image")), t.$set(_);
      let h = r;
      r = a(f), r === h ? o[r].p(f, c) : (Jo(), kt(o[h], 1, 1, () => {
        o[h] = null;
      }), Xo(), i = o[r], i ? i.p(f, c) : (i = o[r] = u[r](f), i.c()), Ht(i, 1), i.m(s.parentNode, s));
    },
    i(f) {
      l || (Ht(t.$$.fragment, f), Ht(i), l = !0);
    },
    o(f) {
      kt(t.$$.fragment, f), kt(i), l = !1;
    },
    d(f) {
      f && (Fn(n), Fn(s)), or(t, f), o[r].d(f);
    }
  };
}
function ra(e, t, n) {
  let { value: r } = t, { label: i = void 0 } = t, { show_label: s } = t, { show_download_button: l = !0 } = t, { selectable: u = !1 } = t, { i18n: o } = t, a = "";
  async function f(c) {
    const _ = await fetch(c);
    n(4, a = await _.text()), n(4, a = a.replaceAll("G", "<span style='color: green'>G</span>")), n(4, a = a.replaceAll("A", "<span style='color: red'>A</span>")), n(4, a = a.replaceAll("T", "<span style='color: blue'>T</span>")), n(4, a = a.replaceAll("C", "<span style='color: orange'>C</span>")), n(4, a = a.replaceAll(/^(>.*)$/gm, "<span style='color: gray !important'>$1</span>"));
  }
  return e.$$set = (c) => {
    "value" in c && n(0, r = c.value), "label" in c && n(1, i = c.label), "show_label" in c && n(2, s = c.show_label), "show_download_button" in c && n(5, l = c.show_download_button), "selectable" in c && n(6, u = c.selectable), "i18n" in c && n(3, o = c.i18n);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && r && r.url && f(r.url);
  }, [r, i, s, o, a, l, u];
}
class ia extends zo {
  constructor(t) {
    super(), Qo(this, t, ra, na, Yo, {
      value: 0,
      label: 1,
      show_label: 2,
      show_download_button: 5,
      selectable: 6,
      i18n: 3
    });
  }
}
function Ye() {
}
function sa(e) {
  return e();
}
function la(e) {
  e.forEach(sa);
}
function oa(e) {
  return typeof e == "function";
}
function aa(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ua(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return Ye;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Vi = typeof window < "u";
let Dr = Vi ? () => window.performance.now() : () => Date.now(), zi = Vi ? (e) => requestAnimationFrame(e) : Ye;
const ct = /* @__PURE__ */ new Set();
function Xi(e) {
  ct.forEach((t) => {
    t.c(e) || (ct.delete(t), t.f());
  }), ct.size !== 0 && zi(Xi);
}
function fa(e) {
  let t;
  return ct.size === 0 && zi(Xi), {
    promise: new Promise((n) => {
      ct.add(t = { c: e, f: n });
    }),
    abort() {
      ct.delete(t);
    }
  };
}
const lt = [];
function ca(e, t) {
  return {
    subscribe: Ot(e, t).subscribe
  };
}
function Ot(e, t = Ye) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (aa(e, u) && (e = u, n)) {
      const o = !lt.length;
      for (const a of r)
        a[1](), lt.push(a, e);
      if (o) {
        for (let a = 0; a < lt.length; a += 2)
          lt[a][0](lt[a + 1]);
        lt.length = 0;
      }
    }
  }
  function s(u) {
    i(u(e));
  }
  function l(u, o = Ye) {
    const a = [u, o];
    return r.add(a), r.size === 1 && (n = t(i, s) || Ye), u(e), () => {
      r.delete(a), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: l };
}
function bt(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return ca(n, (l, u) => {
    let o = !1;
    const a = [];
    let f = 0, c = Ye;
    const _ = () => {
      if (f)
        return;
      c();
      const d = t(r ? a[0] : a, l, u);
      s ? l(d) : c = oa(d) ? d : Ye;
    }, h = i.map(
      (d, b) => ua(
        d,
        (y) => {
          a[b] = y, f &= ~(1 << b), o && _();
        },
        () => {
          f |= 1 << b;
        }
      )
    );
    return o = !0, _(), function() {
      la(h), c(), o = !1;
    };
  });
}
function Rr(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function qn(e, t, n, r) {
  if (typeof n == "number" || Rr(n)) {
    const i = r - n, s = (n - t) / (e.dt || 1 / 60), l = e.opts.stiffness * i, u = e.opts.damping * s, o = (l - u) * e.inv_mass, a = (s + o) * e.dt;
    return Math.abs(a) < e.opts.precision && Math.abs(i) < e.opts.precision ? r : (e.settled = !1, Rr(n) ? new Date(n.getTime() + a) : n + a);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, s) => qn(e, t[s], n[s], r[s])
      );
    if (typeof n == "object") {
      const i = {};
      for (const s in n)
        i[s] = qn(e, t[s], n[s], r[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Ur(e, t = {}) {
  const n = Ot(e), { stiffness: r = 0.15, damping: i = 0.8, precision: s = 0.01 } = t;
  let l, u, o, a = e, f = e, c = 1, _ = 0, h = !1;
  function d(y, v = {}) {
    f = y;
    const S = o = {};
    return e == null || v.hard || b.stiffness >= 1 && b.damping >= 1 ? (h = !0, l = Dr(), a = y, n.set(e = f), Promise.resolve()) : (v.soft && (_ = 1 / ((v.soft === !0 ? 0.5 : +v.soft) * 60), c = 0), u || (l = Dr(), h = !1, u = fa((p) => {
      if (h)
        return h = !1, u = null, !1;
      c = Math.min(c + _, 1);
      const A = {
        inv_mass: c,
        opts: b,
        settled: !0,
        dt: (p - l) * 60 / 1e3
      }, T = qn(A, a, e, f);
      return l = p, a = e, n.set(e = T), A.settled && (u = null), !A.settled;
    })), new Promise((p) => {
      u.promise.then(() => {
        S === o && p();
      });
    }));
  }
  const b = {
    set: d,
    update: (y, v) => d(y(f, e), v),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: s
  };
  return b;
}
function ha(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _a = function(t) {
  return da(t) && !ma(t);
};
function da(e) {
  return !!e && typeof e == "object";
}
function ma(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || ba(e);
}
var pa = typeof Symbol == "function" && Symbol.for, ga = pa ? Symbol.for("react.element") : 60103;
function ba(e) {
  return e.$$typeof === ga;
}
function va(e) {
  return Array.isArray(e) ? [] : {};
}
function Ct(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ht(va(e), e, t) : e;
}
function ya(e, t, n) {
  return e.concat(t).map(function(r) {
    return Ct(r, n);
  });
}
function wa(e, t) {
  if (!t.customMerge)
    return ht;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : ht;
}
function Ea(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function xr(e) {
  return Object.keys(e).concat(Ea(e));
}
function Wi(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Sa(e, t) {
  return Wi(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Ta(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && xr(e).forEach(function(i) {
    r[i] = Ct(e[i], n);
  }), xr(t).forEach(function(i) {
    Sa(e, i) || (Wi(e, i) && n.isMergeableObject(t[i]) ? r[i] = wa(i, n)(e[i], t[i], n) : r[i] = Ct(t[i], n));
  }), r;
}
function ht(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ya, n.isMergeableObject = n.isMergeableObject || _a, n.cloneUnlessOtherwiseSpecified = Ct;
  var r = Array.isArray(t), i = Array.isArray(e), s = r === i;
  return s ? r ? n.arrayMerge(e, t, n) : Ta(e, t, n) : Ct(t, n);
}
ht.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return ht(r, i, n);
  }, {});
};
var Aa = ht, Ba = Aa;
const Ha = /* @__PURE__ */ ha(Ba);
var jn = function(e, t) {
  return jn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, jn(e, t);
};
function nn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  jn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var R = function() {
  return R = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, R.apply(this, arguments);
};
function Tn(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var I;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(I || (I = {}));
var F;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(F || (F = {}));
var _t;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(_t || (_t = {}));
function Fr(e) {
  return e.type === F.literal;
}
function ka(e) {
  return e.type === F.argument;
}
function Zi(e) {
  return e.type === F.number;
}
function Ji(e) {
  return e.type === F.date;
}
function Qi(e) {
  return e.type === F.time;
}
function Yi(e) {
  return e.type === F.select;
}
function Ki(e) {
  return e.type === F.plural;
}
function Ca(e) {
  return e.type === F.pound;
}
function $i(e) {
  return e.type === F.tag;
}
function es(e) {
  return !!(e && typeof e == "object" && e.type === _t.number);
}
function Vn(e) {
  return !!(e && typeof e == "object" && e.type === _t.dateTime);
}
var ts = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Pa = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Na(e) {
  var t = {};
  return e.replace(Pa, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Ia = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function La(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Ia).filter(function(_) {
    return _.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var s = i[r], l = s.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = l[0], o = l.slice(1), a = 0, f = o; a < f.length; a++) {
      var c = f[a];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: o });
  }
  return n;
}
function Oa(e) {
  return e.replace(/^(.*?)-/, "");
}
var Gr = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ns = /^(@+)?(\+|#+)?[rs]?$/g, Ma = /(\*)(0+)|(#+)(0+)|(0+)/g, rs = /^(0+)$/;
function qr(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ns, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function is(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Da(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !rs.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function jr(e) {
  var t = {}, n = is(e);
  return n || t;
}
function Ra(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Oa(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = R(R(R({}, t), { notation: "scientific" }), i.options.reduce(function(o, a) {
          return R(R({}, o), jr(a));
        }, {}));
        continue;
      case "engineering":
        t = R(R(R({}, t), { notation: "engineering" }), i.options.reduce(function(o, a) {
          return R(R({}, o), jr(a));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Ma, function(o, a, f, c, _, h) {
          if (a)
            t.minimumIntegerDigits = f.length;
          else {
            if (c && _)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (rs.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Gr.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Gr, function(o, a, f, c, _, h) {
        return f === "*" ? t.minimumFractionDigits = a.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : _ && h ? (t.minimumFractionDigits = _.length, t.maximumFractionDigits = _.length + h.length) : (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = R(R({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = R(R({}, t), qr(s)));
      continue;
    }
    if (ns.test(i.stem)) {
      t = R(R({}, t), qr(i.stem));
      continue;
    }
    var l = is(i.stem);
    l && (t = R(R({}, t), l));
    var u = Da(i.stem);
    u && (t = R(R({}, t), u));
  }
  return t;
}
var jt = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function Ua(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var s = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        s++, r++;
      var l = 1 + (s & 1), u = s < 2 ? 1 : 3 + (s >> 1), o = "a", a = xa(t);
      for ((a == "H" || a == "k") && (u = 0); u-- > 0; )
        n += o;
      for (; l-- > 0; )
        n = a + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function xa(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = jt[r || ""] || jt[n || ""] || jt["".concat(n, "-001")] || jt["001"];
  return i[0];
}
var An, Fa = new RegExp("^".concat(ts.source, "*")), Ga = new RegExp("".concat(ts.source, "*$"));
function L(e, t) {
  return { start: e, end: t };
}
var qa = !!String.prototype.startsWith, ja = !!String.fromCodePoint, Va = !!Object.fromEntries, za = !!String.prototype.codePointAt, Xa = !!String.prototype.trimStart, Wa = !!String.prototype.trimEnd, Za = !!Number.isSafeInteger, Ja = Za ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, zn = !0;
try {
  var Qa = ls("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  zn = ((An = Qa.exec("a")) === null || An === void 0 ? void 0 : An[0]) === "a";
} catch {
  zn = !1;
}
var Vr = qa ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Xn = ja ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, s = 0, l; i > s; ) {
      if (l = t[s++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), zr = (
  // native
  Va ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var s = i[r], l = s[0], u = s[1];
        n[l] = u;
      }
      return n;
    }
  )
), ss = za ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), s;
      return i < 55296 || i > 56319 || n + 1 === r || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? i : (i - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Ya = Xa ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Fa, "");
  }
), Ka = Wa ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ga, "");
  }
);
function ls(e, t) {
  return new RegExp(e, t);
}
var Wn;
if (zn) {
  var Xr = ls("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Wn = function(t, n) {
    var r;
    Xr.lastIndex = n;
    var i = Xr.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Wn = function(t, n) {
    for (var r = []; ; ) {
      var i = ss(t, n);
      if (i === void 0 || os(i) || nu(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Xn.apply(void 0, r);
  };
var $a = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var l = this.parseArgument(t, r);
          if (l.err)
            return l;
          i.push(l.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: F.pound,
              location: L(u, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(I.UNMATCHED_CLOSING_TAG, L(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Zn(this.peek() || 0)) {
            var l = this.parseTag(t, n);
            if (l.err)
              return l;
            i.push(l.val);
          } else {
            var l = this.parseLiteral(t, n);
            if (l.err)
              return l;
            i.push(l.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: F.literal,
            value: "<".concat(i, "/>"),
            location: L(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var l = s.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Zn(this.char()))
            return this.error(I.INVALID_TAG, L(u, this.clonePosition()));
          var o = this.clonePosition(), a = this.parseTagName();
          return i !== a ? this.error(I.UNMATCHED_CLOSING_TAG, L(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: F.tag,
              value: i,
              children: l,
              location: L(r, this.clonePosition())
            },
            err: null
          } : this.error(I.INVALID_TAG, L(u, this.clonePosition())));
        } else
          return this.error(I.UNCLOSED_TAG, L(r, this.clonePosition()));
      } else
        return this.error(I.INVALID_TAG, L(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && tu(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          i += s;
          continue;
        }
        var l = this.tryParseUnquoted(t, n);
        if (l) {
          i += l;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var o = L(r, this.clonePosition());
      return {
        val: { type: F.literal, value: i, location: o },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !eu(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Xn.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Xn(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(I.EMPTY_ARGUMENT, L(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(I.MALFORMED_ARGUMENT, L(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: F.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: L(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(I.MALFORMED_ARGUMENT, L(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Wn(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var s = this.clonePosition(), l = L(t, s);
      return { value: r, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var s, l = this.clonePosition(), u = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (u) {
        case "":
          return this.error(I.EXPECT_ARGUMENT_TYPE, L(l, o));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var a = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var _ = Ka(c.val);
            if (_.length === 0)
              return this.error(I.EXPECT_ARGUMENT_STYLE, L(this.clonePosition(), this.clonePosition()));
            var h = L(f, this.clonePosition());
            a = { style: _, styleLocation: h };
          }
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var b = L(i, this.clonePosition());
          if (a && Vr(a == null ? void 0 : a.style, "::", 0)) {
            var y = Ya(a.style.slice(2));
            if (u === "number") {
              var c = this.parseNumberSkeletonFromString(y, a.styleLocation);
              return c.err ? c : {
                val: { type: F.number, value: r, location: b, style: c.val },
                err: null
              };
            } else {
              if (y.length === 0)
                return this.error(I.EXPECT_DATE_TIME_SKELETON, b);
              var v = y;
              this.locale && (v = Ua(y, this.locale));
              var _ = {
                type: _t.dateTime,
                pattern: v,
                location: a.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Na(v) : {}
              }, S = u === "date" ? F.date : F.time;
              return {
                val: { type: S, value: r, location: b, style: _ },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? F.number : u === "date" ? F.date : F.time,
              value: r,
              location: b,
              style: (s = a == null ? void 0 : a.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(I.EXPECT_SELECT_ARGUMENT_OPTIONS, L(p, R({}, p)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), T = 0;
          if (u !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(I.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, L(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(I.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, I.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), T = c.val;
          }
          var w = this.tryParsePluralOrSelectOptions(t, u, n, A);
          if (w.err)
            return w;
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var j = L(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: F.select,
              value: r,
              options: zr(w.val),
              location: j
            },
            err: null
          } : {
            val: {
              type: F.plural,
              value: r,
              options: zr(w.val),
              offset: T,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: j
            },
            err: null
          };
        }
        default:
          return this.error(I.INVALID_ARGUMENT_TYPE, L(l, o));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(I.EXPECT_ARGUMENT_CLOSING_BRACE, L(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(I.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, L(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = La(t);
      } catch {
        return this.error(I.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: _t.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Ra(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var s, l = !1, u = [], o = /* @__PURE__ */ new Set(), a = i.value, f = i.location; ; ) {
        if (a.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var _ = this.tryParseDecimalInteger(I.EXPECT_PLURAL_ARGUMENT_SELECTOR, I.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (_.err)
              return _;
            f = L(c, this.clonePosition()), a = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (o.has(a))
          return this.error(n === "select" ? I.DUPLICATE_SELECT_ARGUMENT_SELECTOR : I.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        a === "other" && (l = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? I.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : I.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, L(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(t + 1, n, r);
        if (d.err)
          return d;
        var b = this.tryParseArgumentClose(h);
        if (b.err)
          return b;
        u.push([
          a,
          {
            value: d.val,
            location: L(h, this.clonePosition())
          }
        ]), o.add(a), this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = s.value, f = s.location;
      }
      return u.length === 0 ? this.error(n === "select" ? I.EXPECT_SELECT_ARGUMENT_SELECTOR : I.EXPECT_PLURAL_ARGUMENT_SELECTOR, L(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(I.MISSING_OTHER_CLAUSE, L(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var s = !1, l = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          s = !0, l = l * 10 + (u - 48), this.bump();
        else
          break;
      }
      var o = L(i, this.clonePosition());
      return s ? (l *= r, Ja(l) ? { val: l, err: null } : this.error(n, o)) : this.error(t, o);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = ss(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (Vr(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && os(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Zn(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function eu(e) {
  return Zn(e) || e === 47;
}
function tu(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function os(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function nu(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Jn(e) {
  e.forEach(function(t) {
    if (delete t.location, Yi(t) || Ki(t))
      for (var n in t.options)
        delete t.options[n].location, Jn(t.options[n].value);
    else
      Zi(t) && es(t.style) || (Ji(t) || Qi(t)) && Vn(t.style) ? delete t.style.location : $i(t) && Jn(t.children);
  });
}
function ru(e, t) {
  t === void 0 && (t = {}), t = R({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new $a(e, t).parse();
  if (n.err) {
    var r = SyntaxError(I[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Jn(n.val), n.val;
}
function Bn(e, t) {
  var n = t && t.cache ? t.cache : uu, r = t && t.serializer ? t.serializer : au, i = t && t.strategy ? t.strategy : su;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function iu(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function as(e, t, n, r) {
  var i = iu(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function us(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function ur(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function su(e, t) {
  var n = e.length === 1 ? as : us;
  return ur(e, this, n, t.cache.create(), t.serializer);
}
function lu(e, t) {
  return ur(e, this, us, t.cache.create(), t.serializer);
}
function ou(e, t) {
  return ur(e, this, as, t.cache.create(), t.serializer);
}
var au = function() {
  return JSON.stringify(arguments);
};
function fr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
fr.prototype.get = function(e) {
  return this.cache[e];
};
fr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var uu = {
  create: function() {
    return new fr();
  }
}, Hn = {
  variadic: lu,
  monadic: ou
}, dt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(dt || (dt = {}));
var rn = (
  /** @class */
  function(e) {
    nn(t, e);
    function t(n, r, i) {
      var s = e.call(this, n) || this;
      return s.code = r, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Wr = (
  /** @class */
  function(e) {
    nn(t, e);
    function t(n, r, i, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), dt.INVALID_VALUE, s) || this;
    }
    return t;
  }(rn)
), fu = (
  /** @class */
  function(e) {
    nn(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), dt.INVALID_VALUE, i) || this;
    }
    return t;
  }(rn)
), cu = (
  /** @class */
  function(e) {
    nn(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), dt.MISSING_VALUE, r) || this;
    }
    return t;
  }(rn)
), ee;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(ee || (ee = {}));
function hu(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== ee.literal || n.type !== ee.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function _u(e) {
  return typeof e == "function";
}
function Zt(e, t, n, r, i, s, l) {
  if (e.length === 1 && Fr(e[0]))
    return [
      {
        type: ee.literal,
        value: e[0].value
      }
    ];
  for (var u = [], o = 0, a = e; o < a.length; o++) {
    var f = a[o];
    if (Fr(f)) {
      u.push({
        type: ee.literal,
        value: f.value
      });
      continue;
    }
    if (Ca(f)) {
      typeof s == "number" && u.push({
        type: ee.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var c = f.value;
    if (!(i && c in i))
      throw new cu(c, l);
    var _ = i[c];
    if (ka(f)) {
      (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), u.push({
        type: typeof _ == "string" ? ee.literal : ee.object,
        value: _
      });
      continue;
    }
    if (Ji(f)) {
      var h = typeof f.style == "string" ? r.date[f.style] : Vn(f.style) ? f.style.parsedOptions : void 0;
      u.push({
        type: ee.literal,
        value: n.getDateTimeFormat(t, h).format(_)
      });
      continue;
    }
    if (Qi(f)) {
      var h = typeof f.style == "string" ? r.time[f.style] : Vn(f.style) ? f.style.parsedOptions : r.time.medium;
      u.push({
        type: ee.literal,
        value: n.getDateTimeFormat(t, h).format(_)
      });
      continue;
    }
    if (Zi(f)) {
      var h = typeof f.style == "string" ? r.number[f.style] : es(f.style) ? f.style.parsedOptions : void 0;
      h && h.scale && (_ = _ * (h.scale || 1)), u.push({
        type: ee.literal,
        value: n.getNumberFormat(t, h).format(_)
      });
      continue;
    }
    if ($i(f)) {
      var d = f.children, b = f.value, y = i[b];
      if (!_u(y))
        throw new fu(b, "function", l);
      var v = Zt(d, t, n, r, i, s), S = y(v.map(function(T) {
        return T.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(T) {
        return {
          type: typeof T == "string" ? ee.literal : ee.object,
          value: T
        };
      }));
    }
    if (Yi(f)) {
      var p = f.options[_] || f.options.other;
      if (!p)
        throw new Wr(f.value, _, Object.keys(f.options), l);
      u.push.apply(u, Zt(p.value, t, n, r, i));
      continue;
    }
    if (Ki(f)) {
      var p = f.options["=".concat(_)];
      if (!p) {
        if (!Intl.PluralRules)
          throw new rn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, dt.MISSING_INTL_API, l);
        var A = n.getPluralRules(t, { type: f.pluralType }).select(_ - (f.offset || 0));
        p = f.options[A] || f.options.other;
      }
      if (!p)
        throw new Wr(f.value, _, Object.keys(f.options), l);
      u.push.apply(u, Zt(p.value, t, n, r, i, _ - (f.offset || 0)));
      continue;
    }
  }
  return hu(u);
}
function du(e, t) {
  return t ? R(R(R({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = R(R({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function mu(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = du(e[r], t[r]), n;
  }, R({}, e)) : e;
}
function kn(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function pu(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Bn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Tn([void 0], n, !1)))();
    }, {
      cache: kn(e.number),
      strategy: Hn.variadic
    }),
    getDateTimeFormat: Bn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Tn([void 0], n, !1)))();
    }, {
      cache: kn(e.dateTime),
      strategy: Hn.variadic
    }),
    getPluralRules: Bn(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Tn([void 0], n, !1)))();
    }, {
      cache: kn(e.pluralRules),
      strategy: Hn.variadic
    })
  };
}
var gu = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      var s = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var u = s.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var o = u.reduce(function(a, f) {
          return !a.length || f.type !== ee.literal || typeof a[a.length - 1] != "string" ? a.push(f.value) : a[a.length - 1] += f.value, a;
        }, []);
        return o.length <= 1 ? o[0] || "" : o;
      }, this.formatToParts = function(l) {
        return Zt(s.ast, s.locales, s.formatters, s.formats, l, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = mu(e.formats, r), this.formatters = i && i.formatters || pu(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = ru, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function bu(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let r = e;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const s = n.slice(i, n.length).join(".");
        if (s in r) {
          r = r[s];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Ue = {}, vu = (e, t, n) => n && (t in Ue || (Ue[t] = {}), e in Ue[t] || (Ue[t][e] = n), n), fs = (e, t) => {
  if (t == null)
    return;
  if (t in Ue && e in Ue[t])
    return Ue[t][e];
  const n = sn(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], s = wu(i, e);
    if (s)
      return vu(e, t, s);
  }
};
let cr;
const Mt = Ot({});
function yu(e) {
  return cr[e] || null;
}
function cs(e) {
  return e in cr;
}
function wu(e, t) {
  if (!cs(e))
    return null;
  const n = yu(e);
  return bu(n, t);
}
function Eu(e) {
  if (e == null)
    return;
  const t = sn(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (cs(r))
      return r;
  }
}
function Su(e, ...t) {
  delete Ue[e], Mt.update((n) => (n[e] = Ha.all([n[e] || {}, ...t]), n));
}
bt(
  [Mt],
  ([e]) => Object.keys(e)
);
Mt.subscribe((e) => cr = e);
const Jt = {};
function Tu(e, t) {
  Jt[e].delete(t), Jt[e].size === 0 && delete Jt[e];
}
function hs(e) {
  return Jt[e];
}
function Au(e) {
  return sn(e).map((t) => {
    const n = hs(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Qn(e) {
  return e == null ? !1 : sn(e).some(
    (t) => {
      var n;
      return (n = hs(t)) == null ? void 0 : n.size;
    }
  );
}
function Bu(e, t) {
  return Promise.all(
    t.map((r) => (Tu(e, r), r().then((i) => i.default || i)))
  ).then((r) => Su(e, ...r));
}
const St = {};
function _s(e) {
  if (!Qn(e))
    return e in St ? St[e] : Promise.resolve();
  const t = Au(e);
  return St[e] = Promise.all(
    t.map(
      ([n, r]) => Bu(n, r)
    )
  ).then(() => {
    if (Qn(e))
      return _s(e);
    delete St[e];
  }), St[e];
}
const Hu = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, ku = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Hu,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Cu = ku;
function mt() {
  return Cu;
}
const Cn = Ot(!1);
var Pu = Object.defineProperty, Nu = Object.defineProperties, Iu = Object.getOwnPropertyDescriptors, Zr = Object.getOwnPropertySymbols, Lu = Object.prototype.hasOwnProperty, Ou = Object.prototype.propertyIsEnumerable, Jr = (e, t, n) => t in e ? Pu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mu = (e, t) => {
  for (var n in t || (t = {}))
    Lu.call(t, n) && Jr(e, n, t[n]);
  if (Zr)
    for (var n of Zr(t))
      Ou.call(t, n) && Jr(e, n, t[n]);
  return e;
}, Du = (e, t) => Nu(e, Iu(t));
let Yn;
const Kt = Ot(null);
function Qr(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function sn(e, t = mt().fallbackLocale) {
  const n = Qr(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Qr(t)])] : n;
}
function nt() {
  return Yn ?? void 0;
}
Kt.subscribe((e) => {
  Yn = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Ru = (e) => {
  if (e && Eu(e) && Qn(e)) {
    const { loadingDelay: t } = mt();
    let n;
    return typeof window < "u" && nt() != null && t ? n = window.setTimeout(
      () => Cn.set(!0),
      t
    ) : Cn.set(!0), _s(e).then(() => {
      Kt.set(e);
    }).finally(() => {
      clearTimeout(n), Cn.set(!1);
    });
  }
  return Kt.set(e);
}, Dt = Du(Mu({}, Kt), {
  set: Ru
}), ln = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Uu = Object.defineProperty, $t = Object.getOwnPropertySymbols, ds = Object.prototype.hasOwnProperty, ms = Object.prototype.propertyIsEnumerable, Yr = (e, t, n) => t in e ? Uu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hr = (e, t) => {
  for (var n in t || (t = {}))
    ds.call(t, n) && Yr(e, n, t[n]);
  if ($t)
    for (var n of $t(t))
      ms.call(t, n) && Yr(e, n, t[n]);
  return e;
}, vt = (e, t) => {
  var n = {};
  for (var r in e)
    ds.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $t)
    for (var r of $t(e))
      t.indexOf(r) < 0 && ms.call(e, r) && (n[r] = e[r]);
  return n;
};
const Pt = (e, t) => {
  const { formats: n } = mt();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, xu = ln(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = vt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Pt("number", r)), new Intl.NumberFormat(n, i);
  }
), Fu = ln(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = vt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Pt("date", r) : Object.keys(i).length === 0 && (i = Pt("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Gu = ln(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = vt(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Pt("time", r) : Object.keys(i).length === 0 && (i = Pt("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), qu = (e = {}) => {
  var t = e, {
    locale: n = nt()
  } = t, r = vt(t, [
    "locale"
  ]);
  return xu(hr({ locale: n }, r));
}, ju = (e = {}) => {
  var t = e, {
    locale: n = nt()
  } = t, r = vt(t, [
    "locale"
  ]);
  return Fu(hr({ locale: n }, r));
}, Vu = (e = {}) => {
  var t = e, {
    locale: n = nt()
  } = t, r = vt(t, [
    "locale"
  ]);
  return Gu(hr({ locale: n }, r));
}, zu = ln(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = nt()) => new gu(e, t, mt().formats, {
    ignoreTag: mt().ignoreTag
  })
), Xu = (e, t = {}) => {
  var n, r, i, s;
  let l = t;
  typeof e == "object" && (l = e, e = l.id);
  const {
    values: u,
    locale: o = nt(),
    default: a
  } = l;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = fs(e, o);
  if (!f)
    f = (s = (i = (r = (n = mt()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: o, id: e, defaultValue: a })) != null ? i : a) != null ? s : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!u)
    return f;
  let c = f;
  try {
    c = zu(f, o).format(u);
  } catch (_) {
    _ instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      _.message
    );
  }
  return c;
}, Wu = (e, t) => Vu(t).format(e), Zu = (e, t) => ju(t).format(e), Ju = (e, t) => qu(t).format(e), Qu = (e, t = nt()) => fs(e, t);
bt([Dt, Mt], () => Xu);
bt([Dt], () => Wu);
bt([Dt], () => Zu);
bt([Dt], () => Ju);
bt([Dt, Mt], () => Qu);
const {
  SvelteComponent: Yu,
  append: ne,
  attr: We,
  detach: ps,
  element: Ze,
  init: Ku,
  insert: gs,
  noop: Kr,
  safe_not_equal: $u,
  set_data: en,
  set_style: Pn,
  space: Kn,
  text: at,
  toggle_class: $r
} = window.__gradio__svelte__internal, { onMount: ef, createEventDispatcher: tf, getContext: nf } = window.__gradio__svelte__internal;
function ei(e) {
  let t, n, r, i, s = Bt(
    /*file_to_display*/
    e[2]
  ) + "", l, u, o, a, f = (
    /*file_to_display*/
    e[2].orig_name + ""
  ), c;
  return {
    c() {
      t = Ze("div"), n = Ze("span"), r = Ze("div"), i = Ze("progress"), l = at(s), o = Kn(), a = Ze("span"), c = at(f), Pn(i, "visibility", "hidden"), Pn(i, "height", "0"), Pn(i, "width", "0"), i.value = u = Bt(
        /*file_to_display*/
        e[2]
      ), We(i, "max", "100"), We(i, "class", "svelte-12ckl9l"), We(r, "class", "progress-bar svelte-12ckl9l"), We(a, "class", "file-name svelte-12ckl9l"), We(t, "class", "file svelte-12ckl9l");
    },
    m(_, h) {
      gs(_, t, h), ne(t, n), ne(n, r), ne(r, i), ne(i, l), ne(t, o), ne(t, a), ne(a, c);
    },
    p(_, h) {
      h & /*file_to_display*/
      4 && s !== (s = Bt(
        /*file_to_display*/
        _[2]
      ) + "") && en(l, s), h & /*file_to_display*/
      4 && u !== (u = Bt(
        /*file_to_display*/
        _[2]
      )) && (i.value = u), h & /*file_to_display*/
      4 && f !== (f = /*file_to_display*/
      _[2].orig_name + "") && en(c, f);
    },
    d(_) {
      _ && ps(t);
    }
  };
}
function rf(e) {
  let t, n, r, i = (
    /*files_with_progress*/
    e[0].length + ""
  ), s, l, u = (
    /*files_with_progress*/
    e[0].length > 1 ? "files" : "file"
  ), o, a, f, c = (
    /*file_to_display*/
    e[2] && ei(e)
  );
  return {
    c() {
      t = Ze("div"), n = Ze("span"), r = at("Uploading "), s = at(i), l = Kn(), o = at(u), a = at("..."), f = Kn(), c && c.c(), We(n, "class", "uploading svelte-12ckl9l"), We(t, "class", "wrap svelte-12ckl9l"), $r(
        t,
        "progress",
        /*progress*/
        e[1]
      );
    },
    m(_, h) {
      gs(_, t, h), ne(t, n), ne(n, r), ne(n, s), ne(n, l), ne(n, o), ne(n, a), ne(t, f), c && c.m(t, null);
    },
    p(_, [h]) {
      h & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && en(s, i), h & /*files_with_progress*/
      1 && u !== (u = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && en(o, u), /*file_to_display*/
      _[2] ? c ? c.p(_, h) : (c = ei(_), c.c(), c.m(t, null)) : c && (c.d(1), c = null), h & /*progress*/
      2 && $r(
        t,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Kr,
    o: Kr,
    d(_) {
      _ && ps(t), c && c.d();
    }
  };
}
function Bt(e) {
  return e.progress * 100 / (e.size || 0) || 0;
}
function sf(e) {
  let t = 0;
  return e.forEach((n) => {
    t += Bt(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (t / e.length).toFixed(2) + "%"), t / e.length;
}
function lf(e, t, n) {
  let { upload_id: r } = t, { root: i } = t, { files: s } = t, l, u = !1, o, a, f = s.map((d) => ({ ...d, progress: 0 }));
  const c = tf();
  function _(d, b) {
    n(0, f = f.map((y) => (y.orig_name === d && (y.progress += b), y)));
  }
  const h = nf("EventSource_factory");
  return ef(() => {
    l = h(new URL(`${i}/upload_progress?upload_id=${r}`)), l.onmessage = async function(d) {
      const b = JSON.parse(d.data);
      u || n(1, u = !0), b.msg === "done" ? (l.close(), c("done")) : (n(6, o = b), _(b.orig_name, b.chunk_size));
    };
  }), e.$$set = (d) => {
    "upload_id" in d && n(3, r = d.upload_id), "root" in d && n(4, i = d.root), "files" in d && n(5, s = d.files);
  }, e.$$.update = () => {
    e.$$.dirty & /*files_with_progress*/
    1 && sf(f), e.$$.dirty & /*current_file_upload, files_with_progress*/
    65 && n(2, a = o || f[0]);
  }, [
    f,
    u,
    a,
    r,
    i,
    s,
    o
  ];
}
class of extends Yu {
  constructor(t) {
    super(), Ku(this, t, lf, rf, $u, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: af,
  append: ti,
  attr: Y,
  binding_callbacks: uf,
  bubble: Ve,
  check_outros: bs,
  create_component: ff,
  create_slot: vs,
  destroy_component: cf,
  detach: on,
  element: $n,
  empty: ys,
  get_all_dirty_from_scope: ws,
  get_slot_changes: Es,
  group_outros: Ss,
  init: hf,
  insert: an,
  listen: se,
  mount_component: _f,
  prevent_default: ze,
  run_all: df,
  safe_not_equal: mf,
  set_style: Ts,
  space: pf,
  stop_propagation: Xe,
  toggle_class: K,
  transition_in: Fe,
  transition_out: Ke,
  update_slot_base: As
} = window.__gradio__svelte__internal, { createEventDispatcher: gf, tick: bf, getContext: vf } = window.__gradio__svelte__internal;
function yf(e) {
  let t, n, r, i, s, l, u, o, a, f;
  const c = (
    /*#slots*/
    e[22].default
  ), _ = vs(
    c,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = $n("button"), _ && _.c(), n = pf(), r = $n("input"), Y(r, "aria-label", "file upload"), Y(r, "data-testid", "file-upload"), Y(r, "type", "file"), Y(
        r,
        "accept",
        /*accept_file_types*/
        e[12]
      ), r.multiple = i = /*file_count*/
      e[5] === "multiple" || void 0, Y(r, "webkitdirectory", s = /*file_count*/
      e[5] === "directory" || void 0), Y(r, "mozdirectory", l = /*file_count*/
      e[5] === "directory" || void 0), Y(r, "class", "svelte-1aq8tno"), Y(t, "tabindex", u = /*hidden*/
      e[7] ? -1 : 0), Y(t, "class", "svelte-1aq8tno"), K(
        t,
        "hidden",
        /*hidden*/
        e[7]
      ), K(
        t,
        "center",
        /*center*/
        e[3]
      ), K(
        t,
        "boundedheight",
        /*boundedheight*/
        e[2]
      ), K(
        t,
        "flex",
        /*flex*/
        e[4]
      ), Ts(t, "height", "100%");
    },
    m(h, d) {
      an(h, t, d), _ && _.m(t, null), ti(t, n), ti(t, r), e[30](r), o = !0, a || (f = [
        se(
          r,
          "change",
          /*load_files_from_upload*/
          e[15]
        ),
        se(t, "drag", Xe(ze(
          /*drag_handler*/
          e[23]
        ))),
        se(t, "dragstart", Xe(ze(
          /*dragstart_handler*/
          e[24]
        ))),
        se(t, "dragend", Xe(ze(
          /*dragend_handler*/
          e[25]
        ))),
        se(t, "dragover", Xe(ze(
          /*dragover_handler*/
          e[26]
        ))),
        se(t, "dragenter", Xe(ze(
          /*dragenter_handler*/
          e[27]
        ))),
        se(t, "dragleave", Xe(ze(
          /*dragleave_handler*/
          e[28]
        ))),
        se(t, "drop", Xe(ze(
          /*drop_handler*/
          e[29]
        ))),
        se(
          t,
          "click",
          /*open_file_upload*/
          e[9]
        ),
        se(
          t,
          "drop",
          /*loadFilesFromDrop*/
          e[16]
        ),
        se(
          t,
          "dragenter",
          /*updateDragging*/
          e[14]
        ),
        se(
          t,
          "dragleave",
          /*updateDragging*/
          e[14]
        )
      ], a = !0);
    },
    p(h, d) {
      _ && _.p && (!o || d[0] & /*$$scope*/
      2097152) && As(
        _,
        c,
        h,
        /*$$scope*/
        h[21],
        o ? Es(
          c,
          /*$$scope*/
          h[21],
          d,
          null
        ) : ws(
          /*$$scope*/
          h[21]
        ),
        null
      ), (!o || d[0] & /*accept_file_types*/
      4096) && Y(
        r,
        "accept",
        /*accept_file_types*/
        h[12]
      ), (!o || d[0] & /*file_count*/
      32 && i !== (i = /*file_count*/
      h[5] === "multiple" || void 0)) && (r.multiple = i), (!o || d[0] & /*file_count*/
      32 && s !== (s = /*file_count*/
      h[5] === "directory" || void 0)) && Y(r, "webkitdirectory", s), (!o || d[0] & /*file_count*/
      32 && l !== (l = /*file_count*/
      h[5] === "directory" || void 0)) && Y(r, "mozdirectory", l), (!o || d[0] & /*hidden*/
      128 && u !== (u = /*hidden*/
      h[7] ? -1 : 0)) && Y(t, "tabindex", u), (!o || d[0] & /*hidden*/
      128) && K(
        t,
        "hidden",
        /*hidden*/
        h[7]
      ), (!o || d[0] & /*center*/
      8) && K(
        t,
        "center",
        /*center*/
        h[3]
      ), (!o || d[0] & /*boundedheight*/
      4) && K(
        t,
        "boundedheight",
        /*boundedheight*/
        h[2]
      ), (!o || d[0] & /*flex*/
      16) && K(
        t,
        "flex",
        /*flex*/
        h[4]
      );
    },
    i(h) {
      o || (Fe(_, h), o = !0);
    },
    o(h) {
      Ke(_, h), o = !1;
    },
    d(h) {
      h && on(t), _ && _.d(h), e[30](null), a = !1, df(f);
    }
  };
}
function wf(e) {
  let t, n, r = !/*hidden*/
  e[7] && ni(e);
  return {
    c() {
      r && r.c(), t = ys();
    },
    m(i, s) {
      r && r.m(i, s), an(i, t, s), n = !0;
    },
    p(i, s) {
      /*hidden*/
      i[7] ? r && (Ss(), Ke(r, 1, 1, () => {
        r = null;
      }), bs()) : r ? (r.p(i, s), s[0] & /*hidden*/
      128 && Fe(r, 1)) : (r = ni(i), r.c(), Fe(r, 1), r.m(t.parentNode, t));
    },
    i(i) {
      n || (Fe(r), n = !0);
    },
    o(i) {
      Ke(r), n = !1;
    },
    d(i) {
      i && on(t), r && r.d(i);
    }
  };
}
function Ef(e) {
  let t, n, r, i, s;
  const l = (
    /*#slots*/
    e[22].default
  ), u = vs(
    l,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = $n("button"), u && u.c(), Y(t, "tabindex", n = /*hidden*/
      e[7] ? -1 : 0), Y(t, "class", "svelte-1aq8tno"), K(
        t,
        "hidden",
        /*hidden*/
        e[7]
      ), K(
        t,
        "center",
        /*center*/
        e[3]
      ), K(
        t,
        "boundedheight",
        /*boundedheight*/
        e[2]
      ), K(
        t,
        "flex",
        /*flex*/
        e[4]
      ), Ts(t, "height", "100%");
    },
    m(o, a) {
      an(o, t, a), u && u.m(t, null), r = !0, i || (s = se(
        t,
        "click",
        /*paste_clipboard*/
        e[8]
      ), i = !0);
    },
    p(o, a) {
      u && u.p && (!r || a[0] & /*$$scope*/
      2097152) && As(
        u,
        l,
        o,
        /*$$scope*/
        o[21],
        r ? Es(
          l,
          /*$$scope*/
          o[21],
          a,
          null
        ) : ws(
          /*$$scope*/
          o[21]
        ),
        null
      ), (!r || a[0] & /*hidden*/
      128 && n !== (n = /*hidden*/
      o[7] ? -1 : 0)) && Y(t, "tabindex", n), (!r || a[0] & /*hidden*/
      128) && K(
        t,
        "hidden",
        /*hidden*/
        o[7]
      ), (!r || a[0] & /*center*/
      8) && K(
        t,
        "center",
        /*center*/
        o[3]
      ), (!r || a[0] & /*boundedheight*/
      4) && K(
        t,
        "boundedheight",
        /*boundedheight*/
        o[2]
      ), (!r || a[0] & /*flex*/
      16) && K(
        t,
        "flex",
        /*flex*/
        o[4]
      );
    },
    i(o) {
      r || (Fe(u, o), r = !0);
    },
    o(o) {
      Ke(u, o), r = !1;
    },
    d(o) {
      o && on(t), u && u.d(o), i = !1, s();
    }
  };
}
function ni(e) {
  let t, n;
  return t = new of({
    props: {
      root: (
        /*root*/
        e[6]
      ),
      upload_id: (
        /*upload_id*/
        e[10]
      ),
      files: (
        /*file_data*/
        e[11]
      )
    }
  }), {
    c() {
      ff(t.$$.fragment);
    },
    m(r, i) {
      _f(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i[0] & /*root*/
      64 && (s.root = /*root*/
      r[6]), i[0] & /*upload_id*/
      1024 && (s.upload_id = /*upload_id*/
      r[10]), i[0] & /*file_data*/
      2048 && (s.files = /*file_data*/
      r[11]), t.$set(s);
    },
    i(r) {
      n || (Fe(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ke(t.$$.fragment, r), n = !1;
    },
    d(r) {
      cf(t, r);
    }
  };
}
function Sf(e) {
  let t, n, r, i;
  const s = [Ef, wf, yf], l = [];
  function u(o, a) {
    return (
      /*filetype*/
      o[0] === "clipboard" ? 0 : (
        /*uploading*/
        o[1] ? 1 : 2
      )
    );
  }
  return t = u(e), n = l[t] = s[t](e), {
    c() {
      n.c(), r = ys();
    },
    m(o, a) {
      l[t].m(o, a), an(o, r, a), i = !0;
    },
    p(o, a) {
      let f = t;
      t = u(o), t === f ? l[t].p(o, a) : (Ss(), Ke(l[f], 1, 1, () => {
        l[f] = null;
      }), bs(), n = l[t], n ? n.p(o, a) : (n = l[t] = s[t](o), n.c()), Fe(n, 1), n.m(r.parentNode, r));
    },
    i(o) {
      i || (Fe(n), i = !0);
    },
    o(o) {
      Ke(n), i = !1;
    },
    d(o) {
      o && on(r), l[t].d(o);
    }
  };
}
function ri(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], s = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = s(n)) : (i === "call" || i === "optionalCall") && (n = s((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function Tf(e, t) {
  return !e || e === "*" || e === "file/*" ? !0 : (typeof e == "string" && e.endsWith("/*") && (e = e.split(",")), Array.isArray(e) ? e.includes(t) || e.some((n) => {
    const [r] = n.split("/");
    return n.endsWith("/*") && t.startsWith(r + "/");
  }) : e === t);
}
function Af(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { filetype: s = null } = t, { dragging: l = !1 } = t, { boundedheight: u = !0 } = t, { center: o = !0 } = t, { flex: a = !0 } = t, { file_count: f = "single" } = t, { disable_click: c = !1 } = t, { root: _ } = t, { hidden: h = !1 } = t, { format: d = "file" } = t, { uploading: b = !1 } = t, y, v, S;
  const p = vf("upload_files");
  let A;
  const T = gf();
  function w() {
    n(17, l = !l);
  }
  function j() {
    navigator.clipboard.read().then(async (m) => {
      for (let N = 0; N < m.length; N++) {
        const g = m[N].types.find((M) => M.startsWith("image/"));
        if (g) {
          m[N].getType(g).then(async (M) => {
            const E = new File([M], `clipboard.${g.replace("image/", "")}`);
            await Z([E]);
          });
          break;
        }
      }
    });
  }
  function B() {
    c || (n(13, A.value = "", A), A.click());
  }
  async function H(m) {
    await bf(), n(10, y = Math.random().toString(36).substring(2, 15)), n(1, b = !0);
    const N = await Uo(m, _, y, p);
    return T("load", f === "single" ? ri([N, "optionalAccess", (g) => g[0]]) : N), n(1, b = !1), N || [];
  }
  async function Z(m) {
    if (!m.length)
      return;
    let N = m.map((g) => new File([g], g.name));
    return n(11, v = await xo(N)), await H(v);
  }
  async function le(m) {
    const N = m.target;
    if (N.files)
      if (d != "blob")
        await Z(Array.from(N.files));
      else {
        if (f === "single") {
          T("load", N.files[0]);
          return;
        }
        T("load", N.files);
      }
  }
  async function Ge(m) {
    if (n(17, l = !1), !ri([m, "access", (g) => g.dataTransfer, "optionalAccess", (g) => g.files]))
      return;
    const N = Array.from(m.dataTransfer.files).filter((g) => {
      const M = "." + g.name.split(".").pop();
      return g.type && Tf(s, g.type) || (M && Array.isArray(s) ? s.includes(M) : M === s) ? !0 : (T("error", `Invalid file type only ${s} allowed.`), !1);
    });
    await Z(N);
  }
  function $(m) {
    Ve.call(this, e, m);
  }
  function Ae(m) {
    Ve.call(this, e, m);
  }
  function oe(m) {
    Ve.call(this, e, m);
  }
  function qe(m) {
    Ve.call(this, e, m);
  }
  function wt(m) {
    Ve.call(this, e, m);
  }
  function Le(m) {
    Ve.call(this, e, m);
  }
  function rt(m) {
    Ve.call(this, e, m);
  }
  function Be(m) {
    uf[m ? "unshift" : "push"](() => {
      A = m, n(13, A);
    });
  }
  return e.$$set = (m) => {
    "filetype" in m && n(0, s = m.filetype), "dragging" in m && n(17, l = m.dragging), "boundedheight" in m && n(2, u = m.boundedheight), "center" in m && n(3, o = m.center), "flex" in m && n(4, a = m.flex), "file_count" in m && n(5, f = m.file_count), "disable_click" in m && n(18, c = m.disable_click), "root" in m && n(6, _ = m.root), "hidden" in m && n(7, h = m.hidden), "format" in m && n(19, d = m.format), "uploading" in m && n(1, b = m.uploading), "$$scope" in m && n(21, i = m.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*filetype*/
    1 && (s == null || typeof s == "string" ? n(12, S = s) : (n(0, s = s.map((m) => m.startsWith(".") ? m : m + "/*")), n(12, S = s.join(", "))));
  }, [
    s,
    b,
    u,
    o,
    a,
    f,
    _,
    h,
    j,
    B,
    y,
    v,
    S,
    A,
    w,
    le,
    Ge,
    l,
    c,
    d,
    Z,
    i,
    r,
    $,
    Ae,
    oe,
    qe,
    wt,
    Le,
    rt,
    Be
  ];
}
class Bf extends af {
  constructor(t) {
    super(), hf(
      this,
      t,
      Af,
      Sf,
      mf,
      {
        filetype: 0,
        dragging: 17,
        boundedheight: 2,
        center: 3,
        flex: 4,
        file_count: 5,
        disable_click: 18,
        root: 6,
        hidden: 7,
        format: 19,
        uploading: 1,
        paste_clipboard: 8,
        open_file_upload: 9,
        load_files: 20
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[8];
  }
  get open_file_upload() {
    return this.$$.ctx[9];
  }
  get load_files() {
    return this.$$.ctx[20];
  }
}
const {
  SvelteComponent: Hf,
  attr: kf,
  create_component: Cf,
  destroy_component: Pf,
  detach: Nf,
  element: If,
  init: Lf,
  insert: Of,
  mount_component: Mf,
  noop: Df,
  safe_not_equal: Rf,
  transition_in: Uf,
  transition_out: xf
} = window.__gradio__svelte__internal, { createEventDispatcher: Ff } = window.__gradio__svelte__internal;
function Gf(e) {
  let t, n, r;
  return n = new kl({
    props: { Icon: Kl, label: "Remove Image" }
  }), n.$on(
    "click",
    /*click_handler*/
    e[1]
  ), {
    c() {
      t = If("div"), Cf(n.$$.fragment), kf(t, "class", "svelte-1g74h68");
    },
    m(i, s) {
      Of(i, t, s), Mf(n, t, null), r = !0;
    },
    p: Df,
    i(i) {
      r || (Uf(n.$$.fragment, i), r = !0);
    },
    o(i) {
      xf(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && Nf(t), Pf(n);
    }
  };
}
function qf(e) {
  const t = Ff();
  return [t, (r) => {
    t("remove_image"), r.stopPropagation();
  }];
}
class jf extends Hf {
  constructor(t) {
    super(), Lf(this, t, qf, Gf, Rf, {});
  }
}
const {
  SvelteComponent: Vf,
  add_flush_callback: ii,
  append: zf,
  attr: Nt,
  bind: si,
  binding_callbacks: er,
  bubble: Xf,
  check_outros: tr,
  create_component: _r,
  create_slot: Wf,
  destroy_component: dr,
  detach: It,
  element: mr,
  empty: Zf,
  get_all_dirty_from_scope: Jf,
  get_slot_changes: Qf,
  group_outros: nr,
  init: Yf,
  insert: Lt,
  mount_component: pr,
  noop: rr,
  safe_not_equal: Kf,
  space: li,
  transition_in: de,
  transition_out: Ee,
  update_slot_base: $f
} = window.__gradio__svelte__internal, { createEventDispatcher: ec } = window.__gradio__svelte__internal;
function oi(e) {
  let t, n;
  return t = new jf({}), t.$on(
    "remove_image",
    /*remove_image_handler*/
    e[11]
  ), {
    c() {
      _r(t.$$.fragment);
    },
    m(r, i) {
      pr(t, r, i), n = !0;
    },
    p: rr,
    i(r) {
      n || (de(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ee(t.$$.fragment, r), n = !1;
    },
    d(r) {
      dr(t, r);
    }
  };
}
function tc(e) {
  let t;
  return {
    c() {
      t = mr("div"), Nt(t, "id", "fasta_content"), Nt(t, "class", "svelte-1c5d8s");
    },
    m(n, r) {
      Lt(n, t, r), t.innerHTML = /*fasta_text*/
      e[7];
    },
    p(n, r) {
      r & /*fasta_text*/
      128 && (t.innerHTML = /*fasta_text*/
      n[7]);
    },
    i: rr,
    o: rr,
    d(n) {
      n && It(t);
    }
  };
}
function nc(e) {
  let t, n, r, i, s;
  function l(a) {
    e[13](a);
  }
  function u(a) {
    e[14](a);
  }
  let o = {
    hidden: (
      /*value*/
      e[0] !== null
    ),
    filetype: "text/plain",
    root: (
      /*root*/
      e[3]
    ),
    $$slots: { default: [rc] },
    $$scope: { ctx: e }
  };
  return (
    /*uploading*/
    e[4] !== void 0 && (o.uploading = /*uploading*/
    e[4]), /*dragging*/
    e[5] !== void 0 && (o.dragging = /*dragging*/
    e[5]), n = new Bf({ props: o }), e[12](n), er.push(() => si(n, "uploading", l)), er.push(() => si(n, "dragging", u)), n.$on(
      "load",
      /*handle_upload*/
      e[8]
    ), n.$on(
      "error",
      /*error_handler*/
      e[15]
    ), {
      c() {
        t = mr("div"), _r(n.$$.fragment), Nt(t, "class", "upload-container svelte-1c5d8s");
      },
      m(a, f) {
        Lt(a, t, f), pr(n, t, null), s = !0;
      },
      p(a, f) {
        const c = {};
        f & /*value*/
        1 && (c.hidden = /*value*/
        a[0] !== null), f & /*root*/
        8 && (c.root = /*root*/
        a[3]), f & /*$$scope, value*/
        65537 && (c.$$scope = { dirty: f, ctx: a }), !r && f & /*uploading*/
        16 && (r = !0, c.uploading = /*uploading*/
        a[4], ii(() => r = !1)), !i && f & /*dragging*/
        32 && (i = !0, c.dragging = /*dragging*/
        a[5], ii(() => i = !1)), n.$set(c);
      },
      i(a) {
        s || (de(n.$$.fragment, a), s = !0);
      },
      o(a) {
        Ee(n.$$.fragment, a), s = !1;
      },
      d(a) {
        a && It(t), e[12](null), dr(n);
      }
    }
  );
}
function ai(e) {
  let t;
  const n = (
    /*#slots*/
    e[10].default
  ), r = Wf(
    n,
    e,
    /*$$scope*/
    e[16],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), t = !0;
    },
    p(i, s) {
      r && r.p && (!t || s & /*$$scope*/
      65536) && $f(
        r,
        n,
        i,
        /*$$scope*/
        i[16],
        t ? Qf(
          n,
          /*$$scope*/
          i[16],
          s,
          null
        ) : Jf(
          /*$$scope*/
          i[16]
        ),
        null
      );
    },
    i(i) {
      t || (de(r, i), t = !0);
    },
    o(i) {
      Ee(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function rc(e) {
  let t, n, r = (
    /*value*/
    e[0] === null && ai(e)
  );
  return {
    c() {
      r && r.c(), t = Zf();
    },
    m(i, s) {
      r && r.m(i, s), Lt(i, t, s), n = !0;
    },
    p(i, s) {
      /*value*/
      i[0] === null ? r ? (r.p(i, s), s & /*value*/
      1 && de(r, 1)) : (r = ai(i), r.c(), de(r, 1), r.m(t.parentNode, t)) : r && (nr(), Ee(r, 1, 1, () => {
        r = null;
      }), tr());
    },
    i(i) {
      n || (de(r), n = !0);
    },
    o(i) {
      Ee(r), n = !1;
    },
    d(i) {
      i && It(t), r && r.d(i);
    }
  };
}
function ic(e) {
  var _;
  let t, n, r, i, s, l, u;
  t = new Oi({
    props: {
      show_label: (
        /*show_label*/
        e[2]
      ),
      Icon: sr,
      label: (
        /*label*/
        e[1] || "Image"
      )
    }
  });
  let o = (
    /*value*/
    ((_ = e[0]) == null ? void 0 : _.url) && oi(e)
  );
  const a = [nc, tc], f = [];
  function c(h, d) {
    return (
      /*value*/
      h[0] === null ? 0 : 1
    );
  }
  return s = c(e), l = f[s] = a[s](e), {
    c() {
      _r(t.$$.fragment), n = li(), r = mr("div"), o && o.c(), i = li(), l.c(), Nt(r, "data-testid", "image"), Nt(r, "class", "image-container svelte-1c5d8s");
    },
    m(h, d) {
      pr(t, h, d), Lt(h, n, d), Lt(h, r, d), o && o.m(r, null), zf(r, i), f[s].m(r, null), u = !0;
    },
    p(h, [d]) {
      var v;
      const b = {};
      d & /*show_label*/
      4 && (b.show_label = /*show_label*/
      h[2]), d & /*label*/
      2 && (b.label = /*label*/
      h[1] || "Image"), t.$set(b), /*value*/
      (v = h[0]) != null && v.url ? o ? (o.p(h, d), d & /*value*/
      1 && de(o, 1)) : (o = oi(h), o.c(), de(o, 1), o.m(r, i)) : o && (nr(), Ee(o, 1, 1, () => {
        o = null;
      }), tr());
      let y = s;
      s = c(h), s === y ? f[s].p(h, d) : (nr(), Ee(f[y], 1, 1, () => {
        f[y] = null;
      }), tr(), l = f[s], l ? l.p(h, d) : (l = f[s] = a[s](h), l.c()), de(l, 1), l.m(r, null));
    },
    i(h) {
      u || (de(t.$$.fragment, h), de(o), de(l), u = !0);
    },
    o(h) {
      Ee(t.$$.fragment, h), Ee(o), Ee(l), u = !1;
    },
    d(h) {
      h && (It(n), It(r)), dr(t, h), o && o.d(), f[s].d();
    }
  };
}
function sc(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { value: s } = t, { label: l = void 0 } = t, { show_label: u } = t, { root: o } = t, a, f = !1, c = "";
  async function _(T) {
    const w = await fetch(T);
    n(7, c = await w.text()), n(7, c = c.replaceAll("G", "<span style='color: green'>G</span>")), n(7, c = c.replaceAll("A", "<span style='color: red'>A</span>")), n(7, c = c.replaceAll("T", "<span style='color: blue'>T</span>")), n(7, c = c.replaceAll("C", "<span style='color: orange'>C</span>")), n(7, c = c.replaceAll(/^(>.*)$/gm, "<span style='color: gray !important'>$1</span>"));
  }
  function h({ detail: T }) {
    n(0, s = Ce(T, o, null)), d("upload"), _(s.url);
  }
  const d = ec();
  let b = !1;
  const y = () => {
    n(0, s = null), d("clear");
  };
  function v(T) {
    er[T ? "unshift" : "push"](() => {
      a = T, n(6, a);
    });
  }
  function S(T) {
    f = T, n(4, f);
  }
  function p(T) {
    b = T, n(5, b);
  }
  function A(T) {
    Xf.call(this, e, T);
  }
  return e.$$set = (T) => {
    "value" in T && n(0, s = T.value), "label" in T && n(1, l = T.label), "show_label" in T && n(2, u = T.show_label), "root" in T && n(3, o = T.root), "$$scope" in T && n(16, i = T.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*uploading*/
    16 && f && n(0, s = null), e.$$.dirty & /*value, root*/
    9 && s && !s.url && n(0, s = Ce(s, o, null)), e.$$.dirty & /*dragging*/
    32 && d("drag", b);
  }, [
    s,
    l,
    u,
    o,
    f,
    b,
    a,
    c,
    h,
    d,
    r,
    y,
    v,
    S,
    p,
    A,
    i
  ];
}
class lc extends Vf {
  constructor(t) {
    super(), Yf(this, t, sc, ic, Kf, {
      value: 0,
      label: 1,
      show_label: 2,
      root: 3
    });
  }
}
function ut(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let r = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + r;
}
const {
  SvelteComponent: oc,
  append: ve,
  attr: O,
  component_subscribe: ui,
  detach: ac,
  element: uc,
  init: fc,
  insert: cc,
  noop: fi,
  safe_not_equal: hc,
  set_style: Vt,
  svg_element: ye,
  toggle_class: ci
} = window.__gradio__svelte__internal, { onMount: _c } = window.__gradio__svelte__internal;
function dc(e) {
  let t, n, r, i, s, l, u, o, a, f, c, _;
  return {
    c() {
      t = uc("div"), n = ye("svg"), r = ye("g"), i = ye("path"), s = ye("path"), l = ye("path"), u = ye("path"), o = ye("g"), a = ye("path"), f = ye("path"), c = ye("path"), _ = ye("path"), O(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), O(i, "fill", "#FF7C00"), O(i, "fill-opacity", "0.4"), O(i, "class", "svelte-43sxxs"), O(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), O(s, "fill", "#FF7C00"), O(s, "class", "svelte-43sxxs"), O(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), O(l, "fill", "#FF7C00"), O(l, "fill-opacity", "0.4"), O(l, "class", "svelte-43sxxs"), O(u, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), O(u, "fill", "#FF7C00"), O(u, "class", "svelte-43sxxs"), Vt(r, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), O(a, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), O(a, "fill", "#FF7C00"), O(a, "fill-opacity", "0.4"), O(a, "class", "svelte-43sxxs"), O(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), O(f, "fill", "#FF7C00"), O(f, "class", "svelte-43sxxs"), O(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), O(c, "fill", "#FF7C00"), O(c, "fill-opacity", "0.4"), O(c, "class", "svelte-43sxxs"), O(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), O(_, "fill", "#FF7C00"), O(_, "class", "svelte-43sxxs"), Vt(o, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), O(n, "viewBox", "-1200 -1200 3000 3000"), O(n, "fill", "none"), O(n, "xmlns", "http://www.w3.org/2000/svg"), O(n, "class", "svelte-43sxxs"), O(t, "class", "svelte-43sxxs"), ci(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(h, d) {
      cc(h, t, d), ve(t, n), ve(n, r), ve(r, i), ve(r, s), ve(r, l), ve(r, u), ve(n, o), ve(o, a), ve(o, f), ve(o, c), ve(o, _);
    },
    p(h, [d]) {
      d & /*$top*/
      2 && Vt(r, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), d & /*$bottom*/
      4 && Vt(o, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), d & /*margin*/
      1 && ci(
        t,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: fi,
    o: fi,
    d(h) {
      h && ac(t);
    }
  };
}
function mc(e, t, n) {
  let r, i, { margin: s = !0 } = t;
  const l = Ur([0, 0]);
  ui(e, l, (_) => n(1, r = _));
  const u = Ur([0, 0]);
  ui(e, u, (_) => n(2, i = _));
  let o;
  async function a() {
    await Promise.all([l.set([125, 140]), u.set([-125, -140])]), await Promise.all([l.set([-125, 140]), u.set([125, -140])]), await Promise.all([l.set([-125, 0]), u.set([125, -0])]), await Promise.all([l.set([125, 0]), u.set([-125, 0])]);
  }
  async function f() {
    await a(), o || f();
  }
  async function c() {
    await Promise.all([l.set([125, 0]), u.set([-125, 0])]), f();
  }
  return _c(() => (c(), () => o = !0)), e.$$set = (_) => {
    "margin" in _ && n(0, s = _.margin);
  }, [s, r, i, l, u];
}
class pc extends oc {
  constructor(t) {
    super(), fc(this, t, mc, dc, hc, { margin: 0 });
  }
}
const {
  SvelteComponent: gc,
  append: Qe,
  attr: Se,
  binding_callbacks: hi,
  check_outros: Bs,
  create_component: bc,
  create_slot: vc,
  destroy_component: yc,
  destroy_each: Hs,
  detach: k,
  element: Pe,
  empty: yt,
  ensure_array_like: tn,
  get_all_dirty_from_scope: wc,
  get_slot_changes: Ec,
  group_outros: ks,
  init: Sc,
  insert: C,
  mount_component: Tc,
  noop: ir,
  safe_not_equal: Ac,
  set_data: me,
  set_style: xe,
  space: Te,
  text: q,
  toggle_class: _e,
  transition_in: pt,
  transition_out: gt,
  update_slot_base: Bc
} = window.__gradio__svelte__internal, { tick: Hc } = window.__gradio__svelte__internal, { onDestroy: kc } = window.__gradio__svelte__internal, Cc = (e) => ({}), _i = (e) => ({});
function di(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r[40] = n, r;
}
function mi(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r;
}
function Pc(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), r, i, s;
  const l = (
    /*#slots*/
    e[29].error
  ), u = vc(
    l,
    e,
    /*$$scope*/
    e[28],
    _i
  );
  return {
    c() {
      t = Pe("span"), r = q(n), i = Te(), u && u.c(), Se(t, "class", "error svelte-1txqlrd");
    },
    m(o, a) {
      C(o, t, a), Qe(t, r), C(o, i, a), u && u.m(o, a), s = !0;
    },
    p(o, a) {
      (!s || a[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      o[1]("common.error") + "") && me(r, n), u && u.p && (!s || a[0] & /*$$scope*/
      268435456) && Bc(
        u,
        l,
        o,
        /*$$scope*/
        o[28],
        s ? Ec(
          l,
          /*$$scope*/
          o[28],
          a,
          Cc
        ) : wc(
          /*$$scope*/
          o[28]
        ),
        _i
      );
    },
    i(o) {
      s || (pt(u, o), s = !0);
    },
    o(o) {
      gt(u, o), s = !1;
    },
    d(o) {
      o && (k(t), k(i)), u && u.d(o);
    }
  };
}
function Nc(e) {
  let t, n, r, i, s, l, u, o, a, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && pi(e)
  );
  function c(p, A) {
    if (
      /*progress*/
      p[7]
    )
      return Oc;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    )
      return Lc;
    if (
      /*queue_position*/
      p[2] === 0
    )
      return Ic;
  }
  let _ = c(e), h = _ && _(e), d = (
    /*timer*/
    e[5] && vi(e)
  );
  const b = [Uc, Rc], y = [];
  function v(p, A) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = v(e)) && (l = y[s] = b[s](e));
  let S = !/*timer*/
  e[5] && Bi(e);
  return {
    c() {
      f && f.c(), t = Te(), n = Pe("div"), h && h.c(), r = Te(), d && d.c(), i = Te(), l && l.c(), u = Te(), S && S.c(), o = yt(), Se(n, "class", "progress-text svelte-1txqlrd"), _e(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), _e(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(p, A) {
      f && f.m(p, A), C(p, t, A), C(p, n, A), h && h.m(n, null), Qe(n, r), d && d.m(n, null), C(p, i, A), ~s && y[s].m(p, A), C(p, u, A), S && S.m(p, A), C(p, o, A), a = !0;
    },
    p(p, A) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? f ? f.p(p, A) : (f = pi(p), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), _ === (_ = c(p)) && h ? h.p(p, A) : (h && h.d(1), h = _ && _(p), h && (h.c(), h.m(n, r))), /*timer*/
      p[5] ? d ? d.p(p, A) : (d = vi(p), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!a || A[0] & /*variant*/
      256) && _e(
        n,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!a || A[0] & /*variant*/
      256) && _e(
        n,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let T = s;
      s = v(p), s === T ? ~s && y[s].p(p, A) : (l && (ks(), gt(y[T], 1, 1, () => {
        y[T] = null;
      }), Bs()), ~s ? (l = y[s], l ? l.p(p, A) : (l = y[s] = b[s](p), l.c()), pt(l, 1), l.m(u.parentNode, u)) : l = null), /*timer*/
      p[5] ? S && (S.d(1), S = null) : S ? S.p(p, A) : (S = Bi(p), S.c(), S.m(o.parentNode, o));
    },
    i(p) {
      a || (pt(l), a = !0);
    },
    o(p) {
      gt(l), a = !1;
    },
    d(p) {
      p && (k(t), k(n), k(i), k(u), k(o)), f && f.d(p), h && h.d(), d && d.d(), ~s && y[s].d(p), S && S.d(p);
    }
  };
}
function pi(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Pe("div"), Se(t, "class", "eta-bar svelte-1txqlrd"), xe(t, "transform", n);
    },
    m(r, i) {
      C(r, t, i);
    },
    p(r, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && xe(t, "transform", n);
    },
    d(r) {
      r && k(t);
    }
  };
}
function Ic(e) {
  let t;
  return {
    c() {
      t = q("processing |");
    },
    m(n, r) {
      C(n, t, r);
    },
    p: ir,
    d(n) {
      n && k(t);
    }
  };
}
function Lc(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), r, i, s, l;
  return {
    c() {
      t = q("queue: "), r = q(n), i = q("/"), s = q(
        /*queue_size*/
        e[3]
      ), l = q(" |");
    },
    m(u, o) {
      C(u, t, o), C(u, r, o), C(u, i, o), C(u, s, o), C(u, l, o);
    },
    p(u, o) {
      o[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      u[2] + 1 + "") && me(r, n), o[0] & /*queue_size*/
      8 && me(
        s,
        /*queue_size*/
        u[3]
      );
    },
    d(u) {
      u && (k(t), k(r), k(i), k(s), k(l));
    }
  };
}
function Oc(e) {
  let t, n = tn(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = bi(mi(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = yt();
    },
    m(i, s) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(i, s);
      C(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        n = tn(
          /*progress*/
          i[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = mi(i, n, l);
          r[l] ? r[l].p(u, s) : (r[l] = bi(u), r[l].c(), r[l].m(t.parentNode, t));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && k(t), Hs(r, i);
    }
  };
}
function gi(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), r, i, s = " ", l;
  function u(f, c) {
    return (
      /*p*/
      f[38].length != null ? Dc : Mc
    );
  }
  let o = u(e), a = o(e);
  return {
    c() {
      a.c(), t = Te(), r = q(n), i = q(" | "), l = q(s);
    },
    m(f, c) {
      a.m(f, c), C(f, t, c), C(f, r, c), C(f, i, c), C(f, l, c);
    },
    p(f, c) {
      o === (o = u(f)) && a ? a.p(f, c) : (a.d(1), a = o(f), a && (a.c(), a.m(t.parentNode, t))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && me(r, n);
    },
    d(f) {
      f && (k(t), k(r), k(i), k(l)), a.d(f);
    }
  };
}
function Mc(e) {
  let t = ut(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = q(t);
    },
    m(r, i) {
      C(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = ut(
        /*p*/
        r[38].index || 0
      ) + "") && me(n, t);
    },
    d(r) {
      r && k(n);
    }
  };
}
function Dc(e) {
  let t = ut(
    /*p*/
    e[38].index || 0
  ) + "", n, r, i = ut(
    /*p*/
    e[38].length
  ) + "", s;
  return {
    c() {
      n = q(t), r = q("/"), s = q(i);
    },
    m(l, u) {
      C(l, n, u), C(l, r, u), C(l, s, u);
    },
    p(l, u) {
      u[0] & /*progress*/
      128 && t !== (t = ut(
        /*p*/
        l[38].index || 0
      ) + "") && me(n, t), u[0] & /*progress*/
      128 && i !== (i = ut(
        /*p*/
        l[38].length
      ) + "") && me(s, i);
    },
    d(l) {
      l && (k(n), k(r), k(s));
    }
  };
}
function bi(e) {
  let t, n = (
    /*p*/
    e[38].index != null && gi(e)
  );
  return {
    c() {
      n && n.c(), t = yt();
    },
    m(r, i) {
      n && n.m(r, i), C(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].index != null ? n ? n.p(r, i) : (n = gi(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && k(t), n && n.d(r);
    }
  };
}
function vi(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), r, i;
  return {
    c() {
      t = q(
        /*formatted_timer*/
        e[20]
      ), r = q(n), i = q("s");
    },
    m(s, l) {
      C(s, t, l), C(s, r, l), C(s, i, l);
    },
    p(s, l) {
      l[0] & /*formatted_timer*/
      1048576 && me(
        t,
        /*formatted_timer*/
        s[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && me(r, n);
    },
    d(s) {
      s && (k(t), k(r), k(i));
    }
  };
}
function Rc(e) {
  let t, n;
  return t = new pc({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      bc(t.$$.fragment);
    },
    m(r, i) {
      Tc(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      r[8] === "default"), t.$set(s);
    },
    i(r) {
      n || (pt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      gt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      yc(t, r);
    }
  };
}
function Uc(e) {
  let t, n, r, i, s, l = `${/*last_progress_level*/
  e[15] * 100}%`, u = (
    /*progress*/
    e[7] != null && yi(e)
  );
  return {
    c() {
      t = Pe("div"), n = Pe("div"), u && u.c(), r = Te(), i = Pe("div"), s = Pe("div"), Se(n, "class", "progress-level-inner svelte-1txqlrd"), Se(s, "class", "progress-bar svelte-1txqlrd"), xe(s, "width", l), Se(i, "class", "progress-bar-wrap svelte-1txqlrd"), Se(t, "class", "progress-level svelte-1txqlrd");
    },
    m(o, a) {
      C(o, t, a), Qe(t, n), u && u.m(n, null), Qe(t, r), Qe(t, i), Qe(i, s), e[30](s);
    },
    p(o, a) {
      /*progress*/
      o[7] != null ? u ? u.p(o, a) : (u = yi(o), u.c(), u.m(n, null)) : u && (u.d(1), u = null), a[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && xe(s, "width", l);
    },
    i: ir,
    o: ir,
    d(o) {
      o && k(t), u && u.d(), e[30](null);
    }
  };
}
function yi(e) {
  let t, n = tn(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = Ai(di(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = yt();
    },
    m(i, s) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(i, s);
      C(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = tn(
          /*progress*/
          i[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = di(i, n, l);
          r[l] ? r[l].p(u, s) : (r[l] = Ai(u), r[l].c(), r[l].m(t.parentNode, t));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && k(t), Hs(r, i);
    }
  };
}
function wi(e) {
  let t, n, r, i, s = (
    /*i*/
    e[40] !== 0 && xc()
  ), l = (
    /*p*/
    e[38].desc != null && Ei(e)
  ), u = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && Si()
  ), o = (
    /*progress_level*/
    e[14] != null && Ti(e)
  );
  return {
    c() {
      s && s.c(), t = Te(), l && l.c(), n = Te(), u && u.c(), r = Te(), o && o.c(), i = yt();
    },
    m(a, f) {
      s && s.m(a, f), C(a, t, f), l && l.m(a, f), C(a, n, f), u && u.m(a, f), C(a, r, f), o && o.m(a, f), C(a, i, f);
    },
    p(a, f) {
      /*p*/
      a[38].desc != null ? l ? l.p(a, f) : (l = Ei(a), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null), /*p*/
      a[38].desc != null && /*progress_level*/
      a[14] && /*progress_level*/
      a[14][
        /*i*/
        a[40]
      ] != null ? u || (u = Si(), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), /*progress_level*/
      a[14] != null ? o ? o.p(a, f) : (o = Ti(a), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && (k(t), k(n), k(r), k(i)), s && s.d(a), l && l.d(a), u && u.d(a), o && o.d(a);
    }
  };
}
function xc(e) {
  let t;
  return {
    c() {
      t = q(" /");
    },
    m(n, r) {
      C(n, t, r);
    },
    d(n) {
      n && k(t);
    }
  };
}
function Ei(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = q(t);
    },
    m(r, i) {
      C(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      r[38].desc + "") && me(n, t);
    },
    d(r) {
      r && k(n);
    }
  };
}
function Si(e) {
  let t;
  return {
    c() {
      t = q("-");
    },
    m(n, r) {
      C(n, t, r);
    },
    d(n) {
      n && k(t);
    }
  };
}
function Ti(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, r;
  return {
    c() {
      n = q(t), r = q("%");
    },
    m(i, s) {
      C(i, n, s), C(i, r, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && me(n, t);
    },
    d(i) {
      i && (k(n), k(r));
    }
  };
}
function Ai(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && wi(e)
  );
  return {
    c() {
      n && n.c(), t = yt();
    },
    m(r, i) {
      n && n.m(r, i), C(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? n ? n.p(r, i) : (n = wi(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && k(t), n && n.d(r);
    }
  };
}
function Bi(e) {
  let t, n;
  return {
    c() {
      t = Pe("p"), n = q(
        /*loading_text*/
        e[9]
      ), Se(t, "class", "loading svelte-1txqlrd");
    },
    m(r, i) {
      C(r, t, i), Qe(t, n);
    },
    p(r, i) {
      i[0] & /*loading_text*/
      512 && me(
        n,
        /*loading_text*/
        r[9]
      );
    },
    d(r) {
      r && k(t);
    }
  };
}
function Fc(e) {
  let t, n, r, i, s;
  const l = [Nc, Pc], u = [];
  function o(a, f) {
    return (
      /*status*/
      a[4] === "pending" ? 0 : (
        /*status*/
        a[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = o(e)) && (r = u[n] = l[n](e)), {
    c() {
      t = Pe("div"), r && r.c(), Se(t, "class", i = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1txqlrd"), _e(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), _e(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), _e(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), _e(
        t,
        "border",
        /*border*/
        e[12]
      ), xe(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), xe(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(a, f) {
      C(a, t, f), ~n && u[n].m(t, null), e[31](t), s = !0;
    },
    p(a, f) {
      let c = n;
      n = o(a), n === c ? ~n && u[n].p(a, f) : (r && (ks(), gt(u[c], 1, 1, () => {
        u[c] = null;
      }), Bs()), ~n ? (r = u[n], r ? r.p(a, f) : (r = u[n] = l[n](a), r.c()), pt(r, 1), r.m(t, null)) : r = null), (!s || f[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      a[8] + " " + /*show_progress*/
      a[6] + " svelte-1txqlrd")) && Se(t, "class", i), (!s || f[0] & /*variant, show_progress, status, show_progress*/
      336) && _e(t, "hide", !/*status*/
      a[4] || /*status*/
      a[4] === "complete" || /*show_progress*/
      a[6] === "hidden"), (!s || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && _e(
        t,
        "translucent",
        /*variant*/
        a[8] === "center" && /*status*/
        (a[4] === "pending" || /*status*/
        a[4] === "error") || /*translucent*/
        a[11] || /*show_progress*/
        a[6] === "minimal"
      ), (!s || f[0] & /*variant, show_progress, status*/
      336) && _e(
        t,
        "generating",
        /*status*/
        a[4] === "generating"
      ), (!s || f[0] & /*variant, show_progress, border*/
      4416) && _e(
        t,
        "border",
        /*border*/
        a[12]
      ), f[0] & /*absolute*/
      1024 && xe(
        t,
        "position",
        /*absolute*/
        a[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && xe(
        t,
        "padding",
        /*absolute*/
        a[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(a) {
      s || (pt(r), s = !0);
    },
    o(a) {
      gt(r), s = !1;
    },
    d(a) {
      a && k(t), ~n && u[n].d(), e[31](null);
    }
  };
}
let zt = [], Nn = !1;
async function Gc(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (zt.push(e), !Nn)
      Nn = !0;
    else
      return;
    await Hc(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let r = 0; r < zt.length; r++) {
        const s = zt[r].getBoundingClientRect();
        (r === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = r);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Nn = !1, zt = [];
    });
  }
}
function qc(e, t, n) {
  let r, { $$slots: i = {}, $$scope: s } = t, { i18n: l } = t, { eta: u = null } = t, { queue_position: o } = t, { queue_size: a } = t, { status: f } = t, { scroll_to_output: c = !1 } = t, { timer: _ = !0 } = t, { show_progress: h = "full" } = t, { message: d = null } = t, { progress: b = null } = t, { variant: y = "default" } = t, { loading_text: v = "Loading..." } = t, { absolute: S = !0 } = t, { translucent: p = !1 } = t, { border: A = !1 } = t, { autoscroll: T } = t, w, j = !1, B = 0, H = 0, Z = null, le = null, Ge = 0, $ = null, Ae, oe = null, qe = !0;
  const wt = () => {
    n(0, u = n(26, Z = n(19, Be = null))), n(24, B = performance.now()), n(25, H = 0), j = !0, Le();
  };
  function Le() {
    requestAnimationFrame(() => {
      n(25, H = (performance.now() - B) / 1e3), j && Le();
    });
  }
  function rt() {
    n(25, H = 0), n(0, u = n(26, Z = n(19, Be = null))), j && (j = !1);
  }
  kc(() => {
    j && rt();
  });
  let Be = null;
  function m(g) {
    hi[g ? "unshift" : "push"](() => {
      oe = g, n(16, oe), n(7, b), n(14, $), n(15, Ae);
    });
  }
  function N(g) {
    hi[g ? "unshift" : "push"](() => {
      w = g, n(13, w);
    });
  }
  return e.$$set = (g) => {
    "i18n" in g && n(1, l = g.i18n), "eta" in g && n(0, u = g.eta), "queue_position" in g && n(2, o = g.queue_position), "queue_size" in g && n(3, a = g.queue_size), "status" in g && n(4, f = g.status), "scroll_to_output" in g && n(21, c = g.scroll_to_output), "timer" in g && n(5, _ = g.timer), "show_progress" in g && n(6, h = g.show_progress), "message" in g && n(22, d = g.message), "progress" in g && n(7, b = g.progress), "variant" in g && n(8, y = g.variant), "loading_text" in g && n(9, v = g.loading_text), "absolute" in g && n(10, S = g.absolute), "translucent" in g && n(11, p = g.translucent), "border" in g && n(12, A = g.border), "autoscroll" in g && n(23, T = g.autoscroll), "$$scope" in g && n(28, s = g.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (u === null && n(0, u = Z), u != null && Z !== u && (n(27, le = (performance.now() - B) / 1e3 + u), n(19, Be = le.toFixed(1)), n(26, Z = u))), e.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, Ge = le === null || le <= 0 || !H ? null : Math.min(H / le, 1)), e.$$.dirty[0] & /*progress*/
    128 && b != null && n(18, qe = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (b != null ? n(14, $ = b.map((g) => {
      if (g.index != null && g.length != null)
        return g.index / g.length;
      if (g.progress != null)
        return g.progress;
    })) : n(14, $ = null), $ ? (n(15, Ae = $[$.length - 1]), oe && (Ae === 0 ? n(16, oe.style.transition = "0", oe) : n(16, oe.style.transition = "150ms", oe))) : n(15, Ae = void 0)), e.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? wt() : rt()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && w && c && (f === "pending" || f === "complete") && Gc(w, T), e.$$.dirty[0] & /*status, message*/
    4194320, e.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, r = H.toFixed(1));
  }, [
    u,
    l,
    o,
    a,
    f,
    _,
    h,
    b,
    y,
    v,
    S,
    p,
    A,
    w,
    $,
    Ae,
    oe,
    Ge,
    qe,
    Be,
    r,
    c,
    d,
    T,
    B,
    H,
    Z,
    le,
    s,
    i,
    m,
    N
  ];
}
class Cs extends gc {
  constructor(t) {
    super(), Sc(
      this,
      t,
      qc,
      Fc,
      Ac,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: jc,
  append: Vc,
  attr: Tt,
  detach: Ps,
  element: Hi,
  empty: zc,
  init: Xc,
  insert: Ns,
  noop: ki,
  safe_not_equal: Wc,
  src_url_equal: Ci,
  toggle_class: ot
} = window.__gradio__svelte__internal;
function Pi(e) {
  let t, n, r;
  return {
    c() {
      t = Hi("div"), n = Hi("img"), Ci(n.src, r = /*samples_dir*/
      e[1] + /*value*/
      e[0].path) || Tt(n, "src", r), Tt(n, "alt", ""), Tt(n, "class", "svelte-giydt1"), Tt(t, "class", "container svelte-giydt1"), ot(
        t,
        "table",
        /*type*/
        e[2] === "table"
      ), ot(
        t,
        "gallery",
        /*type*/
        e[2] === "gallery"
      ), ot(
        t,
        "selected",
        /*selected*/
        e[3]
      );
    },
    m(i, s) {
      Ns(i, t, s), Vc(t, n);
    },
    p(i, s) {
      s & /*samples_dir, value*/
      3 && !Ci(n.src, r = /*samples_dir*/
      i[1] + /*value*/
      i[0].path) && Tt(n, "src", r), s & /*type*/
      4 && ot(
        t,
        "table",
        /*type*/
        i[2] === "table"
      ), s & /*type*/
      4 && ot(
        t,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), s & /*selected*/
      8 && ot(
        t,
        "selected",
        /*selected*/
        i[3]
      );
    },
    d(i) {
      i && Ps(t);
    }
  };
}
function Zc(e) {
  let t, n = (
    /*value*/
    e[0] && Pi(e)
  );
  return {
    c() {
      n && n.c(), t = zc();
    },
    m(r, i) {
      n && n.m(r, i), Ns(r, t, i);
    },
    p(r, [i]) {
      /*value*/
      r[0] ? n ? n.p(r, i) : (n = Pi(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: ki,
    o: ki,
    d(r) {
      r && Ps(t), n && n.d(r);
    }
  };
}
function Jc(e, t, n) {
  let { value: r } = t, { samples_dir: i } = t, { type: s } = t, { selected: l = !1 } = t;
  return e.$$set = (u) => {
    "value" in u && n(0, r = u.value), "samples_dir" in u && n(1, i = u.samples_dir), "type" in u && n(2, s = u.type), "selected" in u && n(3, l = u.selected);
  }, [r, i, s, l];
}
class b0 extends jc {
  constructor(t) {
    super(), Xc(this, t, Jc, Zc, Wc, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: Qc,
  add_flush_callback: Yc,
  assign: Is,
  bind: Kc,
  binding_callbacks: $c,
  check_outros: e0,
  create_component: $e,
  destroy_component: et,
  detach: gr,
  empty: t0,
  flush: te,
  get_spread_object: Ls,
  get_spread_update: Os,
  group_outros: n0,
  init: r0,
  insert: br,
  mount_component: tt,
  safe_not_equal: i0,
  space: Ms,
  transition_in: Ne,
  transition_out: Ie
} = window.__gradio__svelte__internal;
function s0(e) {
  let t, n;
  return t = new Li({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: (
        /*_value*/
        e[13] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        e[14] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[1]
      ),
      elem_classes: (
        /*elem_classes*/
        e[2]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[7]
      ),
      scale: (
        /*scale*/
        e[8]
      ),
      min_width: (
        /*min_width*/
        e[9]
      ),
      $$slots: { default: [a0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      $e(t.$$.fragment);
    },
    m(r, i) {
      tt(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*visible*/
      8 && (s.visible = /*visible*/
      r[3]), i & /*_value*/
      8192 && (s.variant = /*_value*/
      r[13] === null ? "dashed" : "solid"), i & /*dragging*/
      16384 && (s.border_mode = /*dragging*/
      r[14] ? "focus" : "base"), i & /*elem_id*/
      2 && (s.elem_id = /*elem_id*/
      r[1]), i & /*elem_classes*/
      4 && (s.elem_classes = /*elem_classes*/
      r[2]), i & /*container*/
      128 && (s.container = /*container*/
      r[7]), i & /*scale*/
      256 && (s.scale = /*scale*/
      r[8]), i & /*min_width*/
      512 && (s.min_width = /*min_width*/
      r[9]), i & /*$$scope, root, label, show_label, gradio, value, dragging, loading_status*/
      2118769 && (s.$$scope = { dirty: i, ctx: r }), t.$set(s);
    },
    i(r) {
      n || (Ne(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      et(t, r);
    }
  };
}
function l0(e) {
  let t, n;
  return t = new Li({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        e[14] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[1]
      ),
      elem_classes: (
        /*elem_classes*/
        e[2]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[7]
      ),
      scale: (
        /*scale*/
        e[8]
      ),
      min_width: (
        /*min_width*/
        e[9]
      ),
      $$slots: { default: [u0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      $e(t.$$.fragment);
    },
    m(r, i) {
      tt(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*visible*/
      8 && (s.visible = /*visible*/
      r[3]), i & /*dragging*/
      16384 && (s.border_mode = /*dragging*/
      r[14] ? "focus" : "base"), i & /*elem_id*/
      2 && (s.elem_id = /*elem_id*/
      r[1]), i & /*elem_classes*/
      4 && (s.elem_classes = /*elem_classes*/
      r[2]), i & /*container*/
      128 && (s.container = /*container*/
      r[7]), i & /*scale*/
      256 && (s.scale = /*scale*/
      r[8]), i & /*min_width*/
      512 && (s.min_width = /*min_width*/
      r[9]), i & /*$$scope, _value, label, show_label, gradio, loading_status*/
      2110560 && (s.$$scope = { dirty: i, ctx: r }), t.$set(s);
    },
    i(r) {
      n || (Ne(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      et(t, r);
    }
  };
}
function o0(e) {
  let t, n;
  return t = new No({
    props: {
      i18n: (
        /*gradio*/
        e[12].i18n
      ),
      mode: "short"
    }
  }), {
    c() {
      $e(t.$$.fragment);
    },
    m(r, i) {
      tt(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*gradio*/
      4096 && (s.i18n = /*gradio*/
      r[12].i18n), t.$set(s);
    },
    i(r) {
      n || (Ne(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(t.$$.fragment, r), n = !1;
    },
    d(r) {
      et(t, r);
    }
  };
}
function a0(e) {
  let t, n, r, i, s;
  const l = [
    {
      autoscroll: (
        /*gradio*/
        e[12].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[12].i18n
    ) },
    /*loading_status*/
    e[10]
  ];
  let u = {};
  for (let f = 0; f < l.length; f += 1)
    u = Is(u, l[f]);
  t = new Cs({ props: u });
  function o(f) {
    e[17](f);
  }
  let a = {
    root: (
      /*root*/
      e[4]
    ),
    label: (
      /*label*/
      e[5]
    ),
    show_label: (
      /*show_label*/
      e[6]
    ),
    i18n: (
      /*gradio*/
      e[12].i18n
    ),
    $$slots: { default: [o0] },
    $$scope: { ctx: e }
  };
  return (
    /*value*/
    e[0] !== void 0 && (a.value = /*value*/
    e[0]), r = new lc({ props: a }), $c.push(() => Kc(r, "value", o)), r.$on(
      "clear",
      /*clear_handler*/
      e[18]
    ), r.$on(
      "drag",
      /*drag_handler*/
      e[19]
    ), r.$on(
      "upload",
      /*upload_handler*/
      e[20]
    ), {
      c() {
        $e(t.$$.fragment), n = Ms(), $e(r.$$.fragment);
      },
      m(f, c) {
        tt(t, f, c), br(f, n, c), tt(r, f, c), s = !0;
      },
      p(f, c) {
        const _ = c & /*gradio, loading_status*/
        5120 ? Os(l, [
          c & /*gradio*/
          4096 && {
            autoscroll: (
              /*gradio*/
              f[12].autoscroll
            )
          },
          c & /*gradio*/
          4096 && { i18n: (
            /*gradio*/
            f[12].i18n
          ) },
          c & /*loading_status*/
          1024 && Ls(
            /*loading_status*/
            f[10]
          )
        ]) : {};
        t.$set(_);
        const h = {};
        c & /*root*/
        16 && (h.root = /*root*/
        f[4]), c & /*label*/
        32 && (h.label = /*label*/
        f[5]), c & /*show_label*/
        64 && (h.show_label = /*show_label*/
        f[6]), c & /*gradio*/
        4096 && (h.i18n = /*gradio*/
        f[12].i18n), c & /*$$scope, gradio*/
        2101248 && (h.$$scope = { dirty: c, ctx: f }), !i && c & /*value*/
        1 && (i = !0, h.value = /*value*/
        f[0], Yc(() => i = !1)), r.$set(h);
      },
      i(f) {
        s || (Ne(t.$$.fragment, f), Ne(r.$$.fragment, f), s = !0);
      },
      o(f) {
        Ie(t.$$.fragment, f), Ie(r.$$.fragment, f), s = !1;
      },
      d(f) {
        f && gr(n), et(t, f), et(r, f);
      }
    }
  );
}
function u0(e) {
  let t, n, r, i;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        e[12].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[12].i18n
    ) },
    /*loading_status*/
    e[10]
  ];
  let l = {};
  for (let u = 0; u < s.length; u += 1)
    l = Is(l, s[u]);
  return t = new Cs({ props: l }), r = new ia({
    props: {
      value: (
        /*_value*/
        e[13]
      ),
      label: (
        /*label*/
        e[5]
      ),
      show_label: (
        /*show_label*/
        e[6]
      ),
      i18n: (
        /*gradio*/
        e[12].i18n
      )
    }
  }), {
    c() {
      $e(t.$$.fragment), n = Ms(), $e(r.$$.fragment);
    },
    m(u, o) {
      tt(t, u, o), br(u, n, o), tt(r, u, o), i = !0;
    },
    p(u, o) {
      const a = o & /*gradio, loading_status*/
      5120 ? Os(s, [
        o & /*gradio*/
        4096 && {
          autoscroll: (
            /*gradio*/
            u[12].autoscroll
          )
        },
        o & /*gradio*/
        4096 && { i18n: (
          /*gradio*/
          u[12].i18n
        ) },
        o & /*loading_status*/
        1024 && Ls(
          /*loading_status*/
          u[10]
        )
      ]) : {};
      t.$set(a);
      const f = {};
      o & /*_value*/
      8192 && (f.value = /*_value*/
      u[13]), o & /*label*/
      32 && (f.label = /*label*/
      u[5]), o & /*show_label*/
      64 && (f.show_label = /*show_label*/
      u[6]), o & /*gradio*/
      4096 && (f.i18n = /*gradio*/
      u[12].i18n), r.$set(f);
    },
    i(u) {
      i || (Ne(t.$$.fragment, u), Ne(r.$$.fragment, u), i = !0);
    },
    o(u) {
      Ie(t.$$.fragment, u), Ie(r.$$.fragment, u), i = !1;
    },
    d(u) {
      u && gr(n), et(t, u), et(r, u);
    }
  };
}
function f0(e) {
  let t, n, r, i;
  const s = [l0, s0], l = [];
  function u(o, a) {
    return (
      /*interactive*/
      o[11] ? 1 : 0
    );
  }
  return t = u(e), n = l[t] = s[t](e), {
    c() {
      n.c(), r = t0();
    },
    m(o, a) {
      l[t].m(o, a), br(o, r, a), i = !0;
    },
    p(o, [a]) {
      let f = t;
      t = u(o), t === f ? l[t].p(o, a) : (n0(), Ie(l[f], 1, 1, () => {
        l[f] = null;
      }), e0(), n = l[t], n ? n.p(o, a) : (n = l[t] = s[t](o), n.c()), Ne(n, 1), n.m(r.parentNode, r));
    },
    i(o) {
      i || (Ne(n), i = !0);
    },
    o(o) {
      Ie(n), i = !1;
    },
    d(o) {
      o && gr(r), l[t].d(o);
    }
  };
}
function c0(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], s = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = s(n)) : (i === "call" || i === "optionalCall") && (n = s((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function h0(e, t, n) {
  let r, i, { elem_id: s = "" } = t, { elem_classes: l = [] } = t, { visible: u = !0 } = t, { value: o = null } = t, { root: a } = t, { proxy_url: f } = t, { label: c } = t, { show_label: _ } = t, { container: h = !0 } = t, { scale: d = null } = t, { min_width: b = void 0 } = t, { loading_status: y } = t, { interactive: v } = t, { gradio: S } = t, p;
  function A(B) {
    o = B, n(0, o);
  }
  const T = () => S.dispatch("clear"), w = ({ detail: B }) => n(14, p = B), j = () => S.dispatch("upload");
  return e.$$set = (B) => {
    "elem_id" in B && n(1, s = B.elem_id), "elem_classes" in B && n(2, l = B.elem_classes), "visible" in B && n(3, u = B.visible), "value" in B && n(0, o = B.value), "root" in B && n(4, a = B.root), "proxy_url" in B && n(15, f = B.proxy_url), "label" in B && n(5, c = B.label), "show_label" in B && n(6, _ = B.show_label), "container" in B && n(7, h = B.container), "scale" in B && n(8, d = B.scale), "min_width" in B && n(9, b = B.min_width), "loading_status" in B && n(10, y = B.loading_status), "interactive" in B && n(11, v = B.interactive), "gradio" in B && n(12, S = B.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, root, proxy_url*/
    32785 && n(13, r = Ce(o, a, f)), e.$$.dirty & /*_value*/
    8192 && n(16, i = c0([r, "optionalAccess", (B) => B.url])), e.$$.dirty & /*url, gradio*/
    69632 && S.dispatch("change");
  }, [
    o,
    s,
    l,
    u,
    a,
    c,
    _,
    h,
    d,
    b,
    y,
    v,
    S,
    r,
    p,
    f,
    i,
    A,
    T,
    w,
    j
  ];
}
class v0 extends Qc {
  constructor(t) {
    super(), r0(this, t, h0, f0, i0, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      root: 4,
      proxy_url: 15,
      label: 5,
      show_label: 6,
      container: 7,
      scale: 8,
      min_width: 9,
      loading_status: 10,
      interactive: 11,
      gradio: 12
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), te();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), te();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(t) {
    this.$$set({ visible: t }), te();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), te();
  }
  get root() {
    return this.$$.ctx[4];
  }
  set root(t) {
    this.$$set({ root: t }), te();
  }
  get proxy_url() {
    return this.$$.ctx[15];
  }
  set proxy_url(t) {
    this.$$set({ proxy_url: t }), te();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(t) {
    this.$$set({ label: t }), te();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), te();
  }
  get container() {
    return this.$$.ctx[7];
  }
  set container(t) {
    this.$$set({ container: t }), te();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(t) {
    this.$$set({ scale: t }), te();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), te();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), te();
  }
  get interactive() {
    return this.$$.ctx[11];
  }
  set interactive(t) {
    this.$$set({ interactive: t }), te();
  }
  get gradio() {
    return this.$$.ctx[12];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), te();
  }
}
export {
  b0 as BaseExample,
  lc as BaseImageUploader,
  ia as BaseStaticImage,
  v0 as default
};
