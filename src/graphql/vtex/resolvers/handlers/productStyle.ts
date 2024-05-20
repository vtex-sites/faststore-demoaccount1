import type { StoreProductRoot } from '@faststore/core/api'
import { extractSkuVariation } from '../../../../utils/extractSkuVariation'

const productStyle = async (root: StoreProductRoot) => {
  return root.isVariantOf.link ? extractSkuVariation(root.isVariantOf.link) : ''
}

export default productStyle
