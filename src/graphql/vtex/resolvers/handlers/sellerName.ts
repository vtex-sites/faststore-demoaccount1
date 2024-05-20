import type { StoreProductRoot } from '@faststore/core/api'

const sellerName = async (root: StoreProductRoot) => {
  return root.sellers.find((seller) => seller.sellerDefault)?.sellerName || ''
}

export default sellerName
