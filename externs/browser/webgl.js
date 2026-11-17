/*
 * Copyright 2010 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for WebGL functions as described at
 * http://www.khronos.org/registry/webgl/specs/latest/
 *
 * This file is current up to the WebGL 1.0.1 spec, including extensions.
 *
 * This relies on html5.js being included for Canvas and Typed Array support.
 *
 * This includes some extensions defined at
 * http://www.khronos.org/registry/webgl/extensions/
 *
 * @externs
 */


/**
 * @typedef {ImageBitmap|ImageData|HTMLImageElement|HTMLCanvasElement|
 *     HTMLVideoElement|OffscreenCanvas}
 */
var TexImageSource;

/**
 * @record
 */
function BaseWebGLRenderingContext() {}

/**
 * @constructor
 * @extends {BaseWebGLRenderingContext}
 */
function WebGLRenderingContext() {}


/** @const {number} */
BaseWebGLRenderingContext.DEPTH_BUFFER_BIT;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BUFFER_BIT;

/** @const {number} */
BaseWebGLRenderingContext.COLOR_BUFFER_BIT;

/** @const {number} */
BaseWebGLRenderingContext.POINTS;

/** @const {number} */
BaseWebGLRenderingContext.LINES;

/** @const {number} */
BaseWebGLRenderingContext.LINE_LOOP;

/** @const {number} */
BaseWebGLRenderingContext.LINE_STRIP;

/** @const {number} */
BaseWebGLRenderingContext.TRIANGLES;

/** @const {number} */
BaseWebGLRenderingContext.TRIANGLE_STRIP;

/** @const {number} */
BaseWebGLRenderingContext.TRIANGLE_FAN;

/** @const {number} */
BaseWebGLRenderingContext.ZERO;

/** @const {number} */
BaseWebGLRenderingContext.ONE;

/** @const {number} */
BaseWebGLRenderingContext.SRC_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.ONE_MINUS_SRC_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.SRC_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.ONE_MINUS_SRC_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.DST_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.ONE_MINUS_DST_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.DST_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.ONE_MINUS_DST_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.SRC_ALPHA_SATURATE;

/** @const {number} */
BaseWebGLRenderingContext.FUNC_ADD;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_EQUATION;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_EQUATION_RGB;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_EQUATION_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.FUNC_SUBTRACT;

/** @const {number} */
BaseWebGLRenderingContext.FUNC_REVERSE_SUBTRACT;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_DST_RGB;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_SRC_RGB;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_DST_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_SRC_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.CONSTANT_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.ONE_MINUS_CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.BLEND_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.ARRAY_BUFFER;

/** @const {number} */
BaseWebGLRenderingContext.ELEMENT_ARRAY_BUFFER;

/** @const {number} */
BaseWebGLRenderingContext.ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.ELEMENT_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.STREAM_DRAW;

/** @const {number} */
BaseWebGLRenderingContext.STATIC_DRAW;

/** @const {number} */
BaseWebGLRenderingContext.DYNAMIC_DRAW;

/** @const {number} */
BaseWebGLRenderingContext.BUFFER_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.BUFFER_USAGE;

/** @const {number} */
BaseWebGLRenderingContext.CURRENT_VERTEX_ATTRIB;

/** @const {number} */
BaseWebGLRenderingContext.FRONT;

/** @const {number} */
BaseWebGLRenderingContext.BACK;

/** @const {number} */
BaseWebGLRenderingContext.FRONT_AND_BACK;

/** @const {number} */
BaseWebGLRenderingContext.CULL_FACE;

/** @const {number} */
BaseWebGLRenderingContext.BLEND;

/** @const {number} */
BaseWebGLRenderingContext.DITHER;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_TEST;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_TEST;

/** @const {number} */
BaseWebGLRenderingContext.SCISSOR_TEST;

/** @const {number} */
BaseWebGLRenderingContext.POLYGON_OFFSET_FILL;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLE_COVERAGE;

/** @const {number} */
BaseWebGLRenderingContext.NO_ERROR;

/** @const {number} */
BaseWebGLRenderingContext.INVALID_ENUM;

/** @const {number} */
BaseWebGLRenderingContext.INVALID_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.INVALID_OPERATION;

/** @const {number} */
BaseWebGLRenderingContext.OUT_OF_MEMORY;

/** @const {number} */
BaseWebGLRenderingContext.CW;

/** @const {number} */
BaseWebGLRenderingContext.CCW;

/** @const {number} */
BaseWebGLRenderingContext.LINE_WIDTH;

/** @const {number} */
BaseWebGLRenderingContext.ALIASED_POINT_SIZE_RANGE;

/** @const {number} */
BaseWebGLRenderingContext.ALIASED_LINE_WIDTH_RANGE;

/** @const {number} */
BaseWebGLRenderingContext.CULL_FACE_MODE;

/** @const {number} */
BaseWebGLRenderingContext.FRONT_FACE;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_RANGE;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_CLEAR_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_FUNC;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_CLEAR_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_FUNC;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_REF;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_VALUE_MASK;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_FUNC;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_REF;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_VALUE_MASK;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BACK_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.VIEWPORT;

/** @const {number} */
BaseWebGLRenderingContext.SCISSOR_BOX;

/** @const {number} */
BaseWebGLRenderingContext.COLOR_CLEAR_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.COLOR_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.UNPACK_ALIGNMENT;

/** @const {number} */
BaseWebGLRenderingContext.PACK_ALIGNMENT;

/** @const {number} */
BaseWebGLRenderingContext.MAX_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.MAX_VIEWPORT_DIMS;

/** @const {number} */
BaseWebGLRenderingContext.SUBPIXEL_BITS;

/** @const {number} */
BaseWebGLRenderingContext.RED_BITS;

/** @const {number} */
BaseWebGLRenderingContext.GREEN_BITS;

/** @const {number} */
BaseWebGLRenderingContext.BLUE_BITS;

/** @const {number} */
BaseWebGLRenderingContext.ALPHA_BITS;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_BITS;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_BITS;

/** @const {number} */
BaseWebGLRenderingContext.POLYGON_OFFSET_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.POLYGON_OFFSET_FACTOR;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_BINDING_2D;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLE_BUFFERS;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLES;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLE_COVERAGE_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLE_COVERAGE_INVERT;

