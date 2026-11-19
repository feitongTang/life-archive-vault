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

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LifeArchive
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");
var import_node_child_process2 = require("node:child_process");
var import_node_path3 = require("node:path");

// src/core/config.ts
var PERIOD_KINDS = ["daily", "weekly", "monthly", "quarterly", "yearly"];
var PERIOD_FOLDER = "\u5468\u671F\u7B14\u8BB0";
var LEGACY_PERIOD_FOLDERS = {
  daily: "\u65E5\u8BB0",
  weekly: "\u590D\u76D8/\u5468",
  monthly: "\u590D\u76D8/\u6708",
  quarterly: "\u590D\u76D8/\u5B63",
  yearly: "\u590D\u76D8/\u5E74"
};
var PATHS = {
  daily: `${PERIOD_FOLDER}/\u65E5`,
  weekly: `${PERIOD_FOLDER}/\u5468`,
  monthly: `${PERIOD_FOLDER}/\u6708`,
  quarterly: `${PERIOD_FOLDER}/\u5B63`,
  yearly: `${PERIOD_FOLDER}/\u5E74`,
  thoughts: "\u601D\u60F3",
  ai: "\u590D\u76D8/AI",
  templates: "\u6A21\u677F"
};
var canonical = (path) => path.normalize("NFC").toLowerCase();
var overlaps = (a, b) => a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
var TEMPLATE_NAMES = {
  daily: "\u65E5\u7B14\u8BB0",
  weekly: "\u5468\u7B14\u8BB0",
  monthly: "\u6708\u7B14\u8BB0",
  quarterly: "\u5B63\u7B14\u8BB0",
  yearly: "\u5E74\u7B14\u8BB0",
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
  const timezone2 = raw.timezone ?? "Asia/Shanghai";
  if (typeof timezone2 !== "string") throw new Error("\u65F6\u533A\u5FC5\u987B\u662F IANA \u65F6\u533A\u540D\u79F0");
  try {
    new Intl.DateTimeFormat("zh-CN", { timeZone: timezone2 }).format();
  } catch {
    throw new Error(`\u65E0\u6548\u65F6\u533A\uFF1A${timezone2}`);
  }
  const inputPaths = raw.paths === void 0 ? {} : record(raw.paths);
  const paths = Object.fromEntries(Object.entries(PATHS).map(([kind, fallback]) => [kind, safePath(inputPaths[kind] ?? fallback)]));
  const periodRoots = [...new Set(PERIOD_KINDS.map((kind) => paths[kind]))].map(canonical);
  const otherRoots = [paths.thoughts, paths.ai, paths.templates].map(canonical);
  const roots = [...periodRoots, ...otherRoots];
  for (let i = 0; i < roots.length; i++) for (let j = i + 1; j < roots.length; j++) {
    const a = roots[i], b = roots[j];
    if (overlaps(a, b)) throw new Error(`\u5185\u5BB9\u76EE\u5F55\u4E0D\u80FD\u91CD\u53E0\uFF1A${a} / ${b}`);
  }
  const usesDefaultPeriodFolder = PERIOD_KINDS.some((kind) => paths[kind] === PATHS[kind]);
  const readRoots = usesDefaultPeriodFolder ? [...roots, PERIOD_FOLDER] : roots;
  if (usesDefaultPeriodFolder && otherRoots.some((path) => overlaps(path, PERIOD_FOLDER))) throw new Error(`\u5185\u5BB9\u76EE\u5F55\u4E0D\u80FD\u91CD\u53E0\uFF1A${PERIOD_FOLDER}`);
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
  if (raw.codexPath !== void 0 && (typeof raw.codexPath !== "string" || /[\x00\r\n]/.test(raw.codexPath))) throw new Error("Codex \u7A0B\u5E8F\u8DEF\u5F84\u65E0\u6548");
  if (raw.nodePath !== void 0 && (typeof raw.nodePath !== "string" || /[\x00\r\n]/.test(raw.nodePath))) throw new Error("Node.js \u7A0B\u5E8F\u8DEF\u5F84\u65E0\u6548");
  const extra = raw.extraReadFolders ?? [];
  if (!Array.isArray(extra)) throw new Error("\u989D\u5916\u8BFB\u53D6\u76EE\u5F55\u5FC5\u987B\u4E3A\u6570\u7EC4");
  const extraReadFolders = extra.map(safePath);
  for (const inputPath of extraReadFolders) {
    if (readRoots.some((root) => overlaps(root, canonical(inputPath)))) throw new Error("\u989D\u5916\u8BFB\u53D6\u76EE\u5F55\u4E0D\u80FD\u8986\u76D6\u6216\u91CD\u53E0\u5DF2\u6709\u76EE\u5F55");
  }
  return {
    schemaVersion: 1,
    timezone: timezone2,
    paths,
    templates,
    openOnStartup: raw.openOnStartup !== false,
    githubRemote,
    codexPath: raw.codexPath || "codex",
    nodePath: raw.nodePath || "node",
    extraReadFolders
  };
}
function isWithin(path, folder) {
  return path.startsWith(`${folder}/`);
}
function periodFolders(kind, config) {
  const folder = config.paths[kind];
  if (folder !== PATHS[kind] && folder !== PERIOD_FOLDER) return [folder];
  const legacy = LEGACY_PERIOD_FOLDERS[kind];
  const folders = folder === PERIOD_FOLDER ? [folder] : [folder, PERIOD_FOLDER];
  if (!Object.values(config.paths).some((path) => overlaps(canonical(path), canonical(legacy)))) folders.push(legacy);
  return folders;
}

// src/core/periods.ts
var import_dayjs2 = __toESM(require_dayjs_min(), 1);
var import_utc = __toESM(require_utc(), 1);
var import_timezone = __toESM(require_timezone(), 1);
var import_isoWeek = __toESM(require_isoWeek(), 1);
var import_quarterOfYear = __toESM(require_quarterOfYear(), 1);
var import_customParseFormat = __toESM(require_customParseFormat(), 1);

// src/vendor/lifeos-calendar.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);
function isoWeekRange(year, week) {
  if (!Number.isInteger(year) || year < 1e3 || year > 9999 || !Number.isInteger(week) || week < 1 || week > 53) {
    return { from: null, to: null };
  }
  const start = import_dayjs.default.utc(`${year}-01-04`).startOf("isoWeek").add(week - 1, "week");
  if (start.isoWeekYear() !== year) return { from: null, to: null };
  return { from: start.format("YYYY-MM-DD"), to: start.add(6, "day").format("YYYY-MM-DD") };
}

// src/core/periods.ts
import_dayjs2.default.extend(import_utc.default);
import_dayjs2.default.extend(import_timezone.default);
import_dayjs2.default.extend(import_isoWeek.default);
import_dayjs2.default.extend(import_quarterOfYear.default);
import_dayjs2.default.extend(import_customParseFormat.default);
var PERIOD_LABELS = { daily: "\u65E5\u7B14\u8BB0", weekly: "\u5468\u7B14\u8BB0", monthly: "\u6708\u7B14\u8BB0", quarterly: "\u5B63\u7B14\u8BB0", yearly: "\u5E74\u7B14\u8BB0" };
function parseDay(date) {
  const d = import_dayjs2.default.utc(date, "YYYY-MM-DD", true);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !d.isValid() || d.year() < 1e3) throw new Error(`\u65E0\u6548\u65E5\u671F\uFF1A${date}`);
  return d;
}
function assertMonth(month) {
  if (!/^\d{4}-\d{2}$/.test(month)) throw new Error(`\u6708\u4EFD\u5FC5\u987B\u4E3A YYYY-MM\uFF1A${month}`);
  parseDay(`${month}-01`);
  return month;
}
function today(zone, now = /* @__PURE__ */ new Date()) {
  return (0, import_dayjs2.default)(now).tz(zone).format("YYYY-MM-DD");
}
function previousMonth(zone, now = /* @__PURE__ */ new Date()) {
  return parseDay(today(zone, now)).subtract(1, "month").format("YYYY-MM");
}
function periodFor(kind, date, config) {
  const d = parseDay(date);
  let key, start, end;
  if (kind === "weekly") {
    key = `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, "0")}`;
    const range = isoWeekRange(d.isoWeekYear(), d.isoWeek());
    start = range.from;
    end = range.to;
  } else {
    const unit = { daily: "day", monthly: "month", quarterly: "quarter", yearly: "year" }[kind];
    start = d.startOf(unit).format("YYYY-MM-DD");
    end = d.endOf(unit).format("YYYY-MM-DD");
    key = kind === "daily" ? date : kind === "monthly" ? d.format("YYYY-MM") : kind === "quarterly" ? `${d.year()}-Q${d.quarter()}` : d.format("YYYY");
  }
  return { kind, key, title: key, start, end, path: `${config.paths[kind]}/${key}.md` };
}
function periodNotePaths(period, config) {
  return periodFolders(period.kind, config).map((folder) => `${folder}/${period.key}.md`);
}
function calendarMonth(month, _zone) {
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
  const aiPrefix = `${config.paths.ai}/`;
  if (path.startsWith(aiPrefix)) {
    const key2 = path.slice(aiPrefix.length, -3);
    try {
      if (path.endsWith(".md")) {
        assertMonth(key2);
        return { kind: "ai", key: key2, path };
      }
    } catch {
    }
    return null;
  }
  if (!path.endsWith(".md")) return null;
  const slash = path.lastIndexOf("/");
  const folder = path.slice(0, slash), key = path.slice(slash + 1, -3);
  for (const kind of PERIOD_KINDS) {
    if (!periodFolders(kind, config).includes(folder)) continue;
    try {
      let date;
      if (kind === "daily") date = key;
      else if (kind === "weekly") {
        const m = key.match(/^(\d{4})-W(\d{2})$/);
        if (!m) continue;
        const range = isoWeekRange(Number(m[1]), Number(m[2]));
        if (!range.from) continue;
        date = range.from;
      } else if (kind === "monthly") date = `${assertMonth(key)}-01`;
      else if (kind === "quarterly") {
        const m = key.match(/^(\d{4})-Q([1-4])$/);
        if (!m) continue;
        date = `${m[1]}-${String((Number(m[2]) - 1) * 3 + 1).padStart(2, "0")}-01`;
      } else {
        if (!/^\d{4}$/.test(key)) continue;
        date = `${key}-01-01`;
      }
      const p = periodFor(kind, date, config);
      if (p.key === key) return { kind, key, start: p.start, end: p.end, path };
    } catch {
    }
  }
  return null;
}

