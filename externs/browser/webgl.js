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
 * @constructor
 * @abstract
 */
function BaseWebGLContext() {}

/**
 * @constructor
 * @extends {BaseWebGLContext}
 */
function WebGLRenderingContext() {}


/** @const {number} */
BaseWebGLContext.DEPTH_BUFFER_BIT;

/** @const {number} */
BaseWebGLContext.STENCIL_BUFFER_BIT;

/** @const {number} */
BaseWebGLContext.COLOR_BUFFER_BIT;

/** @const {number} */
BaseWebGLContext.POINTS;

/** @const {number} */
BaseWebGLContext.LINES;

/** @const {number} */
BaseWebGLContext.LINE_LOOP;

/** @const {number} */
BaseWebGLContext.LINE_STRIP;

/** @const {number} */
BaseWebGLContext.TRIANGLES;

/** @const {number} */
BaseWebGLContext.TRIANGLE_STRIP;

/** @const {number} */
BaseWebGLContext.TRIANGLE_FAN;

/** @const {number} */
BaseWebGLContext.ZERO;

/** @const {number} */
BaseWebGLContext.ONE;

/** @const {number} */
BaseWebGLContext.SRC_COLOR;

/** @const {number} */
BaseWebGLContext.ONE_MINUS_SRC_COLOR;

/** @const {number} */
BaseWebGLContext.SRC_ALPHA;

/** @const {number} */
BaseWebGLContext.ONE_MINUS_SRC_ALPHA;

/** @const {number} */
BaseWebGLContext.DST_ALPHA;

/** @const {number} */
BaseWebGLContext.ONE_MINUS_DST_ALPHA;

/** @const {number} */
BaseWebGLContext.DST_COLOR;

/** @const {number} */
BaseWebGLContext.ONE_MINUS_DST_COLOR;

/** @const {number} */
BaseWebGLContext.SRC_ALPHA_SATURATE;

/** @const {number} */
BaseWebGLContext.FUNC_ADD;

/** @const {number} */
BaseWebGLContext.BLEND_EQUATION;

/** @const {number} */
BaseWebGLContext.BLEND_EQUATION_RGB;

/** @const {number} */
BaseWebGLContext.BLEND_EQUATION_ALPHA;

/** @const {number} */
BaseWebGLContext.FUNC_SUBTRACT;

/** @const {number} */
BaseWebGLContext.FUNC_REVERSE_SUBTRACT;

/** @const {number} */
BaseWebGLContext.BLEND_DST_RGB;

/** @const {number} */
BaseWebGLContext.BLEND_SRC_RGB;

/** @const {number} */
BaseWebGLContext.BLEND_DST_ALPHA;

/** @const {number} */
BaseWebGLContext.BLEND_SRC_ALPHA;

/** @const {number} */
BaseWebGLContext.CONSTANT_COLOR;

/** @const {number} */
BaseWebGLContext.ONE_MINUS_CONSTANT_COLOR;

/** @const {number} */
BaseWebGLContext.CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLContext.ONE_MINUS_CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLContext.BLEND_COLOR;

/** @const {number} */
BaseWebGLContext.ARRAY_BUFFER;

/** @const {number} */
BaseWebGLContext.ELEMENT_ARRAY_BUFFER;

/** @const {number} */
BaseWebGLContext.ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.ELEMENT_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.STREAM_DRAW;

/** @const {number} */
BaseWebGLContext.STATIC_DRAW;

/** @const {number} */
BaseWebGLContext.DYNAMIC_DRAW;

/** @const {number} */
BaseWebGLContext.BUFFER_SIZE;

/** @const {number} */
BaseWebGLContext.BUFFER_USAGE;

/** @const {number} */
BaseWebGLContext.CURRENT_VERTEX_ATTRIB;

/** @const {number} */
BaseWebGLContext.FRONT;

/** @const {number} */
BaseWebGLContext.BACK;

/** @const {number} */
BaseWebGLContext.FRONT_AND_BACK;

/** @const {number} */
BaseWebGLContext.CULL_FACE;

/** @const {number} */
BaseWebGLContext.BLEND;

/** @const {number} */
BaseWebGLContext.DITHER;

/** @const {number} */
BaseWebGLContext.STENCIL_TEST;

/** @const {number} */
BaseWebGLContext.DEPTH_TEST;

/** @const {number} */
BaseWebGLContext.SCISSOR_TEST;

/** @const {number} */
BaseWebGLContext.POLYGON_OFFSET_FILL;

/** @const {number} */
BaseWebGLContext.SAMPLE_ALPHA_TO_COVERAGE;

/** @const {number} */
BaseWebGLContext.SAMPLE_COVERAGE;

/** @const {number} */
BaseWebGLContext.NO_ERROR;

/** @const {number} */
BaseWebGLContext.INVALID_ENUM;

/** @const {number} */
BaseWebGLContext.INVALID_VALUE;

/** @const {number} */
BaseWebGLContext.INVALID_OPERATION;

/** @const {number} */
BaseWebGLContext.OUT_OF_MEMORY;

/** @const {number} */
BaseWebGLContext.CW;

/** @const {number} */
BaseWebGLContext.CCW;

/** @const {number} */
BaseWebGLContext.LINE_WIDTH;

/** @const {number} */
BaseWebGLContext.ALIASED_POINT_SIZE_RANGE;

/** @const {number} */
BaseWebGLContext.ALIASED_LINE_WIDTH_RANGE;

/** @const {number} */
BaseWebGLContext.CULL_FACE_MODE;

/** @const {number} */
BaseWebGLContext.FRONT_FACE;

/** @const {number} */
BaseWebGLContext.DEPTH_RANGE;

/** @const {number} */
BaseWebGLContext.DEPTH_WRITEMASK;

/** @const {number} */
BaseWebGLContext.DEPTH_CLEAR_VALUE;

/** @const {number} */
BaseWebGLContext.DEPTH_FUNC;

/** @const {number} */
BaseWebGLContext.STENCIL_CLEAR_VALUE;

/** @const {number} */
BaseWebGLContext.STENCIL_FUNC;

/** @const {number} */
BaseWebGLContext.STENCIL_FAIL;

/** @const {number} */
BaseWebGLContext.STENCIL_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLContext.STENCIL_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLContext.STENCIL_REF;

/** @const {number} */
BaseWebGLContext.STENCIL_VALUE_MASK;

