import type { StoreProductRoot } from '@faststore/core/api'

type Item = {
    relationship_type: string
    relatedSkus: RelatedSku[]
}

type RelatedSku = {
    relatedSkuRefId: string
    relatedSkuId: string
    quantity: number
    position: number
    imageUrl: string
    name: string
}

const baseUrl = `https://demoaccount4.myvtex.com/_v/related-parts`

const relatedSkus = async (root: StoreProductRoot) => {
    // TO DO: update baseUrl with skuid from catalog. Currently no skuiID is return a valid response
    // We are leaving the 1979 skuId hardcoded to mock data for now
    // const skuId = root.id

    const skuId = 1979

    try {
        const response = await fetch(
            `${baseUrl}/${skuId}`
        )

        if (!response.ok) {
            throw new Error(
                `Error in the VTEX API response: ${response}. Retrying request...`
            )
        }

        const responseData = await response.json()

        const auxResponse = {
            ...responseData,
            items: responseData.items.map((item: Item) => {
                const { relationship_type, ...response } = item
                return {
                    ...response,
                    relationshipType: relationship_type
                }
            })
        }

        return auxResponse
    } catch (error) {
        console.log(`Error fetching data from VTEX API: ${error}`)
        return {
            id: '',
            skuRefId: '',
            skuId: '',
            items: [
                {
                    relationshipType: '',
                    relatedSkus: [
                        {
                            relatedSkuRefId: '',
                            relatedSkuId: '',
                            quantity: 0,
                            position: 0,
                            imageUrl: '',
                            name: ''
                        }
                    ]
                }
            ]
        }
    }
}

export default relatedSkus