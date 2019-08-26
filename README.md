# SVD-JS

[![Build Status](https://travis-ci.org/danilosalvati/svd-js.svg?branch=master)](https://travis-ci.org/danilosalvati/svd-js)
[![Coverage Status](https://coveralls.io/repos/github/danilosalvati/svd-js/badge.svg?branch=master)](https://coveralls.io/github/danilosalvati/svd-js?branch=master)

A simple library to compute [*Singular Value Decomposition*](https://en.wikipedia.org/wiki/Singular_value_decomposition)
as explained in ["Singular Value Decomposition and Least Squares Solutions. By G.H. Golub et al."](https://dl.acm.org/citation.cfm?id=2718152)

## Usage

`SVD(a, withu, withv, eps, tol)`

computes the singular values and complete orthogonal decomposition of a real rectangular matrix 

```
A: A = U * diag(q) * V(t), U(t) * U = V(t) * V = I
```
The actual parameters corresponding to **A**, **U**, **V** may all be identical unless 
`withu = withv = {true}`. In this case, the actual parameters corresponding to **U** and **V** must
differ. `m >= n` is assumed (with `m = a.length` and `n = a[0].length`). 
The following is the description of all parameters:
 *   `a` {Array}: Represents the matrix **A** to be decomposed
 *   `withu` (*Optional default is true*) {bool}: `true` if **U** is desired `false` otherwise
 *   `withv` (*Optional default is true*) {bool}: `true` if **U** is desired `false` otherwise
 *   `eps` (*Optional*) {Number}: A constant used in the test for convergence; should not be smaller
  than the machine precision
 *   `tol` (*Optional*) {Number}: A machine dependent constant which should be set equal 
    to `B/eps` where **B** is the smallest positive number representable in the computer

###### npm package
Golub and Reinsch first example
```javascript
import { SVD } from 'svd-js'
let a = [
      [22, 10, 2, 3, 7],
      [14, 7, 10, 0, 8],
      [-1, 13, -1, -11, 3],
      [-3, -2, 13, -2, 4],
      [9, 8, 1, -2, 4],
      [9, 1, -7, 5, -1],
      [2, -6, 6, 5, 1],
      [4, 5, 0, -2, 2]
    ]

let { u, v, q } = SVD(a)
console.log(u)
console.log(v)
console.log(q)
```

Golub and Reinsch first example without returning **U** and **V**
```javascript
import { SVD } from 'svd-js'
let a = [
      [22, 10, 2, 3, 7],
      [14, 7, 10, 0, 8],
      [-1, 13, -1, -11, 3],
      [-3, -2, 13, -2, 4],
      [9, 8, 1, -2, 4],
      [9, 1, -7, 5, -1],
      [2, -6, 6, 5, 1],
      [4, 5, 0, -2, 2]
    ]

let { u, v, q } = SVD(a, false, false)
console.log(u)
console.log(v)
console.log(q)
```