/** @const {number} */
BaseWebGLRenderingContext.COMPRESSED_TEXTURE_FORMATS;

/** @const {number} */
BaseWebGLRenderingContext.DONT_CARE;

/** @const {number} */
BaseWebGLRenderingContext.FASTEST;

/** @const {number} */
BaseWebGLRenderingContext.NICEST;

/** @const {number} */
BaseWebGLRenderingContext.GENERATE_MIPMAP_HINT;

/** @const {number} */
BaseWebGLRenderingContext.BYTE;

/** @const {number} */
BaseWebGLRenderingContext.UNSIGNED_BYTE;

/** @const {number} */
BaseWebGLRenderingContext.SHORT;

/** @const {number} */
BaseWebGLRenderingContext.UNSIGNED_SHORT;

/** @const {number} */
BaseWebGLRenderingContext.INT;

/** @const {number} */
BaseWebGLRenderingContext.UNSIGNED_INT;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_COMPONENT;

/** @const {number} */
BaseWebGLRenderingContext.ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.RGB;

/** @const {number} */
BaseWebGLRenderingContext.RGBA;

/** @const {number} */
BaseWebGLRenderingContext.LUMINANCE;

/** @const {number} */
BaseWebGLRenderingContext.LUMINANCE_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4;

/** @const {number} */
BaseWebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1;

/** @const {number} */
BaseWebGLRenderingContext.UNSIGNED_SHORT_5_6_5;

/** @const {number} */
BaseWebGLRenderingContext.FRAGMENT_SHADER;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_SHADER;

/** @const {number} */
BaseWebGLRenderingContext.MAX_VERTEX_ATTRIBS;

/** @const {number} */
BaseWebGLRenderingContext.MAX_VERTEX_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLRenderingContext.MAX_VARYING_VECTORS;

/** @const {number} */
BaseWebGLRenderingContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.MAX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.MAX_FRAGMENT_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLRenderingContext.SHADER_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.DELETE_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.LINK_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.VALIDATE_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.ATTACHED_SHADERS;

/** @const {number} */
BaseWebGLRenderingContext.ACTIVE_UNIFORMS;

/** @const {number} */
BaseWebGLRenderingContext.ACTIVE_ATTRIBUTES;

/** @const {number} */
BaseWebGLRenderingContext.SHADING_LANGUAGE_VERSION;

/** @const {number} */
BaseWebGLRenderingContext.CURRENT_PROGRAM;

/** @const {number} */
BaseWebGLRenderingContext.NEVER;

/** @const {number} */
BaseWebGLRenderingContext.LESS;

/** @const {number} */
BaseWebGLRenderingContext.EQUAL;

/** @const {number} */
BaseWebGLRenderingContext.LEQUAL;

/** @const {number} */
BaseWebGLRenderingContext.GREATER;

/** @const {number} */
BaseWebGLRenderingContext.NOTEQUAL;

/** @const {number} */
BaseWebGLRenderingContext.GEQUAL;

/** @const {number} */
BaseWebGLRenderingContext.ALWAYS;

/** @const {number} */
BaseWebGLRenderingContext.KEEP;

/** @const {number} */
BaseWebGLRenderingContext.REPLACE;

/** @const {number} */
BaseWebGLRenderingContext.INCR;

/** @const {number} */
BaseWebGLRenderingContext.DECR;

/** @const {number} */
BaseWebGLRenderingContext.INVERT;

/** @const {number} */
BaseWebGLRenderingContext.INCR_WRAP;

/** @const {number} */
BaseWebGLRenderingContext.DECR_WRAP;

/** @const {number} */
BaseWebGLRenderingContext.VENDOR;

/** @const {number} */
BaseWebGLRenderingContext.RENDERER;

/** @const {number} */
BaseWebGLRenderingContext.VERSION;

/** @const {number} */
BaseWebGLRenderingContext.NEAREST;

/** @const {number} */
BaseWebGLRenderingContext.LINEAR;

/** @const {number} */
BaseWebGLRenderingContext.NEAREST_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLRenderingContext.LINEAR_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLRenderingContext.NEAREST_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLRenderingContext.LINEAR_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_MAG_FILTER;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_MIN_FILTER;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_WRAP_S;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_WRAP_T;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_2D;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_BINDING_CUBE_MAP;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z;

/** @const {number} */
BaseWebGLRenderingContext.MAX_CUBE_MAP_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE0;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE1;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE2;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE3;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE4;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE5;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE6;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE7;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE8;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE9;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE10;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE11;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE12;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE13;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE14;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE15;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE16;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE17;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE18;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE19;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE20;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE21;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE22;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE23;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE24;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE25;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE26;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE27;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE28;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE29;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE30;

/** @const {number} */
BaseWebGLRenderingContext.TEXTURE31;

/** @const {number} */
BaseWebGLRenderingContext.ACTIVE_TEXTURE;

/** @const {number} */
BaseWebGLRenderingContext.REPEAT;

/** @const {number} */
BaseWebGLRenderingContext.CLAMP_TO_EDGE;

/** @const {number} */
BaseWebGLRenderingContext.MIRRORED_REPEAT;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT_VEC2;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT_VEC3;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT_VEC4;

/** @const {number} */
BaseWebGLRenderingContext.INT_VEC2;

/** @const {number} */
BaseWebGLRenderingContext.INT_VEC3;

/** @const {number} */
BaseWebGLRenderingContext.INT_VEC4;

/** @const {number} */
BaseWebGLRenderingContext.BOOL;

/** @const {number} */
BaseWebGLRenderingContext.BOOL_VEC2;

/** @const {number} */
BaseWebGLRenderingContext.BOOL_VEC3;

/** @const {number} */
BaseWebGLRenderingContext.BOOL_VEC4;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT_MAT2;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT_MAT3;

/** @const {number} */
BaseWebGLRenderingContext.FLOAT_MAT4;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLER_2D;

/** @const {number} */
BaseWebGLRenderingContext.SAMPLER_CUBE;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_ENABLED;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_STRIDE;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_NORMALIZED;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_POINTER;

