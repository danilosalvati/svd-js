/* global describe it */
import {assert} from 'chai'
import math from 'mathjs'

import {SVD} from '../src/index'

describe('SVD tests', () => {
  it('Should return error when called without parameters', (done) => {
    assert.throws(() => SVD(), TypeError, 'Matrix a is not defined')
    done()
  })

  it('Should work with Golub and Reinsch first example', (done) => {
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

    let {u, v, q} = SVD(a)
    assert.approximately(q[0], Math.sqrt(1248), 1e-4)
    assert.approximately(q[1], 0, 1e-4)
    assert.approximately(q[2], 20, 1e-4)
    assert.approximately(q[3], Math.sqrt(384), 1e-4)
    assert.approximately(q[4], 0, 1e-4)

    let U = math.matrix(u)
    let V = math.matrix(v)

    let Ut = math.transpose(u)
    let Vt = math.transpose(V)

    let UtU = math.multiply(Ut, U)

    assert.deepEqual(UtU.size(), [5, 5])

    // Check if it is an identity matrix
    for (let i = 0; i < UtU.size()[0]; i++) {
      for (let j = 0; j < UtU.size()[1]; j++) {
        assert.approximately(UtU.get([i, j]), (i === j) ? 1 : 0, 1e-4)
      }
    }

    let VtV = math.multiply(Vt, V)

    assert.deepEqual(VtV.size(), [5, 5])

    // Check if it is an identity matrix
    for (let i = 0; i < VtV.size()[0]; i++) {
      for (let j = 0; j < VtV.size()[1]; j++) {
        assert.approximately(VtV.get([i, j]), (i === j) ? 1 : 0, 1e-4)
      }
    }

    done()
  })
})
