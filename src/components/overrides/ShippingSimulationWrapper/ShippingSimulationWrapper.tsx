import React from 'react'
import { ShippingSimulation } from '@faststore/ui'
import { ShippingSimulationProps } from '@faststore/ui'
import RelatedSkus from './RelatedSkus/RelatedSkus'

const ShippingSimulationWrapper = (props: any) => {

    return (
        <>
            <ShippingSimulation props={props} />
            <RelatedSkus />
        </>
    )
}

export default ShippingSimulationWrapper