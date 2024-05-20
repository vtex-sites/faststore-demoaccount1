import { SectionOverride } from '@faststore/core/src/typings/overrides'
import ShippingSimulationWrapper from './ShippingSimulationWrapper/ShippingSimulationWrapper'

const SECTION = 'ProductDetails' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    ShippingSimulation: { Component: ShippingSimulationWrapper }
  }
}

export { override }