/** @const {number} */
BaseWebGLRenderingContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT;

/** @const {number} */
BaseWebGLRenderingContext.IMPLEMENTATION_COLOR_READ_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.COMPILE_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.LOW_FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.MEDIUM_FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.HIGH_FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.LOW_INT;

/** @const {number} */
BaseWebGLRenderingContext.MEDIUM_INT;

/** @const {number} */
BaseWebGLRenderingContext.HIGH_INT;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER;

/** @const {number} */
BaseWebGLRenderingContext.RGBA4;

/** @const {number} */
BaseWebGLRenderingContext.RGB5_A1;

/** @const {number} */
BaseWebGLRenderingContext.RGB565;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_COMPONENT16;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_INDEX8;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_STENCIL;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_WIDTH;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_HEIGHT;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_INTERNAL_FORMAT;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_RED_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_GREEN_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_BLUE_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_ALPHA_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_DEPTH_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_STENCIL_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;

/** @const {number} */
BaseWebGLRenderingContext.COLOR_ATTACHMENT0;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.DEPTH_STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.NONE;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_COMPLETE;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_UNSUPPORTED;

/** @const {number} */
BaseWebGLRenderingContext.FRAMEBUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.RENDERBUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.MAX_RENDERBUFFER_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION;

/** @const {number} */
BaseWebGLRenderingContext.UNPACK_FLIP_Y_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.CONTEXT_LOST_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.UNPACK_COLORSPACE_CONVERSION_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.BROWSER_DEFAULT_WEBGL;


/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_BUFFER_BIT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BUFFER_BIT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.COLOR_BUFFER_BIT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.POINTS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINES;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINE_LOOP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINE_STRIP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TRIANGLES;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TRIANGLE_STRIP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TRIANGLE_FAN;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ZERO;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SRC_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE_MINUS_SRC_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SRC_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE_MINUS_SRC_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DST_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE_MINUS_DST_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DST_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE_MINUS_DST_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SRC_ALPHA_SATURATE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FUNC_ADD;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_EQUATION;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_EQUATION_RGB;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_EQUATION_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FUNC_SUBTRACT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FUNC_REVERSE_SUBTRACT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_DST_RGB;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_SRC_RGB;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_DST_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_SRC_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CONSTANT_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND_COLOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ARRAY_BUFFER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STREAM_DRAW;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STATIC_DRAW;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DYNAMIC_DRAW;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BUFFER_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BUFFER_USAGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CURRENT_VERTEX_ATTRIB;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRONT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BACK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRONT_AND_BACK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CULL_FACE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLEND;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DITHER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_TEST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_TEST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SCISSOR_TEST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.POLYGON_OFFSET_FILL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLE_ALPHA_TO_COVERAGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLE_COVERAGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NO_ERROR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INVALID_ENUM;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INVALID_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INVALID_OPERATION;

/** @const {number} */
BaseWebGLRenderingContext.prototype.OUT_OF_MEMORY;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CW;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CCW;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINE_WIDTH;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ALIASED_POINT_SIZE_RANGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ALIASED_LINE_WIDTH_RANGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CULL_FACE_MODE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRONT_FACE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_RANGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_CLEAR_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_FUNC;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_CLEAR_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_FUNC;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_REF;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_VALUE_MASK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_FUNC;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_REF;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_VALUE_MASK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BACK_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VIEWPORT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SCISSOR_BOX;

/** @const {number} */
BaseWebGLRenderingContext.prototype.COLOR_CLEAR_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.COLOR_WRITEMASK;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNPACK_ALIGNMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.PACK_ALIGNMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_VIEWPORT_DIMS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SUBPIXEL_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RED_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.GREEN_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BLUE_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ALPHA_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_BITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.POLYGON_OFFSET_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.POLYGON_OFFSET_FACTOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_BINDING_2D;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLE_BUFFERS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLES;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLE_COVERAGE_VALUE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLE_COVERAGE_INVERT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.COMPRESSED_TEXTURE_FORMATS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DONT_CARE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FASTEST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NICEST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.GENERATE_MIPMAP_HINT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BYTE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNSIGNED_BYTE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SHORT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNSIGNED_SHORT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNSIGNED_INT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_COMPONENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RGB;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RGBA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LUMINANCE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LUMINANCE_ALPHA;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNSIGNED_SHORT_4_4_4_4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNSIGNED_SHORT_5_5_5_1;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNSIGNED_SHORT_5_6_5;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAGMENT_SHADER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_SHADER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_VERTEX_ATTRIBS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_VERTEX_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_VARYING_VECTORS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_FRAGMENT_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SHADER_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DELETE_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINK_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VALIDATE_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ATTACHED_SHADERS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ACTIVE_UNIFORMS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ACTIVE_ATTRIBUTES;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SHADING_LANGUAGE_VERSION;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CURRENT_PROGRAM;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NEVER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LESS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.EQUAL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LEQUAL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.GREATER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NOTEQUAL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.GEQUAL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ALWAYS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.KEEP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.REPLACE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INCR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DECR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INVERT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INCR_WRAP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DECR_WRAP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VENDOR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERSION;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NEAREST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINEAR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NEAREST_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINEAR_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NEAREST_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LINEAR_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_MAG_FILTER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_MIN_FILTER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_WRAP_S;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_WRAP_T;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_2D;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_BINDING_CUBE_MAP;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_X;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_X;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Y;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Y;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Z;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Z;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_CUBE_MAP_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE0;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE1;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE2;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE3;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE5;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE6;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE7;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE8;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE9;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE10;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE11;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE12;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE13;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE14;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE15;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE16;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE17;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE18;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE19;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE20;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE21;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE22;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE23;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE24;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE25;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE26;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE27;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE28;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE29;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE30;

/** @const {number} */
BaseWebGLRenderingContext.prototype.TEXTURE31;

/** @const {number} */
BaseWebGLRenderingContext.prototype.ACTIVE_TEXTURE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.REPEAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CLAMP_TO_EDGE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MIRRORED_REPEAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT_VEC2;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT_VEC3;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT_VEC4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INT_VEC2;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INT_VEC3;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INT_VEC4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BOOL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BOOL_VEC2;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BOOL_VEC3;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BOOL_VEC4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT_MAT2;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT_MAT3;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FLOAT_MAT4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLER_2D;

