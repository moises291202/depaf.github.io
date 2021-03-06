!(function(t, e) {
  (t.fn.typeIt = function(e, n) {
    return this.each(function() {
      t(this).data("typeit", new t.fn.typeIt.tClass(t(this), e, n));
    });
  }),
    (t.fn.typeIt.tClass = function(e, n, i) {
      var a = this;
      (a.d = {
        strings: "Your default string.",
        speed: 100,
        lifeLike: !0,
        cursor: !0,
        cursorSpeed: 1e3,
        breakLines: !0,
        breakDelay: 750,
        startDelay: 250,
        loop: !1,
        loopDelay: 750,
        html: !0
      }),
        (a.dd = {
          strings: e.data("typeitStrings"),
          speed: e.data("typeitSpeed"),
          lifeLike: e.data("typeitLifelike"),
          cursor: e.data("typeitCursor"),
          cursorSpeed: e.data("typeitCursorspeed"),
          breakLines: e.data("typeitBreaklines"),
          breakDelay: e.data("typeitBreakdelay"),
          startDelay: e.data("typeitStartdelay"),
          loop: e.data("typeitLoop"),
          loopDelay: e.data("typeitLoopdelay"),
          html: e.data("typeitHtml")
        }),
        (a.s = t.extend({}, a.d, n, a.dd)),
        (a.el = e),
        (a.cb = i),
        a.valCB(a),
        a.elCheck(a),
        a.init(a, n);
    });
  var n = t.fn.typeIt.tClass.prototype;
  (n.init = function(t) {
    (t.CI = 0),
      (t.SEI = 0),
      (t.SI = 0),
      (t.SA = []),
      (t.BD = t.s.breakDelay),
      (t.span =
        '<span style="display:inline-block;width:0;height:0;overflow:hidden;">_</span>'),
      t.toArr(t),
      t.rake(t),
      t.el.html(
        '<span style="display:inline;position:relative;font:inherit;"></span>'
      ),
      (t.tel = t.el.find("span")),
      (t.insert = function(e) {
        t.tel.append(e);
      }),
      t.cursor(t),
      t.to(
        function() {
          t.type(t);
        }.bind(t),
        t.s.startDelay
      );
  }),
    (n.valCB = function(t) {
      t.cb = t.cb === e ? function() {} : t.cb;
    }),
    (n.to = function(t, e) {
      setTimeout(
        function() {
          t();
        }.bind(e),
        e
      );
    }),
    (n.elCheck = function(t) {
      t.el.html().length > 0 && (t.s.strings = t.el.html().trim());
    }),
    (n.toArr = function(t) {
      var e = t.s.strings;
      t.SA = e.constructor === Array ? e.slice(0) : e.split("<br>");
    }),
    (n.cursor = function(t) {
      if (t.s.cursor) {
        t.el.append('<i class="c">|</i>');
        var e = t.s.cursorSpeed;
        !(function n() {
          t.el
            .find(".c")
            .fadeTo(e / 2, 0)
            .fadeTo(e / 2, 1),
            t.to(n, e);
        })();
      }
    }),
    (n.rake = function(t) {
      for (var e = 0; e < t.SA.length; e++)
        if (((t.SA[e] = t.SA[e].split("")), t.s.html)) {
          t.tPos = [];
          var n = t.tPos;
          t.SEI = 0;
          for (var i, a = !1, r = 0; r < t.SA[e].length; r++)
            ("<" === t.SA[e][r] || "&" === t.SA[e][r]) &&
              ((n[0] = r), (a = "&" === t.SA[e][r] ? !0 : !1)),
              (">" === t.SA[e][r] || (";" === t.SA[e][r] && a)) &&
                ((n[1] = r),
                (r = 0),
                (i = t.SA[e].slice(n[0], n[1] + 1).join("")),
                t.SA[e].splice(n[0], n[1] - n[0] + 1, i),
                (a = !1));
        }
    }),
    (n.random = function(t) {
      var e = t.s.speed,
        n = e / 2;
      t.DT = t.s.lifeLike
        ? Math.abs(Math.random() * (e + n - (e - n)) + (e - n))
        : e;
    }),
    (n.type = function(t) {
      t.curStr = t.SA[t.SI];
      var e = t.curStr.length,
        n = t.SA.length;
      t.tTO = t.to(
        function() {
          t.random(t);
          var i = t.SA[t.SI][t.CI];
          -1 !== i.indexOf("<") &&
            -1 === i.indexOf("</") &&
            t.s.html &&
            t.makeNode(t, i),
            t.print(t, i),
            t.CI++,
            t.CI < e
              ? t.type(t)
              : n > 1
                ? ((t.CI = 0),
                  t.SI + 1 === n
                    ? t.end(t)
                    : t.SI + 1 < n && !t.s.breakLines
                      ? t.to(
                          function() {
                            t["delete"](t);
                          }.bind(t),
                          t.BD
                        )
                      : t.SI + 1 < n &&
                        t.s.breakLines &&
                        (t.SI++,
                        t.to(
                          function() {
                            t.insert("<br>"),
                              t.to(
                                function() {
                                  t.type(t);
                                }.bind(t),
                                t.BD
                              );
                          }.bind(t),
                          t.BD
                        )))
                : t.end(t);
        }.bind(t),
        t.DT
      );
    }),
    (n.makeNode = function(e, n) {
      (e.SEI = 0), (e.tPos[0] = e.CI + 1);
      for (var i = e.CI; i < e.curStr.length; i++)
        if (-1 !== e.curStr[i].indexOf("</")) {
          e.tPos[1] = i - 1;
          break;
        }
      (e.tag = t(t.parseHTML(n))), e.print(e, e.tag), (e.inTag = !0);
    }),
    (n.end = function(t) {
      t.s.loop
        ? t.to(
            function() {
              t["delete"](t);
            }.bind(t),
            t.s.loopDelay
          )
        : t.cb();
    }),
    (n.print = function(e, n) {
      if (e.inTag) {
        var i = e.curStr[e.tPos[0] + e.SEI];
        t(e.tag, e.el)
          .last()
          .append(i),
          (e.inTag = e.tPos[1] === e.tPos[0] + e.SEI - 1 ? !1 : !0),
          e.SEI++;
      } else this.insert(n);
    }),
    (n["delete"] = function(t, e) {
      t.dTO = t.to(
        function() {
          t.random(t);
          for (var n = t.tel.html().split(""), i = n.length - 1; i > -1; i--) {
            if ((">" !== n[i] && ";" !== n[i]) || !t.s.html) {
              n.splice(i, 1);
              break;
            }
            for (var a = i; a > -1; a--) {
              if ("<br>" === n.slice(a - 3, a + 1).join("")) {
                n.splice(a - 3, 4);
                break;
              }
              if ("&" === n[a]) {
                n.splice(a, i - a + 1);
                break;
              }
              if ("<" === n[a] && ">" !== n[a - 1]) {
                if (";" === n[a - 1])
                  for (var r = a - 1; r > -1; r--)
                    if ("&" === n[r]) {
                      n.splice(r, a - r);
                      break;
                    }
                n.splice(a - 1, 1);
                break;
              }
            }
            break;
          }
          t.tel.html(n.join("")),
            t.tel.text().length <= 1 && t.tel.html(""),
            t.tel.text().length > 0
              ? t["delete"](t)
              : t.SA[t.SI + 1] !== e
                ? (t.SI++, t.type(t))
                : t.s.loop && t.init(t);
        }.bind(t),
        t.DT / 3
      );
    });
})(jQuery);