/** @const {number} */
BaseWebGLContext.STENCIL_WRITEMASK;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_FUNC;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_FAIL;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_REF;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_VALUE_MASK;

/** @const {number} */
BaseWebGLContext.STENCIL_BACK_WRITEMASK;

/** @const {number} */
BaseWebGLContext.VIEWPORT;

/** @const {number} */
BaseWebGLContext.SCISSOR_BOX;

/** @const {number} */
BaseWebGLContext.COLOR_CLEAR_VALUE;

/** @const {number} */
BaseWebGLContext.COLOR_WRITEMASK;

/** @const {number} */
BaseWebGLContext.UNPACK_ALIGNMENT;

/** @const {number} */
BaseWebGLContext.PACK_ALIGNMENT;

/** @const {number} */
BaseWebGLContext.MAX_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLContext.MAX_VIEWPORT_DIMS;

/** @const {number} */
BaseWebGLContext.SUBPIXEL_BITS;

/** @const {number} */
BaseWebGLContext.RED_BITS;

/** @const {number} */
BaseWebGLContext.GREEN_BITS;

/** @const {number} */
BaseWebGLContext.BLUE_BITS;

/** @const {number} */
BaseWebGLContext.ALPHA_BITS;

/** @const {number} */
BaseWebGLContext.DEPTH_BITS;

/** @const {number} */
BaseWebGLContext.STENCIL_BITS;

/** @const {number} */
BaseWebGLContext.POLYGON_OFFSET_UNITS;

/** @const {number} */
BaseWebGLContext.POLYGON_OFFSET_FACTOR;

/** @const {number} */
BaseWebGLContext.TEXTURE_BINDING_2D;

/** @const {number} */
BaseWebGLContext.SAMPLE_BUFFERS;

/** @const {number} */
BaseWebGLContext.SAMPLES;

/** @const {number} */
BaseWebGLContext.SAMPLE_COVERAGE_VALUE;

/** @const {number} */
BaseWebGLContext.SAMPLE_COVERAGE_INVERT;

/** @const {number} */
BaseWebGLContext.COMPRESSED_TEXTURE_FORMATS;

/** @const {number} */
BaseWebGLContext.DONT_CARE;

/** @const {number} */
BaseWebGLContext.FASTEST;

/** @const {number} */
BaseWebGLContext.NICEST;

/** @const {number} */
BaseWebGLContext.GENERATE_MIPMAP_HINT;

/** @const {number} */
BaseWebGLContext.BYTE;

/** @const {number} */
BaseWebGLContext.UNSIGNED_BYTE;

/** @const {number} */
BaseWebGLContext.SHORT;

/** @const {number} */
BaseWebGLContext.UNSIGNED_SHORT;

/** @const {number} */
BaseWebGLContext.INT;

/** @const {number} */
BaseWebGLContext.UNSIGNED_INT;

/** @const {number} */
BaseWebGLContext.FLOAT;

/** @const {number} */
BaseWebGLContext.DEPTH_COMPONENT;

/** @const {number} */
BaseWebGLContext.ALPHA;

/** @const {number} */
BaseWebGLContext.RGB;

/** @const {number} */
BaseWebGLContext.RGBA;

/** @const {number} */
BaseWebGLContext.LUMINANCE;

/** @const {number} */
BaseWebGLContext.LUMINANCE_ALPHA;

/** @const {number} */
BaseWebGLContext.UNSIGNED_SHORT_4_4_4_4;

/** @const {number} */
BaseWebGLContext.UNSIGNED_SHORT_5_5_5_1;

/** @const {number} */
BaseWebGLContext.UNSIGNED_SHORT_5_6_5;

/** @const {number} */
BaseWebGLContext.FRAGMENT_SHADER;

/** @const {number} */
BaseWebGLContext.VERTEX_SHADER;

/** @const {number} */
BaseWebGLContext.MAX_VERTEX_ATTRIBS;

/** @const {number} */
BaseWebGLContext.MAX_VERTEX_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLContext.MAX_VARYING_VECTORS;

/** @const {number} */
BaseWebGLContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLContext.MAX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLContext.MAX_FRAGMENT_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLContext.SHADER_TYPE;

/** @const {number} */
BaseWebGLContext.DELETE_STATUS;

/** @const {number} */
BaseWebGLContext.LINK_STATUS;

/** @const {number} */
BaseWebGLContext.VALIDATE_STATUS;

/** @const {number} */
BaseWebGLContext.ATTACHED_SHADERS;

/** @const {number} */
BaseWebGLContext.ACTIVE_UNIFORMS;

/** @const {number} */
BaseWebGLContext.ACTIVE_ATTRIBUTES;

/** @const {number} */
BaseWebGLContext.SHADING_LANGUAGE_VERSION;

/** @const {number} */
BaseWebGLContext.CURRENT_PROGRAM;

/** @const {number} */
BaseWebGLContext.NEVER;

/** @const {number} */
BaseWebGLContext.LESS;

/** @const {number} */
BaseWebGLContext.EQUAL;

/** @const {number} */
BaseWebGLContext.LEQUAL;

/** @const {number} */
BaseWebGLContext.GREATER;

/** @const {number} */
BaseWebGLContext.NOTEQUAL;

/** @const {number} */
BaseWebGLContext.GEQUAL;

/** @const {number} */
BaseWebGLContext.ALWAYS;

/** @const {number} */
BaseWebGLContext.KEEP;

/** @const {number} */
BaseWebGLContext.REPLACE;

/** @const {number} */
BaseWebGLContext.INCR;

/** @const {number} */
BaseWebGLContext.DECR;

/** @const {number} */
BaseWebGLContext.INVERT;

/** @const {number} */
BaseWebGLContext.INCR_WRAP;

/** @const {number} */
BaseWebGLContext.DECR_WRAP;

/** @const {number} */
BaseWebGLContext.VENDOR;

/** @const {number} */
BaseWebGLContext.RENDERER;

/** @const {number} */
BaseWebGLContext.VERSION;

/** @const {number} */
BaseWebGLContext.NEAREST;

/** @const {number} */
BaseWebGLContext.LINEAR;

/** @const {number} */
BaseWebGLContext.NEAREST_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLContext.LINEAR_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLContext.NEAREST_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLContext.LINEAR_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLContext.TEXTURE_MAG_FILTER;

/** @const {number} */
BaseWebGLContext.TEXTURE_MIN_FILTER;