/** @const {number} */
BaseWebGLRenderingContext.prototype.SAMPLER_CUBE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_ENABLED;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_STRIDE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_NORMALIZED;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_POINTER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.prototype.COMPILE_STATUS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LOW_FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MEDIUM_FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.HIGH_FLOAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.LOW_INT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MEDIUM_INT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.HIGH_INT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RGBA4;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RGB5_A1;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RGB565;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_COMPONENT16;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_INDEX;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_INDEX8;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_STENCIL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_WIDTH;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_HEIGHT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_INTERNAL_FORMAT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_RED_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_GREEN_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_BLUE_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_ALPHA_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_DEPTH_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_STENCIL_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.COLOR_ATTACHMENT0;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.DEPTH_STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.NONE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_COMPLETE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_UNSUPPORTED;

/** @const {number} */
BaseWebGLRenderingContext.prototype.FRAMEBUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.prototype.RENDERBUFFER_BINDING;

/** @const {number} */
BaseWebGLRenderingContext.prototype.MAX_RENDERBUFFER_SIZE;

/** @const {number} */
BaseWebGLRenderingContext.prototype.INVALID_FRAMEBUFFER_OPERATION;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNPACK_FLIP_Y_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.CONTEXT_LOST_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.UNPACK_COLORSPACE_CONVERSION_WEBGL;

/** @const {number} */
BaseWebGLRenderingContext.prototype.BROWSER_DEFAULT_WEBGL;


/**
 * @type {!HTMLCanvasElement}
 */
BaseWebGLRenderingContext.prototype.canvas;

/**
 * @type {string}
 */
BaseWebGLRenderingContext.prototype.drawingBufferColorSpace;

/**
 * @type {number}
 */
BaseWebGLRenderingContext.prototype.drawingBufferWidth;

/**
 * @type {number}
 */
BaseWebGLRenderingContext.prototype.drawingBufferHeight;

/**
 * @return {!WebGLContextAttributes}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getContextAttributes = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isContextLost = function() {};

/**
 * @return {!Array<string>}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getSupportedExtensions = function() {};

/**
 * Note that this has side effects by enabling the extension even if the
 * result is not used.
 * @param {string} name
 * @return {Object}
 */
BaseWebGLRenderingContext.prototype.getExtension = function(name) {};

/**
 * @type {string}
 */
BaseWebGLRenderingContext.prototype.unpackColorSpace;

/**
 * @param {number} texture
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.activeTexture = function(texture) {};

/**
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.attachShader = function(program, shader) {};

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @param {string} name
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bindAttribLocation = function(
    program, index, name) {};

/**
 * @param {number} target
 * @param {WebGLBuffer} buffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bindBuffer = function(target, buffer) {};

/**
 * @param {number} target
 * @param {WebGLFramebuffer} buffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bindFramebuffer = function(target, buffer) {};

/**
 * @param {number} target
 * @param {WebGLRenderbuffer} buffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bindRenderbuffer = function(target, buffer) {};

/**
 * @param {number} target
 * @param {WebGLTexture} texture
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bindTexture = function(target, texture) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.blendColor = function(
    red, green, blue, alpha) {};

/**
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.blendEquation = function(mode) {};

/**
 * @param {number} modeRGB
 * @param {number} modeAlpha
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.blendEquationSeparate = function(
    modeRGB, modeAlpha) {};

/**
 * @param {number} sfactor
 * @param {number} dfactor
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.blendFunc = function(sfactor, dfactor) {};

/**
 * @param {number} srcRGB
 * @param {number} dstRGB
 * @param {number} srcAlpha
 * @param {number} dstAlpha
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.blendFuncSeparate = function(
    srcRGB, dstRGB, srcAlpha, dstAlpha) {};

/**
 * @param {number} target
 * @param {ArrayBufferView|ArrayBuffer|number} data
 * @param {number} usage
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bufferData = function(target, data, usage) {};

/**
 * @param {number} target
 * @param {number} offset
 * @param {ArrayBufferView|ArrayBuffer} data
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.bufferSubData = function(
    target, offset, data) {};

/**
 * @param {number} target
 * @return {number}
 */
BaseWebGLRenderingContext.prototype.checkFramebufferStatus = function(target) {};

