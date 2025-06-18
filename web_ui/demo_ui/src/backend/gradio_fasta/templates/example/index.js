const {
  SvelteComponent: v,
  append: y,
  attr: f,
  detach: g,
  element: r,
  empty: b,
  init: p,
  insert: o,
  noop: d,
  safe_not_equal: h,
  src_url_equal: u,
  toggle_class: _
} = window.__gradio__svelte__internal;
function m(s) {
  let l, e, t;
  return {
    c() {
      l = r("div"), e = r("img"), u(e.src, t = /*samples_dir*/
      s[1] + /*value*/
      s[0].path) || f(e, "src", t), f(e, "alt", ""), f(e, "class", "svelte-giydt1"), f(l, "class", "container svelte-giydt1"), _(
        l,
        "table",
        /*type*/
        s[2] === "table"
      ), _(
        l,
        "gallery",
        /*type*/
        s[2] === "gallery"
      ), _(
        l,
        "selected",
        /*selected*/
        s[3]
      );
    },
    m(i, a) {
      o(i, l, a), y(l, e);
    },
    p(i, a) {
      a & /*samples_dir, value*/
      3 && !u(e.src, t = /*samples_dir*/
      i[1] + /*value*/
      i[0].path) && f(e, "src", t), a & /*type*/
      4 && _(
        l,
        "table",
        /*type*/
        i[2] === "table"
      ), a & /*type*/
      4 && _(
        l,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), a & /*selected*/
      8 && _(
        l,
        "selected",
        /*selected*/
        i[3]
      );
    },
    d(i) {
      i && g(l);
    }
  };
}
function k(s) {
  let l, e = (
    /*value*/
    s[0] && m(s)
  );
  return {
    c() {
      e && e.c(), l = b();
    },
    m(t, i) {
      e && e.m(t, i), o(t, l, i);
    },
    p(t, [i]) {
      /*value*/
      t[0] ? e ? e.p(t, i) : (e = m(t), e.c(), e.m(l.parentNode, l)) : e && (e.d(1), e = null);
    },
    i: d,
    o: d,
    d(t) {
      t && g(l), e && e.d(t);
    }
  };
}
function q(s, l, e) {
  let { value: t } = l, { samples_dir: i } = l, { type: a } = l, { selected: c = !1 } = l;
  return s.$$set = (n) => {
    "value" in n && e(0, t = n.value), "samples_dir" in n && e(1, i = n.samples_dir), "type" in n && e(2, a = n.type), "selected" in n && e(3, c = n.selected);
  }, [t, i, a, c];
}
class w extends v {
  constructor(l) {
    super(), p(this, l, q, k, h, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  w as default
};