/** @const {number} */
BaseWebGLContext.TEXTURE_WRAP_S;

/** @const {number} */
BaseWebGLContext.TEXTURE_WRAP_T;

/** @const {number} */
BaseWebGLContext.TEXTURE_2D;

/** @const {number} */
BaseWebGLContext.TEXTURE;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP;

/** @const {number} */
BaseWebGLContext.TEXTURE_BINDING_CUBE_MAP;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP_POSITIVE_X;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_X;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Y;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Y;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Z;

/** @const {number} */
BaseWebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Z;

/** @const {number} */
BaseWebGLContext.MAX_CUBE_MAP_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLContext.TEXTURE0;

/** @const {number} */
BaseWebGLContext.TEXTURE1;

/** @const {number} */
BaseWebGLContext.TEXTURE2;

/** @const {number} */
BaseWebGLContext.TEXTURE3;

/** @const {number} */
BaseWebGLContext.TEXTURE4;

/** @const {number} */
BaseWebGLContext.TEXTURE5;

/** @const {number} */
BaseWebGLContext.TEXTURE6;

/** @const {number} */
BaseWebGLContext.TEXTURE7;

/** @const {number} */
BaseWebGLContext.TEXTURE8;

/** @const {number} */
BaseWebGLContext.TEXTURE9;

/** @const {number} */
BaseWebGLContext.TEXTURE10;

/** @const {number} */
BaseWebGLContext.TEXTURE11;

/** @const {number} */
BaseWebGLContext.TEXTURE12;

/** @const {number} */
BaseWebGLContext.TEXTURE13;

/** @const {number} */
BaseWebGLContext.TEXTURE14;

/** @const {number} */
BaseWebGLContext.TEXTURE15;

/** @const {number} */
BaseWebGLContext.TEXTURE16;

/** @const {number} */
BaseWebGLContext.TEXTURE17;

/** @const {number} */
BaseWebGLContext.TEXTURE18;

/** @const {number} */
BaseWebGLContext.TEXTURE19;

/** @const {number} */
BaseWebGLContext.TEXTURE20;

/** @const {number} */
BaseWebGLContext.TEXTURE21;

/** @const {number} */
BaseWebGLContext.TEXTURE22;

/** @const {number} */
BaseWebGLContext.TEXTURE23;

/** @const {number} */
BaseWebGLContext.TEXTURE24;

/** @const {number} */
BaseWebGLContext.TEXTURE25;

/** @const {number} */
BaseWebGLContext.TEXTURE26;

/** @const {number} */
BaseWebGLContext.TEXTURE27;

/** @const {number} */
BaseWebGLContext.TEXTURE28;

/** @const {number} */
BaseWebGLContext.TEXTURE29;

/** @const {number} */
BaseWebGLContext.TEXTURE30;

/** @const {number} */
BaseWebGLContext.TEXTURE31;

/** @const {number} */
BaseWebGLContext.ACTIVE_TEXTURE;

/** @const {number} */
BaseWebGLContext.REPEAT;

/** @const {number} */
BaseWebGLContext.CLAMP_TO_EDGE;

/** @const {number} */
BaseWebGLContext.MIRRORED_REPEAT;

/** @const {number} */
BaseWebGLContext.FLOAT_VEC2;

/** @const {number} */
BaseWebGLContext.FLOAT_VEC3;

/** @const {number} */
BaseWebGLContext.FLOAT_VEC4;

/** @const {number} */
BaseWebGLContext.INT_VEC2;

/** @const {number} */
BaseWebGLContext.INT_VEC3;

/** @const {number} */
BaseWebGLContext.INT_VEC4;

/** @const {number} */
BaseWebGLContext.BOOL;

/** @const {number} */
BaseWebGLContext.BOOL_VEC2;

/** @const {number} */
BaseWebGLContext.BOOL_VEC3;

/** @const {number} */
BaseWebGLContext.BOOL_VEC4;

/** @const {number} */
BaseWebGLContext.FLOAT_MAT2;

/** @const {number} */
BaseWebGLContext.FLOAT_MAT3;

/** @const {number} */
BaseWebGLContext.FLOAT_MAT4;

/** @const {number} */
BaseWebGLContext.SAMPLER_2D;

/** @const {number} */
BaseWebGLContext.SAMPLER_CUBE;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_ENABLED;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_SIZE;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_STRIDE;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_TYPE;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_NORMALIZED;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_POINTER;

/** @const {number} */
BaseWebGLContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.IMPLEMENTATION_COLOR_READ_FORMAT;

/** @const {number} */
BaseWebGLContext.IMPLEMENTATION_COLOR_READ_TYPE;

/** @const {number} */
BaseWebGLContext.COMPILE_STATUS;

/** @const {number} */
BaseWebGLContext.LOW_FLOAT;

/** @const {number} */
BaseWebGLContext.MEDIUM_FLOAT;

/** @const {number} */
BaseWebGLContext.HIGH_FLOAT;

/** @const {number} */
BaseWebGLContext.LOW_INT;

/** @const {number} */
BaseWebGLContext.MEDIUM_INT;

/** @const {number} */
BaseWebGLContext.HIGH_INT;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER;

/** @const {number} */
BaseWebGLContext.RGBA4;

/** @const {number} */
BaseWebGLContext.RGB5_A1;

/** @const {number} */
BaseWebGLContext.RGB565;

/** @const {number} */
BaseWebGLContext.DEPTH_COMPONENT16;

/** @const {number} */
BaseWebGLContext.STENCIL_INDEX;

/** @const {number} */
BaseWebGLContext.STENCIL_INDEX8;

/** @const {number} */
BaseWebGLContext.DEPTH_STENCIL;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_WIDTH;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_HEIGHT;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_INTERNAL_FORMAT;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_RED_SIZE;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_GREEN_SIZE;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_BLUE_SIZE;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_ALPHA_SIZE;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_DEPTH_SIZE;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_STENCIL_SIZE;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;

/** @const {number} */
BaseWebGLContext.COLOR_ATTACHMENT0;

/** @const {number} */
BaseWebGLContext.DEPTH_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.DEPTH_STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.NONE;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_COMPLETE;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_UNSUPPORTED;

/** @const {number} */
BaseWebGLContext.FRAMEBUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.RENDERBUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.MAX_RENDERBUFFER_SIZE;

/** @const {number} */
BaseWebGLContext.INVALID_FRAMEBUFFER_OPERATION;

