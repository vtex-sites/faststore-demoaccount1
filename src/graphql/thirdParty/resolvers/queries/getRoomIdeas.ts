const baseUrl = `https://demoaccount1.myvtex.com/_v/room-ideas-manager/getRoomIdeas`

export const GetRoomIdeas = async (_: any) => {

    try {
    const response = await fetch(
        `${baseUrl}`
    )

    if (!response.ok) {
        throw new Error(
            `Error in the VTEX API response: ${response}. Retrying request...`
        )
    }

    const roomIdeas = await response.json()

    return {
        roomIdeas
    }

    } catch (error) {
        return {
            roomIdeas: [{
                id: '',
                ID: '',
                image: '',
                alt: '',
                name: '',
                order: '',
                url: ''
            }]
        }
    }
}

