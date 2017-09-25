import { createSelector } from 'reselect'

export const getOrderAmount = createSelector(
  (products, id) => {
    return id.map(id => products[id])
  }
)
