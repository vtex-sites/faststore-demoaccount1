import storeConfig from 'faststore.config'

type RoomIdeaResponse = {
    id: string
    ID: string
    image: string
    alt: string
    name: string
    order: string
    url: string
}

export const GetRoomIdeas = async (_: any) => {

    const { storeId, environment } = storeConfig.api
    const baseUrl = `https://${storeId}.${environment}.com.br/api/io`

    try {
    const response = await fetch(
        `${baseUrl}/_v/room-ideas-manager/getRoomIdeas`
    )

    if (!response.ok) {
        throw new Error(
            `Error in the VTEX API response: ${response}. Retrying request...`
        )
    }

    const roomIdeasResponse = await response.json()

    const roomIdeasInfo = roomIdeasResponse.map((roomIdea: RoomIdeaResponse) => ({
        name: roomIdea.name,
        image: roomIdea.image,
        alt: roomIdea.alt,
        url: roomIdea.url
    }))

    return {
        roomIdeasInfo
    }

    } catch (error) {
        return {
            roomIdeas: [{
                image: '',
                alt: '',
                name: '',
                url: ''
            }]
        }
    }
}

