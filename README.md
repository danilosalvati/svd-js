# SVD-JS

[![Build Status](https://api.travis-ci.com/danilosalvati/svd-js.svg?branch=master)](https://travis-ci.org/danilosalvati/svd-js)
[![Coverage Status](https://coveralls.io/repos/github/danilosalvati/svd-js/badge.svg?branch=master)](https://coveralls.io/github/danilosalvati/svd-js?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/svd-js)](https://www.npmjs.com/package/svd-js)

A simple library to compute [*Singular Value Decomposition*](https://en.wikipedia.org/wiki/Singular_value_decomposition)
as explained in ["Singular Value Decomposition and Least Squares Solutions. By G.H. Golub et al."](https://dl.acm.org/citation.cfm?id=2718152)

## Usage

`SVD(a, withu, withv, eps, tol) => { u, v, q }`

computes the singular values and complete orthogonal decomposition of a real rectangular matrix

```
A: A = U * diag(q) * V(t), U(t) * U = V(t) * V = I
```
The actual parameters corresponding to **A**, **U**, **V** may all be identical unless
`withu = withv = {true}`. In this case, the actual parameters corresponding to **U** and **V** must
differ. `m >= n` is assumed (with `m = a.length` and `n = a[0].length`).
The following is the description of all parameters:
 *   `a` {Array}: Represents the matrix **A** to be decomposed
 *   `withu` (*Optional default is true*) {bool | 'f'}: `true` if **U** is desired `false` otherwise. It can also be 'f' (see below)
 *   `withv` (*Optional default is true*) {bool}: `true` if **V** is desired `false` otherwise
 *   `eps` (*Optional*) {Number}: A constant used in the test for convergence; should not be smaller
  than the machine precision
 *   `tol` (*Optional*) {Number}: A machine dependent constant which should be set equal
    to `B/eps` where **B** is the smallest positive number representable in the computer

The function returns an object with the following values:
 * `q`: A vector holding the singular values of **A**; they are non-negative but not necessarily
    ordered in decreasing sequence
 * `u`: Represents the matrix **U** with orthonormalized columns (if `withu` is `true`
    otherwise `u` is used as a working storage)
 * `v`: Represents the orthogonal matrix **V** (if `withv` is `true`, otherwise `v` is not used)

If 'f' is given to `withu`, it computes 'full' **U** with `m*m` dimension.
It is an extension in (i) of '5. Organization and Notation Details' in [Golub et al."](https://dl.acm.org/citation.cfm?id=2718152)
The extension part of **U** (`u[n]` to `u[m-1]`) are orthonormal bases of **A** that correspond to null singular values, or the nullspace of **A**^T.

###### npm package
Golub and Reinsch first example
```javascript
import { SVD } from 'svd-js'
const a = [
      [22, 10, 2, 3, 7],
      [14, 7, 10, 0, 8],
      [-1, 13, -1, -11, 3],
      [-3, -2, 13, -2, 4],
      [9, 8, 1, -2, 4],
      [9, 1, -7, 5, -1],
      [2, -6, 6, 5, 1],
      [4, 5, 0, -2, 2]
    ]

const { u, v, q } = SVD(a)
console.log(u)
console.log(v)
console.log(q)
```

###### umd package
Golub and Reinsch first example

```html
<html>
 <script src="https://unpkg.com/svd-js" type="application/javascript"></script>
 <script>
   const a = [
     [22, 10, 2, 3, 7],
     [14, 7, 10, 0, 8],
     [-1, 13, -1, -11, 3],
     [-3, -2, 13, -2, 4],
     [9, 8, 1, -2, 4],
     [9, 1, -7, 5, -1],
     [2, -6, 6, 5, 1],
     [4, 5, 0, -2, 2]
   ]

   const { u, v, q } = SVDJS.SVD(a)
   console.log(u)
   console.log(v)
   console.log(q)
 </script>
</html>
```