// src/core/templates.ts
var defaultTemplates = {
  daily: "---\nai: read\n---\n\n## \u4ECA\u5929\u53D1\u751F\u4E86\u4EC0\u4E48\n\n\n\n## \u60F3\u6CD5\u4E0E\u611F\u53D7\n\n\n\n## \u503C\u5F97\u8BB0\u4F4F\n\n\n\n---\n[[{{monthNote}}|\u672C\u6708\u7B14\u8BB0]] \xB7 [[{{aiNote}}|AI \u6708\u5EA6\u8349\u7A3F]]\n",
  weekly: "---\nai: read\n---\n\n## \u672C\u5468\u56DE\u770B\n\n\n\n## \u9884\u671F\u4E0E\u5B9E\u9645\n\n\n\n## \u4E0B\u5468\u7684\u4E00\u4EF6\u4E8B\n\n{{start}} \u2014 {{end}}\n\n[[{{monthNote}}|\u672C\u6708\u7B14\u8BB0]]\n",
  monthly: "---\nai: read\n---\n\n## \u8FD9\u4E2A\u6708\u53D1\u751F\u4E86\u4EC0\u4E48\n\n\n\n## \u60F3\u6CD5\u6709\u4EC0\u4E48\u53D8\u5316\n\n\n\n## \u505A\u8FC7\u7684\u9009\u62E9\n\n\n\n## \u4E0B\u4E2A\u6708\n\n{{start}} \u2014 {{end}}\n\n[[{{aiNote}}|\u67E5\u770B AI \u6708\u5EA6\u8349\u7A3F]]\n",
  quarterly: "---\nai: read\n---\n\n## \u8FD9\u4E00\u5B63\u7684\u4E3B\u7EBF\n\n\n\n## \u7ED3\u679C\u3001\u53D8\u5316\u4E0E\u53CD\u4F8B\n\n\n\n## \u4E0B\u4E00\u9636\u6BB5\n\n{{start}} \u2014 {{end}}\n",
  yearly: "---\nai: read\n---\n\n## \u8FD9\u4E00\u5E74\n\n\n\n## \u91CD\u8981\u7684\u7ECF\u5386\u4E0E\u9009\u62E9\n\n\n\n## \u6539\u53D8\u4E0E\u5EF6\u7EED\n\n\n\n## \u4E0B\u4E00\u5E74\n\n{{start}} \u2014 {{end}}\n",
  thought: '---\nai: read\ndate: "{{date}}"\n---\n\n'
};
function renderTemplate(template, period, config, date, monthPath) {
  const month = period.start.slice(0, 7);
  const vars = {
    date,
    title: period.title,
    period: period.key,
    start: period.start,
    end: period.end,
    monthNote: monthPath?.slice(0, -3) ?? `${config.paths.monthly}/${month}`,
    aiNote: `${config.paths.ai}/${month}`
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
    for (const path of new Set(Object.values(this.config.paths))) await this.ensureFolder(path);
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
    const p = periodFor(kind, date, this.config);
    const existing = periodNotePaths(p, this.config).find((path) => this.port.get(path)?.kind === "file");
    const file = await this.getOrCreate(existing ?? p.path, async () => {
      const month = periodFor("monthly", p.start, this.config);
      const monthPath = periodNotePaths(month, this.config).find((path) => this.port.get(path)?.kind === "file");
      return renderTemplate(await this.template(kind), p, this.config, date, monthPath);
    });
    await this.port.open(file.path);
    return file.path;
  }
  async openThought(title, date) {
    const path = thoughtPath(title, this.config);
    const p = { ...periodFor("daily", date, this.config), title: title.trim().replace(/\.md$/i, "") };
    const file = await this.getOrCreate(path, async () => renderTemplate(await this.template("thought"), p, this.config, date));
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
  aiReviews() {
    return [...this.files.values()].filter((f) => classifyNote(f.path, this.config)?.kind === "ai").sort((a, b) => b.path.localeCompare(a.path));
  }
  periodNotes(limit = 12) {
    return [...this.files.values()].filter((f) => classifyNote(f.path, this.config)?.start).sort((a, b) => b.mtime - a.mtime).slice(0, limit);
  }
  get size() {
    return this.files.size;
  }
};

// src/core/review-format.ts
var AI_START = "<!-- life-archive:ai:start -->";
var AI_END = "<!-- life-archive:ai:end -->";
function aiRegion(text) {
  if (text.split(AI_START).length !== 2 || text.split(AI_END).length !== 2) return null;
  const start = text.indexOf(AI_START), end = text.indexOf(AI_END);
  if (start >= end) return null;
  return { before: text.slice(0, start + AI_START.length), content: text.slice(start + AI_START.length, end), after: text.slice(end) };
}
function section(text, heading) {
  return text.match(new RegExp(`^## ${heading}\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, "m"))?.[1]?.trim() ?? "";
}
function parseReview(text) {
  const region = aiRegion(text);
  if (!region) return null;
  const summary = section(region.content, "\u6458\u8981");
  if (!summary) return null;
  const keywordText = section(region.content, "\u5173\u952E\u8BCD");
  const keywords = [];
  const re = /^### (?:\d+[.、]\s*)?([^\n]+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm;
  for (const match of keywordText.matchAll(re)) {
    const body = match[2].trim();
    const sources = [];
    const sourceLines = body.split("\n").filter((line) => /^来源：\[\[/.test(line)).join("\n");
    for (const link of sourceLines.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)) {
      try {
        const target = link[1].split("#")[0];
        safePath(target);
        sources.push({ path: target.endsWith(".md") ? target : `${target}.md`, label: link[2] ?? target });
      } catch {
      }
    }
    keywords.push({
      keyword: match[1].trim(),
      observation: body.split(/\n\s*\n|\n>/)[0].trim(),
      quote: [...body.matchAll(/^> ?(.*)$/gm)].map((q) => q[1].replace(/\\([\\`*_{}\[\]()!#|])/g, "$1").replace(/&(lt|gt|amp);/g, (_, entity) => ({ lt: "<", gt: ">", amp: "&" })[entity])).join("\n"),
      sources
    });
    if (keywords.length === 3) break;
  }
  return { summary, keywords, coverage: section(region.content, "\u8986\u76D6\u60C5\u51B5") };
}

// src/obsidian/vault-service.ts
var import_obsidian = require("obsidian");
var ObsidianVault = class {
  constructor(app) {
    this.app = app;
  }
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
  async open(path) {
    const file = this.app.vault.getFileByPath(path);
    if (!file) throw new Error(`\u7B14\u8BB0\u4E0D\u5B58\u5728\uFF1A${path}`);
    const existing = this.app.workspace.getLeavesOfType("markdown").find((leaf) => leaf.getViewState().state?.file === path);
    if (existing) await this.app.workspace.revealLeaf(existing);
    else await this.app.workspace.getLeaf("tab").openFile(file);
  }
};