/**
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.clear = function(mask) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.clearColor = function(
    red, green, blue, alpha) {};

/**
 * @param {number} depth
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.clearDepth = function(depth) {};

/**
 * @param {number} s
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.clearStencil = function(s) {};

/**
 * @param {boolean} red
 * @param {boolean} green
 * @param {boolean} blue
 * @param {boolean} alpha
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.colorMask = function(
    red, green, blue, alpha) {};

/**
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.compileShader = function(shader) {};

/**
 * @param {number} target
 * @param {number} level
 * @param {number} internalformat
 * @param {number} width
 * @param {number} height
 * @param {number} border
 * @param {ArrayBufferView} data
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.compressedTexImage2D = function(
    target, level, internalformat, width, height, border, data) {};

/**
 * @param {number} target
 * @param {number} level
 * @param {number} xoffset
 * @param {number} yoffset
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {ArrayBufferView} data
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.compressedTexSubImage2D = function(
    target, level, xoffset, yoffset, width, height, format, data) {};

/**
 * @param {number} target
 * @param {number} level
 * @param {number} format
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} border
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.copyTexImage2D = function(
    target, level, format, x, y, width, height, border) {};

/**
 * @param {number} target
 * @param {number} level
 * @param {number} xoffset
 * @param {number} yoffset
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.copyTexSubImage2D = function(
    target, level, xoffset, yoffset, x, y, width, height) {};

/**
 * @return {!WebGLBuffer}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.createBuffer = function() {};

/**
 * @return {!WebGLFramebuffer}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.createFramebuffer = function() {};

/**
 * @return {!WebGLProgram}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.createProgram = function() {};

/**
 * @return {!WebGLRenderbuffer}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.createRenderbuffer = function() {};

/**
 * @param {number} type
 * @return {!WebGLShader}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.createShader = function(type) {};

/**
 * @return {!WebGLTexture}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.createTexture = function() {};

/**
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.cullFace = function(mode) {};

/**
 * @param {WebGLBuffer} buffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.deleteBuffer = function(buffer) {};

/**
 * @param {WebGLFramebuffer} buffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.deleteFramebuffer = function(buffer) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.deleteProgram = function(program) {};

/**
 * @param {WebGLRenderbuffer} buffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.deleteRenderbuffer = function(buffer) {};

/**
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.deleteShader = function(shader) {};

/**
 * @param {WebGLTexture} texture
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.deleteTexture = function(texture) {};

/**
 * @param {number} func
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.depthFunc = function(func) {};

/**
 * @param {boolean} flag
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.depthMask = function(flag) {};

/**
 * @param {number} nearVal
 * @param {number} farVal
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.depthRange = function(nearVal, farVal) {};

/**
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.detachShader = function(program, shader) {};

/**
 * @param {number} flags
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.disable = function(flags) {};

/**
 * @param {number} index
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.disableVertexAttribArray = function(
    index) {};

/**
 * @param {number} mode
 * @param {number} first
 * @param {number} count
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.drawArrays = function(mode, first, count) {};

/**
 * @param {number} mode
 * @param {number} count
 * @param {number} type
 * @param {number} offset
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.drawElements = function(
    mode, count, type, offset) {};

/**
 * @param {number} cap
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.enable = function(cap) {};

/**
 * @param {number} index
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.enableVertexAttribArray = function(
    index) {};

BaseWebGLRenderingContext.prototype.finish = function() {};

BaseWebGLRenderingContext.prototype.flush = function() {};

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} renderbuffertarget
 * @param {WebGLRenderbuffer} renderbuffer
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.framebufferRenderbuffer = function(
    target, attachment, renderbuffertarget, renderbuffer) {};

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} textarget
 * @param {WebGLTexture} texture
 * @param {number} level
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.framebufferTexture2D = function(
    target, attachment, textarget, texture, level) {};

/**
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.frontFace = function(mode) {};

/**
 * @param {number} target
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.generateMipmap = function(target) {};

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @return {WebGLActiveInfo}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getActiveAttrib = function(program, index) {};

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @return {WebGLActiveInfo}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getActiveUniform = function(program, index) {};

/**
 * @param {WebGLProgram} program
 * @return {!Array<WebGLShader>}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getAttachedShaders = function(program) {};

/**
 * @param {WebGLProgram} program
 * @param {string} name
 * @return {number}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getAttribLocation = function(program, name) {};

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getBufferParameter = function(target, pname) {};

/**
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getParameter = function(pname) {};

/**
 * @return {number}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getError = function() {};

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getFramebufferAttachmentParameter = function(
    target, attachment, pname) {};

/**
 * @param {WebGLProgram} program
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getProgramParameter = function(
    program, pname) {};

/**
 * @param {WebGLProgram} program
 * @return {string}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getProgramInfoLog = function(program) {};

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getRenderbufferParameter = function(
    target, pname) {};

/**
 * @param {WebGLShader} shader
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getShaderParameter = function(shader, pname) {};

/**
 * @param {number} shadertype
 * @param {number} precisiontype
 * @return {WebGLShaderPrecisionFormat}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getShaderPrecisionFormat = function(shadertype,
    precisiontype) {};

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getShaderInfoLog = function(shader) {};

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getShaderSource = function(shader) {};

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getTexParameter = function(target, pname) {};

/**
 * @param {WebGLProgram} program
 * @param {WebGLUniformLocation} location
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getUniform = function(program, location) {};

/**
 * @param {WebGLProgram} program
 * @param {string} name
 * @return {WebGLUniformLocation}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getUniformLocation = function(program, name) {};

/**
 * @param {number} index
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getVertexAttrib = function(index, pname) {};

/**
 * @param {number} index
 * @param {number} pname
 * @return {number}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.getVertexAttribOffset = function(
    index, pname) {};

/**
 * @param {number} target
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.hint = function(target, mode) {};

/**
 * @param {WebGLObject} buffer
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isBuffer = function(buffer) {};

/**
 * @param {number} cap
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isEnabled = function(cap) {};

/**
 * @param {WebGLObject} framebuffer
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isFramebuffer = function(framebuffer) {};

/**
 * @param {WebGLObject} program
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isProgram = function(program) {};

/**
 * @param {WebGLObject} renderbuffer
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isRenderbuffer = function(renderbuffer) {};

/**
 * @param {WebGLObject} shader
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isShader = function(shader) {};

/**
 * @param {WebGLObject} texture
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLRenderingContext.prototype.isTexture = function(texture) {};

/**
 * @param {number} width
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.lineWidth = function(width) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.linkProgram = function(program) {};

/**
 * @param {number} pname
 * @param {number|boolean} param
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.pixelStorei = function(pname, param) {};

/**
 * @param {number} factor
 * @param {number} units
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.polygonOffset = function(factor, units) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} type
 * @param {ArrayBufferView} pixels
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.readPixels = function(
    x, y, width, height, format, type, pixels) {};

/**
 * @param {number} target
 * @param {number} internalformat
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.renderbufferStorage = function(
    target, internalformat, width, height) {};

/**
 * @param {number} coverage
 * @param {boolean} invert
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.sampleCoverage = function(coverage, invert) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.scissor = function(x, y, width, height) {};

/**
 * @param {WebGLShader} shader
 * @param {string} source
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.shaderSource = function(shader, source) {};

/**
 * @param {number} func
 * @param {number} ref
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.stencilFunc = function(func, ref, mask) {};

/**
 * @param {number} face
 * @param {number} func
 * @param {number} ref
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.stencilFuncSeparate = function(
    face, func, ref, mask) {};

/**
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.stencilMask = function(mask) {};

/**
 * @param {number} face
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.stencilMaskSeparate = function(face, mask) {};

/**
 * @param {number} fail
 * @param {number} zfail
 * @param {number} zpass
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.stencilOp = function(fail, zfail, zpass) {};

/**
 * @param {number} face
 * @param {number} fail
 * @param {number} zfail
 * @param {number} zpass
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.stencilOpSeparate = function(
    face, fail, zfail, zpass) {};

/**
 * @param {number} target
 * @param {number} level
 * @param {number} internalformat
 * @param {number} format or width
 * @param {number} type or height
 * @param {?TexImageSource|number} img or border
 * @param {number=} opt_format
 * @param {number=} opt_type
 * @param {ArrayBufferView=} opt_pixels
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.texImage2D = function(
    target, level, internalformat, format, type, img, opt_format, opt_type,
    opt_pixels) {};

/**
 * @param {number} target
 * @param {number} pname
 * @param {number} param
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.texParameterf = function(
    target, pname, param) {};

/**
 * @param {number} target
 * @param {number} pname
 * @param {number} param
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.texParameteri = function(
    target, pname, param) {};

/**
 * @param {number} target
 * @param {number} level
 * @param {number} xoffset
 * @param {number} yoffset
 * @param {number} format or width
 * @param {number} type or height
 * @param {?TexImageSource|number} data or format
 * @param {number=} opt_type
 * @param {ArrayBufferView=} opt_pixels
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.texSubImage2D = function(
    target, level, xoffset, yoffset, format, type, data, opt_type,
    opt_pixels) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform1f = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform1fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform1i = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform1iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform2f = function(
    location, value1, value2) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform2fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value1
 * @param {number|boolean} value2
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform2i = function(
    location, value1, value2) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform2iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform3f = function(
    location, value1, value2, value3) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform3fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value1
 * @param {number|boolean} value2
 * @param {number|boolean} value3
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform3i = function(
    location, value1, value2, value3) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform3iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @param {number} value4
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform4f = function(
    location, value1, value2, value3, value4) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform4fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value1
 * @param {number|boolean} value2
 * @param {number|boolean} value3
 * @param {number|boolean} value4
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform4i = function(
    location, value1, value2, value3, value4) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniform4iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array<number>} data
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniformMatrix2fv = function(
    location, transpose, data) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array<number>} data
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniformMatrix3fv = function(
    location, transpose, data) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array<number>} data
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.uniformMatrix4fv = function(
    location, transpose, data) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.useProgram = function(program) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.validateProgram = function(program) {};

/**
 * @param {number} indx
 * @param {number} x
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib1f = function(indx, x) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>|!Iterable<number>} values
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib1fv = function(indx, values) {};

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib2f = function(
    indx, x, y) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>|!Iterable<number>} values
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib2fv = function(
    indx, values) {};

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib3f = function(
    indx, x, y, z) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>|!Iterable<number>} values
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib3fv = function(indx, values) {};

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib4f = function(
    indx, x, y, z, w) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>|!Iterable<number>} values
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttrib4fv = function(indx, values) {};

/**
 * @param {number} indx
 * @param {number} size
 * @param {number} type
 * @param {boolean} normalized
 * @param {number} stride
 * @param {number} offset
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.vertexAttribPointer = function(
    indx, size, type, normalized, stride, offset) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLRenderingContext.prototype.viewport = function(x, y, width, height) {};


/**
 * @record
 */
