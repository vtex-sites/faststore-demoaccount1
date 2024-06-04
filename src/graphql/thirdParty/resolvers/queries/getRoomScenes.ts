import storeConfig from 'faststore.config'

type RoomSceneResponse = {
    id: string
    ID: string
    image: string
    alt: string
    collectionId: string
    roomId: string
    order: string
    url: string
}

type args = {
    roomId: string
}

export const GetRoomScenes = async (_: any, { roomId }: args) => {

    const { storeId, environment } = storeConfig.api
    const baseUrl = `https://${storeId}.${environment}.com.br/api/io`

    try {
    const response = await fetch(
        `${baseUrl}/_v/room-ideas-manager/getRoomScenes/${roomId}`
    )

    if (!response.ok) {
        throw new Error(
            `Error in the VTEX API response: ${response}. Retrying request...`
        )
    }

    const roomScenesResponse = await response.json()

    const roomScenesInfo = roomScenesResponse.map((roomScene: RoomSceneResponse) => ({
        image: roomScene.image,
        alt: roomScene.alt,
        collectionId: roomScene.collectionId,
        roomId: roomScene.roomId,
        url: roomScene.url
    }))

    return roomScenesInfo

    } catch (error) {
        console.log(`Error fetching data from VTEX API: ${error}`)
        return [{
            image: '',
            alt: '',
            collectionId: '',
            roomId: '',
            url: ''
        }]
    }
}

