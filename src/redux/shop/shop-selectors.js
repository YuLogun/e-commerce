import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollection = (collectionUrlParams) =>
  createSelector(
    [selectShopCollections],
    (shopCollections) => shopCollections[collectionUrlParams]
  )

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (shopCollections) =>
    Object.keys(shopCollections).map(
      (collectionName) => shopCollections[collectionName]
    )
)