/** @const {number} */
BaseWebGLContext.UNPACK_FLIP_Y_WEBGL;

/** @const {number} */
BaseWebGLContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL;

/** @const {number} */
BaseWebGLContext.CONTEXT_LOST_WEBGL;

/** @const {number} */
BaseWebGLContext.UNPACK_COLORSPACE_CONVERSION_WEBGL;

/** @const {number} */
BaseWebGLContext.BROWSER_DEFAULT_WEBGL;


/** @const {number} */
BaseWebGLContext.prototype.DEPTH_BUFFER_BIT;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BUFFER_BIT;

/** @const {number} */
BaseWebGLContext.prototype.COLOR_BUFFER_BIT;

/** @const {number} */
BaseWebGLContext.prototype.POINTS;

/** @const {number} */
BaseWebGLContext.prototype.LINES;

/** @const {number} */
BaseWebGLContext.prototype.LINE_LOOP;

/** @const {number} */
BaseWebGLContext.prototype.LINE_STRIP;

/** @const {number} */
BaseWebGLContext.prototype.TRIANGLES;

/** @const {number} */
BaseWebGLContext.prototype.TRIANGLE_STRIP;

/** @const {number} */
BaseWebGLContext.prototype.TRIANGLE_FAN;

/** @const {number} */
BaseWebGLContext.prototype.ZERO;

/** @const {number} */
BaseWebGLContext.prototype.ONE;

/** @const {number} */
BaseWebGLContext.prototype.SRC_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.ONE_MINUS_SRC_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.SRC_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.ONE_MINUS_SRC_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.DST_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.ONE_MINUS_DST_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.DST_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.ONE_MINUS_DST_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.SRC_ALPHA_SATURATE;

/** @const {number} */
BaseWebGLContext.prototype.FUNC_ADD;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_EQUATION;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_EQUATION_RGB;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_EQUATION_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.FUNC_SUBTRACT;

/** @const {number} */
BaseWebGLContext.prototype.FUNC_REVERSE_SUBTRACT;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_DST_RGB;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_SRC_RGB;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_DST_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_SRC_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.CONSTANT_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.ONE_MINUS_CONSTANT_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.ONE_MINUS_CONSTANT_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.BLEND_COLOR;

/** @const {number} */
BaseWebGLContext.prototype.ARRAY_BUFFER;

/** @const {number} */
BaseWebGLContext.prototype.ELEMENT_ARRAY_BUFFER;

/** @const {number} */
BaseWebGLContext.prototype.ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.prototype.ELEMENT_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.prototype.STREAM_DRAW;

/** @const {number} */
BaseWebGLContext.prototype.STATIC_DRAW;

/** @const {number} */
BaseWebGLContext.prototype.DYNAMIC_DRAW;

/** @const {number} */
BaseWebGLContext.prototype.BUFFER_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.BUFFER_USAGE;

/** @const {number} */
BaseWebGLContext.prototype.CURRENT_VERTEX_ATTRIB;

/** @const {number} */
BaseWebGLContext.prototype.FRONT;

/** @const {number} */
BaseWebGLContext.prototype.BACK;

/** @const {number} */
BaseWebGLContext.prototype.FRONT_AND_BACK;

/** @const {number} */
BaseWebGLContext.prototype.CULL_FACE;

/** @const {number} */
BaseWebGLContext.prototype.BLEND;

/** @const {number} */
BaseWebGLContext.prototype.DITHER;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_TEST;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_TEST;

/** @const {number} */
BaseWebGLContext.prototype.SCISSOR_TEST;

/** @const {number} */
BaseWebGLContext.prototype.POLYGON_OFFSET_FILL;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLE_ALPHA_TO_COVERAGE;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLE_COVERAGE;

/** @const {number} */
BaseWebGLContext.prototype.NO_ERROR;

/** @const {number} */
BaseWebGLContext.prototype.INVALID_ENUM;

/** @const {number} */
BaseWebGLContext.prototype.INVALID_VALUE;

/** @const {number} */
BaseWebGLContext.prototype.INVALID_OPERATION;

/** @const {number} */
BaseWebGLContext.prototype.OUT_OF_MEMORY;

/** @const {number} */
BaseWebGLContext.prototype.CW;

/** @const {number} */
BaseWebGLContext.prototype.CCW;

/** @const {number} */
BaseWebGLContext.prototype.LINE_WIDTH;

/** @const {number} */
BaseWebGLContext.prototype.ALIASED_POINT_SIZE_RANGE;

/** @const {number} */
BaseWebGLContext.prototype.ALIASED_LINE_WIDTH_RANGE;

/** @const {number} */
BaseWebGLContext.prototype.CULL_FACE_MODE;

/** @const {number} */
BaseWebGLContext.prototype.FRONT_FACE;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_RANGE;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_WRITEMASK;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_CLEAR_VALUE;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_FUNC;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_CLEAR_VALUE;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_FUNC;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_FAIL;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_REF;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_VALUE_MASK;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_WRITEMASK;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_FUNC;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_FAIL;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_PASS_DEPTH_FAIL;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_PASS_DEPTH_PASS;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_REF;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_VALUE_MASK;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BACK_WRITEMASK;

/** @const {number} */
BaseWebGLContext.prototype.VIEWPORT;

/** @const {number} */
BaseWebGLContext.prototype.SCISSOR_BOX;

/** @const {number} */
BaseWebGLContext.prototype.COLOR_CLEAR_VALUE;

/** @const {number} */
BaseWebGLContext.prototype.COLOR_WRITEMASK;

/** @const {number} */
BaseWebGLContext.prototype.UNPACK_ALIGNMENT;

/** @const {number} */
BaseWebGLContext.prototype.PACK_ALIGNMENT;

/** @const {number} */
BaseWebGLContext.prototype.MAX_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.MAX_VIEWPORT_DIMS;

/** @const {number} */
BaseWebGLContext.prototype.SUBPIXEL_BITS;

/** @const {number} */
BaseWebGLContext.prototype.RED_BITS;

/** @const {number} */
BaseWebGLContext.prototype.GREEN_BITS;

/** @const {number} */
BaseWebGLContext.prototype.BLUE_BITS;

/** @const {number} */
BaseWebGLContext.prototype.ALPHA_BITS;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_BITS;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_BITS;

/** @const {number} */
BaseWebGLContext.prototype.POLYGON_OFFSET_UNITS;