function WebGLContextAttributes() {}

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.alpha;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.depth;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.stencil;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.antialias;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.premultipliedAlpha;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.preserveDrawingBuffer;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.desynchronized;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.failIfMajorPerformanceCaveat;

/**
 * Possible values: 'default', 'low-power', 'high-performance'
 * @type {string}
 */
WebGLContextAttributes.prototype.powerPreference;

/**
 * @type {boolean|undefined}
 */
WebGLContextAttributes.prototype.xrCompatible;

/**
 * @param {string} eventType
 * @constructor
 * @extends {Event}
 */
function WebGLContextEvent(eventType) {}

/**
 * @type {string}
 */
WebGLContextEvent.prototype.statusMessage;


/**
 * @constructor
 */
function WebGLShaderPrecisionFormat() {}

/**
 * @type {number}
 */
WebGLShaderPrecisionFormat.prototype.rangeMin;

/**
 * @type {number}
 */
WebGLShaderPrecisionFormat.prototype.rangeMax;

/**
 * @type {number}
 */
WebGLShaderPrecisionFormat.prototype.precision;

/**
 * @typedef {{
 *   COMPLETION_STATUS_KHR: number
 * }}
 */
var KHR_parallel_shader_compile;

/**
 * @constructor
 */
function WebGLObject() {}


/**
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLBuffer() {}


/**
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLFramebuffer() {}


/**
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLProgram() {}


/**
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLRenderbuffer() {}


/**
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLShader() {}


/**
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLTexture() {}


/**
 * @constructor
 */
function WebGLActiveInfo() {}

/** @type {number} */
WebGLActiveInfo.prototype.size;

/** @type {number} */
WebGLActiveInfo.prototype.type;

/** @type {string} */
WebGLActiveInfo.prototype.name;


/**
 * @constructor
 */
function WebGLUniformLocation() {}


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_texture_float/
 * @constructor
 */
function OES_texture_float() {}


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
 * @constructor
 */
function OES_texture_half_float() {}

/** @type {number} */
OES_texture_half_float.prototype.HALF_FLOAT_OES;


/**
 * @see http://www.khronos.org/registry/webgl/extensions/WEBGL_lose_context/
 * @constructor
 */
function WEBGL_lose_context() {}

WEBGL_lose_context.prototype.loseContext = function() {};

WEBGL_lose_context.prototype.restoreContext = function() {};


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/
 * @constructor
 */
function OES_standard_derivatives() {}

/** @type {number} */
OES_standard_derivatives.prototype.FRAGMENT_SHADER_DERIVATIVE_HINT_OES;


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
 * @constructor
 * @extends {WebGLObject}
 */
function WebGLVertexArrayObjectOES() {}


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
 * @constructor
 */
function OES_vertex_array_object() {}

/** @type {number} */
OES_vertex_array_object.prototype.VERTEX_ARRAY_BINDING_OES;

/**
 * @return {WebGLVertexArrayObjectOES}
 * @nosideeffects
 */
OES_vertex_array_object.prototype.createVertexArrayOES = function() {};

