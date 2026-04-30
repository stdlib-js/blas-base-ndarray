/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name caxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/caxpy}
*/
setReadOnly( ns, 'caxpy', require( '@stdlib/blas-base-ndarray-caxpy/dist' ) );

/**
* @name ccopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/ccopy}
*/
setReadOnly( ns, 'ccopy', require( '@stdlib/blas-base-ndarray-ccopy/dist' ) );

/**
* @name dasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dasum}
*/
setReadOnly( ns, 'dasum', require( '@stdlib/blas-base-ndarray-dasum/dist' ) );

/**
* @name daxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/daxpy}
*/
setReadOnly( ns, 'daxpy', require( '@stdlib/blas-base-ndarray-daxpy/dist' ) );

/**
* @name dcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dcopy}
*/
setReadOnly( ns, 'dcopy', require( '@stdlib/blas-base-ndarray-dcopy/dist' ) );

/**
* @name ddot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/ddot}
*/
setReadOnly( ns, 'ddot', require( '@stdlib/blas-base-ndarray-ddot/dist' ) );

/**
* @name dswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dswap}
*/
setReadOnly( ns, 'dswap', require( '@stdlib/blas-base-ndarray-dswap/dist' ) );

/**
* @name gasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gasum}
*/
setReadOnly( ns, 'gasum', require( '@stdlib/blas-base-ndarray-gasum/dist' ) );

/**
* @name gaxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gaxpy}
*/
setReadOnly( ns, 'gaxpy', require( '@stdlib/blas-base-ndarray-gaxpy/dist' ) );

/**
* @name gcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gcopy}
*/
setReadOnly( ns, 'gcopy', require( '@stdlib/blas-base-ndarray-gcopy/dist' ) );

/**
* @name gdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gdot}
*/
setReadOnly( ns, 'gdot', require( '@stdlib/blas-base-ndarray-gdot/dist' ) );

/**
* @name sasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sasum}
*/
setReadOnly( ns, 'sasum', require( '@stdlib/blas-base-ndarray-sasum/dist' ) );

/**
* @name saxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/saxpy}
*/
setReadOnly( ns, 'saxpy', require( '@stdlib/blas-base-ndarray-saxpy/dist' ) );

/**
* @name scopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/scopy}
*/
setReadOnly( ns, 'scopy', require( '@stdlib/blas-base-ndarray-scopy/dist' ) );

/**
* @name sdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sdot}
*/
setReadOnly( ns, 'sdot', require( '@stdlib/blas-base-ndarray-sdot/dist' ) );

/**
* @name sswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sswap}
*/
setReadOnly( ns, 'sswap', require( '@stdlib/blas-base-ndarray-sswap/dist' ) );

/**
* @name zaxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zaxpy}
*/
setReadOnly( ns, 'zaxpy', require( '@stdlib/blas-base-ndarray-zaxpy/dist' ) );

/**
* @name zcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zcopy}
*/
setReadOnly( ns, 'zcopy', require( '@stdlib/blas-base-ndarray-zcopy/dist' ) );


// EXPORTS //

module.exports = ns;