/** @const {number} */
BaseWebGLContext.prototype.POLYGON_OFFSET_FACTOR;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_BINDING_2D;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLE_BUFFERS;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLES;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLE_COVERAGE_VALUE;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLE_COVERAGE_INVERT;

/** @const {number} */
BaseWebGLContext.prototype.COMPRESSED_TEXTURE_FORMATS;

/** @const {number} */
BaseWebGLContext.prototype.DONT_CARE;

/** @const {number} */
BaseWebGLContext.prototype.FASTEST;

/** @const {number} */
BaseWebGLContext.prototype.NICEST;

/** @const {number} */
BaseWebGLContext.prototype.GENERATE_MIPMAP_HINT;

/** @const {number} */
BaseWebGLContext.prototype.BYTE;

/** @const {number} */
BaseWebGLContext.prototype.UNSIGNED_BYTE;

/** @const {number} */
BaseWebGLContext.prototype.SHORT;

/** @const {number} */
BaseWebGLContext.prototype.UNSIGNED_SHORT;

/** @const {number} */
BaseWebGLContext.prototype.INT;

/** @const {number} */
BaseWebGLContext.prototype.UNSIGNED_INT;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_COMPONENT;

/** @const {number} */
BaseWebGLContext.prototype.ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.RGB;

/** @const {number} */
BaseWebGLContext.prototype.RGBA;

/** @const {number} */
BaseWebGLContext.prototype.LUMINANCE;

/** @const {number} */
BaseWebGLContext.prototype.LUMINANCE_ALPHA;

/** @const {number} */
BaseWebGLContext.prototype.UNSIGNED_SHORT_4_4_4_4;

/** @const {number} */
BaseWebGLContext.prototype.UNSIGNED_SHORT_5_5_5_1;

/** @const {number} */
BaseWebGLContext.prototype.UNSIGNED_SHORT_5_6_5;

/** @const {number} */
BaseWebGLContext.prototype.FRAGMENT_SHADER;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_SHADER;

/** @const {number} */
BaseWebGLContext.prototype.MAX_VERTEX_ATTRIBS;

/** @const {number} */
BaseWebGLContext.prototype.MAX_VERTEX_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLContext.prototype.MAX_VARYING_VECTORS;

/** @const {number} */
BaseWebGLContext.prototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLContext.prototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLContext.prototype.MAX_TEXTURE_IMAGE_UNITS;

/** @const {number} */
BaseWebGLContext.prototype.MAX_FRAGMENT_UNIFORM_VECTORS;

/** @const {number} */
BaseWebGLContext.prototype.SHADER_TYPE;

/** @const {number} */
BaseWebGLContext.prototype.DELETE_STATUS;

/** @const {number} */
BaseWebGLContext.prototype.LINK_STATUS;

/** @const {number} */
BaseWebGLContext.prototype.VALIDATE_STATUS;

/** @const {number} */
BaseWebGLContext.prototype.ATTACHED_SHADERS;

/** @const {number} */
BaseWebGLContext.prototype.ACTIVE_UNIFORMS;

/** @const {number} */
BaseWebGLContext.prototype.ACTIVE_ATTRIBUTES;

/** @const {number} */
BaseWebGLContext.prototype.SHADING_LANGUAGE_VERSION;

/** @const {number} */
BaseWebGLContext.prototype.CURRENT_PROGRAM;

/** @const {number} */
BaseWebGLContext.prototype.NEVER;

/** @const {number} */
BaseWebGLContext.prototype.LESS;

/** @const {number} */
BaseWebGLContext.prototype.EQUAL;

/** @const {number} */
BaseWebGLContext.prototype.LEQUAL;

/** @const {number} */
BaseWebGLContext.prototype.GREATER;

/** @const {number} */
BaseWebGLContext.prototype.NOTEQUAL;

/** @const {number} */
BaseWebGLContext.prototype.GEQUAL;

/** @const {number} */
BaseWebGLContext.prototype.ALWAYS;

/** @const {number} */
BaseWebGLContext.prototype.KEEP;

/** @const {number} */
BaseWebGLContext.prototype.REPLACE;

/** @const {number} */
BaseWebGLContext.prototype.INCR;

/** @const {number} */
BaseWebGLContext.prototype.DECR;

/** @const {number} */
BaseWebGLContext.prototype.INVERT;

/** @const {number} */
BaseWebGLContext.prototype.INCR_WRAP;

/** @const {number} */
BaseWebGLContext.prototype.DECR_WRAP;

/** @const {number} */
BaseWebGLContext.prototype.VENDOR;

/** @const {number} */
BaseWebGLContext.prototype.RENDERER;

/** @const {number} */
BaseWebGLContext.prototype.VERSION;

/** @const {number} */
BaseWebGLContext.prototype.NEAREST;

/** @const {number} */
BaseWebGLContext.prototype.LINEAR;

/** @const {number} */
BaseWebGLContext.prototype.NEAREST_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLContext.prototype.LINEAR_MIPMAP_NEAREST;

/** @const {number} */
BaseWebGLContext.prototype.NEAREST_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLContext.prototype.LINEAR_MIPMAP_LINEAR;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_MAG_FILTER;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_MIN_FILTER;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_WRAP_S;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_WRAP_T;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_2D;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_BINDING_CUBE_MAP;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_X;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_X;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Y;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Y;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Z;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Z;

/** @const {number} */
BaseWebGLContext.prototype.MAX_CUBE_MAP_TEXTURE_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE0;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE1;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE2;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE3;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE4;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE5;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE6;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE7;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE8;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE9;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE10;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE11;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE12;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE13;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE14;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE15;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE16;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE17;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE18;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE19;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE20;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE21;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE22;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE23;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE24;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE25;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE26;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE27;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE28;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE29;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE30;

/** @const {number} */
BaseWebGLContext.prototype.TEXTURE31;

/** @const {number} */
BaseWebGLContext.prototype.ACTIVE_TEXTURE;

/** @const {number} */
BaseWebGLContext.prototype.REPEAT;

/** @const {number} */
BaseWebGLContext.prototype.CLAMP_TO_EDGE;

/** @const {number} */
BaseWebGLContext.prototype.MIRRORED_REPEAT;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT_VEC2;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT_VEC3;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT_VEC4;

/** @const {number} */
BaseWebGLContext.prototype.INT_VEC2;

/** @const {number} */
BaseWebGLContext.prototype.INT_VEC3;