/**
 * @param {WebGLVertexArrayObjectOES} arrayObject
 * @return {undefined}
 */
OES_vertex_array_object.prototype.deleteVertexArrayOES =
    function(arrayObject) {};

/**
 * @param {WebGLVertexArrayObjectOES} arrayObject
 * @return {boolean}
 * @nosideeffects
 */
OES_vertex_array_object.prototype.isVertexArrayOES = function(arrayObject) {};

/**
 * @param {WebGLVertexArrayObjectOES} arrayObject
 * @return {undefined}
 */
OES_vertex_array_object.prototype.bindVertexArrayOES = function(arrayObject) {};


/**
 * @see http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
 * @constructor
 */
function WEBGL_debug_renderer_info() {}

/** @const {number} */
WEBGL_debug_renderer_info.prototype.UNMASKED_VENDOR_WEBGL;

/** @const {number} */
WEBGL_debug_renderer_info.prototype.UNMASKED_RENDERER_WEBGL;


/**
 * @see http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_shaders/
 * @constructor
 */
function WEBGL_debug_shaders() {}

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
WEBGL_debug_shaders.prototype.getTranslatedShaderSource = function(shader) {};


/**
 * @see http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
 * @constructor
 */
function WEBGL_compressed_texture_s3tc() {}

/** @const {number} */
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGB_S3TC_DXT1_EXT;

/** @const {number} */
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGBA_S3TC_DXT1_EXT;

/** @const {number} */
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGBA_S3TC_DXT3_EXT;

/** @const {number} */
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGBA_S3TC_DXT5_EXT;


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_depth_texture/
 * @constructor
 */
function OES_depth_texture() {}


/**
 * @see http://www.khronos.org/registry/webgl/extensions/OES_element_index_uint/
 * @constructor
 */
function OES_element_index_uint() {}


/**
 * @see http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
 * @constructor
 */
function EXT_texture_filter_anisotropic() {}

/** @const {number} */
EXT_texture_filter_anisotropic.prototype.TEXTURE_MAX_ANISOTROPY_EXT;

/** @const {number} */
EXT_texture_filter_anisotropic.prototype.MAX_TEXTURE_MAX_ANISOTROPY_EXT;


/**
 * @see https://www.khronos.org/registry/webgl/extensions/WEBGL_draw_buffers/
 * @constructor
 */
function WEBGL_draw_buffers() {}

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT0_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT1_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT2_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT3_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT4_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT5_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT6_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT7_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT8_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT9_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT10_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT11_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT12_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT13_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT14_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT15_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER0_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER1_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER2_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER3_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER4_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER5_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER6_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER7_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER8_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER9_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER10_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER11_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER12_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER13_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER14_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.DRAW_BUFFER15_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.MAX_COLOR_ATTACHMENTS_WEBGL;

/** @const {number} */
WEBGL_draw_buffers.prototype.MAX_DRAW_BUFFERS_WEBGL;

/**
 * @param {!Array<number>|!Iterable<number>} buffers Draw buffers.
 * @return {undefined}
 */
WEBGL_draw_buffers.prototype.drawBuffersWEBGL = function(buffers) {};


/**
 * @see https://www.khronos.org/registry/webgl/extensions/WEBGL_multi_draw/
 * @constructor
 */
function WEBGL_multi_draw() {}

/**
 * @param {!GLenum} mode
 * @param {!Int32Array|!Iterable<!GLint>} firstsList
 * @param {number} firstsOffset
 * @param {!Int32Array|!Iterable<!GLsizei>} countsList
 * @param {number} countsOffset
 * @param {!Int32Array|!Iterable<!GLsizei>} instanceCountsList
 * @param {number} instanceCountsOffset
 * @param {!GLsizei} drawcount
 * @return {undefined}
 */
WEBGL_multi_draw.prototype.multiDrawArraysInstancedWEBGL = function(
    mode, firstsList, firstsOffset, countsList, countsOffset,
    instanceCountsList, instanceCountsOffset, drawcount) {};

/**
 * @param {!GLenum} mode
 * @param {!Int32Array|!Iterable<!GLint>} firstsList
 * @param {number} firstsOffset
 * @param {!Int32Array|!Iterable<!GLsizei>} countsList
 * @param {number} countsOffset
 * @param {!GLsizei} drawcount
 * @return {undefined}
 */
WEBGL_multi_draw.prototype.multiDrawArraysWEBGL = function(
    mode, firstsList, firstsOffset, countsList, countsOffset, drawcount) {};

/**
 * @param {!GLenum} mode
 * @param {!Int32Array|!Iterable<!GLsizei>} countsList
 * @param {number} countsOffset
 * @param {!GLenum} type
 * @param {!Int32Array|!Iterable<!GLsizei>} offsetsList
 * @param {number} offsetsOffset
 * @param {!Int32Array|!Iterable<!GLsizei>} instanceCountsList
 * @param {number} instanceCountsOffset
 * @param {!GLsizei} drawcount
 * @return {undefined}
 */
WEBGL_multi_draw.prototype.multiDrawElementsInstancedWEBGL = function(
    mode, countsList, countsOffset, type, offsetsList, offsetsOffset,
    instanceCountsList, instanceCountsOffset, drawcount) {};

/**
 * @param {!GLenum} mode
 * @param {!Int32Array|!Iterable<!GLsizei>} countsList
 * @param {number} countsOffset
 * @param {!GLenum} type
 * @param {!Int32Array|!Iterable<!GLsizei>} offsetsList
 * @param {number} offsetsOffset
 * @param {!GLsizei} drawcount
 * @return {undefined}
 */
WEBGL_multi_draw.prototype.multiDrawElementsWEBGL = function(
    mode, countsList, countsOffset, type, offsetsList, offsetsOffset,
    drawcount) {};

/** @typedef {number} */
var GLenum;

/** @typedef {number} */
var GLint;

/** @typedef {number} */
var GLsizei;

/**
 * @see http://www.khronos.org/registry/webgl/extensions/ANGLE_instanced_arrays/
 * @constructor
 */
function ANGLE_instanced_arrays() {}