// src/obsidian/home-view.ts
var import_obsidian2 = require("obsidian");

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
function el(parent, tag, cls = "", text) {
  const child = parent.ownerDocument.createElement(tag);
  if (cls) child.className = cls;
  if (text !== void 0) child.textContent = text;
  parent.append(child);
  return child;
}
function button(parent, text, action, cls = "", label) {
  const b = el(parent, "button", cls, text);
  b.type = "button";
  b.dataset.action = action;
  if (label) b.setAttribute("aria-label", label);
  return b;
}
var monthLabel = (month) => `${Number(month.slice(0, 4))} \u5E74 ${Number(month.slice(5))} \u6708`;
function section2(parent, title, small) {
  const card = el(parent, "section", "la-card");
  const head = el(card, "div", "la-card-head");
  const group = el(head, "div");
  el(group, "p", "la-eyebrow", small);
  el(group, "h2", "", title);
  return card;
}
function openButton(parent, text, path, cls = "") {
  const b = button(parent, text, "file", cls);
  b.dataset.path = path;
  return b;
}
function basename(path) {
  return path.split("/").at(-1).replace(/\.md$/, "");
}
function mountHome(container, model, actions) {
  container.replaceChildren();
  const root = el(container, "main", "la-home");
  const header = el(root, "header", "la-header");
  const intro = el(header, "div", "la-intro");
  const date = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`${model.today}T12:00:00Z`));
  el(intro, "p", "la-eyebrow la-date", date);
  el(intro, "h1", "", "\u4EBA\u751F\u5B58\u6863");
  el(intro, "p", "la-subtitle", "\u7559\u4E0B\u4E00\u9875\u4ECA\u5929\uFF0C\u770B\u89C1\u4E00\u8DEF\u7684\u81EA\u5DF1\u3002");
  const topActions = el(header, "div", "la-header-actions");
  button(topActions, "\u6253\u5F00\u4ECA\u5929\u7684\u7B14\u8BB0  \u2197", "today", "la-primary");
  button(topActions, "\uFF0B \u5199\u7BC7\u601D\u60F3", "thought", "la-secondary");
  const sync = button(topActions, "", "sync-github", "la-secondary la-sync-button", "\u7ACB\u5373\u540C\u6B65 GitHub");
  sync.title = "\u7ACB\u5373\u540C\u6B65 GitHub";
  el(topActions, "span", "la-sync-status").setAttribute("role", "status");
  const status = el(root, "div", "la-stats");
  const hasPeriod = (period) => periodNotePaths(period, model.config).some((path) => model.paths.has(path));
  const recordedDays = /* @__PURE__ */ new Set();
  for (const path of model.paths) {
    if (!basename(path).startsWith(`${model.month}-`)) continue;
    const note = classifyNote(path, model.config);
    if (note?.kind === "daily") recordedDays.add(note.key);
  }
  el(status, "span", "la-overview-label", monthLabel(model.month));
  const days = el(status, "span");
  el(days, "strong", "", String(recordedDays.size));
  el(days, "span", "", " \u5929\u8BB0\u5F55");
  const thoughts = el(status, "span");
  el(thoughts, "strong", "", String(model.thoughtCount));
  el(thoughts, "span", "", " \u7BC7\u601D\u60F3");
  el(status, "span", "la-private", "\u4FDD\u5B58\u5728\u4F60\u7684\u7B14\u8BB0\u5E93");
  const review = el(root, "section", "la-reflection");
  const reviewContent = el(review, "div", "la-reflection-content");
  const reviewLabel = el(reviewContent, "div", "la-inline");
  el(reviewLabel, "p", "la-eyebrow", "\u6708\u5EA6\u56DE\u671B");
  if (model.latest) {
    el(reviewLabel, "span", "la-badge", `${model.latest.month} \xB7 AI \u8349\u7A3F`);
    el(reviewContent, "h2", "", "\u56DE\u770B\u8FD9\u6BB5\u65F6\u95F4");
    el(reviewContent, "p", "la-summary", model.latest.display.summary);
    openButton(review, "\u9605\u8BFB\u5168\u6587  \u2197", model.latest.path, "la-secondary la-review-link");
  } else {
    el(reviewLabel, "span", "la-badge la-badge-muted", "\u7B49\u5F85\u7B2C\u4E00\u4EFD\u56DE\u671B");
    el(reviewContent, "h2", "", "\u8FD8\u6CA1\u6709\u6708\u5EA6\u590D\u76D8");
    el(reviewContent, "p", "la-summary", "\u5468\u671F\u7B14\u8BB0\u548C\u601D\u60F3\u6162\u6162\u79EF\u7D2F\u540E\uFF0C\u53EF\u4EE5\u6574\u7406\u4E00\u4EFD\u5E26\u539F\u6587\u51FA\u5904\u7684\u6708\u5EA6\u56DE\u987E\u3002");
    button(review, "\u51C6\u5907\u6708\u5EA6\u590D\u76D8  \u2197", "review", "la-secondary la-review-link");
  }
  if (model.reviewErrors) el(reviewContent, "p", "la-muted la-small", `\u6709 ${model.reviewErrors} \u4EFD\u590D\u76D8\u683C\u5F0F\u6682\u4E0D\u53EF\u8BFB\uFF0C\u5F53\u524D\u663E\u793A\u6700\u8FD1\u4E00\u4EFD\u53EF\u8BFB\u5185\u5BB9\u3002`);
  const grid = el(root, "div", "la-main-grid");
  const calendar = section2(grid, "\u8BB0\u5F55\u65E5\u5386", "\u7ED9\u6BCF\u4E00\u5929\u7559\u4E2A\u4F4D\u7F6E");
  calendar.classList.add("la-calendar-card");
  const nav = el(calendar, "div", "la-calendar-nav");
  const monthInput = el(nav, "input", "la-month-input");
  monthInput.type = "month";
  monthInput.value = model.month;
  monthInput.setAttribute("aria-label", "\u9009\u62E9\u65E5\u5386\u6708\u4EFD");
  monthInput.dataset.action = "select-month";
  const navButtons = el(nav, "div", "la-inline");
  button(navButtons, "\u2039", "prev", "la-icon-button", "\u4E0A\u4E2A\u6708");
  button(navButtons, "\u4ECA\u5929", "this-month", "la-small-button", "\u56DE\u5230\u672C\u6708");
  button(navButtons, "\u203A", "next", "la-icon-button", "\u4E0B\u4E2A\u6708");
  const table = el(calendar, "table", "la-calendar");
  table.setAttribute("aria-label", `${monthLabel(model.month)}\u8BB0\u5F55\u65E5\u5386`);
  const thead = el(table, "thead"), tr = el(thead, "tr");
  for (const day of ["\u5468", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"]) {
    const th = el(tr, "th", "", day);
    th.scope = "col";
  }
  const tbody = el(table, "tbody");
  const focus = model.focusDate ?? (model.today.startsWith(model.month) ? model.today : `${model.month}-01`);
  for (const week of calendarMonth(model.month, model.config.timezone)) {
    const row = el(tbody, "tr");
    const weekCell = el(row, "th");
    weekCell.scope = "row";
    const weekExists = hasPeriod(periodFor("weekly", week.days[0], model.config));
    const wb = button(weekCell, week.key.slice(-2), "week", "la-week", `${week.key} \u5468\u7B14\u8BB0\uFF0C${weekExists ? "\u5DF2\u521B\u5EFA" : "\u5F85\u521B\u5EFA"}`);
    wb.dataset.week = week.key;
    wb.dataset.anchor = week.days[0];
    if (weekExists) wb.classList.add("has-note");
    for (const day of week.days) {
      const cell = el(row, "td");
      const exists = hasPeriod(periodFor("daily", day, model.config)), isToday = day === model.today;
      const label = `${day}${isToday ? "\uFF0C\u4ECA\u5929" : ""}\uFF0C${exists ? "\u5DF2\u6709\u8BB0\u5F55" : "\u5C1A\u672A\u521B\u5EFA"}`;
      const b = button(cell, "", "day", "la-day", label);
      b.dataset.date = day;
      b.tabIndex = day === focus ? 0 : -1;
      el(b, "span", "la-day-number", String(Number(day.slice(-2))));
      const dot = el(b, "span", "la-day-dot");
      dot.setAttribute("aria-hidden", "true");
      if (!day.startsWith(model.month)) b.classList.add("is-other-month");
      if (!exists) dot.classList.add("is-empty");
      if (exists) b.classList.add("has-note");
      if (isToday) {
        b.classList.add("is-today");
        b.setAttribute("aria-current", "date");
      }
    }
  }
  const legend = el(calendar, "p", "la-calendar-legend");
  el(legend, "span", "la-legend-dot");
  el(legend, "span", "", "\u5DF2\u6709\u8BB0\u5F55");
  el(legend, "span", "la-legend-today");
  el(legend, "span", "", "\u4ECA\u5929");
  const periods = el(calendar, "div", "la-periods");
  for (const kind of ["monthly", "quarterly", "yearly"]) {
    const p = periodFor(kind, `${model.month}-01`, model.config);
    const exists = hasPeriod(p);
    const b = button(periods, PERIOD_LABELS[kind], "period", "la-period-button");
    b.dataset.kind = kind;
    b.setAttribute("aria-label", `${p.key} \xB7 ${exists ? "\u6253\u5F00\u5DF2\u6709\u7B14\u8BB0" : "\u6309\u6A21\u677F\u521B\u5EFA"}`);
    el(b, "span", "la-period-state", exists ? "\u5DF2\u8BB0\u5F55 \u2197" : "\u5F85\u8BB0\u5F55 \uFF0B");
  }
  const keywords = section2(grid, "\u8FD1\u671F\u5173\u952E\u8BCD", "\u4ECE\u8BB0\u5F55\u91CC\uFF0C\u770B\u89C1\u7EBF\u7D22");
  if (model.latest?.display.keywords.length) {
    el(keywords, "p", "la-muted la-small", `${model.latest.month} \xB7 \u6765\u81EA AI \u8349\u7A3F\uFF0C\u7B49\u5F85\u4F60\u7684\u6838\u5BF9`);
    for (const [i, k] of model.latest.display.keywords.entries()) {
      const item = el(keywords, "article", "la-keyword");
      const title = el(item, "div", "la-keyword-title");
      el(title, "span", "la-keyword-index", `0${i + 1}`);
      openButton(title, k.keyword, model.latest.path, "la-text-button la-keyword-name");
      el(item, "p", "la-observation", k.observation);
      if (k.quote) el(item, "blockquote", "la-quote", k.quote);
      const sources = el(item, "div", "la-source-links");
      k.sources.forEach((s) => openButton(sources, `${s.label} \u2197`, s.path, "la-text-button la-source"));
    }
  } else {
    const empty = el(keywords, "div", "la-empty la-keywords-empty");
    el(empty, "div", "la-empty-mark", "\u201C");
    el(empty, "h3", "", "\u8BA9\u7EBF\u7D22\u4ECE\u539F\u6587\u91CC\u957F\u51FA\u6765");
    el(empty, "p", "", "\u6BCF\u6708\u6700\u591A\u4E09\u4E2A\u5173\u952E\u8BCD\u3002\u6BCF\u4E2A\u89C2\u5BDF\u90FD\u4FDD\u7559\u60C5\u5883\u548C\u539F\u6587\u51FA\u5904\uFF0C\u8D44\u6599\u4E0D\u8DB3\u65F6\u5C31\u7559\u767D\u3002");
    button(empty, "\u6574\u7406\u4E00\u6B21\u6708\u5EA6\u56DE\u987E  \u2197", "review", "la-text-button");
  }
  const bottomGrid = el(root, "div", "la-bottom-grid");
  const articles = section2(bottomGrid, "\u8FD1\u671F\u601D\u60F3", "\u7559\u4F4F\u4E00\u4E2A\u60F3\u6CD5");
  button(articles.querySelector(".la-card-head"), "\u67E5\u770B\u5168\u90E8 \u2197", "browse-thoughts", "la-text-button la-small");
  if (!model.thoughts.length) {
    const empty = el(articles, "div", "la-empty la-empty-compact");
    el(empty, "p", "", "\u4E00\u4E2A\u95EE\u9898\u3001\u4E00\u6BB5\u601D\u8003\uFF0C\u6216\u4E00\u7BC7\u6162\u6162\u5199\u7684\u6587\u7AE0\u3002");
    button(empty, "\u5199\u7B2C\u4E00\u7BC7\u601D\u60F3  \uFF0B", "thought", "la-text-button");
  }
  for (const note of model.thoughts) {
    const b = openButton(articles, "", note.path, "la-note-row");
    el(b, "span", "", basename(note.path));
    el(b, "span", "la-note-date", note.date ?? new Date(note.mtime).toLocaleDateString("zh-CN", { timeZone: model.config.timezone, month: "2-digit", day: "2-digit" }));
  }
  const reviews = section2(bottomGrid, "\u5468\u671F\u7B14\u8BB0", "\u505C\u4E0B\u6765\uFF0C\u518D\u5411\u524D");
  button(reviews.querySelector(".la-card-head"), "\u5168\u90E8\u7B14\u8BB0 \u2197", "browse-reviews", "la-text-button la-small");
  if (!model.reviews.length) {
    const empty = el(reviews, "div", "la-empty la-empty-compact");
    el(empty, "p", "", "\u56DE\u770B\u505A\u8FC7\u7684\u4E8B\uFF0C\u8BB0\u4E0B\u53D8\u5316\u548C\u63A5\u4E0B\u6765\u7684\u65B9\u5411\u3002");
    const b = button(empty, "\u6253\u5F00\u672C\u5468\u7B14\u8BB0  \u2197", "current-week", "la-text-button");
    b.dataset.date = model.today;
  }
  for (const note of model.reviews.slice(0, 4)) {
    const b = openButton(reviews, "", note.path, "la-note-row");
    el(b, "span", "", basename(note.path));
    el(b, "span", "la-note-date", "\u6253\u5F00 \u2197");
  }
  const footer = el(root, "footer", "la-footer");
  el(footer, "span", "", "\u8BB0\u5F55\u5C5E\u4E8E\u4F60\uFF0C\u56DE\u671B\u4E5F\u7531\u4F60\u5B9A\u4E49\u3002");
  const footActions = el(footer, "div", "la-inline");
  button(footActions, "\u4F7F\u7528\u8BF4\u660E", "help", "la-text-button");
  button(footActions, "\u8BBE\u7F6E", "settings", "la-text-button");
  button(footActions, "\u751F\u6210\u6216\u8865\u8DD1\u6708\u5EA6\u56DE\u987E", "review", "la-text-button");
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
          perform(actions.openFile(b.dataset.path));
          break;
        case "review":
          perform(actions.review());
          break;
        case "day":
          perform(actions.openPeriod("daily", b.dataset.date));
          break;
        case "week":
          perform(actions.openPeriod("weekly", b.dataset.anchor));
          break;
        case "period":
          perform(actions.openPeriod(b.dataset.kind, `${model.month}-01`));
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
    if (/^\d{4}-\d{2}$/.test(monthInput.value)) perform(actions.changeMonth(monthInput.value));
  };
  const keydown = (event) => {
    const target = event.target?.closest("[data-date]");
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
  monthInput.addEventListener("change", change);
  if (model.focusDate) root.querySelector(`[data-action="day"][data-date="${model.focusDate}"]`)?.focus();
  return () => {
    root.removeEventListener("click", click);
    root.removeEventListener("keydown", keydown);
    monthInput.removeEventListener("change", change);
  };
}

