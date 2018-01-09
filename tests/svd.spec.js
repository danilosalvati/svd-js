/* global describe it */
import {assert} from 'chai'

import {SVD} from '../src/index'

describe('SVD tests', () => {
  it('Should return error when called without parameters', (done) => {
    assert.throws(() => SVD(), TypeError, 'Matrix a is not defined')
    done()
  })

  it('Sample Test', (done) => {
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

    assert.throws(() => SVD(a), Error, 'Not implemented yet')
    done()
  })
})
