const baseUrl = `https://demoaccount1.myvtex.com/api/dataentities/RS/search?_fields=id%2CID%2Cimage%2CcollectionId%2CroomId%2Corder%2Curl&_where=roomId=`

export const GetRoomScenes = async (_: any, { roomId }: any) => {

    try {
    const response = await fetch(
        `${baseUrl}${roomId}`
    )

    if (!response.ok) {
        throw new Error(
            `Error in the VTEX API response: ${response}. Retrying request...`
        )
    }

    const responseData = await response.json()

    return responseData

    } catch (error) {
        console.log(`Error fetching data from VTEX API: ${error}`)
        return [{
            id: '',
            ID: '',
            image: '',
            collectionId: '',
            roomId: '',
            order: '',
            url: ''
        }]
    }
}