// src/obsidian/home-view.ts
var HOME_VIEW = "life-archive-home";
var HomeView = class extends import_obsidian2.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.month = today(plugin.config.timezone).slice(0, 7);
  }
  dispose;
  generation = 0;
  month;
  focusDate;
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
    this.generation++;
    this.dispose?.();
    this.contentEl.empty();
  }
  updateSyncState(status) {
    renderSyncState(this.contentEl, status);
  }
  async refresh() {
    const generation = ++this.generation;
    const latest = await this.plugin.latestReview();
    if (generation !== this.generation) return;
    const scroll = this.contentEl.scrollTop;
    const active = this.contentEl.ownerDocument.activeElement;
    const oldDate = active?.dataset.date, oldAction = active?.dataset.action;
    this.dispose?.();
    this.dispose = mountHome(this.contentEl, {
      today: today(this.plugin.config.timezone),
      month: this.month,
      config: this.plugin.config,
      paths: new Set(this.plugin.allPaths()),
      thoughts: this.plugin.index.thoughts(5),
      thoughtCount: this.plugin.index.thoughts(Number.MAX_SAFE_INTEGER).length,
      reviews: this.plugin.index.periodNotes(),
      latest: latest.review,
      reviewErrors: latest.errors,
      focusDate: this.focusDate
    }, {
      openPeriod: (kind, date) => this.plugin.notes.openPeriod(kind, date),
      openThought: () => this.plugin.newThought(),
      syncGitHub: () => this.plugin.syncGitHub(true),
      openFile: (path) => this.plugin.port.open(path),
      changeMonth: (month, focusDate) => {
        this.month = month;
        this.focusDate = focusDate;
        return this.refresh();
      },
      review: () => this.plugin.review(),
      browse: (kind) => this.plugin.browse(kind),
      settings: () => this.plugin.openSettings(),
      help: () => this.plugin.help(),
      error: (message) => new import_obsidian2.Notice(message)
    });
    const syncButton = this.contentEl.querySelector('[data-action="sync-github"]');
    if (syncButton) (0, import_obsidian2.setIcon)(syncButton, "refresh-cw");
    this.updateSyncState(this.plugin.syncState);
    this.contentEl.scrollTop = scroll;
    if (oldDate && !this.focusDate) this.contentEl.querySelector(`[data-date="${oldDate}"]`)?.focus({ preventScroll: true });
    else if (oldAction && ["prev", "next", "this-month"].includes(oldAction)) this.contentEl.querySelector(`[data-action="${oldAction}"]`)?.focus({ preventScroll: true });
  }
};

// src/obsidian/settings.ts
var import_obsidian4 = require("obsidian");

// node_modules/obsidian-daily-notes-interface/dist/index.mjs
var import_obsidian3 = require("obsidian");
function validateString(value) {
  return typeof value === "string" ? value : "";
}
function shouldUsePeriodicNotesSettings(periodicity) {
  return !!window.app.plugins.getPlugin("periodic-notes")?.settings?.[periodicity]?.enabled;
}
function getDailyNoteSettings() {
  try {
    const { internalPlugins, plugins } = window.app;
    if (shouldUsePeriodicNotesSettings("daily")) {
      const { format: format2, folder: folder2, template: template2 } = plugins.getPlugin("periodic-notes")?.settings?.daily || {};
      return {
        format: format2 || "YYYY-MM-DD",
        folder: validateString(folder2).trim(),
        template: validateString(template2).trim()
      };
    }
    const { folder, format, template } = internalPlugins.getPluginById("daily-notes")?.instance?.options || {};
    return {
      format: format || "YYYY-MM-DD",
      folder: validateString(folder).trim(),
      template: validateString(template).trim()
    };
  } catch (err) {
    console.info("No custom daily note settings found!", err);
  }
}
function getWeeklyNoteSettings() {
  try {
    const pluginManager = window.app.plugins;
    const calendarSettings = pluginManager.getPlugin("calendar")?.options;
    const periodicNotesSettings = pluginManager.getPlugin("periodic-notes")?.settings?.weekly;
    if (shouldUsePeriodicNotesSettings("weekly") && periodicNotesSettings) return {
      format: periodicNotesSettings.format || "gggg-[W]ww",
      folder: validateString(periodicNotesSettings.folder).trim(),
      template: validateString(periodicNotesSettings.template).trim()
    };
    const settings = calendarSettings || {};
    return {
      format: settings.weeklyNoteFormat || "gggg-[W]ww",
      folder: validateString(settings.weeklyNoteFolder).trim(),
      template: validateString(settings.weeklyNoteTemplate).trim()
    };
  } catch (err) {
    console.info("No custom weekly note settings found!", err);
  }
}
function getMonthlyNoteSettings() {
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("monthly") && pluginManager.getPlugin("periodic-notes")?.settings?.monthly || {};
    return {
      format: settings.format || "YYYY-MM",
      folder: validateString(settings.folder).trim(),
      template: validateString(settings.template).trim()
    };
  } catch (err) {
    console.info("No custom monthly note settings found!", err);
  }
}
function getQuarterlyNoteSettings() {
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("quarterly") && pluginManager.getPlugin("periodic-notes")?.settings?.quarterly || {};
    return {
      format: settings.format || "YYYY-[Q]Q",
      folder: validateString(settings.folder).trim(),
      template: validateString(settings.template).trim()
    };
  } catch (err) {
    console.info("No custom quarterly note settings found!", err);
  }
}
function getYearlyNoteSettings() {
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("yearly") && pluginManager.getPlugin("periodic-notes")?.settings?.yearly || {};
    return {
      format: settings.format || "YYYY",
      folder: validateString(settings.folder).trim(),
      template: validateString(settings.template).trim()
    };
  } catch (err) {
    console.info("No custom yearly note settings found!", err);
  }
}

