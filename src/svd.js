/** SVD procedure as explained in "Singular Value Decomposition and Least Squares Solutions. By G.H. Golub et al."
 *
 * This procedure computes the singular values and complete orthogonal decomposition of a real rectangular matrix A:
 *    A = U * diag(q) * V(t), U(t) * U = V(t) * V = I
 * where the arrays a, u, v, q represent A, U, V, q respectively. The actual parameters corresponding to a, u, v may
 * all be identical unless withu = withv = {true}. In this case, the actual parameters corresponding to u and v must
 * differ. m >= n is assumed (with m = a.length and n = a[0].length)
 *
 *  @param withu {bool} {true} if U is desired {false} otherwise
 *  @param withv {bool} {true} if U is desired {false} otherwise
 *  @param eps {Number} A constant used in the test for convergence; should not be smaller than the machine precision
 *  @param tol {Number} A machine dependent constant which should be set equal to B/eps0 where B is the smallest
 *    positive number representable in the computer
 *  @param a {Array} Represents the matrix A to be decomposed
 *
 *  @returns {Object} An object containing:
 *    q: A vector holding the singular values of A; they are non-negative but not necessarily ordered in
 *      decreasing sequence
 *    u: Represents the matrix U with orthonormalized columns (if withu is {true} otherwise u is used as
 *      a working storage)
 *    v: Represents the orthogonal matrix V (if withv is {true}, otherwise v is not used)
 *
 */
const SVD = (withu, withv, eps, tol, a) => {
  // Householder's reduction to bidiagonal form

  let n = a[0].length
  let m = a.length

  let i, j, k, l, l1, c, f, g, h, s, x, y, z

  g = 0
  x = 0
  let e = []

  let u = []
  let v = []
  let q = []

  // Copy array a in u
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      u[i][j] = a[i][j]
    }
  }

  for (i = 0; i < n; i++) {
    e[i] = g
    s = 0
    l = i + 1
    for (j = i; j < m; j++) {
      s += Math.pow(u[j][i], 2)
    }
    if (s < tol) {
      g = 0
    } else {
      f = u[i][i]
      g = f < 0 ? Math.sqrt(s) : -Math.sqrt(s)
      h = f * g - s
      u[i][i] = f - g
      for (j = l; j < n; j++) {
        s = 0
        for (k = i; k < m; k++) {
          s += u[k][i] * u[k][j]
        }
        f = s / h
        for (k = i; k < m; k++) {
          u[k][j] = u[k][j] + f * u[k][i]
        }
      }
    }
    q[i] = g
    s = 0
    for (j = l; j < n; j++) {
      s += Math.pow(u[i][j], 2)
    }
    if (s < tol) {
      g = 0
    } else {
      f = u[i][i + 1]
      g = f < 0 ? Math.sqrt(s) : -Math.sqrt(s)
      h = f * g - s
      u[i][i + 1] = f - g
      for (j = l; j < n; j++) {
        e[j] = u[i][j] / h
      }
      for (j = l; j < m; j++) {
        s = 0
        for (k = l; k < n; k++) {
          s += u[j][k] * u[i][k]
        }
        for (k = l; k < n; k++) {
          u[j][k] = u[j][k] + s * e[k]
        }
      }
    }
    y = Math.abs(q[i]) + Math.abs(e[i])
    if (y > x) {
      x = y
    }
  }

  // Accumulation of right-hand transformation

  throw new Error('Not implemented yet')
}

export default SVD