/** @const {number} */
ANGLE_instanced_arrays.prototype.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE;


/**
 * @param {number} mode Primitive type.
 * @param {number} first First vertex.
 * @param {number} count Number of vertices per instance.
 * @param {number} primcount Number of instances.
 * @return {undefined}
 */
ANGLE_instanced_arrays.prototype.drawArraysInstancedANGLE = function(
    mode, first, count, primcount) {};


/**
 * @param {number} mode Primitive type.
 * @param {number} count Number of vertex indices per instance.
 * @param {number} type Type of a vertex index.
 * @param {number} offset Offset to the first vertex index.
 * @param {number} primcount Number of instances.
 * @return {undefined}
 */
ANGLE_instanced_arrays.prototype.drawElementsInstancedANGLE = function(
    mode, count, type, offset, primcount) {};


/**
 * @param {number} index Attribute index.
 * @param {number} divisor Instance divisor.
 * @return {undefined}
 */
ANGLE_instanced_arrays.prototype.vertexAttribDivisorANGLE = function(
    index, divisor) {};


/**
 * @see https://www.khronos.org/registry/webgl/extensions/EXT_color_buffer_half_float/
 * @interface
 */
function EXT_color_buffer_half_float() {}

/** @const {number} */
EXT_color_buffer_half_float.prototype.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;

/** @const {number} */
EXT_color_buffer_half_float.prototype.RGB16F_EXT;

/** @const {number} */
EXT_color_buffer_half_float.prototype.RGBA16F_EXT;

/** @const {number} */
EXT_color_buffer_half_float.prototype.UNSIGNED_NORMALIZED_EXT;

/**
 * @interface
 * @see https://www.khronos.org/registry/webgl/extensions/WEBGL_color_buffer_float/
 */
function WEBGL_color_buffer_float() {}

/** @const {number} */
WEBGL_color_buffer_float.prototype.RGBA32F_EXT;

/** @const {number} */
WEBGL_color_buffer_float.prototype.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;

/** @const {number} */
WEBGL_color_buffer_float.prototype.UNSIGNED_NORMALIZED_EXT;


/**
 * @see https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1/
 * @interface
 */
function WEBGL_compressed_texture_etc1() {}

/** @const {number} */
WEBGL_compressed_texture_etc1.prototype.COMPRESSED_RGB_ETC1_WEBGL;


/**
 * @typedef {{
 *   MIN_EXT: number,
 *   MAX_EXT: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/EXT_blend_minmax
 */
var EXT_blend_minmax;

/**
 * @typedef {{
 *   SRGB_EXT: number,
 *   SRGB_ALPHA_EXT: number,
 *   SRGB8_ALPHA8_EXT: number,
 *   FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/EXT_sRGB
 */
var EXT_sRGB;

/**
 * @typedef {{
 *   COMPRESSED_RGBA_BPTC_UNORM_EXT: number,
 *   COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: number,
 *   COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: number,
 *   COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_bptc
 */
var EXT_texture_compression_bptc;

/**
 * @typedef {{
 *   COMPRESSED_RED_RGTC1_EXT: number,
 *   COMPRESSED_SIGNED_RED_RGTC1_EXT: number,
 *   COMPRESSED_RED_GREEN_RGTC2_EXT: number,
 *   COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_rgtc
 */
var EXT_texture_compression_rgtc;

/**
 * @typedef {{
 *   framebufferTextureMultiviewOVR: function(number, number, ?Object, number, number, number): void,
 *   FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: number,
 *   FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: number,
 *   MAX_VIEWS_OVR: number,
 *   FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/OVR_multiview2
 */
var OVR_multiview2;

/**
 * @typedef {{
 *   getSupportedProfiles: function(): !Array<string>,
 *   COMPRESSED_RGBA_ASTC_4x4_KHR: number,
 *   COMPRESSED_RGBA_ASTC_5x4_KHR: number,
 *   COMPRESSED_RGBA_ASTC_5x5_KHR: number,
 *   COMPRESSED_RGBA_ASTC_6x5_KHR: number,
 *   COMPRESSED_RGBA_ASTC_6x6_KHR: number,
 *   COMPRESSED_RGBA_ASTC_8x5_KHR: number,
 *   COMPRESSED_RGBA_ASTC_8x6_KHR: number,
 *   COMPRESSED_RGBA_ASTC_8x8_KHR: number,
 *   COMPRESSED_RGBA_ASTC_10x5_KHR: number,
 *   COMPRESSED_RGBA_ASTC_10x6_KHR: number,
 *   COMPRESSED_RGBA_ASTC_10x8_KHR: number,
 *   COMPRESSED_RGBA_ASTC_10x10_KHR: number,
 *   COMPRESSED_RGBA_ASTC_12x10_KHR: number,
 *   COMPRESSED_RGBA_ASTC_12x12_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: number,
 *   COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc
 */
var WEBGL_compressed_texture_astc;

/**
 * @typedef {{
 *   COMPRESSED_R11_EAC: number,
 *   COMPRESSED_SIGNED_R11_EAC: number,
 *   COMPRESSED_RG11_EAC: number,
 *   COMPRESSED_SIGNED_RG11_EAC: number,
 *   COMPRESSED_RGB8_ETC2: number,
 *   COMPRESSED_SRGB8_ETC2: number,
 *   COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number,
 *   COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number,
 *   COMPRESSED_RGBA8_ETC2_EAC: number,
 *   COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc
 */
var WEBGL_compressed_texture_etc;

/**
 * @typedef {{
 *   UNSIGNED_INT_24_8_WEBGL: number
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/WEBGL_depth_texture
 */
var WEBGL_depth_texture;

/**
 * @typedef {{
 *   COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number,
 *   COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number,
 *   COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number,
 *   COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number,
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_pvrtc
 */
var WEBGL_compressed_texture_pvrtc;

/**
 * @typedef {{
 *   COMPRESSED_SRGB_S3TC_DXT1_EXT: number,
 *   COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: number,
 *   COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: number,
 *   COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: number,
 * }}
 * @see https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb
 */
var WEBGL_compressed_texture_s3tc_srgb;