// src/obsidian/integrations.ts
var GETTERS = { daily: getDailyNoteSettings, weekly: getWeeklyNoteSettings, monthly: getMonthlyNoteSettings, quarterly: getQuarterlyNoteSettings, yearly: getYearlyNoteSettings };
var FORMATS = { daily: ["YYYY-MM-DD"], weekly: ["gggg-[W]ww", "GGGG-[W]WW"], monthly: ["YYYY-MM"], quarterly: ["YYYY-[Q]Q"], yearly: ["YYYY"] };
function importedSettings(current) {
  let config = loadConfig(current);
  const messages = [];
  for (const kind of Object.keys(GETTERS)) {
    try {
      const settings = GETTERS[kind]();
      if (!settings?.folder) continue;
      if (!FORMATS[kind].includes(settings.format ?? "")) {
        messages.push(`${kind}\uFF1A\u73B0\u6709\u547D\u540D\u683C\u5F0F\u4E0D\u7B26\u5408\u56FA\u5B9A\u5468\u671F\u7EA6\u5B9A\uFF0C\u4FDD\u7559\u672C\u63D2\u4EF6\u914D\u7F6E\u3002`);
        continue;
      }
      const folder = settings.folder.replace(/\/+$/, "");
      const template = settings.template ? settings.template.endsWith(".md") ? settings.template : `${settings.template}.md` : config.templates[kind];
      config = loadConfig({ ...config, paths: { ...config.paths, [kind]: folder }, templates: { ...config.templates, [kind]: template } });
      messages.push(`${folder}\uFF1A\u5DF2\u5BFC\u5165\u76EE\u5F55\u548C\u6A21\u677F\uFF0C\u539F\u63D2\u4EF6\u8BBE\u7F6E\u4FDD\u6301\u4E0D\u53D8\u3002`);
    } catch {
      messages.push(`${kind}\uFF1A\u914D\u7F6E\u5B58\u5728\u51B2\u7A81\uFF0C\u4FDD\u7559\u672C\u63D2\u4EF6\u914D\u7F6E\u3002`);
    }
  }
  if (!messages.length) messages.push("\u6CA1\u6709\u627E\u5230\u53EF\u5BFC\u5165\u7684\u72EC\u7ACB\u5468\u671F\u76EE\u5F55\uFF0C\u7EE7\u7EED\u4F7F\u7528\u5F53\u524D\u914D\u7F6E\u3002");
  return { config, messages };
}

