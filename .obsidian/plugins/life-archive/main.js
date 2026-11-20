"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    })(exports2, (function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports2, module2) {
    !(function(t, i) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    })(exports2, (function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = (function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          })(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2) return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
          } else o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "node_modules/dayjs/plugin/timezone.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    })(exports2, (function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r2 = (function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
            return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
          })(n2, i2);
          return r2.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r2 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
            c >= 0 && (r2[c] = parseInt(m, 10));
          }
          var d = r2[3], l = 24 === d ? 0 : d, h = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r);
          var n2, i2 = this.utcOffset(), a2 = this.toDate(), u2 = a2.toLocaleString("en-US", { timeZone: t2 }), f2 = Math.round((a2 - new Date(u2)) / 1e3 / 60), s2 = 15 * -Math.round(a2.getTimezoneOffset() / 15) - f2;
          if (!Number(s2)) n2 = this.utcOffset(0, e2);
          else if (n2 = o(u2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(s2, true), e2) {
            var m = n2.utcOffset();
            n2 = n2.add(i2 - m, "minute");
          }
          return n2.$x.$timezone = t2, n2;
        }, f.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find((function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          }));
          return n2 && n2.value;
        };
        var s = f.startOf;
        f.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone) return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u(+o(), a2);
          if ("string" != typeof t2) return o(t2).tz(a2);
          var s2 = (function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2) return [i3, e3];
            var r2 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
          })(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r = t2;
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/isoWeek.js
var require_isoWeek = __commonJS({
  "node_modules/dayjs/plugin/isoWeek.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isoWeek = t();
    })(exports2, (function() {
      "use strict";
      var e = "day";
      return function(t, i, s) {
        var a = function(t2) {
          return t2.add(4 - t2.isoWeekday(), e);
        }, d = i.prototype;
        d.isoWeekYear = function() {
          return a(this).year();
        }, d.isoWeek = function(t2) {
          if (!this.$utils().u(t2)) return this.add(7 * (t2 - this.isoWeek()), e);
          var i2, d2, n2, o, r = a(this), u = (i2 = this.isoWeekYear(), d2 = this.$u, n2 = (d2 ? s.utc : s)().year(i2).startOf("year"), o = 4 - n2.isoWeekday(), n2.isoWeekday() > 4 && (o += 7), n2.add(o, e));
          return r.diff(u, "week") + 1;
        }, d.isoWeekday = function(e2) {
          return this.$utils().u(e2) ? this.day() || 7 : this.day(this.day() % 7 ? e2 : e2 - 7);
        };
        var n = d.startOf;
        d.startOf = function(e2, t2) {
          var i2 = this.$utils(), s2 = !!i2.u(t2) || t2;
          return "isoweek" === i2.p(e2) ? s2 ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : n.bind(this)(e2, t2);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/quarterOfYear.js
var require_quarterOfYear = __commonJS({
  "node_modules/dayjs/plugin/quarterOfYear.js"(exports2, module2) {
    !(function(t, n) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_quarterOfYear = n();
    })(exports2, (function() {
      "use strict";
      var t = "month", n = "quarter";
      return function(e, i) {
        var r = i.prototype;
        r.quarter = function(t2) {
          return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
        };
        var s = r.add;
        r.add = function(e2, i2) {
          return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
        };
        var u = r.startOf;
        r.startOf = function(e2, i2) {
          var r2 = this.$utils(), s2 = !!r2.u(i2) || i2;
          if (r2.p(e2) === n) {
            var o = this.quarter() - 1;
            return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
          }
          return u.bind(this)(e2, i2);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    })(exports2, (function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = (function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        })(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map((function(e3) {
          return e3.slice(0, 3);
        }))).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t3, n4) {
            return t3 || n4.slice(1);
          }));
        }))).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return (function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          })(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = (function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            })(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    }));
  }
});

// node_modules/yaml/dist/nodes/identity.js
var require_identity = __commonJS({
  "node_modules/yaml/dist/nodes/identity.js"(exports2) {
    "use strict";
    var ALIAS = Symbol.for("yaml.alias");
    var DOC = Symbol.for("yaml.document");
    var MAP = Symbol.for("yaml.map");
    var PAIR = Symbol.for("yaml.pair");
    var SCALAR = Symbol.for("yaml.scalar");
    var SEQ = Symbol.for("yaml.seq");
    var NODE_TYPE = Symbol.for("yaml.node.type");
    var isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
    var isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
    var isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
    var isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
    var isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
    var isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
    function isCollection(node) {
      if (node && typeof node === "object")
        switch (node[NODE_TYPE]) {
          case MAP:
          case SEQ:
            return true;
        }
      return false;
    }
    function isNode(node) {
      if (node && typeof node === "object")
        switch (node[NODE_TYPE]) {
          case ALIAS:
          case MAP:
          case SCALAR:
          case SEQ:
            return true;
        }
      return false;
    }
    var hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
    exports2.ALIAS = ALIAS;
    exports2.DOC = DOC;
    exports2.MAP = MAP;
    exports2.NODE_TYPE = NODE_TYPE;
    exports2.PAIR = PAIR;
    exports2.SCALAR = SCALAR;
    exports2.SEQ = SEQ;
    exports2.hasAnchor = hasAnchor;
    exports2.isAlias = isAlias;
    exports2.isCollection = isCollection;
    exports2.isDocument = isDocument;
    exports2.isMap = isMap;
    exports2.isNode = isNode;
    exports2.isPair = isPair;
    exports2.isScalar = isScalar;
    exports2.isSeq = isSeq;
  }
});

// node_modules/yaml/dist/visit.js
var require_visit = __commonJS({
  "node_modules/yaml/dist/visit.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var BREAK = Symbol("break visit");
    var SKIP = Symbol("skip children");
    var REMOVE = Symbol("remove node");
    function visit(node, visitor) {
      const visitor_ = initVisitor(visitor);
      if (identity.isDocument(node)) {
        const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
        if (cd === REMOVE)
          node.contents = null;
      } else
        visit_(null, node, visitor_, Object.freeze([]));
    }
    visit.BREAK = BREAK;
    visit.SKIP = SKIP;
    visit.REMOVE = REMOVE;
    function visit_(key, node, visitor, path) {
      const ctrl = callVisitor(key, node, visitor, path);
      if (identity.isNode(ctrl) || identity.isPair(ctrl)) {
        replaceNode(key, path, ctrl);
        return visit_(key, ctrl, visitor, path);
      }
      if (typeof ctrl !== "symbol") {
        if (identity.isCollection(node)) {
          path = Object.freeze(path.concat(node));
          for (let i = 0; i < node.items.length; ++i) {
            const ci = visit_(i, node.items[i], visitor, path);
            if (typeof ci === "number")
              i = ci - 1;
            else if (ci === BREAK)
              return BREAK;
            else if (ci === REMOVE) {
              node.items.splice(i, 1);
              i -= 1;
            }
          }
        } else if (identity.isPair(node)) {
          path = Object.freeze(path.concat(node));
          const ck = visit_("key", node.key, visitor, path);
          if (ck === BREAK)
            return BREAK;
          else if (ck === REMOVE)
            node.key = null;
          const cv = visit_("value", node.value, visitor, path);
          if (cv === BREAK)
            return BREAK;
          else if (cv === REMOVE)
            node.value = null;
        }
      }
      return ctrl;
    }
    async function visitAsync(node, visitor) {
      const visitor_ = initVisitor(visitor);
      if (identity.isDocument(node)) {
        const cd = await visitAsync_(null, node.contents, visitor_, Object.freeze([node]));
        if (cd === REMOVE)
          node.contents = null;
      } else
        await visitAsync_(null, node, visitor_, Object.freeze([]));
    }
    visitAsync.BREAK = BREAK;
    visitAsync.SKIP = SKIP;
    visitAsync.REMOVE = REMOVE;
    async function visitAsync_(key, node, visitor, path) {
      const ctrl = await callVisitor(key, node, visitor, path);
      if (identity.isNode(ctrl) || identity.isPair(ctrl)) {
        replaceNode(key, path, ctrl);
        return visitAsync_(key, ctrl, visitor, path);
      }
      if (typeof ctrl !== "symbol") {
        if (identity.isCollection(node)) {
          path = Object.freeze(path.concat(node));
          for (let i = 0; i < node.items.length; ++i) {
            const ci = await visitAsync_(i, node.items[i], visitor, path);
            if (typeof ci === "number")
              i = ci - 1;
            else if (ci === BREAK)
              return BREAK;
            else if (ci === REMOVE) {
              node.items.splice(i, 1);
              i -= 1;
            }
          }
        } else if (identity.isPair(node)) {
          path = Object.freeze(path.concat(node));
          const ck = await visitAsync_("key", node.key, visitor, path);
          if (ck === BREAK)
            return BREAK;
          else if (ck === REMOVE)
            node.key = null;
          const cv = await visitAsync_("value", node.value, visitor, path);
          if (cv === BREAK)
            return BREAK;
          else if (cv === REMOVE)
            node.value = null;
        }
      }
      return ctrl;
    }
    function initVisitor(visitor) {
      if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
        return Object.assign({
          Alias: visitor.Node,
          Map: visitor.Node,
          Scalar: visitor.Node,
          Seq: visitor.Node
        }, visitor.Value && {
          Map: visitor.Value,
          Scalar: visitor.Value,
          Seq: visitor.Value
        }, visitor.Collection && {
          Map: visitor.Collection,
          Seq: visitor.Collection
        }, visitor);
      }
      return visitor;
    }
    function callVisitor(key, node, visitor, path) {
      if (typeof visitor === "function")
        return visitor(key, node, path);
      if (identity.isMap(node))
        return visitor.Map?.(key, node, path);
      if (identity.isSeq(node))
        return visitor.Seq?.(key, node, path);
      if (identity.isPair(node))
        return visitor.Pair?.(key, node, path);
      if (identity.isScalar(node))
        return visitor.Scalar?.(key, node, path);
      if (identity.isAlias(node))
        return visitor.Alias?.(key, node, path);
      return void 0;
    }
    function replaceNode(key, path, node) {
      const parent = path[path.length - 1];
      if (identity.isCollection(parent)) {
        parent.items[key] = node;
      } else if (identity.isPair(parent)) {
        if (key === "key")
          parent.key = node;
        else
          parent.value = node;
      } else if (identity.isDocument(parent)) {
        parent.contents = node;
      } else {
        const pt = identity.isAlias(parent) ? "alias" : "scalar";
        throw new Error(`Cannot replace node with ${pt} parent`);
      }
    }
    exports2.visit = visit;
    exports2.visitAsync = visitAsync;
  }
});

// node_modules/yaml/dist/doc/directives.js
var require_directives = __commonJS({
  "node_modules/yaml/dist/doc/directives.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var visit = require_visit();
    var escapeChars = {
      "!": "%21",
      ",": "%2C",
      "[": "%5B",
      "]": "%5D",
      "{": "%7B",
      "}": "%7D"
    };
    var escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
    var Directives = class _Directives {
      constructor(yaml, tags) {
        this.docStart = null;
        this.docEnd = false;
        this.yaml = Object.assign({}, _Directives.defaultYaml, yaml);
        this.tags = Object.assign({}, _Directives.defaultTags, tags);
      }
      clone() {
        const copy = new _Directives(this.yaml, this.tags);
        copy.docStart = this.docStart;
        return copy;
      }
      /**
       * During parsing, get a Directives instance for the current document and
       * update the stream state according to the current version's spec.
       */
      atDocument() {
        const res = new _Directives(this.yaml, this.tags);
        switch (this.yaml.version) {
          case "1.1":
            this.atNextDocument = true;
            break;
          case "1.2":
            this.atNextDocument = false;
            this.yaml = {
              explicit: _Directives.defaultYaml.explicit,
              version: "1.2"
            };
            this.tags = Object.assign({}, _Directives.defaultTags);
            break;
        }
        return res;
      }
      /**
       * @param onError - May be called even if the action was successful
       * @returns `true` on success
       */
      add(line, onError) {
        if (this.atNextDocument) {
          this.yaml = { explicit: _Directives.defaultYaml.explicit, version: "1.1" };
          this.tags = Object.assign({}, _Directives.defaultTags);
          this.atNextDocument = false;
        }
        const parts = line.trim().split(/[ \t]+/);
        const name = parts.shift();
        switch (name) {
          case "%TAG": {
            if (parts.length !== 2) {
              onError(0, "%TAG directive should contain exactly two parts");
              if (parts.length < 2)
                return false;
            }
            const [handle, prefix] = parts;
            this.tags[handle] = prefix;
            return true;
          }
          case "%YAML": {
            this.yaml.explicit = true;
            if (parts.length !== 1) {
              onError(0, "%YAML directive should contain exactly one part");
              return false;
            }
            const [version] = parts;
            if (version === "1.1" || version === "1.2") {
              this.yaml.version = version;
              return true;
            } else {
              const isValid = /^\d+\.\d+$/.test(version);
              onError(6, `Unsupported YAML version ${version}`, isValid);
              return false;
            }
          }
          default:
            onError(0, `Unknown directive ${name}`, true);
            return false;
        }
      }
      /**
       * Resolves a tag, matching handles to those defined in %TAG directives.
       *
       * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
       *   `'!local'` tag, or `null` if unresolvable.
       */
      tagName(source, onError) {
        if (source === "!")
          return "!";
        if (source[0] !== "!") {
          onError(`Not a valid tag: ${source}`);
          return null;
        }
        if (source[1] === "<") {
          const verbatim = source.slice(2, -1);
          if (verbatim === "!" || verbatim === "!!") {
            onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
            return null;
          }
          if (source[source.length - 1] !== ">")
            onError("Verbatim tags must end with a >");
          return verbatim;
        }
        const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
        if (!suffix)
          onError(`The ${source} tag has no suffix`);
        const prefix = this.tags[handle];
        if (prefix) {
          try {
            return prefix + decodeURIComponent(suffix);
          } catch (error) {
            onError(String(error));
            return null;
          }
        }
        if (handle === "!")
          return source;
        onError(`Could not resolve tag: ${source}`);
        return null;
      }
      /**
       * Given a fully resolved tag, returns its printable string form,
       * taking into account current tag prefixes and defaults.
       */
      tagString(tag) {
        for (const [handle, prefix] of Object.entries(this.tags)) {
          if (tag.startsWith(prefix))
            return handle + escapeTagName(tag.substring(prefix.length));
        }
        return tag[0] === "!" ? tag : `!<${tag}>`;
      }
      toString(doc) {
        const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
        const tagEntries = Object.entries(this.tags);
        let tagNames;
        if (doc && tagEntries.length > 0 && identity.isNode(doc.contents)) {
          const tags = {};
          visit.visit(doc.contents, (_key, node) => {
            if (identity.isNode(node) && node.tag)
              tags[node.tag] = true;
          });
          tagNames = Object.keys(tags);
        } else
          tagNames = [];
        for (const [handle, prefix] of tagEntries) {
          if (handle === "!!" && prefix === "tag:yaml.org,2002:")
            continue;
          if (!doc || tagNames.some((tn) => tn.startsWith(prefix)))
            lines.push(`%TAG ${handle} ${prefix}`);
        }
        return lines.join("\n");
      }
    };
    Directives.defaultYaml = { explicit: false, version: "1.2" };
    Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
    exports2.Directives = Directives;
  }
});

// node_modules/yaml/dist/doc/anchors.js
var require_anchors = __commonJS({
  "node_modules/yaml/dist/doc/anchors.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var visit = require_visit();
    function anchorIsValid(anchor) {
      if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
        const sa = JSON.stringify(anchor);
        const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
        throw new Error(msg);
      }
      return true;
    }
    function anchorNames(root) {
      const anchors = /* @__PURE__ */ new Set();
      visit.visit(root, {
        Value(_key, node) {
          if (node.anchor)
            anchors.add(node.anchor);
        }
      });
      return anchors;
    }
    function findNewAnchor(prefix, exclude) {
      for (let i = 1; true; ++i) {
        const name = `${prefix}${i}`;
        if (!exclude.has(name))
          return name;
      }
    }
    function createNodeAnchors(doc, prefix) {
      const aliasObjects = [];
      const sourceObjects = /* @__PURE__ */ new Map();
      let prevAnchors = null;
      return {
        onAnchor: (source) => {
          aliasObjects.push(source);
          prevAnchors ?? (prevAnchors = anchorNames(doc));
          const anchor = findNewAnchor(prefix, prevAnchors);
          prevAnchors.add(anchor);
          return anchor;
        },
        /**
         * With circular references, the source node is only resolved after all
         * of its child nodes are. This is why anchors are set only after all of
         * the nodes have been created.
         */
        setAnchors: () => {
          for (const source of aliasObjects) {
            const ref = sourceObjects.get(source);
            if (typeof ref === "object" && ref.anchor && (identity.isScalar(ref.node) || identity.isCollection(ref.node))) {
              ref.node.anchor = ref.anchor;
            } else {
              const error = new Error("Failed to resolve repeated object (this should not happen)");
              error.source = source;
              throw error;
            }
          }
        },
        sourceObjects
      };
    }
    exports2.anchorIsValid = anchorIsValid;
    exports2.anchorNames = anchorNames;
    exports2.createNodeAnchors = createNodeAnchors;
    exports2.findNewAnchor = findNewAnchor;
  }
});

// node_modules/yaml/dist/doc/applyReviver.js
var require_applyReviver = __commonJS({
  "node_modules/yaml/dist/doc/applyReviver.js"(exports2) {
    "use strict";
    function applyReviver(reviver, obj, key, val) {
      if (val && typeof val === "object") {
        if (Array.isArray(val)) {
          for (let i = 0, len = val.length; i < len; ++i) {
            const v0 = val[i];
            const v1 = applyReviver(reviver, val, String(i), v0);
            if (v1 === void 0)
              delete val[i];
            else if (v1 !== v0)
              val[i] = v1;
          }
        } else if (val instanceof Map) {
          for (const k of Array.from(val.keys())) {
            const v0 = val.get(k);
            const v1 = applyReviver(reviver, val, k, v0);
            if (v1 === void 0)
              val.delete(k);
            else if (v1 !== v0)
              val.set(k, v1);
          }
        } else if (val instanceof Set) {
          for (const v0 of Array.from(val)) {
            const v1 = applyReviver(reviver, val, v0, v0);
            if (v1 === void 0)
              val.delete(v0);
            else if (v1 !== v0) {
              val.delete(v0);
              val.add(v1);
            }
          }
        } else {
          for (const [k, v0] of Object.entries(val)) {
            const v1 = applyReviver(reviver, val, k, v0);
            if (v1 === void 0)
              delete val[k];
            else if (v1 !== v0)
              val[k] = v1;
          }
        }
      }
      return reviver.call(obj, key, val);
    }
    exports2.applyReviver = applyReviver;
  }
});

// node_modules/yaml/dist/nodes/toJS.js
var require_toJS = __commonJS({
  "node_modules/yaml/dist/nodes/toJS.js"(exports2) {
    "use strict";
    var identity = require_identity();
    function toJS(value, arg, ctx) {
      if (Array.isArray(value))
        return value.map((v, i) => toJS(v, String(i), ctx));
      if (value && typeof value.toJSON === "function") {
        if (!ctx || !identity.hasAnchor(value))
          return value.toJSON(arg, ctx);
        const data = { aliasCount: 0, count: 1, res: void 0 };
        ctx.anchors.set(value, data);
        ctx.onCreate = (res2) => {
          data.res = res2;
          delete ctx.onCreate;
        };
        const res = value.toJSON(arg, ctx);
        if (ctx.onCreate)
          ctx.onCreate(res);
        return res;
      }
      if (typeof value === "bigint" && !ctx?.keep)
        return Number(value);
      return value;
    }
    exports2.toJS = toJS;
  }
});

// node_modules/yaml/dist/nodes/Node.js
var require_Node = __commonJS({
  "node_modules/yaml/dist/nodes/Node.js"(exports2) {
    "use strict";
    var applyReviver = require_applyReviver();
    var identity = require_identity();
    var toJS = require_toJS();
    var NodeBase = class {
      constructor(type) {
        Object.defineProperty(this, identity.NODE_TYPE, { value: type });
      }
      /** Create a copy of this node.  */
      clone() {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (this.range)
          copy.range = this.range.slice();
        return copy;
      }
      /** A plain JavaScript representation of this node. */
      toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
        if (!identity.isDocument(doc))
          throw new TypeError("A document argument is required");
        const ctx = {
          anchors: /* @__PURE__ */ new Map(),
          doc,
          keep: true,
          mapAsMap: mapAsMap === true,
          mapKeyWarned: false,
          maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
        };
        const res = toJS.toJS(this, "", ctx);
        if (typeof onAnchor === "function")
          for (const { count, res: res2 } of ctx.anchors.values())
            onAnchor(res2, count);
        return typeof reviver === "function" ? applyReviver.applyReviver(reviver, { "": res }, "", res) : res;
      }
    };
    exports2.NodeBase = NodeBase;
  }
});

// node_modules/yaml/dist/nodes/Alias.js
var require_Alias = __commonJS({
  "node_modules/yaml/dist/nodes/Alias.js"(exports2) {
    "use strict";
    var anchors = require_anchors();
    var visit = require_visit();
    var identity = require_identity();
    var Node = require_Node();
    var toJS = require_toJS();
    var Alias = class extends Node.NodeBase {
      constructor(source) {
        super(identity.ALIAS);
        this.source = source;
        Object.defineProperty(this, "tag", {
          set() {
            throw new Error("Alias nodes cannot have tags");
          }
        });
      }
      /**
       * Resolve the value of this alias within `doc`, finding the last
       * instance of the `source` anchor before this node.
       */
      resolve(doc, ctx) {
        let nodes;
        if (ctx?.aliasResolveCache) {
          nodes = ctx.aliasResolveCache;
        } else {
          nodes = [];
          visit.visit(doc, {
            Node: (_key, node) => {
              if (identity.isAlias(node) || identity.hasAnchor(node))
                nodes.push(node);
            }
          });
          if (ctx)
            ctx.aliasResolveCache = nodes;
        }
        let found = void 0;
        for (const node of nodes) {
          if (node === this)
            break;
          if (node.anchor === this.source)
            found = node;
        }
        return found;
      }
      toJSON(_arg, ctx) {
        if (!ctx)
          return { source: this.source };
        const { anchors: anchors2, doc, maxAliasCount } = ctx;
        const source = this.resolve(doc, ctx);
        if (!source) {
          const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new ReferenceError(msg);
        }
        let data = anchors2.get(source);
        if (!data) {
          toJS.toJS(source, null, ctx);
          data = anchors2.get(source);
        }
        if (!data || data.res === void 0) {
          const msg = "This should not happen: Alias anchor was not resolved?";
          throw new ReferenceError(msg);
        }
        if (maxAliasCount >= 0) {
          data.count += 1;
          if (data.aliasCount === 0)
            data.aliasCount = getAliasCount(doc, source, anchors2);
          if (data.count * data.aliasCount > maxAliasCount) {
            const msg = "Excessive alias count indicates a resource exhaustion attack";
            throw new ReferenceError(msg);
          }
        }
        return data.res;
      }
      toString(ctx, _onComment, _onChompKeep) {
        const src = `*${this.source}`;
        if (ctx) {
          anchors.anchorIsValid(this.source);
          if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
            const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
            throw new Error(msg);
          }
          if (ctx.implicitKey)
            return `${src} `;
        }
        return src;
      }
    };
    function getAliasCount(doc, node, anchors2) {
      if (identity.isAlias(node)) {
        const source = node.resolve(doc);
        const anchor = anchors2 && source && anchors2.get(source);
        return anchor ? anchor.count * anchor.aliasCount : 0;
      } else if (identity.isCollection(node)) {
        let count = 0;
        for (const item of node.items) {
          const c = getAliasCount(doc, item, anchors2);
          if (c > count)
            count = c;
        }
        return count;
      } else if (identity.isPair(node)) {
        const kc = getAliasCount(doc, node.key, anchors2);
        const vc = getAliasCount(doc, node.value, anchors2);
        return Math.max(kc, vc);
      }
      return 1;
    }
    exports2.Alias = Alias;
  }
});

// node_modules/yaml/dist/nodes/Scalar.js
var require_Scalar = __commonJS({
  "node_modules/yaml/dist/nodes/Scalar.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Node = require_Node();
    var toJS = require_toJS();
    var isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
    var Scalar = class extends Node.NodeBase {
      constructor(value) {
        super(identity.SCALAR);
        this.value = value;
      }
      toJSON(arg, ctx) {
        return ctx?.keep ? this.value : toJS.toJS(this.value, arg, ctx);
      }
      toString() {
        return String(this.value);
      }
    };
    Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
    Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
    Scalar.PLAIN = "PLAIN";
    Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
    Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
    exports2.Scalar = Scalar;
    exports2.isScalarValue = isScalarValue;
  }
});

// node_modules/yaml/dist/doc/createNode.js
var require_createNode = __commonJS({
  "node_modules/yaml/dist/doc/createNode.js"(exports2) {
    "use strict";
    var Alias = require_Alias();
    var identity = require_identity();
    var Scalar = require_Scalar();
    var defaultTagPrefix = "tag:yaml.org,2002:";
    function findTagObject(value, tagName, tags) {
      if (tagName) {
        const match = tags.filter((t) => t.tag === tagName);
        const tagObj = match.find((t) => !t.format) ?? match[0];
        if (!tagObj)
          throw new Error(`Tag ${tagName} not found`);
        return tagObj;
      }
      return tags.find((t) => t.identify?.(value) && !t.format);
    }
    function createNode(value, tagName, ctx) {
      if (identity.isDocument(value))
        value = value.contents;
      if (identity.isNode(value))
        return value;
      if (identity.isPair(value)) {
        const map = ctx.schema[identity.MAP].createNode?.(ctx.schema, null, ctx);
        map.items.push(value);
        return map;
      }
      if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
        value = value.valueOf();
      }
      const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
      let ref = void 0;
      if (aliasDuplicateObjects && value && typeof value === "object") {
        ref = sourceObjects.get(value);
        if (ref) {
          ref.anchor ?? (ref.anchor = onAnchor(value));
          return new Alias.Alias(ref.anchor);
        } else {
          ref = { anchor: null, node: null };
          sourceObjects.set(value, ref);
        }
      }
      if (tagName?.startsWith("!!"))
        tagName = defaultTagPrefix + tagName.slice(2);
      let tagObj = findTagObject(value, tagName, schema.tags);
      if (!tagObj) {
        if (value && typeof value.toJSON === "function") {
          value = value.toJSON();
        }
        if (!value || typeof value !== "object") {
          const node2 = new Scalar.Scalar(value);
          if (ref)
            ref.node = node2;
          return node2;
        }
        tagObj = value instanceof Map ? schema[identity.MAP] : Symbol.iterator in Object(value) ? schema[identity.SEQ] : schema[identity.MAP];
      }
      if (onTagObj) {
        onTagObj(tagObj);
        delete ctx.onTagObj;
      }
      const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar.Scalar(value);
      if (tagName)
        node.tag = tagName;
      else if (!tagObj.default)
        node.tag = tagObj.tag;
      if (ref)
        ref.node = node;
      return node;
    }
    exports2.createNode = createNode;
  }
});

// node_modules/yaml/dist/nodes/Collection.js
var require_Collection = __commonJS({
  "node_modules/yaml/dist/nodes/Collection.js"(exports2) {
    "use strict";
    var createNode = require_createNode();
    var identity = require_identity();
    var Node = require_Node();
    function collectionFromPath(schema, path, value) {
      let v = value;
      for (let i = path.length - 1; i >= 0; --i) {
        const k = path[i];
        if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
          const a = [];
          a[k] = v;
          v = a;
        } else {
          v = /* @__PURE__ */ new Map([[k, v]]);
        }
      }
      return createNode.createNode(v, void 0, {
        aliasDuplicateObjects: false,
        keepUndefined: false,
        onAnchor: () => {
          throw new Error("This should not happen, please report a bug.");
        },
        schema,
        sourceObjects: /* @__PURE__ */ new Map()
      });
    }
    var isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
    var Collection = class extends Node.NodeBase {
      constructor(type, schema) {
        super(type);
        Object.defineProperty(this, "schema", {
          value: schema,
          configurable: true,
          enumerable: false,
          writable: true
        });
      }
      /**
       * Create a copy of this collection.
       *
       * @param schema - If defined, overwrites the original's schema
       */
      clone(schema) {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (schema)
          copy.schema = schema;
        copy.items = copy.items.map((it) => identity.isNode(it) || identity.isPair(it) ? it.clone(schema) : it);
        if (this.range)
          copy.range = this.range.slice();
        return copy;
      }
      /**
       * Adds a value to the collection. For `!!map` and `!!omap` the value must
       * be a Pair instance or a `{ key, value }` object, which may not have a key
       * that already exists in the map.
       */
      addIn(path, value) {
        if (isEmptyPath(path))
          this.add(value);
        else {
          const [key, ...rest] = path;
          const node = this.get(key, true);
          if (identity.isCollection(node))
            node.addIn(rest, value);
          else if (node === void 0 && this.schema)
            this.set(key, collectionFromPath(this.schema, rest, value));
          else
            throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
      }
      /**
       * Removes a value from the collection.
       * @returns `true` if the item was found and removed.
       */
      deleteIn(path) {
        const [key, ...rest] = path;
        if (rest.length === 0)
          return this.delete(key);
        const node = this.get(key, true);
        if (identity.isCollection(node))
          return node.deleteIn(rest);
        else
          throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
      /**
       * Returns item at `key`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      getIn(path, keepScalar) {
        const [key, ...rest] = path;
        const node = this.get(key, true);
        if (rest.length === 0)
          return !keepScalar && identity.isScalar(node) ? node.value : node;
        else
          return identity.isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
      }
      hasAllNullValues(allowScalar) {
        return this.items.every((node) => {
          if (!identity.isPair(node))
            return false;
          const n = node.value;
          return n == null || allowScalar && identity.isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
        });
      }
      /**
       * Checks if the collection includes a value with the key `key`.
       */
      hasIn(path) {
        const [key, ...rest] = path;
        if (rest.length === 0)
          return this.has(key);
        const node = this.get(key, true);
        return identity.isCollection(node) ? node.hasIn(rest) : false;
      }
      /**
       * Sets a value in this collection. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      setIn(path, value) {
        const [key, ...rest] = path;
        if (rest.length === 0) {
          this.set(key, value);
        } else {
          const node = this.get(key, true);
          if (identity.isCollection(node))
            node.setIn(rest, value);
          else if (node === void 0 && this.schema)
            this.set(key, collectionFromPath(this.schema, rest, value));
          else
            throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
      }
    };
    exports2.Collection = Collection;
    exports2.collectionFromPath = collectionFromPath;
    exports2.isEmptyPath = isEmptyPath;
  }
});

// node_modules/yaml/dist/stringify/stringifyComment.js
var require_stringifyComment = __commonJS({
  "node_modules/yaml/dist/stringify/stringifyComment.js"(exports2) {
    "use strict";
    var stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
    function indentComment(comment, indent) {
      if (/^\n+$/.test(comment))
        return comment.substring(1);
      return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
    }
    var lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
    exports2.indentComment = indentComment;
    exports2.lineComment = lineComment;
    exports2.stringifyComment = stringifyComment;
  }
});

// node_modules/yaml/dist/stringify/foldFlowLines.js
var require_foldFlowLines = __commonJS({
  "node_modules/yaml/dist/stringify/foldFlowLines.js"(exports2) {
    "use strict";
    var FOLD_FLOW = "flow";
    var FOLD_BLOCK = "block";
    var FOLD_QUOTED = "quoted";
    function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
      if (!lineWidth || lineWidth < 0)
        return text;
      if (lineWidth < minContentWidth)
        minContentWidth = 0;
      const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
      if (text.length <= endStep)
        return text;
      const folds = [];
      const escapedFolds = {};
      let end = lineWidth - indent.length;
      if (typeof indentAtStart === "number") {
        if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
          folds.push(0);
        else
          end = lineWidth - indentAtStart;
      }
      let split = void 0;
      let prev = void 0;
      let overflow = false;
      let i = -1;
      let escStart = -1;
      let escEnd = -1;
      if (mode === FOLD_BLOCK) {
        i = consumeMoreIndentedLines(text, i, indent.length);
        if (i !== -1)
          end = i + endStep;
      }
      for (let ch; ch = text[i += 1]; ) {
        if (mode === FOLD_QUOTED && ch === "\\") {
          escStart = i;
          switch (text[i + 1]) {
            case "x":
              i += 3;
              break;
            case "u":
              i += 5;
              break;
            case "U":
              i += 9;
              break;
            default:
              i += 1;
          }
          escEnd = i;
        }
        if (ch === "\n") {
          if (mode === FOLD_BLOCK)
            i = consumeMoreIndentedLines(text, i, indent.length);
          end = i + indent.length + endStep;
          split = void 0;
        } else {
          if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
            const next = text[i + 1];
            if (next && next !== " " && next !== "\n" && next !== "	")
              split = i;
          }
          if (i >= end) {
            if (split) {
              folds.push(split);
              end = split + endStep;
              split = void 0;
            } else if (mode === FOLD_QUOTED) {
              while (prev === " " || prev === "	") {
                prev = ch;
                ch = text[i += 1];
                overflow = true;
              }
              const j = i > escEnd + 1 ? i - 2 : escStart - 1;
              if (escapedFolds[j])
                return text;
              folds.push(j);
              escapedFolds[j] = true;
              end = j + endStep;
              split = void 0;
            } else {
              overflow = true;
            }
          }
        }
        prev = ch;
      }
      if (overflow && onOverflow)
        onOverflow();
      if (folds.length === 0)
        return text;
      if (onFold)
        onFold();
      let res = text.slice(0, folds[0]);
      for (let i2 = 0; i2 < folds.length; ++i2) {
        const fold = folds[i2];
        const end2 = folds[i2 + 1] || text.length;
        if (fold === 0)
          res = `
${indent}${text.slice(0, end2)}`;
        else {
          if (mode === FOLD_QUOTED && escapedFolds[fold])
            res += `${text[fold]}\\`;
          res += `
${indent}${text.slice(fold + 1, end2)}`;
        }
      }
      return res;
    }
    function consumeMoreIndentedLines(text, i, indent) {
      let end = i;
      let start = i + 1;
      let ch = text[start];
      while (ch === " " || ch === "	") {
        if (i < start + indent) {
          ch = text[++i];
        } else {
          do {
            ch = text[++i];
          } while (ch && ch !== "\n");
          end = i;
          start = i + 1;
          ch = text[start];
        }
      }
      return end;
    }
    exports2.FOLD_BLOCK = FOLD_BLOCK;
    exports2.FOLD_FLOW = FOLD_FLOW;
    exports2.FOLD_QUOTED = FOLD_QUOTED;
    exports2.foldFlowLines = foldFlowLines;
  }
});

// node_modules/yaml/dist/stringify/stringifyString.js
var require_stringifyString = __commonJS({
  "node_modules/yaml/dist/stringify/stringifyString.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var foldFlowLines = require_foldFlowLines();
    var getFoldOptions = (ctx, isBlock) => ({
      indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
      lineWidth: ctx.options.lineWidth,
      minContentWidth: ctx.options.minContentWidth
    });
    var containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
    function lineLengthOverLimit(str, lineWidth, indentLength) {
      if (!lineWidth || lineWidth < 0)
        return false;
      const limit = lineWidth - indentLength;
      const strLen = str.length;
      if (strLen <= limit)
        return false;
      for (let i = 0, start = 0; i < strLen; ++i) {
        if (str[i] === "\n") {
          if (i - start > limit)
            return true;
          start = i + 1;
          if (strLen - start <= limit)
            return false;
        }
      }
      return true;
    }
    function doubleQuotedString(value, ctx) {
      const json = JSON.stringify(value);
      if (ctx.options.doubleQuotedAsJSON)
        return json;
      const { implicitKey } = ctx;
      const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
      const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
      let str = "";
      let start = 0;
      for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
        if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
          str += json.slice(start, i) + "\\ ";
          i += 1;
          start = i;
          ch = "\\";
        }
        if (ch === "\\")
          switch (json[i + 1]) {
            case "u":
              {
                str += json.slice(start, i);
                const code = json.substr(i + 2, 4);
                switch (code) {
                  case "0000":
                    str += "\\0";
                    break;
                  case "0007":
                    str += "\\a";
                    break;
                  case "000b":
                    str += "\\v";
                    break;
                  case "001b":
                    str += "\\e";
                    break;
                  case "0085":
                    str += "\\N";
                    break;
                  case "00a0":
                    str += "\\_";
                    break;
                  case "2028":
                    str += "\\L";
                    break;
                  case "2029":
                    str += "\\P";
                    break;
                  default:
                    if (code.substr(0, 2) === "00")
                      str += "\\x" + code.substr(2);
                    else
                      str += json.substr(i, 6);
                }
                i += 5;
                start = i + 1;
              }
              break;
            case "n":
              if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
                i += 1;
              } else {
                str += json.slice(start, i) + "\n\n";
                while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"') {
                  str += "\n";
                  i += 2;
                }
                str += indent;
                if (json[i + 2] === " ")
                  str += "\\";
                i += 1;
                start = i + 1;
              }
              break;
            default:
              i += 1;
          }
      }
      str = start ? str + json.slice(start) : json;
      return implicitKey ? str : foldFlowLines.foldFlowLines(str, indent, foldFlowLines.FOLD_QUOTED, getFoldOptions(ctx, false));
    }
    function singleQuotedString(value, ctx) {
      if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value))
        return doubleQuotedString(value, ctx);
      const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
      const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
      return ctx.implicitKey ? res : foldFlowLines.foldFlowLines(res, indent, foldFlowLines.FOLD_FLOW, getFoldOptions(ctx, false));
    }
    function quotedString(value, ctx) {
      const { singleQuote } = ctx.options;
      let qs;
      if (singleQuote === false)
        qs = doubleQuotedString;
      else {
        const hasDouble = value.includes('"');
        const hasSingle = value.includes("'");
        if (hasDouble && !hasSingle)
          qs = singleQuotedString;
        else if (hasSingle && !hasDouble)
          qs = doubleQuotedString;
        else
          qs = singleQuote ? singleQuotedString : doubleQuotedString;
      }
      return qs(value, ctx);
    }
    var blockEndNewlines;
    try {
      blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
    } catch {
      blockEndNewlines = /\n+(?!\n|$)/g;
    }
    function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
      const { blockQuote, commentString, lineWidth } = ctx.options;
      if (!blockQuote || /\n[\t ]+$/.test(value)) {
        return quotedString(value, ctx);
      }
      const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
      const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.Scalar.BLOCK_FOLDED ? false : type === Scalar.Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
      if (!value)
        return literal ? "|\n" : ">\n";
      let chomp;
      let endStart;
      for (endStart = value.length; endStart > 0; --endStart) {
        const ch = value[endStart - 1];
        if (ch !== "\n" && ch !== "	" && ch !== " ")
          break;
      }
      let end = value.substring(endStart);
      const endNlPos = end.indexOf("\n");
      if (endNlPos === -1) {
        chomp = "-";
      } else if (value === end || endNlPos !== end.length - 1) {
        chomp = "+";
        if (onChompKeep)
          onChompKeep();
      } else {
        chomp = "";
      }
      if (end) {
        value = value.slice(0, -end.length);
        if (end[end.length - 1] === "\n")
          end = end.slice(0, -1);
        end = end.replace(blockEndNewlines, `$&${indent}`);
      }
      let startWithSpace = false;
      let startEnd;
      let startNlPos = -1;
      for (startEnd = 0; startEnd < value.length; ++startEnd) {
        const ch = value[startEnd];
        if (ch === " ")
          startWithSpace = true;
        else if (ch === "\n")
          startNlPos = startEnd;
        else
          break;
      }
      let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
      if (start) {
        value = value.substring(start.length);
        start = start.replace(/\n+/g, `$&${indent}`);
      }
      const indentSize = indent ? "2" : "1";
      let header = (startWithSpace ? indentSize : "") + chomp;
      if (comment) {
        header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
        if (onComment)
          onComment();
      }
      if (!literal) {
        const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
        let literalFallback = false;
        const foldOptions = getFoldOptions(ctx, true);
        if (blockQuote !== "folded" && type !== Scalar.Scalar.BLOCK_FOLDED) {
          foldOptions.onOverflow = () => {
            literalFallback = true;
          };
        }
        const body = foldFlowLines.foldFlowLines(`${start}${foldedValue}${end}`, indent, foldFlowLines.FOLD_BLOCK, foldOptions);
        if (!literalFallback)
          return `>${header}
${indent}${body}`;
      }
      value = value.replace(/\n+/g, `$&${indent}`);
      return `|${header}
${indent}${start}${value}${end}`;
    }
    function plainString(item, ctx, onComment, onChompKeep) {
      const { type, value } = item;
      const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
      if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) {
        return quotedString(value, ctx);
      }
      if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
        return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
      }
      if (!implicitKey && !inFlow && type !== Scalar.Scalar.PLAIN && value.includes("\n")) {
        return blockString(item, ctx, onComment, onChompKeep);
      }
      if (containsDocumentMarker(value)) {
        if (indent === "") {
          ctx.forceBlockIndent = true;
          return blockString(item, ctx, onComment, onChompKeep);
        } else if (implicitKey && indent === indentStep) {
          return quotedString(value, ctx);
        }
      }
      const str = value.replace(/\n+/g, `$&
${indent}`);
      if (actualString) {
        const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
        const { compat, tags } = ctx.doc.schema;
        if (tags.some(test) || compat?.some(test))
          return quotedString(value, ctx);
      }
      return implicitKey ? str : foldFlowLines.foldFlowLines(str, indent, foldFlowLines.FOLD_FLOW, getFoldOptions(ctx, false));
    }
    function stringifyString(item, ctx, onComment, onChompKeep) {
      const { implicitKey, inFlow } = ctx;
      const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
      let { type } = item;
      if (type !== Scalar.Scalar.QUOTE_DOUBLE) {
        if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
          type = Scalar.Scalar.QUOTE_DOUBLE;
      }
      const _stringify = (_type) => {
        switch (_type) {
          case Scalar.Scalar.BLOCK_FOLDED:
          case Scalar.Scalar.BLOCK_LITERAL:
            return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
          case Scalar.Scalar.QUOTE_DOUBLE:
            return doubleQuotedString(ss.value, ctx);
          case Scalar.Scalar.QUOTE_SINGLE:
            return singleQuotedString(ss.value, ctx);
          case Scalar.Scalar.PLAIN:
            return plainString(ss, ctx, onComment, onChompKeep);
          default:
            return null;
        }
      };
      let res = _stringify(type);
      if (res === null) {
        const { defaultKeyType, defaultStringType } = ctx.options;
        const t = implicitKey && defaultKeyType || defaultStringType;
        res = _stringify(t);
        if (res === null)
          throw new Error(`Unsupported default string type ${t}`);
      }
      return res;
    }
    exports2.stringifyString = stringifyString;
  }
});

// node_modules/yaml/dist/stringify/stringify.js
var require_stringify = __commonJS({
  "node_modules/yaml/dist/stringify/stringify.js"(exports2) {
    "use strict";
    var anchors = require_anchors();
    var identity = require_identity();
    var stringifyComment = require_stringifyComment();
    var stringifyString = require_stringifyString();
    function createStringifyContext(doc, options) {
      const opt = Object.assign({
        blockQuote: true,
        commentString: stringifyComment.stringifyComment,
        defaultKeyType: null,
        defaultStringType: "PLAIN",
        directives: null,
        doubleQuotedAsJSON: false,
        doubleQuotedMinMultiLineLength: 40,
        falseStr: "false",
        flowCollectionPadding: true,
        indentSeq: true,
        lineWidth: 80,
        minContentWidth: 20,
        nullStr: "null",
        simpleKeys: false,
        singleQuote: null,
        trueStr: "true",
        verifyAliasOrder: true
      }, doc.schema.toStringOptions, options);
      let inFlow;
      switch (opt.collectionStyle) {
        case "block":
          inFlow = false;
          break;
        case "flow":
          inFlow = true;
          break;
        default:
          inFlow = null;
      }
      return {
        anchors: /* @__PURE__ */ new Set(),
        doc,
        flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
        indent: "",
        indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
        inFlow,
        options: opt
      };
    }
    function getTagObject(tags, item) {
      if (item.tag) {
        const match = tags.filter((t) => t.tag === item.tag);
        if (match.length > 0)
          return match.find((t) => t.format === item.format) ?? match[0];
      }
      let tagObj = void 0;
      let obj;
      if (identity.isScalar(item)) {
        obj = item.value;
        let match = tags.filter((t) => t.identify?.(obj));
        if (match.length > 1) {
          const testMatch = match.filter((t) => t.test);
          if (testMatch.length > 0)
            match = testMatch;
        }
        tagObj = match.find((t) => t.format === item.format) ?? match.find((t) => !t.format);
      } else {
        obj = item;
        tagObj = tags.find((t) => t.nodeClass && obj instanceof t.nodeClass);
      }
      if (!tagObj) {
        const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
        throw new Error(`Tag not resolved for ${name} value`);
      }
      return tagObj;
    }
    function stringifyProps(node, tagObj, { anchors: anchors$1, doc }) {
      if (!doc.directives)
        return "";
      const props = [];
      const anchor = (identity.isScalar(node) || identity.isCollection(node)) && node.anchor;
      if (anchor && anchors.anchorIsValid(anchor)) {
        anchors$1.add(anchor);
        props.push(`&${anchor}`);
      }
      const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
      if (tag)
        props.push(doc.directives.tagString(tag));
      return props.join(" ");
    }
    function stringify(item, ctx, onComment, onChompKeep) {
      if (identity.isPair(item))
        return item.toString(ctx, onComment, onChompKeep);
      if (identity.isAlias(item)) {
        if (ctx.doc.directives)
          return item.toString(ctx);
        if (ctx.resolvedAliases?.has(item)) {
          throw new TypeError(`Cannot stringify circular structure without alias nodes`);
        } else {
          if (ctx.resolvedAliases)
            ctx.resolvedAliases.add(item);
          else
            ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
          item = item.resolve(ctx.doc);
        }
      }
      let tagObj = void 0;
      const node = identity.isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
      tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
      const props = stringifyProps(node, tagObj, ctx);
      if (props.length > 0)
        ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
      const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : identity.isScalar(node) ? stringifyString.stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
      if (!props)
        return str;
      return identity.isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
    }
    exports2.createStringifyContext = createStringifyContext;
    exports2.stringify = stringify;
  }
});

// node_modules/yaml/dist/stringify/stringifyPair.js
var require_stringifyPair = __commonJS({
  "node_modules/yaml/dist/stringify/stringifyPair.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var stringify = require_stringify();
    var stringifyComment = require_stringifyComment();
    function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
      const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
      let keyComment = identity.isNode(key) && key.comment || null;
      if (simpleKeys) {
        if (keyComment) {
          throw new Error("With simple keys, key nodes cannot have comments");
        }
        if (identity.isCollection(key) || !identity.isNode(key) && typeof key === "object") {
          const msg = "With simple keys, collection cannot be used as a key value";
          throw new Error(msg);
        }
      }
      let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || identity.isCollection(key) || (identity.isScalar(key) ? key.type === Scalar.Scalar.BLOCK_FOLDED || key.type === Scalar.Scalar.BLOCK_LITERAL : typeof key === "object"));
      ctx = Object.assign({}, ctx, {
        allNullValues: false,
        implicitKey: !explicitKey && (simpleKeys || !allNullValues),
        indent: indent + indentStep
      });
      let keyCommentDone = false;
      let chompKeep = false;
      let str = stringify.stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
      if (!explicitKey && !ctx.inFlow && str.length > 1024) {
        if (simpleKeys)
          throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
        explicitKey = true;
      }
      if (ctx.inFlow) {
        if (allNullValues || value == null) {
          if (keyCommentDone && onComment)
            onComment();
          return str === "" ? "?" : explicitKey ? `? ${str}` : str;
        }
      } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
        str = `? ${str}`;
        if (keyComment && !keyCommentDone) {
          str += stringifyComment.lineComment(str, ctx.indent, commentString(keyComment));
        } else if (chompKeep && onChompKeep)
          onChompKeep();
        return str;
      }
      if (keyCommentDone)
        keyComment = null;
      if (explicitKey) {
        if (keyComment)
          str += stringifyComment.lineComment(str, ctx.indent, commentString(keyComment));
        str = `? ${str}
${indent}:`;
      } else {
        str = `${str}:`;
        if (keyComment)
          str += stringifyComment.lineComment(str, ctx.indent, commentString(keyComment));
      }
      let vsb, vcb, valueComment;
      if (identity.isNode(value)) {
        vsb = !!value.spaceBefore;
        vcb = value.commentBefore;
        valueComment = value.comment;
      } else {
        vsb = false;
        vcb = null;
        valueComment = null;
        if (value && typeof value === "object")
          value = doc.createNode(value);
      }
      ctx.implicitKey = false;
      if (!explicitKey && !keyComment && identity.isScalar(value))
        ctx.indentAtStart = str.length + 1;
      chompKeep = false;
      if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && identity.isSeq(value) && !value.flow && !value.tag && !value.anchor) {
        ctx.indent = ctx.indent.substring(2);
      }
      let valueCommentDone = false;
      const valueStr = stringify.stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
      let ws = " ";
      if (keyComment || vsb || vcb) {
        ws = vsb ? "\n" : "";
        if (vcb) {
          const cs = commentString(vcb);
          ws += `
${stringifyComment.indentComment(cs, ctx.indent)}`;
        }
        if (valueStr === "" && !ctx.inFlow) {
          if (ws === "\n")
            ws = "\n\n";
        } else {
          ws += `
${ctx.indent}`;
        }
      } else if (!explicitKey && identity.isCollection(value)) {
        const vs0 = valueStr[0];
        const nl0 = valueStr.indexOf("\n");
        const hasNewline = nl0 !== -1;
        const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
        if (hasNewline || !flow) {
          let hasPropsLine = false;
          if (hasNewline && (vs0 === "&" || vs0 === "!")) {
            let sp0 = valueStr.indexOf(" ");
            if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
              sp0 = valueStr.indexOf(" ", sp0 + 1);
            }
            if (sp0 === -1 || nl0 < sp0)
              hasPropsLine = true;
          }
          if (!hasPropsLine)
            ws = `
${ctx.indent}`;
        }
      } else if (valueStr === "" || valueStr[0] === "\n") {
        ws = "";
      }
      str += ws + valueStr;
      if (ctx.inFlow) {
        if (valueCommentDone && onComment)
          onComment();
      } else if (valueComment && !valueCommentDone) {
        str += stringifyComment.lineComment(str, ctx.indent, commentString(valueComment));
      } else if (chompKeep && onChompKeep) {
        onChompKeep();
      }
      return str;
    }
    exports2.stringifyPair = stringifyPair;
  }
});

// node_modules/yaml/dist/log.js
var require_log = __commonJS({
  "node_modules/yaml/dist/log.js"(exports2) {
    "use strict";
    var node_process = require("process");
    function debug(logLevel, ...messages) {
      if (logLevel === "debug")
        console.log(...messages);
    }
    function warn(logLevel, warning) {
      if (logLevel === "debug" || logLevel === "warn") {
        if (typeof node_process.emitWarning === "function")
          node_process.emitWarning(warning);
        else
          console.warn(warning);
      }
    }
    exports2.debug = debug;
    exports2.warn = warn;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/merge.js
var require_merge = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/merge.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var MERGE_KEY = "<<";
    var merge = {
      identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
      default: "key",
      tag: "tag:yaml.org,2002:merge",
      test: /^<<$/,
      resolve: () => Object.assign(new Scalar.Scalar(Symbol(MERGE_KEY)), {
        addToJSMap: addMergeToJSMap
      }),
      stringify: () => MERGE_KEY
    };
    var isMergeKey = (ctx, key) => (merge.identify(key) || identity.isScalar(key) && (!key.type || key.type === Scalar.Scalar.PLAIN) && merge.identify(key.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default);
    function addMergeToJSMap(ctx, map, value) {
      value = ctx && identity.isAlias(value) ? value.resolve(ctx.doc) : value;
      if (identity.isSeq(value))
        for (const it of value.items)
          mergeValue(ctx, map, it);
      else if (Array.isArray(value))
        for (const it of value)
          mergeValue(ctx, map, it);
      else
        mergeValue(ctx, map, value);
    }
    function mergeValue(ctx, map, value) {
      const source = ctx && identity.isAlias(value) ? value.resolve(ctx.doc) : value;
      if (!identity.isMap(source))
        throw new Error("Merge sources must be maps or map aliases");
      const srcMap = source.toJSON(null, ctx, Map);
      for (const [key, value2] of srcMap) {
        if (map instanceof Map) {
          if (!map.has(key))
            map.set(key, value2);
        } else if (map instanceof Set) {
          map.add(key);
        } else if (!Object.prototype.hasOwnProperty.call(map, key)) {
          Object.defineProperty(map, key, {
            value: value2,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
      return map;
    }
    exports2.addMergeToJSMap = addMergeToJSMap;
    exports2.isMergeKey = isMergeKey;
    exports2.merge = merge;
  }
});

// node_modules/yaml/dist/nodes/addPairToJSMap.js
var require_addPairToJSMap = __commonJS({
  "node_modules/yaml/dist/nodes/addPairToJSMap.js"(exports2) {
    "use strict";
    var log = require_log();
    var merge = require_merge();
    var stringify = require_stringify();
    var identity = require_identity();
    var toJS = require_toJS();
    function addPairToJSMap(ctx, map, { key, value }) {
      if (identity.isNode(key) && key.addToJSMap)
        key.addToJSMap(ctx, map, value);
      else if (merge.isMergeKey(ctx, key))
        merge.addMergeToJSMap(ctx, map, value);
      else {
        const jsKey = toJS.toJS(key, "", ctx);
        if (map instanceof Map) {
          map.set(jsKey, toJS.toJS(value, jsKey, ctx));
        } else if (map instanceof Set) {
          map.add(jsKey);
        } else {
          const stringKey = stringifyKey(key, jsKey, ctx);
          const jsValue = toJS.toJS(value, stringKey, ctx);
          if (stringKey in map)
            Object.defineProperty(map, stringKey, {
              value: jsValue,
              writable: true,
              enumerable: true,
              configurable: true
            });
          else
            map[stringKey] = jsValue;
        }
      }
      return map;
    }
    function stringifyKey(key, jsKey, ctx) {
      if (jsKey === null)
        return "";
      if (typeof jsKey !== "object")
        return String(jsKey);
      if (identity.isNode(key) && ctx?.doc) {
        const strCtx = stringify.createStringifyContext(ctx.doc, {});
        strCtx.anchors = /* @__PURE__ */ new Set();
        for (const node of ctx.anchors.keys())
          strCtx.anchors.add(node.anchor);
        strCtx.inFlow = true;
        strCtx.inStringifyKey = true;
        const strKey = key.toString(strCtx);
        if (!ctx.mapKeyWarned) {
          let jsonStr = JSON.stringify(strKey);
          if (jsonStr.length > 40)
            jsonStr = jsonStr.substring(0, 36) + '..."';
          log.warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
          ctx.mapKeyWarned = true;
        }
        return strKey;
      }
      return JSON.stringify(jsKey);
    }
    exports2.addPairToJSMap = addPairToJSMap;
  }
});

// node_modules/yaml/dist/nodes/Pair.js
var require_Pair = __commonJS({
  "node_modules/yaml/dist/nodes/Pair.js"(exports2) {
    "use strict";
    var createNode = require_createNode();
    var stringifyPair = require_stringifyPair();
    var addPairToJSMap = require_addPairToJSMap();
    var identity = require_identity();
    function createPair(key, value, ctx) {
      const k = createNode.createNode(key, void 0, ctx);
      const v = createNode.createNode(value, void 0, ctx);
      return new Pair(k, v);
    }
    var Pair = class _Pair {
      constructor(key, value = null) {
        Object.defineProperty(this, identity.NODE_TYPE, { value: identity.PAIR });
        this.key = key;
        this.value = value;
      }
      clone(schema) {
        let { key, value } = this;
        if (identity.isNode(key))
          key = key.clone(schema);
        if (identity.isNode(value))
          value = value.clone(schema);
        return new _Pair(key, value);
      }
      toJSON(_, ctx) {
        const pair = ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
        return addPairToJSMap.addPairToJSMap(ctx, pair, this);
      }
      toString(ctx, onComment, onChompKeep) {
        return ctx?.doc ? stringifyPair.stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
      }
    };
    exports2.Pair = Pair;
    exports2.createPair = createPair;
  }
});

// node_modules/yaml/dist/stringify/stringifyCollection.js
var require_stringifyCollection = __commonJS({
  "node_modules/yaml/dist/stringify/stringifyCollection.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var stringify = require_stringify();
    var stringifyComment = require_stringifyComment();
    function stringifyCollection(collection, ctx, options) {
      const flow = ctx.inFlow ?? collection.flow;
      const stringify2 = flow ? stringifyFlowCollection : stringifyBlockCollection;
      return stringify2(collection, ctx, options);
    }
    function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
      const { indent, options: { commentString } } = ctx;
      const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
      let chompKeep = false;
      const lines = [];
      for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        let comment2 = null;
        if (identity.isNode(item)) {
          if (!chompKeep && item.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
          if (item.comment)
            comment2 = item.comment;
        } else if (identity.isPair(item)) {
          const ik = identity.isNode(item.key) ? item.key : null;
          if (ik) {
            if (!chompKeep && ik.spaceBefore)
              lines.push("");
            addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
          }
        }
        chompKeep = false;
        let str2 = stringify.stringify(item, itemCtx, () => comment2 = null, () => chompKeep = true);
        if (comment2)
          str2 += stringifyComment.lineComment(str2, itemIndent, commentString(comment2));
        if (chompKeep && comment2)
          chompKeep = false;
        lines.push(blockItemPrefix + str2);
      }
      let str;
      if (lines.length === 0) {
        str = flowChars.start + flowChars.end;
      } else {
        str = lines[0];
        for (let i = 1; i < lines.length; ++i) {
          const line = lines[i];
          str += line ? `
${indent}${line}` : "\n";
        }
      }
      if (comment) {
        str += "\n" + stringifyComment.indentComment(commentString(comment), indent);
        if (onComment)
          onComment();
      } else if (chompKeep && onChompKeep)
        onChompKeep();
      return str;
    }
    function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
      const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
      itemIndent += indentStep;
      const itemCtx = Object.assign({}, ctx, {
        indent: itemIndent,
        inFlow: true,
        type: null
      });
      let reqNewline = false;
      let linesAtValue = 0;
      const lines = [];
      for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        let comment = null;
        if (identity.isNode(item)) {
          if (item.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, item.commentBefore, false);
          if (item.comment)
            comment = item.comment;
        } else if (identity.isPair(item)) {
          const ik = identity.isNode(item.key) ? item.key : null;
          if (ik) {
            if (ik.spaceBefore)
              lines.push("");
            addCommentBefore(ctx, lines, ik.commentBefore, false);
            if (ik.comment)
              reqNewline = true;
          }
          const iv = identity.isNode(item.value) ? item.value : null;
          if (iv) {
            if (iv.comment)
              comment = iv.comment;
            if (iv.commentBefore)
              reqNewline = true;
          } else if (item.value == null && ik?.comment) {
            comment = ik.comment;
          }
        }
        if (comment)
          reqNewline = true;
        let str = stringify.stringify(item, itemCtx, () => comment = null);
        if (i < items.length - 1)
          str += ",";
        if (comment)
          str += stringifyComment.lineComment(str, itemIndent, commentString(comment));
        if (!reqNewline && (lines.length > linesAtValue || str.includes("\n")))
          reqNewline = true;
        lines.push(str);
        linesAtValue = lines.length;
      }
      const { start, end } = flowChars;
      if (lines.length === 0) {
        return start + end;
      } else {
        if (!reqNewline) {
          const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
          reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
        }
        if (reqNewline) {
          let str = start;
          for (const line of lines)
            str += line ? `
${indentStep}${indent}${line}` : "\n";
          return `${str}
${indent}${end}`;
        } else {
          return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
        }
      }
    }
    function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
      if (comment && chompKeep)
        comment = comment.replace(/^\n+/, "");
      if (comment) {
        const ic = stringifyComment.indentComment(commentString(comment), indent);
        lines.push(ic.trimStart());
      }
    }
    exports2.stringifyCollection = stringifyCollection;
  }
});

// node_modules/yaml/dist/nodes/YAMLMap.js
var require_YAMLMap = __commonJS({
  "node_modules/yaml/dist/nodes/YAMLMap.js"(exports2) {
    "use strict";
    var stringifyCollection = require_stringifyCollection();
    var addPairToJSMap = require_addPairToJSMap();
    var Collection = require_Collection();
    var identity = require_identity();
    var Pair = require_Pair();
    var Scalar = require_Scalar();
    function findPair(items, key) {
      const k = identity.isScalar(key) ? key.value : key;
      for (const it of items) {
        if (identity.isPair(it)) {
          if (it.key === key || it.key === k)
            return it;
          if (identity.isScalar(it.key) && it.key.value === k)
            return it;
        }
      }
      return void 0;
    }
    var YAMLMap = class extends Collection.Collection {
      static get tagName() {
        return "tag:yaml.org,2002:map";
      }
      constructor(schema) {
        super(identity.MAP, schema);
        this.items = [];
      }
      /**
       * A generic collection parsing method that can be extended
       * to other node classes that inherit from YAMLMap
       */
      static from(schema, obj, ctx) {
        const { keepUndefined, replacer } = ctx;
        const map = new this(schema);
        const add = (key, value) => {
          if (typeof replacer === "function")
            value = replacer.call(obj, key, value);
          else if (Array.isArray(replacer) && !replacer.includes(key))
            return;
          if (value !== void 0 || keepUndefined)
            map.items.push(Pair.createPair(key, value, ctx));
        };
        if (obj instanceof Map) {
          for (const [key, value] of obj)
            add(key, value);
        } else if (obj && typeof obj === "object") {
          for (const key of Object.keys(obj))
            add(key, obj[key]);
        }
        if (typeof schema.sortMapEntries === "function") {
          map.items.sort(schema.sortMapEntries);
        }
        return map;
      }
      /**
       * Adds a value to the collection.
       *
       * @param overwrite - If not set `true`, using a key that is already in the
       *   collection will throw. Otherwise, overwrites the previous value.
       */
      add(pair, overwrite) {
        let _pair;
        if (identity.isPair(pair))
          _pair = pair;
        else if (!pair || typeof pair !== "object" || !("key" in pair)) {
          _pair = new Pair.Pair(pair, pair?.value);
        } else
          _pair = new Pair.Pair(pair.key, pair.value);
        const prev = findPair(this.items, _pair.key);
        const sortEntries = this.schema?.sortMapEntries;
        if (prev) {
          if (!overwrite)
            throw new Error(`Key ${_pair.key} already set`);
          if (identity.isScalar(prev.value) && Scalar.isScalarValue(_pair.value))
            prev.value.value = _pair.value;
          else
            prev.value = _pair.value;
        } else if (sortEntries) {
          const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
          if (i === -1)
            this.items.push(_pair);
          else
            this.items.splice(i, 0, _pair);
        } else {
          this.items.push(_pair);
        }
      }
      delete(key) {
        const it = findPair(this.items, key);
        if (!it)
          return false;
        const del = this.items.splice(this.items.indexOf(it), 1);
        return del.length > 0;
      }
      get(key, keepScalar) {
        const it = findPair(this.items, key);
        const node = it?.value;
        return (!keepScalar && identity.isScalar(node) ? node.value : node) ?? void 0;
      }
      has(key) {
        return !!findPair(this.items, key);
      }
      set(key, value) {
        this.add(new Pair.Pair(key, value), true);
      }
      /**
       * @param ctx - Conversion context, originally set in Document#toJS()
       * @param {Class} Type - If set, forces the returned collection type
       * @returns Instance of Type, Map, or Object
       */
      toJSON(_, ctx, Type) {
        const map = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
        if (ctx?.onCreate)
          ctx.onCreate(map);
        for (const item of this.items)
          addPairToJSMap.addPairToJSMap(ctx, map, item);
        return map;
      }
      toString(ctx, onComment, onChompKeep) {
        if (!ctx)
          return JSON.stringify(this);
        for (const item of this.items) {
          if (!identity.isPair(item))
            throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
        }
        if (!ctx.allNullValues && this.hasAllNullValues(false))
          ctx = Object.assign({}, ctx, { allNullValues: true });
        return stringifyCollection.stringifyCollection(this, ctx, {
          blockItemPrefix: "",
          flowChars: { start: "{", end: "}" },
          itemIndent: ctx.indent || "",
          onChompKeep,
          onComment
        });
      }
    };
    exports2.YAMLMap = YAMLMap;
    exports2.findPair = findPair;
  }
});

// node_modules/yaml/dist/schema/common/map.js
var require_map = __commonJS({
  "node_modules/yaml/dist/schema/common/map.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var YAMLMap = require_YAMLMap();
    var map = {
      collection: "map",
      default: true,
      nodeClass: YAMLMap.YAMLMap,
      tag: "tag:yaml.org,2002:map",
      resolve(map2, onError) {
        if (!identity.isMap(map2))
          onError("Expected a mapping for this tag");
        return map2;
      },
      createNode: (schema, obj, ctx) => YAMLMap.YAMLMap.from(schema, obj, ctx)
    };
    exports2.map = map;
  }
});

// node_modules/yaml/dist/nodes/YAMLSeq.js
var require_YAMLSeq = __commonJS({
  "node_modules/yaml/dist/nodes/YAMLSeq.js"(exports2) {
    "use strict";
    var createNode = require_createNode();
    var stringifyCollection = require_stringifyCollection();
    var Collection = require_Collection();
    var identity = require_identity();
    var Scalar = require_Scalar();
    var toJS = require_toJS();
    var YAMLSeq = class extends Collection.Collection {
      static get tagName() {
        return "tag:yaml.org,2002:seq";
      }
      constructor(schema) {
        super(identity.SEQ, schema);
        this.items = [];
      }
      add(value) {
        this.items.push(value);
      }
      /**
       * Removes a value from the collection.
       *
       * `key` must contain a representation of an integer for this to succeed.
       * It may be wrapped in a `Scalar`.
       *
       * @returns `true` if the item was found and removed.
       */
      delete(key) {
        const idx = asItemIndex(key);
        if (typeof idx !== "number")
          return false;
        const del = this.items.splice(idx, 1);
        return del.length > 0;
      }
      get(key, keepScalar) {
        const idx = asItemIndex(key);
        if (typeof idx !== "number")
          return void 0;
        const it = this.items[idx];
        return !keepScalar && identity.isScalar(it) ? it.value : it;
      }
      /**
       * Checks if the collection includes a value with the key `key`.
       *
       * `key` must contain a representation of an integer for this to succeed.
       * It may be wrapped in a `Scalar`.
       */
      has(key) {
        const idx = asItemIndex(key);
        return typeof idx === "number" && idx < this.items.length;
      }
      /**
       * Sets a value in this collection. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       *
       * If `key` does not contain a representation of an integer, this will throw.
       * It may be wrapped in a `Scalar`.
       */
      set(key, value) {
        const idx = asItemIndex(key);
        if (typeof idx !== "number")
          throw new Error(`Expected a valid index, not ${key}.`);
        const prev = this.items[idx];
        if (identity.isScalar(prev) && Scalar.isScalarValue(value))
          prev.value = value;
        else
          this.items[idx] = value;
      }
      toJSON(_, ctx) {
        const seq = [];
        if (ctx?.onCreate)
          ctx.onCreate(seq);
        let i = 0;
        for (const item of this.items)
          seq.push(toJS.toJS(item, String(i++), ctx));
        return seq;
      }
      toString(ctx, onComment, onChompKeep) {
        if (!ctx)
          return JSON.stringify(this);
        return stringifyCollection.stringifyCollection(this, ctx, {
          blockItemPrefix: "- ",
          flowChars: { start: "[", end: "]" },
          itemIndent: (ctx.indent || "") + "  ",
          onChompKeep,
          onComment
        });
      }
      static from(schema, obj, ctx) {
        const { replacer } = ctx;
        const seq = new this(schema);
        if (obj && Symbol.iterator in Object(obj)) {
          let i = 0;
          for (let it of obj) {
            if (typeof replacer === "function") {
              const key = obj instanceof Set ? it : String(i++);
              it = replacer.call(obj, key, it);
            }
            seq.items.push(createNode.createNode(it, void 0, ctx));
          }
        }
        return seq;
      }
    };
    function asItemIndex(key) {
      let idx = identity.isScalar(key) ? key.value : key;
      if (idx && typeof idx === "string")
        idx = Number(idx);
      return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
    }
    exports2.YAMLSeq = YAMLSeq;
  }
});

// node_modules/yaml/dist/schema/common/seq.js
var require_seq = __commonJS({
  "node_modules/yaml/dist/schema/common/seq.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var YAMLSeq = require_YAMLSeq();
    var seq = {
      collection: "seq",
      default: true,
      nodeClass: YAMLSeq.YAMLSeq,
      tag: "tag:yaml.org,2002:seq",
      resolve(seq2, onError) {
        if (!identity.isSeq(seq2))
          onError("Expected a sequence for this tag");
        return seq2;
      },
      createNode: (schema, obj, ctx) => YAMLSeq.YAMLSeq.from(schema, obj, ctx)
    };
    exports2.seq = seq;
  }
});

// node_modules/yaml/dist/schema/common/string.js
var require_string = __commonJS({
  "node_modules/yaml/dist/schema/common/string.js"(exports2) {
    "use strict";
    var stringifyString = require_stringifyString();
    var string = {
      identify: (value) => typeof value === "string",
      default: true,
      tag: "tag:yaml.org,2002:str",
      resolve: (str) => str,
      stringify(item, ctx, onComment, onChompKeep) {
        ctx = Object.assign({ actualString: true }, ctx);
        return stringifyString.stringifyString(item, ctx, onComment, onChompKeep);
      }
    };
    exports2.string = string;
  }
});

// node_modules/yaml/dist/schema/common/null.js
var require_null = __commonJS({
  "node_modules/yaml/dist/schema/common/null.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var nullTag = {
      identify: (value) => value == null,
      createNode: () => new Scalar.Scalar(null),
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => new Scalar.Scalar(null),
      stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
    };
    exports2.nullTag = nullTag;
  }
});

// node_modules/yaml/dist/schema/core/bool.js
var require_bool = __commonJS({
  "node_modules/yaml/dist/schema/core/bool.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var boolTag = {
      identify: (value) => typeof value === "boolean",
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: (str) => new Scalar.Scalar(str[0] === "t" || str[0] === "T"),
      stringify({ source, value }, ctx) {
        if (source && boolTag.test.test(source)) {
          const sv = source[0] === "t" || source[0] === "T";
          if (value === sv)
            return source;
        }
        return value ? ctx.options.trueStr : ctx.options.falseStr;
      }
    };
    exports2.boolTag = boolTag;
  }
});

// node_modules/yaml/dist/stringify/stringifyNumber.js
var require_stringifyNumber = __commonJS({
  "node_modules/yaml/dist/stringify/stringifyNumber.js"(exports2) {
    "use strict";
    function stringifyNumber({ format, minFractionDigits, tag, value }) {
      if (typeof value === "bigint")
        return String(value);
      const num = typeof value === "number" ? value : Number(value);
      if (!isFinite(num))
        return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
      let n = JSON.stringify(value);
      if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^\d/.test(n)) {
        let i = n.indexOf(".");
        if (i < 0) {
          i = n.length;
          n += ".";
        }
        let d = minFractionDigits - (n.length - i - 1);
        while (d-- > 0)
          n += "0";
      }
      return n;
    }
    exports2.stringifyNumber = stringifyNumber;
  }
});

// node_modules/yaml/dist/schema/core/float.js
var require_float = __commonJS({
  "node_modules/yaml/dist/schema/core/float.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var stringifyNumber = require_stringifyNumber();
    var floatNaN = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
      resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: stringifyNumber.stringifyNumber
    };
    var floatExp = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: (str) => parseFloat(str),
      stringify(node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : stringifyNumber.stringifyNumber(node);
      }
    };
    var float = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
      resolve(str) {
        const node = new Scalar.Scalar(parseFloat(str));
        const dot = str.indexOf(".");
        if (dot !== -1 && str[str.length - 1] === "0")
          node.minFractionDigits = str.length - dot - 1;
        return node;
      },
      stringify: stringifyNumber.stringifyNumber
    };
    exports2.float = float;
    exports2.floatExp = floatExp;
    exports2.floatNaN = floatNaN;
  }
});

// node_modules/yaml/dist/schema/core/int.js
var require_int = __commonJS({
  "node_modules/yaml/dist/schema/core/int.js"(exports2) {
    "use strict";
    var stringifyNumber = require_stringifyNumber();
    var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
    var intResolve = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
    function intStringify(node, radix, prefix) {
      const { value } = node;
      if (intIdentify(value) && value >= 0)
        return prefix + value.toString(radix);
      return stringifyNumber.stringifyNumber(node);
    }
    var intOct = {
      identify: (value) => intIdentify(value) && value >= 0,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^0o[0-7]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 8, opt),
      stringify: (node) => intStringify(node, 8, "0o")
    };
    var int = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
      stringify: stringifyNumber.stringifyNumber
    };
    var intHex = {
      identify: (value) => intIdentify(value) && value >= 0,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^0x[0-9a-fA-F]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
      stringify: (node) => intStringify(node, 16, "0x")
    };
    exports2.int = int;
    exports2.intHex = intHex;
    exports2.intOct = intOct;
  }
});

// node_modules/yaml/dist/schema/core/schema.js
var require_schema = __commonJS({
  "node_modules/yaml/dist/schema/core/schema.js"(exports2) {
    "use strict";
    var map = require_map();
    var _null = require_null();
    var seq = require_seq();
    var string = require_string();
    var bool = require_bool();
    var float = require_float();
    var int = require_int();
    var schema = [
      map.map,
      seq.seq,
      string.string,
      _null.nullTag,
      bool.boolTag,
      int.intOct,
      int.int,
      int.intHex,
      float.floatNaN,
      float.floatExp,
      float.float
    ];
    exports2.schema = schema;
  }
});

// node_modules/yaml/dist/schema/json/schema.js
var require_schema2 = __commonJS({
  "node_modules/yaml/dist/schema/json/schema.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var map = require_map();
    var seq = require_seq();
    function intIdentify(value) {
      return typeof value === "bigint" || Number.isInteger(value);
    }
    var stringifyJSON = ({ value }) => JSON.stringify(value);
    var jsonScalars = [
      {
        identify: (value) => typeof value === "string",
        default: true,
        tag: "tag:yaml.org,2002:str",
        resolve: (str) => str,
        stringify: stringifyJSON
      },
      {
        identify: (value) => value == null,
        createNode: () => new Scalar.Scalar(null),
        default: true,
        tag: "tag:yaml.org,2002:null",
        test: /^null$/,
        resolve: () => null,
        stringify: stringifyJSON
      },
      {
        identify: (value) => typeof value === "boolean",
        default: true,
        tag: "tag:yaml.org,2002:bool",
        test: /^true$|^false$/,
        resolve: (str) => str === "true",
        stringify: stringifyJSON
      },
      {
        identify: intIdentify,
        default: true,
        tag: "tag:yaml.org,2002:int",
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
        stringify: ({ value }) => intIdentify(value) ? value.toString() : JSON.stringify(value)
      },
      {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (str) => parseFloat(str),
        stringify: stringifyJSON
      }
    ];
    var jsonError = {
      default: true,
      tag: "",
      test: /^/,
      resolve(str, onError) {
        onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
        return str;
      }
    };
    var schema = [map.map, seq.seq].concat(jsonScalars, jsonError);
    exports2.schema = schema;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/binary.js
var require_binary = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/binary.js"(exports2) {
    "use strict";
    var node_buffer = require("buffer");
    var Scalar = require_Scalar();
    var stringifyString = require_stringifyString();
    var binary = {
      identify: (value) => value instanceof Uint8Array,
      // Buffer inherits from Uint8Array
      default: false,
      tag: "tag:yaml.org,2002:binary",
      /**
       * Returns a Buffer in node and an Uint8Array in browsers
       *
       * To use the resulting buffer as an image, you'll want to do something like:
       *
       *   const blob = new Blob([buffer], { type: 'image/jpeg' })
       *   document.querySelector('#photo').src = URL.createObjectURL(blob)
       */
      resolve(src, onError) {
        if (typeof node_buffer.Buffer === "function") {
          return node_buffer.Buffer.from(src, "base64");
        } else if (typeof atob === "function") {
          const str = atob(src.replace(/[\n\r]/g, ""));
          const buffer = new Uint8Array(str.length);
          for (let i = 0; i < str.length; ++i)
            buffer[i] = str.charCodeAt(i);
          return buffer;
        } else {
          onError("This environment does not support reading binary tags; either Buffer or atob is required");
          return src;
        }
      },
      stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
        if (!value)
          return "";
        const buf = value;
        let str;
        if (typeof node_buffer.Buffer === "function") {
          str = buf instanceof node_buffer.Buffer ? buf.toString("base64") : node_buffer.Buffer.from(buf.buffer).toString("base64");
        } else if (typeof btoa === "function") {
          let s = "";
          for (let i = 0; i < buf.length; ++i)
            s += String.fromCharCode(buf[i]);
          str = btoa(s);
        } else {
          throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
        }
        type ?? (type = Scalar.Scalar.BLOCK_LITERAL);
        if (type !== Scalar.Scalar.QUOTE_DOUBLE) {
          const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
          const n = Math.ceil(str.length / lineWidth);
          const lines = new Array(n);
          for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
            lines[i] = str.substr(o, lineWidth);
          }
          str = lines.join(type === Scalar.Scalar.BLOCK_LITERAL ? "\n" : " ");
        }
        return stringifyString.stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
      }
    };
    exports2.binary = binary;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/pairs.js
var require_pairs = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/pairs.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Pair = require_Pair();
    var Scalar = require_Scalar();
    var YAMLSeq = require_YAMLSeq();
    function resolvePairs(seq, onError) {
      if (identity.isSeq(seq)) {
        for (let i = 0; i < seq.items.length; ++i) {
          let item = seq.items[i];
          if (identity.isPair(item))
            continue;
          else if (identity.isMap(item)) {
            if (item.items.length > 1)
              onError("Each pair must have its own sequence indicator");
            const pair = item.items[0] || new Pair.Pair(new Scalar.Scalar(null));
            if (item.commentBefore)
              pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}
${pair.key.commentBefore}` : item.commentBefore;
            if (item.comment) {
              const cn = pair.value ?? pair.key;
              cn.comment = cn.comment ? `${item.comment}
${cn.comment}` : item.comment;
            }
            item = pair;
          }
          seq.items[i] = identity.isPair(item) ? item : new Pair.Pair(item);
        }
      } else
        onError("Expected a sequence for this tag");
      return seq;
    }
    function createPairs(schema, iterable, ctx) {
      const { replacer } = ctx;
      const pairs2 = new YAMLSeq.YAMLSeq(schema);
      pairs2.tag = "tag:yaml.org,2002:pairs";
      let i = 0;
      if (iterable && Symbol.iterator in Object(iterable))
        for (let it of iterable) {
          if (typeof replacer === "function")
            it = replacer.call(iterable, String(i++), it);
          let key, value;
          if (Array.isArray(it)) {
            if (it.length === 2) {
              key = it[0];
              value = it[1];
            } else
              throw new TypeError(`Expected [key, value] tuple: ${it}`);
          } else if (it && it instanceof Object) {
            const keys = Object.keys(it);
            if (keys.length === 1) {
              key = keys[0];
              value = it[key];
            } else {
              throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
            }
          } else {
            key = it;
          }
          pairs2.items.push(Pair.createPair(key, value, ctx));
        }
      return pairs2;
    }
    var pairs = {
      collection: "seq",
      default: false,
      tag: "tag:yaml.org,2002:pairs",
      resolve: resolvePairs,
      createNode: createPairs
    };
    exports2.createPairs = createPairs;
    exports2.pairs = pairs;
    exports2.resolvePairs = resolvePairs;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/omap.js
var require_omap = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/omap.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var toJS = require_toJS();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var pairs = require_pairs();
    var YAMLOMap = class _YAMLOMap extends YAMLSeq.YAMLSeq {
      constructor() {
        super();
        this.add = YAMLMap.YAMLMap.prototype.add.bind(this);
        this.delete = YAMLMap.YAMLMap.prototype.delete.bind(this);
        this.get = YAMLMap.YAMLMap.prototype.get.bind(this);
        this.has = YAMLMap.YAMLMap.prototype.has.bind(this);
        this.set = YAMLMap.YAMLMap.prototype.set.bind(this);
        this.tag = _YAMLOMap.tag;
      }
      /**
       * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
       * but TypeScript won't allow widening the signature of a child method.
       */
      toJSON(_, ctx) {
        if (!ctx)
          return super.toJSON(_);
        const map = /* @__PURE__ */ new Map();
        if (ctx?.onCreate)
          ctx.onCreate(map);
        for (const pair of this.items) {
          let key, value;
          if (identity.isPair(pair)) {
            key = toJS.toJS(pair.key, "", ctx);
            value = toJS.toJS(pair.value, key, ctx);
          } else {
            key = toJS.toJS(pair, "", ctx);
          }
          if (map.has(key))
            throw new Error("Ordered maps must not include duplicate keys");
          map.set(key, value);
        }
        return map;
      }
      static from(schema, iterable, ctx) {
        const pairs$1 = pairs.createPairs(schema, iterable, ctx);
        const omap2 = new this();
        omap2.items = pairs$1.items;
        return omap2;
      }
    };
    YAMLOMap.tag = "tag:yaml.org,2002:omap";
    var omap = {
      collection: "seq",
      identify: (value) => value instanceof Map,
      nodeClass: YAMLOMap,
      default: false,
      tag: "tag:yaml.org,2002:omap",
      resolve(seq, onError) {
        const pairs$1 = pairs.resolvePairs(seq, onError);
        const seenKeys = [];
        for (const { key } of pairs$1.items) {
          if (identity.isScalar(key)) {
            if (seenKeys.includes(key.value)) {
              onError(`Ordered maps must not include duplicate keys: ${key.value}`);
            } else {
              seenKeys.push(key.value);
            }
          }
        }
        return Object.assign(new YAMLOMap(), pairs$1);
      },
      createNode: (schema, iterable, ctx) => YAMLOMap.from(schema, iterable, ctx)
    };
    exports2.YAMLOMap = YAMLOMap;
    exports2.omap = omap;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/bool.js
var require_bool2 = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/bool.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    function boolStringify({ value, source }, ctx) {
      const boolObj = value ? trueTag : falseTag;
      if (source && boolObj.test.test(source))
        return source;
      return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
    var trueTag = {
      identify: (value) => value === true,
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
      resolve: () => new Scalar.Scalar(true),
      stringify: boolStringify
    };
    var falseTag = {
      identify: (value) => value === false,
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
      resolve: () => new Scalar.Scalar(false),
      stringify: boolStringify
    };
    exports2.falseTag = falseTag;
    exports2.trueTag = trueTag;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/float.js
var require_float2 = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/float.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var stringifyNumber = require_stringifyNumber();
    var floatNaN = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
      resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: stringifyNumber.stringifyNumber
    };
    var floatExp = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
      resolve: (str) => parseFloat(str.replace(/_/g, "")),
      stringify(node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : stringifyNumber.stringifyNumber(node);
      }
    };
    var float = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
      resolve(str) {
        const node = new Scalar.Scalar(parseFloat(str.replace(/_/g, "")));
        const dot = str.indexOf(".");
        if (dot !== -1) {
          const f = str.substring(dot + 1).replace(/_/g, "");
          if (f[f.length - 1] === "0")
            node.minFractionDigits = f.length;
        }
        return node;
      },
      stringify: stringifyNumber.stringifyNumber
    };
    exports2.float = float;
    exports2.floatExp = floatExp;
    exports2.floatNaN = floatNaN;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/int.js
var require_int2 = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/int.js"(exports2) {
    "use strict";
    var stringifyNumber = require_stringifyNumber();
    var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
    function intResolve(str, offset, radix, { intAsBigInt }) {
      const sign = str[0];
      if (sign === "-" || sign === "+")
        offset += 1;
      str = str.substring(offset).replace(/_/g, "");
      if (intAsBigInt) {
        switch (radix) {
          case 2:
            str = `0b${str}`;
            break;
          case 8:
            str = `0o${str}`;
            break;
          case 16:
            str = `0x${str}`;
            break;
        }
        const n2 = BigInt(str);
        return sign === "-" ? BigInt(-1) * n2 : n2;
      }
      const n = parseInt(str, radix);
      return sign === "-" ? -1 * n : n;
    }
    function intStringify(node, radix, prefix) {
      const { value } = node;
      if (intIdentify(value)) {
        const str = value.toString(radix);
        return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
      }
      return stringifyNumber.stringifyNumber(node);
    }
    var intBin = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "BIN",
      test: /^[-+]?0b[0-1_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
      stringify: (node) => intStringify(node, 2, "0b")
    };
    var intOct = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^[-+]?0[0-7_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
      stringify: (node) => intStringify(node, 8, "0")
    };
    var int = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9][0-9_]*$/,
      resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
      stringify: stringifyNumber.stringifyNumber
    };
    var intHex = {
      identify: intIdentify,
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^[-+]?0x[0-9a-fA-F_]+$/,
      resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
      stringify: (node) => intStringify(node, 16, "0x")
    };
    exports2.int = int;
    exports2.intBin = intBin;
    exports2.intHex = intHex;
    exports2.intOct = intOct;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/set.js
var require_set = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/set.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Pair = require_Pair();
    var YAMLMap = require_YAMLMap();
    var YAMLSet = class _YAMLSet extends YAMLMap.YAMLMap {
      constructor(schema) {
        super(schema);
        this.tag = _YAMLSet.tag;
      }
      add(key) {
        let pair;
        if (identity.isPair(key))
          pair = key;
        else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null)
          pair = new Pair.Pair(key.key, null);
        else
          pair = new Pair.Pair(key, null);
        const prev = YAMLMap.findPair(this.items, pair.key);
        if (!prev)
          this.items.push(pair);
      }
      /**
       * If `keepPair` is `true`, returns the Pair matching `key`.
       * Otherwise, returns the value of that Pair's key.
       */
      get(key, keepPair) {
        const pair = YAMLMap.findPair(this.items, key);
        return !keepPair && identity.isPair(pair) ? identity.isScalar(pair.key) ? pair.key.value : pair.key : pair;
      }
      set(key, value) {
        if (typeof value !== "boolean")
          throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
        const prev = YAMLMap.findPair(this.items, key);
        if (prev && !value) {
          this.items.splice(this.items.indexOf(prev), 1);
        } else if (!prev && value) {
          this.items.push(new Pair.Pair(key));
        }
      }
      toJSON(_, ctx) {
        return super.toJSON(_, ctx, Set);
      }
      toString(ctx, onComment, onChompKeep) {
        if (!ctx)
          return JSON.stringify(this);
        if (this.hasAllNullValues(true))
          return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
        else
          throw new Error("Set items must all have null values");
      }
      static from(schema, iterable, ctx) {
        const { replacer } = ctx;
        const set2 = new this(schema);
        if (iterable && Symbol.iterator in Object(iterable))
          for (let value of iterable) {
            if (typeof replacer === "function")
              value = replacer.call(iterable, value, value);
            set2.items.push(Pair.createPair(value, null, ctx));
          }
        return set2;
      }
    };
    YAMLSet.tag = "tag:yaml.org,2002:set";
    var set = {
      collection: "map",
      identify: (value) => value instanceof Set,
      nodeClass: YAMLSet,
      default: false,
      tag: "tag:yaml.org,2002:set",
      createNode: (schema, iterable, ctx) => YAMLSet.from(schema, iterable, ctx),
      resolve(map, onError) {
        if (identity.isMap(map)) {
          if (map.hasAllNullValues(true))
            return Object.assign(new YAMLSet(), map);
          else
            onError("Set items must all have null values");
        } else
          onError("Expected a mapping for this tag");
        return map;
      }
    };
    exports2.YAMLSet = YAMLSet;
    exports2.set = set;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/timestamp.js"(exports2) {
    "use strict";
    var stringifyNumber = require_stringifyNumber();
    function parseSexagesimal(str, asBigInt) {
      const sign = str[0];
      const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
      const num = (n) => asBigInt ? BigInt(n) : Number(n);
      const res = parts.replace(/_/g, "").split(":").reduce((res2, p) => res2 * num(60) + num(p), num(0));
      return sign === "-" ? num(-1) * res : res;
    }
    function stringifySexagesimal(node) {
      let { value } = node;
      let num = (n) => n;
      if (typeof value === "bigint")
        num = (n) => BigInt(n);
      else if (isNaN(value) || !isFinite(value))
        return stringifyNumber.stringifyNumber(node);
      let sign = "";
      if (value < 0) {
        sign = "-";
        value *= num(-1);
      }
      const _60 = num(60);
      const parts = [value % _60];
      if (value < 60) {
        parts.unshift(0);
      } else {
        value = (value - parts[0]) / _60;
        parts.unshift(value % _60);
        if (value >= 60) {
          value = (value - parts[0]) / _60;
          parts.unshift(value);
        }
      }
      return sign + parts.map((n) => String(n).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
    }
    var intTime = {
      identify: (value) => typeof value === "bigint" || Number.isInteger(value),
      default: true,
      tag: "tag:yaml.org,2002:int",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
      resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
      stringify: stringifySexagesimal
    };
    var floatTime = {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
      resolve: (str) => parseSexagesimal(str, false),
      stringify: stringifySexagesimal
    };
    var timestamp = {
      identify: (value) => value instanceof Date,
      default: true,
      tag: "tag:yaml.org,2002:timestamp",
      // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
      // may be omitted altogether, resulting in a date format. In such a case, the time part is
      // assumed to be 00:00:00Z (start of day, UTC).
      test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
      resolve(str) {
        const match = str.match(timestamp.test);
        if (!match)
          throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
        const [, year, month, day, hour, minute, second] = match.map(Number);
        const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
        let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
        const tz = match[8];
        if (tz && tz !== "Z") {
          let d = parseSexagesimal(tz, false);
          if (Math.abs(d) < 30)
            d *= 60;
          date -= 6e4 * d;
        }
        return new Date(date);
      },
      stringify: ({ value }) => value?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
    };
    exports2.floatTime = floatTime;
    exports2.intTime = intTime;
    exports2.timestamp = timestamp;
  }
});

// node_modules/yaml/dist/schema/yaml-1.1/schema.js
var require_schema3 = __commonJS({
  "node_modules/yaml/dist/schema/yaml-1.1/schema.js"(exports2) {
    "use strict";
    var map = require_map();
    var _null = require_null();
    var seq = require_seq();
    var string = require_string();
    var binary = require_binary();
    var bool = require_bool2();
    var float = require_float2();
    var int = require_int2();
    var merge = require_merge();
    var omap = require_omap();
    var pairs = require_pairs();
    var set = require_set();
    var timestamp = require_timestamp();
    var schema = [
      map.map,
      seq.seq,
      string.string,
      _null.nullTag,
      bool.trueTag,
      bool.falseTag,
      int.intBin,
      int.intOct,
      int.int,
      int.intHex,
      float.floatNaN,
      float.floatExp,
      float.float,
      binary.binary,
      merge.merge,
      omap.omap,
      pairs.pairs,
      set.set,
      timestamp.intTime,
      timestamp.floatTime,
      timestamp.timestamp
    ];
    exports2.schema = schema;
  }
});

// node_modules/yaml/dist/schema/tags.js
var require_tags = __commonJS({
  "node_modules/yaml/dist/schema/tags.js"(exports2) {
    "use strict";
    var map = require_map();
    var _null = require_null();
    var seq = require_seq();
    var string = require_string();
    var bool = require_bool();
    var float = require_float();
    var int = require_int();
    var schema = require_schema();
    var schema$1 = require_schema2();
    var binary = require_binary();
    var merge = require_merge();
    var omap = require_omap();
    var pairs = require_pairs();
    var schema$2 = require_schema3();
    var set = require_set();
    var timestamp = require_timestamp();
    var schemas = /* @__PURE__ */ new Map([
      ["core", schema.schema],
      ["failsafe", [map.map, seq.seq, string.string]],
      ["json", schema$1.schema],
      ["yaml11", schema$2.schema],
      ["yaml-1.1", schema$2.schema]
    ]);
    var tagsByName = {
      binary: binary.binary,
      bool: bool.boolTag,
      float: float.float,
      floatExp: float.floatExp,
      floatNaN: float.floatNaN,
      floatTime: timestamp.floatTime,
      int: int.int,
      intHex: int.intHex,
      intOct: int.intOct,
      intTime: timestamp.intTime,
      map: map.map,
      merge: merge.merge,
      null: _null.nullTag,
      omap: omap.omap,
      pairs: pairs.pairs,
      seq: seq.seq,
      set: set.set,
      timestamp: timestamp.timestamp
    };
    var coreKnownTags = {
      "tag:yaml.org,2002:binary": binary.binary,
      "tag:yaml.org,2002:merge": merge.merge,
      "tag:yaml.org,2002:omap": omap.omap,
      "tag:yaml.org,2002:pairs": pairs.pairs,
      "tag:yaml.org,2002:set": set.set,
      "tag:yaml.org,2002:timestamp": timestamp.timestamp
    };
    function getTags(customTags, schemaName, addMergeTag) {
      const schemaTags = schemas.get(schemaName);
      if (schemaTags && !customTags) {
        return addMergeTag && !schemaTags.includes(merge.merge) ? schemaTags.concat(merge.merge) : schemaTags.slice();
      }
      let tags = schemaTags;
      if (!tags) {
        if (Array.isArray(customTags))
          tags = [];
        else {
          const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
          throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
        }
      }
      if (Array.isArray(customTags)) {
        for (const tag of customTags)
          tags = tags.concat(tag);
      } else if (typeof customTags === "function") {
        tags = customTags(tags.slice());
      }
      if (addMergeTag)
        tags = tags.concat(merge.merge);
      return tags.reduce((tags2, tag) => {
        const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
        if (!tagObj) {
          const tagName = JSON.stringify(tag);
          const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
          throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
        }
        if (!tags2.includes(tagObj))
          tags2.push(tagObj);
        return tags2;
      }, []);
    }
    exports2.coreKnownTags = coreKnownTags;
    exports2.getTags = getTags;
  }
});

// node_modules/yaml/dist/schema/Schema.js
var require_Schema = __commonJS({
  "node_modules/yaml/dist/schema/Schema.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var map = require_map();
    var seq = require_seq();
    var string = require_string();
    var tags = require_tags();
    var sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    var Schema = class _Schema {
      constructor({ compat, customTags, merge, resolveKnownTags, schema, sortMapEntries, toStringDefaults }) {
        this.compat = Array.isArray(compat) ? tags.getTags(compat, "compat") : compat ? tags.getTags(null, compat) : null;
        this.name = typeof schema === "string" && schema || "core";
        this.knownTags = resolveKnownTags ? tags.coreKnownTags : {};
        this.tags = tags.getTags(customTags, this.name, merge);
        this.toStringOptions = toStringDefaults ?? null;
        Object.defineProperty(this, identity.MAP, { value: map.map });
        Object.defineProperty(this, identity.SCALAR, { value: string.string });
        Object.defineProperty(this, identity.SEQ, { value: seq.seq });
        this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
      }
      clone() {
        const copy = Object.create(_Schema.prototype, Object.getOwnPropertyDescriptors(this));
        copy.tags = this.tags.slice();
        return copy;
      }
    };
    exports2.Schema = Schema;
  }
});

// node_modules/yaml/dist/stringify/stringifyDocument.js
var require_stringifyDocument = __commonJS({
  "node_modules/yaml/dist/stringify/stringifyDocument.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var stringify = require_stringify();
    var stringifyComment = require_stringifyComment();
    function stringifyDocument(doc, options) {
      const lines = [];
      let hasDirectives = options.directives === true;
      if (options.directives !== false && doc.directives) {
        const dir = doc.directives.toString(doc);
        if (dir) {
          lines.push(dir);
          hasDirectives = true;
        } else if (doc.directives.docStart)
          hasDirectives = true;
      }
      if (hasDirectives)
        lines.push("---");
      const ctx = stringify.createStringifyContext(doc, options);
      const { commentString } = ctx.options;
      if (doc.commentBefore) {
        if (lines.length !== 1)
          lines.unshift("");
        const cs = commentString(doc.commentBefore);
        lines.unshift(stringifyComment.indentComment(cs, ""));
      }
      let chompKeep = false;
      let contentComment = null;
      if (doc.contents) {
        if (identity.isNode(doc.contents)) {
          if (doc.contents.spaceBefore && hasDirectives)
            lines.push("");
          if (doc.contents.commentBefore) {
            const cs = commentString(doc.contents.commentBefore);
            lines.push(stringifyComment.indentComment(cs, ""));
          }
          ctx.forceBlockIndent = !!doc.comment;
          contentComment = doc.contents.comment;
        }
        const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
        let body = stringify.stringify(doc.contents, ctx, () => contentComment = null, onChompKeep);
        if (contentComment)
          body += stringifyComment.lineComment(body, "", commentString(contentComment));
        if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") {
          lines[lines.length - 1] = `--- ${body}`;
        } else
          lines.push(body);
      } else {
        lines.push(stringify.stringify(doc.contents, ctx));
      }
      if (doc.directives?.docEnd) {
        if (doc.comment) {
          const cs = commentString(doc.comment);
          if (cs.includes("\n")) {
            lines.push("...");
            lines.push(stringifyComment.indentComment(cs, ""));
          } else {
            lines.push(`... ${cs}`);
          }
        } else {
          lines.push("...");
        }
      } else {
        let dc = doc.comment;
        if (dc && chompKeep)
          dc = dc.replace(/^\n+/, "");
        if (dc) {
          if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "")
            lines.push("");
          lines.push(stringifyComment.indentComment(commentString(dc), ""));
        }
      }
      return lines.join("\n") + "\n";
    }
    exports2.stringifyDocument = stringifyDocument;
  }
});

// node_modules/yaml/dist/doc/Document.js
var require_Document = __commonJS({
  "node_modules/yaml/dist/doc/Document.js"(exports2) {
    "use strict";
    var Alias = require_Alias();
    var Collection = require_Collection();
    var identity = require_identity();
    var Pair = require_Pair();
    var toJS = require_toJS();
    var Schema = require_Schema();
    var stringifyDocument = require_stringifyDocument();
    var anchors = require_anchors();
    var applyReviver = require_applyReviver();
    var createNode = require_createNode();
    var directives = require_directives();
    var Document = class _Document {
      constructor(value, replacer, options) {
        this.commentBefore = null;
        this.comment = null;
        this.errors = [];
        this.warnings = [];
        Object.defineProperty(this, identity.NODE_TYPE, { value: identity.DOC });
        let _replacer = null;
        if (typeof replacer === "function" || Array.isArray(replacer)) {
          _replacer = replacer;
        } else if (options === void 0 && replacer) {
          options = replacer;
          replacer = void 0;
        }
        const opt = Object.assign({
          intAsBigInt: false,
          keepSourceTokens: false,
          logLevel: "warn",
          prettyErrors: true,
          strict: true,
          stringKeys: false,
          uniqueKeys: true,
          version: "1.2"
        }, options);
        this.options = opt;
        let { version } = opt;
        if (options?._directives) {
          this.directives = options._directives.atDocument();
          if (this.directives.yaml.explicit)
            version = this.directives.yaml.version;
        } else
          this.directives = new directives.Directives({ version });
        this.setSchema(version, options);
        this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
      }
      /**
       * Create a deep copy of this Document and its contents.
       *
       * Custom Node values that inherit from `Object` still refer to their original instances.
       */
      clone() {
        const copy = Object.create(_Document.prototype, {
          [identity.NODE_TYPE]: { value: identity.DOC }
        });
        copy.commentBefore = this.commentBefore;
        copy.comment = this.comment;
        copy.errors = this.errors.slice();
        copy.warnings = this.warnings.slice();
        copy.options = Object.assign({}, this.options);
        if (this.directives)
          copy.directives = this.directives.clone();
        copy.schema = this.schema.clone();
        copy.contents = identity.isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
        if (this.range)
          copy.range = this.range.slice();
        return copy;
      }
      /** Adds a value to the document. */
      add(value) {
        if (assertCollection(this.contents))
          this.contents.add(value);
      }
      /** Adds a value to the document. */
      addIn(path, value) {
        if (assertCollection(this.contents))
          this.contents.addIn(path, value);
      }
      /**
       * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
       *
       * If `node` already has an anchor, `name` is ignored.
       * Otherwise, the `node.anchor` value will be set to `name`,
       * or if an anchor with that name is already present in the document,
       * `name` will be used as a prefix for a new unique anchor.
       * If `name` is undefined, the generated anchor will use 'a' as a prefix.
       */
      createAlias(node, name) {
        if (!node.anchor) {
          const prev = anchors.anchorNames(this);
          node.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          !name || prev.has(name) ? anchors.findNewAnchor(name || "a", prev) : name;
        }
        return new Alias.Alias(node.anchor);
      }
      createNode(value, replacer, options) {
        let _replacer = void 0;
        if (typeof replacer === "function") {
          value = replacer.call({ "": value }, "", value);
          _replacer = replacer;
        } else if (Array.isArray(replacer)) {
          const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
          const asStr = replacer.filter(keyToStr).map(String);
          if (asStr.length > 0)
            replacer = replacer.concat(asStr);
          _replacer = replacer;
        } else if (options === void 0 && replacer) {
          options = replacer;
          replacer = void 0;
        }
        const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
        const { onAnchor, setAnchors, sourceObjects } = anchors.createNodeAnchors(
          this,
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          anchorPrefix || "a"
        );
        const ctx = {
          aliasDuplicateObjects: aliasDuplicateObjects ?? true,
          keepUndefined: keepUndefined ?? false,
          onAnchor,
          onTagObj,
          replacer: _replacer,
          schema: this.schema,
          sourceObjects
        };
        const node = createNode.createNode(value, tag, ctx);
        if (flow && identity.isCollection(node))
          node.flow = true;
        setAnchors();
        return node;
      }
      /**
       * Convert a key and a value into a `Pair` using the current schema,
       * recursively wrapping all values as `Scalar` or `Collection` nodes.
       */
      createPair(key, value, options = {}) {
        const k = this.createNode(key, null, options);
        const v = this.createNode(value, null, options);
        return new Pair.Pair(k, v);
      }
      /**
       * Removes a value from the document.
       * @returns `true` if the item was found and removed.
       */
      delete(key) {
        return assertCollection(this.contents) ? this.contents.delete(key) : false;
      }
      /**
       * Removes a value from the document.
       * @returns `true` if the item was found and removed.
       */
      deleteIn(path) {
        if (Collection.isEmptyPath(path)) {
          if (this.contents == null)
            return false;
          this.contents = null;
          return true;
        }
        return assertCollection(this.contents) ? this.contents.deleteIn(path) : false;
      }
      /**
       * Returns item at `key`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      get(key, keepScalar) {
        return identity.isCollection(this.contents) ? this.contents.get(key, keepScalar) : void 0;
      }
      /**
       * Returns item at `path`, or `undefined` if not found. By default unwraps
       * scalar values from their surrounding node; to disable set `keepScalar` to
       * `true` (collections are always returned intact).
       */
      getIn(path, keepScalar) {
        if (Collection.isEmptyPath(path))
          return !keepScalar && identity.isScalar(this.contents) ? this.contents.value : this.contents;
        return identity.isCollection(this.contents) ? this.contents.getIn(path, keepScalar) : void 0;
      }
      /**
       * Checks if the document includes a value with the key `key`.
       */
      has(key) {
        return identity.isCollection(this.contents) ? this.contents.has(key) : false;
      }
      /**
       * Checks if the document includes a value at `path`.
       */
      hasIn(path) {
        if (Collection.isEmptyPath(path))
          return this.contents !== void 0;
        return identity.isCollection(this.contents) ? this.contents.hasIn(path) : false;
      }
      /**
       * Sets a value in this document. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      set(key, value) {
        if (this.contents == null) {
          this.contents = Collection.collectionFromPath(this.schema, [key], value);
        } else if (assertCollection(this.contents)) {
          this.contents.set(key, value);
        }
      }
      /**
       * Sets a value in this document. For `!!set`, `value` needs to be a
       * boolean to add/remove the item from the set.
       */
      setIn(path, value) {
        if (Collection.isEmptyPath(path)) {
          this.contents = value;
        } else if (this.contents == null) {
          this.contents = Collection.collectionFromPath(this.schema, Array.from(path), value);
        } else if (assertCollection(this.contents)) {
          this.contents.setIn(path, value);
        }
      }
      /**
       * Change the YAML version and schema used by the document.
       * A `null` version disables support for directives, explicit tags, anchors, and aliases.
       * It also requires the `schema` option to be given as a `Schema` instance value.
       *
       * Overrides all previously set schema options.
       */
      setSchema(version, options = {}) {
        if (typeof version === "number")
          version = String(version);
        let opt;
        switch (version) {
          case "1.1":
            if (this.directives)
              this.directives.yaml.version = "1.1";
            else
              this.directives = new directives.Directives({ version: "1.1" });
            opt = { resolveKnownTags: false, schema: "yaml-1.1" };
            break;
          case "1.2":
          case "next":
            if (this.directives)
              this.directives.yaml.version = version;
            else
              this.directives = new directives.Directives({ version });
            opt = { resolveKnownTags: true, schema: "core" };
            break;
          case null:
            if (this.directives)
              delete this.directives;
            opt = null;
            break;
          default: {
            const sv = JSON.stringify(version);
            throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
          }
        }
        if (options.schema instanceof Object)
          this.schema = options.schema;
        else if (opt)
          this.schema = new Schema.Schema(Object.assign(opt, options));
        else
          throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
      }
      // json & jsonArg are only used from toJSON()
      toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
        const ctx = {
          anchors: /* @__PURE__ */ new Map(),
          doc: this,
          keep: !json,
          mapAsMap: mapAsMap === true,
          mapKeyWarned: false,
          maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
        };
        const res = toJS.toJS(this.contents, jsonArg ?? "", ctx);
        if (typeof onAnchor === "function")
          for (const { count, res: res2 } of ctx.anchors.values())
            onAnchor(res2, count);
        return typeof reviver === "function" ? applyReviver.applyReviver(reviver, { "": res }, "", res) : res;
      }
      /**
       * A JSON representation of the document `contents`.
       *
       * @param jsonArg Used by `JSON.stringify` to indicate the array index or
       *   property name.
       */
      toJSON(jsonArg, onAnchor) {
        return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
      }
      /** A YAML representation of the document. */
      toString(options = {}) {
        if (this.errors.length > 0)
          throw new Error("Document with errors cannot be stringified");
        if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
          const s = JSON.stringify(options.indent);
          throw new Error(`"indent" option must be a positive integer, not ${s}`);
        }
        return stringifyDocument.stringifyDocument(this, options);
      }
    };
    function assertCollection(contents) {
      if (identity.isCollection(contents))
        return true;
      throw new Error("Expected a YAML collection as document contents");
    }
    exports2.Document = Document;
  }
});

// node_modules/yaml/dist/errors.js
var require_errors = __commonJS({
  "node_modules/yaml/dist/errors.js"(exports2) {
    "use strict";
    var YAMLError = class extends Error {
      constructor(name, pos, code, message) {
        super();
        this.name = name;
        this.code = code;
        this.message = message;
        this.pos = pos;
      }
    };
    var YAMLParseError = class extends YAMLError {
      constructor(pos, code, message) {
        super("YAMLParseError", pos, code, message);
      }
    };
    var YAMLWarning = class extends YAMLError {
      constructor(pos, code, message) {
        super("YAMLWarning", pos, code, message);
      }
    };
    var prettifyError = (src, lc) => (error) => {
      if (error.pos[0] === -1)
        return;
      error.linePos = error.pos.map((pos) => lc.linePos(pos));
      const { line, col } = error.linePos[0];
      error.message += ` at line ${line}, column ${col}`;
      let ci = col - 1;
      let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
      if (ci >= 60 && lineStr.length > 80) {
        const trimStart = Math.min(ci - 39, lineStr.length - 79);
        lineStr = "\u2026" + lineStr.substring(trimStart);
        ci -= trimStart - 1;
      }
      if (lineStr.length > 80)
        lineStr = lineStr.substring(0, 79) + "\u2026";
      if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
        let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
        if (prev.length > 80)
          prev = prev.substring(0, 79) + "\u2026\n";
        lineStr = prev + lineStr;
      }
      if (/[^ ]/.test(lineStr)) {
        let count = 1;
        const end = error.linePos[1];
        if (end && end.line === line && end.col > col) {
          count = Math.max(1, Math.min(end.col - col, 80 - ci));
        }
        const pointer = " ".repeat(ci) + "^".repeat(count);
        error.message += `:

${lineStr}
${pointer}
`;
      }
    };
    exports2.YAMLError = YAMLError;
    exports2.YAMLParseError = YAMLParseError;
    exports2.YAMLWarning = YAMLWarning;
    exports2.prettifyError = prettifyError;
  }
});

// node_modules/yaml/dist/compose/resolve-props.js
var require_resolve_props = __commonJS({
  "node_modules/yaml/dist/compose/resolve-props.js"(exports2) {
    "use strict";
    function resolveProps(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
      let spaceBefore = false;
      let atNewline = startOnNewline;
      let hasSpace = startOnNewline;
      let comment = "";
      let commentSep = "";
      let hasNewline = false;
      let reqSpace = false;
      let tab = null;
      let anchor = null;
      let tag = null;
      let newlineAfterProp = null;
      let comma = null;
      let found = null;
      let start = null;
      for (const token of tokens) {
        if (reqSpace) {
          if (token.type !== "space" && token.type !== "newline" && token.type !== "comma")
            onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
          reqSpace = false;
        }
        if (tab) {
          if (atNewline && token.type !== "comment" && token.type !== "newline") {
            onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
          }
          tab = null;
        }
        switch (token.type) {
          case "space":
            if (!flow && (indicator !== "doc-start" || next?.type !== "flow-collection") && token.source.includes("	")) {
              tab = token;
            }
            hasSpace = true;
            break;
          case "comment": {
            if (!hasSpace)
              onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
            const cb = token.source.substring(1) || " ";
            if (!comment)
              comment = cb;
            else
              comment += commentSep + cb;
            commentSep = "";
            atNewline = false;
            break;
          }
          case "newline":
            if (atNewline) {
              if (comment)
                comment += token.source;
              else if (!found || indicator !== "seq-item-ind")
                spaceBefore = true;
            } else
              commentSep += token.source;
            atNewline = true;
            hasNewline = true;
            if (anchor || tag)
              newlineAfterProp = token;
            hasSpace = true;
            break;
          case "anchor":
            if (anchor)
              onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
            if (token.source.endsWith(":"))
              onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
            anchor = token;
            start ?? (start = token.offset);
            atNewline = false;
            hasSpace = false;
            reqSpace = true;
            break;
          case "tag": {
            if (tag)
              onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
            tag = token;
            start ?? (start = token.offset);
            atNewline = false;
            hasSpace = false;
            reqSpace = true;
            break;
          }
          case indicator:
            if (anchor || tag)
              onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
            if (found)
              onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow ?? "collection"}`);
            found = token;
            atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
            hasSpace = false;
            break;
          case "comma":
            if (flow) {
              if (comma)
                onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
              comma = token;
              atNewline = false;
              hasSpace = false;
              break;
            }
          // else fallthrough
          default:
            onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
            atNewline = false;
            hasSpace = false;
        }
      }
      const last = tokens[tokens.length - 1];
      const end = last ? last.offset + last.source.length : offset;
      if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) {
        onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
      }
      if (tab && (atNewline && tab.indent <= parentIndent || next?.type === "block-map" || next?.type === "block-seq"))
        onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
      return {
        comma,
        found,
        spaceBefore,
        comment,
        hasNewline,
        anchor,
        tag,
        newlineAfterProp,
        end,
        start: start ?? end
      };
    }
    exports2.resolveProps = resolveProps;
  }
});

// node_modules/yaml/dist/compose/util-contains-newline.js
var require_util_contains_newline = __commonJS({
  "node_modules/yaml/dist/compose/util-contains-newline.js"(exports2) {
    "use strict";
    function containsNewline(key) {
      if (!key)
        return null;
      switch (key.type) {
        case "alias":
        case "scalar":
        case "double-quoted-scalar":
        case "single-quoted-scalar":
          if (key.source.includes("\n"))
            return true;
          if (key.end) {
            for (const st of key.end)
              if (st.type === "newline")
                return true;
          }
          return false;
        case "flow-collection":
          for (const it of key.items) {
            for (const st of it.start)
              if (st.type === "newline")
                return true;
            if (it.sep) {
              for (const st of it.sep)
                if (st.type === "newline")
                  return true;
            }
            if (containsNewline(it.key) || containsNewline(it.value))
              return true;
          }
          return false;
        default:
          return true;
      }
    }
    exports2.containsNewline = containsNewline;
  }
});

// node_modules/yaml/dist/compose/util-flow-indent-check.js
var require_util_flow_indent_check = __commonJS({
  "node_modules/yaml/dist/compose/util-flow-indent-check.js"(exports2) {
    "use strict";
    var utilContainsNewline = require_util_contains_newline();
    function flowIndentCheck(indent, fc, onError) {
      if (fc?.type === "flow-collection") {
        const end = fc.end[0];
        if (end.indent === indent && (end.source === "]" || end.source === "}") && utilContainsNewline.containsNewline(fc)) {
          const msg = "Flow end indicator should be more indented than parent";
          onError(end, "BAD_INDENT", msg, true);
        }
      }
    }
    exports2.flowIndentCheck = flowIndentCheck;
  }
});

// node_modules/yaml/dist/compose/util-map-includes.js
var require_util_map_includes = __commonJS({
  "node_modules/yaml/dist/compose/util-map-includes.js"(exports2) {
    "use strict";
    var identity = require_identity();
    function mapIncludes(ctx, items, search) {
      const { uniqueKeys } = ctx.options;
      if (uniqueKeys === false)
        return false;
      const isEqual = typeof uniqueKeys === "function" ? uniqueKeys : (a, b) => a === b || identity.isScalar(a) && identity.isScalar(b) && a.value === b.value;
      return items.some((pair) => isEqual(pair.key, search));
    }
    exports2.mapIncludes = mapIncludes;
  }
});

// node_modules/yaml/dist/compose/resolve-block-map.js
var require_resolve_block_map = __commonJS({
  "node_modules/yaml/dist/compose/resolve-block-map.js"(exports2) {
    "use strict";
    var Pair = require_Pair();
    var YAMLMap = require_YAMLMap();
    var resolveProps = require_resolve_props();
    var utilContainsNewline = require_util_contains_newline();
    var utilFlowIndentCheck = require_util_flow_indent_check();
    var utilMapIncludes = require_util_map_includes();
    var startColMsg = "All mapping items must start at the same column";
    function resolveBlockMap({ composeNode, composeEmptyNode }, ctx, bm, onError, tag) {
      const NodeClass = tag?.nodeClass ?? YAMLMap.YAMLMap;
      const map = new NodeClass(ctx.schema);
      if (ctx.atRoot)
        ctx.atRoot = false;
      let offset = bm.offset;
      let commentEnd = null;
      for (const collItem of bm.items) {
        const { start, key, sep, value } = collItem;
        const keyProps = resolveProps.resolveProps(start, {
          indicator: "explicit-key-ind",
          next: key ?? sep?.[0],
          offset,
          onError,
          parentIndent: bm.indent,
          startOnNewline: true
        });
        const implicitKey = !keyProps.found;
        if (implicitKey) {
          if (key) {
            if (key.type === "block-seq")
              onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
            else if ("indent" in key && key.indent !== bm.indent)
              onError(offset, "BAD_INDENT", startColMsg);
          }
          if (!keyProps.anchor && !keyProps.tag && !sep) {
            commentEnd = keyProps.end;
            if (keyProps.comment) {
              if (map.comment)
                map.comment += "\n" + keyProps.comment;
              else
                map.comment = keyProps.comment;
            }
            continue;
          }
          if (keyProps.newlineAfterProp || utilContainsNewline.containsNewline(key)) {
            onError(key ?? start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
          }
        } else if (keyProps.found?.indent !== bm.indent) {
          onError(offset, "BAD_INDENT", startColMsg);
        }
        ctx.atKey = true;
        const keyStart = keyProps.end;
        const keyNode = key ? composeNode(ctx, key, keyProps, onError) : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
        if (ctx.schema.compat)
          utilFlowIndentCheck.flowIndentCheck(bm.indent, key, onError);
        ctx.atKey = false;
        if (utilMapIncludes.mapIncludes(ctx, map.items, keyNode))
          onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
        const valueProps = resolveProps.resolveProps(sep ?? [], {
          indicator: "map-value-ind",
          next: value,
          offset: keyNode.range[2],
          onError,
          parentIndent: bm.indent,
          startOnNewline: !key || key.type === "block-scalar"
        });
        offset = valueProps.end;
        if (valueProps.found) {
          if (implicitKey) {
            if (value?.type === "block-map" && !valueProps.hasNewline)
              onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
            if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024)
              onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
          }
          const valueNode = value ? composeNode(ctx, value, valueProps, onError) : composeEmptyNode(ctx, offset, sep, null, valueProps, onError);
          if (ctx.schema.compat)
            utilFlowIndentCheck.flowIndentCheck(bm.indent, value, onError);
          offset = valueNode.range[2];
          const pair = new Pair.Pair(keyNode, valueNode);
          if (ctx.options.keepSourceTokens)
            pair.srcToken = collItem;
          map.items.push(pair);
        } else {
          if (implicitKey)
            onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
          if (valueProps.comment) {
            if (keyNode.comment)
              keyNode.comment += "\n" + valueProps.comment;
            else
              keyNode.comment = valueProps.comment;
          }
          const pair = new Pair.Pair(keyNode);
          if (ctx.options.keepSourceTokens)
            pair.srcToken = collItem;
          map.items.push(pair);
        }
      }
      if (commentEnd && commentEnd < offset)
        onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
      map.range = [bm.offset, offset, commentEnd ?? offset];
      return map;
    }
    exports2.resolveBlockMap = resolveBlockMap;
  }
});

// node_modules/yaml/dist/compose/resolve-block-seq.js
var require_resolve_block_seq = __commonJS({
  "node_modules/yaml/dist/compose/resolve-block-seq.js"(exports2) {
    "use strict";
    var YAMLSeq = require_YAMLSeq();
    var resolveProps = require_resolve_props();
    var utilFlowIndentCheck = require_util_flow_indent_check();
    function resolveBlockSeq({ composeNode, composeEmptyNode }, ctx, bs, onError, tag) {
      const NodeClass = tag?.nodeClass ?? YAMLSeq.YAMLSeq;
      const seq = new NodeClass(ctx.schema);
      if (ctx.atRoot)
        ctx.atRoot = false;
      if (ctx.atKey)
        ctx.atKey = false;
      let offset = bs.offset;
      let commentEnd = null;
      for (const { start, value } of bs.items) {
        const props = resolveProps.resolveProps(start, {
          indicator: "seq-item-ind",
          next: value,
          offset,
          onError,
          parentIndent: bs.indent,
          startOnNewline: true
        });
        if (!props.found) {
          if (props.anchor || props.tag || value) {
            if (value && value.type === "block-seq")
              onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
            else
              onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
          } else {
            commentEnd = props.end;
            if (props.comment)
              seq.comment = props.comment;
            continue;
          }
        }
        const node = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
        if (ctx.schema.compat)
          utilFlowIndentCheck.flowIndentCheck(bs.indent, value, onError);
        offset = node.range[2];
        seq.items.push(node);
      }
      seq.range = [bs.offset, offset, commentEnd ?? offset];
      return seq;
    }
    exports2.resolveBlockSeq = resolveBlockSeq;
  }
});

// node_modules/yaml/dist/compose/resolve-end.js
var require_resolve_end = __commonJS({
  "node_modules/yaml/dist/compose/resolve-end.js"(exports2) {
    "use strict";
    function resolveEnd(end, offset, reqSpace, onError) {
      let comment = "";
      if (end) {
        let hasSpace = false;
        let sep = "";
        for (const token of end) {
          const { source, type } = token;
          switch (type) {
            case "space":
              hasSpace = true;
              break;
            case "comment": {
              if (reqSpace && !hasSpace)
                onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
              const cb = source.substring(1) || " ";
              if (!comment)
                comment = cb;
              else
                comment += sep + cb;
              sep = "";
              break;
            }
            case "newline":
              if (comment)
                sep += source;
              hasSpace = true;
              break;
            default:
              onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
          }
          offset += source.length;
        }
      }
      return { comment, offset };
    }
    exports2.resolveEnd = resolveEnd;
  }
});

// node_modules/yaml/dist/compose/resolve-flow-collection.js
var require_resolve_flow_collection = __commonJS({
  "node_modules/yaml/dist/compose/resolve-flow-collection.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Pair = require_Pair();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var resolveEnd = require_resolve_end();
    var resolveProps = require_resolve_props();
    var utilContainsNewline = require_util_contains_newline();
    var utilMapIncludes = require_util_map_includes();
    var blockMsg = "Block collections are not allowed within flow collections";
    var isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
    function resolveFlowCollection({ composeNode, composeEmptyNode }, ctx, fc, onError, tag) {
      const isMap = fc.start.source === "{";
      const fcName = isMap ? "flow map" : "flow sequence";
      const NodeClass = tag?.nodeClass ?? (isMap ? YAMLMap.YAMLMap : YAMLSeq.YAMLSeq);
      const coll = new NodeClass(ctx.schema);
      coll.flow = true;
      const atRoot = ctx.atRoot;
      if (atRoot)
        ctx.atRoot = false;
      if (ctx.atKey)
        ctx.atKey = false;
      let offset = fc.offset + fc.start.source.length;
      for (let i = 0; i < fc.items.length; ++i) {
        const collItem = fc.items[i];
        const { start, key, sep, value } = collItem;
        const props = resolveProps.resolveProps(start, {
          flow: fcName,
          indicator: "explicit-key-ind",
          next: key ?? sep?.[0],
          offset,
          onError,
          parentIndent: fc.indent,
          startOnNewline: false
        });
        if (!props.found) {
          if (!props.anchor && !props.tag && !sep && !value) {
            if (i === 0 && props.comma)
              onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
            else if (i < fc.items.length - 1)
              onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
            if (props.comment) {
              if (coll.comment)
                coll.comment += "\n" + props.comment;
              else
                coll.comment = props.comment;
            }
            offset = props.end;
            continue;
          }
          if (!isMap && ctx.options.strict && utilContainsNewline.containsNewline(key))
            onError(
              key,
              // checked by containsNewline()
              "MULTILINE_IMPLICIT_KEY",
              "Implicit keys of flow sequence pairs need to be on a single line"
            );
        }
        if (i === 0) {
          if (props.comma)
            onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
        } else {
          if (!props.comma)
            onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
          if (props.comment) {
            let prevItemComment = "";
            loop: for (const st of start) {
              switch (st.type) {
                case "comma":
                case "space":
                  break;
                case "comment":
                  prevItemComment = st.source.substring(1);
                  break loop;
                default:
                  break loop;
              }
            }
            if (prevItemComment) {
              let prev = coll.items[coll.items.length - 1];
              if (identity.isPair(prev))
                prev = prev.value ?? prev.key;
              if (prev.comment)
                prev.comment += "\n" + prevItemComment;
              else
                prev.comment = prevItemComment;
              props.comment = props.comment.substring(prevItemComment.length + 1);
            }
          }
        }
        if (!isMap && !sep && !props.found) {
          const valueNode = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, sep, null, props, onError);
          coll.items.push(valueNode);
          offset = valueNode.range[2];
          if (isBlock(value))
            onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
        } else {
          ctx.atKey = true;
          const keyStart = props.end;
          const keyNode = key ? composeNode(ctx, key, props, onError) : composeEmptyNode(ctx, keyStart, start, null, props, onError);
          if (isBlock(key))
            onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
          ctx.atKey = false;
          const valueProps = resolveProps.resolveProps(sep ?? [], {
            flow: fcName,
            indicator: "map-value-ind",
            next: value,
            offset: keyNode.range[2],
            onError,
            parentIndent: fc.indent,
            startOnNewline: false
          });
          if (valueProps.found) {
            if (!isMap && !props.found && ctx.options.strict) {
              if (sep)
                for (const st of sep) {
                  if (st === valueProps.found)
                    break;
                  if (st.type === "newline") {
                    onError(st, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                    break;
                  }
                }
              if (props.start < valueProps.found.offset - 1024)
                onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
            }
          } else if (value) {
            if ("source" in value && value.source && value.source[0] === ":")
              onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
            else
              onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
          }
          const valueNode = value ? composeNode(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode(ctx, valueProps.end, sep, null, valueProps, onError) : null;
          if (valueNode) {
            if (isBlock(value))
              onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
          } else if (valueProps.comment) {
            if (keyNode.comment)
              keyNode.comment += "\n" + valueProps.comment;
            else
              keyNode.comment = valueProps.comment;
          }
          const pair = new Pair.Pair(keyNode, valueNode);
          if (ctx.options.keepSourceTokens)
            pair.srcToken = collItem;
          if (isMap) {
            const map = coll;
            if (utilMapIncludes.mapIncludes(ctx, map.items, keyNode))
              onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
            map.items.push(pair);
          } else {
            const map = new YAMLMap.YAMLMap(ctx.schema);
            map.flow = true;
            map.items.push(pair);
            const endRange = (valueNode ?? keyNode).range;
            map.range = [keyNode.range[0], endRange[1], endRange[2]];
            coll.items.push(map);
          }
          offset = valueNode ? valueNode.range[2] : valueProps.end;
        }
      }
      const expectedEnd = isMap ? "}" : "]";
      const [ce, ...ee] = fc.end;
      let cePos = offset;
      if (ce && ce.source === expectedEnd)
        cePos = ce.offset + ce.source.length;
      else {
        const name = fcName[0].toUpperCase() + fcName.substring(1);
        const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
        onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
        if (ce && ce.source.length !== 1)
          ee.unshift(ce);
      }
      if (ee.length > 0) {
        const end = resolveEnd.resolveEnd(ee, cePos, ctx.options.strict, onError);
        if (end.comment) {
          if (coll.comment)
            coll.comment += "\n" + end.comment;
          else
            coll.comment = end.comment;
        }
        coll.range = [fc.offset, cePos, end.offset];
      } else {
        coll.range = [fc.offset, cePos, cePos];
      }
      return coll;
    }
    exports2.resolveFlowCollection = resolveFlowCollection;
  }
});

// node_modules/yaml/dist/compose/compose-collection.js
var require_compose_collection = __commonJS({
  "node_modules/yaml/dist/compose/compose-collection.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var resolveBlockMap = require_resolve_block_map();
    var resolveBlockSeq = require_resolve_block_seq();
    var resolveFlowCollection = require_resolve_flow_collection();
    function resolveCollection(CN, ctx, token, onError, tagName, tag) {
      const coll = token.type === "block-map" ? resolveBlockMap.resolveBlockMap(CN, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq.resolveBlockSeq(CN, ctx, token, onError, tag) : resolveFlowCollection.resolveFlowCollection(CN, ctx, token, onError, tag);
      const Coll = coll.constructor;
      if (tagName === "!" || tagName === Coll.tagName) {
        coll.tag = Coll.tagName;
        return coll;
      }
      if (tagName)
        coll.tag = tagName;
      return coll;
    }
    function composeCollection(CN, ctx, token, props, onError) {
      const tagToken = props.tag;
      const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
      if (token.type === "block-seq") {
        const { anchor, newlineAfterProp: nl } = props;
        const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor ?? tagToken;
        if (lastProp && (!nl || nl.offset < lastProp.offset)) {
          const message = "Missing newline after block sequence props";
          onError(lastProp, "MISSING_CHAR", message);
        }
      }
      const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
      if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap.YAMLMap.tagName && expType === "map" || tagName === YAMLSeq.YAMLSeq.tagName && expType === "seq") {
        return resolveCollection(CN, ctx, token, onError, tagName);
      }
      let tag = ctx.schema.tags.find((t) => t.tag === tagName && t.collection === expType);
      if (!tag) {
        const kt = ctx.schema.knownTags[tagName];
        if (kt && kt.collection === expType) {
          ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
          tag = kt;
        } else {
          if (kt) {
            onError(tagToken, "BAD_COLLECTION_TYPE", `${kt.tag} used for ${expType} collection, but expects ${kt.collection ?? "scalar"}`, true);
          } else {
            onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
          }
          return resolveCollection(CN, ctx, token, onError, tagName);
        }
      }
      const coll = resolveCollection(CN, ctx, token, onError, tagName, tag);
      const res = tag.resolve?.(coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options) ?? coll;
      const node = identity.isNode(res) ? res : new Scalar.Scalar(res);
      node.range = coll.range;
      node.tag = tagName;
      if (tag?.format)
        node.format = tag.format;
      return node;
    }
    exports2.composeCollection = composeCollection;
  }
});

// node_modules/yaml/dist/compose/resolve-block-scalar.js
var require_resolve_block_scalar = __commonJS({
  "node_modules/yaml/dist/compose/resolve-block-scalar.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    function resolveBlockScalar(ctx, scalar, onError) {
      const start = scalar.offset;
      const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
      if (!header)
        return { value: "", type: null, comment: "", range: [start, start, start] };
      const type = header.mode === ">" ? Scalar.Scalar.BLOCK_FOLDED : Scalar.Scalar.BLOCK_LITERAL;
      const lines = scalar.source ? splitLines(scalar.source) : [];
      let chompStart = lines.length;
      for (let i = lines.length - 1; i >= 0; --i) {
        const content = lines[i][1];
        if (content === "" || content === "\r")
          chompStart = i;
        else
          break;
      }
      if (chompStart === 0) {
        const value2 = header.chomp === "+" && lines.length > 0 ? "\n".repeat(Math.max(1, lines.length - 1)) : "";
        let end2 = start + header.length;
        if (scalar.source)
          end2 += scalar.source.length;
        return { value: value2, type, comment: header.comment, range: [start, end2, end2] };
      }
      let trimIndent = scalar.indent + header.indent;
      let offset = scalar.offset + header.length;
      let contentStart = 0;
      for (let i = 0; i < chompStart; ++i) {
        const [indent, content] = lines[i];
        if (content === "" || content === "\r") {
          if (header.indent === 0 && indent.length > trimIndent)
            trimIndent = indent.length;
        } else {
          if (indent.length < trimIndent) {
            const message = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
            onError(offset + indent.length, "MISSING_CHAR", message);
          }
          if (header.indent === 0)
            trimIndent = indent.length;
          contentStart = i;
          if (trimIndent === 0 && !ctx.atRoot) {
            const message = "Block scalar values in collections must be indented";
            onError(offset, "BAD_INDENT", message);
          }
          break;
        }
        offset += indent.length + content.length + 1;
      }
      for (let i = lines.length - 1; i >= chompStart; --i) {
        if (lines[i][0].length > trimIndent)
          chompStart = i + 1;
      }
      let value = "";
      let sep = "";
      let prevMoreIndented = false;
      for (let i = 0; i < contentStart; ++i)
        value += lines[i][0].slice(trimIndent) + "\n";
      for (let i = contentStart; i < chompStart; ++i) {
        let [indent, content] = lines[i];
        offset += indent.length + content.length + 1;
        const crlf = content[content.length - 1] === "\r";
        if (crlf)
          content = content.slice(0, -1);
        if (content && indent.length < trimIndent) {
          const src = header.indent ? "explicit indentation indicator" : "first line";
          const message = `Block scalar lines must not be less indented than their ${src}`;
          onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
          indent = "";
        }
        if (type === Scalar.Scalar.BLOCK_LITERAL) {
          value += sep + indent.slice(trimIndent) + content;
          sep = "\n";
        } else if (indent.length > trimIndent || content[0] === "	") {
          if (sep === " ")
            sep = "\n";
          else if (!prevMoreIndented && sep === "\n")
            sep = "\n\n";
          value += sep + indent.slice(trimIndent) + content;
          sep = "\n";
          prevMoreIndented = true;
        } else if (content === "") {
          if (sep === "\n")
            value += "\n";
          else
            sep = "\n";
        } else {
          value += sep + content;
          sep = " ";
          prevMoreIndented = false;
        }
      }
      switch (header.chomp) {
        case "-":
          break;
        case "+":
          for (let i = chompStart; i < lines.length; ++i)
            value += "\n" + lines[i][0].slice(trimIndent);
          if (value[value.length - 1] !== "\n")
            value += "\n";
          break;
        default:
          value += "\n";
      }
      const end = start + header.length + scalar.source.length;
      return { value, type, comment: header.comment, range: [start, end, end] };
    }
    function parseBlockScalarHeader({ offset, props }, strict, onError) {
      if (props[0].type !== "block-scalar-header") {
        onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
        return null;
      }
      const { source } = props[0];
      const mode = source[0];
      let indent = 0;
      let chomp = "";
      let error = -1;
      for (let i = 1; i < source.length; ++i) {
        const ch = source[i];
        if (!chomp && (ch === "-" || ch === "+"))
          chomp = ch;
        else {
          const n = Number(ch);
          if (!indent && n)
            indent = n;
          else if (error === -1)
            error = offset + i;
        }
      }
      if (error !== -1)
        onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
      let hasSpace = false;
      let comment = "";
      let length = source.length;
      for (let i = 1; i < props.length; ++i) {
        const token = props[i];
        switch (token.type) {
          case "space":
            hasSpace = true;
          // fallthrough
          case "newline":
            length += token.source.length;
            break;
          case "comment":
            if (strict && !hasSpace) {
              const message = "Comments must be separated from other tokens by white space characters";
              onError(token, "MISSING_CHAR", message);
            }
            length += token.source.length;
            comment = token.source.substring(1);
            break;
          case "error":
            onError(token, "UNEXPECTED_TOKEN", token.message);
            length += token.source.length;
            break;
          /* istanbul ignore next should not happen */
          default: {
            const message = `Unexpected token in block scalar header: ${token.type}`;
            onError(token, "UNEXPECTED_TOKEN", message);
            const ts = token.source;
            if (ts && typeof ts === "string")
              length += ts.length;
          }
        }
      }
      return { mode, indent, chomp, comment, length };
    }
    function splitLines(source) {
      const split = source.split(/\n( *)/);
      const first = split[0];
      const m = first.match(/^( *)/);
      const line0 = m?.[1] ? [m[1], first.slice(m[1].length)] : ["", first];
      const lines = [line0];
      for (let i = 1; i < split.length; i += 2)
        lines.push([split[i], split[i + 1]]);
      return lines;
    }
    exports2.resolveBlockScalar = resolveBlockScalar;
  }
});

// node_modules/yaml/dist/compose/resolve-flow-scalar.js
var require_resolve_flow_scalar = __commonJS({
  "node_modules/yaml/dist/compose/resolve-flow-scalar.js"(exports2) {
    "use strict";
    var Scalar = require_Scalar();
    var resolveEnd = require_resolve_end();
    function resolveFlowScalar(scalar, strict, onError) {
      const { offset, type, source, end } = scalar;
      let _type;
      let value;
      const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
      switch (type) {
        case "scalar":
          _type = Scalar.Scalar.PLAIN;
          value = plainValue(source, _onError);
          break;
        case "single-quoted-scalar":
          _type = Scalar.Scalar.QUOTE_SINGLE;
          value = singleQuotedValue(source, _onError);
          break;
        case "double-quoted-scalar":
          _type = Scalar.Scalar.QUOTE_DOUBLE;
          value = doubleQuotedValue(source, _onError);
          break;
        /* istanbul ignore next should not happen */
        default:
          onError(scalar, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
          return {
            value: "",
            type: null,
            comment: "",
            range: [offset, offset + source.length, offset + source.length]
          };
      }
      const valueEnd = offset + source.length;
      const re = resolveEnd.resolveEnd(end, valueEnd, strict, onError);
      return {
        value,
        type: _type,
        comment: re.comment,
        range: [offset, valueEnd, re.offset]
      };
    }
    function plainValue(source, onError) {
      let badChar = "";
      switch (source[0]) {
        /* istanbul ignore next should not happen */
        case "	":
          badChar = "a tab character";
          break;
        case ",":
          badChar = "flow indicator character ,";
          break;
        case "%":
          badChar = "directive indicator character %";
          break;
        case "|":
        case ">": {
          badChar = `block scalar indicator ${source[0]}`;
          break;
        }
        case "@":
        case "`": {
          badChar = `reserved character ${source[0]}`;
          break;
        }
      }
      if (badChar)
        onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
      return foldLines(source);
    }
    function singleQuotedValue(source, onError) {
      if (source[source.length - 1] !== "'" || source.length === 1)
        onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
      return foldLines(source.slice(1, -1)).replace(/''/g, "'");
    }
    function foldLines(source) {
      let first, line;
      try {
        first = new RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy");
        line = new RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy");
      } catch {
        first = /(.*?)[ \t]*\r?\n/sy;
        line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
      }
      let match = first.exec(source);
      if (!match)
        return source;
      let res = match[1];
      let sep = " ";
      let pos = first.lastIndex;
      line.lastIndex = pos;
      while (match = line.exec(source)) {
        if (match[1] === "") {
          if (sep === "\n")
            res += sep;
          else
            sep = "\n";
        } else {
          res += sep + match[1];
          sep = " ";
        }
        pos = line.lastIndex;
      }
      const last = /[ \t]*(.*)/sy;
      last.lastIndex = pos;
      match = last.exec(source);
      return res + sep + (match?.[1] ?? "");
    }
    function doubleQuotedValue(source, onError) {
      let res = "";
      for (let i = 1; i < source.length - 1; ++i) {
        const ch = source[i];
        if (ch === "\r" && source[i + 1] === "\n")
          continue;
        if (ch === "\n") {
          const { fold, offset } = foldNewline(source, i);
          res += fold;
          i = offset;
        } else if (ch === "\\") {
          let next = source[++i];
          const cc = escapeCodes[next];
          if (cc)
            res += cc;
          else if (next === "\n") {
            next = source[i + 1];
            while (next === " " || next === "	")
              next = source[++i + 1];
          } else if (next === "\r" && source[i + 1] === "\n") {
            next = source[++i + 1];
            while (next === " " || next === "	")
              next = source[++i + 1];
          } else if (next === "x" || next === "u" || next === "U") {
            const length = { x: 2, u: 4, U: 8 }[next];
            res += parseCharCode(source, i + 1, length, onError);
            i += length;
          } else {
            const raw = source.substr(i - 1, 2);
            onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
            res += raw;
          }
        } else if (ch === " " || ch === "	") {
          const wsStart = i;
          let next = source[i + 1];
          while (next === " " || next === "	")
            next = source[++i + 1];
          if (next !== "\n" && !(next === "\r" && source[i + 2] === "\n"))
            res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
        } else {
          res += ch;
        }
      }
      if (source[source.length - 1] !== '"' || source.length === 1)
        onError(source.length, "MISSING_CHAR", 'Missing closing "quote');
      return res;
    }
    function foldNewline(source, offset) {
      let fold = "";
      let ch = source[offset + 1];
      while (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
        if (ch === "\r" && source[offset + 2] !== "\n")
          break;
        if (ch === "\n")
          fold += "\n";
        offset += 1;
        ch = source[offset + 1];
      }
      if (!fold)
        fold = " ";
      return { fold, offset };
    }
    var escapeCodes = {
      "0": "\0",
      // null character
      a: "\x07",
      // bell character
      b: "\b",
      // backspace
      e: "\x1B",
      // escape character
      f: "\f",
      // form feed
      n: "\n",
      // line feed
      r: "\r",
      // carriage return
      t: "	",
      // horizontal tab
      v: "\v",
      // vertical tab
      N: "\x85",
      // Unicode next line
      _: "\xA0",
      // Unicode non-breaking space
      L: "\u2028",
      // Unicode line separator
      P: "\u2029",
      // Unicode paragraph separator
      " ": " ",
      '"': '"',
      "/": "/",
      "\\": "\\",
      "	": "	"
    };
    function parseCharCode(source, offset, length, onError) {
      const cc = source.substr(offset, length);
      const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
      const code = ok ? parseInt(cc, 16) : NaN;
      if (isNaN(code)) {
        const raw = source.substr(offset - 2, length + 2);
        onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
        return raw;
      }
      return String.fromCodePoint(code);
    }
    exports2.resolveFlowScalar = resolveFlowScalar;
  }
});

// node_modules/yaml/dist/compose/compose-scalar.js
var require_compose_scalar = __commonJS({
  "node_modules/yaml/dist/compose/compose-scalar.js"(exports2) {
    "use strict";
    var identity = require_identity();
    var Scalar = require_Scalar();
    var resolveBlockScalar = require_resolve_block_scalar();
    var resolveFlowScalar = require_resolve_flow_scalar();
    function composeScalar(ctx, token, tagToken, onError) {
      const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar.resolveBlockScalar(ctx, token, onError) : resolveFlowScalar.resolveFlowScalar(token, ctx.options.strict, onError);
      const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
      let tag;
      if (ctx.options.stringKeys && ctx.atKey) {
        tag = ctx.schema[identity.SCALAR];
      } else if (tagName)
        tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
      else if (token.type === "scalar")
        tag = findScalarTagByTest(ctx, value, token, onError);
      else
        tag = ctx.schema[identity.SCALAR];
      let scalar;
      try {
        const res = tag.resolve(value, (msg) => onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg), ctx.options);
        scalar = identity.isScalar(res) ? res : new Scalar.Scalar(res);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg);
        scalar = new Scalar.Scalar(value);
      }
      scalar.range = range;
      scalar.source = value;
      if (type)
        scalar.type = type;
      if (tagName)
        scalar.tag = tagName;
      if (tag.format)
        scalar.format = tag.format;
      if (comment)
        scalar.comment = comment;
      return scalar;
    }
    function findScalarTagByName(schema, value, tagName, tagToken, onError) {
      if (tagName === "!")
        return schema[identity.SCALAR];
      const matchWithTest = [];
      for (const tag of schema.tags) {
        if (!tag.collection && tag.tag === tagName) {
          if (tag.default && tag.test)
            matchWithTest.push(tag);
          else
            return tag;
        }
      }
      for (const tag of matchWithTest)
        if (tag.test?.test(value))
          return tag;
      const kt = schema.knownTags[tagName];
      if (kt && !kt.collection) {
        schema.tags.push(Object.assign({}, kt, { default: false, test: void 0 }));
        return kt;
      }
      onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
      return schema[identity.SCALAR];
    }
    function findScalarTagByTest({ atKey, directives, schema }, value, token, onError) {
      const tag = schema.tags.find((tag2) => (tag2.default === true || atKey && tag2.default === "key") && tag2.test?.test(value)) || schema[identity.SCALAR];
      if (schema.compat) {
        const compat = schema.compat.find((tag2) => tag2.default && tag2.test?.test(value)) ?? schema[identity.SCALAR];
        if (tag.tag !== compat.tag) {
          const ts = directives.tagString(tag.tag);
          const cs = directives.tagString(compat.tag);
          const msg = `Value may be parsed as either ${ts} or ${cs}`;
          onError(token, "TAG_RESOLVE_FAILED", msg, true);
        }
      }
      return tag;
    }
    exports2.composeScalar = composeScalar;
  }
});

// node_modules/yaml/dist/compose/util-empty-scalar-position.js
var require_util_empty_scalar_position = __commonJS({
  "node_modules/yaml/dist/compose/util-empty-scalar-position.js"(exports2) {
    "use strict";
    function emptyScalarPosition(offset, before, pos) {
      if (before) {
        pos ?? (pos = before.length);
        for (let i = pos - 1; i >= 0; --i) {
          let st = before[i];
          switch (st.type) {
            case "space":
            case "comment":
            case "newline":
              offset -= st.source.length;
              continue;
          }
          st = before[++i];
          while (st?.type === "space") {
            offset += st.source.length;
            st = before[++i];
          }
          break;
        }
      }
      return offset;
    }
    exports2.emptyScalarPosition = emptyScalarPosition;
  }
});

// node_modules/yaml/dist/compose/compose-node.js
var require_compose_node = __commonJS({
  "node_modules/yaml/dist/compose/compose-node.js"(exports2) {
    "use strict";
    var Alias = require_Alias();
    var identity = require_identity();
    var composeCollection = require_compose_collection();
    var composeScalar = require_compose_scalar();
    var resolveEnd = require_resolve_end();
    var utilEmptyScalarPosition = require_util_empty_scalar_position();
    var CN = { composeNode, composeEmptyNode };
    function composeNode(ctx, token, props, onError) {
      const atKey = ctx.atKey;
      const { spaceBefore, comment, anchor, tag } = props;
      let node;
      let isSrcToken = true;
      switch (token.type) {
        case "alias":
          node = composeAlias(ctx, token, onError);
          if (anchor || tag)
            onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
          break;
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
        case "block-scalar":
          node = composeScalar.composeScalar(ctx, token, tag, onError);
          if (anchor)
            node.anchor = anchor.source.substring(1);
          break;
        case "block-map":
        case "block-seq":
        case "flow-collection":
          node = composeCollection.composeCollection(CN, ctx, token, props, onError);
          if (anchor)
            node.anchor = anchor.source.substring(1);
          break;
        default: {
          const message = token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`;
          onError(token, "UNEXPECTED_TOKEN", message);
          node = composeEmptyNode(ctx, token.offset, void 0, null, props, onError);
          isSrcToken = false;
        }
      }
      if (anchor && node.anchor === "")
        onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
      if (atKey && ctx.options.stringKeys && (!identity.isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) {
        const msg = "With stringKeys, all keys must be strings";
        onError(tag ?? token, "NON_STRING_KEY", msg);
      }
      if (spaceBefore)
        node.spaceBefore = true;
      if (comment) {
        if (token.type === "scalar" && token.source === "")
          node.comment = comment;
        else
          node.commentBefore = comment;
      }
      if (ctx.options.keepSourceTokens && isSrcToken)
        node.srcToken = token;
      return node;
    }
    function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
      const token = {
        type: "scalar",
        offset: utilEmptyScalarPosition.emptyScalarPosition(offset, before, pos),
        indent: -1,
        source: ""
      };
      const node = composeScalar.composeScalar(ctx, token, tag, onError);
      if (anchor) {
        node.anchor = anchor.source.substring(1);
        if (node.anchor === "")
          onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
      }
      if (spaceBefore)
        node.spaceBefore = true;
      if (comment) {
        node.comment = comment;
        node.range[2] = end;
      }
      return node;
    }
    function composeAlias({ options }, { offset, source, end }, onError) {
      const alias = new Alias.Alias(source.substring(1));
      if (alias.source === "")
        onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
      if (alias.source.endsWith(":"))
        onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
      const valueEnd = offset + source.length;
      const re = resolveEnd.resolveEnd(end, valueEnd, options.strict, onError);
      alias.range = [offset, valueEnd, re.offset];
      if (re.comment)
        alias.comment = re.comment;
      return alias;
    }
    exports2.composeEmptyNode = composeEmptyNode;
    exports2.composeNode = composeNode;
  }
});

// node_modules/yaml/dist/compose/compose-doc.js
var require_compose_doc = __commonJS({
  "node_modules/yaml/dist/compose/compose-doc.js"(exports2) {
    "use strict";
    var Document = require_Document();
    var composeNode = require_compose_node();
    var resolveEnd = require_resolve_end();
    var resolveProps = require_resolve_props();
    function composeDoc(options, directives, { offset, start, value, end }, onError) {
      const opts = Object.assign({ _directives: directives }, options);
      const doc = new Document.Document(void 0, opts);
      const ctx = {
        atKey: false,
        atRoot: true,
        directives: doc.directives,
        options: doc.options,
        schema: doc.schema
      };
      const props = resolveProps.resolveProps(start, {
        indicator: "doc-start",
        next: value ?? end?.[0],
        offset,
        onError,
        parentIndent: 0,
        startOnNewline: true
      });
      if (props.found) {
        doc.directives.docStart = true;
        if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline)
          onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
      }
      doc.contents = value ? composeNode.composeNode(ctx, value, props, onError) : composeNode.composeEmptyNode(ctx, props.end, start, null, props, onError);
      const contentEnd = doc.contents.range[2];
      const re = resolveEnd.resolveEnd(end, contentEnd, false, onError);
      if (re.comment)
        doc.comment = re.comment;
      doc.range = [offset, contentEnd, re.offset];
      return doc;
    }
    exports2.composeDoc = composeDoc;
  }
});

// node_modules/yaml/dist/compose/composer.js
var require_composer = __commonJS({
  "node_modules/yaml/dist/compose/composer.js"(exports2) {
    "use strict";
    var node_process = require("process");
    var directives = require_directives();
    var Document = require_Document();
    var errors = require_errors();
    var identity = require_identity();
    var composeDoc = require_compose_doc();
    var resolveEnd = require_resolve_end();
    function getErrorPos(src) {
      if (typeof src === "number")
        return [src, src + 1];
      if (Array.isArray(src))
        return src.length === 2 ? src : [src[0], src[1]];
      const { offset, source } = src;
      return [offset, offset + (typeof source === "string" ? source.length : 1)];
    }
    function parsePrelude(prelude) {
      let comment = "";
      let atComment = false;
      let afterEmptyLine = false;
      for (let i = 0; i < prelude.length; ++i) {
        const source = prelude[i];
        switch (source[0]) {
          case "#":
            comment += (comment === "" ? "" : afterEmptyLine ? "\n\n" : "\n") + (source.substring(1) || " ");
            atComment = true;
            afterEmptyLine = false;
            break;
          case "%":
            if (prelude[i + 1]?.[0] !== "#")
              i += 1;
            atComment = false;
            break;
          default:
            if (!atComment)
              afterEmptyLine = true;
            atComment = false;
        }
      }
      return { comment, afterEmptyLine };
    }
    var Composer = class {
      constructor(options = {}) {
        this.doc = null;
        this.atDirectives = false;
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
        this.onError = (source, code, message, warning) => {
          const pos = getErrorPos(source);
          if (warning)
            this.warnings.push(new errors.YAMLWarning(pos, code, message));
          else
            this.errors.push(new errors.YAMLParseError(pos, code, message));
        };
        this.directives = new directives.Directives({ version: options.version || "1.2" });
        this.options = options;
      }
      decorate(doc, afterDoc) {
        const { comment, afterEmptyLine } = parsePrelude(this.prelude);
        if (comment) {
          const dc = doc.contents;
          if (afterDoc) {
            doc.comment = doc.comment ? `${doc.comment}
${comment}` : comment;
          } else if (afterEmptyLine || doc.directives.docStart || !dc) {
            doc.commentBefore = comment;
          } else if (identity.isCollection(dc) && !dc.flow && dc.items.length > 0) {
            let it = dc.items[0];
            if (identity.isPair(it))
              it = it.key;
            const cb = it.commentBefore;
            it.commentBefore = cb ? `${comment}
${cb}` : comment;
          } else {
            const cb = dc.commentBefore;
            dc.commentBefore = cb ? `${comment}
${cb}` : comment;
          }
        }
        if (afterDoc) {
          Array.prototype.push.apply(doc.errors, this.errors);
          Array.prototype.push.apply(doc.warnings, this.warnings);
        } else {
          doc.errors = this.errors;
          doc.warnings = this.warnings;
        }
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
      }
      /**
       * Current stream status information.
       *
       * Mostly useful at the end of input for an empty stream.
       */
      streamInfo() {
        return {
          comment: parsePrelude(this.prelude).comment,
          directives: this.directives,
          errors: this.errors,
          warnings: this.warnings
        };
      }
      /**
       * Compose tokens into documents.
       *
       * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
       * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
       */
      *compose(tokens, forceDoc = false, endOffset = -1) {
        for (const token of tokens)
          yield* this.next(token);
        yield* this.end(forceDoc, endOffset);
      }
      /** Advance the composer by one CST token. */
      *next(token) {
        if (node_process.env.LOG_STREAM)
          console.dir(token, { depth: null });
        switch (token.type) {
          case "directive":
            this.directives.add(token.source, (offset, message, warning) => {
              const pos = getErrorPos(token);
              pos[0] += offset;
              this.onError(pos, "BAD_DIRECTIVE", message, warning);
            });
            this.prelude.push(token.source);
            this.atDirectives = true;
            break;
          case "document": {
            const doc = composeDoc.composeDoc(this.options, this.directives, token, this.onError);
            if (this.atDirectives && !doc.directives.docStart)
              this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
            this.decorate(doc, false);
            if (this.doc)
              yield this.doc;
            this.doc = doc;
            this.atDirectives = false;
            break;
          }
          case "byte-order-mark":
          case "space":
            break;
          case "comment":
          case "newline":
            this.prelude.push(token.source);
            break;
          case "error": {
            const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
            const error = new errors.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
            if (this.atDirectives || !this.doc)
              this.errors.push(error);
            else
              this.doc.errors.push(error);
            break;
          }
          case "doc-end": {
            if (!this.doc) {
              const msg = "Unexpected doc-end without preceding document";
              this.errors.push(new errors.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg));
              break;
            }
            this.doc.directives.docEnd = true;
            const end = resolveEnd.resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
            this.decorate(this.doc, true);
            if (end.comment) {
              const dc = this.doc.comment;
              this.doc.comment = dc ? `${dc}
${end.comment}` : end.comment;
            }
            this.doc.range[2] = end.offset;
            break;
          }
          default:
            this.errors.push(new errors.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
        }
      }
      /**
       * Call at end of input to yield any remaining document.
       *
       * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
       * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
       */
      *end(forceDoc = false, endOffset = -1) {
        if (this.doc) {
          this.decorate(this.doc, true);
          yield this.doc;
          this.doc = null;
        } else if (forceDoc) {
          const opts = Object.assign({ _directives: this.directives }, this.options);
          const doc = new Document.Document(void 0, opts);
          if (this.atDirectives)
            this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
          doc.range = [0, endOffset, endOffset];
          this.decorate(doc, false);
          yield doc;
        }
      }
    };
    exports2.Composer = Composer;
  }
});

// node_modules/yaml/dist/parse/cst-scalar.js
var require_cst_scalar = __commonJS({
  "node_modules/yaml/dist/parse/cst-scalar.js"(exports2) {
    "use strict";
    var resolveBlockScalar = require_resolve_block_scalar();
    var resolveFlowScalar = require_resolve_flow_scalar();
    var errors = require_errors();
    var stringifyString = require_stringifyString();
    function resolveAsScalar(token, strict = true, onError) {
      if (token) {
        const _onError = (pos, code, message) => {
          const offset = typeof pos === "number" ? pos : Array.isArray(pos) ? pos[0] : pos.offset;
          if (onError)
            onError(offset, code, message);
          else
            throw new errors.YAMLParseError([offset, offset + 1], code, message);
        };
        switch (token.type) {
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return resolveFlowScalar.resolveFlowScalar(token, strict, _onError);
          case "block-scalar":
            return resolveBlockScalar.resolveBlockScalar({ options: { strict } }, token, _onError);
        }
      }
      return null;
    }
    function createScalarToken(value, context) {
      const { implicitKey = false, indent, inFlow = false, offset = -1, type = "PLAIN" } = context;
      const source = stringifyString.stringifyString({ type, value }, {
        implicitKey,
        indent: indent > 0 ? " ".repeat(indent) : "",
        inFlow,
        options: { blockQuote: true, lineWidth: -1 }
      });
      const end = context.end ?? [
        { type: "newline", offset: -1, indent, source: "\n" }
      ];
      switch (source[0]) {
        case "|":
        case ">": {
          const he = source.indexOf("\n");
          const head = source.substring(0, he);
          const body = source.substring(he + 1) + "\n";
          const props = [
            { type: "block-scalar-header", offset, indent, source: head }
          ];
          if (!addEndtoBlockProps(props, end))
            props.push({ type: "newline", offset: -1, indent, source: "\n" });
          return { type: "block-scalar", offset, indent, props, source: body };
        }
        case '"':
          return { type: "double-quoted-scalar", offset, indent, source, end };
        case "'":
          return { type: "single-quoted-scalar", offset, indent, source, end };
        default:
          return { type: "scalar", offset, indent, source, end };
      }
    }
    function setScalarValue(token, value, context = {}) {
      let { afterKey = false, implicitKey = false, inFlow = false, type } = context;
      let indent = "indent" in token ? token.indent : null;
      if (afterKey && typeof indent === "number")
        indent += 2;
      if (!type)
        switch (token.type) {
          case "single-quoted-scalar":
            type = "QUOTE_SINGLE";
            break;
          case "double-quoted-scalar":
            type = "QUOTE_DOUBLE";
            break;
          case "block-scalar": {
            const header = token.props[0];
            if (header.type !== "block-scalar-header")
              throw new Error("Invalid block scalar header");
            type = header.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
            break;
          }
          default:
            type = "PLAIN";
        }
      const source = stringifyString.stringifyString({ type, value }, {
        implicitKey: implicitKey || indent === null,
        indent: indent !== null && indent > 0 ? " ".repeat(indent) : "",
        inFlow,
        options: { blockQuote: true, lineWidth: -1 }
      });
      switch (source[0]) {
        case "|":
        case ">":
          setBlockScalarValue(token, source);
          break;
        case '"':
          setFlowScalarValue(token, source, "double-quoted-scalar");
          break;
        case "'":
          setFlowScalarValue(token, source, "single-quoted-scalar");
          break;
        default:
          setFlowScalarValue(token, source, "scalar");
      }
    }
    function setBlockScalarValue(token, source) {
      const he = source.indexOf("\n");
      const head = source.substring(0, he);
      const body = source.substring(he + 1) + "\n";
      if (token.type === "block-scalar") {
        const header = token.props[0];
        if (header.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        header.source = head;
        token.source = body;
      } else {
        const { offset } = token;
        const indent = "indent" in token ? token.indent : -1;
        const props = [
          { type: "block-scalar-header", offset, indent, source: head }
        ];
        if (!addEndtoBlockProps(props, "end" in token ? token.end : void 0))
          props.push({ type: "newline", offset: -1, indent, source: "\n" });
        for (const key of Object.keys(token))
          if (key !== "type" && key !== "offset")
            delete token[key];
        Object.assign(token, { type: "block-scalar", indent, props, source: body });
      }
    }
    function addEndtoBlockProps(props, end) {
      if (end)
        for (const st of end)
          switch (st.type) {
            case "space":
            case "comment":
              props.push(st);
              break;
            case "newline":
              props.push(st);
              return true;
          }
      return false;
    }
    function setFlowScalarValue(token, source, type) {
      switch (token.type) {
        case "scalar":
        case "double-quoted-scalar":
        case "single-quoted-scalar":
          token.type = type;
          token.source = source;
          break;
        case "block-scalar": {
          const end = token.props.slice(1);
          let oa = source.length;
          if (token.props[0].type === "block-scalar-header")
            oa -= token.props[0].source.length;
          for (const tok of end)
            tok.offset += oa;
          delete token.props;
          Object.assign(token, { type, source, end });
          break;
        }
        case "block-map":
        case "block-seq": {
          const offset = token.offset + source.length;
          const nl = { type: "newline", offset, indent: token.indent, source: "\n" };
          delete token.items;
          Object.assign(token, { type, source, end: [nl] });
          break;
        }
        default: {
          const indent = "indent" in token ? token.indent : -1;
          const end = "end" in token && Array.isArray(token.end) ? token.end.filter((st) => st.type === "space" || st.type === "comment" || st.type === "newline") : [];
          for (const key of Object.keys(token))
            if (key !== "type" && key !== "offset")
              delete token[key];
          Object.assign(token, { type, indent, source, end });
        }
      }
    }
    exports2.createScalarToken = createScalarToken;
    exports2.resolveAsScalar = resolveAsScalar;
    exports2.setScalarValue = setScalarValue;
  }
});

// node_modules/yaml/dist/parse/cst-stringify.js
var require_cst_stringify = __commonJS({
  "node_modules/yaml/dist/parse/cst-stringify.js"(exports2) {
    "use strict";
    var stringify = (cst) => "type" in cst ? stringifyToken(cst) : stringifyItem(cst);
    function stringifyToken(token) {
      switch (token.type) {
        case "block-scalar": {
          let res = "";
          for (const tok of token.props)
            res += stringifyToken(tok);
          return res + token.source;
        }
        case "block-map":
        case "block-seq": {
          let res = "";
          for (const item of token.items)
            res += stringifyItem(item);
          return res;
        }
        case "flow-collection": {
          let res = token.start.source;
          for (const item of token.items)
            res += stringifyItem(item);
          for (const st of token.end)
            res += st.source;
          return res;
        }
        case "document": {
          let res = stringifyItem(token);
          if (token.end)
            for (const st of token.end)
              res += st.source;
          return res;
        }
        default: {
          let res = token.source;
          if ("end" in token && token.end)
            for (const st of token.end)
              res += st.source;
          return res;
        }
      }
    }
    function stringifyItem({ start, key, sep, value }) {
      let res = "";
      for (const st of start)
        res += st.source;
      if (key)
        res += stringifyToken(key);
      if (sep)
        for (const st of sep)
          res += st.source;
      if (value)
        res += stringifyToken(value);
      return res;
    }
    exports2.stringify = stringify;
  }
});

// node_modules/yaml/dist/parse/cst-visit.js
var require_cst_visit = __commonJS({
  "node_modules/yaml/dist/parse/cst-visit.js"(exports2) {
    "use strict";
    var BREAK = Symbol("break visit");
    var SKIP = Symbol("skip children");
    var REMOVE = Symbol("remove item");
    function visit(cst, visitor) {
      if ("type" in cst && cst.type === "document")
        cst = { start: cst.start, value: cst.value };
      _visit(Object.freeze([]), cst, visitor);
    }
    visit.BREAK = BREAK;
    visit.SKIP = SKIP;
    visit.REMOVE = REMOVE;
    visit.itemAtPath = (cst, path) => {
      let item = cst;
      for (const [field, index] of path) {
        const tok = item?.[field];
        if (tok && "items" in tok) {
          item = tok.items[index];
        } else
          return void 0;
      }
      return item;
    };
    visit.parentCollection = (cst, path) => {
      const parent = visit.itemAtPath(cst, path.slice(0, -1));
      const field = path[path.length - 1][0];
      const coll = parent?.[field];
      if (coll && "items" in coll)
        return coll;
      throw new Error("Parent collection not found");
    };
    function _visit(path, item, visitor) {
      let ctrl = visitor(item, path);
      if (typeof ctrl === "symbol")
        return ctrl;
      for (const field of ["key", "value"]) {
        const token = item[field];
        if (token && "items" in token) {
          for (let i = 0; i < token.items.length; ++i) {
            const ci = _visit(Object.freeze(path.concat([[field, i]])), token.items[i], visitor);
            if (typeof ci === "number")
              i = ci - 1;
            else if (ci === BREAK)
              return BREAK;
            else if (ci === REMOVE) {
              token.items.splice(i, 1);
              i -= 1;
            }
          }
          if (typeof ctrl === "function" && field === "key")
            ctrl = ctrl(item, path);
        }
      }
      return typeof ctrl === "function" ? ctrl(item, path) : ctrl;
    }
    exports2.visit = visit;
  }
});

// node_modules/yaml/dist/parse/cst.js
var require_cst = __commonJS({
  "node_modules/yaml/dist/parse/cst.js"(exports2) {
    "use strict";
    var cstScalar = require_cst_scalar();
    var cstStringify = require_cst_stringify();
    var cstVisit = require_cst_visit();
    var BOM = "\uFEFF";
    var DOCUMENT = "";
    var FLOW_END = "";
    var SCALAR = "";
    var isCollection = (token) => !!token && "items" in token;
    var isScalar = (token) => !!token && (token.type === "scalar" || token.type === "single-quoted-scalar" || token.type === "double-quoted-scalar" || token.type === "block-scalar");
    function prettyToken(token) {
      switch (token) {
        case BOM:
          return "<BOM>";
        case DOCUMENT:
          return "<DOC>";
        case FLOW_END:
          return "<FLOW_END>";
        case SCALAR:
          return "<SCALAR>";
        default:
          return JSON.stringify(token);
      }
    }
    function tokenType(source) {
      switch (source) {
        case BOM:
          return "byte-order-mark";
        case DOCUMENT:
          return "doc-mode";
        case FLOW_END:
          return "flow-error-end";
        case SCALAR:
          return "scalar";
        case "---":
          return "doc-start";
        case "...":
          return "doc-end";
        case "":
        case "\n":
        case "\r\n":
          return "newline";
        case "-":
          return "seq-item-ind";
        case "?":
          return "explicit-key-ind";
        case ":":
          return "map-value-ind";
        case "{":
          return "flow-map-start";
        case "}":
          return "flow-map-end";
        case "[":
          return "flow-seq-start";
        case "]":
          return "flow-seq-end";
        case ",":
          return "comma";
      }
      switch (source[0]) {
        case " ":
        case "	":
          return "space";
        case "#":
          return "comment";
        case "%":
          return "directive-line";
        case "*":
          return "alias";
        case "&":
          return "anchor";
        case "!":
          return "tag";
        case "'":
          return "single-quoted-scalar";
        case '"':
          return "double-quoted-scalar";
        case "|":
        case ">":
          return "block-scalar-header";
      }
      return null;
    }
    exports2.createScalarToken = cstScalar.createScalarToken;
    exports2.resolveAsScalar = cstScalar.resolveAsScalar;
    exports2.setScalarValue = cstScalar.setScalarValue;
    exports2.stringify = cstStringify.stringify;
    exports2.visit = cstVisit.visit;
    exports2.BOM = BOM;
    exports2.DOCUMENT = DOCUMENT;
    exports2.FLOW_END = FLOW_END;
    exports2.SCALAR = SCALAR;
    exports2.isCollection = isCollection;
    exports2.isScalar = isScalar;
    exports2.prettyToken = prettyToken;
    exports2.tokenType = tokenType;
  }
});

// node_modules/yaml/dist/parse/lexer.js
var require_lexer = __commonJS({
  "node_modules/yaml/dist/parse/lexer.js"(exports2) {
    "use strict";
    var cst = require_cst();
    function isEmpty(ch) {
      switch (ch) {
        case void 0:
        case " ":
        case "\n":
        case "\r":
        case "	":
          return true;
        default:
          return false;
      }
    }
    var hexDigits = new Set("0123456789ABCDEFabcdef");
    var tagChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
    var flowIndicatorChars = new Set(",[]{}");
    var invalidAnchorChars = new Set(" ,[]{}\n\r	");
    var isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
    var Lexer = class {
      constructor() {
        this.atEnd = false;
        this.blockScalarIndent = -1;
        this.blockScalarKeep = false;
        this.buffer = "";
        this.flowKey = false;
        this.flowLevel = 0;
        this.indentNext = 0;
        this.indentValue = 0;
        this.lineEndPos = null;
        this.next = null;
        this.pos = 0;
      }
      /**
       * Generate YAML tokens from the `source` string. If `incomplete`,
       * a part of the last line may be left as a buffer for the next call.
       *
       * @returns A generator of lexical tokens
       */
      *lex(source, incomplete = false) {
        if (source) {
          if (typeof source !== "string")
            throw TypeError("source is not a string");
          this.buffer = this.buffer ? this.buffer + source : source;
          this.lineEndPos = null;
        }
        this.atEnd = !incomplete;
        let next = this.next ?? "stream";
        while (next && (incomplete || this.hasChars(1)))
          next = yield* this.parseNext(next);
      }
      atLineEnd() {
        let i = this.pos;
        let ch = this.buffer[i];
        while (ch === " " || ch === "	")
          ch = this.buffer[++i];
        if (!ch || ch === "#" || ch === "\n")
          return true;
        if (ch === "\r")
          return this.buffer[i + 1] === "\n";
        return false;
      }
      charAt(n) {
        return this.buffer[this.pos + n];
      }
      continueScalar(offset) {
        let ch = this.buffer[offset];
        if (this.indentNext > 0) {
          let indent = 0;
          while (ch === " ")
            ch = this.buffer[++indent + offset];
          if (ch === "\r") {
            const next = this.buffer[indent + offset + 1];
            if (next === "\n" || !next && !this.atEnd)
              return offset + indent + 1;
          }
          return ch === "\n" || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
        }
        if (ch === "-" || ch === ".") {
          const dt = this.buffer.substr(offset, 3);
          if ((dt === "---" || dt === "...") && isEmpty(this.buffer[offset + 3]))
            return -1;
        }
        return offset;
      }
      getLine() {
        let end = this.lineEndPos;
        if (typeof end !== "number" || end !== -1 && end < this.pos) {
          end = this.buffer.indexOf("\n", this.pos);
          this.lineEndPos = end;
        }
        if (end === -1)
          return this.atEnd ? this.buffer.substring(this.pos) : null;
        if (this.buffer[end - 1] === "\r")
          end -= 1;
        return this.buffer.substring(this.pos, end);
      }
      hasChars(n) {
        return this.pos + n <= this.buffer.length;
      }
      setNext(state) {
        this.buffer = this.buffer.substring(this.pos);
        this.pos = 0;
        this.lineEndPos = null;
        this.next = state;
        return null;
      }
      peek(n) {
        return this.buffer.substr(this.pos, n);
      }
      *parseNext(next) {
        switch (next) {
          case "stream":
            return yield* this.parseStream();
          case "line-start":
            return yield* this.parseLineStart();
          case "block-start":
            return yield* this.parseBlockStart();
          case "doc":
            return yield* this.parseDocument();
          case "flow":
            return yield* this.parseFlowCollection();
          case "quoted-scalar":
            return yield* this.parseQuotedScalar();
          case "block-scalar":
            return yield* this.parseBlockScalar();
          case "plain-scalar":
            return yield* this.parsePlainScalar();
        }
      }
      *parseStream() {
        let line = this.getLine();
        if (line === null)
          return this.setNext("stream");
        if (line[0] === cst.BOM) {
          yield* this.pushCount(1);
          line = line.substring(1);
        }
        if (line[0] === "%") {
          let dirEnd = line.length;
          let cs = line.indexOf("#");
          while (cs !== -1) {
            const ch = line[cs - 1];
            if (ch === " " || ch === "	") {
              dirEnd = cs - 1;
              break;
            } else {
              cs = line.indexOf("#", cs + 1);
            }
          }
          while (true) {
            const ch = line[dirEnd - 1];
            if (ch === " " || ch === "	")
              dirEnd -= 1;
            else
              break;
          }
          const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
          yield* this.pushCount(line.length - n);
          this.pushNewline();
          return "stream";
        }
        if (this.atLineEnd()) {
          const sp = yield* this.pushSpaces(true);
          yield* this.pushCount(line.length - sp);
          yield* this.pushNewline();
          return "stream";
        }
        yield cst.DOCUMENT;
        return yield* this.parseLineStart();
      }
      *parseLineStart() {
        const ch = this.charAt(0);
        if (!ch && !this.atEnd)
          return this.setNext("line-start");
        if (ch === "-" || ch === ".") {
          if (!this.atEnd && !this.hasChars(4))
            return this.setNext("line-start");
          const s = this.peek(3);
          if ((s === "---" || s === "...") && isEmpty(this.charAt(3))) {
            yield* this.pushCount(3);
            this.indentValue = 0;
            this.indentNext = 0;
            return s === "---" ? "doc" : "stream";
          }
        }
        this.indentValue = yield* this.pushSpaces(false);
        if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
          this.indentNext = this.indentValue;
        return yield* this.parseBlockStart();
      }
      *parseBlockStart() {
        const [ch0, ch1] = this.peek(2);
        if (!ch1 && !this.atEnd)
          return this.setNext("block-start");
        if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
          const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
          this.indentNext = this.indentValue + 1;
          this.indentValue += n;
          return yield* this.parseBlockStart();
        }
        return "doc";
      }
      *parseDocument() {
        yield* this.pushSpaces(true);
        const line = this.getLine();
        if (line === null)
          return this.setNext("doc");
        let n = yield* this.pushIndicators();
        switch (line[n]) {
          case "#":
            yield* this.pushCount(line.length - n);
          // fallthrough
          case void 0:
            yield* this.pushNewline();
            return yield* this.parseLineStart();
          case "{":
          case "[":
            yield* this.pushCount(1);
            this.flowKey = false;
            this.flowLevel = 1;
            return "flow";
          case "}":
          case "]":
            yield* this.pushCount(1);
            return "doc";
          case "*":
            yield* this.pushUntil(isNotAnchorChar);
            return "doc";
          case '"':
          case "'":
            return yield* this.parseQuotedScalar();
          case "|":
          case ">":
            n += yield* this.parseBlockScalarHeader();
            n += yield* this.pushSpaces(true);
            yield* this.pushCount(line.length - n);
            yield* this.pushNewline();
            return yield* this.parseBlockScalar();
          default:
            return yield* this.parsePlainScalar();
        }
      }
      *parseFlowCollection() {
        let nl, sp;
        let indent = -1;
        do {
          nl = yield* this.pushNewline();
          if (nl > 0) {
            sp = yield* this.pushSpaces(false);
            this.indentValue = indent = sp;
          } else {
            sp = 0;
          }
          sp += yield* this.pushSpaces(true);
        } while (nl + sp > 0);
        const line = this.getLine();
        if (line === null)
          return this.setNext("flow");
        if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
          const atFlowEndMarker = indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}");
          if (!atFlowEndMarker) {
            this.flowLevel = 0;
            yield cst.FLOW_END;
            return yield* this.parseLineStart();
          }
        }
        let n = 0;
        while (line[n] === ",") {
          n += yield* this.pushCount(1);
          n += yield* this.pushSpaces(true);
          this.flowKey = false;
        }
        n += yield* this.pushIndicators();
        switch (line[n]) {
          case void 0:
            return "flow";
          case "#":
            yield* this.pushCount(line.length - n);
            return "flow";
          case "{":
          case "[":
            yield* this.pushCount(1);
            this.flowKey = false;
            this.flowLevel += 1;
            return "flow";
          case "}":
          case "]":
            yield* this.pushCount(1);
            this.flowKey = true;
            this.flowLevel -= 1;
            return this.flowLevel ? "flow" : "doc";
          case "*":
            yield* this.pushUntil(isNotAnchorChar);
            return "flow";
          case '"':
          case "'":
            this.flowKey = true;
            return yield* this.parseQuotedScalar();
          case ":": {
            const next = this.charAt(1);
            if (this.flowKey || isEmpty(next) || next === ",") {
              this.flowKey = false;
              yield* this.pushCount(1);
              yield* this.pushSpaces(true);
              return "flow";
            }
          }
          // fallthrough
          default:
            this.flowKey = false;
            return yield* this.parsePlainScalar();
        }
      }
      *parseQuotedScalar() {
        const quote = this.charAt(0);
        let end = this.buffer.indexOf(quote, this.pos + 1);
        if (quote === "'") {
          while (end !== -1 && this.buffer[end + 1] === "'")
            end = this.buffer.indexOf("'", end + 2);
        } else {
          while (end !== -1) {
            let n = 0;
            while (this.buffer[end - 1 - n] === "\\")
              n += 1;
            if (n % 2 === 0)
              break;
            end = this.buffer.indexOf('"', end + 1);
          }
        }
        const qb = this.buffer.substring(0, end);
        let nl = qb.indexOf("\n", this.pos);
        if (nl !== -1) {
          while (nl !== -1) {
            const cs = this.continueScalar(nl + 1);
            if (cs === -1)
              break;
            nl = qb.indexOf("\n", cs);
          }
          if (nl !== -1) {
            end = nl - (qb[nl - 1] === "\r" ? 2 : 1);
          }
        }
        if (end === -1) {
          if (!this.atEnd)
            return this.setNext("quoted-scalar");
          end = this.buffer.length;
        }
        yield* this.pushToIndex(end + 1, false);
        return this.flowLevel ? "flow" : "doc";
      }
      *parseBlockScalarHeader() {
        this.blockScalarIndent = -1;
        this.blockScalarKeep = false;
        let i = this.pos;
        while (true) {
          const ch = this.buffer[++i];
          if (ch === "+")
            this.blockScalarKeep = true;
          else if (ch > "0" && ch <= "9")
            this.blockScalarIndent = Number(ch) - 1;
          else if (ch !== "-")
            break;
        }
        return yield* this.pushUntil((ch) => isEmpty(ch) || ch === "#");
      }
      *parseBlockScalar() {
        let nl = this.pos - 1;
        let indent = 0;
        let ch;
        loop: for (let i2 = this.pos; ch = this.buffer[i2]; ++i2) {
          switch (ch) {
            case " ":
              indent += 1;
              break;
            case "\n":
              nl = i2;
              indent = 0;
              break;
            case "\r": {
              const next = this.buffer[i2 + 1];
              if (!next && !this.atEnd)
                return this.setNext("block-scalar");
              if (next === "\n")
                break;
            }
            // fallthrough
            default:
              break loop;
          }
        }
        if (!ch && !this.atEnd)
          return this.setNext("block-scalar");
        if (indent >= this.indentNext) {
          if (this.blockScalarIndent === -1)
            this.indentNext = indent;
          else {
            this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
          }
          do {
            const cs = this.continueScalar(nl + 1);
            if (cs === -1)
              break;
            nl = this.buffer.indexOf("\n", cs);
          } while (nl !== -1);
          if (nl === -1) {
            if (!this.atEnd)
              return this.setNext("block-scalar");
            nl = this.buffer.length;
          }
        }
        let i = nl + 1;
        ch = this.buffer[i];
        while (ch === " ")
          ch = this.buffer[++i];
        if (ch === "	") {
          while (ch === "	" || ch === " " || ch === "\r" || ch === "\n")
            ch = this.buffer[++i];
          nl = i - 1;
        } else if (!this.blockScalarKeep) {
          do {
            let i2 = nl - 1;
            let ch2 = this.buffer[i2];
            if (ch2 === "\r")
              ch2 = this.buffer[--i2];
            const lastChar = i2;
            while (ch2 === " ")
              ch2 = this.buffer[--i2];
            if (ch2 === "\n" && i2 >= this.pos && i2 + 1 + indent > lastChar)
              nl = i2;
            else
              break;
          } while (true);
        }
        yield cst.SCALAR;
        yield* this.pushToIndex(nl + 1, true);
        return yield* this.parseLineStart();
      }
      *parsePlainScalar() {
        const inFlow = this.flowLevel > 0;
        let end = this.pos - 1;
        let i = this.pos - 1;
        let ch;
        while (ch = this.buffer[++i]) {
          if (ch === ":") {
            const next = this.buffer[i + 1];
            if (isEmpty(next) || inFlow && flowIndicatorChars.has(next))
              break;
            end = i;
          } else if (isEmpty(ch)) {
            let next = this.buffer[i + 1];
            if (ch === "\r") {
              if (next === "\n") {
                i += 1;
                ch = "\n";
                next = this.buffer[i + 1];
              } else
                end = i;
            }
            if (next === "#" || inFlow && flowIndicatorChars.has(next))
              break;
            if (ch === "\n") {
              const cs = this.continueScalar(i + 1);
              if (cs === -1)
                break;
              i = Math.max(i, cs - 2);
            }
          } else {
            if (inFlow && flowIndicatorChars.has(ch))
              break;
            end = i;
          }
        }
        if (!ch && !this.atEnd)
          return this.setNext("plain-scalar");
        yield cst.SCALAR;
        yield* this.pushToIndex(end + 1, true);
        return inFlow ? "flow" : "doc";
      }
      *pushCount(n) {
        if (n > 0) {
          yield this.buffer.substr(this.pos, n);
          this.pos += n;
          return n;
        }
        return 0;
      }
      *pushToIndex(i, allowEmpty) {
        const s = this.buffer.slice(this.pos, i);
        if (s) {
          yield s;
          this.pos += s.length;
          return s.length;
        } else if (allowEmpty)
          yield "";
        return 0;
      }
      *pushIndicators() {
        switch (this.charAt(0)) {
          case "!":
            return (yield* this.pushTag()) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
          case "&":
            return (yield* this.pushUntil(isNotAnchorChar)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
          case "-":
          // this is an error
          case "?":
          // this is an error outside flow collections
          case ":": {
            const inFlow = this.flowLevel > 0;
            const ch1 = this.charAt(1);
            if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
              if (!inFlow)
                this.indentNext = this.indentValue + 1;
              else if (this.flowKey)
                this.flowKey = false;
              return (yield* this.pushCount(1)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
            }
          }
        }
        return 0;
      }
      *pushTag() {
        if (this.charAt(1) === "<") {
          let i = this.pos + 2;
          let ch = this.buffer[i];
          while (!isEmpty(ch) && ch !== ">")
            ch = this.buffer[++i];
          return yield* this.pushToIndex(ch === ">" ? i + 1 : i, false);
        } else {
          let i = this.pos + 1;
          let ch = this.buffer[i];
          while (ch) {
            if (tagChars.has(ch))
              ch = this.buffer[++i];
            else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) {
              ch = this.buffer[i += 3];
            } else
              break;
          }
          return yield* this.pushToIndex(i, false);
        }
      }
      *pushNewline() {
        const ch = this.buffer[this.pos];
        if (ch === "\n")
          return yield* this.pushCount(1);
        else if (ch === "\r" && this.charAt(1) === "\n")
          return yield* this.pushCount(2);
        else
          return 0;
      }
      *pushSpaces(allowTabs) {
        let i = this.pos - 1;
        let ch;
        do {
          ch = this.buffer[++i];
        } while (ch === " " || allowTabs && ch === "	");
        const n = i - this.pos;
        if (n > 0) {
          yield this.buffer.substr(this.pos, n);
          this.pos = i;
        }
        return n;
      }
      *pushUntil(test) {
        let i = this.pos;
        let ch = this.buffer[i];
        while (!test(ch))
          ch = this.buffer[++i];
        return yield* this.pushToIndex(i, false);
      }
    };
    exports2.Lexer = Lexer;
  }
});

// node_modules/yaml/dist/parse/line-counter.js
var require_line_counter = __commonJS({
  "node_modules/yaml/dist/parse/line-counter.js"(exports2) {
    "use strict";
    var LineCounter = class {
      constructor() {
        this.lineStarts = [];
        this.addNewLine = (offset) => this.lineStarts.push(offset);
        this.linePos = (offset) => {
          let low = 0;
          let high = this.lineStarts.length;
          while (low < high) {
            const mid = low + high >> 1;
            if (this.lineStarts[mid] < offset)
              low = mid + 1;
            else
              high = mid;
          }
          if (this.lineStarts[low] === offset)
            return { line: low + 1, col: 1 };
          if (low === 0)
            return { line: 0, col: offset };
          const start = this.lineStarts[low - 1];
          return { line: low, col: offset - start + 1 };
        };
      }
    };
    exports2.LineCounter = LineCounter;
  }
});

// node_modules/yaml/dist/parse/parser.js
var require_parser = __commonJS({
  "node_modules/yaml/dist/parse/parser.js"(exports2) {
    "use strict";
    var node_process = require("process");
    var cst = require_cst();
    var lexer = require_lexer();
    function includesToken(list, type) {
      for (let i = 0; i < list.length; ++i)
        if (list[i].type === type)
          return true;
      return false;
    }
    function findNonEmptyIndex(list) {
      for (let i = 0; i < list.length; ++i) {
        switch (list[i].type) {
          case "space":
          case "comment":
          case "newline":
            break;
          default:
            return i;
        }
      }
      return -1;
    }
    function isFlowToken(token) {
      switch (token?.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
        case "flow-collection":
          return true;
        default:
          return false;
      }
    }
    function getPrevProps(parent) {
      switch (parent.type) {
        case "document":
          return parent.start;
        case "block-map": {
          const it = parent.items[parent.items.length - 1];
          return it.sep ?? it.start;
        }
        case "block-seq":
          return parent.items[parent.items.length - 1].start;
        /* istanbul ignore next should not happen */
        default:
          return [];
      }
    }
    function getFirstKeyStartProps(prev) {
      if (prev.length === 0)
        return [];
      let i = prev.length;
      loop: while (--i >= 0) {
        switch (prev[i].type) {
          case "doc-start":
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
          case "newline":
            break loop;
        }
      }
      while (prev[++i]?.type === "space") {
      }
      return prev.splice(i, prev.length);
    }
    function fixFlowSeqItems(fc) {
      if (fc.start.type === "flow-seq-start") {
        for (const it of fc.items) {
          if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
            if (it.key)
              it.value = it.key;
            delete it.key;
            if (isFlowToken(it.value)) {
              if (it.value.end)
                Array.prototype.push.apply(it.value.end, it.sep);
              else
                it.value.end = it.sep;
            } else
              Array.prototype.push.apply(it.start, it.sep);
            delete it.sep;
          }
        }
      }
    }
    var Parser = class {
      /**
       * @param onNewLine - If defined, called separately with the start position of
       *   each new line (in `parse()`, including the start of input).
       */
      constructor(onNewLine) {
        this.atNewLine = true;
        this.atScalar = false;
        this.indent = 0;
        this.offset = 0;
        this.onKeyLine = false;
        this.stack = [];
        this.source = "";
        this.type = "";
        this.lexer = new lexer.Lexer();
        this.onNewLine = onNewLine;
      }
      /**
       * Parse `source` as a YAML stream.
       * If `incomplete`, a part of the last line may be left as a buffer for the next call.
       *
       * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
       *
       * @returns A generator of tokens representing each directive, document, and other structure.
       */
      *parse(source, incomplete = false) {
        if (this.onNewLine && this.offset === 0)
          this.onNewLine(0);
        for (const lexeme of this.lexer.lex(source, incomplete))
          yield* this.next(lexeme);
        if (!incomplete)
          yield* this.end();
      }
      /**
       * Advance the parser by the `source` of one lexical token.
       */
      *next(source) {
        this.source = source;
        if (node_process.env.LOG_TOKENS)
          console.log("|", cst.prettyToken(source));
        if (this.atScalar) {
          this.atScalar = false;
          yield* this.step();
          this.offset += source.length;
          return;
        }
        const type = cst.tokenType(source);
        if (!type) {
          const message = `Not a YAML token: ${source}`;
          yield* this.pop({ type: "error", offset: this.offset, message, source });
          this.offset += source.length;
        } else if (type === "scalar") {
          this.atNewLine = false;
          this.atScalar = true;
          this.type = "scalar";
        } else {
          this.type = type;
          yield* this.step();
          switch (type) {
            case "newline":
              this.atNewLine = true;
              this.indent = 0;
              if (this.onNewLine)
                this.onNewLine(this.offset + source.length);
              break;
            case "space":
              if (this.atNewLine && source[0] === " ")
                this.indent += source.length;
              break;
            case "explicit-key-ind":
            case "map-value-ind":
            case "seq-item-ind":
              if (this.atNewLine)
                this.indent += source.length;
              break;
            case "doc-mode":
            case "flow-error-end":
              return;
            default:
              this.atNewLine = false;
          }
          this.offset += source.length;
        }
      }
      /** Call at end of input to push out any remaining constructions */
      *end() {
        while (this.stack.length > 0)
          yield* this.pop();
      }
      get sourceToken() {
        const st = {
          type: this.type,
          offset: this.offset,
          indent: this.indent,
          source: this.source
        };
        return st;
      }
      *step() {
        const top = this.peek(1);
        if (this.type === "doc-end" && (!top || top.type !== "doc-end")) {
          while (this.stack.length > 0)
            yield* this.pop();
          this.stack.push({
            type: "doc-end",
            offset: this.offset,
            source: this.source
          });
          return;
        }
        if (!top)
          return yield* this.stream();
        switch (top.type) {
          case "document":
            return yield* this.document(top);
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return yield* this.scalar(top);
          case "block-scalar":
            return yield* this.blockScalar(top);
          case "block-map":
            return yield* this.blockMap(top);
          case "block-seq":
            return yield* this.blockSequence(top);
          case "flow-collection":
            return yield* this.flowCollection(top);
          case "doc-end":
            return yield* this.documentEnd(top);
        }
        yield* this.pop();
      }
      peek(n) {
        return this.stack[this.stack.length - n];
      }
      *pop(error) {
        const token = error ?? this.stack.pop();
        if (!token) {
          const message = "Tried to pop an empty stack";
          yield { type: "error", offset: this.offset, source: "", message };
        } else if (this.stack.length === 0) {
          yield token;
        } else {
          const top = this.peek(1);
          if (token.type === "block-scalar") {
            token.indent = "indent" in top ? top.indent : 0;
          } else if (token.type === "flow-collection" && top.type === "document") {
            token.indent = 0;
          }
          if (token.type === "flow-collection")
            fixFlowSeqItems(token);
          switch (top.type) {
            case "document":
              top.value = token;
              break;
            case "block-scalar":
              top.props.push(token);
              break;
            case "block-map": {
              const it = top.items[top.items.length - 1];
              if (it.value) {
                top.items.push({ start: [], key: token, sep: [] });
                this.onKeyLine = true;
                return;
              } else if (it.sep) {
                it.value = token;
              } else {
                Object.assign(it, { key: token, sep: [] });
                this.onKeyLine = !it.explicitKey;
                return;
              }
              break;
            }
            case "block-seq": {
              const it = top.items[top.items.length - 1];
              if (it.value)
                top.items.push({ start: [], value: token });
              else
                it.value = token;
              break;
            }
            case "flow-collection": {
              const it = top.items[top.items.length - 1];
              if (!it || it.value)
                top.items.push({ start: [], key: token, sep: [] });
              else if (it.sep)
                it.value = token;
              else
                Object.assign(it, { key: token, sep: [] });
              return;
            }
            /* istanbul ignore next should not happen */
            default:
              yield* this.pop();
              yield* this.pop(token);
          }
          if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
            const last = token.items[token.items.length - 1];
            if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st) => st.type !== "comment" || st.indent < token.indent))) {
              if (top.type === "document")
                top.end = last.start;
              else
                top.items.push({ start: last.start });
              token.items.splice(-1, 1);
            }
          }
        }
      }
      *stream() {
        switch (this.type) {
          case "directive-line":
            yield { type: "directive", offset: this.offset, source: this.source };
            return;
          case "byte-order-mark":
          case "space":
          case "comment":
          case "newline":
            yield this.sourceToken;
            return;
          case "doc-mode":
          case "doc-start": {
            const doc = {
              type: "document",
              offset: this.offset,
              start: []
            };
            if (this.type === "doc-start")
              doc.start.push(this.sourceToken);
            this.stack.push(doc);
            return;
          }
        }
        yield {
          type: "error",
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML stream`,
          source: this.source
        };
      }
      *document(doc) {
        if (doc.value)
          return yield* this.lineEnd(doc);
        switch (this.type) {
          case "doc-start": {
            if (findNonEmptyIndex(doc.start) !== -1) {
              yield* this.pop();
              yield* this.step();
            } else
              doc.start.push(this.sourceToken);
            return;
          }
          case "anchor":
          case "tag":
          case "space":
          case "comment":
          case "newline":
            doc.start.push(this.sourceToken);
            return;
        }
        const bv = this.startBlockValue(doc);
        if (bv)
          this.stack.push(bv);
        else {
          yield {
            type: "error",
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML document`,
            source: this.source
          };
        }
      }
      *scalar(scalar) {
        if (this.type === "map-value-ind") {
          const prev = getPrevProps(this.peek(2));
          const start = getFirstKeyStartProps(prev);
          let sep;
          if (scalar.end) {
            sep = scalar.end;
            sep.push(this.sourceToken);
            delete scalar.end;
          } else
            sep = [this.sourceToken];
          const map = {
            type: "block-map",
            offset: scalar.offset,
            indent: scalar.indent,
            items: [{ start, key: scalar, sep }]
          };
          this.onKeyLine = true;
          this.stack[this.stack.length - 1] = map;
        } else
          yield* this.lineEnd(scalar);
      }
      *blockScalar(scalar) {
        switch (this.type) {
          case "space":
          case "comment":
          case "newline":
            scalar.props.push(this.sourceToken);
            return;
          case "scalar":
            scalar.source = this.source;
            this.atNewLine = true;
            this.indent = 0;
            if (this.onNewLine) {
              let nl = this.source.indexOf("\n") + 1;
              while (nl !== 0) {
                this.onNewLine(this.offset + nl);
                nl = this.source.indexOf("\n", nl) + 1;
              }
            }
            yield* this.pop();
            break;
          /* istanbul ignore next should not happen */
          default:
            yield* this.pop();
            yield* this.step();
        }
      }
      *blockMap(map) {
        const it = map.items[map.items.length - 1];
        switch (this.type) {
          case "newline":
            this.onKeyLine = false;
            if (it.value) {
              const end = "end" in it.value ? it.value.end : void 0;
              const last = Array.isArray(end) ? end[end.length - 1] : void 0;
              if (last?.type === "comment")
                end?.push(this.sourceToken);
              else
                map.items.push({ start: [this.sourceToken] });
            } else if (it.sep) {
              it.sep.push(this.sourceToken);
            } else {
              it.start.push(this.sourceToken);
            }
            return;
          case "space":
          case "comment":
            if (it.value) {
              map.items.push({ start: [this.sourceToken] });
            } else if (it.sep) {
              it.sep.push(this.sourceToken);
            } else {
              if (this.atIndentedComment(it.start, map.indent)) {
                const prev = map.items[map.items.length - 2];
                const end = prev?.value?.end;
                if (Array.isArray(end)) {
                  Array.prototype.push.apply(end, it.start);
                  end.push(this.sourceToken);
                  map.items.pop();
                  return;
                }
              }
              it.start.push(this.sourceToken);
            }
            return;
        }
        if (this.indent >= map.indent) {
          const atMapIndent = !this.onKeyLine && this.indent === map.indent;
          const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
          let start = [];
          if (atNextItem && it.sep && !it.value) {
            const nl = [];
            for (let i = 0; i < it.sep.length; ++i) {
              const st = it.sep[i];
              switch (st.type) {
                case "newline":
                  nl.push(i);
                  break;
                case "space":
                  break;
                case "comment":
                  if (st.indent > map.indent)
                    nl.length = 0;
                  break;
                default:
                  nl.length = 0;
              }
            }
            if (nl.length >= 2)
              start = it.sep.splice(nl[1]);
          }
          switch (this.type) {
            case "anchor":
            case "tag":
              if (atNextItem || it.value) {
                start.push(this.sourceToken);
                map.items.push({ start });
                this.onKeyLine = true;
              } else if (it.sep) {
                it.sep.push(this.sourceToken);
              } else {
                it.start.push(this.sourceToken);
              }
              return;
            case "explicit-key-ind":
              if (!it.sep && !it.explicitKey) {
                it.start.push(this.sourceToken);
                it.explicitKey = true;
              } else if (atNextItem || it.value) {
                start.push(this.sourceToken);
                map.items.push({ start, explicitKey: true });
              } else {
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: [this.sourceToken], explicitKey: true }]
                });
              }
              this.onKeyLine = true;
              return;
            case "map-value-ind":
              if (it.explicitKey) {
                if (!it.sep) {
                  if (includesToken(it.start, "newline")) {
                    Object.assign(it, { key: null, sep: [this.sourceToken] });
                  } else {
                    const start2 = getFirstKeyStartProps(it.start);
                    this.stack.push({
                      type: "block-map",
                      offset: this.offset,
                      indent: this.indent,
                      items: [{ start: start2, key: null, sep: [this.sourceToken] }]
                    });
                  }
                } else if (it.value) {
                  map.items.push({ start: [], key: null, sep: [this.sourceToken] });
                } else if (includesToken(it.sep, "map-value-ind")) {
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start, key: null, sep: [this.sourceToken] }]
                  });
                } else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
                  const start2 = getFirstKeyStartProps(it.start);
                  const key = it.key;
                  const sep = it.sep;
                  sep.push(this.sourceToken);
                  delete it.key;
                  delete it.sep;
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: start2, key, sep }]
                  });
                } else if (start.length > 0) {
                  it.sep = it.sep.concat(start, this.sourceToken);
                } else {
                  it.sep.push(this.sourceToken);
                }
              } else {
                if (!it.sep) {
                  Object.assign(it, { key: null, sep: [this.sourceToken] });
                } else if (it.value || atNextItem) {
                  map.items.push({ start, key: null, sep: [this.sourceToken] });
                } else if (includesToken(it.sep, "map-value-ind")) {
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: [], key: null, sep: [this.sourceToken] }]
                  });
                } else {
                  it.sep.push(this.sourceToken);
                }
              }
              this.onKeyLine = true;
              return;
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar": {
              const fs = this.flowScalar(this.type);
              if (atNextItem || it.value) {
                map.items.push({ start, key: fs, sep: [] });
                this.onKeyLine = true;
              } else if (it.sep) {
                this.stack.push(fs);
              } else {
                Object.assign(it, { key: fs, sep: [] });
                this.onKeyLine = true;
              }
              return;
            }
            default: {
              const bv = this.startBlockValue(map);
              if (bv) {
                if (bv.type === "block-seq") {
                  if (!it.explicitKey && it.sep && !includesToken(it.sep, "newline")) {
                    yield* this.pop({
                      type: "error",
                      offset: this.offset,
                      message: "Unexpected block-seq-ind on same line with key",
                      source: this.source
                    });
                    return;
                  }
                } else if (atMapIndent) {
                  map.items.push({ start });
                }
                this.stack.push(bv);
                return;
              }
            }
          }
        }
        yield* this.pop();
        yield* this.step();
      }
      *blockSequence(seq) {
        const it = seq.items[seq.items.length - 1];
        switch (this.type) {
          case "newline":
            if (it.value) {
              const end = "end" in it.value ? it.value.end : void 0;
              const last = Array.isArray(end) ? end[end.length - 1] : void 0;
              if (last?.type === "comment")
                end?.push(this.sourceToken);
              else
                seq.items.push({ start: [this.sourceToken] });
            } else
              it.start.push(this.sourceToken);
            return;
          case "space":
          case "comment":
            if (it.value)
              seq.items.push({ start: [this.sourceToken] });
            else {
              if (this.atIndentedComment(it.start, seq.indent)) {
                const prev = seq.items[seq.items.length - 2];
                const end = prev?.value?.end;
                if (Array.isArray(end)) {
                  Array.prototype.push.apply(end, it.start);
                  end.push(this.sourceToken);
                  seq.items.pop();
                  return;
                }
              }
              it.start.push(this.sourceToken);
            }
            return;
          case "anchor":
          case "tag":
            if (it.value || this.indent <= seq.indent)
              break;
            it.start.push(this.sourceToken);
            return;
          case "seq-item-ind":
            if (this.indent !== seq.indent)
              break;
            if (it.value || includesToken(it.start, "seq-item-ind"))
              seq.items.push({ start: [this.sourceToken] });
            else
              it.start.push(this.sourceToken);
            return;
        }
        if (this.indent > seq.indent) {
          const bv = this.startBlockValue(seq);
          if (bv) {
            this.stack.push(bv);
            return;
          }
        }
        yield* this.pop();
        yield* this.step();
      }
      *flowCollection(fc) {
        const it = fc.items[fc.items.length - 1];
        if (this.type === "flow-error-end") {
          let top;
          do {
            yield* this.pop();
            top = this.peek(1);
          } while (top && top.type === "flow-collection");
        } else if (fc.end.length === 0) {
          switch (this.type) {
            case "comma":
            case "explicit-key-ind":
              if (!it || it.sep)
                fc.items.push({ start: [this.sourceToken] });
              else
                it.start.push(this.sourceToken);
              return;
            case "map-value-ind":
              if (!it || it.value)
                fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (it.sep)
                it.sep.push(this.sourceToken);
              else
                Object.assign(it, { key: null, sep: [this.sourceToken] });
              return;
            case "space":
            case "comment":
            case "newline":
            case "anchor":
            case "tag":
              if (!it || it.value)
                fc.items.push({ start: [this.sourceToken] });
              else if (it.sep)
                it.sep.push(this.sourceToken);
              else
                it.start.push(this.sourceToken);
              return;
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar": {
              const fs = this.flowScalar(this.type);
              if (!it || it.value)
                fc.items.push({ start: [], key: fs, sep: [] });
              else if (it.sep)
                this.stack.push(fs);
              else
                Object.assign(it, { key: fs, sep: [] });
              return;
            }
            case "flow-map-end":
            case "flow-seq-end":
              fc.end.push(this.sourceToken);
              return;
          }
          const bv = this.startBlockValue(fc);
          if (bv)
            this.stack.push(bv);
          else {
            yield* this.pop();
            yield* this.step();
          }
        } else {
          const parent = this.peek(2);
          if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
            yield* this.pop();
            yield* this.step();
          } else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
            const prev = getPrevProps(parent);
            const start = getFirstKeyStartProps(prev);
            fixFlowSeqItems(fc);
            const sep = fc.end.splice(1, fc.end.length);
            sep.push(this.sourceToken);
            const map = {
              type: "block-map",
              offset: fc.offset,
              indent: fc.indent,
              items: [{ start, key: fc, sep }]
            };
            this.onKeyLine = true;
            this.stack[this.stack.length - 1] = map;
          } else {
            yield* this.lineEnd(fc);
          }
        }
      }
      flowScalar(type) {
        if (this.onNewLine) {
          let nl = this.source.indexOf("\n") + 1;
          while (nl !== 0) {
            this.onNewLine(this.offset + nl);
            nl = this.source.indexOf("\n", nl) + 1;
          }
        }
        return {
          type,
          offset: this.offset,
          indent: this.indent,
          source: this.source
        };
      }
      startBlockValue(parent) {
        switch (this.type) {
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return this.flowScalar(this.type);
          case "block-scalar-header":
            return {
              type: "block-scalar",
              offset: this.offset,
              indent: this.indent,
              props: [this.sourceToken],
              source: ""
            };
          case "flow-map-start":
          case "flow-seq-start":
            return {
              type: "flow-collection",
              offset: this.offset,
              indent: this.indent,
              start: this.sourceToken,
              items: [],
              end: []
            };
          case "seq-item-ind":
            return {
              type: "block-seq",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [this.sourceToken] }]
            };
          case "explicit-key-ind": {
            this.onKeyLine = true;
            const prev = getPrevProps(parent);
            const start = getFirstKeyStartProps(prev);
            start.push(this.sourceToken);
            return {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start, explicitKey: true }]
            };
          }
          case "map-value-ind": {
            this.onKeyLine = true;
            const prev = getPrevProps(parent);
            const start = getFirstKeyStartProps(prev);
            return {
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start, key: null, sep: [this.sourceToken] }]
            };
          }
        }
        return null;
      }
      atIndentedComment(start, indent) {
        if (this.type !== "comment")
          return false;
        if (this.indent <= indent)
          return false;
        return start.every((st) => st.type === "newline" || st.type === "space");
      }
      *documentEnd(docEnd) {
        if (this.type !== "doc-mode") {
          if (docEnd.end)
            docEnd.end.push(this.sourceToken);
          else
            docEnd.end = [this.sourceToken];
          if (this.type === "newline")
            yield* this.pop();
        }
      }
      *lineEnd(token) {
        switch (this.type) {
          case "comma":
          case "doc-start":
          case "doc-end":
          case "flow-seq-end":
          case "flow-map-end":
          case "map-value-ind":
            yield* this.pop();
            yield* this.step();
            break;
          case "newline":
            this.onKeyLine = false;
          // fallthrough
          case "space":
          case "comment":
          default:
            if (token.end)
              token.end.push(this.sourceToken);
            else
              token.end = [this.sourceToken];
            if (this.type === "newline")
              yield* this.pop();
        }
      }
    };
    exports2.Parser = Parser;
  }
});

// node_modules/yaml/dist/public-api.js
var require_public_api = __commonJS({
  "node_modules/yaml/dist/public-api.js"(exports2) {
    "use strict";
    var composer = require_composer();
    var Document = require_Document();
    var errors = require_errors();
    var log = require_log();
    var identity = require_identity();
    var lineCounter = require_line_counter();
    var parser = require_parser();
    function parseOptions(options) {
      const prettyErrors = options.prettyErrors !== false;
      const lineCounter$1 = options.lineCounter || prettyErrors && new lineCounter.LineCounter() || null;
      return { lineCounter: lineCounter$1, prettyErrors };
    }
    function parseAllDocuments(source, options = {}) {
      const { lineCounter: lineCounter2, prettyErrors } = parseOptions(options);
      const parser$1 = new parser.Parser(lineCounter2?.addNewLine);
      const composer$1 = new composer.Composer(options);
      const docs = Array.from(composer$1.compose(parser$1.parse(source)));
      if (prettyErrors && lineCounter2)
        for (const doc of docs) {
          doc.errors.forEach(errors.prettifyError(source, lineCounter2));
          doc.warnings.forEach(errors.prettifyError(source, lineCounter2));
        }
      if (docs.length > 0)
        return docs;
      return Object.assign([], { empty: true }, composer$1.streamInfo());
    }
    function parseDocument2(source, options = {}) {
      const { lineCounter: lineCounter2, prettyErrors } = parseOptions(options);
      const parser$1 = new parser.Parser(lineCounter2?.addNewLine);
      const composer$1 = new composer.Composer(options);
      let doc = null;
      for (const _doc of composer$1.compose(parser$1.parse(source), true, source.length)) {
        if (!doc)
          doc = _doc;
        else if (doc.options.logLevel !== "silent") {
          doc.errors.push(new errors.YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
          break;
        }
      }
      if (prettyErrors && lineCounter2) {
        doc.errors.forEach(errors.prettifyError(source, lineCounter2));
        doc.warnings.forEach(errors.prettifyError(source, lineCounter2));
      }
      return doc;
    }
    function parse(src, reviver, options) {
      let _reviver = void 0;
      if (typeof reviver === "function") {
        _reviver = reviver;
      } else if (options === void 0 && reviver && typeof reviver === "object") {
        options = reviver;
      }
      const doc = parseDocument2(src, options);
      if (!doc)
        return null;
      doc.warnings.forEach((warning) => log.warn(doc.options.logLevel, warning));
      if (doc.errors.length > 0) {
        if (doc.options.logLevel !== "silent")
          throw doc.errors[0];
        else
          doc.errors = [];
      }
      return doc.toJS(Object.assign({ reviver: _reviver }, options));
    }
    function stringify(value, replacer, options) {
      let _replacer = null;
      if (typeof replacer === "function" || Array.isArray(replacer)) {
        _replacer = replacer;
      } else if (options === void 0 && replacer) {
        options = replacer;
      }
      if (typeof options === "string")
        options = options.length;
      if (typeof options === "number") {
        const indent = Math.round(options);
        options = indent < 1 ? void 0 : indent > 8 ? { indent: 8 } : { indent };
      }
      if (value === void 0) {
        const { keepUndefined } = options ?? replacer ?? {};
        if (!keepUndefined)
          return void 0;
      }
      if (identity.isDocument(value) && !_replacer)
        return value.toString(options);
      return new Document.Document(value, _replacer, options).toString(options);
    }
    exports2.parse = parse;
    exports2.parseAllDocuments = parseAllDocuments;
    exports2.parseDocument = parseDocument2;
    exports2.stringify = stringify;
  }
});

// node_modules/yaml/dist/index.js
var require_dist = __commonJS({
  "node_modules/yaml/dist/index.js"(exports2) {
    "use strict";
    var composer = require_composer();
    var Document = require_Document();
    var Schema = require_Schema();
    var errors = require_errors();
    var Alias = require_Alias();
    var identity = require_identity();
    var Pair = require_Pair();
    var Scalar = require_Scalar();
    var YAMLMap = require_YAMLMap();
    var YAMLSeq = require_YAMLSeq();
    var cst = require_cst();
    var lexer = require_lexer();
    var lineCounter = require_line_counter();
    var parser = require_parser();
    var publicApi = require_public_api();
    var visit = require_visit();
    exports2.Composer = composer.Composer;
    exports2.Document = Document.Document;
    exports2.Schema = Schema.Schema;
    exports2.YAMLError = errors.YAMLError;
    exports2.YAMLParseError = errors.YAMLParseError;
    exports2.YAMLWarning = errors.YAMLWarning;
    exports2.Alias = Alias.Alias;
    exports2.isAlias = identity.isAlias;
    exports2.isCollection = identity.isCollection;
    exports2.isDocument = identity.isDocument;
    exports2.isMap = identity.isMap;
    exports2.isNode = identity.isNode;
    exports2.isPair = identity.isPair;
    exports2.isScalar = identity.isScalar;
    exports2.isSeq = identity.isSeq;
    exports2.Pair = Pair.Pair;
    exports2.Scalar = Scalar.Scalar;
    exports2.YAMLMap = YAMLMap.YAMLMap;
    exports2.YAMLSeq = YAMLSeq.YAMLSeq;
    exports2.CST = cst;
    exports2.Lexer = lexer.Lexer;
    exports2.LineCounter = lineCounter.LineCounter;
    exports2.Parser = parser.Parser;
    exports2.parse = publicApi.parse;
    exports2.parseAllDocuments = publicApi.parseAllDocuments;
    exports2.parseDocument = publicApi.parseDocument;
    exports2.stringify = publicApi.stringify;
    exports2.visit = visit.visit;
    exports2.visitAsync = visit.visitAsync;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LifeArchive
});
module.exports = __toCommonJS(main_exports);
var import_obsidian7 = require("obsidian");

// src/core/config.ts
var PERIOD_KINDS = ["daily", "weekly", "monthly", "quarterly", "yearly"];
var PERIOD_ROOT = "\u5468\u671F\u7B14\u8BB0";
var PERIOD_TYPES = { daily: "Daily", weekly: "Weekly", monthly: "Monthly", quarterly: "Quarterly" };
var OLD_TYPES = { daily: "\u65E5", weekly: "\u5468", monthly: "\u6708", quarterly: "\u5B63", yearly: "\u5E74" };
var PATHS = { thoughts: "\u601D\u60F3", templates: "\u6A21\u677F" };
var canonical = (path) => path.normalize("NFC").toLowerCase();
var overlaps = (a, b) => a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
var TEMPLATE_NAMES = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
  thought: "\u601D\u60F3\u6587\u7AE0"
};
function safePath(value) {
  if (typeof value !== "string" || !value || value !== value.trim() || value.length > 500 || /[\\\x00-\x1f\x7f:#|\[\]<>?*"]/.test(value) || value.split("/").some((p) => !p || p.startsWith(".") || p.endsWith(".") || p !== p.trim())) {
    throw new Error(`\u65E0\u6548\u7684 Vault \u76F8\u5BF9\u8DEF\u5F84\uFF1A${String(value)}`);
  }
  return value;
}
function record(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) throw new Error("\u914D\u7F6E\u5FC5\u987B\u662F\u5BF9\u8C61");
  return input;
}
function loadConfig(input = {}) {
  const raw = record(input ?? {});
  if (raw.schemaVersion !== void 0 && raw.schemaVersion !== 1) throw new Error("\u4E0D\u652F\u6301\u7684\u914D\u7F6E\u7248\u672C");
  const inputPaths = raw.paths === void 0 ? {} : record(raw.paths);
  const paths = Object.fromEntries(Object.entries(PATHS).map(([kind, fallback]) => [kind, safePath(inputPaths[kind] ?? fallback)]));
  const roots = [PERIOD_ROOT, "\u65E5\u8BB0", paths.thoughts, paths.templates].map(canonical);
  for (const [index, root] of roots.entries()) {
    for (const other of roots.slice(index + 1)) {
      if (overlaps(root, other)) throw new Error(`\u5185\u5BB9\u76EE\u5F55\u4E0D\u80FD\u91CD\u53E0\uFF1A${root} / ${other}`);
    }
  }
  const inputTemplates = raw.templates === void 0 ? {} : record(raw.templates);
  const templates = Object.fromEntries(Object.entries(TEMPLATE_NAMES).map(([kind, name]) => {
    const path = safePath(inputTemplates[kind] ?? `${paths.templates}/${name}.md`);
    if (!path.endsWith(".md")) throw new Error("\u6A21\u677F\u5FC5\u987B\u662F Markdown \u6587\u4EF6");
    return [kind, path];
  }));
  if (raw.openOnStartup !== void 0 && typeof raw.openOnStartup !== "boolean") throw new Error("\u542F\u52A8\u9009\u9879\u5FC5\u987B\u662F\u5E03\u5C14\u503C");
  const githubRemote = raw.githubRemote ?? "";
  if (typeof githubRemote !== "string" || githubRemote && !/^(git@github\.com:|https:\/\/github\.com\/)[A-Za-z0-9-]+\/[A-Za-z0-9_.-]+\.git$/.test(githubRemote)) {
    throw new Error("GitHub \u5730\u5740\u9700\u4F7F\u7528\u4E0D\u5E26\u51ED\u636E\u7684 SSH \u6216 HTTPS \u514B\u9686\u5730\u5740");
  }
  const currentChapterPath = optionalFile(raw.currentChapterPath, ".md", "\u5F53\u524D\u7AE0\u8282");
  const lifeMapPath = optionalFile(raw.lifeMapPath, ".canvas", "\u4EBA\u751F\u5730\u56FE");
  return { schemaVersion: 1, paths, templates, openOnStartup: raw.openOnStartup !== false, githubRemote, currentChapterPath, lifeMapPath };
}
function optionalFile(value, extension, name) {
  if (value === void 0 || value === "") return "";
  const path = safePath(value);
  if (!path.endsWith(extension)) throw new Error(name + "\u987B\u4F7F\u7528 " + extension + " \u6587\u4EF6");
  return path;
}
function relocatePath(path, oldPath, newPath) {
  return path === oldPath || isWithin(path, oldPath) ? newPath + path.slice(oldPath.length) : path;
}
function isWithin(path, folder) {
  return path.startsWith(`${folder}/`);
}
function periodFolders(kind, key) {
  const year = key.slice(0, 4);
  const annual = `${PERIOD_ROOT}/${year}`;
  const oldAnnual = `\u5468\u671F\u7B14\u8BB0/${year}`;
  const oldType = OLD_TYPES[kind];
  const month = key.slice(5, 7);
  const current = kind === "yearly" ? annual : `${annual}/${PERIOD_TYPES[kind]}${kind === "daily" ? `/${month}` : ""}`;
  const previous = kind === "yearly" ? oldAnnual : `${oldAnnual}/${oldType}${kind === "daily" ? `/${month}` : ""}`;
  return [current, previous, `\u5468\u671F\u7B14\u8BB0/${oldType}`, "\u5468\u671F\u7B14\u8BB0", ...kind === "daily" ? ["\u65E5\u8BB0"] : []];
}

// src/core/periods.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_utc = __toESM(require_utc(), 1);
var import_timezone = __toESM(require_timezone(), 1);
var import_isoWeek = __toESM(require_isoWeek(), 1);
var import_quarterOfYear = __toESM(require_quarterOfYear(), 1);
var import_customParseFormat = __toESM(require_customParseFormat(), 1);
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_timezone.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_quarterOfYear.default);
import_dayjs.default.extend(import_customParseFormat.default);
var CALENDAR_ZONE = "Asia/Shanghai";
function isoWeekStart(year, week) {
  if (year < 1e3 || year > 9999 || week < 1 || week > 53) return null;
  const start = import_dayjs.default.utc(`${year}-01-04`).startOf("isoWeek").add(week - 1, "week");
  return start.isoWeekYear() === year ? start : null;
}
var PERIOD_LABELS = { daily: "\u65E5\u7B14\u8BB0", weekly: "\u5468\u7B14\u8BB0", monthly: "\u6708\u7B14\u8BB0", quarterly: "\u5B63\u7B14\u8BB0", yearly: "\u5E74\u7B14\u8BB0" };
function parseDay(date) {
  const d = import_dayjs.default.utc(date, "YYYY-MM-DD", true);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !d.isValid() || d.year() < 1e3) throw new Error(`\u65E0\u6548\u65E5\u671F\uFF1A${date}`);
  return d;
}
function assertMonth(month) {
  if (!/^\d{4}-\d{2}$/.test(month)) throw new Error(`\u6708\u4EFD\u5FC5\u987B\u4E3A YYYY-MM\uFF1A${month}`);
  parseDay(`${month}-01`);
  return month;
}
function today(now = /* @__PURE__ */ new Date()) {
  return (0, import_dayjs.default)(now).tz(CALENDAR_ZONE).format("YYYY-MM-DD");
}
function periodFor(kind, date) {
  const d = parseDay(date);
  let key, start, end;
  if (kind === "weekly") {
    key = `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, "0")}`;
    start = d.startOf("isoWeek").format("YYYY-MM-DD");
    end = d.endOf("isoWeek").format("YYYY-MM-DD");
  } else {
    const unit = { daily: "day", monthly: "month", quarterly: "quarter", yearly: "year" }[kind];
    start = d.startOf(unit).format("YYYY-MM-DD");
    end = d.endOf(unit).format("YYYY-MM-DD");
    key = kind === "daily" ? date : kind === "monthly" ? d.format("YYYY-MM") : kind === "quarterly" ? `${d.year()}-Q${d.quarter()}` : d.format("YYYY");
  }
  return { kind, key, title: key, start, end, path: `${periodFolders(kind, key)[0]}/${key}.md` };
}
function periodNotePaths(period) {
  return periodFolders(period.kind, period.key).map((folder) => `${folder}/${period.key}.md`);
}
function calendarMonth(month) {
  assertMonth(month);
  const first = parseDay(`${month}-01`), last = first.endOf("month");
  const weeks = [];
  for (let d = first.startOf("isoWeek"); !d.isAfter(last); d = d.add(7, "day")) {
    weeks.push({
      key: `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, "0")}`,
      days: Array.from({ length: 7 }, (_, i) => d.add(i, "day").format("YYYY-MM-DD"))
    });
  }
  return weeks;
}
function classifyNote(path, config) {
  if (path.startsWith(`${config.paths.thoughts}/`) && path.endsWith(".md")) return { kind: "thoughts", key: path.slice(config.paths.thoughts.length + 1, -3), path };
  if (!path.endsWith(".md")) return null;
  const slash = path.lastIndexOf("/");
  const folder = path.slice(0, slash), key = path.slice(slash + 1, -3);
  for (const kind of PERIOD_KINDS) {
    if (!periodFolders(kind, key).includes(folder)) continue;
    try {
      let date;
      if (kind === "daily") date = key;
      else if (kind === "weekly") {
        const m = key.match(/^(\d{4})-W(\d{2})$/);
        if (!m) continue;
        const start = isoWeekStart(Number(m[1]), Number(m[2]));
        if (!start) continue;
        date = start.format("YYYY-MM-DD");
      } else if (kind === "monthly") date = `${assertMonth(key)}-01`;
      else if (kind === "quarterly") {
        const m = key.match(/^(\d{4})-Q([1-4])$/);
        if (!m) continue;
        date = `${m[1]}-${String((Number(m[2]) - 1) * 3 + 1).padStart(2, "0")}-01`;
      } else {
        if (!/^\d{4}$/.test(key)) continue;
        date = `${key}-01-01`;
      }
      const p = periodFor(kind, date);
      if (p.key === key) return { kind, key, start: p.start, end: p.end, path };
    } catch {
    }
  }
  return null;
}

// src/core/habits.ts
var HABIT_PATH = "\u4E60\u60EF\u6253\u5361.json";
function decode(content) {
  if (content === null) return { habits: [], completed: {} };
  try {
    const data = JSON.parse(content);
    if (!Array.isArray(data.habits) || data.completed === null || typeof data.completed !== "object" || Array.isArray(data.completed)) throw new Error();
    const ids = /* @__PURE__ */ new Set();
    for (const habit of data.habits) {
      if (typeof habit?.id !== "string" || !habit.id || ids.has(habit.id) || typeof habit.name !== "string" || !habit.name.trim()) throw new Error();
      ids.add(habit.id);
    }
    for (const [date, completed] of Object.entries(data.completed)) {
      parseDay(date);
      if (!Array.isArray(completed) || completed.some((id) => !ids.has(id)) || new Set(completed).size !== completed.length) throw new Error();
    }
    return data;
  } catch {
    throw new Error(`\u65E0\u6CD5\u8BFB\u53D6\u300C${HABIT_PATH}\u300D\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F\u3002`);
  }
}
function validateHabitName(name, habits, ownId) {
  const title = name.trim();
  if (!title || title.length > 32) throw new Error("\u8BF7\u8F93\u5165 1\u201332 \u4E2A\u5B57\u7B26\u7684\u4E60\u60EF\u540D\u79F0\u3002");
  if (habits.some((habit) => habit.id !== ownId && habit.name === title)) throw new Error("\u8FD9\u4E2A\u4E60\u60EF\u5DF2\u5B58\u5728\u3002");
  return title;
}
var HabitStore = class {
  constructor(port) {
    this.port = port;
  }
  writes = Promise.resolve();
  async read() {
    await this.writes;
    return decode(await this.port.read());
  }
  update(change) {
    const write = this.writes.then(() => this.port.update((content) => {
      const data = decode(content);
      change(data);
      return JSON.stringify(data, null, 2) + "\n";
    }));
    this.writes = write.catch(() => {
    });
    return write;
  }
  add(name) {
    return this.update((data) => {
      const title = validateHabitName(name, data.habits);
      data.habits.push({ id: crypto.randomUUID(), name: title });
    });
  }
  rename(id, name) {
    return this.update((data) => {
      const habit = data.habits.find((habit2) => habit2.id === id);
      if (!habit) throw new Error("\u627E\u4E0D\u5230\u8FD9\u4E2A\u4E60\u60EF\u3002");
      habit.name = validateHabitName(name, data.habits, id);
    });
  }
  toggle(id, date, today2) {
    return this.update((data) => {
      parseDay(date);
      if (date > today2) throw new Error("\u672A\u6765\u7684\u65E5\u671F\u8FD8\u4E0D\u80FD\u6253\u5361\u3002");
      if (!data.habits.some((habit) => habit.id === id)) throw new Error("\u627E\u4E0D\u5230\u8FD9\u4E2A\u4E60\u60EF\u3002");
      const completed = new Set(data.completed[date]);
      if (completed.has(id)) completed.delete(id);
      else completed.add(id);
      if (completed.size) data.completed[date] = [...completed];
      else delete data.completed[date];
    });
  }
};

// src/core/templates.ts
var defaultTemplates = {
  daily: "## \u4ECA\u5929\u53D1\u751F\u7684\u4E8B\n\n## \u6BCF\u65E5\u901F\u8BB0\n",
  weekly: "## \u672C\u5468\u56DE\u770B\n\n\n\n## \u9884\u671F\u4E0E\u5B9E\u9645\n\n\n\n## \u4E0B\u5468\u7684\u4E00\u4EF6\u4E8B\n\n{{start}} \u2014 {{end}}\n",
  monthly: "## \u8FD9\u4E2A\u6708\u53D1\u751F\u4E86\u4EC0\u4E48\n\n\n\n## \u60F3\u6CD5\u6709\u4EC0\u4E48\u53D8\u5316\n\n\n\n## \u505A\u8FC7\u7684\u9009\u62E9\n\n\n\n## \u4E0B\u4E2A\u6708\n\n{{start}} \u2014 {{end}}\n",
  quarterly: "## \u8FD9\u4E00\u5B63\u7684\u4E3B\u7EBF\n\n\n\n## \u7ED3\u679C\u3001\u53D8\u5316\u4E0E\u53CD\u4F8B\n\n\n\n## \u4E0B\u4E00\u9636\u6BB5\n\n{{start}} \u2014 {{end}}\n",
  yearly: "## \u8FD9\u4E00\u5E74\n\n\n\n## \u91CD\u8981\u7684\u7ECF\u5386\u4E0E\u9009\u62E9\n\n\n\n## \u6539\u53D8\u4E0E\u5EF6\u7EED\n\n\n\n## \u4E0B\u4E00\u5E74\n\n{{start}} \u2014 {{end}}\n",
  thought: '---\ndate: "{{date}}"\n---\n\n'
};
function renderTemplate(template, period, date, monthPath) {
  const vars = {
    date,
    title: period.title,
    period: period.key,
    start: period.start,
    end: period.end,
    monthNote: (monthPath ?? periodFor("monthly", period.start).path).slice(0, -3)
  };
  return template.replace(/\{\{\s*([A-Za-z]+)\s*\}\}/g, (match, key) => vars[key] ?? match);
}
function thoughtPath(title, config) {
  const clean = title.trim().replace(/\.md$/i, "");
  if (!clean || clean.includes("/") || clean.length > 120) throw new Error("\u6587\u7AE0\u6807\u9898\u9700\u4E3A 1\u2014120 \u4E2A\u5B57\u7B26\uFF0C\u4E0D\u80FD\u5305\u542B\u8DEF\u5F84");
  safePath(clean);
  return `${config.paths.thoughts}/${clean}.md`;
}

// src/core/notes.ts
var NoteService = class {
  constructor(config, port) {
    this.config = config;
    this.port = port;
  }
  pending = /* @__PURE__ */ new Map();
  folders = /* @__PURE__ */ new Map();
  async ensureFolder(path) {
    safePath(path);
    const found = this.port.get(path);
    if (found) {
      if (found.kind !== "folder") throw new Error(`\u76EE\u5F55\u4F4D\u7F6E\u5DF2\u88AB\u6587\u4EF6\u5360\u7528\uFF1A${path}`);
      return;
    }
    if (this.folders.has(path)) return this.folders.get(path);
    const work = (async () => {
      const slash = path.lastIndexOf("/");
      if (slash > 0) await this.ensureFolder(path.slice(0, slash));
      try {
        await this.port.mkdir(path);
      } catch (error) {
        if (this.port.get(path)?.kind !== "folder") throw error;
      }
    })();
    this.folders.set(path, work);
    try {
      await work;
    } finally {
      this.folders.delete(path);
    }
  }
  async initialize() {
    const { paths } = this.config;
    for (const path of /* @__PURE__ */ new Set([PERIOD_ROOT, paths.thoughts, paths.templates])) await this.ensureFolder(path);
    for (const kind of Object.keys(this.config.templates)) {
      await this.getOrCreate(this.config.templates[kind], async () => defaultTemplates[kind]);
    }
  }
  async template(kind) {
    const path = this.config.templates[kind], file = this.port.get(path);
    if (!file) return defaultTemplates[kind];
    if (file.kind !== "file") throw new Error(`\u6A21\u677F\u8DEF\u5F84\u4E0D\u662F\u6587\u4EF6\uFF1A${path}`);
    return this.port.read(path);
  }
  async getOrCreate(path, content) {
    safePath(path);
    const existing = this.port.get(path);
    if (existing) {
      if (existing.kind !== "file") throw new Error(`\u7B14\u8BB0\u8DEF\u5F84\u88AB\u76EE\u5F55\u5360\u7528\uFF1A${path}`);
      return existing;
    }
    if (this.pending.has(path)) return this.pending.get(path);
    const work = (async () => {
      await this.ensureFolder(path.slice(0, path.lastIndexOf("/")));
      const text = await content();
      try {
        return await this.port.create(path, text);
      } catch (error) {
        const raced = this.port.get(path);
        if (raced?.kind === "file") return raced;
        throw error;
      }
    })();
    this.pending.set(path, work);
    try {
      return await work;
    } finally {
      this.pending.delete(path);
    }
  }
  async openPeriod(kind, date) {
    const p = periodFor(kind, date);
    const existing = periodNotePaths(p).find((path) => this.port.get(path)?.kind === "file");
    const file = await this.getOrCreate(existing ?? p.path, async () => {
      const month = periodFor("monthly", p.start);
      const monthPath = periodNotePaths(month).find((path) => this.port.get(path)?.kind === "file");
      return renderTemplate(await this.template(kind), p, date, monthPath);
    });
    await this.port.open(file.path);
    return file.path;
  }
  async openThought(title, date) {
    const path = thoughtPath(title, this.config);
    const p = { ...periodFor("daily", date), title: title.trim().replace(/\.md$/i, "") };
    const file = await this.getOrCreate(path, async () => renderTemplate(await this.template("thought"), p, date));
    await this.port.open(file.path);
    return file.path;
  }
};

// src/core/index.ts
var ArchiveIndex = class {
  constructor(config) {
    this.config = config;
  }
  files = /* @__PURE__ */ new Map();
  reset(files) {
    this.files.clear();
    for (const file of files) this.upsert(file);
  }
  upsert(file) {
    if (file.kind === "file" && classifyNote(file.path, this.config)) this.files.set(file.path, file);
  }
  remove(path) {
    this.files.delete(path);
  }
  has(path) {
    return this.files.has(path);
  }
  allPaths() {
    return [...this.files.keys()];
  }
  monthCount(month) {
    return new Set(this.monthDays(month).map((path) => path.split("/").at(-1))).size;
  }
  monthDays(month) {
    return [...this.files.keys()].filter((path) => path.split("/").at(-1)?.startsWith(`${month}-`) && classifyNote(path, this.config)?.kind === "daily");
  }
  thoughts(limit = 6) {
    return [...this.files.values()].filter((f) => isWithin(f.path, this.config.paths.thoughts)).sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || b.mtime - a.mtime || a.path.localeCompare(b.path)).slice(0, limit);
  }
  periodNotes(limit = 12) {
    return [...this.files.values()].filter((f) => classifyNote(f.path, this.config)?.start).sort((a, b) => b.mtime - a.mtime).slice(0, limit);
  }
  get size() {
    return this.files.size;
  }
};

// src/core/frontmatter.ts
var import_yaml = __toESM(require_dist(), 1);
function parseNote(text) {
  const normalized = text.replace(/^\ufeff/, "").replace(/\r\n/g, "\n");
  if (!/^---(?:\n|$)/.test(normalized)) return { attributes: {}, body: normalized, valid: true };
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) return { attributes: {}, body: "", valid: false };
  try {
    const doc = (0, import_yaml.parseDocument)(match[1], { uniqueKeys: true, merge: false });
    if (doc.errors.length) return { attributes: {}, body: "", valid: false };
    const data = doc.toJS({ maxAliasCount: 0 });
    if (data !== null && (typeof data !== "object" || Array.isArray(data))) return { attributes: {}, body: "", valid: false };
    return { attributes: data ?? {}, body: normalized.slice(match[0].length), valid: true };
  } catch {
    return { attributes: {}, body: "", valid: false };
  }
}

// src/core/markdown.ts
function markdownHeadings(text) {
  const headings = [];
  let heading;
  let fence;
  const visible = text.replace(/<!--[\s\S]*?-->|%%[\s\S]*?%%/g, "\n");
  for (const line of visible.split("\n")) {
    const marker = line.match(/^ {0,3}(\x60{3,}|~{3,})(.*)$/);
    if (fence) {
      if (marker?.[1]?.startsWith(fence) && !marker[2]?.trim()) fence = void 0;
      continue;
    }
    if (marker) {
      fence = marker[1];
      continue;
    }
    const match = line.match(/^ {0,3}(#{1,6})[ \t]+(.+?)(?:[ \t]+#+)?[ \t]*$/);
    if (match) {
      heading = { depth: match[1].length, title: match[2].trim(), lines: [] };
      headings.push(heading);
    } else heading?.lines.push(line);
  }
  return headings;
}
function markdownLinks(text) {
  const links = [];
  const visible = text.replace(/(?<![\\\x60])(\x60+)(?!\x60).*?(?<!\x60)\1(?!\x60)/g, (code) => " ".repeat(code.length));
  const pattern = /(?<![!\\])\[\[([^\]|\n]+)(?:\|([^\]\n]*))?\]\]|(?<![!\\])\[([^\]\n]+)\]\(/g;
  for (const match of visible.matchAll(pattern)) {
    if (match.index < (links.at(-1)?.end ?? 0)) continue;
    let end = match.index + match[0].length;
    let target = match[1]?.trim() ?? "";
    if (!match[1]) {
      const destination = markdownDestination(visible, end);
      if (!destination) continue;
      end = destination.end;
      try {
        target = decodeURIComponent(destination.target.trim());
      } catch {
        continue;
      }
    }
    const label = (match[2] || match[3] || target.split("#")[0]?.split("/").at(-1) || target).trim().replace(/\.md$/i, "");
    if (target) links.push({ target, label, index: match.index, end });
  }
  return links;
}
function markdownDestination(text, start) {
  if (text[start] === "<") {
    const end = text.indexOf(">", start + 1);
    return end !== -1 && text[end + 1] === ")" ? { target: text.slice(start + 1, end), end: end + 2 } : null;
  }
  let depth = 1;
  for (let end = start; end < text.length && text[end] !== "\n"; end++) {
    const char = text[end];
    if (char === "\\") end++;
    else if (char === "(") depth++;
    else if (char === ")" && --depth === 0) {
      return { target: text.slice(start, end).replace(/\\([()])/g, "$1"), end: end + 1 };
    }
  }
  return null;
}
function plainMarkdown(text) {
  let plain = text;
  for (const link of markdownLinks(text).reverse()) plain = plain.slice(0, link.index) + link.label + plain.slice(link.end);
  return plain.replace(/\*\*([^*]+)\*\*|__([^_]+)__/g, "$1$2").replace(/\s+/g, " ").trim();
}

// src/core/reviews.ts
var REVIEW_FOLDER = "\u590D\u76D8/AI";
var ATTRIBUTES = ["\u7CBE\u529B", "\u60C5\u7EEA", "\u4E13\u6CE8", "\u65B9\u5411\u611F"];
function reviewPath(month) {
  return REVIEW_FOLDER + "/" + month + ".md";
}
function reviewFile(path) {
  if (!path.startsWith(REVIEW_FOLDER + "/")) return null;
  const name = path.slice(REVIEW_FOLDER.length + 1);
  const month = name.match(/^([1-9]\d{3}-(?:0[1-9]|1[0-2]))\.md$/)?.[1];
  return month ? { month, path } : null;
}
function reviewFiles(paths) {
  return paths.flatMap((path) => reviewFile(path) ?? []).sort((a, b) => b.month.localeCompare(a.month));
}
function reviewBody(body) {
  const start = "<!-- life-archive:ai:start -->";
  const end = "<!-- life-archive:ai:end -->";
  if (!body.includes(start) && !body.includes(end)) return body;
  const parts = body.split(start);
  if (parts.length !== 2 || parts[0].includes(end)) return "";
  const region = parts[1].split(end);
  return region.length === 2 ? region[0] : "";
}
function reviewSection(headings, name) {
  const index = headings.findIndex((heading) => heading.depth === 2 && heading.title === name);
  const children = [];
  if (index === -1) return { lines: [], children };
  for (const child of headings.slice(index + 1)) {
    if (child.depth <= 2) break;
    if (child.depth === 3) children.push(child);
  }
  return { lines: headings[index].lines, children };
}
function labeledLine(line) {
  const match = line.match(/^ {0,3}(?:[-+*]\s+)?(?:\*\*)?([\u4e00-\u9fff]+)(?:\*\*)?\s*[:：]\s*(?:\*\*)?(.*)$/);
  return match ? { label: match[1], value: match[2].trim() } : null;
}
function readObservation(lines) {
  const start = lines.findIndex((line) => labeledLine(line)?.label === "\u89C2\u5BDF");
  const first = start === -1 ? "" : labeledLine(lines[start]).value;
  const paragraph = first ? [first] : [];
  for (const line of lines.slice(start + 1)) {
    const text = line.trim();
    if (!text && !paragraph.length) continue;
    if (!text || text.startsWith(">") || labeledLine(line)) break;
    paragraph.push(text);
  }
  return plainMarkdown(paragraph.join(" "));
}
function linkHeading(title) {
  return title.replace(/#+/g, " ").replace(/\s+/g, " ").trim();
}
function readSources(lines, origin, resolveNote) {
  const sources = [];
  let sourceList = false;
  for (const line of lines) {
    const field = labeledLine(line);
    const continuation = line.trim().replace(/^[-+*]\s+/, "");
    const startsList = field?.label === "\u6765\u6E90";
    if (!continuation || !startsList && !sourceList) continue;
    const links = markdownLinks(startsList ? field.value : continuation);
    sourceList = startsList || links[0]?.index === 0;
    if (!sourceList) continue;
    for (const link of links) {
      const target = resolveNote(link.target, origin);
      if (target && !sources.some((source) => source.path === target.path && source.subpath === target.subpath)) {
        sources.push({ ...target, label: link.label });
      }
    }
  }
  return sources;
}
function parseMonthlyReview(file, text, resolveNote) {
  const note = parseNote(text);
  if (!note.valid) return null;
  const headings = markdownHeadings(reviewBody(note.body));
  const summary = plainMarkdown(reviewSection(headings, "\u6458\u8981").lines.join("\n"));
  const keywordSection = reviewSection(headings, "\u5173\u952E\u8BCD");
  const attributeSection = reviewSection(headings, "\u89D2\u8272\u5C5E\u6027");
  const hasBody = ({ lines, children }) => [lines, ...children.map((child) => child.lines)].some((body) => body.some((line) => labeledLine(line)?.value ?? line.trim()));
  if (!summary && !hasBody(keywordSection) && !hasBody(attributeSection)) return null;
  const keywords = [];
  for (const heading of keywordSection.children) {
    const label = plainMarkdown(heading.title.replace(/^\d+[.、]\s*/, ""));
    const target = linkHeading(heading.title);
    const observation = readObservation(heading.lines);
    if (!label || !target || !observation) continue;
    const sources = readSources(heading.lines, file.path, resolveNote);
    if (sources.length) keywords.push({ label, observation, sources, subpath: "#\u5173\u952E\u8BCD#" + target });
    if (keywords.length === 3) break;
  }
  const ratings = {};
  for (const attribute of ATTRIBUTES) {
    const heading = attributeSection.children.find((child) => plainMarkdown(child.title) === attribute);
    if (!heading) continue;
    const fields = new Map(heading.lines.flatMap((line) => {
      const field = labeledLine(line);
      return field ? [[field.label, field.value]] : [];
    }));
    const score = (fields.get("\u6863\u4F4D") ?? fields.get("\u8BC4\u5206") ?? "").match(/^([1-5])(?:\s*\/\s*5)?$/)?.[1];
    const reason = plainMarkdown(fields.get("\u7406\u7531") ?? "");
    const version = fields.get("\u53E3\u5F84\u7248\u672C") ?? fields.get("\u8BC4\u5206\u53E3\u5F84\u7248\u672C");
    if (!score || !reason || !version) continue;
    const sources = readSources(heading.lines, file.path, resolveNote);
    if (sources.length) ratings[attribute] = { score: Number(score), reason, version, sources, subpath: "#\u89D2\u8272\u5C5E\u6027#" + linkHeading(heading.title) };
  }
  return { ...file, summary, keywords, ratings };
}
async function loadReviewOverview(paths, vault, day) {
  const files = reviewFiles(paths);
  const byMonth = new Map(files.map((file) => [file.month, file]));
  const loaded = /* @__PURE__ */ new Map();
  const load = (month) => {
    const file = byMonth.get(month);
    if (!file) return Promise.resolve(null);
    if (!loaded.has(month)) {
      loaded.set(month, vault.read(file.path).then((text) => parseMonthlyReview(file, text, vault.resolveNote)).catch(() => null));
    }
    return loaded.get(month);
  };
  let latest = null;
  let pending = null;
  for (const file of files) {
    latest = await load(file.month);
    if (latest) break;
    pending ??= { month: file.month, reason: "unreadable" };
  }
  const completedMonth = parseDay(day).subtract(1, "month").format("YYYY-MM");
  if (!pending && latest && latest.month < completedMonth) pending = { month: completedMonth, reason: "missing" };
  const end = parseDay((latest?.month ?? completedMonth) + "-01");
  const months = Array.from({ length: 6 }, (_, index) => end.subtract(5 - index, "month").format("YYYY-MM"));
  const reviews = await Promise.all(months.map(load));
  const cards = Object.fromEntries(ATTRIBUTES.map((attribute) => {
    const ratings = reviews.map((review) => review?.ratings[attribute] ?? null);
    const rating = ratings.at(-1) ?? null;
    const prior = ratings.at(-2);
    let change = null;
    if (rating && prior && rating.version === prior.version) {
      change = rating.score === prior.score ? "same" : rating.score > prior.score ? "up" : "down";
    }
    const points = months.map((month, index) => {
      const current = ratings[index], previous = ratings[index - 1];
      return { month, score: current?.score ?? null, connect: Boolean(current && previous && current.version === previous.version) };
    });
    return [attribute, { rating, change, points }];
  }));
  return { latest, months, pending, cards };
}
function reviewCompanion(path, config, exists) {
  const review = reviewFile(path);
  if (review) {
    const month = periodFor("monthly", review.month + "-01");
    const target2 = periodNotePaths(month).find(exists);
    return target2 ? { path: target2, label: "\u540C\u6708\u6708\u7B14\u8BB0" } : null;
  }
  const period = classifyNote(path, config);
  if (period?.kind !== "monthly") return null;
  const target = reviewPath(period.key);
  return exists(target) ? { path: target, label: "\u540C\u6708 AI \u590D\u76D8" } : null;
}

// src/obsidian/vault-service.ts
var import_obsidian = require("obsidian");
var ObsidianVault = class {
  constructor(app) {
    this.app = app;
  }
  navigation = Promise.resolve();
  entry(file) {
    const date = file instanceof import_obsidian.TFile ? this.app.metadataCache.getFileCache(file)?.frontmatter?.date : void 0;
    return {
      path: file.path,
      kind: file instanceof import_obsidian.TFile ? "file" : "folder",
      mtime: file instanceof import_obsidian.TFile ? file.stat.mtime : 0,
      ctime: file instanceof import_obsidian.TFile ? file.stat.ctime : 0,
      ...typeof date === "string" ? { date } : {}
    };
  }
  get(path) {
    const file = this.app.vault.getAbstractFileByPath(path);
    return file instanceof import_obsidian.TFile || file instanceof import_obsidian.TFolder ? this.entry(file) : null;
  }
  reviewPaths() {
    return (this.app.vault.getFolderByPath(REVIEW_FOLDER)?.children ?? []).filter((file) => file instanceof import_obsidian.TFile && file.extension === "md").map((file) => file.path);
  }
  resolveNote(target, origin, dependencies) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target)) return null;
    const { path, subpath } = (0, import_obsidian.parseLinktext)(target);
    const { vault, metadataCache } = this.app;
    const file = path ? metadataCache.getFirstLinkpathDest(path, origin) : vault.getFileByPath(origin);
    if (!file || file.extension !== "md") return null;
    dependencies.add(file.path);
    if (subpath) {
      const cache = metadataCache.getFileCache(file);
      if (!cache || !(0, import_obsidian.resolveSubpath)(cache, subpath)) return null;
      return { path: file.path, subpath };
    }
    return { path: file.path };
  }
  async read(path) {
    const file = this.app.vault.getFileByPath(path);
    if (!file) throw new Error(`\u7B14\u8BB0\u4E0D\u5B58\u5728\uFF1A${path}`);
    return this.app.vault.read(file);
  }
  async mkdir(path) {
    await this.app.vault.createFolder(path);
  }
  async create(path, text) {
    return this.entry(await this.app.vault.create(path, text));
  }
  open(path, subpath) {
    const pending = this.navigation.then(() => this.openInWorkspace(path, subpath));
    this.navigation = pending.catch(() => {
    });
    return pending;
  }
  async openInWorkspace(path, subpath) {
    const file = this.app.vault.getFileByPath(path);
    if (!file) throw new Error(`\u6587\u4EF6\u5DF2\u79FB\u8D70\u6216\u5220\u9664\uFF1A${path}`);
    const viewType = file.extension === "canvas" ? "canvas" : "markdown";
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(viewType).find((leaf2) => leaf2.getViewState().state?.file === path);
    const leaf = existing ?? workspace.getLeaf("tab");
    if (existing) await workspace.revealLeaf(leaf);
    else await leaf.openFile(file, subpath ? { eState: { subpath } } : void 0);
    if (existing && subpath) leaf.view.setEphemeralState({ subpath });
    workspace.setActiveLeaf(leaf, { focus: true });
  }
};

// src/obsidian/home-view.ts
var import_obsidian3 = require("obsidian");

// src/ui/dom.ts
function el(parent, tag, cls = "", text) {
  const child = parent.ownerDocument.createElement(tag);
  if (cls) child.className = cls;
  if (text !== void 0) child.textContent = text;
  parent.append(child);
  return child;
}
function button(parent, text, action, cls = "", label) {
  const control = el(parent, "button", cls, text);
  control.type = "button";
  control.dataset.action = action;
  if (label) control.setAttribute("aria-label", label);
  return control;
}
function panel(parent, title, cls) {
  const card = el(parent, "section", cls ? `la-card ${cls}` : "la-card");
  const header = el(card, "div", "la-card-head");
  el(header, "h2", "", title);
  return { card, header };
}
function openButton(parent, text, path, cls = "", subpath) {
  const control = button(parent, text, "file", cls);
  control.dataset.path = path;
  if (subpath) control.dataset.subpath = subpath;
  return control;
}
function monthLabel(month) {
  return `${Number(month.slice(0, 4))} \u5E74 ${Number(month.slice(5))} \u6708`;
}

// src/ui/review.ts
function renderReviewStatus(parent, { latest, pending }) {
  const meta = el(parent, "div", "la-review-meta");
  el(meta, "span", "la-review-label", "AI \u6708\u5EA6\u590D\u76D8");
  if (latest) {
    const latestButton = openButton(meta, monthLabel(latest.month), latest.path, "la-text-button la-review-month");
    latestButton.dataset.focusKey = "latest-review";
    latestButton.setAttribute("aria-label", `\u6253\u5F00 ${monthLabel(latest.month)} AI \u590D\u76D8`);
  }
  if (pending) {
    const status = pending.reason === "unreadable" ? "\u8BFB\u53D6\u5931\u8D25" : "\u5C1A\u672A\u751F\u6210";
    el(meta, "span", "la-review-status", `${monthLabel(pending.month)}${status}`);
  } else if (!latest) el(meta, "span", "la-review-status", "\u5F85\u9996\u6B21\u590D\u76D8");
}
function renderTrend(parent, points) {
  const trend = el(parent, "div", "la-trend");
  const hasScore = points.some((point) => point.score !== null);
  const narration = points.map((point) => `${point.month} ${point.score === null ? "\u65E0\u8BC4\u5206" : point.score + "/5"}`).join("\uFF0C");
  trend.setAttribute("role", "img");
  trend.setAttribute("aria-label", `\u8FD1\u516D\u4E2A\u6708\u8D8B\u52BF\uFF0C${hasScore ? "" : "\u6682\u65E0\u8D8B\u52BF\uFF0C"}${narration}`);
  const plot = el(trend, "div", "la-trend-plot");
  plot.setAttribute("aria-hidden", "true");
  if (!hasScore) {
    el(plot, "span", "la-trend-empty", "\u6682\u65E0\u8D8B\u52BF");
  } else {
    const doc = plot.ownerDocument;
    const ns = "http://www.w3.org/2000/svg";
    const graph = doc.createElementNS(ns, "svg");
    graph.setAttribute("viewBox", "0 0 240 48");
    graph.setAttribute("preserveAspectRatio", "none");
    graph.setAttribute("focusable", "false");
    const x = (index) => String(index * 40 + 20);
    const y = (score) => String(44 - (score - 1) * 10);
    points.forEach((point, index) => {
      const previous = points[index - 1];
      if (!point.connect || point.score === null || previous?.score == null) return;
      const line = doc.createElementNS(ns, "line");
      line.classList.add("la-trend-link");
      line.setAttribute("x1", x(index - 1));
      line.setAttribute("y1", y(previous.score));
      line.setAttribute("x2", x(index));
      line.setAttribute("y2", y(point.score));
      graph.append(line);
    });
    points.forEach((point, index) => {
      if (point.score === null) return;
      const dot = doc.createElementNS(ns, "circle");
      dot.setAttribute("cx", x(index));
      dot.setAttribute("cy", y(point.score));
      dot.setAttribute("r", index === points.length - 1 ? "3.5" : "2.6");
      graph.append(dot);
    });
    plot.append(graph);
  }
  const axis = el(trend, "div", "la-trend-axis");
  axis.setAttribute("aria-hidden", "true");
  for (const { month, score } of points) {
    const time = el(axis, "time", "", String(Number(month.slice(5))));
    el(time, "span", "la-month-unit", "\u6708");
    time.dateTime = month;
    time.title = `${monthLabel(month)} \xB7 ${score === null ? "\u65E0\u8BC4\u5206" : score + "/5"}`;
  }
}
function renderAttributes(parent, { latest, cards, pending }) {
  const group = el(parent, "section", "la-attributes");
  el(group, "h2", "la-section-title", "\u89D2\u8272\u9762\u677F");
  const grid = el(group, "div", "la-attribute-grid");
  const changeText = { up: "\u8F83\u4E0A\u6708\u4E0A\u5347", same: "\u8F83\u4E0A\u6708\u6301\u5E73", down: "\u8F83\u4E0A\u6708\u4E0B\u964D" };
  for (const attribute of ATTRIBUTES) {
    const { rating, change, points } = cards[attribute];
    const card = el(grid, "article", "la-card la-attribute");
    const head = el(card, "div", "la-attribute-head");
    el(head, "h3", "", attribute);
    if (latest && rating) {
      const evidence = openButton(head, "\u4F9D\u636E", latest.path, "la-text-button", rating.subpath);
      evidence.dataset.focusKey = "rating-" + attribute;
      evidence.setAttribute("aria-label", `\u67E5\u770B${attribute}\u7684\u8BC4\u5206\u4F9D\u636E`);
    }
    const value = el(card, "div", "la-attribute-value");
    const digits = el(value, "span", "la-score");
    if (rating) {
      el(digits, "strong", "", String(rating.score));
      el(digits, "span", "la-score-scale", "/5");
    } else if (!latest) el(digits, "span", "la-score-dash", "\u2014");
    const status = rating ? change ? changeText[change] : "\u6682\u65E0\u5BF9\u6BD4" : latest ? "\u8D44\u6599\u4E0D\u8DB3" : pending ? "\u8BFB\u53D6\u5931\u8D25" : "\u5F85\u9996\u6B21\u590D\u76D8";
    el(value, "span", "la-compare", status);
    renderTrend(card, points);
  }
}
function renderReviewSummary(parent, { latest }) {
  const { card, header } = panel(parent, "\u6708\u5EA6\u6458\u8981", "la-review-card");
  button(header, "\u5386\u6708\u590D\u76D8", "browse-reviews", "la-text-button");
  el(card, "p", latest?.summary ? "la-review-summary" : "la-copy-muted", latest?.summary || "\u6682\u65E0\u6708\u5EA6\u6458\u8981");
  const keywords = el(card, "div", "la-keywords");
  el(keywords, "h3", "", "\u5173\u952E\u8BCD");
  if (!latest?.keywords.length) {
    el(keywords, "p", "la-copy-muted", "\u6682\u65E0\u6709\u6765\u6E90\u7684\u5173\u952E\u8BCD");
    return;
  }
  const list = el(keywords, "ul", "la-keyword-list");
  for (const item of latest.keywords) {
    const row = el(list, "li");
    const link = openButton(row, "", latest.path, "la-keyword-row", item.subpath);
    const text = el(link, "span", "la-keyword-copy");
    el(text, "strong", "", item.label);
    el(text, "span", "", item.observation);
    el(link, "span", "la-chevron", "\u203A").setAttribute("aria-hidden", "true");
  }
}

// src/core/chapter.ts
var CHAPTER_ROLES = ["\u4E3B\u7EBF", "\u652F\u7EBF", "\u5F85\u590D\u76D8\u51B3\u7B56"];
function dateField(value) {
  if (typeof value !== "string" || !value.trim()) return;
  try {
    return parseDay(value.trim()).format("YYYY-MM-DD");
  } catch {
    return;
  }
}
function parseChapter(path, text, resolveNote) {
  const note = parseNote(text);
  if (!note.valid) return "unreadable";
  const headings = markdownHeadings(note.body);
  const title = headings.find((heading) => heading.depth === 1)?.title;
  const name = title && plainMarkdown(title) || path.split("/").at(-1).slice(0, -3);
  const start = dateField(note.attributes.\u5F00\u59CB\u65E5\u671F), end = dateField(note.attributes.\u7ED3\u675F\u65E5\u671F);
  const dates = {
    ...start && { start },
    ...end && (!start || end >= start) && { end }
  };
  const tasks = Object.fromEntries(CHAPTER_ROLES.map((role) => {
    const lines = headings.find((heading) => heading.depth === 2 && heading.title === role)?.lines ?? [];
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    for (const line of lines) {
      const bullet = line.match(/^ {0,3}(?:[-+*]|\d+\.)\s+(.*)$/)?.[1];
      if (!bullet) continue;
      const link = markdownLinks(bullet)[0];
      if (!link || link.index !== 0) continue;
      const target = resolveNote(link.target, path);
      const key = target ? target.path + (target.subpath ?? "") : link.target;
      if (seen.has(key)) continue;
      seen.add(key);
      items.push({
        label: link.label,
        target,
        detail: plainMarkdown(bullet.slice(link.end).replace(/^\s*[·：:—–-]\s*/, ""))
      });
    }
    return [role, items];
  }));
  return { path, name, dates, tasks };
}
async function loadChapterOverview(config, vault) {
  const { currentChapterPath, lifeMapPath } = config;
  const map = !lifeMapPath ? "unconfigured" : vault.get(lifeMapPath)?.kind === "file" ? { path: lifeMapPath } : "missing";
  if (!currentChapterPath) return { chapter: "unconfigured", map };
  if (vault.get(currentChapterPath)?.kind !== "file") return { chapter: "missing", map };
  try {
    const text = await vault.read(currentChapterPath);
    return { chapter: parseChapter(currentChapterPath, text, vault.resolveNote), map };
  } catch {
    return { chapter: "unreadable", map };
  }
}

// src/ui/chapter.ts
function renderChapter(parent, { chapter, map }) {
  const { card, header } = panel(parent, "\u5F53\u524D\u7AE0\u8282", "la-chapter");
  if (typeof map === "object") {
    openButton(header, "\u6253\u5F00\u4EBA\u751F\u5730\u56FE", map.path, "la-text-button").dataset.focusKey = "life-map";
  } else {
    button(header, map === "missing" ? "\u91CD\u65B0\u9009\u62E9\u4EBA\u751F\u5730\u56FE" : "\u8BBE\u7F6E\u4EBA\u751F\u5730\u56FE", "settings", "la-text-button").dataset.focusKey = "life-map";
  }
  if (typeof chapter === "string") {
    const status = { unconfigured: "\u5C1A\u672A\u9009\u62E9\u5F53\u524D\u7AE0\u8282", missing: "\u7AE0\u8282\u6587\u4EF6\u5DF2\u79FB\u8D70\u6216\u5220\u9664", unreadable: "\u65E0\u6CD5\u8BFB\u53D6\u7AE0\u8282\u6587\u4EF6" };
    el(card, "p", "la-copy-muted", status[chapter]);
    button(card, "\u9009\u62E9\u7AE0\u8282", "settings", "la-text-button").dataset.focusKey = "chapter-note";
    return;
  }
  const title = el(card, "h3", "la-chapter-title");
  openButton(title, chapter.name, chapter.path, "la-text-button la-chapter-link").dataset.focusKey = "chapter-note";
  const { start, end } = chapter.dates;
  const range = start && end ? `${start} \u81F3 ${end}` : start ? `\u81EA ${start} \u8D77` : end ? `\u81F3 ${end}` : "\u65E5\u671F\u5F85\u8865\u5145";
  el(card, "p", "la-chapter-dates", range);
  const links = el(card, "dl", "la-chapter-links");
  for (const role of CHAPTER_ROLES) {
    const items = chapter.tasks[role];
    el(links, "dt", "", role);
    const group = el(links, "dd");
    if (!items.length) el(group, "span", "la-copy-muted", role === "\u5F85\u590D\u76D8\u51B3\u7B56" ? "\u6682\u65E0\u5F85\u590D\u76D8\u51B3\u7B56" : "\u5C1A\u672A\u5173\u8054");
    for (const { label, target, detail } of items) {
      const row = el(group, "div", "la-chapter-task");
      if (target) {
        const link = openButton(row, label, target.path, "la-text-button", target.subpath);
        link.dataset.focusKey = role + target.path + (target.subpath ?? "");
      } else {
        el(row, "span", "", label);
        el(row, "span", "la-copy-muted", "\u94FE\u63A5\u5931\u6548");
      }
      if (detail) el(row, "span", "la-copy-muted", detail);
    }
  }
}

// src/ui/home.ts
function renderSyncState(container, status) {
  const button2 = container.querySelector('[data-action="sync-github"]');
  if (!button2) return;
  const label = status.state === "error" ? `GitHub \u540C\u6B65\u5931\u8D25\uFF1A${status.message}` : { idle: "\u7ACB\u5373\u540C\u6B65 GitHub", running: "\u6B63\u5728\u540C\u6B65 GitHub", success: "GitHub \u540C\u6B65\u5B8C\u6210" }[status.state];
  button2.dataset.syncState = status.state;
  button2.title = label;
  button2.setAttribute("aria-label", label);
  const live = container.querySelector(".la-sync-status");
  if (live) live.textContent = status.state === "idle" ? "" : label;
}
function basename(path) {
  return path.split("/").at(-1).replace(/\.md$/, "");
}
var habitColors = ["teal", "amber", "violet", "blue", "rose"];
function habitColor(habits, id) {
  return habitColors[habits.findIndex((habit) => habit.id === id) % habitColors.length];
}
function renderHabitRing(parent, habits, visible, completed) {
  const ring = el(parent, "span", "la-habit-ring");
  ring.setAttribute("aria-hidden", "true");
  const size = 360 / visible.length;
  visible.forEach((habit, index) => {
    const arc = el(ring, "span", "la-habit-arc");
    arc.dataset.color = habitColor(habits, habit.id);
    arc.classList.toggle("is-done", completed.includes(habit.id));
    const gap = visible.length === 1 ? 0 : Math.min(12, size * 0.2);
    arc.style.setProperty("--la-arc-start", `${size * index + gap / 2}deg`);
    arc.style.setProperty("--la-arc-size", `${size - gap}deg`);
  });
}
function habitFilters(parent, habits, selected) {
  const filters = el(parent, "div", "la-habit-filters");
  filters.setAttribute("role", "group");
  filters.setAttribute("aria-label", "\u7B5B\u9009\u4E60\u60EF");
  for (const { id, name } of [{ id: "", name: "\u5168\u90E8" }, ...habits]) {
    const filter = button(filters, "", "filter-habit", "la-small-button la-habit-filter");
    filter.dataset.habit = id;
    filter.setAttribute("aria-pressed", String(id === selected));
    if (id) el(filter, "span", "la-habit-swatch").dataset.color = habitColor(habits, id);
    el(filter, "span", "la-habit-name", name);
  }
}
function renderDayDetails(parent, model, hasNote) {
  const { date, data, error } = model.calendar;
  const detail = el(parent, "section", "la-day-details");
  const heading = el(detail, "div", "la-day-details-head");
  const day = parseDay(date);
  const weekday = "\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D"[day.day()];
  const label = `${day.format("M \u6708 D \u65E5")} \xB7 \u5468${weekday}`;
  el(heading, "h3", "", date === model.today ? `\u4ECA\u5929 \xB7 ${label}` : label);
  button(heading, hasNote ? "\u6253\u5F00\u65E5\u8BB0" : "\u65B0\u5EFA\u65E5\u8BB0", "day-note", "la-small-button la-day-note");
  if (error) el(detail, "p", "la-error", error).setAttribute("role", "alert");
  else if (!data?.habits.length) el(detail, "p", "la-habit-hint", "\u5728\u300C\u7BA1\u7406\u4E60\u60EF\u300D\u4E2D\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u4E60\u60EF\u3002");
  else if (date > model.today) el(detail, "p", "la-habit-hint", "\u8FD9\u4E00\u5929\u8FD8\u672A\u5230\u6765\u3002");
  else {
    const list = el(detail, "div", "la-habit-list");
    for (const habit of data.habits) {
      const b = button(list, "", "toggle-habit", "la-habit-check");
      b.dataset.habit = habit.id;
      const done = (data.completed[date] ?? []).includes(habit.id);
      b.setAttribute("aria-pressed", String(done));
      const mark = el(b, "span", "la-habit-mark", done ? "\u2713" : "");
      mark.dataset.color = habitColor(data.habits, habit.id);
      mark.setAttribute("aria-hidden", "true");
      el(b, "span", "la-habit-name", habit.name);
    }
  }
}
function renderDailyCalendar(calendar, model, hasPeriod) {
  const { date: selectedDate, data, filter } = model.calendar;
  const habits = data?.habits ?? [];
  const visibleHabits = filter ? habits.filter((habit) => habit.id === filter) : habits;
  const nav = el(calendar, "div", "la-calendar-nav");
  const monthInput = el(nav, "input", "la-month-input");
  monthInput.type = "month";
  monthInput.value = model.month;
  monthInput.setAttribute("aria-label", "\u9009\u62E9\u65E5\u5386\u6708\u4EFD");
  monthInput.dataset.action = "select-month";
  const navButtons = el(nav, "div", "la-inline");
  button(navButtons, "\u2039", "prev", "la-icon-button", "\u4E0A\u4E2A\u6708");
  button(navButtons, "\u4ECA\u5929", "this-month", "la-small-button", "\u56DE\u5230\u4ECA\u5929");
  button(navButtons, "\u203A", "next", "la-icon-button", "\u4E0B\u4E2A\u6708");
  const meta = el(calendar, "div", "la-calendar-meta");
  if (habits.length) habitFilters(meta, habits, filter);
  const legend = el(meta, "p", "la-calendar-legend");
  el(legend, "span", "la-legend-dot");
  el(legend, "span", "", "\u5DF2\u6709\u65E5\u8BB0");
  const table = el(calendar, "table", "la-calendar");
  table.setAttribute("aria-label", `${monthLabel(model.month)}\u8BB0\u5F55\u65E5\u5386`);
  const thead = el(table, "thead"), tr = el(thead, "tr");
  for (const day of ["\u5468", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"]) {
    const th = el(tr, "th", "", day);
    th.scope = "col";
  }
  const tbody = el(table, "tbody");
  const focus = model.focusDate ?? selectedDate;
  for (const week of calendarMonth(model.month)) {
    const row = el(tbody, "tr");
    const weekCell = el(row, "th");
    weekCell.scope = "row";
    const weekExists = hasPeriod(periodFor("weekly", week.days[0]));
    const wb = button(weekCell, week.key.slice(-2), "week", "la-week", `${week.key} \u5468\u7B14\u8BB0\uFF0C${weekExists ? "\u5DF2\u521B\u5EFA" : "\u5F85\u521B\u5EFA"}`);
    wb.dataset.week = week.key;
    wb.dataset.anchor = week.days[0];
    if (weekExists) wb.classList.add("has-note");
    for (const day of week.days) {
      const cell = el(row, "td");
      const exists = hasPeriod(periodFor("daily", day)), isToday = day === model.today;
      const completed = data?.completed[day] ?? [];
      const habitStatus = day > model.today ? "" : visibleHabits.map((habit) => `${habit.name}${completed.includes(habit.id) ? "\u5DF2\u5B8C\u6210" : "\u672A\u5B8C\u6210"}`).join("\uFF0C");
      const label = [day, isToday ? "\u4ECA\u5929" : "", exists ? "\u5DF2\u6709\u8BB0\u5F55" : "\u5C1A\u672A\u521B\u5EFA\u65E5\u8BB0", habitStatus].filter(Boolean).join("\uFF0C");
      const b = button(cell, "", "day", "la-day", label);
      b.dataset.date = day;
      b.tabIndex = day === focus ? 0 : -1;
      el(b, "span", "la-day-number", String(Number(day.slice(-2))));
      const dot = el(b, "span", "la-day-dot");
      dot.setAttribute("aria-hidden", "true");
      dot.classList.toggle("is-empty", !exists);
      b.classList.toggle("has-note", exists);
      b.setAttribute("aria-pressed", String(day === selectedDate));
      if (visibleHabits.length && day <= model.today) renderHabitRing(b, habits, visibleHabits, completed);
      if (!day.startsWith(model.month)) b.classList.add("is-other-month");
      if (isToday) {
        b.classList.add("is-today");
        b.setAttribute("aria-current", "date");
      }
    }
  }
  renderDayDetails(calendar, model, hasPeriod(periodFor("daily", selectedDate)));
  return monthInput;
}
function renderPeriodCalendar(parent, mode, year, currentYear, hasPeriod) {
  const byDecade = mode === "yearly";
  const start = byDecade ? Math.floor(year / 10) * 10 : year;
  const step = byDecade ? 10 : 1;
  const nav = el(parent, "div", "la-calendar-nav");
  el(nav, "h3", "la-period-heading", byDecade ? `${start}\u2013${start + 9} \u5E74` : `${year} \u5E74`);
  const navButtons = el(nav, "div", "la-inline");
  button(navButtons, "\u2039", "period-prev", "la-icon-button", byDecade ? "\u524D\u5341\u5E74" : "\u4E0A\u4E00\u5E74").disabled = year - step < 1e3;
  button(navButtons, "\u4ECA\u5E74", "period-current", "la-small-button", "\u56DE\u5230\u4ECA\u5E74");
  button(navButtons, "\u203A", "period-next", "la-icon-button", byDecade ? "\u540E\u5341\u5E74" : "\u4E0B\u4E00\u5E74").disabled = year + step > 9999;
  const cells = el(parent, "div", "la-period-cells");
  const count = { monthly: 12, quarterly: 4, yearly: 10 }[mode];
  for (let index = 0; index < count; index++) {
    const cellYear = byDecade ? start + index : year;
    const month = { monthly: index + 1, quarterly: index * 3 + 1, yearly: 1 }[mode];
    const date = `${cellYear}-${String(month).padStart(2, "0")}-01`;
    const period = periodFor(mode, date);
    const exists = hasPeriod(period);
    const label = { monthly: `${month} \u6708`, quarterly: `\u7B2C ${index + 1} \u5B63\u5EA6`, yearly: `${cellYear} \u5E74` }[mode];
    const cell = button(
      cells,
      label,
      "period",
      "la-period-cell",
      `${period.key}\uFF0C${exists ? "\u6253\u5F00\u5DF2\u6709\u7B14\u8BB0" : "\u6309\u6A21\u677F\u521B\u5EFA\u7B14\u8BB0"}`
    );
    cell.dataset.kind = mode;
    cell.dataset.anchor = date;
    cell.classList.toggle("has-note", exists);
    if (byDecade && cellYear === currentYear) cell.setAttribute("aria-current", "date");
  }
  const legend = el(parent, "p", "la-calendar-legend la-period-legend");
  el(legend, "span", "la-legend-dot");
  el(legend, "span", "", "\u5DF2\u6709\u7B14\u8BB0");
}
function mountHome(container, model, actions) {
  container.replaceChildren();
  const root = el(container, "main", "la-home");
  root.tabIndex = -1;
  const header = el(root, "header", "la-header");
  const intro = el(header, "div", "la-intro");
  el(intro, "h1", "", "\u4EBA\u751F\u5B58\u6863");
  renderReviewStatus(intro, model.review);
  const topActions = el(header, "div", "la-header-actions");
  button(topActions, "\u4ECA\u65E5\u65E5\u8BB0", "today", "la-primary");
  button(topActions, "\u5199\u7BC7\u601D\u60F3", "thought", "la-secondary").dataset.focusKey = "write-thought";
  const sync = button(topActions, "", "sync-github", "la-secondary la-sync-button", "\u7ACB\u5373\u540C\u6B65 GitHub");
  sync.title = "\u7ACB\u5373\u540C\u6B65 GitHub";
  el(topActions, "span", "la-sync-status").setAttribute("role", "status");
  renderAttributes(root, model.review);
  const hasPeriod = (period) => periodNotePaths(period).some((path) => model.paths.has(path));
  const grid = el(root, "div", "la-main-grid");
  const { calendarMode: mode, periodYear } = model;
  const selectedDate = model.calendar.date;
  const { card: calendar, header: calendarHeader } = panel(grid, "\u8BB0\u5F55\u65E5\u5386", "la-calendar-card");
  const calendarTools = el(calendarHeader, "div", "la-calendar-tools");
  const modes = el(calendarTools, "div", "la-calendar-modes");
  modes.setAttribute("role", "group");
  modes.setAttribute("aria-label", "\u6D4F\u89C8\u5468\u671F");
  for (const [kind, label, description] of [
    ["daily", "\u65E5", "\u65E5\u5386"],
    ["monthly", "\u6708", "\u6708\u5EA6\u7B14\u8BB0"],
    ["quarterly", "\u5B63", "\u5B63\u5EA6\u7B14\u8BB0"],
    ["yearly", "\u5E74", "\u5E74\u5EA6\u7B14\u8BB0"]
  ]) {
    const entry = button(modes, label, "calendar-mode", "la-small-button", description);
    entry.dataset.kind = kind;
    entry.setAttribute("aria-pressed", String(mode === kind));
  }
  if (mode === "daily") {
    button(calendarTools, "\u7BA1\u7406\u4E60\u60EF", "manage-habits", "la-text-button").disabled = Boolean(model.calendar.error);
  }
  let monthInput;
  if (mode === "daily") monthInput = renderDailyCalendar(calendar, model, hasPeriod);
  else renderPeriodCalendar(calendar, mode, periodYear, Number(model.today.slice(0, 4)), hasPeriod);
  const overview = el(grid, "div", "la-overview");
  renderReviewSummary(overview, model.review);
  renderChapter(overview, model.chapter);
  const notes = el(root, "section", "la-recent-notes");
  notes.setAttribute("aria-label", "\u8FD1\u671F\u8BB0\u5F55");
  const { card: articles, header: articlesHeader } = panel(notes, "\u8FD1\u671F\u601D\u60F3");
  button(articlesHeader, "\u67E5\u770B\u5168\u90E8", "browse-thoughts", "la-text-button");
  if (!model.thoughts.length) {
    el(articles, "p", "la-copy-muted", "\u6682\u65E0\u601D\u60F3\u6587\u7AE0");
  }
  for (const note of model.thoughts) {
    const b = openButton(articles, "", note.path, "la-note-row");
    el(b, "span", "", basename(note.path));
    el(b, "span", "la-note-date", note.date ?? new Date(note.mtime).toLocaleDateString("zh-CN", { timeZone: CALENDAR_ZONE, month: "2-digit", day: "2-digit" }));
  }
  const { card: periodsSection, header: periodsHeader } = panel(notes, "\u5468\u671F\u7B14\u8BB0");
  button(periodsHeader, "\u67E5\u770B\u5168\u90E8", "browse-periods", "la-text-button");
  if (!model.periods.length) {
    const b = button(periodsSection, "\u6253\u5F00\u672C\u5468\u7B14\u8BB0", "current-week", "la-text-button");
    b.dataset.date = model.today;
  }
  for (const note of model.periods.slice(0, 4)) {
    const row = openButton(periodsSection, "", note.path, "la-note-row");
    el(row, "span", "", basename(note.path));
    el(row, "span", "la-chevron", "\u203A").setAttribute("aria-hidden", "true");
  }
  const footer = el(root, "footer", "la-footer");
  button(footer, "\u4F7F\u7528\u8BF4\u660E", "help", "la-text-button");
  button(footer, "\u8BBE\u7F6E", "settings", "la-text-button");
  const perform = (result) => {
    Promise.resolve(result).catch((error) => actions.error(error instanceof Error ? error.message : "\u64CD\u4F5C\u5931\u8D25"));
  };
  const click = (event) => {
    const b = event.target?.closest("button[data-action]");
    if (!b || !root.contains(b)) return;
    try {
      switch (b.dataset.action) {
        case "today":
          perform(actions.openPeriod("daily", model.today));
          break;
        case "thought":
          perform(actions.openThought());
          break;
        case "sync-github":
          perform(actions.syncGitHub());
          break;
        case "file":
          perform(actions.openFile(b.dataset.path, b.dataset.subpath));
          break;
        case "manage-habits":
          perform(actions.manageHabits());
          break;
        case "filter-habit":
          perform(actions.filterHabit(b.dataset.habit));
          break;
        case "toggle-habit":
          perform(actions.toggleHabit(b.dataset.habit, selectedDate));
          break;
        case "day":
          perform(actions.selectDate(b.dataset.date));
          break;
        case "day-note":
          perform(actions.openPeriod("daily", selectedDate));
          break;
        case "week":
          perform(actions.openPeriod("weekly", b.dataset.anchor));
          break;
        case "calendar-mode":
          perform(actions.changeCalendarMode(b.dataset.kind));
          break;
        case "period":
          perform(actions.openPeriod(b.dataset.kind, b.dataset.anchor));
          break;
        case "period-prev":
        case "period-next": {
          const step = mode === "yearly" ? 10 : 1;
          perform(actions.changePeriodYear(periodYear + (b.dataset.action === "period-prev" ? -step : step)));
          break;
        }
        case "period-current":
          perform(actions.changePeriodYear(Number(model.today.slice(0, 4))));
          break;
        case "current-week":
          perform(actions.openPeriod("weekly", model.today));
          break;
        case "prev":
        case "next":
          perform(actions.changeMonth(parseDay(`${model.month}-01`).add(b.dataset.action === "prev" ? -1 : 1, "month").format("YYYY-MM")));
          break;
        case "this-month":
          perform(actions.changeMonth(model.today.slice(0, 7)));
          break;
        case "browse-thoughts":
          perform(actions.browse("thoughts"));
          break;
        case "browse-periods":
          perform(actions.browse("periods"));
          break;
        case "browse-reviews":
          perform(actions.browse("reviews"));
          break;
        case "help":
          perform(actions.help());
          break;
        case "settings":
          perform(actions.settings());
          break;
      }
    } catch (error) {
      actions.error(error instanceof Error ? error.message : "\u64CD\u4F5C\u5931\u8D25");
    }
  };
  const change = () => {
    if (monthInput && /^\d{4}-\d{2}$/.test(monthInput.value)) perform(actions.changeMonth(monthInput.value));
  };
  const keydown = (event) => {
    const target = event.target?.closest('[data-action="day"]');
    if (!target?.dataset.date) return;
    const offset = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
    if (offset === void 0) return;
    event.preventDefault();
    const next = parseDay(target.dataset.date).add(offset, "day").format("YYYY-MM-DD");
    const nextButton = root.querySelector(`[data-action="day"][data-date="${next}"]`);
    if (nextButton) {
      target.tabIndex = -1;
      nextButton.tabIndex = 0;
      nextButton.focus();
    } else perform(actions.changeMonth(next.slice(0, 7), next));
  };
  root.addEventListener("click", click);
  root.addEventListener("keydown", keydown);
  monthInput?.addEventListener("change", change);
  if (model.focusDate) {
    root.querySelector(`[data-action="day"][data-date="${model.focusDate}"]`)?.focus({ preventScroll: true });
  }
  return () => {
    root.removeEventListener("click", click);
    root.removeEventListener("keydown", keydown);
    monthInput?.removeEventListener("change", change);
  };
}

// src/obsidian/modals.ts
var import_obsidian2 = require("obsidian");
var ThoughtModal = class extends import_obsidian2.Modal {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
  }
  onOpen() {
    this.titleEl.setText("\u7559\u4F4F\u4E00\u4E2A\u60F3\u6CD5");
    this.contentEl.createEl("p", { text: "\u7ED9\u8FD9\u7BC7\u601D\u60F3\u6587\u7AE0\u8D77\u4E2A\u540D\u5B57\uFF0C\u6B63\u6587\u5728 Obsidian \u4E2D\u7EE7\u7EED\u5199\u3002", cls: "setting-item-description" });
    let title = "";
    const input = this.contentEl.createEl("input", { type: "text", placeholder: "\u4F8B\u5982\uFF1A\u5173\u4E8E\u5B66\u4E60\u7684\u51E0\u4E2A\u95EE\u9898", cls: "la-title-input" });
    input.setAttribute("aria-label", "\u6587\u7AE0\u6807\u9898");
    const error = this.contentEl.createEl("p", { cls: "la-error" });
    error.setAttribute("role", "alert");
    const create = this.contentEl.createEl("button", { text: "\u521B\u5EFA\u6587\u7AE0", cls: "mod-cta" });
    const submit = async () => {
      title = input.value;
      create.disabled = true;
      try {
        await this.plugin.notes.openThought(title, today());
        this.close();
      } catch (e) {
        error.setText(e instanceof Error ? e.message : "\u521B\u5EFA\u5931\u8D25");
        create.disabled = false;
      }
    };
    create.addEventListener("click", () => {
      void submit();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        void submit();
      }
    });
    input.focus();
  }
};
var HabitModal = class extends import_obsidian2.Modal {
  constructor(app, habits, save) {
    super(app);
    this.habits = habits;
    this.save = save;
  }
  onOpen() {
    this.titleEl.setText("\u7BA1\u7406\u4E60\u60EF");
    const list = this.contentEl.createDiv();
    const form = this.contentEl.createEl("form");
    const input = form.createEl("input", { type: "text", placeholder: "\u4F8B\u5982\uFF1A\u9605\u8BFB", cls: "la-title-input" });
    input.required = true;
    input.maxLength = 32;
    const error = form.createEl("p", { cls: "la-error" });
    error.setAttribute("role", "alert");
    const controls = form.createDiv({ cls: "modal-button-container" });
    const submit = controls.createEl("button", { text: "\u6DFB\u52A0\u4E60\u60EF", cls: "mod-cta", attr: { type: "submit" } });
    const cancel = controls.createEl("button", { text: "\u53D6\u6D88\u7F16\u8F91", attr: { type: "button" } });
    let editingId;
    const chooseHabit = (habit) => {
      if (submit.disabled) return;
      editingId = habit?.id;
      input.value = habit?.name ?? "";
      input.setAttribute("aria-label", habit ? "\u7F16\u8F91\u4E60\u60EF\u540D\u79F0" : "\u65B0\u4E60\u60EF\u540D\u79F0");
      submit.setText(habit ? "\u4FDD\u5B58\u4FEE\u6539" : "\u6DFB\u52A0\u4E60\u60EF");
      cancel.toggle(Boolean(habit));
      error.empty();
      input.focus();
      if (habit) input.select();
    };
    for (const habit of this.habits) {
      new import_obsidian2.Setting(list).setName(habit.name).addButton((edit) => {
        edit.setButtonText("\u7F16\u8F91");
        edit.buttonEl.setAttribute("aria-label", `\u7F16\u8F91${habit.name}`);
        edit.onClick(() => chooseHabit(habit));
      });
    }
    cancel.addEventListener("click", () => chooseHabit());
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (submit.disabled) return;
      submit.disabled = true;
      error.empty();
      void this.save(input.value, editingId).then(() => this.close(), (cause) => {
        error.setText(cause instanceof Error ? cause.message : "\u4FDD\u5B58\u5931\u8D25");
        submit.disabled = false;
        input.focus();
      });
    });
    chooseHabit();
  }
  onClose() {
    this.contentEl.empty();
  }
};
var NotesModal = class extends import_obsidian2.FuzzySuggestModal {
  constructor(app, notes, title, openNote) {
    super(app);
    this.notes = notes;
    this.openNote = openNote;
    this.setPlaceholder(title);
    this.setInstructions([{ command: "\u2191 \u2193", purpose: "\u9009\u62E9\u7B14\u8BB0" }, { command: "\u21B5", purpose: "\u6253\u5F00" }, { command: "esc", purpose: "\u5173\u95ED" }]);
  }
  getItems() {
    return this.notes;
  }
  getItemText(note) {
    return note.label ?? note.path.replace(/\.md$/, "");
  }
  onChooseItem(note) {
    void this.openNote(note.path).catch((e) => new import_obsidian2.Notice(e instanceof Error ? e.message : "\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6"));
  }
};
var HelpModal = class extends import_obsidian2.Modal {
  onOpen() {
    this.titleEl.setText("\u4EBA\u751F\u5B58\u6863 \xB7 \u4F7F\u7528\u8BF4\u660E");
    const content = this.contentEl;
    const steps = [
      ["\u6253\u5F00\u5468\u671F\u7B14\u8BB0", "\u70B9\u51FB\u65E5\u671F\u67E5\u770B\u5F53\u5929\u8BE6\u60C5\uFF0C\u518D\u70B9\u300C\u65B0\u5EFA\u65E5\u8BB0\u300D\u6216\u300C\u6253\u5F00\u65E5\u8BB0\u300D\u3002\u5468\u7B14\u8BB0\u4ECE\u5468\u53F7\u6253\u5F00\uFF0C\u901A\u8FC7\u300C\u6708\uFF0F\u5B63\uFF0F\u5E74\u300D\u6D4F\u89C8\u5E76\u6253\u5F00\u6216\u521B\u5EFA\u5BF9\u5E94\u7684\u7B14\u8BB0\u3002"],
      ["\u4E60\u60EF\u6253\u5361", "\u4ECE\u8BB0\u5F55\u65E5\u5386\u7684\u300C\u7BA1\u7406\u4E60\u60EF\u300D\u6DFB\u52A0\u4E60\u60EF\u6216\u7F16\u8F91\u540D\u79F0\u3002\u70B9\u51FB\u65E5\u5386\u4E2D\u7684\u65E5\u671F\uFF0C\u5728\u5F53\u5929\u8BE6\u60C5\u4E2D\u52FE\u9009\u3001\u8865\u6253\u5361\u6216\u64A4\u9500\u3002"],
      ["\u7559\u4F4F\u601D\u60F3", "\u70B9\u51FB\u300C\u65B0\u5EFA\u601D\u60F3\u6587\u7AE0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u540E\u7EE7\u7EED\u5728 Obsidian \u4E2D\u5199\u4F5C\u3002"],
      ["\u5199\u4F5C\u63D0\u793A", "\u6253\u5F00\u5468\u671F\u7B14\u8BB0\u540E\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u300C\u5199\u4F5C\u63D0\u793A\u300D\uFF0C\u5728\u4FA7\u680F\u67E5\u770B\u53EF\u9009\u7684\u8BB0\u5F55\u8981\u70B9\u3002"]
    ];
    for (const [title, text] of steps) {
      content.createEl("h3", { text: title });
      content.createEl("p", { text });
    }
  }
};

// src/obsidian/home-view.ts
function focusIdentity(element) {
  const data = element.dataset;
  return data.focusKey ?? JSON.stringify([
    data.action,
    data.date,
    data.habit,
    data.kind,
    data.week,
    data.anchor,
    data.path,
    data.subpath
  ]);
}
var HOME_VIEW = "life-archive-home";
var HomeView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.month = today().slice(0, 7);
  }
  dispose;
  month;
  selectedDate;
  calendarMode = "daily";
  periodYear;
  habitFilter = "";
  renderVersion = 0;
  pendingFocusDate;
  dependencies = /* @__PURE__ */ new Set();
  pendingDependencies;
  getViewType() {
    return HOME_VIEW;
  }
  getDisplayText() {
    return "\u4EBA\u751F\u5B58\u6863";
  }
  getIcon() {
    return "notebook-pen";
  }
  async onOpen() {
    this.contentEl.addClass("life-archive-view");
    await this.refresh();
  }
  async onClose() {
    this.renderVersion++;
    this.dispose?.();
    this.contentEl.empty();
  }
  references(path) {
    return this.dependencies.has(path) || (this.pendingDependencies?.has(path) ?? false);
  }
  updateSyncState(status) {
    renderSyncState(this.contentEl, status);
    const button2 = this.contentEl.querySelector('[data-action="sync-github"]');
    if (button2) (0, import_obsidian3.setIcon)(button2, status.state === "success" ? "check" : status.state === "error" ? "x" : "refresh-cw");
  }
  async changeMonth(month, focusDate) {
    assertMonth(month);
    this.month = month;
    this.selectedDate = void 0;
    this.pendingFocusDate = focusDate;
    await this.refresh();
  }
  async refresh(requestedFocusDate) {
    if (requestedFocusDate) this.pendingFocusDate = requestedFocusDate;
    const version = ++this.renderVersion;
    const currentDay = today();
    const selectedDate = this.selectedDate ?? (currentDay.startsWith(this.month) ? currentDay : `${this.month}-01`);
    const calendar = { date: selectedDate, filter: this.habitFilter };
    const { config, port, habits } = this.plugin;
    const dependencies = this.pendingDependencies = /* @__PURE__ */ new Set();
    const resolveNote = (target, origin) => port.resolveNote(target, origin, dependencies);
    const vault = { read: (path) => port.read(path), get: (path) => port.get(path), resolveNote };
    const habitData = habits.read().then(
      (data) => ({ data }),
      (error) => ({ error: error instanceof Error ? error.message : String(error) })
    );
    const [habitState, review, chapter] = await Promise.all([
      habitData,
      loadReviewOverview(port.reviewPaths(), vault, currentDay),
      loadChapterOverview(config, vault)
    ]);
    if (version !== this.renderVersion) return;
    this.dependencies = dependencies;
    this.pendingDependencies = void 0;
    const focusDate = this.pendingFocusDate;
    this.pendingFocusDate = void 0;
    if (habitState.data && !habitState.data.habits.some((habit) => habit.id === calendar.filter)) {
      this.habitFilter = calendar.filter = "";
    }
    const scroll = this.contentEl.scrollTop;
    const active = this.contentEl.ownerDocument.activeElement;
    const previous = active && this.contentEl.contains(active) ? focusIdentity(active) : void 0;
    this.dispose?.();
    this.dispose = mountHome(this.contentEl, {
      today: currentDay,
      month: this.month,
      paths: new Set(this.plugin.allPaths()),
      thoughts: this.plugin.index.thoughts(5),
      periods: this.plugin.index.periodNotes(),
      focusDate,
      calendarMode: this.calendarMode,
      periodYear: this.periodYear ?? Number(this.month.slice(0, 4)),
      calendar: { ...calendar, ...habitState },
      review,
      chapter
    }, {
      openPeriod: (kind, date) => this.plugin.notes.openPeriod(kind, date),
      openThought: () => this.plugin.newThought(),
      selectDate: async (date) => {
        parseDay(date);
        this.month = date.slice(0, 7);
        this.selectedDate = date;
        await this.refresh(date);
      },
      changeCalendarMode: (mode) => {
        if (mode === this.calendarMode) return;
        if (this.calendarMode === "daily") this.periodYear = Number(this.month.slice(0, 4));
        this.calendarMode = mode;
        this.pendingFocusDate = void 0;
        return this.refresh();
      },
      changePeriodYear: (year) => {
        this.periodYear = year;
        return this.refresh();
      },
      filterHabit: (id) => {
        this.habitFilter = id;
        return this.refresh();
      },
      toggleHabit: async (id, date) => {
        await this.plugin.habits.toggle(id, date, today());
        await this.refresh();
      },
      manageHabits: () => new HabitModal(this.app, habitState.data?.habits ?? [], async (name, id) => {
        if (id) await this.plugin.habits.rename(id, name);
        else await this.plugin.habits.add(name);
        await this.refresh();
      }).open(),
      syncGitHub: () => this.plugin.syncGitHub(true),
      openFile: (path, subpath) => port.open(path, subpath),
      changeMonth: (month, date) => this.changeMonth(month, date),
      browse: (kind) => this.plugin.browse(kind),
      settings: () => this.plugin.openSettings(),
      help: () => this.plugin.help(),
      error: (message) => new import_obsidian3.Notice(message)
    });
    this.updateSyncState(this.plugin.syncState);
    this.contentEl.scrollTop = scroll;
    if (!focusDate && previous) {
      const replacement = Array.from(this.contentEl.querySelectorAll("[data-action]")).find((el2) => focusIdentity(el2) === previous && !el2.matches(":disabled"));
      if (replacement?.dataset.action === "day") {
        this.contentEl.querySelector('[data-action="day"][tabindex="0"]')?.setAttribute("tabindex", "-1");
        replacement.tabIndex = 0;
      }
      (replacement ?? this.contentEl.querySelector(".la-home"))?.focus({ preventScroll: true });
    }
  }
};

// src/obsidian/writing-guide-view.ts
var import_obsidian4 = require("obsidian");

// src/ui/writing-guide.ts
var guides = {
  daily: [
    ["\u4ECA\u5929\u53D1\u751F\u7684\u4E8B", ["\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F\u5F53\u65F6\u600E\u4E48\u60F3\uFF1F\u60F3\u5199\u591A\u5C11\u90FD\u53EF\u4EE5\u3002"]],
    ["\u6BCF\u65E5\u901F\u8BB0", [
      ["\u8FDB\u5C55", "\u4EC0\u4E48\u63A8\u8FDB\u4E86\uFF0C\u6216\u505A\u4E86\u4EC0\u4E48\u51B3\u5B9A\uFF1F"],
      ["\u963B\u529B", "\u5361\u5728\u54EA\u91CC\uFF1F\u4EC0\u4E48\u6CA1\u6309\u9884\u671F\u8D70\uFF1F"],
      ["\u53D8\u5316", "\u6709\u4EC0\u4E48\u53D1\u73B0\u6216\u53D8\u5316\u503C\u5F97\u4E0B\u6B21\u7559\u610F\uFF1F"],
      ["\u5173\u6CE8\u9879", "\u5982\u679C\u6700\u8FD1\u5728\u8FFD\u8E2A\u4E00\u4EF6\u4E8B\uFF0C\u4ECA\u5929\u5B9E\u9645\u600E\u6837\uFF1F"]
    ]]
  ],
  weekly: [
    ["\u672C\u5468\u56DE\u770B", ["\u54EA\u4E00\u4E24\u4EF6\u4E8B\u6700\u503C\u5F97\u8BB0\u4F4F\uFF1F\u6709\u4EC0\u4E48\u8BC1\u636E\u6216\u4F8B\u5B50\uFF1F"]],
    ["\u9884\u671F\u4E0E\u5B9E\u9645", ["\u539F\u6765\u60F3\u505A\u5230\u4EC0\u4E48\uFF0C\u5B9E\u9645\u600E\u6837\uFF1F\u6CA1\u8BBE\u76EE\u6807\u5C31\u8DF3\u8FC7\u3002"]],
    ["\u4E0B\u5468\u7684\u4E00\u4EF6\u4E8B", ["\u53EA\u8BD5\u4E00\u4E2A\u8C03\u6574\uFF1A\u4EC0\u4E48\u65F6\u5019\u505A\uFF0C\u600E\u4E48\u77E5\u9053\u6709\u6CA1\u6709\u7528\uFF1F"]]
  ],
  monthly: [
    ["\u8FD9\u4E2A\u6708\u53D1\u751F\u4E86\u4EC0\u4E48", ["\u54EA\u4E9B\u91CD\u8981\u53D8\u5316\u503C\u5F97\u8DE8\u5468\u5BF9\u7167\uFF1F\u4E0D\u7528\u6309\u65F6\u95F4\u91CD\u8BB2\u3002"]],
    ["\u60F3\u6CD5\u6709\u4EC0\u4E48\u53D8\u5316", ["\u4EC0\u4E48\u8BC1\u636E\u8BA9\u4F60\u6539\u53D8\u770B\u6CD5\uFF1F\u54EA\u91CC\u8FD8\u4E0D\u786E\u5B9A\uFF1F"]],
    ["\u505A\u8FC7\u7684\u9009\u62E9", ["\u4EC0\u4E48\u503C\u5F97\u7EE7\u7EED\u3001\u8C03\u6574\u6216\u505C\u6B62\uFF1F"]],
    ["\u4E0B\u4E2A\u6708", ["\u53EA\u9009\u4E00\u4E2A\u91CD\u70B9\uFF0C\u51C6\u5907\u9A8C\u8BC1\u4EC0\u4E48\uFF1F"]]
  ],
  quarterly: [
    ["\u8FD9\u4E00\u5B63\u7684\u4E3B\u7EBF", ["\u8FD9\u6BB5\u65F6\u95F4\u6700\u91CD\u8981\u7684\u65B9\u5411\u662F\u4EC0\u4E48\uFF0C\u6709\u6CA1\u6709\u504F\u79BB\uFF1F"]],
    ["\u7ED3\u679C\u3001\u53D8\u5316\u4E0E\u53CD\u4F8B", ["\u4EC0\u4E48\u505A\u6CD5\u53CD\u590D\u6709\u6548\uFF0C\u4EC0\u4E48\u7ED3\u679C\u4E0E\u9884\u671F\u76F8\u53CD\uFF1F"]],
    ["\u4E0B\u4E00\u9636\u6BB5", ["\u63A5\u4E0B\u6765\u8981\u6295\u5165\u4EC0\u4E48\uFF0C\u53C8\u6253\u7B97\u653E\u4E0B\u4EC0\u4E48\uFF1F"]]
  ],
  yearly: [
    ["\u8FD9\u4E00\u5E74", ["\u5982\u679C\u53EA\u7559\u4E00\u53E5\u8BDD\uFF0C\u600E\u6837\u6982\u62EC\u8FD9\u4E00\u5E74\uFF1F"]],
    ["\u91CD\u8981\u7684\u7ECF\u5386\u4E0E\u9009\u62E9", ["\u54EA\u51E0\u4EF6\u4E8B\u6216\u51B3\u5B9A\u6539\u53D8\u4E86\u8D70\u5411\uFF1F"]],
    ["\u6539\u53D8\u4E0E\u5EF6\u7EED", ["\u54EA\u4E9B\u53D8\u5316\u6709\u8BC1\u636E\u652F\u6301\uFF0C\u54EA\u4E9B\u8FD8\u503C\u5F97\u7EE7\u7EED\uFF1F"]],
    ["\u4E0B\u4E00\u5E74", ["\u4F18\u5148\u4FDD\u7559\u4EC0\u4E48\uFF0C\u4E3B\u52A8\u4E0D\u505A\u4EC0\u4E48\uFF1F"]]
  ]
};
function writingGuideKind(path, config) {
  const kind = path ? classifyNote(path, config)?.kind : void 0;
  return PERIOD_KINDS.find((periodKind) => periodKind === kind);
}
function renderWritingGuide(root, path, config) {
  const kind = writingGuideKind(path, config);
  const append = (parent, tag, className, text) => {
    const element = root.ownerDocument.createElement(tag);
    element.className = className;
    if (text) element.textContent = text;
    parent.append(element);
    return element;
  };
  root.replaceChildren();
  const panel2 = append(root, "div", "la-guide-panel");
  const header = append(panel2, "header", "la-guide-header");
  append(header, "p", "la-guide-kicker", "\u5199\u4F5C\u63D0\u793A");
  if (!kind) {
    append(header, "p", "la-guide-hint", "\u6253\u5F00\u4E00\u7BC7\u5468\u671F\u7B14\u8BB0\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u5BF9\u5E94\u7684\u5199\u4F5C\u63D0\u793A\u3002");
    return;
  }
  append(header, "h2", "la-guide-title", PERIOD_LABELS[kind]);
  append(header, "p", "la-guide-hint", kind === "daily" ? "\u6311\u4E00\u4E24\u9879\u968F\u624B\u5199\uFF0C\u4E0D\u7528\u9010\u9879\u56DE\u7B54\u3002" : "\u6311\u6709\u7528\u7684\u5199\uFF0C\u4E0D\u7528\u9010\u9879\u56DE\u7B54\u3002");
  for (const [title, prompts] of guides[kind]) {
    const card = append(panel2, "section", "la-guide-card");
    append(card, "h3", "la-guide-card-title", title);
    const first = prompts[0];
    if (prompts.length === 1 && typeof first === "string") {
      append(card, "p", "la-guide-copy", first);
      continue;
    }
    const list = append(card, "ul", "la-guide-prompts");
    for (const prompt of prompts) {
      if (typeof prompt === "string") append(list, "li", "la-guide-copy", prompt);
      else {
        const row = append(list, "li", "la-guide-row");
        append(row, "strong", "la-guide-label", prompt[0]);
        append(row, "span", "la-guide-copy", prompt[1]);
      }
    }
  }
}

// src/obsidian/writing-guide-view.ts
var VIEW_TYPE = "life-archive-writing-guide";
var TITLE = "\u5199\u4F5C\u63D0\u793A";
var ICON = "notebook-pen";
var WritingGuideView = class extends import_obsidian4.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return TITLE;
  }
  getIcon() {
    return ICON;
  }
  refresh(path) {
    this.contentEl.addClass("life-archive-writing-guide");
    renderWritingGuide(this.contentEl, path, this.plugin.config);
  }
};
function registerWritingGuide(plugin) {
  const { workspace, vault } = plugin.app;
  const actions = /* @__PURE__ */ new Map();
  const currentView = () => workspace.getMostRecentLeaf()?.view;
  plugin.registerView(VIEW_TYPE, (leaf) => new WritingGuideView(leaf, plugin));
  const open = async (path) => {
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      const right = workspace.getRightLeaf(false);
      if (!right) return;
      leaf = right;
      await leaf.setViewState({ type: VIEW_TYPE });
    }
    await workspace.revealLeaf(leaf);
    if (leaf.view instanceof WritingGuideView) {
      const view = currentView();
      leaf.view.refresh(view instanceof import_obsidian4.MarkdownView ? view.file?.path ?? null : path);
    }
  };
  const show = (path) => {
    void open(path).catch(() => new import_obsidian4.Notice("\u65E0\u6CD5\u6253\u5F00\u5199\u4F5C\u63D0\u793A"));
  };
  const refresh = () => {
    const views = /* @__PURE__ */ new Set();
    for (const leaf of workspace.getLeavesOfType("markdown")) {
      const view2 = leaf.view;
      if (!(view2 instanceof import_obsidian4.MarkdownView) || !writingGuideKind(view2.file?.path ?? null, plugin.config)) continue;
      views.add(view2);
      if (!actions.has(view2)) {
        const action = view2.addAction(ICON, TITLE, () => {
          if (view2.file && writingGuideKind(view2.file.path, plugin.config)) show(view2.file.path);
        });
        action.addClass("la-guide-action");
        action.createSpan({ text: TITLE, attr: { "aria-hidden": "true" } });
        actions.set(view2, action);
      }
    }
    for (const [view2, action] of actions) {
      if (!views.has(view2)) {
        action.remove();
        actions.delete(view2);
      }
    }
    const view = currentView();
    const path = view instanceof import_obsidian4.MarkdownView ? view.file?.path ?? null : null;
    for (const leaf of workspace.getLeavesOfType(VIEW_TYPE)) {
      if (leaf.view instanceof WritingGuideView) leaf.view.refresh(path);
    }
  };
  plugin.addCommand({ id: "writing-guide", name: "\u6253\u5F00\u5199\u4F5C\u63D0\u793A", checkCallback: (checking) => {
    const view = currentView();
    const path = view instanceof import_obsidian4.MarkdownView ? view.file?.path : void 0;
    if (!path || !writingGuideKind(path, plugin.config)) return false;
    if (!checking) show(path);
    return true;
  } });
  plugin.registerEvent(workspace.on("file-open", refresh));
  plugin.registerEvent(workspace.on("active-leaf-change", refresh));
  plugin.registerEvent(workspace.on("layout-change", refresh));
  plugin.registerEvent(vault.on("rename", refresh));
  workspace.onLayoutReady(refresh);
  plugin.register(() => {
    for (const action of actions.values()) action.remove();
    actions.clear();
    for (const leaf of workspace.getLeavesOfType(VIEW_TYPE)) leaf.detach();
  });
  return refresh;
}

// src/obsidian/review-note-links.ts
var import_obsidian5 = require("obsidian");
function registerReviewNoteLinks(plugin) {
  const { workspace, vault } = plugin.app;
  const actions = /* @__PURE__ */ new Map();
  const refresh = () => {
    const active = /* @__PURE__ */ new Set();
    for (const leaf of workspace.getLeavesOfType("markdown")) {
      const view = leaf.view;
      if (!(view instanceof import_obsidian5.MarkdownView) || !view.file) continue;
      const target = reviewCompanion(view.file.path, plugin.config, (path) => Boolean(vault.getFileByPath(path)));
      if (!target) continue;
      active.add(view);
      const current = actions.get(view);
      if (current?.path === target.path && current.label === target.label) continue;
      current?.element.remove();
      const element = view.addAction("link", target.label, () => {
        void plugin.port.open(target.path).catch((error) => new import_obsidian5.Notice(error.message));
      });
      element.addClass("la-review-note-link");
      actions.set(view, { element, ...target });
    }
    for (const [view, action] of actions) {
      if (active.has(view)) continue;
      action.element.remove();
      actions.delete(view);
    }
  };
  plugin.registerEvent(workspace.on("file-open", refresh));
  plugin.registerEvent(workspace.on("layout-change", refresh));
  plugin.registerEvent(vault.on("create", (file) => {
    if (file instanceof import_obsidian5.TFile && file.extension === "md") refresh();
  }));
  plugin.registerEvent(vault.on("delete", refresh));
  plugin.registerEvent(vault.on("rename", refresh));
  workspace.onLayoutReady(refresh);
  plugin.register(() => {
    for (const { element } of actions.values()) element.remove();
    actions.clear();
  });
}

// src/obsidian/settings.ts
var import_obsidian6 = require("obsidian");
var ArchiveSettings = class extends import_obsidian6.PluginSettingTab {
  constructor(archive) {
    super(archive.app, archive);
    this.archive = archive;
  }
  display() {
    const { containerEl: root } = this;
    root.empty();
    root.createEl("h2", { text: "\u4EBA\u751F\u5B58\u6863" });
    root.createEl("p", { text: "\u7BA1\u7406\u7B14\u8BB0\u76EE\u5F55\u3001\u6A21\u677F\u3001\u4EBA\u751F\u5730\u56FE\u548C\u540C\u6B65\u3002", cls: "setting-item-description" });
    const { currentChapterPath, lifeMapPath, ...draft } = structuredClone(this.archive.config);
    const configured = { currentChapterPath, lifeMapPath };
    const selected = /* @__PURE__ */ new Map();
    new import_obsidian6.Setting(root).setName("\u542F\u52A8\u65F6\u6253\u5F00\u4EBA\u751F\u5B58\u6863").addToggle((t) => t.setValue(draft.openOnStartup).onChange((v) => {
      draft.openOnStartup = v;
    }));
    root.createEl("h3", { text: "\u7B14\u8BB0\u76EE\u5F55" });
    new import_obsidian6.Setting(root).setName("\u5468\u671F\u7B14\u8BB0").setDesc("\u6309\u5E74\u4EFD\u5B58\u653E\u4E8E \u5468\u671F\u7B14\u8BB0\u3002\u65E5\u7B14\u8BB0\u518D\u6309\u6708\u4EFD\u5F52\u6863\u3002");
    const names = { thoughts: "\u601D\u60F3\u6587\u7AE0", templates: "\u6A21\u677F\u76EE\u5F55" };
    for (const kind of Object.keys(names)) new import_obsidian6.Setting(root).setName(names[kind]).addText((t) => t.setValue(draft.paths[kind]).onChange((value) => {
      const old = draft.paths[kind];
      draft.paths[kind] = value;
      if (kind === "templates") for (const templateKind of Object.keys(draft.templates)) {
        if (draft.templates[templateKind].startsWith(`${old}/`)) draft.templates[templateKind] = `${value}/${draft.templates[templateKind].slice(old.length + 1)}`;
      }
    }));
    root.createEl("p", { text: "\u4FEE\u6539\u76EE\u5F55\u4E0D\u4F1A\u642C\u52A8\u5DF2\u6709\u7B14\u8BB0\uFF1B\u8BF7\u5148\u5728 Obsidian \u4E2D\u79FB\u52A8\u9700\u8981\u8FC1\u79FB\u7684\u5185\u5BB9\u3002\u4E0D\u540C\u7528\u9014\u7684\u76EE\u5F55\u4E0D\u80FD\u76F8\u4E92\u5305\u542B\u3002", cls: "setting-item-description" });
    root.createEl("h3", { text: "\u7B14\u8BB0\u6A21\u677F" });
    for (const kind of Object.keys(TEMPLATE_NAMES)) new import_obsidian6.Setting(root).setName(kind === "thought" ? TEMPLATE_NAMES.thought : PERIOD_LABELS[kind]).addText((t) => t.setValue(draft.templates[kind]).onChange((value) => {
      draft.templates[kind] = value;
    }));
    root.createEl("p", { text: "\u652F\u6301 {{date}}\u3001{{title}}\u3001{{period}}\u3001{{start}}\u3001{{end}}\u3001{{monthNote}}\u3002\u6A21\u677F\u4FDD\u5B58\u5728\u7B14\u8BB0\u5E93\u4E2D\uFF0C\u53EF\u76F4\u63A5\u7F16\u8F91\u3002", cls: "setting-item-description" });
    root.createEl("h3", { text: "\u5F53\u524D\u7AE0\u8282\u4E0E\u4EBA\u751F\u5730\u56FE" });
    for (const [key, label, extension] of [
      ["currentChapterPath", "\u5F53\u524D\u7AE0\u8282", "md"],
      ["lifeMapPath", "\u4EBA\u751F\u5730\u56FE", "canvas"]
    ]) {
      const setting = new import_obsidian6.Setting(root).setName(label).setDesc(configured[key] || "\u5C1A\u672A\u9009\u62E9");
      setting.addButton((control) => control.setButtonText("\u9009\u62E9\u6587\u4EF6").onClick(() => {
        const files = this.app.vault.getFiles().filter((file) => file.extension === extension).sort((a, b) => a.path.localeCompare(b.path, "zh-CN"));
        new NotesModal(this.app, files, "\u9009\u62E9" + label + "\u2026", async (path) => {
          const file = this.app.vault.getFileByPath(path);
          if (!file) throw new Error("\u6587\u4EF6\u5DF2\u79FB\u8D70\u6216\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");
          selected.set(key, file);
          setting.setDesc(path);
        }).open();
      }));
      setting.addButton((control) => control.setButtonText("\u6E05\u9664").onClick(() => {
        selected.set(key, null);
        setting.setDesc("\u5C1A\u672A\u9009\u62E9");
      }));
    }
    root.createEl("h3", { text: "GitHub \u540C\u6B65" });
    new import_obsidian6.Setting(root).setName("\u79C1\u6709\u4ED3\u5E93\u514B\u9686\u5730\u5740").setDesc("\u6253\u5F00 Vault \u65F6\u540C\u6B65\uFF0C\u4FDD\u5B58\u540E\u7B49\u5F85 30 \u79D2\u5408\u5E76\u540C\u6B65\u3002\u7559\u7A7A\u53EF\u505C\u7528\u3002").addText((t) => t.setValue(draft.githubRemote).onChange((value) => {
      draft.githubRemote = value.trim();
    }));
    root.createEl("h3", { text: "\u4FDD\u5B58" });
    new import_obsidian6.Setting(root).setName("\u4FDD\u5B58\u8BBE\u7F6E").setDesc("\u6821\u9A8C\u8DEF\u5F84\u540E\u751F\u6548\uFF1B\u65B0\u76EE\u5F55\u4E0E\u7F3A\u5931\u6A21\u677F\u4F1A\u81EA\u52A8\u8865\u9F50\uFF0C\u5DF2\u6709\u6587\u4EF6\u4FDD\u7559\u3002").addButton((b) => b.setButtonText("\u4FDD\u5B58\u8BBE\u7F6E").setCta().onClick(async () => {
      b.setDisabled(true);
      const paths = Object.fromEntries(Array.from(selected, ([key, file]) => [key, file?.path ?? ""]));
      try {
        await this.archive.updateConfig({ ...structuredClone(draft), ...paths });
        new import_obsidian6.Notice("\u4EBA\u751F\u5B58\u6863\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
        this.display();
      } catch (e) {
        new import_obsidian6.Notice(e instanceof Error ? e.message : "\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25");
      } finally {
        b.setDisabled(false);
      }
    }));
  }
};

// src/obsidian/github-sync.ts
var import_node_child_process = require("node:child_process");
var import_promises = require("node:fs/promises");
var import_node_path = require("node:path");
var import_node_util = require("node:util");
var execute = (0, import_node_util.promisify)(import_node_child_process.execFile);
function githubRepository(url) {
  const match = /^(?:git@github\.com:|https:\/\/github\.com\/)([\w.-]+\/[\w.-]+)$/i.exec(url);
  return match?.[1]?.replace(/\.git$/i, "").toLowerCase();
}
async function syncVault(root, remote) {
  const git = async (args, failure, allowed = [0]) => {
    try {
      const { stdout } = await execute("git", args, {
        cwd: root,
        timeout: 9e4,
        encoding: "utf8",
        windowsHide: true,
        env: {
          ...process.env,
          GIT_TERMINAL_PROMPT: "0",
          GIT_SSH_COMMAND: "ssh -o BatchMode=yes -o StrictHostKeyChecking=yes -o ConnectTimeout=15"
        }
      });
      return { code: 0, output: stdout.trim() };
    } catch (error) {
      const code = error.code;
      if (typeof code === "number" && allowed.includes(code)) return { code, output: "" };
      throw new Error(failure);
    }
  };
  const metadata = await (0, import_promises.lstat)((0, import_node_path.join)(root, ".git")).catch((error) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (metadata && !metadata.isDirectory()) throw new Error("Git \u5143\u6570\u636E\u4E0D\u662F\u666E\u901A\u76EE\u5F55");
  if (!metadata) await git(["init", "--initial-branch=main"], "\u65E0\u6CD5\u521D\u59CB\u5316\u6587\u4EF6\u5E93\u7684 Git \u4ED3\u5E93");
  const base = await git(["rev-parse", "--show-toplevel"], "\u65E0\u6CD5\u5B9A\u4F4D Git \u4ED3\u5E93");
  if (await (0, import_promises.realpath)(base.output) !== await (0, import_promises.realpath)(root)) throw new Error("Git \u4ED3\u5E93\u6839\u76EE\u5F55\u4E0E Vault \u4E0D\u4E00\u81F4");
  const branch = await git(["branch", "--show-current"], "\u65E0\u6CD5\u8BFB\u53D6\u5F53\u524D Git \u5206\u652F");
  if (branch.output !== "main") throw new Error("\u8BF7\u5207\u6362\u5230 main \u5206\u652F\u540E\u540C\u6B65");
  const merge = await git(["rev-parse", "--quiet", "--verify", "MERGE_HEAD"], "\u65E0\u6CD5\u68C0\u67E5\u5DF2\u6709\u5408\u5E76", [0, 1]);
  if (merge.code === 0) throw new Error("\u8BF7\u5148\u5904\u7406\u5DF2\u5F00\u59CB\u7684 Git \u5408\u5E76\uFF0C\u518D\u91CD\u65B0\u540C\u6B65");
  const origins = await git(["remote"], "\u65E0\u6CD5\u8BFB\u53D6 Git \u8FDC\u7AEF");
  if (!origins.output.split("\n").includes("origin")) {
    const head2 = await git(["rev-parse", "--quiet", "--verify", "HEAD"], "\u65E0\u6CD5\u8BFB\u53D6\u63D0\u4EA4\u5386\u53F2", [0, 1]);
    if (head2.code === 0) throw new Error("\u5DF2\u6709 Git \u5386\u53F2\uFF0C\u9700\u5148\u6838\u5BF9 origin");
    await git(["remote", "add", "origin", remote], "\u65E0\u6CD5\u8BBE\u7F6E GitHub \u8FDC\u7AEF");
  }
  for (const mode of [[], ["--push"]]) {
    const urls = await git(["remote", "get-url", ...mode, "--all", "origin"], "\u65E0\u6CD5\u8BFB\u53D6 origin \u5730\u5740");
    const repository = githubRepository(urls.output);
    if (urls.output !== remote && (!repository || repository !== githubRepository(remote))) {
      throw new Error("Git \u7684 origin \u4E0E\u4EBA\u751F\u5B58\u6863\u8BBE\u7F6E\u4E0D\u4E00\u81F4");
    }
  }
  await git(["fetch", "--prune", "origin"], "\u65E0\u6CD5\u8FDE\u63A5\u79C1\u6709\u4ED3\u5E93\uFF0C\u8BF7\u68C0\u67E5 GitHub \u767B\u5F55\u548C\u7F51\u7EDC");
  await git(["add", "--all"], "\u65E0\u6CD5\u6682\u5B58 Vault \u6587\u4EF6");
  const changes = await git(["diff", "--cached", "--quiet"], "\u65E0\u6CD5\u68C0\u67E5 Vault \u53D8\u66F4", [0, 1]);
  if (changes.code === 1) await git(["commit", "-m", "\u540C\u6B65\u4EBA\u751F\u5B58\u6863"], "\u65E0\u6CD5\u63D0\u4EA4 Vault \u53D8\u66F4\uFF0C\u8BF7\u68C0\u67E5 Git \u4F5C\u8005\u8BBE\u7F6E");
  const local = await git(["rev-parse", "--quiet", "--verify", "HEAD"], "\u65E0\u6CD5\u8BFB\u53D6\u672C\u5730\u63D0\u4EA4", [0, 1]);
  const upstream = await git(["rev-parse", "--quiet", "--verify", "refs/remotes/origin/main"], "\u65E0\u6CD5\u8BFB\u53D6\u8FDC\u7AEF\u63D0\u4EA4", [0, 1]);
  if (upstream.code === 0 && local.output !== upstream.output) {
    let strategy = "--ff-only";
    if (local.code === 0) {
      const counts = await git(["rev-list", "--left-right", "--count", "HEAD..." + upstream.output], "\u65E0\u6CD5\u6BD4\u8F83\u672C\u5730\u4E0E GitHub \u7684\u63D0\u4EA4");
      const [localOnly, remoteOnly] = counts.output.split(/\s+/).map(Number);
      if (localOnly && remoteOnly) {
        await git(["merge-tree", "--write-tree", "HEAD", upstream.output], "\u672C\u5730\u4E0E GitHub \u7684\u6539\u52A8\u5B58\u5728\u51B2\u7A81\u6216\u65E0\u6CD5\u81EA\u52A8\u5408\u5E76\u3002\u53CC\u65B9\u63D0\u4EA4\u5DF2\u4FDD\u7559");
        strategy = "--ff";
      }
    }
    await git(["merge", strategy, "--no-edit", "--no-autostash", upstream.output], "\u65E0\u6CD5\u6574\u5408 GitHub \u66F4\u65B0\uFF0C\u8BF7\u68C0\u67E5\u672C\u5730\u4FEE\u6539\u540E\u91CD\u8BD5");
  }
  const head = await git(["rev-parse", "--quiet", "--verify", "HEAD"], "\u65E0\u6CD5\u786E\u8BA4\u6574\u5408\u540E\u7684\u672C\u5730\u63D0\u4EA4", [0, 1]);
  if (head.code === 0 && head.output !== upstream.output) {
    await git(["push", "origin", "HEAD:refs/heads/main"], "\u63A8\u9001\u672A\u5B8C\u6210\uFF0C\u53EF\u80FD\u6709\u5E76\u53D1\u66F4\u65B0\u6216\u8FDE\u63A5\u4E2D\u65AD\u3002\u8BF7\u91CD\u8BD5\u540C\u6B65");
  }
}

// src/main.ts
var LifeArchive = class extends import_obsidian7.Plugin {
  config;
  port;
  notes;
  habits;
  index;
  refreshTimer = null;
  ready = false;
  refreshWritingGuide;
  syncTimer;
  syncJob;
  syncState = { state: "idle" };
  syncFeedbackTimer;
  configWrites = Promise.resolve();
  async onload() {
    try {
      this.config = loadConfig(await this.loadData() ?? {});
    } catch (e) {
      new import_obsidian7.Notice(`\u4EBA\u751F\u5B58\u6863\u914D\u7F6E\u65E0\u6548\uFF1A${e instanceof Error ? e.message : "\u8BF7\u68C0\u67E5\u8BBE\u7F6E"}`);
      throw e;
    }
    this.port = new ObsidianVault(this.app);
    this.notes = new NoteService(this.config, this.port);
    const vault = this.app.vault;
    this.habits = new HabitStore({
      read: async () => {
        const entry = vault.getAbstractFileByPath(HABIT_PATH);
        if (!entry) return null;
        if (!(entry instanceof import_obsidian7.TFile)) throw new Error(`\u300C${HABIT_PATH}\u300D\u5DF2\u88AB\u76EE\u5F55\u5360\u7528\u3002`);
        return vault.read(entry);
      },
      update: async (change) => {
        const entry = vault.getAbstractFileByPath(HABIT_PATH);
        if (entry instanceof import_obsidian7.TFile) await vault.process(entry, change);
        else if (!entry) await vault.create(HABIT_PATH, change(null));
        else throw new Error(`\u300C${HABIT_PATH}\u300D\u5DF2\u88AB\u76EE\u5F55\u5360\u7528\u3002`);
      }
    });
    this.index = new ArchiveIndex(this.config);
    this.registerView(HOME_VIEW, (leaf) => new HomeView(leaf, this));
    this.refreshWritingGuide = registerWritingGuide(this);
    registerReviewNoteLinks(this);
    this.addSettingTab(new ArchiveSettings(this));
    this.addRibbonIcon("notebook-pen", "\u6253\u5F00\u4EBA\u751F\u5B58\u6863", () => {
      void this.openHome();
    });
    this.addCommand({ id: "open-home", name: "\u6253\u5F00\u4EBA\u751F\u5B58\u6863", callback: () => {
      void this.openHome();
    } });
    this.addCommand({ id: "sync-github", name: "\u7ACB\u5373\u540C\u6B65 GitHub", callback: () => {
      void this.syncGitHub(true);
    } });
    for (const kind of PERIOD_KINDS) this.addCommand({ id: `open-${kind}`, name: `\u6253\u5F00\u5F53\u524D${PERIOD_LABELS[kind]}`, callback: () => {
      void this.notes.openPeriod(kind, today()).catch((e) => new import_obsidian7.Notice(e.message));
    } });
    this.addCommand({ id: "new-thought", name: "\u65B0\u5EFA\u601D\u60F3\u6587\u7AE0", callback: () => this.newThought() });
    this.addCommand({ id: "browse-periods", name: "\u6D4F\u89C8\u5468\u671F\u7B14\u8BB0", callback: () => this.browse("periods") });
    this.addCommand({ id: "browse-thoughts", name: "\u6D4F\u89C8\u601D\u60F3\u6587\u7AE0", callback: () => this.browse("thoughts") });
    this.addCommand({ id: "initialize", name: "\u8865\u9F50\u76EE\u5F55\u4E0E\u6A21\u677F", callback: () => {
      void this.notes.initialize().then(() => new import_obsidian7.Notice("\u76EE\u5F55\u4E0E\u6A21\u677F\u5DF2\u68C0\u67E5\uFF0C\u5DF2\u6709\u6587\u4EF6\u4FDD\u7559")).catch((e) => new import_obsidian7.Notice(e.message));
    } });
    this.registerObsidianProtocolHandler("life-archive", async (params) => {
      if (params.action === "period" && PERIOD_KINDS.includes(params.kind)) await this.notes.openPeriod(params.kind, params.date || today()).catch((e) => new import_obsidian7.Notice(e.message));
      else await this.openHome();
    });
    const isOverviewPath = (path) => path === HABIT_PATH || path === REVIEW_FOLDER || isWithin(path, REVIEW_FOLDER) || path === this.config.currentChapterPath || path === this.config.lifeMapPath;
    const isMarkdown = (file) => file instanceof import_obsidian7.TFile && file.extension === "md";
    const update = (file) => {
      if (isMarkdown(file)) this.index.upsert(this.port.entry(file));
      const referenced = this.app.workspace.getLeavesOfType(HOME_VIEW).some((leaf) => leaf.view instanceof HomeView && leaf.view.references(file.path));
      if (isOverviewPath(file.path) || this.index.has(file.path) || referenced) this.requestRefresh();
    };
    this.registerEvent(vault.on("create", (file) => {
      update(file);
      if (isMarkdown(file)) this.requestRefresh();
    }));
    this.registerEvent(vault.on("modify", update));
    this.registerEvent(vault.on("delete", (file) => {
      this.index.remove(file.path);
      if (file instanceof import_obsidian7.TFolder) this.rebuildIndex();
      if (isOverviewPath(file.path) || isMarkdown(file) || file instanceof import_obsidian7.TFolder) this.requestRefresh();
    }));
    this.registerEvent(vault.on("rename", (file, oldPath) => {
      this.index.remove(oldPath);
      if (file instanceof import_obsidian7.TFolder) this.rebuildIndex();
      this.followRenamedFiles(oldPath, file.path);
      update(file);
      if (isOverviewPath(oldPath) || oldPath.endsWith(".md") || isMarkdown(file) || file instanceof import_obsidian7.TFolder) this.requestRefresh();
    }));
    this.registerEvent(this.app.vault.on("create", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.vault.on("modify", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.vault.on("delete", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.vault.on("rename", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.metadataCache.on("changed", update));
    this.registerEvent(this.app.metadataCache.on("resolve", (file) => {
      if (isOverviewPath(file.path)) this.requestRefresh();
    }));
    const status = this.addStatusBarItem();
    status.setText("\u4EBA\u751F\u5B58\u6863");
    status.addClass("la-status-button");
    status.setAttribute("role", "button");
    status.tabIndex = 0;
    this.registerDomEvent(status, "click", () => {
      void this.openHome();
    });
    this.registerDomEvent(status, "keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        void this.openHome();
      }
    });
    let lastDay = today();
    this.registerInterval(window.setInterval(() => {
      const day = today();
      if (day !== lastDay) {
        lastDay = day;
        this.requestRefresh();
      }
    }, 6e4));
    this.register(() => {
      if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
    });
    this.app.workspace.onLayoutReady(() => {
      void this.initialize().catch((e) => new import_obsidian7.Notice(`\u4EBA\u751F\u5B58\u6863\u521D\u59CB\u5316\u5931\u8D25\uFF1A${e.message}`));
    });
  }
  async initialize() {
    await this.notes.initialize();
    this.rebuildIndex();
    if (!await this.loadData()) await this.saveData(this.config);
    this.ready = true;
    if (this.config.githubRemote) void this.syncGitHub();
    this.requestRefresh();
    if (this.config.openOnStartup) await this.openHome();
    else this.requestRefresh();
  }
  onunload() {
    this.ready = false;
    window.clearTimeout(this.syncTimer);
    window.clearTimeout(this.syncFeedbackTimer);
    for (const leaf of this.app.workspace.getLeavesOfType(HOME_VIEW)) leaf.detach();
  }
  setSyncState(status) {
    window.clearTimeout(this.syncFeedbackTimer);
    this.syncState = status;
    for (const leaf of this.app.workspace.getLeavesOfType(HOME_VIEW)) {
      if (leaf.view instanceof HomeView) leaf.view.updateSyncState(status);
    }
    if (status.state === "success" || status.state === "error") {
      this.syncFeedbackTimer = window.setTimeout(() => this.setSyncState({ state: "idle" }), status.state === "error" ? 3500 : 1800);
    }
  }
  scheduleGitHubSync() {
    if (!this.ready || !this.config.githubRemote) return;
    window.clearTimeout(this.syncTimer);
    this.syncTimer = window.setTimeout(() => {
      void this.syncGitHub();
    }, 3e4);
  }
  async syncGitHub(manual = false) {
    const remote = this.config.githubRemote;
    const adapter = this.app.vault.adapter;
    if (!remote || !(adapter instanceof import_obsidian7.FileSystemAdapter)) {
      if (manual) this.setSyncState({ state: "error", message: "\u8BF7\u5728\u684C\u9762\u7248\u7684\u300C\u4EBA\u751F\u5B58\u6863\u300D\u8BBE\u7F6E\u4E2D\u586B\u5199 GitHub \u79C1\u6709\u4ED3\u5E93\u5730\u5740" });
      return;
    }
    window.clearTimeout(this.syncTimer);
    if (this.syncJob) {
      this.scheduleGitHubSync();
      return;
    }
    const job = syncVault(adapter.getBasePath(), remote);
    this.syncJob = job;
    this.setSyncState({ state: "running" });
    try {
      await job;
      if (this.ready) this.setSyncState({ state: "success" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "\u540C\u6B65\u5931\u8D25";
      if (this.ready) this.setSyncState({ state: "error", message });
    } finally {
      this.syncJob = void 0;
    }
  }
  async openHome() {
    let leaf = this.app.workspace.getLeavesOfType(HOME_VIEW)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: HOME_VIEW, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
  }
  allPaths() {
    return this.index.allPaths();
  }
  rebuildIndex() {
    this.index.reset(this.app.vault.getMarkdownFiles().map((file) => this.port.entry(file)));
  }
  requestRefresh() {
    if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
    this.refreshTimer = window.setTimeout(() => {
      this.refreshTimer = null;
      for (const leaf of this.app.workspace.getLeavesOfType(HOME_VIEW)) if (leaf.view instanceof HomeView) void leaf.view.refresh().catch(() => {
      });
    }, 120);
  }
  queueConfigWrite(write) {
    const pending = this.configWrites.then(write);
    this.configWrites = pending.catch(() => {
    });
    return pending;
  }
  followRenamedFiles(oldPath, newPath) {
    void this.queueConfigWrite(async () => {
      const previous = this.config;
      const currentChapterPath = relocatePath(previous.currentChapterPath, oldPath, newPath);
      const lifeMapPath = relocatePath(previous.lifeMapPath, oldPath, newPath);
      if (currentChapterPath === previous.currentChapterPath && lifeMapPath === previous.lifeMapPath) return;
      const config = loadConfig({ ...previous, currentChapterPath, lifeMapPath });
      await this.saveData(config);
      this.config = config;
      this.requestRefresh();
    }).catch(() => new import_obsidian7.Notice("\u65E0\u6CD5\u66F4\u65B0\u4EBA\u751F\u5730\u56FE\u8BBE\u7F6E\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u5DF2\u79FB\u52A8\u7684\u6587\u4EF6\u3002"));
  }
  updateConfig(value) {
    return this.queueConfigWrite(async () => {
      const config = loadConfig({ ...this.config, ...value }), notes = new NoteService(config, this.port);
      await notes.initialize();
      await this.saveData(config);
      this.config = config;
      this.notes = notes;
      this.index = new ArchiveIndex(config);
      this.refreshWritingGuide?.();
      this.rebuildIndex();
      this.requestRefresh();
      this.scheduleGitHubSync();
    });
  }
  newThought() {
    new ThoughtModal(this).open();
  }
  help() {
    new HelpModal(this.app).open();
  }
  browse(kind) {
    if (kind === "reviews") {
      const files = reviewFiles(this.port.reviewPaths());
      if (!files.length) {
        new import_obsidian7.Notice("\u6682\u65E0\u5386\u6708 AI \u590D\u76D8");
        return;
      }
      new NotesModal(
        this.app,
        files.map((file) => ({ path: file.path, label: file.month })),
        "\u67E5\u627E AI \u590D\u76D8\u6708\u4EFD\u2026",
        (path) => this.port.open(path)
      ).open();
      return;
    }
    const entries = kind === "thoughts" ? this.index.thoughts(Number.MAX_SAFE_INTEGER) : this.index.periodNotes(Number.MAX_SAFE_INTEGER);
    new NotesModal(this.app, entries, kind === "thoughts" ? "\u67E5\u627E\u601D\u60F3\u6587\u7AE0\u2026" : "\u67E5\u627E\u5468\u671F\u7B14\u8BB0\u2026", (path) => this.port.open(path)).open();
  }
  openSettings() {
    const app = this.app;
    app.setting?.open();
    app.setting?.openTabById(this.manifest.id);
  }
};