/** @const {number} */
BaseWebGLContext.prototype.INT_VEC4;

/** @const {number} */
BaseWebGLContext.prototype.BOOL;

/** @const {number} */
BaseWebGLContext.prototype.BOOL_VEC2;

/** @const {number} */
BaseWebGLContext.prototype.BOOL_VEC3;

/** @const {number} */
BaseWebGLContext.prototype.BOOL_VEC4;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT_MAT2;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT_MAT3;

/** @const {number} */
BaseWebGLContext.prototype.FLOAT_MAT4;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLER_2D;

/** @const {number} */
BaseWebGLContext.prototype.SAMPLER_CUBE;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_ENABLED;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_STRIDE;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_TYPE;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_NORMALIZED;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_POINTER;

/** @const {number} */
BaseWebGLContext.prototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.prototype.COMPILE_STATUS;

/** @const {number} */
BaseWebGLContext.prototype.LOW_FLOAT;

/** @const {number} */
BaseWebGLContext.prototype.MEDIUM_FLOAT;

/** @const {number} */
BaseWebGLContext.prototype.HIGH_FLOAT;

/** @const {number} */
BaseWebGLContext.prototype.LOW_INT;

/** @const {number} */
BaseWebGLContext.prototype.MEDIUM_INT;

/** @const {number} */
BaseWebGLContext.prototype.HIGH_INT;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER;

/** @const {number} */
BaseWebGLContext.prototype.RGBA4;

/** @const {number} */
BaseWebGLContext.prototype.RGB5_A1;

/** @const {number} */
BaseWebGLContext.prototype.RGB565;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_COMPONENT16;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_INDEX;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_INDEX8;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_STENCIL;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_WIDTH;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_HEIGHT;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_INTERNAL_FORMAT;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_RED_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_GREEN_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_BLUE_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_ALPHA_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_DEPTH_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_STENCIL_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;

/** @const {number} */
BaseWebGLContext.prototype.COLOR_ATTACHMENT0;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.prototype.STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.prototype.DEPTH_STENCIL_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.prototype.NONE;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_COMPLETE;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_UNSUPPORTED;

/** @const {number} */
BaseWebGLContext.prototype.FRAMEBUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.prototype.RENDERBUFFER_BINDING;

/** @const {number} */
BaseWebGLContext.prototype.MAX_RENDERBUFFER_SIZE;

/** @const {number} */
BaseWebGLContext.prototype.INVALID_FRAMEBUFFER_OPERATION;

/** @const {number} */
BaseWebGLContext.prototype.UNPACK_FLIP_Y_WEBGL;

/** @const {number} */
BaseWebGLContext.prototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL;

/** @const {number} */
BaseWebGLContext.prototype.CONTEXT_LOST_WEBGL;

/** @const {number} */
BaseWebGLContext.prototype.UNPACK_COLORSPACE_CONVERSION_WEBGL;

/** @const {number} */
BaseWebGLContext.prototype.BROWSER_DEFAULT_WEBGL;


/**
 * @type {!HTMLCanvasElement}
 */
BaseWebGLContext.prototype.canvas;

/**
 * @type {string}
 */
BaseWebGLContext.prototype.drawingBufferColorSpace;

/**
 * @type {number}
 */
BaseWebGLContext.prototype.drawingBufferWidth;

/**
 * @type {number}
 */
BaseWebGLContext.prototype.drawingBufferHeight;

/**
 * @return {!WebGLContextAttributes}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getContextAttributes = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isContextLost = function() {};

/**
 * @return {!Array<string>}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getSupportedExtensions = function() {};

/**
 * Note that this has side effects by enabling the extension even if the
 * result is not used.
 * @param {string} name
 * @return {Object}
 */
BaseWebGLContext.prototype.getExtension = function(name) {};

/**
 * @type {string}
 */
BaseWebGLContext.prototype.unpackColorSpace;

/**
 * @param {number} texture
 * @return {undefined}
 */
BaseWebGLContext.prototype.activeTexture = function(texture) {};

/**
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLContext.prototype.attachShader = function(program, shader) {};

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @param {string} name
 * @return {undefined}
 */
BaseWebGLContext.prototype.bindAttribLocation = function(
    program, index, name) {};

/**
 * @param {number} target
 * @param {WebGLBuffer} buffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.bindBuffer = function(target, buffer) {};

/**
 * @param {number} target
 * @param {WebGLFramebuffer} buffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.bindFramebuffer = function(target, buffer) {};

/**
 * @param {number} target
 * @param {WebGLRenderbuffer} buffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.bindRenderbuffer = function(target, buffer) {};

/**
 * @param {number} target
 * @param {WebGLTexture} texture
 * @return {undefined}
 */
BaseWebGLContext.prototype.bindTexture = function(target, texture) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {undefined}
 */
BaseWebGLContext.prototype.blendColor = function(
    red, green, blue, alpha) {};

/**
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLContext.prototype.blendEquation = function(mode) {};

/**
 * @param {number} modeRGB
 * @param {number} modeAlpha
 * @return {undefined}
 */
BaseWebGLContext.prototype.blendEquationSeparate = function(
    modeRGB, modeAlpha) {};

/**
 * @param {number} sfactor
 * @param {number} dfactor
 * @return {undefined}
 */
BaseWebGLContext.prototype.blendFunc = function(sfactor, dfactor) {};

/**
 * @param {number} srcRGB
 * @param {number} dstRGB
 * @param {number} srcAlpha
 * @param {number} dstAlpha
 * @return {undefined}
 */
BaseWebGLContext.prototype.blendFuncSeparate = function(
    srcRGB, dstRGB, srcAlpha, dstAlpha) {};

/**
 * @param {number} target
 * @param {ArrayBufferView|ArrayBuffer|number} data
 * @param {number} usage
 * @return {undefined}
 */
BaseWebGLContext.prototype.bufferData = function(target, data, usage) {};

/**
 * @param {number} target
 * @param {number} offset
 * @param {ArrayBufferView|ArrayBuffer} data
 * @return {undefined}
 */
BaseWebGLContext.prototype.bufferSubData = function(
    target, offset, data) {};

/**
 * @param {number} target
 * @return {number}
 */
BaseWebGLContext.prototype.checkFramebufferStatus = function(target) {};

/**
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLContext.prototype.clear = function(mask) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {undefined}
 */
BaseWebGLContext.prototype.clearColor = function(
    red, green, blue, alpha) {};