// src/obsidian/settings.ts
var ArchiveSettings = class extends import_obsidian4.PluginSettingTab {
  constructor(archive) {
    super(archive.app, archive);
    this.archive = archive;
  }
  display() {
    const { containerEl: root } = this;
    root.empty();
    root.createEl("h2", { text: "\u4EBA\u751F\u5B58\u6863" });
    root.createEl("p", { text: "\u65E5\u5E38\u8BB0\u5F55\u3001\u6708\u5EA6\u56DE\u671B\uFF0C\u4EE5\u53CA\u5C5E\u4E8E\u4F60\u7684\u7B14\u8BB0\u5E93\u3002\u76EE\u5F55\u4E0E\u6A21\u677F\u4FEE\u6539\u540E\u70B9\u51FB\u300C\u4FDD\u5B58\u8BBE\u7F6E\u300D\u3002", cls: "setting-item-description" });
    const draft = structuredClone(this.archive.config);
    new import_obsidian4.Setting(root).setName("\u542F\u52A8\u65F6\u6253\u5F00\u4EBA\u751F\u5B58\u6863").addToggle((t) => t.setValue(draft.openOnStartup).onChange((v) => {
      draft.openOnStartup = v;
    }));
    new import_obsidian4.Setting(root).setName("\u65E5\u5386\u65F6\u533A").setDesc("IANA \u65F6\u533A\u540D\u79F0\uFF0C\u4F8B\u5982 Asia/Shanghai\u3002\u5468\u671F\u6309\u6B64\u65F6\u533A\u7684\u81EA\u7136\u65E5\u5386\u8BA1\u7B97\u3002").addText((t) => t.setValue(draft.timezone).onChange((v) => {
      draft.timezone = v.trim();
    }));
    root.createEl("h3", { text: "\u7B14\u8BB0\u76EE\u5F55" });
    if (PERIOD_KINDS.every((kind) => draft.paths[kind] === draft.paths.daily)) {
      new import_obsidian4.Setting(root).setName("\u5468\u671F\u7B14\u8BB0").addText((t) => t.setValue(draft.paths.daily).onChange((value) => {
        for (const kind of PERIOD_KINDS) draft.paths[kind] = value;
      }));
    } else {
      for (const kind of PERIOD_KINDS) new import_obsidian4.Setting(root).setName(PERIOD_LABELS[kind]).addText((t) => t.setValue(draft.paths[kind]).onChange((value) => {
        draft.paths[kind] = value;
      }));
    }
    const names = { thoughts: "\u601D\u60F3\u6587\u7AE0", ai: "AI \u6708\u5EA6\u590D\u76D8", templates: "\u6A21\u677F\u76EE\u5F55" };
    for (const kind of Object.keys(names)) new import_obsidian4.Setting(root).setName(names[kind]).addText((t) => t.setValue(draft.paths[kind]).onChange((value) => {
      const old = draft.paths[kind];
      draft.paths[kind] = value;
      if (kind === "templates") for (const templateKind of Object.keys(draft.templates)) {
        if (draft.templates[templateKind].startsWith(`${old}/`)) draft.templates[templateKind] = `${value}/${draft.templates[templateKind].slice(old.length + 1)}`;
      }
    }));
    root.createEl("p", { text: "\u4FEE\u6539\u76EE\u5F55\u4E0D\u4F1A\u642C\u52A8\u5DF2\u6709\u7B14\u8BB0\uFF1B\u8BF7\u5148\u5728 Obsidian \u4E2D\u79FB\u52A8\u9700\u8981\u8FC1\u79FB\u7684\u5185\u5BB9\u3002\u4E0D\u540C\u7528\u9014\u7684\u76EE\u5F55\u4E0D\u80FD\u76F8\u4E92\u5305\u542B\u3002", cls: "setting-item-description" });
    root.createEl("h3", { text: "\u7B14\u8BB0\u6A21\u677F" });
    for (const kind of Object.keys(TEMPLATE_NAMES)) new import_obsidian4.Setting(root).setName(kind === "thought" ? TEMPLATE_NAMES.thought : PERIOD_LABELS[kind]).addText((t) => t.setValue(draft.templates[kind]).onChange((value) => {
      draft.templates[kind] = value;
    }));
    root.createEl("p", { text: "\u652F\u6301 {{date}}\u3001{{title}}\u3001{{period}}\u3001{{start}}\u3001{{end}}\u3001{{monthNote}}\u3001{{aiNote}}\u3002\u6A21\u677F\u4FDD\u5B58\u5728\u7B14\u8BB0\u5E93\u4E2D\uFF0C\u53EF\u76F4\u63A5\u7F16\u8F91\u3002", cls: "setting-item-description" });
    root.createEl("h3", { text: "GitHub \u540C\u6B65" });
    new import_obsidian4.Setting(root).setName("\u79C1\u6709\u4ED3\u5E93\u514B\u9686\u5730\u5740").setDesc("\u6253\u5F00 Vault \u65F6\u540C\u6B65\uFF0C\u4FDD\u5B58\u540E\u7B49\u5F85 30 \u79D2\u5408\u5E76\u540C\u6B65\u3002\u7559\u7A7A\u53EF\u505C\u7528\u3002").addText((t) => t.setValue(draft.githubRemote).onChange((value) => {
      draft.githubRemote = value.trim();
    }));
    root.createEl("h3", { text: "AI \u6708\u5EA6\u56DE\u987E" });
    new import_obsidian4.Setting(root).setName("Node.js \u7A0B\u5E8F\u8DEF\u5F84").setDesc("\u7528\u4E8E\u8FD0\u884C\u72EC\u7ACB\u590D\u76D8\u5DE5\u5177\u3002\u9ED8\u8BA4\u67E5\u627E node\uFF1B\u684C\u9762\u73AF\u5883\u627E\u4E0D\u5230\u65F6\u53EF\u586B\u5199\u5B8C\u6574\u8DEF\u5F84\u3002").addText((t) => t.setValue(draft.nodePath).onChange((value) => {
      draft.nodePath = value.trim();
    }));
    new import_obsidian4.Setting(root).setName("Codex \u7A0B\u5E8F\u8DEF\u5F84").setDesc("\u9ED8\u8BA4\u81EA\u52A8\u67E5\u627E codex\uFF1B\u4E5F\u53EF\u586B\u5199\u672C\u673A\u7684\u5B8C\u6574\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84\u3002").addText((t) => t.setValue(draft.codexPath).onChange((value) => {
      draft.codexPath = value.trim();
    }));
    new import_obsidian4.Setting(root).setName("\u989D\u5916\u5141\u8BB8\u8BFB\u53D6\u7684\u76EE\u5F55").setDesc("\u6BCF\u884C\u4E00\u4E2A\u76F8\u5BF9\u76EE\u5F55\uFF1B\u4ECD\u9075\u5B88\u6BCF\u7BC7\u7B14\u8BB0\u7684 ai \u6743\u9650\uFF0C\u4EC5\u5728\u6309\u6708 date \u6216\u663E\u5F0F\u9009\u6750\u65F6\u7EB3\u5165\u3002").addTextArea((t) => t.setValue(draft.extraReadFolders.join("\n")).onChange((value) => {
      draft.extraReadFolders = value.split("\n").map((s) => s.trim()).filter(Boolean);
    }));
    new import_obsidian4.Setting(root).setName("\u4FDD\u5B58\u8BBE\u7F6E").setDesc("\u6821\u9A8C\u8DEF\u5F84\u540E\u751F\u6548\uFF1B\u65B0\u76EE\u5F55\u4E0E\u7F3A\u5931\u6A21\u677F\u4F1A\u81EA\u52A8\u8865\u9F50\uFF0C\u5DF2\u6709\u6587\u4EF6\u4FDD\u7559\u3002").addButton((b) => b.setButtonText("\u4FDD\u5B58\u8BBE\u7F6E").setCta().onClick(async () => {
      try {
        await this.archive.updateConfig(draft);
        new import_obsidian4.Notice("\u4EBA\u751F\u5B58\u6863\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
        this.display();
      } catch (e) {
        new import_obsidian4.Notice(e instanceof Error ? e.message : "\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25");
      }
    }));
    root.createEl("h3", { text: "\u590D\u7528\u5DF2\u6709\u5468\u671F\u8BBE\u7F6E" });
    new import_obsidian4.Setting(root).setName("\u5BFC\u5165 Daily Notes / Periodic Notes / Calendar \u8BBE\u7F6E").setDesc("\u4EC5\u5BFC\u5165\u7B26\u5408\u5F53\u524D\u65E5\u671F\u547D\u540D\u7EA6\u5B9A\u7684\u72EC\u7ACB\u76EE\u5F55\u548C\u666E\u901A\u6A21\u677F\uFF1B\u4E0D\u4F1A\u6267\u884C\u6A21\u677F\u811A\u672C\u6216\u6539\u52A8\u539F\u63D2\u4EF6\u3002").addButton((b) => b.setButtonText("\u67E5\u770B\u53EF\u5BFC\u5165\u914D\u7F6E").onClick(() => {
      const result = importedSettings(this.archive.config), modal = new import_obsidian4.Modal(this.app);
      modal.titleEl.setText("\u5BFC\u5165\u5468\u671F\u7B14\u8BB0\u914D\u7F6E");
      const list = modal.contentEl.createEl("ul");
      result.messages.forEach((text) => list.createEl("li", { text }));
      modal.contentEl.createEl("button", { text: "\u5E94\u7528\u5BFC\u5165\u7ED3\u679C", cls: "mod-cta" }).addEventListener("click", () => {
        void this.archive.updateConfig(result.config).then(() => {
          new import_obsidian4.Notice("\u517C\u5BB9\u7684\u5468\u671F\u8BBE\u7F6E\u5DF2\u5BFC\u5165");
          modal.close();
          this.display();
        }).catch((e) => new import_obsidian4.Notice(e.message));
      });
      modal.open();
    }));
  }
};

// src/obsidian/modals.ts
var import_obsidian5 = require("obsidian");
var ThoughtModal = class extends import_obsidian5.Modal {
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
        await this.plugin.notes.openThought(title, today(this.plugin.config.timezone));
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
var NotesModal = class extends import_obsidian5.FuzzySuggestModal {
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
    return note.path.replace(/\.md$/, "");
  }
  onChooseItem(note) {
    void this.openNote(note.path).catch((e) => new import_obsidian5.Notice(e instanceof Error ? e.message : "\u65E0\u6CD5\u6253\u5F00\u7B14\u8BB0"));
  }
};
var ReviewModal = class extends import_obsidian5.Modal {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
    this.month = previousMonth(plugin.config.timezone);
  }
  month;
  prepared;
  phase = "idle";
  alive = true;
  onOpen() {
    this.modalEl.addClass("la-review-modal");
    this.titleEl.setText("\u6574\u7406\u4E00\u6B21\u6708\u5EA6\u56DE\u987E");
    this.draw();
  }
  draw(errorMessage) {
    const root = this.contentEl;
    root.empty();
    root.createEl("p", { text: "\u5148\u770B\u672C\u6708\u4F1A\u7528\u5230\u54EA\u4E9B\u8D44\u6599\uFF0C\u518D\u4EA4\u7ED9 Codex \u6574\u7406\u3002\u539F\u59CB\u5468\u671F\u7B14\u8BB0\u548C\u601D\u60F3\u6587\u7AE0\u53EA\u8BFB\uFF0C\u7ED3\u679C\u4FDD\u5B58\u4E3A\u72EC\u7ACB\u7684 AI \u8349\u7A3F\u3002" });
    new import_obsidian5.Setting(root).setName("\u590D\u76D8\u6708\u4EFD").setDesc("\u9ED8\u8BA4\u56DE\u987E\u4E0A\u4E00\u81EA\u7136\u6708\uFF0C\u4E5F\u53EF\u4EE5\u8865\u8DD1\u5176\u4ED6\u6708\u4EFD\u3002").addText((t) => {
      t.inputEl.type = "month";
      t.setValue(this.month).setDisabled(this.phase !== "idle");
      t.onChange((value) => {
        this.month = value;
      });
    });
    const state = root.createDiv("la-review-state");
    state.setAttribute("aria-live", "polite");
    if (errorMessage) {
      const error = state.createEl("p", { text: errorMessage, cls: "la-error" });
      error.setAttribute("role", "alert");
    }
    if (this.phase === "preparing") state.createEl("p", { text: "\u6B63\u5728\u6309\u6743\u9650\u7B5B\u9009\u8D44\u6599\u2026\u2026" });
    if (this.phase === "generating") state.createEl("p", { text: "Codex \u6B63\u5728\u751F\u6210\u8349\u7A3F\u3002\u4F60\u53EF\u4EE5\u5173\u95ED\u6B64\u7A97\u53E3\u7EE7\u7EED\u5199\u4F5C\uFF0C\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u9996\u9875\u3002" });
    if (this.prepared && ["ready", "done"].includes(this.phase)) {
      state.createEl("p", { text: `\u5DF2\u7EB3\u5165 ${this.prepared.sources.length} \u7BC7\u8D44\u6599\uFF0C\u65E5\u8BB0\u8986\u76D6 ${this.prepared.coverage.recordedDays} / ${this.prepared.coverage.totalDays} \u5929\u3002` });
      const list = state.createEl("ul", { cls: "la-material-list" });
      for (const path of this.prepared.sources) {
        const li = list.createEl("li");
        const link = li.createEl("button", { text: path.replace(/\.md$/, ""), cls: "la-text-button" });
        link.addEventListener("click", () => {
          void this.plugin.port.open(path).catch((e) => new import_obsidian5.Notice(e.message));
        });
      }
      if (!this.prepared.sources.length) state.createEl("p", { text: "\u6CA1\u6709\u53EF\u7528\u6750\u6599\u65F6\u53EA\u8BB0\u5F55\u8D44\u6599\u4E0D\u8DB3\uFF0C\u4E0D\u8C03\u7528\u6A21\u578B\uFF0C\u4E5F\u4E0D\u751F\u6210\u89C2\u5BDF\u3002", cls: "la-muted" });
      const missing = [...this.prepared.coverage.excluded, ...this.prepared.coverage.unreadable];
      if (missing.length) {
        const details = state.createEl("details");
        details.createEl("summary", { text: `${missing.length} \u9879\u672A\u7EB3\u5165\uFF0C\u5C55\u5F00\u67E5\u770B\u539F\u56E0` });
        const ul = details.createEl("ul");
        for (const item of missing) ul.createEl("li", { text: `${item.path}\uFF1A${item.reason}` });
      }
    }
    const buttons = root.createDiv("modal-button-container");
    if (this.phase === "idle") {
      const prepare = buttons.createEl("button", { text: "\u67E5\u770B\u5C06\u4F7F\u7528\u7684\u8D44\u6599", cls: "mod-cta" });
      prepare.addEventListener("click", () => {
        void this.prepare();
      });
    } else if (this.phase === "ready") {
      let accepted = !this.prepared?.sources.length;
      const explanation = root.createEl("p", { text: "\u5F53\u524D\u6309\u5E94\u7528\u89C4\u5219\u7B5B\u9009\u8F93\u5165\u5E76\u5173\u95ED Codex \u7684\u6587\u4EF6\u3001\u6D4F\u89C8\u548C\u5916\u90E8\u5DE5\u5177\uFF0C\u5C1A\u672A\u9A8C\u8BC1\u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u7684\u8BFB\u53D6\u9694\u79BB\u3002\u9996\u6B21\u5EFA\u8BAE\u5148\u5728\u7B14\u8BB0\u5E93\u526F\u672C\u8BD5\u8DD1\u3002", cls: "setting-item-description" });
      buttons.before(explanation);
      const run = buttons.createEl("button", { text: this.prepared?.sources.length ? "\u751F\u6210 AI \u8349\u7A3F" : "\u8BB0\u5F55\u8D44\u6599\u4E0D\u8DB3", cls: "mod-cta" });
      run.disabled = !accepted;
      if (this.prepared?.sources.length) {
        const consent = new import_obsidian5.Setting(root).setName("\u540C\u610F\u672C\u6B21\u5C06\u6240\u5217\u8D44\u6599\u4EA4\u7ED9 Codex").addToggle((t) => t.setValue(false).onChange((value) => {
          accepted = value;
          run.disabled = !accepted;
        }));
        buttons.before(consent.settingEl);
      }
      run.addEventListener("click", () => {
        if (accepted) void this.generate();
      });
      const reset = buttons.createEl("button", { text: "\u91CD\u65B0\u9009\u6708\u4EFD" });
      reset.addEventListener("click", () => {
        void this.reset();
      });
    }
    if (this.phase === "done") buttons.createEl("button", { text: "\u5B8C\u6210", cls: "mod-cta" }).addEventListener("click", () => this.close());
  }
  async prepare() {
    try {
      assertMonth(this.month);
    } catch {
      this.draw("\u8BF7\u9009\u62E9\u6709\u6548\u6708\u4EFD");
      return;
    }
    this.phase = "preparing";
    this.draw();
    try {
      const prepared = await this.plugin.runCli(["prepare", "--month", this.month]);
      this.prepared = prepared;
      if (!this.alive) {
        await this.plugin.runCli(["cancel", "--month", prepared.month, "--run", prepared.id]);
        return;
      }
      this.phase = "ready";
      this.draw();
    } catch (e) {
      this.phase = "idle";
      if (this.alive) this.draw(e instanceof Error ? e.message : "\u51C6\u5907\u5931\u8D25");
    }
  }
  async generate() {
    if (!this.prepared) return;
    this.phase = "generating";
    this.draw();
    try {
      const result = await this.plugin.runCli(["generate", "--month", this.month, "--run", this.prepared.id, "--allow-app-layer"]);
      this.phase = "done";
      this.prepared = void 0;
      this.plugin.requestRefresh();
      new import_obsidian5.Notice(result.status === "insufficient" ? "\u5DF2\u8BB0\u5F55\u672C\u6708\u8D44\u6599\u4E0D\u8DB3" : "AI \u6708\u5EA6\u590D\u76D8\u8349\u7A3F\u5DF2\u751F\u6210");
      if (this.alive) {
        this.close();
        await this.plugin.port.open(result.targetPath);
      }
    } catch (e) {
      this.phase = "idle";
      this.prepared = void 0;
      if (this.alive) this.draw(e instanceof Error ? e.message : "\u751F\u6210\u5931\u8D25\uFF0C\u8FD0\u884C\u8BB0\u5F55\u5DF2\u4FDD\u7559");
      else new import_obsidian5.Notice(e instanceof Error ? e.message : "\u590D\u76D8\u751F\u6210\u5931\u8D25");
    }
  }
  async reset() {
    if (this.prepared) await this.plugin.runCli(["cancel", "--month", this.month, "--run", this.prepared.id]);
    this.prepared = void 0;
    this.phase = "idle";
    this.draw();
  }
  onClose() {
    this.alive = false;
    if (this.prepared && this.phase === "ready") void this.plugin.runCli(["cancel", "--month", this.month, "--run", this.prepared.id]).catch(() => {
    });
    this.contentEl.empty();
  }
};
var HelpModal = class extends import_obsidian5.Modal {
  onOpen() {
    this.titleEl.setText("\u4EBA\u751F\u5B58\u6863 \xB7 \u4F7F\u7528\u8BF4\u660E");
    const content = this.contentEl;
    const steps = [
      ["\u6253\u5F00\u5468\u671F\u7B14\u8BB0", "\u70B9\u51FB\u65E5\u671F\u3001\u5468\u53F7\u6216\u6708\uFF0F\u5B63\uFF0F\u5E74\u6309\u94AE\uFF0C\u6253\u5F00\u5BF9\u5E94\u5468\u671F\u7684\u7B14\u8BB0\u3002\u5DF2\u6709\u8BB0\u5F55\u7684\u65E5\u671F\u4F1A\u663E\u793A\u5706\u70B9\u3002"],
      ["\u7559\u4F4F\u601D\u60F3", "\u70B9\u51FB\u300C\u65B0\u5EFA\u601D\u60F3\u6587\u7AE0\u300D\uFF0C\u8F93\u5165\u6807\u9898\u540E\u7EE7\u7EED\u5728 Obsidian \u4E2D\u5199\u4F5C\u3002date \u7528\u4E8E\u786E\u5B9A\u6587\u7AE0\u7684\u5199\u4F5C\u6708\u4EFD\u3002"],
      ["\u6708\u5EA6 AI \u56DE\u987E", "\u70B9\u51FB\u300C\u51C6\u5907\u6708\u5EA6\u590D\u76D8\u300D\uFF0C\u67E5\u770B\u83B7\u51C6\u8D44\u6599\uFF0C\u518D\u8FD0\u884C Codex\u3002\u5173\u952E\u8BCD\u548C\u77ED\u5F15\u90FD\u53EF\u70B9\u51FB\u56DE\u5230\u539F\u6587\u3002"],
      ["\u63A7\u5236 AI \u6743\u9650", "\u5728 YAML \u4E2D\u5199 ai: off \u53EF\u5173\u95ED\u8BE5\u7BC7\u8D44\u6599\u7684 AI \u8BFB\u53D6\u3002ai: read \u5141\u8BB8\u8BFB\u53D6\uFF1B\u5468\u671F\u7B14\u8BB0\u548C\u601D\u60F3\u5373\u4F7F\u5199 ai: write\uFF0C\u4ECD\u53EA\u8BFB\u3002"],
      ["\u4FDD\u7559\u81EA\u5DF1\u7684\u6279\u6CE8", "AI \u590D\u76D8\u4E2D\u7684\u300C\u7528\u6237\u6279\u6CE8\u300D\u548C\u300C\u786E\u8BA4\u8BB0\u5F55\u300D\u7531\u4F60\u586B\u5199\u3002\u91CD\u8DD1\u53EA\u66FF\u6362\u6807\u8BB0\u5185\u7684 AI \u5185\u5BB9\u3002"],
      ["\u5B9A\u65F6\u4E0E\u8865\u8DD1", "\u5B89\u88C5\u76EE\u5F55\u9644\u5E26\u72EC\u7ACB\u7684 review.cjs\u3002\u53EF\u4EE5\u7531 Codex \u5B9A\u65F6\u8C03\u7528\uFF1B\u8BBE\u5907\u7761\u7720\u3001\u4F11\u7720\u8865\u507F\u548C\u7CFB\u7EDF\u7EA7\u9694\u79BB\u9A8C\u8BC1\u5B8C\u6210\u524D\uFF0C\u5E94\u5148\u624B\u52A8\u8BD5\u8DD1\u3002\u5177\u4F53\u547D\u4EE4\u89C1\u53D1\u884C\u5305\u4E2D\u7684\u81EA\u52A8\u5316\u8BF4\u660E\u3002"]
    ];
    for (const [title, text] of steps) {
      content.createEl("h3", { text: title });
      content.createEl("p", { text });
    }
  }
};

