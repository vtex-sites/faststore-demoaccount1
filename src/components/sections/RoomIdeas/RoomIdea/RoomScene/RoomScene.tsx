import React, { useEffect, useMemo, useState } from 'react'
import fsconfig from 'faststore.config'
import { useQuery } from 'src/sdk/graphql/useQuery'
import { ClientManyProductsQueryDocument } from '@generated/graphql'
import ProductCard from './ProductCard/ProductCard'
import formatProducts from '../../../../../utils/formatProducts copy'
import styles from './RoomIdea.module.scss'

export interface RoomSceneProps {
  image: string
  alt: string
  collectionId: string
}

function RoomScene({
  collectionId,
  alt,
  image
}: RoomSceneProps) {

  const selectedFacets = [
    {key: 'productClusterIds', value: collectionId}
  ]

  const queryVariables = {
    first: 10,
    after: '0',
    term: '',
    sort: 'score_desc',
    selectedFacets: selectedFacets
      ? [
          ...selectedFacets,
          {
            key: 'channel',
            value: fsconfig.session.channel,
          },
        ]
      : [],
  }

  const pds: any = useQuery(ClientManyProductsQueryDocument, queryVariables)

  const productEdges = useMemo(() => {
    return (
      pds?.data?.search?.products?.edges?.map(
        (product: any) => product?.node
      ) || []
    )
  }, [pds])

  const products: any =
    productEdges.length > 0 ? formatProducts(productEdges) : []

  return (
    <div className={styles.RoomIdea}>
      <div data-fs-room-idea-image>
        <img src={image} alt={alt} />
      </div>
      <div data-fs-room-idea-products>
        {products.length > 0 ? (
          <div data-fs-room-idea-products-container>
            {products.map((product: any, i: number) => (
              <ProductCard
                key={`p${i}`}
                product={product}
                showdiscountbadge={"false"}
                testId="product-card"
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default RoomScene