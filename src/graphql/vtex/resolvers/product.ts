import {
  sellerName,
  relatedSkus,
} from './handlers'

const productResolver = {
  StoreProduct: {
    /**
     * @param ProductStoreRoot
     * @returns
     */
    sellerName,
    relatedSkus,
  },
}

export default productResolver
