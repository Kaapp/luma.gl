/* global document */
import {WebGLRenderingContext} from '../../src/webgl/webgl-types';

console.log(WebGLRenderingContext)

import {createGLContext, hasWebGL, hasExtension}
  from '../../src/webgl';
import test from 'tape-catch';

test('WebGL#headless', t => {
  const gl = createGLContext(null, {});
  t.ok(gl instanceof WebGLRenderingContext, 'Context creation ok');
  t.ok(hasWebGL(), 'hasWebGL() is true');
  t.notOk(hasExtension(gl, 'noextension'),
  	'hasExtension(noextension) is false');
  t.end();
});
