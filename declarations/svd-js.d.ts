/// <reference types="node" />

/** SVD procedure as explained in "Singular Value Decomposition and Least Squares Solutions. By G.H. Golub et al."
 *
 * This procedure computes the singular values and complete orthogonal decomposition of a real rectangular matrix A:
 *    A = U * diag(q) * V(t), U(t) * U = V(t) * V = I
 * where the arrays a, u, v, q represent A, U, V, q respectively. The actual parameters corresponding to a, u, v may
 * all be identical unless withu = withv = {true}. In this case, the actual parameters corresponding to u and v must
 * differ. m >= n is assumed (with m = a.length and n = a[0].length)
 *
 *  @param a {Array} Represents the matrix A to be decomposed
 *  @param [withu] {bool} {true} if U is desired {false} otherwise
 *  @param [withv] {bool} {true} if U is desired {false} otherwise
 *  @param [eps] {Number} A constant used in the test for convergence; should not be smaller than the machine precision
 *  @param [tol] {Number} A machine dependent constant which should be set equal to B/eps0 where B is the smallest
 *    positive number representable in the computer
 *
 *  @returns {Object} An object containing:
 *    q: A vector holding the singular values of A; they are non-negative but not necessarily ordered in
 *      decreasing sequence
 *    u: Represents the matrix U with orthonormalized columns (if withu is {true} otherwise u is used as
 *      a working storage)
 *    v: Represents the orthogonal matrix V (if withv is {true}, otherwise v is not used)
 *
 */
/*
  Extension of withu='f' by kchinzei 2020/06/19
 */
declare module 'svd-js' {
  export function SVD(a: number[][], withu?: boolean|'f', withv?: boolean, eps?: number, tol?: number): {q: number[]; u: number[][]; v: number[][]};
}
