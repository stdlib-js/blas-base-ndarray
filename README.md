<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray BLAS functions.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { caxpy, ccopy, cswap, dasum, daxpy, dcopy, ddot, dswap, gasum, gaxpy, gcopy, gdot, gswap, sasum, saxpy, scopy, sdot, sswap, zaxpy, zcopy, zswap } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray@deno/mod.js';
```

#### ns

Namespace containing base ndarray BLAS functions.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following APIs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`caxpy( arrays )`][@stdlib/blas/base/ndarray/caxpy]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional single-precision complex floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional single-precision complex floating-point ndarray `y`.</span>
-   <span class="signature">[`ccopy( arrays )`][@stdlib/blas/base/ndarray/ccopy]</span><span class="delimiter">: </span><span class="description">copy values from a one-dimensional single-precision complex floating-point ndarray `x` into a one-dimensional single-precision complex floating-point ndarray `y`.</span>
-   <span class="signature">[`dasum( arrays )`][@stdlib/blas/base/ndarray/dasum]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values for all elements in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`daxpy( arrays )`][@stdlib/blas/base/ndarray/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional double-precision floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional double-precision floating-point ndarray `y`.</span>
-   <span class="signature">[`dcopy( arrays )`][@stdlib/blas/base/ndarray/dcopy]</span><span class="delimiter">: </span><span class="description">copy values from a one-dimensional double-precision floating-point ndarray `x` into a one-dimensional double-precision floating-point ndarray `y`.</span>
-   <span class="signature">[`ddot( arrays )`][@stdlib/blas/base/ndarray/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two one-dimensional double-precision floating-point ndarrays.</span>
-   <span class="signature">[`dswap( arrays )`][@stdlib/blas/base/ndarray/dswap]</span><span class="delimiter">: </span><span class="description">interchange two one-dimensional double-precision floating-point ndarrays.</span>
-   <span class="signature">[`gasum( arrays )`][@stdlib/blas/base/ndarray/gasum]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values for all elements in a one-dimensional ndarray.</span>
-   <span class="signature">[`gaxpy( arrays )`][@stdlib/blas/base/ndarray/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional ndarray `x` by a constant `alpha` and add the result to a one-dimensional ndarray `y`.</span>
-   <span class="signature">[`gcopy( arrays )`][@stdlib/blas/base/ndarray/gcopy]</span><span class="delimiter">: </span><span class="description">copy values from a one-dimensional ndarray `x` into a one-dimensional ndarray `y`.</span>
-   <span class="signature">[`gdot( arrays )`][@stdlib/blas/base/ndarray/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two one-dimensional ndarrays.</span>
-   <span class="signature">[`gswap( arrays )`][@stdlib/blas/base/ndarray/gswap]</span><span class="delimiter">: </span><span class="description">interchange two one-dimensional ndarrays.</span>
-   <span class="signature">[`sasum( arrays )`][@stdlib/blas/base/ndarray/sasum]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values for all elements in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`saxpy( arrays )`][@stdlib/blas/base/ndarray/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional single-precision floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional single-precision floating-point ndarray `y`.</span>
-   <span class="signature">[`scopy( arrays )`][@stdlib/blas/base/ndarray/scopy]</span><span class="delimiter">: </span><span class="description">copy values from a one-dimensional single-precision floating-point ndarray `x` into a one-dimensional single-precision floating-point ndarray `y`.</span>
-   <span class="signature">[`sdot( arrays )`][@stdlib/blas/base/ndarray/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two one-dimensional single-precision floating-point ndarrays.</span>
-   <span class="signature">[`sswap( arrays )`][@stdlib/blas/base/ndarray/sswap]</span><span class="delimiter">: </span><span class="description">interchange two one-dimensional single-precision floating-point ndarrays.</span>
-   <span class="signature">[`zaxpy( arrays )`][@stdlib/blas/base/ndarray/zaxpy]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional double-precision complex floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional double-precision complex floating-point ndarray `y`.</span>
-   <span class="signature">[`zcopy( arrays )`][@stdlib/blas/base/ndarray/zcopy]</span><span class="delimiter">: </span><span class="description">copy values from a one-dimensional double-precision complex floating-point ndarray `x` into a one-dimensional double-precision complex floating-point ndarray `y`.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ndarray@deno/mod.js';

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-ndarray.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-ndarray

[test-image]: https://github.com/stdlib-js/blas-base-ndarray/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-ndarray/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-ndarray/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-ndarray?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-ndarray.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-ndarray/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-ndarray/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-ndarray/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-ndarray/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-ndarray/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-ndarray/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-ndarray/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-ndarray/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-ndarray/main/LICENSE

<!-- <toc-links> -->

[@stdlib/blas/base/ndarray/caxpy]: https://github.com/stdlib-js/blas-base-ndarray-caxpy/tree/deno

[@stdlib/blas/base/ndarray/ccopy]: https://github.com/stdlib-js/blas-base-ndarray-ccopy/tree/deno

[@stdlib/blas/base/ndarray/dasum]: https://github.com/stdlib-js/blas-base-ndarray-dasum/tree/deno

[@stdlib/blas/base/ndarray/daxpy]: https://github.com/stdlib-js/blas-base-ndarray-daxpy/tree/deno

[@stdlib/blas/base/ndarray/dcopy]: https://github.com/stdlib-js/blas-base-ndarray-dcopy/tree/deno

[@stdlib/blas/base/ndarray/ddot]: https://github.com/stdlib-js/blas-base-ndarray-ddot/tree/deno

[@stdlib/blas/base/ndarray/dswap]: https://github.com/stdlib-js/blas-base-ndarray-dswap/tree/deno

[@stdlib/blas/base/ndarray/gasum]: https://github.com/stdlib-js/blas-base-ndarray-gasum/tree/deno

[@stdlib/blas/base/ndarray/gaxpy]: https://github.com/stdlib-js/blas-base-ndarray-gaxpy/tree/deno

[@stdlib/blas/base/ndarray/gcopy]: https://github.com/stdlib-js/blas-base-ndarray-gcopy/tree/deno

[@stdlib/blas/base/ndarray/gdot]: https://github.com/stdlib-js/blas-base-ndarray-gdot/tree/deno

[@stdlib/blas/base/ndarray/gswap]: https://github.com/stdlib-js/blas-base-ndarray-gswap/tree/deno

[@stdlib/blas/base/ndarray/sasum]: https://github.com/stdlib-js/blas-base-ndarray-sasum/tree/deno

[@stdlib/blas/base/ndarray/saxpy]: https://github.com/stdlib-js/blas-base-ndarray-saxpy/tree/deno

[@stdlib/blas/base/ndarray/scopy]: https://github.com/stdlib-js/blas-base-ndarray-scopy/tree/deno

[@stdlib/blas/base/ndarray/sdot]: https://github.com/stdlib-js/blas-base-ndarray-sdot/tree/deno

[@stdlib/blas/base/ndarray/sswap]: https://github.com/stdlib-js/blas-base-ndarray-sswap/tree/deno

[@stdlib/blas/base/ndarray/zaxpy]: https://github.com/stdlib-js/blas-base-ndarray-zaxpy/tree/deno

[@stdlib/blas/base/ndarray/zcopy]: https://github.com/stdlib-js/blas-base-ndarray-zcopy/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
