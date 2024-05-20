import React from 'react'
import { ShippingSimulation, ShippingSimulationProps } from '@faststore/ui'
import RelatedSkus from './RelatedSkus/RelatedSkus'

const ShippingSimulationWrapper = (props: ShippingSimulationProps) => {

    return (
        <>
            <ShippingSimulation {...props} /> 
            <RelatedSkus />
        </>
    )
}

export default ShippingSimulationWrapper