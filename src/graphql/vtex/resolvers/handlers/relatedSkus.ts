import type { StoreProductRoot } from '@faststore/core/api'

const baseUrl = `https://demoaccount4.myvtex.com/_v/related-parts/1979`

const relatedSkus = async (root: StoreProductRoot) => {
    console.log('---------------root', root)
    try {
        const response = await fetch(
        `${baseUrl}`
        )

        if (!response.ok) {
            throw new Error(
                `Error in the VTEX API response: ${response}. Retrying request...`
            )
        }

        const responseData = await response.json()
        console.log('------responseData', JSON.stringify(responseData))
        return JSON.stringify(responseData)
    } catch (error) {
        return `Error fetching data from VTEX API: ${error}`
    }
}

export default relatedSkus