/**
 * @param {number} depth
 * @return {undefined}
 */
BaseWebGLContext.prototype.clearDepth = function(depth) {};

/**
 * @param {number} s
 * @return {undefined}
 */
BaseWebGLContext.prototype.clearStencil = function(s) {};

/**
 * @param {boolean} red
 * @param {boolean} green
 * @param {boolean} blue
 * @param {boolean} alpha
 * @return {undefined}
 */
BaseWebGLContext.prototype.colorMask = function(
    red, green, blue, alpha) {};

/**
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLContext.prototype.compileShader = function(shader) {};

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
BaseWebGLContext.prototype.compressedTexImage2D = function(
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
BaseWebGLContext.prototype.compressedTexSubImage2D = function(
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
BaseWebGLContext.prototype.copyTexImage2D = function(
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
BaseWebGLContext.prototype.copyTexSubImage2D = function(
    target, level, xoffset, yoffset, x, y, width, height) {};

/**
 * @return {!WebGLBuffer}
 * @nosideeffects
 */
BaseWebGLContext.prototype.createBuffer = function() {};

/**
 * @return {!WebGLFramebuffer}
 * @nosideeffects
 */
BaseWebGLContext.prototype.createFramebuffer = function() {};

/**
 * @return {!WebGLProgram}
 * @nosideeffects
 */
BaseWebGLContext.prototype.createProgram = function() {};

/**
 * @return {!WebGLRenderbuffer}
 * @nosideeffects
 */
BaseWebGLContext.prototype.createRenderbuffer = function() {};

/**
 * @param {number} type
 * @return {!WebGLShader}
 * @nosideeffects
 */
BaseWebGLContext.prototype.createShader = function(type) {};

/**
 * @return {!WebGLTexture}
 * @nosideeffects
 */
BaseWebGLContext.prototype.createTexture = function() {};

/**
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLContext.prototype.cullFace = function(mode) {};

/**
 * @param {WebGLBuffer} buffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.deleteBuffer = function(buffer) {};

/**
 * @param {WebGLFramebuffer} buffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.deleteFramebuffer = function(buffer) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLContext.prototype.deleteProgram = function(program) {};

/**
 * @param {WebGLRenderbuffer} buffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.deleteRenderbuffer = function(buffer) {};

/**
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLContext.prototype.deleteShader = function(shader) {};

/**
 * @param {WebGLTexture} texture
 * @return {undefined}
 */
BaseWebGLContext.prototype.deleteTexture = function(texture) {};

/**
 * @param {number} func
 * @return {undefined}
 */
BaseWebGLContext.prototype.depthFunc = function(func) {};

/**
 * @param {boolean} flag
 * @return {undefined}
 */
BaseWebGLContext.prototype.depthMask = function(flag) {};

/**
 * @param {number} nearVal
 * @param {number} farVal
 * @return {undefined}
 */
BaseWebGLContext.prototype.depthRange = function(nearVal, farVal) {};

/**
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 * @return {undefined}
 */
BaseWebGLContext.prototype.detachShader = function(program, shader) {};

/**
 * @param {number} flags
 * @return {undefined}
 */
BaseWebGLContext.prototype.disable = function(flags) {};

/**
 * @param {number} index
 * @return {undefined}
 */
BaseWebGLContext.prototype.disableVertexAttribArray = function(
    index) {};

/**
 * @param {number} mode
 * @param {number} first
 * @param {number} count
 * @return {undefined}
 */
BaseWebGLContext.prototype.drawArrays = function(mode, first, count) {};

/**
 * @param {number} mode
 * @param {number} count
 * @param {number} type
 * @param {number} offset
 * @return {undefined}
 */
BaseWebGLContext.prototype.drawElements = function(
    mode, count, type, offset) {};

/**
 * @param {number} cap
 * @return {undefined}
 */
BaseWebGLContext.prototype.enable = function(cap) {};

/**
 * @param {number} index
 * @return {undefined}
 */
BaseWebGLContext.prototype.enableVertexAttribArray = function(
    index) {};

BaseWebGLContext.prototype.finish = function() {};

BaseWebGLContext.prototype.flush = function() {};

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} renderbuffertarget
 * @param {WebGLRenderbuffer} renderbuffer
 * @return {undefined}
 */
BaseWebGLContext.prototype.framebufferRenderbuffer = function(
    target, attachment, renderbuffertarget, renderbuffer) {};

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} textarget
 * @param {WebGLTexture} texture
 * @param {number} level
 * @return {undefined}
 */
BaseWebGLContext.prototype.framebufferTexture2D = function(
    target, attachment, textarget, texture, level) {};

/**
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLContext.prototype.frontFace = function(mode) {};

/**
 * @param {number} target
 * @return {undefined}
 */
BaseWebGLContext.prototype.generateMipmap = function(target) {};

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @return {WebGLActiveInfo}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getActiveAttrib = function(program, index) {};

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @return {WebGLActiveInfo}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getActiveUniform = function(program, index) {};

/**
 * @param {WebGLProgram} program
 * @return {!Array<WebGLShader>}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getAttachedShaders = function(program) {};

/**
 * @param {WebGLProgram} program
 * @param {string} name
 * @return {number}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getAttribLocation = function(program, name) {};

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getBufferParameter = function(target, pname) {};

/**
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getParameter = function(pname) {};

/**
 * @return {number}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getError = function() {};

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getFramebufferAttachmentParameter = function(
    target, attachment, pname) {};

/**
 * @param {WebGLProgram} program
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getProgramParameter = function(
    program, pname) {};

/**
 * @param {WebGLProgram} program
 * @return {string}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getProgramInfoLog = function(program) {};

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getRenderbufferParameter = function(
    target, pname) {};

/**
 * @param {WebGLShader} shader
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getShaderParameter = function(shader, pname) {};

/**
 * @param {number} shadertype
 * @param {number} precisiontype
 * @return {WebGLShaderPrecisionFormat}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getShaderPrecisionFormat = function(shadertype,
    precisiontype) {};

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getShaderInfoLog = function(shader) {};

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getShaderSource = function(shader) {};

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getTexParameter = function(target, pname) {};

/**
 * @param {WebGLProgram} program
 * @param {WebGLUniformLocation} location
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getUniform = function(program, location) {};

/**
 * @param {WebGLProgram} program
 * @param {string} name
 * @return {WebGLUniformLocation}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getUniformLocation = function(program, name) {};

/**
 * @param {number} index
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getVertexAttrib = function(index, pname) {};

/**
 * @param {number} index
 * @param {number} pname
 * @return {number}
 * @nosideeffects
 */
