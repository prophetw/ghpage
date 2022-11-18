/*!
 * @license twgl.js 4.23.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */ !function(e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.twgl = r() : e.twgl = r();
}("undefined" != typeof self ? self : this, function() {
    return (function(e1) {
        var r1 = {
        };
        function t(n) {
            if (r1[n]) return r1[n].exports;
            var o = r1[n] = {
                i: n,
                l: !1,
                exports: {
                }
            };
            return e1[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        return t.m = e1, t.c = r1, t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            });
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, t.t = function(e, r) {
            if (1 & r && (e = t(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e) for(var o in e)t.d(n, o, (function(r) {
                return e[r];
            }).bind(null, o));
            return n;
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(r, "a", r), r;
        }, t.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
        }, t.p = "", t(t.s = 8);
    })([
        function(e2, r2, t1) {
            "use strict";
            r2.__esModule = !0, r2.copyExistingProperties = function(e, r) {
                Object.keys(r).forEach(function(t) {
                    r.hasOwnProperty(t) && e.hasOwnProperty(t) && (r[t] = e[t]);
                });
            }, r2.copyNamedProperties = function(e, r, t) {
                e.forEach(function(e) {
                    var n = r[e];
                    void 0 !== n && (t[e] = n);
                });
            }, r2.error = function() {
                var e;
                (e = console).error.apply(e, arguments);
            }, r2.warn = function() {
                var e;
                (e = console).warn.apply(e, arguments);
            }, r2.isBuffer = function(e, r) {
                return "undefined" != typeof WebGLBuffer && r instanceof WebGLBuffer;
            }, r2.isRenderbuffer = function(e, r) {
                return "undefined" != typeof WebGLRenderbuffer && r instanceof WebGLRenderbuffer;
            }, r2.isShader = function(e, r) {
                return "undefined" != typeof WebGLShader && r instanceof WebGLShader;
            }, r2.isTexture = function(e, r) {
                return "undefined" != typeof WebGLTexture && r instanceof WebGLTexture;
            }, r2.isSampler = function(e, r) {
                return "undefined" != typeof WebGLSampler && r instanceof WebGLSampler;
            };
        },
        function(e3, r3, t) {
            "use strict";
            r3.__esModule = !0, r3.getGLTypeForTypedArray = function(e) {
                if (e instanceof Int8Array) return n;
                if (e instanceof Uint8Array) return o;
                if (e instanceof Uint8ClampedArray) return o;
                if (e instanceof Int16Array) return u;
                if (e instanceof Uint16Array) return i;
                if (e instanceof Int32Array) return a;
                if (e instanceof Uint32Array) return f;
                if (e instanceof Float32Array) return c;
                throw new Error("unsupported typed array type");
            }, r3.getGLTypeForTypedArrayType = function(e) {
                if (e === Int8Array) return n;
                if (e === Uint8Array) return o;
                if (e === Uint8ClampedArray) return o;
                if (e === Int16Array) return u;
                if (e === Uint16Array) return i;
                if (e === Int32Array) return a;
                if (e === Uint32Array) return f;
                if (e === Float32Array) return c;
                throw new Error("unsupported typed array type");
            }, r3.getTypedArrayTypeForGLType = function(e) {
                var r = l[e];
                if (!r) throw new Error("unknown gl type");
                return r;
            }, r3.isArrayBuffer = void 0;
            var n = 5120, o = 5121, u = 5122, i = 5123, a = 5124, f = 5125, c = 5126, l = {
            }, s = l;
            s[n] = Int8Array, s[5121] = Uint8Array, s[5122] = Int16Array, s[5123] = Uint16Array, s[a] = Int32Array, s[5125] = Uint32Array, s[5126] = Float32Array, s[32819] = Uint16Array, s[32820] = Uint16Array, s[33635] = Uint16Array, s[5131] = Uint16Array, s[33640] = Uint32Array, s[35899] = Uint32Array, s[35902] = Uint32Array, s[36269] = Uint32Array, s[34042] = Uint32Array;
            var v = "undefined" != typeof SharedArrayBuffer ? function(e) {
                return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer);
            } : function(e) {
                return e && e.buffer && e.buffer instanceof ArrayBuffer;
            };
            r3.isArrayBuffer = v;
        },
        function(e4, r4, t2) {
            "use strict";
            r4.__esModule = !0, r4.add = function(e, r, t) {
                return (t = t || new n1(3))[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
            }, r4.copy = function(e, r) {
                return (r = r || new n1(3))[0] = e[0], r[1] = e[1], r[2] = e[2], r;
            }, r4.create = function(e, r, t) {
                var o = new n1(3);
                e && (o[0] = e);
                r && (o[1] = r);
                t && (o[2] = t);
                return o;
            }, r4.cross = function(e, r, t) {
                t = t || new n1(3);
                var o = e[2] * r[0] - e[0] * r[2], u = e[0] * r[1] - e[1] * r[0];
                return t[0] = e[1] * r[2] - e[2] * r[1], t[1] = o, t[2] = u, t;
            }, r4.distance = function(e, r) {
                var t = e[0] - r[0], n = e[1] - r[1], o = e[2] - r[2];
                return Math.sqrt(t * t + n * n + o * o);
            }, r4.distanceSq = function(e, r) {
                var t = e[0] - r[0], n = e[1] - r[1], o = e[2] - r[2];
                return t * t + n * n + o * o;
            }, r4.divide = function(e, r, t) {
                return (t = t || new n1(3))[0] = e[0] / r[0], t[1] = e[1] / r[1], t[2] = e[2] / r[2], t;
            }, r4.divScalar = function(e, r, t) {
                return (t = t || new n1(3))[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r, t;
            }, r4.dot = function(e, r) {
                return e[0] * r[0] + e[1] * r[1] + e[2] * r[2];
            }, r4.lerp = function(e, r, t, o) {
                return (o = o || new n1(3))[0] = e[0] + t * (r[0] - e[0]), o[1] = e[1] + t * (r[1] - e[1]), o[2] = e[2] + t * (r[2] - e[2]), o;
            }, r4.lerpV = function(e, r, t, o) {
                return (o = o || new n1(3))[0] = e[0] + t[0] * (r[0] - e[0]), o[1] = e[1] + t[1] * (r[1] - e[1]), o[2] = e[2] + t[2] * (r[2] - e[2]), o;
            }, r4.length = function(e) {
                return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
            }, r4.lengthSq = function(e) {
                return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
            }, r4.max = function(e, r, t) {
                return (t = t || new n1(3))[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t[2] = Math.max(e[2], r[2]), t;
            }, r4.min = function(e, r, t) {
                return (t = t || new n1(3))[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t[2] = Math.min(e[2], r[2]), t;
            }, r4.mulScalar = function(e, r, t) {
                return (t = t || new n1(3))[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t;
            }, r4.multiply = function(e, r, t) {
                return (t = t || new n1(3))[0] = e[0] * r[0], t[1] = e[1] * r[1], t[2] = e[2] * r[2], t;
            }, r4.negate = function(e, r) {
                return (r = r || new n1(3))[0] = -e[0], r[1] = -e[1], r[2] = -e[2], r;
            }, r4.normalize = function(e, r) {
                r = r || new n1(3);
                var t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], o = Math.sqrt(t);
                o > 0.00001 ? (r[0] = e[0] / o, r[1] = e[1] / o, r[2] = e[2] / o) : (r[0] = 0, r[1] = 0, r[2] = 0);
                return r;
            }, r4.setDefaultType = function(e) {
                var r = n1;
                return n1 = e, r;
            }, r4.subtract = function(e, r, t) {
                return (t = t || new n1(3))[0] = e[0] - r[0], t[1] = e[1] - r[1], t[2] = e[2] - r[2], t;
            };
            var n1 = Float32Array;
        },
        function(e5, r5, t3) {
            "use strict";
            r5.__esModule = !0, r5.isWebGL1 = function(e) {
                return !e.texStorage2D;
            }, r5.isWebGL2 = function(e) {
                return !!e.texStorage2D;
            }, r5.glEnumToString = void 0;
            var n, o, u1 = (n = {
            }, o = {
            }, function(e6, r) {
                return (function(e) {
                    var r = e.constructor.name;
                    if (!n[r]) {
                        for(var t in e)if ("number" == typeof e[t]) {
                            var u = o[e[t]];
                            o[e[t]] = u ? "".concat(u, " | ").concat(t) : t;
                        }
                        n[r] = !0;
                    }
                })(e6), o[r] || ("number" == typeof r ? "0x".concat(r.toString(16)) : r);
            });
            r5.glEnumToString = u1;
        },
        function(e7, r6, t4) {
            "use strict";
            function n2(e8) {
                return (n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e8);
            }
            r6.__esModule = !0, r6.createAttributeSetters = ye, r6.createProgram = K, r6.createProgramAsync = function(e9, r7) {
                for(var t5 = arguments.length, n = new Array(t5 > 2 ? t5 - 2 : 0), o2 = 2; o2 < t5; o2++)n[o2 - 2] = arguments[o2];
                return new Promise(function(t, o) {
                    var u = N.apply(void 0, n);
                    u.callback = function(e, r) {
                        e ? o(e) : t(r);
                    }, K(e9, r7, u);
                });
            }, r6.createProgramFromScripts = function(e, r, t, n, o) {
                for(var u = N(t, n, o), i = [], a = 0; a < r.length; ++a){
                    var f = J(e, r[a], e[H[a]], u);
                    if (!f) return null;
                    i.push(f);
                }
                return K(e, i, u);
            }, r6.createProgramFromSources = Q, r6.createProgramInfo = de, r6.createProgramInfoAsync = function(e10, r8) {
                for(var t6 = arguments.length, n = new Array(t6 > 2 ? t6 - 2 : 0), o3 = 2; o3 < t6; o3++)n[o3 - 2] = arguments[o3];
                return new Promise(function(t, o) {
                    var u = N.apply(void 0, n);
                    u.callback = function(e, r) {
                        e ? o(e) : t(r);
                    }, de(e10, r8, u);
                });
            }, r6.createProgramInfoFromProgram = me, r6.createUniformSetters = ne, r6.createUniformBlockSpecFromProgram = ie, r6.createUniformBlockInfoFromProgram = fe, r6.createUniformBlockInfo = function(e, r, t) {
                return fe(e, r.program, r.uniformBlockSpec, t);
            }, r6.createTransformFeedback = function(e, r, t) {
                var n = e.createTransformFeedback();
                return e.bindTransformFeedback(36386, n), e.useProgram(r.program), ue(e, r, t), e.bindTransformFeedback(36386, null), n;
            }, r6.createTransformFeedbackInfo = oe, r6.bindTransformFeedbackInfo = ue, r6.setAttributes = be, r6.setBuffersAndAttributes = function(e, r, t) {
                t.vertexArrayObject ? e.bindVertexArray(t.vertexArrayObject) : (be(r.attribSetters || r, t.attribs), t.indices && e.bindBuffer(34963, t.indices));
            }, r6.setUniforms = se, r6.setUniformBlock = function(e, r, t) {
                ce(e, r, t) && e.bufferData(d, t.array, 35048);
            }, r6.setBlockUniforms = function(e, r) {
                var t = e.setters;
                for(var n in r){
                    var o = t[n];
                    if (o) {
                        var u = r[n];
                        o(u);
                    }
                }
            }, r6.bindUniformBlock = ce, r6.setUniformsAndBindTextures = void 0;
            var o1 = a1(t4(3)), u2 = a1(t4(0));
            function i1() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i1 = function() {
                    return e;
                }, e;
            }
            function a1(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n2(e) && "function" != typeof e) return {
                    default: e
                };
                var r = i1();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            function f1(e, r, t, n, o, u, i) {
                try {
                    var a = e[u](i), f = a.value;
                } catch (e11) {
                    return void t(e11);
                }
                a.done ? r(f) : Promise.resolve(f).then(n, o);
            }
            function c1(e12) {
                return function() {
                    var r = this, t = arguments;
                    return new Promise(function(n, o) {
                        var u = e12.apply(r, t);
                        function i(e) {
                            f1(u, n, o, i, a, "next", e);
                        }
                        function a(e) {
                            f1(u, n, o, i, a, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function l1(e13) {
                return (function(e) {
                    if (Array.isArray(e)) return s1(e);
                })(e13) || (function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e13) || (function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return s1(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s1(e, r);
                })(e13) || (function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })();
            }
            function s1(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for(var t = 0, n = new Array(r); t < r; t++)n[t] = e[t];
                return n;
            }
            var v1 = u2.error, y1 = u2.warn;
            function b1(e) {
                return "undefined" != typeof document && document.getElementById ? document.getElementById(e) : null;
            }
            var m1 = 33984, p1 = 34962, d = 35345, w = 5126, x = 5124, h = 5125, F = 3553, E = 34067, A = 32879, j = 35866, O = {
            };
            function _(e, r) {
                return O[r].bindPoint;
            }
            function S(e, r) {
                return function(t) {
                    e.uniform1i(r, t);
                };
            }
            function M(e, r) {
                return function(t) {
                    e.uniform1iv(r, t);
                };
            }
            function R(e, r) {
                return function(t) {
                    e.uniform2iv(r, t);
                };
            }
            function P(e, r) {
                return function(t) {
                    e.uniform3iv(r, t);
                };
            }
            function g(e, r) {
                return function(t) {
                    e.uniform4iv(r, t);
                };
            }
            function T(e, r9, t, n) {
                var i = _(0, r9);
                return o1.isWebGL2(e) ? function(r) {
                    var o, a;
                    u2.isTexture(e, r) ? (o = r, a = null) : (o = r.texture, a = r.sampler), e.uniform1i(n, t), e.activeTexture(m1 + t), e.bindTexture(i, o), e.bindSampler(t, a);
                } : function(r) {
                    e.uniform1i(n, t), e.activeTexture(m1 + t), e.bindTexture(i, r);
                };
            }
            function z(e, r10, t, n, i2) {
                for(var a = _(0, r10), f = new Int32Array(i2), c = 0; c < i2; ++c)f[c] = t + c;
                return o1.isWebGL2(e) ? function(r11) {
                    e.uniform1iv(n, f), r11.forEach(function(r, n) {
                        var o, i;
                        e.activeTexture(m1 + f[n]), u2.isTexture(e, r) ? (o = r, i = null) : (o = r.texture, i = r.sampler), e.bindSampler(t, i), e.bindTexture(a, o);
                    });
                } : function(r12) {
                    e.uniform1iv(n, f), r12.forEach(function(r, t) {
                        e.activeTexture(m1 + f[t]), e.bindTexture(a, r);
                    });
                };
            }
            function U(e, r) {
                return function(t) {
                    if (t.value) switch(e.disableVertexAttribArray(r), t.value.length){
                        case 4:
                            e.vertexAttrib4fv(r, t.value);
                            break;
                        case 3:
                            e.vertexAttrib3fv(r, t.value);
                            break;
                        case 2:
                            e.vertexAttrib2fv(r, t.value);
                            break;
                        case 1:
                            e.vertexAttrib1fv(r, t.value);
                            break;
                        default:
                            throw new Error("the length of a float constant value must be between 1 and 4!");
                    }
                    else e.bindBuffer(p1, t.buffer), e.enableVertexAttribArray(r), e.vertexAttribPointer(r, t.numComponents || t.size, t.type || w, t.normalize || !1, t.stride || 0, t.offset || 0), void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor);
                };
            }
            function C(e, r) {
                return function(t) {
                    if (t.value) {
                        if (e.disableVertexAttribArray(r), 4 !== t.value.length) throw new Error("The length of an integer constant value must be 4!");
                        e.vertexAttrib4iv(r, t.value);
                    } else e.bindBuffer(p1, t.buffer), e.enableVertexAttribArray(r), e.vertexAttribIPointer(r, t.numComponents || t.size, t.type || x, t.stride || 0, t.offset || 0), void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor);
                };
            }
            function k(e, r) {
                return function(t) {
                    if (t.value) {
                        if (e.disableVertexAttribArray(r), 4 !== t.value.length) throw new Error("The length of an unsigned integer constant value must be 4!");
                        e.vertexAttrib4uiv(r, t.value);
                    } else e.bindBuffer(p1, t.buffer), e.enableVertexAttribArray(r), e.vertexAttribIPointer(r, t.numComponents || t.size, t.type || h, t.stride || 0, t.offset || 0), void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor);
                };
            }
            function W(e, r, t7) {
                var n = t7.size, o = t7.count;
                return function(t) {
                    e.bindBuffer(p1, t.buffer);
                    for(var u = t.size || t.numComponents || n, i = u / o, a = t.type || w, f = O[a].size * u, c = t.normalize || !1, l = t.offset || 0, s = f / o, v = 0; v < o; ++v)e.enableVertexAttribArray(r + v), e.vertexAttribPointer(r + v, i, a, c, f, l + s * v), void 0 !== t.divisor && e.vertexAttribDivisor(r + v, t.divisor);
                };
            }
            O[5126] = {
                Type: Float32Array,
                size: 4,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform1f(r, t);
                    };
                },
                arraySetter: function(e, r) {
                    return function(t) {
                        e.uniform1fv(r, t);
                    };
                }
            }, O[35664] = {
                Type: Float32Array,
                size: 8,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform2fv(r, t);
                    };
                },
                cols: 2
            }, O[35665] = {
                Type: Float32Array,
                size: 12,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform3fv(r, t);
                    };
                },
                cols: 3
            }, O[35666] = {
                Type: Float32Array,
                size: 16,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform4fv(r, t);
                    };
                },
                cols: 4
            }, O[x] = {
                Type: Int32Array,
                size: 4,
                setter: S,
                arraySetter: M
            }, O[35667] = {
                Type: Int32Array,
                size: 8,
                setter: R,
                cols: 2
            }, O[35668] = {
                Type: Int32Array,
                size: 12,
                setter: P,
                cols: 3
            }, O[35669] = {
                Type: Int32Array,
                size: 16,
                setter: g,
                cols: 4
            }, O[5125] = {
                Type: Uint32Array,
                size: 4,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform1ui(r, t);
                    };
                },
                arraySetter: function(e, r) {
                    return function(t) {
                        e.uniform1uiv(r, t);
                    };
                }
            }, O[36294] = {
                Type: Uint32Array,
                size: 8,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform2uiv(r, t);
                    };
                },
                cols: 2
            }, O[36295] = {
                Type: Uint32Array,
                size: 12,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform3uiv(r, t);
                    };
                },
                cols: 3
            }, O[36296] = {
                Type: Uint32Array,
                size: 16,
                setter: function(e, r) {
                    return function(t) {
                        e.uniform4uiv(r, t);
                    };
                },
                cols: 4
            }, O[35670] = {
                Type: Uint32Array,
                size: 4,
                setter: S,
                arraySetter: M
            }, O[35671] = {
                Type: Uint32Array,
                size: 8,
                setter: R,
                cols: 2
            }, O[35672] = {
                Type: Uint32Array,
                size: 12,
                setter: P,
                cols: 3
            }, O[35673] = {
                Type: Uint32Array,
                size: 16,
                setter: g,
                cols: 4
            }, O[35674] = {
                Type: Float32Array,
                size: 32,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix2fv(r, !1, t);
                    };
                },
                rows: 2,
                cols: 2
            }, O[35675] = {
                Type: Float32Array,
                size: 48,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix3fv(r, !1, t);
                    };
                },
                rows: 3,
                cols: 3
            }, O[35676] = {
                Type: Float32Array,
                size: 64,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix4fv(r, !1, t);
                    };
                },
                rows: 4,
                cols: 4
            }, O[35685] = {
                Type: Float32Array,
                size: 32,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix2x3fv(r, !1, t);
                    };
                },
                rows: 2,
                cols: 3
            }, O[35686] = {
                Type: Float32Array,
                size: 32,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix2x4fv(r, !1, t);
                    };
                },
                rows: 2,
                cols: 4
            }, O[35687] = {
                Type: Float32Array,
                size: 48,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix3x2fv(r, !1, t);
                    };
                },
                rows: 3,
                cols: 2
            }, O[35688] = {
                Type: Float32Array,
                size: 48,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix3x4fv(r, !1, t);
                    };
                },
                rows: 3,
                cols: 4
            }, O[35689] = {
                Type: Float32Array,
                size: 64,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix4x2fv(r, !1, t);
                    };
                },
                rows: 4,
                cols: 2
            }, O[35690] = {
                Type: Float32Array,
                size: 64,
                setter: function(e, r) {
                    return function(t) {
                        e.uniformMatrix4x3fv(r, !1, t);
                    };
                },
                rows: 4,
                cols: 3
            }, O[35678] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: F
            }, O[35680] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: E
            }, O[35679] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: A
            }, O[35682] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: F
            }, O[36289] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: j
            }, O[36292] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: j
            }, O[36293] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: E
            }, O[36298] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: F
            }, O[36299] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: A
            }, O[36300] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: E
            }, O[36303] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: j
            }, O[36306] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: F
            }, O[36307] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: A
            }, O[36308] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: E
            }, O[36311] = {
                Type: null,
                size: 0,
                setter: T,
                arraySetter: z,
                bindPoint: j
            };
            var I = {
            };
            I[5126] = {
                size: 4,
                setter: U
            }, I[35664] = {
                size: 8,
                setter: U
            }, I[35665] = {
                size: 12,
                setter: U
            }, I[35666] = {
                size: 16,
                setter: U
            }, I[x] = {
                size: 4,
                setter: C
            }, I[35667] = {
                size: 8,
                setter: C
            }, I[35668] = {
                size: 12,
                setter: C
            }, I[35669] = {
                size: 16,
                setter: C
            }, I[5125] = {
                size: 4,
                setter: k
            }, I[36294] = {
                size: 8,
                setter: k
            }, I[36295] = {
                size: 12,
                setter: k
            }, I[36296] = {
                size: 16,
                setter: k
            }, I[35670] = {
                size: 4,
                setter: C
            }, I[35671] = {
                size: 8,
                setter: C
            }, I[35672] = {
                size: 12,
                setter: C
            }, I[35673] = {
                size: 16,
                setter: C
            }, I[35674] = {
                size: 4,
                setter: W,
                count: 2
            }, I[35675] = {
                size: 9,
                setter: W,
                count: 3
            }, I[35676] = {
                size: 16,
                setter: W,
                count: 4
            };
            var B = /ERROR:\s*\d+:(\d+)/gi;
            var L = /^[ \t]*\n/;
            function G(e) {
                var r = 0;
                return L.test(e) && (r = 1, e = e.replace(L, "")), {
                    lineOffset: r,
                    shaderSource: e
                };
            }
            function X(e, r) {
                return e.errorCallback(r), e.callback && setTimeout(function() {
                    e.callback("".concat(r, "\n").concat(e.errors.join("\n")));
                }), null;
            }
            function D(e14, r13, t8, n3) {
                var u3 = e14.createShader(t8);
                return e14.shaderSource(u3, G(r13).shaderSource), e14.compileShader(u3), n3.callback || (function(e15, r14, t9, n4) {
                    n4 = n4 || v1;
                    var u4 = e15.getShaderParameter(t9, 35713);
                    if (!u4) {
                        var i3 = e15.getShaderInfoLog(t9), a = G(e15.getShaderSource(t9)), f = a.lineOffset, c = a.shaderSource;
                        n4("".concat(function(e16) {
                            var r15 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n5 = l1(r15.matchAll(B)), o4 = new Map(n5.map(function(e, t) {
                                var o = parseInt(e[1]), u = n5[t + 1], i = u ? u.index : r15.length;
                                return [
                                    o - 1,
                                    r15.substring(e.index, i)
                                ];
                            }));
                            return e16.split("\n").map(function(e, r) {
                                var n = o4.get(r);
                                return "".concat(r + 1 + t, ": ").concat(e).concat(n ? "\n\n^^^ ".concat(n) : "");
                            }).join("\n");
                        }(c, i3, f), "\nError compiling ").concat(o1.glEnumToString(e15, r14), ": ").concat(i3));
                    }
                    return u4;
                })(e14, t8, u3, n3.errorCallback) ? u3 : (e14.deleteShader(u3), null);
            }
            function N(e17, r16, t10) {
                var n6, o, u;
                if ("function" == typeof r16 && (t10 = r16, r16 = void 0), "function" == typeof e17) t10 = e17, e17 = void 0;
                else if (e17 && !Array.isArray(e17)) {
                    if (e17.errorCallback && e17.errors) return e17;
                    var i = e17;
                    t10 = i.errorCallback, e17 = i.attribLocations, n6 = i.transformFeedbackVaryings, o = i.transformFeedbackMode, u = i.callback;
                }
                var a = t10 || v1, f = [], c = {
                    errorCallback: function(e) {
                        f.push(e);
                        for(var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)t[n - 1] = arguments[n];
                        a.apply(void 0, [
                            e
                        ].concat(t));
                    },
                    transformFeedbackVaryings: n6,
                    transformFeedbackMode: o,
                    callback: u,
                    errors: f
                };
                if (e17) {
                    var l = {
                    };
                    Array.isArray(e17) ? e17.forEach(function(e, t) {
                        l[e] = r16 ? r16[t] : t;
                    }) : l = e17, c.attribLocations = l;
                }
                return c;
            }
            var H = [
                "VERTEX_SHADER",
                "FRAGMENT_SHADER"
            ];
            function q(e, r) {
                return r.indexOf("frag") >= 0 ? 35632 : r.indexOf("vert") >= 0 ? 35633 : void 0;
            }
            function V(e, r17) {
                r17.forEach(function(r) {
                    e.deleteShader(r);
                });
            }
            var Y = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return new Promise(function(r) {
                    return setTimeout(r, e);
                });
            };
            function K(e, r18, t, n, o) {
                for(var i = N(t, n, o), a = [], f = [], c = 0; c < r18.length; ++c){
                    var l = r18[c];
                    if ("string" == typeof l) {
                        var s = b1(l), v = s ? s.text : l, y = e[H[c]];
                        s && s.type && (y = q(0, s.type) || y), l = D(e, v, y, i), f.push(l);
                    }
                    u2.isShader(e, l) && a.push(l);
                }
                if (a.length !== r18.length) return V(e, f), X(i, "not enough shaders for program");
                var m = e.createProgram();
                a.forEach(function(r) {
                    e.attachShader(m, r);
                }), i.attribLocations && Object.keys(i.attribLocations).forEach(function(r) {
                    e.bindAttribLocation(m, i.attribLocations[r], r);
                });
                var p = i.transformFeedbackVaryings;
                return p && (p.attribs && (p = p.attribs), Array.isArray(p) || (p = Object.keys(p)), e.transformFeedbackVaryings(m, p, i.transformFeedbackMode || 35981)), e.linkProgram(m), i.callback ? ((function(e, r, t) {
                    $.apply(this, arguments);
                })(e, m, i), null) : Z(e, m, i.errorCallback) ? m : (e.deleteProgram(m), V(e, f), null);
            }
            function $() {
                return ($ = c1(regeneratorRuntime.mark(function e18(r19, t, n) {
                    var o, u, i, a, f;
                    return regeneratorRuntime.wrap(function(e19) {
                        for(;;)switch(e19.prev = e19.next){
                            case 0:
                                o = r19.getExtension("KHR_parallel_shader_compile"), u = o ? function(e, r) {
                                    return e.getProgramParameter(r, o.COMPLETION_STATUS_KHR);
                                } : function() {
                                    return !0;
                                }, i = 0;
                            case 3:
                                return e19.next = 5, Y(i);
                            case 5:
                                i = 1000 / 60;
                            case 6:
                                if (!u(r19, t)) {
                                    e19.next = 3;
                                    break;
                                }
                            case 7:
                                a = Z(r19, t, n.errorCallback), f = a ? void 0 : n.errors.join("\n"), a || ((n.errorCallback || v1)(f), r19.deleteProgram(t), t = null), n.callback(f, t);
                            case 11:
                            case "end":
                                return e19.stop();
                        }
                    }, e18);
                }))).apply(this, arguments);
            }
            function Z(e, r, t) {
                t = t || v1;
                var n = e.getProgramParameter(r, 35714);
                if (!n) {
                    var o = e.getProgramInfoLog(r);
                    t("Error in program linking: ".concat(o));
                }
                return n;
            }
            function J(e, r, t, n) {
                var o, u = b1(r);
                if (!u) return X(n, "unknown script element: ".concat(r));
                o = u.text;
                var i = t || q(0, u.type);
                return i ? D(e, o, i, n) : X(n, "unknown shader type");
            }
            function Q(e, r, t, n, o) {
                for(var u = N(t, n, o), i = [], a = 0; a < r.length; ++a){
                    var f = D(e, r[a], e[H[a]], u);
                    if (!u.callback && !f) return null;
                    i.push(f);
                }
                return K(e, i, u);
            }
            function ee(e) {
                var r = e.name;
                return r.startsWith("gl_") || r.startsWith("webgl_");
            }
            var re = /(\.|\[|]|\w+)/g;
            function te(e20, r20, t, n) {
                for(var o, u = e20.split(re).filter(function(e) {
                    return "" !== e;
                }), i = 0, a = "";;){
                    var f = u[i++];
                    a += f;
                    var c = (o = f[0]) >= "0" && o <= "9", l = c ? parseInt(f) : f;
                    if (c && (a += u[i++]), i === u.length) {
                        t[l] = r20;
                        break;
                    }
                    var s = u[i++], v = "[" === s, y = t[l] || (v ? [] : {
                    });
                    t[l] = y, t = y, n[a] = n[a] || (function(e) {
                        return function(r) {
                            le(e, r);
                        };
                    })(y), a += s;
                }
            }
            function ne(e, r) {
                var t = 0;
                function n7(r, n, o) {
                    var u, i = n.name.endsWith("[0]"), a = n.type, f = O[a];
                    if (!f) throw new Error("unknown type: 0x".concat(a.toString(16)));
                    if (f.bindPoint) {
                        var c = t;
                        t += n.size, u = i ? f.arraySetter(e, a, c, o, n.size) : f.setter(e, a, c, o, n.size);
                    } else u = f.arraySetter && i ? f.arraySetter(e, o) : f.setter(e, o);
                    return u.location = o, u;
                }
                for(var o5 = {
                }, u5 = {
                }, i5 = e.getProgramParameter(r, 35718), a2 = 0; a2 < i5; ++a2){
                    var f2 = e.getActiveUniform(r, a2);
                    if (!ee(f2)) {
                        var c2 = f2.name;
                        c2.endsWith("[0]") && (c2 = c2.substr(0, c2.length - 3));
                        var l = e.getUniformLocation(r, f2.name);
                        if (l) {
                            var s = n7(0, f2, l);
                            o5[c2] = s, te(c2, s, u5, o5);
                        }
                    }
                }
                return o5;
            }
            function oe(e, r) {
                for(var t = {
                }, n = e.getProgramParameter(r, 35971), o = 0; o < n; ++o){
                    var u = e.getTransformFeedbackVarying(r, o);
                    t[u.name] = {
                        index: o,
                        type: u.type,
                        size: u.size
                    };
                }
                return t;
            }
            function ue(e, r, t) {
                for(var n in r.transformFeedbackInfo && (r = r.transformFeedbackInfo), t.attribs && (t = t.attribs), t){
                    var o = r[n];
                    if (o) {
                        var u = t[n];
                        u.offset ? e.bindBufferRange(35982, o.index, u.buffer, u.offset, u.size) : e.bindBufferBase(35982, o.index, u.buffer);
                    }
                }
            }
            function ie(e21, r) {
                for(var t11 = e21.getProgramParameter(r, 35718), n = [], o = [], u = 0; u < t11; ++u){
                    o.push(u), n.push({
                    });
                    var i = e21.getActiveUniform(r, u);
                    n[u].name = i.name;
                }
                [
                    [
                        "UNIFORM_TYPE",
                        "type"
                    ],
                    [
                        "UNIFORM_SIZE",
                        "size"
                    ],
                    [
                        "UNIFORM_BLOCK_INDEX",
                        "blockNdx"
                    ],
                    [
                        "UNIFORM_OFFSET",
                        "offset"
                    ]
                ].forEach(function(t) {
                    var u = t[0], i = t[1];
                    e21.getActiveUniforms(r, o, e21[u]).forEach(function(e, r) {
                        n[r][i] = e;
                    });
                });
                for(var a = {
                }, f = e21.getProgramParameter(r, 35382), c = 0; c < f; ++c){
                    var l = e21.getActiveUniformBlockName(r, c), s = {
                        index: e21.getUniformBlockIndex(r, l),
                        usedByVertexShader: e21.getActiveUniformBlockParameter(r, c, 35396),
                        usedByFragmentShader: e21.getActiveUniformBlockParameter(r, c, 35398),
                        size: e21.getActiveUniformBlockParameter(r, c, 35392),
                        uniformIndices: e21.getActiveUniformBlockParameter(r, c, 35395)
                    };
                    s.used = s.usedByVertexShader || s.usedByFragmentShader, a[l] = s;
                }
                return {
                    blockSpecs: a,
                    uniformData: n
                };
            }
            var ae = /\[\d+\]\.$/;
            function fe(e22, r21, t12, n8) {
                var o6 = t12.blockSpecs, u = t12.uniformData, i6 = o6[n8];
                if (!i6) return y1("no uniform block object named:", n8), {
                    name: n8,
                    uniforms: {
                    }
                };
                var a3 = new ArrayBuffer(i6.size), f3 = e22.createBuffer(), c3 = i6.index;
                e22.bindBuffer(d, f3), e22.uniformBlockBinding(r21, i6.index, c3);
                var l = n8 + ".";
                ae.test(l) && (l = l.replace(ae, "."));
                var s = {
                }, v = {
                }, b = {
                };
                return i6.uniformIndices.forEach(function(e23) {
                    var r22 = u[e23], t13 = r22.name;
                    t13.startsWith(l) && (t13 = t13.substr(l.length));
                    var n9 = t13.endsWith("[0]");
                    n9 && (t13 = t13.substr(0, t13.length - 3));
                    var o7, i7 = O[r22.type], f = i7.Type, c = n9 ? ((i7.size + ((o7 = 16) - 1)) / o7 | 0) * o7 * r22.size : i7.size * r22.size, y = new f(a3, r22.offset, c / f.BYTES_PER_ELEMENT);
                    s[t13] = y;
                    var m = function(e, r23, t14, n) {
                        if (r23 || t14) {
                            n = n || 1;
                            var o = e.length / 4;
                            return function(r) {
                                for(var t = 0, u = 0, i = 0; i < o; ++i){
                                    for(var a = 0; a < n; ++a)e[t++] = r[u++];
                                    t += 4 - n;
                                }
                            };
                        }
                        return function(r) {
                            r.length ? e.set(r) : e[0] = r;
                        };
                    }(y, n9, i7.rows, i7.cols);
                    v[t13] = m, te(t13, m, b, v);
                }), {
                    name: n8,
                    array: a3,
                    asFloat: new Float32Array(a3),
                    buffer: f3,
                    uniforms: s,
                    setters: v
                };
            }
            function ce(e, r, t) {
                var n = (r.uniformBlockSpec || r).blockSpecs[t.name];
                if (n) {
                    var o = n.index;
                    return e.bindBufferRange(d, o, t.buffer, t.offset || 0, t.array.byteLength), !0;
                }
                return !1;
            }
            function le(e, r) {
                for(var t in r){
                    var n = e[t];
                    "function" == typeof n ? n(r[t]) : le(e[t], r[t]);
                }
            }
            function se(e) {
                for(var r = e.uniformSetters || e, t = arguments.length <= 1 ? 0 : arguments.length - 1, n = 0; n < t; ++n){
                    var o = n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1];
                    if (Array.isArray(o)) for(var u = o.length, i = 0; i < u; ++i)se(r, o[i]);
                    else for(var a in o){
                        var f = r[a];
                        f && f(o[a]);
                    }
                }
            }
            var ve = se;
            function ye(e, r) {
                for(var t = {
                }, n = e.getProgramParameter(r, 35721), o = 0; o < n; ++o){
                    var u = e.getActiveAttrib(r, o);
                    if (!ee(u)) {
                        var i = e.getAttribLocation(r, u.name), a = I[u.type], f = a.setter(e, i, a);
                        f.location = i, t[u.name] = f;
                    }
                }
                return t;
            }
            function be(e, r) {
                for(var t in r){
                    var n = e[t];
                    n && n(r[t]);
                }
            }
            function me(e, r) {
                var t = {
                    program: r,
                    uniformSetters: ne(e, r),
                    attribSetters: ye(e, r)
                };
                return o1.isWebGL2(e) && (t.uniformBlockSpec = ie(e, r), t.transformFeedbackInfo = oe(e, r)), t;
            }
            r6.setUniformsAndBindTextures = ve;
            var pe = /\s|{|}|;/;
            function de(e24, r24, t15, n10, o) {
                var u = N(t15, n10, o), i = [];
                if (r24 = r24.map(function(e) {
                    if (!pe.test(e)) {
                        var r = b1(e);
                        if (r) e = r.text;
                        else {
                            var t = "no element with id: ".concat(e);
                            u.errorCallback(t), i.push(t);
                        }
                    }
                    return e;
                }), i.length) return X(u, "");
                var a = u.callback;
                a && (u.callback = function(r, t) {
                    var n;
                    r || (n = me(e24, t)), a(r, n);
                });
                var f = Q(e24, r24, u);
                return f ? me(e24, f) : null;
            }
        },
        function(e25, r25, t16) {
            "use strict";
            function n11(e26) {
                return (n11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e26);
            }
            r25.__esModule = !0, r25.axisRotate = function(e, r, t, n) {
                n = n || new c(16);
                var o = r[0], u = r[1], i = r[2], a = Math.sqrt(o * o + u * u + i * i), f = (o /= a) * o, l = (u /= a) * u, s = (i /= a) * i, v = Math.cos(t), y = Math.sin(t), b = 1 - v, m = f + (1 - f) * v, p = o * u * b + i * y, d = o * i * b - u * y, w = o * u * b - i * y, x = l + (1 - l) * v, h = u * i * b + o * y, F = o * i * b + u * y, E = u * i * b - o * y, A = s + (1 - s) * v, j = e[0], O = e[1], _ = e[2], S = e[3], M = e[4], R = e[5], P = e[6], g = e[7], T = e[8], z = e[9], U = e[10], C = e[11];
                n[0] = m * j + p * M + d * T, n[1] = m * O + p * R + d * z, n[2] = m * _ + p * P + d * U, n[3] = m * S + p * g + d * C, n[4] = w * j + x * M + h * T, n[5] = w * O + x * R + h * z, n[6] = w * _ + x * P + h * U, n[7] = w * S + x * g + h * C, n[8] = F * j + E * M + A * T, n[9] = F * O + E * R + A * z, n[10] = F * _ + E * P + A * U, n[11] = F * S + E * g + A * C, e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]);
                return n;
            }, r25.axisRotation = function(e, r, t) {
                t = t || new c(16);
                var n = e[0], o = e[1], u = e[2], i = Math.sqrt(n * n + o * o + u * u), a = (n /= i) * n, f = (o /= i) * o, l = (u /= i) * u, s = Math.cos(r), v = Math.sin(r), y = 1 - s;
                return t[0] = a + (1 - a) * s, t[1] = n * o * y + u * v, t[2] = n * u * y - o * v, t[3] = 0, t[4] = n * o * y - u * v, t[5] = f + (1 - f) * s, t[6] = o * u * y + n * v, t[7] = 0, t[8] = n * u * y + o * v, t[9] = o * u * y - n * v, t[10] = l + (1 - l) * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
            }, r25.copy = l2, r25.create = function() {
                return new c(16).fill(0);
            }, r25.frustum = function(e, r, t, n, o, u, i) {
                i = i || new c(16);
                var a = r - e, f = n - t, l = o - u;
                return i[0] = 2 * o / a, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 2 * o / f, i[6] = 0, i[7] = 0, i[8] = (e + r) / a, i[9] = (n + t) / f, i[10] = u / l, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = o * u / l, i[15] = 0, i;
            }, r25.getAxis = function(e, r, t) {
                t = t || o8.create();
                var n = 4 * r;
                return t[0] = e[n + 0], t[1] = e[n + 1], t[2] = e[n + 2], t;
            }, r25.getTranslation = function(e, r) {
                return (r = r || o8.create())[0] = e[12], r[1] = e[13], r[2] = e[14], r;
            }, r25.identity = s2, r25.inverse = v2, r25.lookAt = function(e, r, t, n) {
                return n = n || new c(16), i8 = i8 || o8.create(), a4 = a4 || o8.create(), f4 = f4 || o8.create(), o8.normalize(o8.subtract(e, r, f4), f4), o8.normalize(o8.cross(t, f4, i8), i8), o8.normalize(o8.cross(f4, i8, a4), a4), n[0] = i8[0], n[1] = i8[1], n[2] = i8[2], n[3] = 0, n[4] = a4[0], n[5] = a4[1], n[6] = a4[2], n[7] = 0, n[8] = f4[0], n[9] = f4[1], n[10] = f4[2], n[11] = 0, n[12] = e[0], n[13] = e[1], n[14] = e[2], n[15] = 1, n;
            }, r25.multiply = function(e, r, t) {
                t = t || new c(16);
                var n = e[0], o = e[1], u = e[2], i = e[3], a = e[4], f = e[5], l = e[6], s = e[7], v = e[8], y = e[9], b = e[10], m = e[11], p = e[12], d = e[13], w = e[14], x = e[15], h = r[0], F = r[1], E = r[2], A = r[3], j = r[4], O = r[5], _ = r[6], S = r[7], M = r[8], R = r[9], P = r[10], g = r[11], T = r[12], z = r[13], U = r[14], C = r[15];
                return t[0] = n * h + a * F + v * E + p * A, t[1] = o * h + f * F + y * E + d * A, t[2] = u * h + l * F + b * E + w * A, t[3] = i * h + s * F + m * E + x * A, t[4] = n * j + a * O + v * _ + p * S, t[5] = o * j + f * O + y * _ + d * S, t[6] = u * j + l * O + b * _ + w * S, t[7] = i * j + s * O + m * _ + x * S, t[8] = n * M + a * R + v * P + p * g, t[9] = o * M + f * R + y * P + d * g, t[10] = u * M + l * R + b * P + w * g, t[11] = i * M + s * R + m * P + x * g, t[12] = n * T + a * z + v * U + p * C, t[13] = o * T + f * z + y * U + d * C, t[14] = u * T + l * z + b * U + w * C, t[15] = i * T + s * z + m * U + x * C, t;
            }, r25.negate = function(e, r) {
                return (r = r || new c(16))[0] = -e[0], r[1] = -e[1], r[2] = -e[2], r[3] = -e[3], r[4] = -e[4], r[5] = -e[5], r[6] = -e[6], r[7] = -e[7], r[8] = -e[8], r[9] = -e[9], r[10] = -e[10], r[11] = -e[11], r[12] = -e[12], r[13] = -e[13], r[14] = -e[14], r[15] = -e[15], r;
            }, r25.ortho = function(e, r, t, n, o, u, i) {
                return (i = i || new c(16))[0] = 2 / (r - e), i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 2 / (n - t), i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 2 / (o - u), i[11] = 0, i[12] = (r + e) / (e - r), i[13] = (n + t) / (t - n), i[14] = (u + o) / (o - u), i[15] = 1, i;
            }, r25.perspective = function(e, r, t, n, o) {
                o = o || new c(16);
                var u = Math.tan(0.5 * Math.PI - 0.5 * e), i = 1 / (t - n);
                return o[0] = u / r, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = u, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = (t + n) * i, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = t * n * i * 2, o[15] = 0, o;
            }, r25.rotateX = function(e, r, t) {
                t = t || new c(16);
                var n = e[4], o = e[5], u = e[6], i = e[7], a = e[8], f = e[9], l = e[10], s = e[11], v = Math.cos(r), y = Math.sin(r);
                t[4] = v * n + y * a, t[5] = v * o + y * f, t[6] = v * u + y * l, t[7] = v * i + y * s, t[8] = v * a - y * n, t[9] = v * f - y * o, t[10] = v * l - y * u, t[11] = v * s - y * i, e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                return t;
            }, r25.rotateY = function(e, r, t) {
                t = t || new c(16);
                var n = e[0], o = e[1], u = e[2], i = e[3], a = e[8], f = e[9], l = e[10], s = e[11], v = Math.cos(r), y = Math.sin(r);
                t[0] = v * n - y * a, t[1] = v * o - y * f, t[2] = v * u - y * l, t[3] = v * i - y * s, t[8] = v * a + y * n, t[9] = v * f + y * o, t[10] = v * l + y * u, t[11] = v * s + y * i, e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                return t;
            }, r25.rotateZ = function(e, r, t) {
                t = t || new c(16);
                var n = e[0], o = e[1], u = e[2], i = e[3], a = e[4], f = e[5], l = e[6], s = e[7], v = Math.cos(r), y = Math.sin(r);
                t[0] = v * n + y * a, t[1] = v * o + y * f, t[2] = v * u + y * l, t[3] = v * i + y * s, t[4] = v * a - y * n, t[5] = v * f - y * o, t[6] = v * l - y * u, t[7] = v * s - y * i, e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                return t;
            }, r25.rotationX = function(e, r) {
                r = r || new c(16);
                var t = Math.cos(e), n = Math.sin(e);
                return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = t, r[6] = n, r[7] = 0, r[8] = 0, r[9] = -n, r[10] = t, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
            }, r25.rotationY = function(e, r) {
                r = r || new c(16);
                var t = Math.cos(e), n = Math.sin(e);
                return r[0] = t, r[1] = 0, r[2] = -n, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = n, r[9] = 0, r[10] = t, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
            }, r25.rotationZ = function(e, r) {
                r = r || new c(16);
                var t = Math.cos(e), n = Math.sin(e);
                return r[0] = t, r[1] = n, r[2] = 0, r[3] = 0, r[4] = -n, r[5] = t, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
            }, r25.scale = function(e, r, t) {
                t = t || new c(16);
                var n = r[0], o = r[1], u = r[2];
                t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = n * e[3], t[4] = o * e[4], t[5] = o * e[5], t[6] = o * e[6], t[7] = o * e[7], t[8] = u * e[8], t[9] = u * e[9], t[10] = u * e[10], t[11] = u * e[11], e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                return t;
            }, r25.scaling = function(e, r) {
                return (r = r || new c(16))[0] = e[0], r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = e[1], r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = e[2], r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
            }, r25.setAxis = function(e, r, t, n) {
                n !== e && (n = l2(e, n));
                var o = 4 * t;
                return n[o + 0] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n;
            }, r25.setDefaultType = function(e) {
                var r = c;
                return c = e, r;
            }, r25.setTranslation = function(e, r, t) {
                t = t || s2(), e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]);
                return t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
            }, r25.transformDirection = function(e, r, t) {
                t = t || o8.create();
                var n = r[0], u = r[1], i = r[2];
                return t[0] = n * e[0] + u * e[4] + i * e[8], t[1] = n * e[1] + u * e[5] + i * e[9], t[2] = n * e[2] + u * e[6] + i * e[10], t;
            }, r25.transformNormal = function(e, r, t) {
                t = t || o8.create();
                var n = v2(e), u = r[0], i = r[1], a = r[2];
                return t[0] = u * n[0] + i * n[1] + a * n[2], t[1] = u * n[4] + i * n[5] + a * n[6], t[2] = u * n[8] + i * n[9] + a * n[10], t;
            }, r25.transformPoint = function(e, r, t) {
                t = t || o8.create();
                var n = r[0], u = r[1], i = r[2], a = n * e[3] + u * e[7] + i * e[11] + e[15];
                return t[0] = (n * e[0] + u * e[4] + i * e[8] + e[12]) / a, t[1] = (n * e[1] + u * e[5] + i * e[9] + e[13]) / a, t[2] = (n * e[2] + u * e[6] + i * e[10] + e[14]) / a, t;
            }, r25.translate = function(e, r, t) {
                t = t || new c(16);
                var n = r[0], o = r[1], u = r[2], i = e[0], a = e[1], f = e[2], l = e[3], s = e[4], v = e[5], y = e[6], b = e[7], m = e[8], p = e[9], d = e[10], w = e[11], x = e[12], h = e[13], F = e[14], E = e[15];
                e !== t && (t[0] = i, t[1] = a, t[2] = f, t[3] = l, t[4] = s, t[5] = v, t[6] = y, t[7] = b, t[8] = m, t[9] = p, t[10] = d, t[11] = w);
                return t[12] = i * n + s * o + m * u + x, t[13] = a * n + v * o + p * u + h, t[14] = f * n + y * o + d * u + F, t[15] = l * n + b * o + w * u + E, t;
            }, r25.translation = function(e, r) {
                return (r = r || new c(16))[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
            }, r25.transpose = function(e, r) {
                if ((r = r || new c(16)) === e) {
                    var t;
                    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, r;
                }
                var n = e[0], o = e[1], u = e[2], i = e[3], a = e[4], f = e[5], l = e[6], s = e[7], v = e[8], y = e[9], b = e[10], m = e[11], p = e[12], d = e[13], w = e[14], x = e[15];
                return r[0] = n, r[1] = a, r[2] = v, r[3] = p, r[4] = o, r[5] = f, r[6] = y, r[7] = d, r[8] = u, r[9] = l, r[10] = b, r[11] = w, r[12] = i, r[13] = s, r[14] = m, r[15] = x, r;
            };
            var o8 = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n11(e) && "function" != typeof e) return {
                    default: e
                };
                var r = u6();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = e[i];
                }
                t.default = e, r && r.set(e, t);
                return t;
            }(t16(2));
            function u6() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u6 = function() {
                    return e;
                }, e;
            }
            var i8, a4, f4, c = Float32Array;
            function l2(e, r) {
                return (r = r || new c(16))[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r[9] = e[9], r[10] = e[10], r[11] = e[11], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15], r;
            }
            function s2(e) {
                return (e = e || new c(16))[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
            }
            function v2(e, r) {
                r = r || new c(16);
                var t = e[0], n = e[1], o = e[2], u = e[3], i = e[4], a = e[5], f = e[6], l = e[7], s = e[8], v = e[9], y = e[10], b = e[11], m = e[12], p = e[13], d = e[14], w = e[15], x = y * w, h = d * b, F = f * w, E = d * l, A = f * b, j = y * l, O = o * w, _ = d * u, S = o * b, M = y * u, R = o * l, P = f * u, g = s * p, T = m * v, z = i * p, U = m * a, C = i * v, k = s * a, W = t * p, I = m * n, B = t * v, L = s * n, G = t * a, X = i * n, D = x * a + E * v + A * p - (h * a + F * v + j * p), N = h * n + O * v + M * p - (x * n + _ * v + S * p), H = F * n + _ * a + R * p - (E * n + O * a + P * p), q = j * n + S * a + P * v - (A * n + M * a + R * v), V = 1 / (t * D + i * N + s * H + m * q);
                return r[0] = V * D, r[1] = V * N, r[2] = V * H, r[3] = V * q, r[4] = V * (h * i + F * s + j * m - (x * i + E * s + A * m)), r[5] = V * (x * t + _ * s + S * m - (h * t + O * s + M * m)), r[6] = V * (E * t + O * i + P * m - (F * t + _ * i + R * m)), r[7] = V * (A * t + M * i + R * s - (j * t + S * i + P * s)), r[8] = V * (g * l + U * b + C * w - (T * l + z * b + k * w)), r[9] = V * (T * u + W * b + L * w - (g * u + I * b + B * w)), r[10] = V * (z * u + I * l + G * w - (U * u + W * l + X * w)), r[11] = V * (k * u + B * l + X * b - (C * u + L * l + G * b)), r[12] = V * (z * y + k * d + T * f - (C * d + g * f + U * y)), r[13] = V * (B * d + g * o + I * y - (W * y + L * d + T * o)), r[14] = V * (W * f + X * d + U * o - (G * d + z * o + I * f)), r[15] = V * (G * y + C * o + L * f - (B * f + X * y + k * o)), r;
            }
        },
        function(e27, r26, t17) {
            "use strict";
            function n12(e28) {
                return (n12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e28);
            }
            r26.__esModule = !0, r26.createAttribsFromArrays = x1, r26.createBuffersFromArrays = function(e29, r27) {
                var t18 = {
                };
                Object.keys(r27).forEach(function(n) {
                    t18[n] = F1(e29, r27[n], n);
                }), r27.indices ? (t18.numElements = r27.indices.length, t18.elementType = o9.getGLTypeForTypedArray(w(r27.indices), "indices")) : t18.numElements = (function(e) {
                    var r, t;
                    for(t = 0; t < h1.length && !((r = h1[t]) in e); ++t);
                    t === h1.length && (r = Object.keys(e)[0]);
                    var n = e[r], o = y2(n).length;
                    if (void 0 === o) return 1;
                    var u = d(n, r), i = o / u;
                    if (o % u > 0) throw new Error("numComponents ".concat(u, " not correct for length ").concat(o));
                    return i;
                })(r27);
                return t18;
            }, r26.createBufferFromArray = F1, r26.createBufferFromTypedArray = s3, r26.createBufferInfoFromArrays = function(e30, r28, t19) {
                var n13 = x1(e30, r28), u8 = Object.assign({
                }, t19 || {
                });
                u8.attribs = Object.assign({
                }, t19 ? t19.attribs : {
                }, n13);
                var i10 = r28.indices;
                if (i10) {
                    var a = w(i10, "indices");
                    u8.indices = s3(e30, a, 34963), u8.numElements = a.length, u8.elementType = o9.getGLTypeForTypedArray(a);
                } else u8.numElements || (u8.numElements = (function(e, r) {
                    var t, n;
                    for(n = 0; n < h1.length && !((t = h1[n]) in r) && !((t = c.attribPrefix + t) in r); ++n);
                    n === h1.length && (t = Object.keys(r)[0]);
                    var o = r[t];
                    if (!o.buffer) return 1;
                    e.bindBuffer(f, o.buffer);
                    var u = e.getBufferParameter(f, 34660);
                    e.bindBuffer(f, null);
                    var i = (v = o.type, 5120 === v || 5121 === v ? 1 : 5122 === v || 5123 === v ? 2 : 5124 === v || 5125 === v || 5126 === v ? 4 : 0), a = u / i, l = o.numComponents || o.size, s = a / l;
                    var v;
                    if (s % 1 != 0) throw new Error("numComponents ".concat(l, " not correct for length ").concat(length));
                    return s;
                })(e30, u8.attribs));
                return u8;
            }, r26.setAttribInfoBufferFromArray = function(e, r, t, n) {
                t = w(t), void 0 !== n ? (e.bindBuffer(f, r.buffer), e.bufferSubData(f, n, t)) : l3(e, f, r.buffer, t, r.drawType);
            }, r26.setAttributePrefix = function(e) {
                c.attribPrefix = e;
            }, r26.setAttributeDefaults_ = function(e) {
                u7.copyExistingProperties(e, c);
            }, r26.getNumComponents_ = d, r26.getArray_ = y2;
            var o9 = a5(t17(1)), u7 = a5(t17(0));
            function i9() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i9 = function() {
                    return e;
                }, e;
            }
            function a5(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n12(e) && "function" != typeof e) return {
                    default: e
                };
                var r = i9();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            var f = 34962, c = {
                attribPrefix: ""
            };
            function l3(e, r, t, n, o) {
                e.bindBuffer(r, t), e.bufferData(r, n, o || 35044);
            }
            function s3(e, r, t, n) {
                if (u7.isBuffer(e, r)) return r;
                t = t || f;
                var o = e.createBuffer();
                return l3(e, t, o, r, n), o;
            }
            function v3(e) {
                return "indices" === e;
            }
            function y2(e) {
                return e.length ? e : e.data;
            }
            var b2 = /coord|texture/i, m2 = /color|colour/i;
            function p(e, r) {
                var t;
                if (r % (t = b2.test(e) ? 2 : m2.test(e) ? 4 : 3) > 0) throw new Error("Can not guess numComponents for attribute '".concat(e, "'. Tried ").concat(t, " but ").concat(r, " values is not evenly divisible by ").concat(t, ". You should specify it."));
                return t;
            }
            function d(e, r) {
                return e.numComponents || e.size || p(r, y2(e).length);
            }
            function w(e, r) {
                if (o9.isArrayBuffer(e)) return e;
                if (o9.isArrayBuffer(e.data)) return e.data;
                Array.isArray(e) && (e = {
                    data: e
                });
                var t = e.type;
                return t || (t = v3(r) ? Uint16Array : Float32Array), new t(e.data);
            }
            function x1(e31, r) {
                var t = {
                };
                return Object.keys(r).forEach(function(n) {
                    if (!v3(n)) {
                        var u = r[n], i = u.attrib || u.name || u.attribName || c.attribPrefix + n;
                        if (u.value) {
                            if (!Array.isArray(u.value) && !o9.isArrayBuffer(u.value)) throw new Error("array.value is not array or typedarray");
                            t[i] = {
                                value: u.value
                            };
                        } else {
                            var a, l, y, b;
                            if (u.buffer && u.buffer instanceof WebGLBuffer) a = u.buffer, b = u.numComponents || u.size, l = u.type, y = u.normalize;
                            else if ("number" == typeof u || "number" == typeof u.data) {
                                var m = u.data || u, x = u.type || Float32Array, h = m * x.BYTES_PER_ELEMENT;
                                l = o9.getGLTypeForTypedArrayType(x), y = void 0 !== u.normalize ? u.normalize : (E = x) === Int8Array || E === Uint8Array, b = u.numComponents || u.size || p(n, m), a = e31.createBuffer(), e31.bindBuffer(f, a), e31.bufferData(f, h, u.drawType || 35044);
                            } else {
                                var F = w(u, n);
                                a = s3(e31, F, void 0, u.drawType), l = o9.getGLTypeForTypedArray(F), y = void 0 !== u.normalize ? u.normalize : (function(e) {
                                    return e instanceof Int8Array || e instanceof Uint8Array;
                                })(F), b = d(u, n);
                            }
                            t[i] = {
                                buffer: a,
                                numComponents: b,
                                type: l,
                                normalize: y,
                                stride: u.stride || 0,
                                offset: u.offset || 0,
                                divisor: void 0 === u.divisor ? void 0 : u.divisor,
                                drawType: u.drawType
                            };
                        }
                    }
                    var E;
                }), e31.bindBuffer(f, null), t;
            }
            var h1 = [
                "position",
                "positions",
                "a_position"
            ];
            function F1(e, r, t) {
                var n = "indices" === t ? 34963 : f;
                return s3(e, w(r, t), n);
            }
        },
        function(e32, r29, t20) {
            "use strict";
            function n14(e33) {
                return (n14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e33);
            }
            r29.__esModule = !0, r29.setTextureDefaults_ = function(e) {
                i11.copyExistingProperties(e, s4), e.textureColor && oe(e.textureColor);
            }, r29.createSampler = le, r29.createSamplers = function(e, r) {
                var t = {
                };
                return Object.keys(r).forEach(function(n) {
                    t[n] = le(e, r[n]);
                }), t;
            }, r29.setSamplerParameters = ce, r29.createTexture = _e, r29.setEmptyTexture = Oe, r29.setTextureFromArray = je, r29.loadTextureFromUrl = Fe, r29.setTextureFromElement = me, r29.setTextureFilteringForSize = se, r29.setTextureParameters = fe, r29.setDefaultTextureColor = oe, r29.createTextures = function(e34, r, t) {
                t = t || pe;
                var n = 0, o = [], u10 = {
                }, i = {
                };
                function a() {
                    0 === n && setTimeout(function() {
                        t(o.length ? o : void 0, u10, i);
                    }, 0);
                }
                return Object.keys(r).forEach(function(t) {
                    var f, c, l = r[t];
                    ("string" == typeof (c = l.src) || Array.isArray(c) && "string" == typeof c[0]) && (f = function(e, r, u) {
                        i[t] = u, --n, e && o.push(e), a();
                    }, ++n), u10[t] = _e(e34, l, f);
                }), a(), u10;
            }, r29.resizeTexture = function(e, r, t, n, o, u) {
                n = n || t.width, o = o || t.height, u = u || t.depth;
                var i = t.target || E1;
                e.bindTexture(i, r);
                var a, f = t.level || 0, c = t.internalFormat || t.format || p2, l = J(c), s = t.format || l.format, y = t.src;
                a = y && (v4(y) || Array.isArray(y) && "number" == typeof y[0]) ? t.type || te(e, y, l.type) : t.type || l.type;
                if (i === A) for(var b = 0; b < 6; ++b)e.texImage2D(_1 + b, f, c, n, o, 0, s, a, null);
                else i === j || i === O ? e.texImage3D(i, f, c, n, o, u, 0, s, a, null) : e.texImage2D(i, f, c, n, o, 0, s, a, null);
            }, r29.canGenerateMipmap = ee, r29.canFilter = re, r29.getNumComponentsForFormat = function(e) {
                var r = Y[e];
                if (!r) throw "unknown format: " + e;
                return r.u;
            }, r29.getBytesPerElementForInternalFormat = Z, r29.getFormatAndTypeForInternalFormat = J;
            var o10 = f5(t20(3)), u9 = f5(t20(1)), i11 = f5(t20(0));
            function a6() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return a6 = function() {
                    return e;
                }, e;
            }
            function f5(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n14(e) && "function" != typeof e) return {
                    default: e
                };
                var r = a6();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            var c4, l4, s4 = {
                textureColor: new Uint8Array([
                    128,
                    192,
                    255,
                    255
                ]),
                textureOptions: {
                },
                crossOrigin: void 0
            }, v4 = u9.isArrayBuffer, y3 = function() {
                return c4 = c4 || ("undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null);
            }, b3 = 6406, m3 = 6407, p2 = 6408, d1 = 6409, w1 = 6410, x2 = 6402, h2 = 34041, F2 = 33071, E1 = 3553, A = 34067, j = 32879, O = 35866, _1 = 34069, S1 = 10241, M1 = 10240, R1 = 10242, P1 = 10243, g = 3317, T1 = 5120, z = 5121, U = 5122, C = 5123, k = 5124, W = 5125, I = 5126, B = 5131, L = 36193, G = 33640, X = 33319, D = 33320, N = 6403, H = 36244, q = 36248, V = 36249, Y = {
            }, K = Y;
            function $(e35) {
                if (!l4) {
                    var r = {
                    };
                    r[6406] = {
                        v: b3,
                        h: !0,
                        F: !0,
                        A: [
                            1,
                            2,
                            2,
                            4
                        ],
                        type: [
                            z,
                            B,
                            L,
                            I
                        ]
                    }, r[6409] = {
                        v: d1,
                        h: !0,
                        F: !0,
                        A: [
                            1,
                            2,
                            2,
                            4
                        ],
                        type: [
                            z,
                            B,
                            L,
                            I
                        ]
                    }, r[6410] = {
                        v: w1,
                        h: !0,
                        F: !0,
                        A: [
                            2,
                            4,
                            4,
                            8
                        ],
                        type: [
                            z,
                            B,
                            L,
                            I
                        ]
                    }, r[m3] = {
                        v: m3,
                        h: !0,
                        F: !0,
                        A: [
                            3,
                            6,
                            6,
                            12,
                            2
                        ],
                        type: [
                            z,
                            B,
                            L,
                            I,
                            33635
                        ]
                    }, r[p2] = {
                        v: p2,
                        h: !0,
                        F: !0,
                        A: [
                            4,
                            8,
                            8,
                            16,
                            2,
                            2
                        ],
                        type: [
                            z,
                            B,
                            L,
                            I,
                            32819,
                            32820
                        ]
                    }, r[6402] = {
                        v: x2,
                        h: !0,
                        F: !1,
                        A: [
                            2,
                            4
                        ],
                        type: [
                            W,
                            C
                        ]
                    }, r[33321] = {
                        v: N,
                        h: !0,
                        F: !0,
                        A: [
                            1
                        ],
                        type: [
                            z
                        ]
                    }, r[36756] = {
                        v: N,
                        h: !1,
                        F: !0,
                        A: [
                            1
                        ],
                        type: [
                            T1
                        ]
                    }, r[33325] = {
                        v: N,
                        h: !1,
                        F: !0,
                        A: [
                            4,
                            2
                        ],
                        type: [
                            I,
                            B
                        ]
                    }, r[33326] = {
                        v: N,
                        h: !1,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            I
                        ]
                    }, r[33330] = {
                        v: H,
                        h: !0,
                        F: !1,
                        A: [
                            1
                        ],
                        type: [
                            z
                        ]
                    }, r[33329] = {
                        v: H,
                        h: !0,
                        F: !1,
                        A: [
                            1
                        ],
                        type: [
                            T1
                        ]
                    }, r[33332] = {
                        v: H,
                        h: !0,
                        F: !1,
                        A: [
                            2
                        ],
                        type: [
                            C
                        ]
                    }, r[33331] = {
                        v: H,
                        h: !0,
                        F: !1,
                        A: [
                            2
                        ],
                        type: [
                            U
                        ]
                    }, r[33334] = {
                        v: H,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            W
                        ]
                    }, r[33333] = {
                        v: H,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            k
                        ]
                    }, r[33323] = {
                        v: X,
                        h: !0,
                        F: !0,
                        A: [
                            2
                        ],
                        type: [
                            z
                        ]
                    }, r[36757] = {
                        v: X,
                        h: !1,
                        F: !0,
                        A: [
                            2
                        ],
                        type: [
                            T1
                        ]
                    }, r[33327] = {
                        v: X,
                        h: !1,
                        F: !0,
                        A: [
                            8,
                            4
                        ],
                        type: [
                            I,
                            B
                        ]
                    }, r[33328] = {
                        v: X,
                        h: !1,
                        F: !1,
                        A: [
                            8
                        ],
                        type: [
                            I
                        ]
                    }, r[33336] = {
                        v: D,
                        h: !0,
                        F: !1,
                        A: [
                            2
                        ],
                        type: [
                            z
                        ]
                    }, r[33335] = {
                        v: D,
                        h: !0,
                        F: !1,
                        A: [
                            2
                        ],
                        type: [
                            T1
                        ]
                    }, r[33338] = {
                        v: D,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            C
                        ]
                    }, r[33337] = {
                        v: D,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            U
                        ]
                    }, r[33340] = {
                        v: D,
                        h: !0,
                        F: !1,
                        A: [
                            8
                        ],
                        type: [
                            W
                        ]
                    }, r[33339] = {
                        v: D,
                        h: !0,
                        F: !1,
                        A: [
                            8
                        ],
                        type: [
                            k
                        ]
                    }, r[32849] = {
                        v: m3,
                        h: !0,
                        F: !0,
                        A: [
                            3
                        ],
                        type: [
                            z
                        ]
                    }, r[35905] = {
                        v: m3,
                        h: !1,
                        F: !0,
                        A: [
                            3
                        ],
                        type: [
                            z
                        ]
                    }, r[36194] = {
                        v: m3,
                        h: !0,
                        F: !0,
                        A: [
                            3,
                            2
                        ],
                        type: [
                            z,
                            33635
                        ]
                    }, r[36758] = {
                        v: m3,
                        h: !1,
                        F: !0,
                        A: [
                            3
                        ],
                        type: [
                            T1
                        ]
                    }, r[35898] = {
                        v: m3,
                        h: !1,
                        F: !0,
                        A: [
                            12,
                            6,
                            4
                        ],
                        type: [
                            I,
                            B,
                            35899
                        ]
                    }, r[35901] = {
                        v: m3,
                        h: !1,
                        F: !0,
                        A: [
                            12,
                            6,
                            4
                        ],
                        type: [
                            I,
                            B,
                            35902
                        ]
                    }, r[34843] = {
                        v: m3,
                        h: !1,
                        F: !0,
                        A: [
                            12,
                            6
                        ],
                        type: [
                            I,
                            B
                        ]
                    }, r[34837] = {
                        v: m3,
                        h: !1,
                        F: !1,
                        A: [
                            12
                        ],
                        type: [
                            I
                        ]
                    }, r[36221] = {
                        v: q,
                        h: !1,
                        F: !1,
                        A: [
                            3
                        ],
                        type: [
                            z
                        ]
                    }, r[36239] = {
                        v: q,
                        h: !1,
                        F: !1,
                        A: [
                            3
                        ],
                        type: [
                            T1
                        ]
                    }, r[36215] = {
                        v: q,
                        h: !1,
                        F: !1,
                        A: [
                            6
                        ],
                        type: [
                            C
                        ]
                    }, r[36233] = {
                        v: q,
                        h: !1,
                        F: !1,
                        A: [
                            6
                        ],
                        type: [
                            U
                        ]
                    }, r[36209] = {
                        v: q,
                        h: !1,
                        F: !1,
                        A: [
                            12
                        ],
                        type: [
                            W
                        ]
                    }, r[36227] = {
                        v: q,
                        h: !1,
                        F: !1,
                        A: [
                            12
                        ],
                        type: [
                            k
                        ]
                    }, r[32856] = {
                        v: p2,
                        h: !0,
                        F: !0,
                        A: [
                            4
                        ],
                        type: [
                            z
                        ]
                    }, r[35907] = {
                        v: p2,
                        h: !0,
                        F: !0,
                        A: [
                            4
                        ],
                        type: [
                            z
                        ]
                    }, r[36759] = {
                        v: p2,
                        h: !1,
                        F: !0,
                        A: [
                            4
                        ],
                        type: [
                            T1
                        ]
                    }, r[32855] = {
                        v: p2,
                        h: !0,
                        F: !0,
                        A: [
                            4,
                            2,
                            4
                        ],
                        type: [
                            z,
                            32820,
                            G
                        ]
                    }, r[32854] = {
                        v: p2,
                        h: !0,
                        F: !0,
                        A: [
                            4,
                            2
                        ],
                        type: [
                            z,
                            32819
                        ]
                    }, r[32857] = {
                        v: p2,
                        h: !0,
                        F: !0,
                        A: [
                            4
                        ],
                        type: [
                            G
                        ]
                    }, r[34842] = {
                        v: p2,
                        h: !1,
                        F: !0,
                        A: [
                            16,
                            8
                        ],
                        type: [
                            I,
                            B
                        ]
                    }, r[34836] = {
                        v: p2,
                        h: !1,
                        F: !1,
                        A: [
                            16
                        ],
                        type: [
                            I
                        ]
                    }, r[36220] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            z
                        ]
                    }, r[36238] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            T1
                        ]
                    }, r[36975] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            G
                        ]
                    }, r[36214] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            8
                        ],
                        type: [
                            C
                        ]
                    }, r[36232] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            8
                        ],
                        type: [
                            U
                        ]
                    }, r[36226] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            16
                        ],
                        type: [
                            k
                        ]
                    }, r[36208] = {
                        v: V,
                        h: !0,
                        F: !1,
                        A: [
                            16
                        ],
                        type: [
                            W
                        ]
                    }, r[33189] = {
                        v: x2,
                        h: !0,
                        F: !1,
                        A: [
                            2,
                            4
                        ],
                        type: [
                            C,
                            W
                        ]
                    }, r[33190] = {
                        v: x2,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            W
                        ]
                    }, r[36012] = {
                        v: x2,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            I
                        ]
                    }, r[35056] = {
                        v: h2,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            34042
                        ]
                    }, r[36013] = {
                        v: h2,
                        h: !0,
                        F: !1,
                        A: [
                            4
                        ],
                        type: [
                            36269
                        ]
                    }, Object.keys(r).forEach(function(e36) {
                        var t = r[e36];
                        t.bytesPerElementMap = {
                        }, t.A.forEach(function(e, r) {
                            var n = t.type[r];
                            t.bytesPerElementMap[n] = e;
                        });
                    }), l4 = r;
                }
                return l4[e35];
            }
            function Z(e, r) {
                var t = $(e);
                if (!t) throw "unknown internal format";
                var n = t.bytesPerElementMap[r];
                if (void 0 === n) throw "unknown internal format";
                return n;
            }
            function J(e) {
                var r = $(e);
                if (!r) throw "unknown internal format";
                return {
                    format: r.v,
                    type: r.type[0]
                };
            }
            function Q(e) {
                return 0 == (e & e - 1);
            }
            function ee(e, r, t, n) {
                if (!o10.isWebGL2(e)) return Q(r) && Q(t);
                var u = $(n);
                if (!u) throw "unknown internal format";
                return u.h && u.F;
            }
            function re(e) {
                var r = $(e);
                if (!r) throw "unknown internal format";
                return r.F;
            }
            function te(e, r, t) {
                return v4(r) ? u9.getGLTypeForTypedArray(r) : t || z;
            }
            function ne(e, r, t, n, o) {
                if (o % 1 != 0) throw "can't guess dimensions";
                if (t || n) {
                    if (n) {
                        if (!t && (t = o / n) % 1) throw "can't guess dimensions";
                    } else if ((n = o / t) % 1) throw "can't guess dimensions";
                } else {
                    var u = Math.sqrt(o / (r === A ? 6 : 1));
                    u % 1 == 0 ? (t = u, n = u) : (t = o, n = 1);
                }
                return {
                    width: t,
                    height: n
                };
            }
            function oe(e) {
                s4.textureColor = new Uint8Array([
                    255 * e[0],
                    255 * e[1],
                    255 * e[2],
                    255 * e[3]
                ]);
            }
            function ue(e, r) {
                void 0 !== r.colorspaceConversion && e.pixelStorei(37443, r.colorspaceConversion), void 0 !== r.premultiplyAlpha && e.pixelStorei(37441, r.premultiplyAlpha), void 0 !== r.flipY && e.pixelStorei(37440, r.flipY);
            }
            function ie(e) {
                e.pixelStorei(g, 4), o10.isWebGL2(e) && (e.pixelStorei(3314, 0), e.pixelStorei(32878, 0), e.pixelStorei(3316, 0), e.pixelStorei(3315, 0), e.pixelStorei(32877, 0));
            }
            function ae(e, r, t, n) {
                n.minMag && (t.call(e, r, S1, n.minMag), t.call(e, r, M1, n.minMag)), n.min && t.call(e, r, S1, n.min), n.mag && t.call(e, r, M1, n.mag), n.wrap && (t.call(e, r, R1, n.wrap), t.call(e, r, P1, n.wrap), (r === j || i11.isSampler(e, r)) && t.call(e, r, 32882, n.wrap)), n.wrapR && t.call(e, r, 32882, n.wrapR), n.wrapS && t.call(e, r, R1, n.wrapS), n.wrapT && t.call(e, r, P1, n.wrapT), n.minLod && t.call(e, r, 33082, n.minLod), n.maxLod && t.call(e, r, 33083, n.maxLod), n.baseLevel && t.call(e, r, 33084, n.baseLevel), n.maxLevel && t.call(e, r, 33085, n.maxLevel);
            }
            function fe(e, r, t) {
                var n = t.target || E1;
                e.bindTexture(n, r), ae(e, n, e.texParameteri, t);
            }
            function ce(e, r, t) {
                ae(e, r, e.samplerParameteri, t);
            }
            function le(e, r) {
                var t = e.createSampler();
                return ce(e, t, r), t;
            }
            function se(e, r, t, n, o, u) {
                t = t || s4.textureOptions, u = u || p2;
                var i = t.target || E1;
                if (n = n || t.width, o = o || t.height, e.bindTexture(i, r), ee(e, n, o, u)) e.generateMipmap(i);
                else {
                    var a = re(u) ? 9729 : 9728;
                    e.texParameteri(i, S1, a), e.texParameteri(i, M1, a), e.texParameteri(i, R1, F2), e.texParameteri(i, P1, F2);
                }
            }
            function ve(e) {
                return !0 === e.auto || void 0 === e.auto && void 0 === e.level;
            }
            function ye(e, r) {
                return (r = r || {
                }).cubeFaceOrder || [
                    _1,
                    34070,
                    34071,
                    34072,
                    34073,
                    34074
                ];
            }
            function be(e37, r30) {
                var t = ye(0, r30).map(function(e, r) {
                    return {
                        face: e,
                        ndx: r
                    };
                });
                return t.sort(function(e, r) {
                    return e.face - r.face;
                }), t;
            }
            function me(e, r31, t21, n15) {
                var o11 = (n15 = n15 || s4.textureOptions).target || E1, u = n15.level || 0, i = t21.width, a = t21.height, f = n15.internalFormat || n15.format || p2, c5 = J(f), l = n15.format || c5.format, v = n15.type || c5.type;
                if (ue(e, n15), e.bindTexture(o11, r31), o11 === A) {
                    var b, m, d = t21.width, w = t21.height;
                    if (d / 6 === w) b = w, m = [
                        0,
                        0,
                        1,
                        0,
                        2,
                        0,
                        3,
                        0,
                        4,
                        0,
                        5,
                        0
                    ];
                    else if (w / 6 === d) b = d, m = [
                        0,
                        0,
                        0,
                        1,
                        0,
                        2,
                        0,
                        3,
                        0,
                        4,
                        0,
                        5
                    ];
                    else if (d / 3 == w / 2) b = d / 3, m = [
                        0,
                        0,
                        1,
                        0,
                        2,
                        0,
                        0,
                        1,
                        1,
                        1,
                        2,
                        1
                    ];
                    else {
                        if (d / 2 != w / 3) throw "can't figure out cube map from element: " + (t21.src ? t21.src : t21.nodeName);
                        b = d / 2, m = [
                            0,
                            0,
                            1,
                            0,
                            0,
                            1,
                            1,
                            1,
                            0,
                            2,
                            1,
                            2
                        ];
                    }
                    var x = y3();
                    x ? (x.canvas.width = b, x.canvas.height = b, i = b, a = b, be(0, n15).forEach(function(r) {
                        var n = m[2 * r.ndx + 0] * b, o = m[2 * r.ndx + 1] * b;
                        x.drawImage(t21, n, o, b, b, 0, 0, b, b), e.texImage2D(r.face, u, f, l, v, x.canvas);
                    }), x.canvas.width = 1, x.canvas.height = 1) : "undefined" != typeof createImageBitmap && (i = b, a = b, be(0, n15).forEach(function(c) {
                        var s = m[2 * c.ndx + 0] * b, y = m[2 * c.ndx + 1] * b;
                        e.texImage2D(c.face, u, f, b, b, 0, l, v, null), createImageBitmap(t21, s, y, b, b, {
                            premultiplyAlpha: "none",
                            colorSpaceConversion: "none"
                        }).then(function(t) {
                            ue(e, n15), e.bindTexture(o11, r31), e.texImage2D(c.face, u, f, l, v, t), ve(n15) && se(e, r31, n15, i, a, f);
                        });
                    }));
                } else if (o11 === j || o11 === O) {
                    var h = Math.min(t21.width, t21.height), F = Math.max(t21.width, t21.height), _ = F / h;
                    if (_ % 1 != 0) throw "can not compute 3D dimensions of element";
                    var S = t21.width === F ? 1 : 0, M = t21.height === F ? 1 : 0;
                    e.pixelStorei(g, 1), e.pixelStorei(3314, t21.width), e.pixelStorei(32878, 0), e.pixelStorei(32877, 0), e.texImage3D(o11, u, f, h, h, h, 0, l, v, null);
                    for(var R = 0; R < _; ++R){
                        var P = R * h * S, T = R * h * M;
                        e.pixelStorei(3316, P), e.pixelStorei(3315, T), e.texSubImage3D(o11, u, 0, 0, R, h, h, 1, l, v, t21);
                    }
                    ie(e);
                } else e.texImage2D(o11, u, f, l, v, t21);
                ve(n15) && se(e, r31, n15, i, a, f), fe(e, r31, n15);
            }
            function pe() {
            }
            function de(e38, r32) {
                return void 0 !== r32 || (function(e) {
                    if ("undefined" != typeof document) {
                        var r = document.createElement("a");
                        return r.href = e, r.hostname === location.hostname && r.port === location.port && r.protocol === location.protocol;
                    }
                    var t = new URL(location.href).origin;
                    return new URL(e, location.href).origin === t;
                })(e38) ? r32 : "anonymous";
            }
            function we(e) {
                return "undefined" != typeof ImageBitmap && e instanceof ImageBitmap || "undefined" != typeof ImageData && e instanceof ImageData || "undefined" != typeof HTMLElement && e instanceof HTMLElement;
            }
            function xe(e39, r33, t22) {
                return we(e39) ? (setTimeout(function() {
                    t22(null, e39);
                }), e39) : (function(e40, r34, t) {
                    var n;
                    if (t = t || pe, r34 = void 0 !== r34 ? r34 : s4.crossOrigin, r34 = de(e40, r34), "undefined" != typeof Image) {
                        n = new Image, void 0 !== r34 && (n.crossOrigin = r34);
                        var o = function() {
                            n.removeEventListener("error", u), n.removeEventListener("load", a), n = null;
                        }, u = function() {
                            var r = "couldn't load image: " + e40;
                            i11.error(r), t(r, n), o();
                        }, a = function() {
                            t(null, n), o();
                        };
                        return n.addEventListener("error", u), n.addEventListener("load", a), n.src = e40, n;
                    }
                    if ("undefined" != typeof ImageBitmap) {
                        var f, c, l = function() {
                            t(f, c);
                        }, v = {
                        };
                        r34 && (v.mode = "cors"), fetch(e40, v).then(function(e) {
                            if (!e.ok) throw e;
                            return e.blob();
                        }).then(function(e) {
                            return createImageBitmap(e, {
                                premultiplyAlpha: "none",
                                colorSpaceConversion: "none"
                            });
                        }).then(function(e) {
                            c = e, setTimeout(l);
                        }).catch(function(e) {
                            f = e, setTimeout(l);
                        }), n = null;
                    }
                    return n;
                })(e39, r33, t22);
            }
            function he(e41, r, t) {
                var n = (t = t || s4.textureOptions).target || E1;
                if (e41.bindTexture(n, r), !1 !== t.color) {
                    var o = function(e) {
                        return e = e || s4.textureColor, v4(e) ? e : new Uint8Array([
                            255 * e[0],
                            255 * e[1],
                            255 * e[2],
                            255 * e[3]
                        ]);
                    }(t.color);
                    if (n === A) for(var u = 0; u < 6; ++u)e41.texImage2D(_1 + u, 0, p2, 1, 1, 0, p2, z, o);
                    else n === j || n === O ? e41.texImage3D(n, 0, p2, 1, 1, 1, 0, p2, z, o) : e41.texImage2D(n, 0, p2, 1, 1, 0, p2, z, o);
                }
            }
            function Fe(e, r, t, n) {
                return n = n || pe, t = t || s4.textureOptions, he(e, r, t), xe((t = Object.assign({
                }, t)).src, t.crossOrigin, function(o, u) {
                    o ? n(o, r, u) : (me(e, r, u, t), n(null, r, u));
                });
            }
            function Ee(e, r35, t, n) {
                n = n || pe;
                var o12 = t.src;
                if (6 !== o12.length) throw "there must be 6 urls for a cubemap";
                var u = t.level || 0, i = t.internalFormat || t.format || p2, a7 = J(i), f = t.format || a7.format, c = t.type || z, l = t.target || E1;
                if (l !== A) throw "target must be TEXTURE_CUBE_MAP";
                he(e, r35, t), t = Object.assign({
                }, t);
                var s, v = 6, y = [], b = ye(0, t);
                s = o12.map(function(o13, a8) {
                    var m;
                    return xe(o13, t.crossOrigin, (m = b[a8], function(o, a) {
                        --v, o ? y.push(o) : a.width !== a.height ? y.push("cubemap face img is not a square: " + a.src) : (ue(e, t), e.bindTexture(l, r35), 5 === v ? ye().forEach(function(r) {
                            e.texImage2D(r, u, i, f, c, a);
                        }) : e.texImage2D(m, u, i, f, c, a), ve(t) && e.generateMipmap(l)), 0 === v && n(y.length ? y : void 0, r35, s);
                    }));
                });
            }
            function Ae(e, r, t, n) {
                n = n || pe;
                var o14 = t.src, u = t.internalFormat || t.format || p2, i12 = J(u), a = t.format || i12.format, f = t.type || z, c = t.target || O;
                if (c !== j && c !== O) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                he(e, r, t), t = Object.assign({
                }, t);
                var l, s = o14.length, v = [], b = t.level || 0, m = t.width, d = t.height, w = o14.length, x = !0;
                l = o14.map(function(o15, i13) {
                    var p;
                    return xe(o15, t.crossOrigin, (p = i13, function(o, i) {
                        if (--s, o) v.push(o);
                        else {
                            if (ue(e, t), e.bindTexture(c, r), x) {
                                x = !1, m = t.width || i.width, d = t.height || i.height, e.texImage3D(c, b, u, m, d, w, 0, a, f, null);
                                for(var h = 0; h < w; ++h)e.texSubImage3D(c, b, 0, 0, h, m, d, 1, a, f, i);
                            } else {
                                var F, E = i;
                                i.width === m && i.height === d || (E = (F = y3()).canvas, F.canvas.width = m, F.canvas.height = d, F.drawImage(i, 0, 0, m, d)), e.texSubImage3D(c, b, 0, 0, p, m, d, 1, a, f, E), F && E === F.canvas && (F.canvas.width = 0, F.canvas.height = 0);
                            }
                            ve(t) && e.generateMipmap(c);
                        }
                        0 === s && n(v.length ? v : void 0, r, l);
                    }));
                });
            }
            function je(e, r36, t, n16) {
                var i = (n16 = n16 || s4.textureOptions).target || E1;
                e.bindTexture(i, r36);
                var a = n16.width, f = n16.height, c = n16.depth, l = n16.level || 0, y = n16.internalFormat || n16.format || p2, b = J(y), m = n16.format || b.format, d = n16.type || te(0, t, b.type);
                if (v4(t)) t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
                else {
                    var w = u9.getTypedArrayTypeForGLType(d);
                    t = new w(t);
                }
                var x, h = Z(y, d), F = t.byteLength / h;
                if (F % 1) throw "length wrong size for format: " + o10.glEnumToString(e, m);
                if (i === j || i === O) {
                    if (a || f || c) !a || f && c ? !f || a && c ? (x = ne(0, i, a, f, F / c), a = x.width, f = x.height) : (x = ne(0, i, a, c, F / f), a = x.width, c = x.height) : (x = ne(0, i, f, c, F / a), f = x.width, c = x.height);
                    else {
                        var _ = Math.cbrt(F);
                        if (_ % 1 != 0) throw "can't guess cube size of array of numElements: " + F;
                        a = _, f = _, c = _;
                    }
                } else x = ne(0, i, a, f, F), a = x.width, f = x.height;
                if (ie(e), e.pixelStorei(g, n16.unpackAlignment || 1), ue(e, n16), i === A) {
                    var S = F / 6 * (h / t.BYTES_PER_ELEMENT);
                    be(0, n16).forEach(function(r) {
                        var n = S * r.ndx, o = t.subarray(n, n + S);
                        e.texImage2D(r.face, l, y, a, f, 0, m, d, o);
                    });
                } else i === j || i === O ? e.texImage3D(i, l, y, a, f, c, 0, m, d, t) : e.texImage2D(i, l, y, a, f, 0, m, d, t);
                return {
                    width: a,
                    height: f,
                    depth: c,
                    type: d
                };
            }
            function Oe(e, r, t) {
                var n = t.target || E1;
                e.bindTexture(n, r);
                var o = t.level || 0, u = t.internalFormat || t.format || p2, i = J(u), a = t.format || i.format, f = t.type || i.type;
                if (ue(e, t), n === A) for(var c = 0; c < 6; ++c)e.texImage2D(_1 + c, o, u, t.width, t.height, 0, a, f, null);
                else n === j || n === O ? e.texImage3D(n, o, u, t.width, t.height, t.depth, 0, a, f, null) : e.texImage2D(n, o, u, t.width, t.height, 0, a, f, null);
            }
            function _e(e, r, t) {
                t = t || pe, r = r || s4.textureOptions;
                var n = e.createTexture(), o = r.target || E1, u = r.width || 1, i = r.height || 1, a = r.internalFormat || p2;
                e.bindTexture(o, n), o === A && (e.texParameteri(o, R1, F2), e.texParameteri(o, P1, F2));
                var f = r.src;
                if (f) {
                    if ("function" == typeof f && (f = f(e, r)), "string" == typeof f) Fe(e, n, r, t);
                    else if (v4(f) || Array.isArray(f) && ("number" == typeof f[0] || Array.isArray(f[0]) || v4(f[0]))) {
                        var c = je(e, n, f, r);
                        u = c.width, i = c.height;
                    } else Array.isArray(f) && ("string" == typeof f[0] || we(f[0])) ? o === A ? Ee(e, n, r, t) : Ae(e, n, r, t) : (me(e, n, f, r), u = f.width, i = f.height);
                } else Oe(e, n, r);
                return ve(r) && se(e, n, r, u, i, a), fe(e, n, r), n;
            }
            K[6406] = {
                u: 1
            }, K[6409] = {
                u: 1
            }, K[6410] = {
                u: 2
            }, K[m3] = {
                u: 3
            }, K[p2] = {
                u: 4
            }, K[N] = {
                u: 1
            }, K[36244] = {
                u: 1
            }, K[X] = {
                u: 2
            }, K[33320] = {
                u: 2
            }, K[m3] = {
                u: 3
            }, K[36248] = {
                u: 3
            }, K[p2] = {
                u: 4
            }, K[36249] = {
                u: 4
            }, K[6402] = {
                u: 1
            }, K[34041] = {
                u: 2
            };
        },
        function(e42, r37, t23) {
            "use strict";
            function n(e43) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e43);
            }
            r37.__esModule = !0;
            var o16 = {
                m4: !0,
                v3: !0,
                primitives: !0
            };
            r37.primitives = r37.v3 = r37.m4 = void 0;
            var u11 = l(t23(5));
            r37.m4 = u11;
            var i14 = l(t23(2));
            r37.v3 = i14;
            var a = l(t23(9));
            r37.primitives = a;
            var f = t23(10);
            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e;
                }, e;
            }
            function l(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var r = c();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            Object.keys(f).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o16, e) || (r37[e] = f[e]));
            });
        },
        function(e44, r38, t24) {
            "use strict";
            function n17(e45) {
                return (n17 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e45);
            }
            r38.__esModule = !0, r38.create3DFVertices = R2, r38.createAugmentedTypedArray = b4, r38.createCubeVertices = _2, r38.createPlaneVertices = A1, r38.createSphereVertices = j1, r38.createTruncatedConeVertices = S2, r38.createXYQuadVertices = E2, r38.createCrescentVertices = P2, r38.createCylinderVertices = g1, r38.createTorusVertices = T2, r38.createDiscVertices = z1, r38.deindexVertices = function(e) {
                var r = e.indices, t = {
                }, n = r.length;
                return Object.keys(e).filter(m4).forEach(function(o) {
                    for(var u = e[o], i = u.numComponents, a = b4(i, n, u.constructor), f = 0; f < n; ++f)for(var c = r[f] * i, l = 0; l < i; ++l)a.push(u[c + l]);
                    t[o] = a;
                }), t;
            }, r38.flattenNormals = function(e) {
                if (e.indices) throw new Error("can not flatten normals of indexed vertices. deindex them first");
                for(var r = e.normal, t = r.length, n = 0; n < t; n += 9){
                    var o = r[n + 0], u = r[n + 1], i = r[n + 2], a = r[n + 3], f = r[n + 4], c = r[n + 5], l = r[n + 6], s = r[n + 7], v = r[n + 8], y = o + a + l, b = u + f + s, m = i + c + v, p = Math.sqrt(y * y + b * b + m * m);
                    y /= p, b /= p, m /= p, r[n + 0] = y, r[n + 1] = b, r[n + 2] = m, r[n + 3] = y, r[n + 4] = b, r[n + 5] = m, r[n + 6] = y, r[n + 7] = b, r[n + 8] = m;
                }
                return e;
            }, r38.makeRandomVertexColors = function(e, r39) {
                r39 = r39 || {
                };
                var t25 = e.position.numElements, n = b4(4, t25, Uint8Array), o = r39.rand || function(e, r) {
                    var t;
                    return r < 3 ? (t = 256, Math.random() * t | 0) : 255;
                };
                if (e.color = n, e.indices) for(var u = 0; u < t25; ++u)n.push(o(u, 0), o(u, 1), o(u, 2), o(u, 3));
                else for(var i = r39.vertsPerColor || 3, a = t25 / i, f = 0; f < a; ++f)for(var c = [
                    o(f, 0),
                    o(f, 1),
                    o(f, 2),
                    o(f, 3)
                ], l = 0; l < i; ++l)n.push(c);
                return e;
            }, r38.reorientDirections = w2, r38.reorientNormals = x3, r38.reorientPositions = h3, r38.reorientVertices = F3, r38.concatVertices = function(e46) {
                for(var r40, t26 = {
                }, n18 = function(n19) {
                    var o = e46[n19];
                    Object.keys(o).forEach(function(e) {
                        t26[e] || (t26[e] = []), r40 || "indices" === e || (r40 = e);
                        var n = o[e], u = v5(n, e), i = s5(n).length / u;
                        t26[e].push(i);
                    });
                }, o18 = 0; o18 < e46.length; ++o18)n18(o18);
                var u13 = t26[r40], i16 = {
                };
                return Object.keys(t26).forEach(function(r41) {
                    var t27 = function(r) {
                        for(var t, n = 0, o = 0; o < e46.length; ++o){
                            var u = e46[o][r];
                            n += s5(u).length, t && !u.data || (t = u);
                        }
                        return {
                            length: n,
                            spec: t
                        };
                    }(r41), n20 = I(t27.spec, t27.length);
                    !function(r, t, n) {
                        for(var o = 0, u = 0, i = 0; i < e46.length; ++i){
                            var a = e46[i][r], f = s5(a);
                            "indices" === r ? (W(f, n, u, o), o += t[i]) : W(f, n, u), u += f.length;
                        }
                    }(r41, u13, s5(n20)), i16[r41] = n20;
                }), i16;
            }, r38.duplicateVertices = function(e) {
                var r = {
                };
                return Object.keys(e).forEach(function(t) {
                    var n = e[t], o = s5(n), u = I(n, o.length);
                    W(o, s5(u), 0), r[t] = u;
                }), r;
            }, r38.createDiscBuffers = r38.createDiscBufferInfo = r38.createTorusBuffers = r38.createTorusBufferInfo = r38.createCylinderBuffers = r38.createCylinderBufferInfo = r38.createCrescentBuffers = r38.createCrescentBufferInfo = r38.createCresentVertices = r38.createCresentBuffers = r38.createCresentBufferInfo = r38.createXYQuadBuffers = r38.createXYQuadBufferInfo = r38.createTruncatedConeBuffers = r38.createTruncatedConeBufferInfo = r38.createSphereBuffers = r38.createSphereBufferInfo = r38.createPlaneBuffers = r38.createPlaneBufferInfo = r38.createCubeBuffers = r38.createCubeBufferInfo = r38.create3DFBuffers = r38.create3DFBufferInfo = void 0;
            var o17 = l5(t24(6)), u12 = l5(t24(0)), i15 = l5(t24(1)), a9 = l5(t24(5)), f6 = l5(t24(2));
            function c6() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c6 = function() {
                    return e;
                }, e;
            }
            function l5(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n17(e) && "function" != typeof e) return {
                    default: e
                };
                var r = c6();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            var s5 = o17.getArray_, v5 = o17.getNumComponents_;
            function y4(e47, r42) {
                var t = 0;
                return e47.push = function() {
                    for(var r = 0; r < arguments.length; ++r){
                        var n = arguments[r];
                        if (n instanceof Array || i15.isArrayBuffer(n)) for(var o = 0; o < n.length; ++o)e47[t++] = n[o];
                        else e47[t++] = n;
                    }
                }, e47.reset = function(e) {
                    t = e || 0;
                }, e47.numComponents = r42, Object.defineProperty(e47, "numElements", {
                    get: function() {
                        return this.length / this.numComponents | 0;
                    }
                }), e47;
            }
            function b4(e, r, t) {
                return y4(new (t || Float32Array)(e * r), e);
            }
            function m4(e) {
                return "indices" !== e;
            }
            function p3(e, r, t) {
                for(var n = e.length, o = new Float32Array(3), u = 0; u < n; u += 3)t(r, [
                    e[u],
                    e[u + 1],
                    e[u + 2]
                ], o), e[u] = o[0], e[u + 1] = o[1], e[u + 2] = o[2];
            }
            function d2(e, r, t) {
                t = t || f6.create();
                var n = r[0], o = r[1], u = r[2];
                return t[0] = n * e[0] + o * e[1] + u * e[2], t[1] = n * e[4] + o * e[5] + u * e[6], t[2] = n * e[8] + o * e[9] + u * e[10], t;
            }
            function w2(e, r) {
                return p3(e, r, a9.transformDirection), e;
            }
            function x3(e, r) {
                return p3(e, a9.inverse(r), d2), e;
            }
            function h3(e, r) {
                return p3(e, r, a9.transformPoint), e;
            }
            function F3(e, r) {
                return Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    t.indexOf("pos") >= 0 ? h3(n, r) : t.indexOf("tan") >= 0 || t.indexOf("binorm") >= 0 ? w2(n, r) : t.indexOf("norm") >= 0 && x3(n, r);
                }), e;
            }
            function E2(e, r, t) {
                return e = e || 2, {
                    position: {
                        numComponents: 2,
                        data: [
                            (r = r || 0) + -1 * (e *= 0.5),
                            (t = t || 0) + -1 * e,
                            r + 1 * e,
                            t + -1 * e,
                            r + -1 * e,
                            t + 1 * e,
                            r + 1 * e,
                            t + 1 * e
                        ]
                    },
                    normal: [
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1
                    ],
                    texcoord: [
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        1,
                        1
                    ],
                    indices: [
                        0,
                        1,
                        2,
                        2,
                        1,
                        3
                    ]
                };
            }
            function A1(e, r, t, n, o) {
                e = e || 1, r = r || 1, t = t || 1, n = n || 1, o = o || a9.identity();
                for(var u = (t + 1) * (n + 1), i = b4(3, u), f = b4(3, u), c = b4(2, u), l = 0; l <= n; l++)for(var s = 0; s <= t; s++){
                    var v = s / t, y = l / n;
                    i.push(e * v - 0.5 * e, 0, r * y - 0.5 * r), f.push(0, 1, 0), c.push(v, y);
                }
                for(var m = t + 1, p = b4(3, t * n * 2, Uint16Array), d = 0; d < n; d++)for(var w = 0; w < t; w++)p.push((d + 0) * m + w, (d + 1) * m + w, (d + 0) * m + w + 1), p.push((d + 1) * m + w, (d + 1) * m + w + 1, (d + 0) * m + w + 1);
                return F3({
                    position: i,
                    normal: f,
                    texcoord: c,
                    indices: p
                }, o);
            }
            function j1(e, r, t, n, o, u, i) {
                if (r <= 0 || t <= 0) throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
                n = n || 0, u = u || 0;
                for(var a = (o = o || Math.PI) - n, f = (i = i || 2 * Math.PI) - u, c = (r + 1) * (t + 1), l = b4(3, c), s = b4(3, c), v = b4(2, c), y = 0; y <= t; y++)for(var m = 0; m <= r; m++){
                    var p = m / r, d = y / t, w = f * p + u, x = a * d + n, h = Math.sin(w), F = Math.cos(w), E = Math.sin(x), A = F * E, j = Math.cos(x), O = h * E;
                    l.push(e * A, e * j, e * O), s.push(A, j, O), v.push(1 - p, d);
                }
                for(var _ = r + 1, S = b4(3, r * t * 2, Uint16Array), M = 0; M < r; M++)for(var R = 0; R < t; R++)S.push((R + 0) * _ + M, (R + 0) * _ + M + 1, (R + 1) * _ + M), S.push((R + 1) * _ + M, (R + 0) * _ + M + 1, (R + 1) * _ + M + 1);
                return {
                    position: l,
                    normal: s,
                    texcoord: v,
                    indices: S
                };
            }
            var O1 = [
                [
                    3,
                    7,
                    5,
                    1
                ],
                [
                    6,
                    2,
                    0,
                    4
                ],
                [
                    6,
                    7,
                    3,
                    2
                ],
                [
                    0,
                    1,
                    5,
                    4
                ],
                [
                    7,
                    6,
                    4,
                    5
                ],
                [
                    2,
                    3,
                    1,
                    0
                ]
            ];
            function _2(e) {
                for(var r = (e = e || 1) / 2, t = [
                    [
                        -r,
                        -r,
                        -r
                    ],
                    [
                        +r,
                        -r,
                        -r
                    ],
                    [
                        -r,
                        +r,
                        -r
                    ],
                    [
                        +r,
                        +r,
                        -r
                    ],
                    [
                        -r,
                        -r,
                        +r
                    ],
                    [
                        +r,
                        -r,
                        +r
                    ],
                    [
                        -r,
                        +r,
                        +r
                    ],
                    [
                        +r,
                        +r,
                        +r
                    ]
                ], n = [
                    [
                        1,
                        0,
                        0
                    ],
                    [
                        -1,
                        0,
                        0
                    ],
                    [
                        0,
                        1,
                        0
                    ],
                    [
                        0,
                        -1,
                        0
                    ],
                    [
                        0,
                        0,
                        1
                    ],
                    [
                        0,
                        0,
                        -1
                    ]
                ], o = [
                    [
                        1,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        1
                    ]
                ], u = b4(3, 24), i = b4(3, 24), a = b4(2, 24), f = b4(3, 12, Uint16Array), c = 0; c < 6; ++c){
                    for(var l = O1[c], s = 0; s < 4; ++s){
                        var v = t[l[s]], y = n[c], m = o[s];
                        u.push(v), i.push(y), a.push(m);
                    }
                    var p = 4 * c;
                    f.push(p + 0, p + 1, p + 2), f.push(p + 0, p + 2, p + 3);
                }
                return {
                    position: u,
                    normal: i,
                    texcoord: a,
                    indices: f
                };
            }
            function S2(e, r, t, n, o, u, i) {
                if (n < 3) throw new Error("radialSubdivisions must be 3 or greater");
                if (o < 1) throw new Error("verticalSubdivisions must be 1 or greater");
                for(var a = void 0 === u || u, f = void 0 === i || i, c = (a ? 2 : 0) + (f ? 2 : 0), l = (n + 1) * (o + 1 + c), s = b4(3, l), v = b4(3, l), y = b4(2, l), m = b4(3, n * (o + c / 2) * 2, Uint16Array), p = n + 1, d = Math.atan2(e - r, t), w = Math.cos(d), x = Math.sin(d), h = o + (f ? 2 : 0), F = a ? -2 : 0; F <= h; ++F){
                    var E = F / o, A = t * E, j = void 0;
                    F < 0 ? (A = 0, E = 1, j = e) : F > o ? (A = t, E = 1, j = r) : j = e + F / o * (r - e), -2 !== F && F !== o + 2 || (j = 0, E = 0), A -= t / 2;
                    for(var O = 0; O < p; ++O){
                        var _ = Math.sin(O * Math.PI * 2 / n), S = Math.cos(O * Math.PI * 2 / n);
                        s.push(_ * j, A, S * j), F < 0 ? v.push(0, -1, 0) : F > o ? v.push(0, 1, 0) : 0 === j ? v.push(0, 0, 0) : v.push(_ * w, x, S * w), y.push(O / n, 1 - E);
                    }
                }
                for(var M = 0; M < o + c; ++M)if (!(1 === M && a || M === o + c - 2 && f)) for(var R = 0; R < n; ++R)m.push(p * (M + 0) + 0 + R, p * (M + 0) + 1 + R, p * (M + 1) + 1 + R), m.push(p * (M + 0) + 0 + R, p * (M + 1) + 1 + R, p * (M + 1) + 0 + R);
                return {
                    position: s,
                    normal: v,
                    texcoord: y,
                    indices: m
                };
            }
            function M2(e, r) {
                r = r || [];
                for(var t = [], n = 0; n < e.length; n += 4){
                    var o = e[n], u = e.slice(n + 1, n + 4);
                    u.push.apply(u, r);
                    for(var i = 0; i < o; ++i)t.push.apply(t, u);
                }
                return t;
            }
            function R2() {
                var e = [
                    0,
                    0,
                    0,
                    0,
                    150,
                    0,
                    30,
                    0,
                    0,
                    0,
                    150,
                    0,
                    30,
                    150,
                    0,
                    30,
                    0,
                    0,
                    30,
                    0,
                    0,
                    30,
                    30,
                    0,
                    100,
                    0,
                    0,
                    30,
                    30,
                    0,
                    100,
                    30,
                    0,
                    100,
                    0,
                    0,
                    30,
                    60,
                    0,
                    30,
                    90,
                    0,
                    67,
                    60,
                    0,
                    30,
                    90,
                    0,
                    67,
                    90,
                    0,
                    67,
                    60,
                    0,
                    0,
                    0,
                    30,
                    30,
                    0,
                    30,
                    0,
                    150,
                    30,
                    0,
                    150,
                    30,
                    30,
                    0,
                    30,
                    30,
                    150,
                    30,
                    30,
                    0,
                    30,
                    100,
                    0,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    100,
                    0,
                    30,
                    100,
                    30,
                    30,
                    30,
                    60,
                    30,
                    67,
                    60,
                    30,
                    30,
                    90,
                    30,
                    30,
                    90,
                    30,
                    67,
                    60,
                    30,
                    67,
                    90,
                    30,
                    0,
                    0,
                    0,
                    100,
                    0,
                    0,
                    100,
                    0,
                    30,
                    0,
                    0,
                    0,
                    100,
                    0,
                    30,
                    0,
                    0,
                    30,
                    100,
                    0,
                    0,
                    100,
                    30,
                    0,
                    100,
                    30,
                    30,
                    100,
                    0,
                    0,
                    100,
                    30,
                    30,
                    100,
                    0,
                    30,
                    30,
                    30,
                    0,
                    30,
                    30,
                    30,
                    100,
                    30,
                    30,
                    30,
                    30,
                    0,
                    100,
                    30,
                    30,
                    100,
                    30,
                    0,
                    30,
                    30,
                    0,
                    30,
                    60,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    0,
                    30,
                    60,
                    0,
                    30,
                    60,
                    30,
                    30,
                    60,
                    0,
                    67,
                    60,
                    30,
                    30,
                    60,
                    30,
                    30,
                    60,
                    0,
                    67,
                    60,
                    0,
                    67,
                    60,
                    30,
                    67,
                    60,
                    0,
                    67,
                    90,
                    30,
                    67,
                    60,
                    30,
                    67,
                    60,
                    0,
                    67,
                    90,
                    0,
                    67,
                    90,
                    30,
                    30,
                    90,
                    0,
                    30,
                    90,
                    30,
                    67,
                    90,
                    30,
                    30,
                    90,
                    0,
                    67,
                    90,
                    30,
                    67,
                    90,
                    0,
                    30,
                    90,
                    0,
                    30,
                    150,
                    30,
                    30,
                    90,
                    30,
                    30,
                    90,
                    0,
                    30,
                    150,
                    0,
                    30,
                    150,
                    30,
                    0,
                    150,
                    0,
                    0,
                    150,
                    30,
                    30,
                    150,
                    30,
                    0,
                    150,
                    0,
                    30,
                    150,
                    30,
                    30,
                    150,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    30,
                    0,
                    150,
                    30,
                    0,
                    0,
                    0,
                    0,
                    150,
                    30,
                    0,
                    150,
                    0
                ], r = M2([
                    18,
                    0,
                    0,
                    1,
                    18,
                    0,
                    0,
                    -1,
                    6,
                    0,
                    1,
                    0,
                    6,
                    1,
                    0,
                    0,
                    6,
                    0,
                    -1,
                    0,
                    6,
                    1,
                    0,
                    0,
                    6,
                    0,
                    1,
                    0,
                    6,
                    1,
                    0,
                    0,
                    6,
                    0,
                    -1,
                    0,
                    6,
                    1,
                    0,
                    0,
                    6,
                    0,
                    -1,
                    0,
                    6,
                    -1,
                    0,
                    0
                ]), t = M2([
                    18,
                    200,
                    70,
                    120,
                    18,
                    80,
                    70,
                    200,
                    6,
                    70,
                    200,
                    210,
                    6,
                    200,
                    200,
                    70,
                    6,
                    210,
                    100,
                    70,
                    6,
                    210,
                    160,
                    70,
                    6,
                    70,
                    180,
                    210,
                    6,
                    100,
                    70,
                    210,
                    6,
                    76,
                    210,
                    100,
                    6,
                    140,
                    210,
                    80,
                    6,
                    90,
                    130,
                    110,
                    6,
                    160,
                    160,
                    220
                ], [
                    255
                ]), n = e.length / 3, o = {
                    position: b4(3, n),
                    texcoord: b4(2, n),
                    normal: b4(3, n),
                    color: b4(4, n, Uint8Array),
                    indices: b4(3, n / 3, Uint16Array)
                };
                o.position.push(e), o.texcoord.push([
                    0.22,
                    0.19,
                    0.22,
                    0.79,
                    0.34,
                    0.19,
                    0.22,
                    0.79,
                    0.34,
                    0.79,
                    0.34,
                    0.19,
                    0.34,
                    0.19,
                    0.34,
                    0.31,
                    0.62,
                    0.19,
                    0.34,
                    0.31,
                    0.62,
                    0.31,
                    0.62,
                    0.19,
                    0.34,
                    0.43,
                    0.34,
                    0.55,
                    0.49,
                    0.43,
                    0.34,
                    0.55,
                    0.49,
                    0.55,
                    0.49,
                    0.43,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0,
                    0,
                    1,
                    1,
                    1,
                    0
                ]), o.normal.push(r), o.color.push(t);
                for(var u = 0; u < n; ++u)o.indices.push(u);
                return o;
            }
            function P2(e48, r43, t28, n, o, u, i17) {
                if (o <= 0) throw new Error("subdivisionDown must be > 0");
                var a = (i17 = i17 || 1) - (u = u || 0), c7 = 2 * (o + 1) * 4, l = b4(3, c7), s = b4(3, c7), v = b4(2, c7);
                function y(e, r, t) {
                    return e + (r - e) * t;
                }
                function m5(r, t, i, c, b, m) {
                    for(var p = 0; p <= o; p++){
                        var d = t / 1, w = p / o, x = 2 * (d - 0.5), h = (u + w * a) * Math.PI, F = Math.sin(h), E = Math.cos(h), A = y(e48, r, F), j = x * n, O = E * e48, _ = F * A;
                        l.push(j, O, _);
                        var S = f6.add(f6.multiply([
                            0,
                            F,
                            E
                        ], i), c);
                        s.push(S), v.push(d * b + m, w);
                    }
                }
                for(var p4 = 0; p4 < 2; p4++){
                    var d3 = 2 * (p4 / 1 - 0.5);
                    m5(r43, p4, [
                        1,
                        1,
                        1
                    ], [
                        0,
                        0,
                        0
                    ], 1, 0), m5(r43, p4, [
                        0,
                        0,
                        0
                    ], [
                        d3,
                        0,
                        0
                    ], 0, 0), m5(t28, p4, [
                        1,
                        1,
                        1
                    ], [
                        0,
                        0,
                        0
                    ], 1, 0), m5(t28, p4, [
                        0,
                        0,
                        0
                    ], [
                        d3,
                        0,
                        0
                    ], 0, 1);
                }
                var w3 = b4(3, 2 * o * 4, Uint16Array);
                function x4(e, r) {
                    for(var t = 0; t < o; ++t)w3.push(e + t + 0, e + t + 1, r + t + 0), w3.push(e + t + 1, r + t + 1, r + t + 0);
                }
                var h4 = o + 1;
                return x4(0 * h4, 4 * h4), x4(5 * h4, 7 * h4), x4(6 * h4, 2 * h4), x4(3 * h4, 1 * h4), {
                    position: l,
                    normal: s,
                    texcoord: v,
                    indices: w3
                };
            }
            function g1(e, r, t, n, o, u) {
                return S2(e, e, r, t, n, o, u);
            }
            function T2(e, r, t, n, o, u) {
                if (t < 3) throw new Error("radialSubdivisions must be 3 or greater");
                if (n < 3) throw new Error("verticalSubdivisions must be 3 or greater");
                o = o || 0;
                for(var i = (u = u || 2 * Math.PI) - o, a = t + 1, f = n + 1, c = a * f, l = b4(3, c), s = b4(3, c), v = b4(2, c), y = b4(3, t * n * 2, Uint16Array), m = 0; m < f; ++m)for(var p = m / n, d = p * Math.PI * 2, w = Math.sin(d), x = e + w * r, h = Math.cos(d), F = h * r, E = 0; E < a; ++E){
                    var A = E / t, j = o + A * i, O = Math.sin(j), _ = Math.cos(j), S = O * x, M = _ * x, R = O * w, P = _ * w;
                    l.push(S, F, M), s.push(R, h, P), v.push(A, 1 - p);
                }
                for(var g = 0; g < n; ++g)for(var T = 0; T < t; ++T){
                    var z = 1 + T, U = 1 + g;
                    y.push(a * g + T, a * U + T, a * g + z), y.push(a * U + T, a * U + z, a * g + z);
                }
                return {
                    position: l,
                    normal: s,
                    texcoord: v,
                    indices: y
                };
            }
            function z1(e, r, t, n, o) {
                if (r < 3) throw new Error("divisions must be at least 3");
                o = o || 1, n = n || 0;
                for(var u = (r + 1) * ((t = t || 1) + 1), i = b4(3, u), a = b4(3, u), f = b4(2, u), c = b4(3, t * r * 2, Uint16Array), l = 0, s = e - n, v = r + 1, y = 0; y <= t; ++y){
                    for(var m = n + s * Math.pow(y / t, o), p = 0; p <= r; ++p){
                        var d = 2 * Math.PI * p / r, w = m * Math.cos(d), x = m * Math.sin(d);
                        if (i.push(w, 0, x), a.push(0, 1, 0), f.push(1 - p / r, y / t), y > 0 && p !== r) {
                            var h = l + (p + 1), F = l + p, E = l + p - v, A = l + (p + 1) - v;
                            c.push(h, F, E), c.push(h, E, A);
                        }
                    }
                    l += r + 1;
                }
                return {
                    position: i,
                    normal: a,
                    texcoord: f,
                    indices: c
                };
            }
            function U1(e) {
                return function(r) {
                    var t = e.apply(this, Array.prototype.slice.call(arguments, 1));
                    return o17.createBuffersFromArrays(r, t);
                };
            }
            function C(e) {
                return function(r) {
                    var t = e.apply(null, Array.prototype.slice.call(arguments, 1));
                    return o17.createBufferInfoFromArrays(r, t);
                };
            }
            var k = [
                "numComponents",
                "size",
                "type",
                "normalize",
                "stride",
                "offset",
                "attrib",
                "name",
                "attribName"
            ];
            function W(e, r, t, n) {
                n = n || 0;
                for(var o = e.length, u = 0; u < o; ++u)r[t + u] = e[u] + n;
            }
            function I(e, r) {
                var t = s5(e), n = new t.constructor(r), o = n;
                return t.numComponents && t.numElements && y4(n, t.numComponents), e.data && (o = {
                    data: n
                }, u12.copyNamedProperties(k, e, o)), o;
            }
            var B = C(R2);
            r38.create3DFBufferInfo = B;
            var L = U1(R2);
            r38.create3DFBuffers = L;
            var G = C(_2);
            r38.createCubeBufferInfo = G;
            var X = U1(_2);
            r38.createCubeBuffers = X;
            var D = C(A1);
            r38.createPlaneBufferInfo = D;
            var N = U1(A1);
            r38.createPlaneBuffers = N;
            var H = C(j1);
            r38.createSphereBufferInfo = H;
            var q = U1(j1);
            r38.createSphereBuffers = q;
            var V = C(S2);
            r38.createTruncatedConeBufferInfo = V;
            var Y = U1(S2);
            r38.createTruncatedConeBuffers = Y;
            var K = C(E2);
            r38.createXYQuadBufferInfo = K;
            var $ = U1(E2);
            r38.createXYQuadBuffers = $;
            var Z = C(P2);
            r38.createCrescentBufferInfo = Z;
            var J = U1(P2);
            r38.createCrescentBuffers = J;
            var Q = C(g1);
            r38.createCylinderBufferInfo = Q;
            var ee = U1(g1);
            r38.createCylinderBuffers = ee;
            var re = C(T2);
            r38.createTorusBufferInfo = re;
            var te = U1(T2);
            r38.createTorusBuffers = te;
            var ne = C(z1);
            r38.createDiscBufferInfo = ne;
            var oe = U1(z1);
            r38.createDiscBuffers = oe;
            var ue = Z;
            r38.createCresentBufferInfo = ue;
            var ie = J;
            r38.createCresentBuffers = ie;
            var ae = P2;
            r38.createCresentVertices = ae;
        },
        function(e49, r44, t29) {
            "use strict";
            function n21(e50) {
                return (n21 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e50);
            }
            r44.__esModule = !0;
            var o19 = {
                addExtensionsToContext: !0,
                getContext: !0,
                getWebGLContext: !0,
                resizeCanvasToDisplaySize: !0,
                setDefaults: !0,
                attributes: !0,
                textures: !0,
                utils: !0,
                draw: !0,
                framebuffers: !0,
                programs: !0,
                typedarrays: !0,
                vertexArrays: !0
            };
            r44.addExtensionsToContext = h, r44.getContext = function(e51, r45) {
                return (function(e, r) {
                    for(var t = [
                        "webgl2",
                        "webgl",
                        "experimental-webgl"
                    ], n = null, o = 0; o < t.length; ++o)if (n = e.getContext(t[o], r)) {
                        p.addExtensionsToContext && h(n);
                        break;
                    }
                    return n;
                })(e51, r45);
            }, r44.getWebGLContext = function(e52, r46) {
                return (function(e, r) {
                    for(var t = [
                        "webgl",
                        "experimental-webgl"
                    ], n = null, o = 0; o < t.length; ++o)if (n = e.getContext(t[o], r)) {
                        p.addExtensionsToContext && h(n);
                        break;
                    }
                    return n;
                })(e52, r46);
            }, r44.resizeCanvasToDisplaySize = function(e, r) {
                r = r || 1, r = Math.max(0, r);
                var t = e.clientWidth * r | 0, n = e.clientHeight * r | 0;
                if (e.width !== t || e.height !== n) return e.width = t, e.height = n, !0;
                return !1;
            }, r44.setDefaults = function(e) {
                a.copyExistingProperties(e, p), u14.setAttributeDefaults_(e), i18.setTextureDefaults_(e);
            }, r44.vertexArrays = r44.typedarrays = r44.programs = r44.framebuffers = r44.draw = r44.utils = r44.textures = r44.attributes = void 0;
            var u14 = m(t29(6));
            r44.attributes = u14, Object.keys(u14).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = u14[e]));
            });
            var i18 = m(t29(7));
            r44.textures = i18, Object.keys(i18).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = i18[e]));
            });
            var a = m(t29(0)), f = m(t29(3));
            r44.utils = f, Object.keys(f).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = f[e]));
            });
            var c8 = m(t29(11));
            r44.draw = c8, Object.keys(c8).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = c8[e]));
            });
            var l6 = m(t29(12));
            r44.framebuffers = l6, Object.keys(l6).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = l6[e]));
            });
            var s6 = m(t29(4));
            r44.programs = s6, Object.keys(s6).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = s6[e]));
            });
            var v6 = m(t29(1));
            r44.typedarrays = v6, Object.keys(v6).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = v6[e]));
            });
            var y = m(t29(13));
            function b() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return b = function() {
                    return e;
                }, e;
            }
            function m(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n21(e) && "function" != typeof e) return {
                    default: e
                };
                var r = b();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            r44.vertexArrays = y, Object.keys(y).forEach(function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o19, e) || (r44[e] = y[e]));
            });
            var p = {
                addExtensionsToContext: !0
            };
            var d = /^(.*?)_/;
            function w(e53, r) {
                f.glEnumToString(e53, 0);
                var t = e53.getExtension(r);
                if (t) {
                    var n = {
                    }, o = d.exec(r)[1], u = "_" + o;
                    for(var i in t){
                        var c = t[i], l = "function" == typeof c, s = l ? o : u, v = i;
                        i.endsWith(s) && (v = i.substring(0, i.length - s.length)), void 0 !== e53[v] ? l || e53[v] === c || a.warn(v, e53[v], c, i) : l ? e53[v] = (function(e) {
                            return function() {
                                return e.apply(t, arguments);
                            };
                        })(c) : (e53[v] = c, n[v] = c);
                    }
                    n.constructor = {
                        name: t.constructor.name
                    }, f.glEnumToString(n, 0);
                }
                return t;
            }
            var x = [
                "ANGLE_instanced_arrays",
                "EXT_blend_minmax",
                "EXT_color_buffer_float",
                "EXT_color_buffer_half_float",
                "EXT_disjoint_timer_query",
                "EXT_disjoint_timer_query_webgl2",
                "EXT_frag_depth",
                "EXT_sRGB",
                "EXT_shader_texture_lod",
                "EXT_texture_filter_anisotropic",
                "OES_element_index_uint",
                "OES_standard_derivatives",
                "OES_texture_float",
                "OES_texture_float_linear",
                "OES_texture_half_float",
                "OES_texture_half_float_linear",
                "OES_vertex_array_object",
                "WEBGL_color_buffer_float",
                "WEBGL_compressed_texture_atc",
                "WEBGL_compressed_texture_etc1",
                "WEBGL_compressed_texture_pvrtc",
                "WEBGL_compressed_texture_s3tc",
                "WEBGL_compressed_texture_s3tc_srgb",
                "WEBGL_depth_texture",
                "WEBGL_draw_buffers"
            ];
            function h(e) {
                for(var r = 0; r < x.length; ++r)w(e, x[r]);
            }
        },
        function(e54, r47, t30) {
            "use strict";
            function n22(e55) {
                return (n22 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e55);
            }
            r47.__esModule = !0, r47.drawBufferInfo = i19, r47.drawObjectList = function(e, r48) {
                var t = null, n = null;
                r48.forEach(function(r) {
                    if (!1 !== r.active) {
                        var u = r.programInfo, a = r.vertexArrayInfo || r.bufferInfo, f = !1, c = void 0 === r.type ? 4 : r.type;
                        u !== t && (t = u, e.useProgram(u.program), f = !0), (f || a !== n) && (n && n.vertexArrayObject && !a.vertexArrayObject && e.bindVertexArray(null), n = a, o20.setBuffersAndAttributes(e, u, a)), o20.setUniforms(u, r.uniforms), i19(e, a, c, r.count, r.offset, r.instanceCount);
                    }
                }), n && n.vertexArrayObject && e.bindVertexArray(null);
            };
            var o20 = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n22(e) && "function" != typeof e) return {
                    default: e
                };
                var r = u15();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = e[i];
                }
                t.default = e, r && r.set(e, t);
                return t;
            }(t30(4));
            function u15() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u15 = function() {
                    return e;
                }, e;
            }
            function i19(e, r, t, n, o, u) {
                t = void 0 === t ? 4 : t;
                var i = r.indices, a = r.elementType, f = void 0 === n ? r.numElements : n;
                o = void 0 === o ? 0 : o, a || i ? void 0 !== u ? e.drawElementsInstanced(t, f, void 0 === a ? 5123 : r.elementType, o, u) : e.drawElements(t, f, void 0 === a ? 5123 : r.elementType, o) : void 0 !== u ? e.drawArraysInstanced(t, o, f, u) : e.drawArrays(t, o, f);
            }
        },
        function(e56, r49, t31) {
            "use strict";
            function n23(e57) {
                return (n23 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e57);
            }
            r49.__esModule = !0, r49.bindFramebufferInfo = function(e, r, t) {
                t = t || 36160, r ? (e.bindFramebuffer(t, r.framebuffer), e.viewport(0, 0, r.width, r.height)) : (e.bindFramebuffer(t, null), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight));
            }, r49.createFramebufferInfo = function(e, r50, t, n) {
                var i = 36160, a11 = e.createFramebuffer();
                e.bindFramebuffer(i, a11), t = t || e.drawingBufferWidth, n = n || e.drawingBufferHeight;
                var c = 0, l = {
                    framebuffer: a11,
                    attachments: [],
                    width: t,
                    height: n
                };
                return (r50 = r50 || b5).forEach(function(r) {
                    var a = r.attachment, s = r.samples, b = r.format, d = r.attachmentPoint || function(e, r) {
                        return m[e] || m[r];
                    }(b, r.internalFormat);
                    if (d || (d = 36064 + c++), !a) {
                        if (void 0 !== s || (function(e) {
                            return p[e];
                        })(b)) a = e.createRenderbuffer(), e.bindRenderbuffer(f, a), s > 1 ? e.renderbufferStorageMultisample(f, s, b, t, n) : e.renderbufferStorage(f, b, t, n);
                        else {
                            var w = Object.assign({
                            }, r);
                            w.width = t, w.height = n, void 0 === w.auto && (w.auto = !1, w.min = w.min || w.minMag || y, w.mag = w.mag || w.minMag || y, w.wrapS = w.wrapS || w.wrap || v, w.wrapT = w.wrapT || w.wrap || v), a = o21.createTexture(e, w);
                        }
                    }
                    if (u16.isRenderbuffer(e, a)) e.framebufferRenderbuffer(i, d, f, a);
                    else {
                        if (!u16.isTexture(e, a)) throw new Error("unknown attachment type");
                        void 0 !== r.layer ? e.framebufferTextureLayer(i, d, a, r.level || 0, r.layer) : e.framebufferTexture2D(i, d, r.target || 3553, a, r.level || 0);
                    }
                    l.attachments.push(a);
                }), l;
            }, r49.resizeFramebufferInfo = function(e, r, t32, n, i) {
                n = n || e.drawingBufferWidth, i = i || e.drawingBufferHeight, r.width = n, r.height = i, (t32 = t32 || b5).forEach(function(t, a) {
                    var c = r.attachments[a], l = t.format, s = t.samples;
                    if (void 0 !== s || u16.isRenderbuffer(e, c)) e.bindRenderbuffer(f, c), s > 1 ? e.renderbufferStorageMultisample(f, s, l, n, i) : e.renderbufferStorage(f, l, n, i);
                    else {
                        if (!u16.isTexture(e, c)) throw new Error("unknown attachment type");
                        o21.resizeTexture(e, c, t, n, i);
                    }
                });
            };
            var o21 = a10(t31(7)), u16 = a10(t31(0));
            function i20() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i20 = function() {
                    return e;
                }, e;
            }
            function a10(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n23(e) && "function" != typeof e) return {
                    default: e
                };
                var r = i20();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var u in e)if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = e[u];
                }
                return t.default = e, r && r.set(e, t), t;
            }
            var f = 36161, c9 = 34041, l7 = 36096, s7 = 33306, v = 33071, y = 9729, b5 = [
                {
                    format: 6408,
                    type: 5121,
                    min: y,
                    wrap: v
                },
                {
                    format: c9
                }
            ], m = {
            };
            m[34041] = s7, m[6401] = 36128, m[36168] = 36128, m[6402] = l7, m[33189] = l7, m[33190] = l7, m[36012] = l7, m[35056] = s7, m[36013] = s7;
            var p = {
            };
            p[32854] = !0, p[32855] = !0, p[36194] = !0, p[34041] = !0, p[33189] = !0, p[6401] = !0, p[36168] = !0;
        },
        function(e58, r51, t33) {
            "use strict";
            function n24(e59) {
                return (n24 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e59);
            }
            r51.__esModule = !0, r51.createVertexArrayInfo = function(e, r52, t) {
                var n = e.createVertexArray();
                e.bindVertexArray(n), r52.length || (r52 = [
                    r52
                ]);
                return r52.forEach(function(r) {
                    o22.setBuffersAndAttributes(e, r, t);
                }), e.bindVertexArray(null), {
                    numElements: t.numElements,
                    elementType: t.elementType,
                    vertexArrayObject: n
                };
            }, r51.createVAOAndSetAttributes = i21, r51.createVAOFromBufferInfo = function(e, r, t) {
                return i21(e, r.attribSetters || r, t.attribs, t.indices);
            };
            var o22 = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n24(e) && "function" != typeof e) return {
                    default: e
                };
                var r = u17();
                if (r && r.has(e)) return r.get(e);
                var t = {
                }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, i, a) : t[i] = e[i];
                }
                t.default = e, r && r.set(e, t);
                return t;
            }(t33(4));
            function u17() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u17 = function() {
                    return e;
                }, e;
            }
            function i21(e, r, t, n) {
                var u = e.createVertexArray();
                return e.bindVertexArray(u), o22.setAttributes(r, t), n && e.bindBuffer(34963, n), e.bindVertexArray(null), u;
            }
        }
    ]);
});

//# sourceMappingURL=index.651935a7.js.map
