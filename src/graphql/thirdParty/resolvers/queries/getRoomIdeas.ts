const baseUrl = `http://demoaccount1.myvtex.com/_v/cms/api/faststore/roomIdea?filters[status]=published`

export const GetRoomIdeas = async (_: any, { id }: any) => {

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

    const auxData = responseData.data.map((item: any) => ({
        name: item.name,
        slug: item.settings.seo.slug,
        isNavigation: item.settings.roomConfig.isNavigation
    }))

    return auxData

    } catch (error) {
        console.log(`Error fetching data from VTEX API: ${error}`)
        return [{ 
            name: '',
            slug: '',
            isNavigation: false
        }]
    }
}