// src/obsidian/node-runtime.ts
var import_promises = require("node:fs/promises");
var import_node_fs = require("node:fs");
var import_node_os = require("node:os");
var import_node_path = require("node:path");
async function nodeExecutable(requested = "node") {
  if (requested !== "node") return requested;
  const candidates = process.platform === "win32" ? [] : [(0, import_node_path.join)((0, import_node_os.homedir)(), ".local/bin/node"), "/opt/homebrew/bin/node", "/usr/local/bin/node", "/usr/bin/node"];
  for (const candidate of candidates) {
    try {
      await (0, import_promises.access)(candidate, import_node_fs.constants.X_OK);
      return candidate;
    } catch {
    }
  }
  return "node";
}

// src/obsidian/github-sync.ts
var import_node_child_process = require("node:child_process");
var import_promises2 = require("node:fs/promises");
var import_node_path2 = require("node:path");
var import_node_util = require("node:util");
var execute = (0, import_node_util.promisify)(import_node_child_process.execFile);
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
  const metadata = await (0, import_promises2.lstat)((0, import_node_path2.join)(root, ".git")).catch((error) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (metadata && !metadata.isDirectory()) throw new Error("Git \u5143\u6570\u636E\u4E0D\u662F\u666E\u901A\u76EE\u5F55");
  if (!metadata) await git(["init", "--initial-branch=main"], "\u65E0\u6CD5\u521D\u59CB\u5316\u6587\u4EF6\u5E93\u7684 Git \u4ED3\u5E93");
  const base = await git(["rev-parse", "--show-toplevel"], "\u65E0\u6CD5\u5B9A\u4F4D Git \u4ED3\u5E93");
  if (await (0, import_promises2.realpath)(base.output) !== await (0, import_promises2.realpath)(root)) throw new Error("Git \u4ED3\u5E93\u6839\u76EE\u5F55\u4E0E Vault \u4E0D\u4E00\u81F4");
  const branch = await git(["branch", "--show-current"], "\u65E0\u6CD5\u8BFB\u53D6\u5F53\u524D Git \u5206\u652F");
  if (branch.output !== "main") throw new Error("\u8BF7\u5207\u6362\u5230 main \u5206\u652F\u540E\u540C\u6B65");
  const origins = await git(["remote"], "\u65E0\u6CD5\u8BFB\u53D6 Git \u8FDC\u7AEF");
  if (!origins.output.split("\n").includes("origin")) {
    const head = await git(["rev-parse", "--quiet", "--verify", "HEAD"], "\u65E0\u6CD5\u8BFB\u53D6\u63D0\u4EA4\u5386\u53F2", [0, 1]);
    if (head.code === 0) throw new Error("\u5DF2\u6709 Git \u5386\u53F2\uFF0C\u9700\u5148\u6838\u5BF9 origin");
    await git(["remote", "add", "origin", remote], "\u65E0\u6CD5\u8BBE\u7F6E GitHub \u8FDC\u7AEF");
  }
  for (const mode of [[], ["--push"]]) {
    const urls = await git(["remote", "get-url", ...mode, "--all", "origin"], "\u65E0\u6CD5\u8BFB\u53D6 origin \u5730\u5740");
    if (urls.output !== remote) throw new Error("Git \u7684 origin \u4E0E\u4EBA\u751F\u5B58\u6863\u8BBE\u7F6E\u4E0D\u4E00\u81F4");
  }
  await git(["fetch", "--prune", "origin"], "\u65E0\u6CD5\u8FDE\u63A5\u79C1\u6709\u4ED3\u5E93\uFF0C\u8BF7\u68C0\u67E5 GitHub \u767B\u5F55\u548C\u7F51\u7EDC");
  await git(["add", "--all"], "\u65E0\u6CD5\u6682\u5B58 Vault \u6587\u4EF6");
  const changes = await git(["diff", "--cached", "--quiet"], "\u65E0\u6CD5\u68C0\u67E5 Vault \u53D8\u66F4", [0, 1]);
  if (changes.code === 1) await git(["commit", "-m", "\u540C\u6B65\u4EBA\u751F\u5B58\u6863"], "\u65E0\u6CD5\u63D0\u4EA4 Vault \u53D8\u66F4\uFF0C\u8BF7\u68C0\u67E5 Git \u4F5C\u8005\u8BBE\u7F6E");
  const local = await git(["rev-parse", "--quiet", "--verify", "HEAD"], "\u65E0\u6CD5\u8BFB\u53D6\u672C\u5730\u63D0\u4EA4", [0, 1]);
  const upstream = await git(["rev-parse", "--quiet", "--verify", "refs/remotes/origin/main"], "\u65E0\u6CD5\u8BFB\u53D6\u8FDC\u7AEF\u63D0\u4EA4", [0, 1]);
  if (upstream.code === 0) {
    await git(["merge", "--ff-only", upstream.output], "\u672C\u5730\u4E0E GitHub \u5206\u53C9\uFF0C\u6216\u6709\u672A\u4FDD\u5B58\u53D8\u66F4\u3002\u53CC\u65B9\u6587\u4EF6\u548C\u63D0\u4EA4\u5DF2\u4FDD\u7559");
  }
  if (local.code === 0 && local.output !== upstream.output) {
    await git(["push", "origin", "HEAD:refs/heads/main"], "\u63A8\u9001\u672A\u5B8C\u6210\uFF0C\u53EF\u80FD\u6709\u5E76\u53D1\u66F4\u65B0\u6216\u8FDE\u63A5\u4E2D\u65AD\u3002\u8BF7\u91CD\u8BD5\u540C\u6B65");
  }
}