BaseWebGLContext.prototype.getVertexAttribOffset = function(
    index, pname) {};

/**
 * @param {number} target
 * @param {number} mode
 * @return {undefined}
 */
BaseWebGLContext.prototype.hint = function(target, mode) {};

/**
 * @param {WebGLObject} buffer
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isBuffer = function(buffer) {};

/**
 * @param {number} cap
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isEnabled = function(cap) {};

/**
 * @param {WebGLObject} framebuffer
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isFramebuffer = function(framebuffer) {};

/**
 * @param {WebGLObject} program
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isProgram = function(program) {};

/**
 * @param {WebGLObject} renderbuffer
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isRenderbuffer = function(renderbuffer) {};

/**
 * @param {WebGLObject} shader
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isShader = function(shader) {};

/**
 * @param {WebGLObject} texture
 * @return {boolean}
 * @nosideeffects
 */
BaseWebGLContext.prototype.isTexture = function(texture) {};

/**
 * @param {number} width
 * @return {undefined}
 */
BaseWebGLContext.prototype.lineWidth = function(width) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLContext.prototype.linkProgram = function(program) {};

/**
 * @param {number} pname
 * @param {number|boolean} param
 * @return {undefined}
 */
BaseWebGLContext.prototype.pixelStorei = function(pname, param) {};

/**
 * @param {number} factor
 * @param {number} units
 * @return {undefined}
 */
BaseWebGLContext.prototype.polygonOffset = function(factor, units) {};

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
BaseWebGLContext.prototype.readPixels = function(
    x, y, width, height, format, type, pixels) {};

/**
 * @param {number} target
 * @param {number} internalformat
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLContext.prototype.renderbufferStorage = function(
    target, internalformat, width, height) {};

/**
 * @param {number} coverage
 * @param {boolean} invert
 * @return {undefined}
 */
BaseWebGLContext.prototype.sampleCoverage = function(coverage, invert) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLContext.prototype.scissor = function(x, y, width, height) {};

/**
 * @param {WebGLShader} shader
 * @param {string} source
 * @return {undefined}
 */
BaseWebGLContext.prototype.shaderSource = function(shader, source) {};

/**
 * @param {number} func
 * @param {number} ref
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLContext.prototype.stencilFunc = function(func, ref, mask) {};

/**
 * @param {number} face
 * @param {number} func
 * @param {number} ref
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLContext.prototype.stencilFuncSeparate = function(
    face, func, ref, mask) {};

/**
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLContext.prototype.stencilMask = function(mask) {};

/**
 * @param {number} face
 * @param {number} mask
 * @return {undefined}
 */
BaseWebGLContext.prototype.stencilMaskSeparate = function(face, mask) {};

/**
 * @param {number} fail
 * @param {number} zfail
 * @param {number} zpass
 * @return {undefined}
 */
BaseWebGLContext.prototype.stencilOp = function(fail, zfail, zpass) {};

/**
 * @param {number} face
 * @param {number} fail
 * @param {number} zfail
 * @param {number} zpass
 * @return {undefined}
 */
BaseWebGLContext.prototype.stencilOpSeparate = function(
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
BaseWebGLContext.prototype.texImage2D = function(
    target, level, internalformat, format, type, img, opt_format, opt_type,
    opt_pixels) {};

/**
 * @param {number} target
 * @param {number} pname
 * @param {number} param
 * @return {undefined}
 */
BaseWebGLContext.prototype.texParameterf = function(
    target, pname, param) {};

/**
 * @param {number} target
 * @param {number} pname
 * @param {number} param
 * @return {undefined}
 */
BaseWebGLContext.prototype.texParameteri = function(
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
BaseWebGLContext.prototype.texSubImage2D = function(
    target, level, xoffset, yoffset, format, type, data, opt_type,
    opt_pixels) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform1f = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform1fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform1i = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform1iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform2f = function(
    location, value1, value2) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform2fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value1
 * @param {number|boolean} value2
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform2i = function(
    location, value1, value2) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform2iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform3f = function(
    location, value1, value2, value3) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform3fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value1
 * @param {number|boolean} value2
 * @param {number|boolean} value3
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform3i = function(
    location, value1, value2, value3) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform3iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @param {number} value4
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform4f = function(
    location, value1, value2, value3, value4) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array<number>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform4fv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {number|boolean} value1
 * @param {number|boolean} value2
 * @param {number|boolean} value3
 * @param {number|boolean} value4
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform4i = function(
    location, value1, value2, value3, value4) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array<number>|Array<boolean>} value
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniform4iv = function(location, value) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array<number>} data
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniformMatrix2fv = function(
    location, transpose, data) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array<number>} data
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniformMatrix3fv = function(
    location, transpose, data) {};

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array<number>} data
 * @return {undefined}
 */
BaseWebGLContext.prototype.uniformMatrix4fv = function(
    location, transpose, data) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLContext.prototype.useProgram = function(program) {};

/**
 * @param {WebGLProgram} program
 * @return {undefined}
 */
BaseWebGLContext.prototype.validateProgram = function(program) {};

/**
 * @param {number} indx
 * @param {number} x
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib1f = function(indx, x) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>} values
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib1fv = function(indx, values) {};

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib2f = function(
    indx, x, y) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>} values
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib2fv = function(
    indx, values) {};

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib3f = function(
    indx, x, y, z) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>} values
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib3fv = function(indx, values) {};

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib4f = function(
    indx, x, y, z, w) {};

/**
 * @param {number} indx
 * @param {Float32Array|Array<number>} values
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttrib4fv = function(indx, values) {};

/**
 * @param {number} indx
 * @param {number} size
 * @param {number} type
 * @param {boolean} normalized
 * @param {number} stride
 * @param {number} offset
 * @return {undefined}
 */
BaseWebGLContext.prototype.vertexAttribPointer = function(
    indx, size, type, normalized, stride, offset) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
BaseWebGLContext.prototype.viewport = function(x, y, width, height) {};


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
 * @param {Array<number>} buffers Draw buffers.
 * @return {undefined}
 */
WEBGL_draw_buffers.prototype.drawBuffersWEBGL = function(buffers) {};


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