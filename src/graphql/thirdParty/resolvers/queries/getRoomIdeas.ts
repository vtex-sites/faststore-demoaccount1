const baseUrl = `https://demoaccount1.myvtex.com/_v/room-ideas-manager/getRoomIdeas`

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

    const roomIdeas = await response.json()

    return {
        callToActionBtn: {
            text: "SHOP NOW",
            newWindow: true
        },
        returnBtn: {
            text: "< BACK TO {PARAM} INSPIRATION",
            url: "/shop-by-room",
            newWindow: true,
        },
        roomIdeas
    }

    } catch (error) {
        return {
            callToActionBtn: {
                text: '',
                newWindow: false
            },
            returnBtn: {
                text: '',
                url: '',
                newWindow: false,
            },
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