// src/main.ts
var LifeArchive = class extends import_obsidian6.Plugin {
  config;
  port;
  notes;
  index;
  reviewCache = /* @__PURE__ */ new Map();
  refreshTimer = null;
  children = /* @__PURE__ */ new Set();
  ready = false;
  syncTimer;
  syncJob;
  syncState = { state: "idle" };
  syncFeedbackTimer;
  async onload() {
    try {
      this.config = loadConfig(await this.loadData() ?? {});
    } catch (e) {
      new import_obsidian6.Notice(`\u4EBA\u751F\u5B58\u6863\u914D\u7F6E\u65E0\u6548\uFF1A${e instanceof Error ? e.message : "\u8BF7\u68C0\u67E5\u8BBE\u7F6E"}`);
      throw e;
    }
    this.port = new ObsidianVault(this.app);
    this.notes = new NoteService(this.config, this.port);
    this.index = new ArchiveIndex(this.config);
    this.registerView(HOME_VIEW, (leaf) => new HomeView(leaf, this));
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
      void this.notes.openPeriod(kind, today(this.config.timezone)).catch((e) => new import_obsidian6.Notice(e.message));
    } });
    this.addCommand({ id: "new-thought", name: "\u65B0\u5EFA\u601D\u60F3\u6587\u7AE0", callback: () => this.newThought() });
    this.addCommand({ id: "monthly-ai-review", name: "\u751F\u6210\u6216\u8865\u8DD1 AI \u6708\u5EA6\u590D\u76D8", callback: () => this.review() });
    this.addCommand({ id: "browse-reviews", name: "\u6D4F\u89C8\u5468\u671F\u7B14\u8BB0", callback: () => this.browse("reviews") });
    this.addCommand({ id: "browse-thoughts", name: "\u6D4F\u89C8\u601D\u60F3\u6587\u7AE0", callback: () => this.browse("thoughts") });
    this.addCommand({ id: "initialize", name: "\u8865\u9F50\u76EE\u5F55\u4E0E\u6A21\u677F", callback: () => {
      void this.notes.initialize().then(() => new import_obsidian6.Notice("\u76EE\u5F55\u4E0E\u6A21\u677F\u5DF2\u68C0\u67E5\uFF0C\u5DF2\u6709\u6587\u4EF6\u4FDD\u7559")).catch((e) => new import_obsidian6.Notice(e.message));
    } });
    this.registerObsidianProtocolHandler("life-archive", async (params) => {
      if (params.action === "review") this.review();
      else if (params.action === "period" && PERIOD_KINDS.includes(params.kind)) await this.notes.openPeriod(params.kind, params.date || today(this.config.timezone)).catch((e) => new import_obsidian6.Notice(e.message));
      else await this.openHome();
    });
    const update = (file) => {
      if (!(file instanceof import_obsidian6.TFile) || file.extension !== "md") return;
      this.index.upsert(this.port.entry(file));
      this.reviewCache.delete(file.path);
      if (this.index.has(file.path)) this.requestRefresh();
    };
    this.registerEvent(this.app.vault.on("create", update));
    this.registerEvent(this.app.vault.on("modify", update));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      const relevant = this.index.has(file.path);
      this.index.remove(file.path);
      this.reviewCache.delete(file.path);
      if (relevant) this.requestRefresh();
    }));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      const relevant = this.index.has(oldPath);
      this.index.remove(oldPath);
      this.reviewCache.delete(oldPath);
      update(file);
      if (relevant) this.requestRefresh();
    }));
    this.registerEvent(this.app.vault.on("create", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.vault.on("modify", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.vault.on("delete", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.vault.on("rename", () => this.scheduleGitHubSync()));
    this.registerEvent(this.app.metadataCache.on("changed", update));
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
    let lastDay = today(this.config.timezone);
    this.registerInterval(window.setInterval(() => {
      const day = today(this.config.timezone);
      if (day !== lastDay) {
        lastDay = day;
        this.requestRefresh();
      }
    }, 6e4));
    this.register(() => {
      if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
      for (const child of this.children) child.kill("SIGTERM");
      this.children.clear();
    });
    this.app.workspace.onLayoutReady(() => {
      void this.initialize().catch((e) => new import_obsidian6.Notice(`\u4EBA\u751F\u5B58\u6863\u521D\u59CB\u5316\u5931\u8D25\uFF1A${e.message}`));
    });
  }
  async initialize() {
    await this.notes.initialize();
    this.index.reset(this.app.vault.getMarkdownFiles().map((file) => this.port.entry(file)));
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
    if (status.state === "success") {
      this.syncFeedbackTimer = window.setTimeout(() => this.setSyncState({ state: "idle" }), 1800);
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
    if (!remote || !(adapter instanceof import_obsidian6.FileSystemAdapter)) {
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
  requestRefresh() {
    if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
    this.refreshTimer = window.setTimeout(() => {
      this.refreshTimer = null;
      for (const leaf of this.app.workspace.getLeavesOfType(HOME_VIEW)) if (leaf.view instanceof HomeView) void leaf.view.refresh().catch(() => {
      });
    }, 120);
  }
  async latestReview() {
    let errors = 0;
    for (const entry of this.index.aiReviews().slice(0, 36)) {
      try {
        let cached = this.reviewCache.get(entry.path);
        if (!cached || cached.mtime !== entry.mtime) {
          cached = { mtime: entry.mtime, display: parseReview(await this.port.read(entry.path)) };
          this.reviewCache.set(entry.path, cached);
        }
        if (cached.display) return { review: { month: entry.path.split("/").at(-1).slice(0, -3), path: entry.path, display: cached.display }, errors };
      } catch {
      }
      errors++;
    }
    return { review: null, errors };
  }
  async updateConfig(value) {
    const config = loadConfig(value), notes = new NoteService(config, this.port);
    await notes.initialize();
    await this.saveData(config);
    this.config = config;
    this.notes = notes;
    this.index = new ArchiveIndex(config);
    this.index.reset(this.app.vault.getMarkdownFiles().map((file) => this.port.entry(file)));
    this.reviewCache.clear();
    this.requestRefresh();
    this.scheduleGitHubSync();
  }
  newThought() {
    new ThoughtModal(this).open();
  }
  review() {
    new ReviewModal(this).open();
  }
  help() {
    new HelpModal(this.app).open();
  }
  browse(kind) {
    const entries = kind === "thoughts" ? this.index.thoughts(Number.MAX_SAFE_INTEGER) : this.index.periodNotes(Number.MAX_SAFE_INTEGER);
    new NotesModal(this.app, entries, kind === "thoughts" ? "\u67E5\u627E\u601D\u60F3\u6587\u7AE0\u2026" : "\u67E5\u627E\u5468\u671F\u7B14\u8BB0\u2026", (path) => this.port.open(path)).open();
  }
  openSettings() {
    const app = this.app;
    app.setting?.open();
    app.setting?.openTabById(this.manifest.id);
  }
  async runCli(args) {
    const adapter = this.app.vault.adapter;
    if (!(adapter instanceof import_obsidian6.FileSystemAdapter)) return Promise.reject(new Error("AI \u590D\u76D8\u5DE5\u5177\u9700\u8981\u684C\u9762\u672C\u5730\u7B14\u8BB0\u5E93"));
    const base = adapter.getBasePath(), dir = this.manifest.dir ?? `${this.app.vault.configDir}/plugins/${this.manifest.id}`;
    const script = (0, import_node_path3.join)(base, dir, "review.cjs");
    const node = await nodeExecutable(this.config.nodePath);
    return new Promise((resolve, reject) => {
      const child = (0, import_node_child_process2.execFile)(node, [script, ...args, "--vault", base, "--config-dir", this.app.vault.configDir], {
        env: { ...process.env },
        cwd: base,
        timeout: 11 * 6e4,
        maxBuffer: 2e6,
        windowsHide: true
      }, (error, stdout, stderr) => {
        this.children.delete(child);
        if (error) {
          let reason = "\u590D\u76D8\u5DE5\u5177\u8FD0\u884C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Codex \u5B89\u88C5\u548C\u8FD0\u884C\u8BB0\u5F55";
          try {
            reason = JSON.parse(stderr.trim()).reason ?? reason;
          } catch {
          }
          reject(new Error(reason));
          return;
        }
        try {
          resolve(JSON.parse(stdout));
        } catch {
          reject(new Error("\u590D\u76D8\u5DE5\u5177\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u8FD0\u884C\u7ED3\u679C"));
        }
      });
      this.children.add(child);
    });
  }
};
