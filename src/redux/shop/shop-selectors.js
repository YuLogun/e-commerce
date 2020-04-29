import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

const COLLECTION_ID_MAP = {
  hoodies: 1,
  socks: 2,
  womens: 3,
  mens: 4,
  scarves: 5
}

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectShopCollections], (shopCollections) =>
    shopCollections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParams]
    )
  )
