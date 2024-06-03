const baseUrl = `https://demoaccount1.myvtex.com/api/dataentities/RI/search?_fields=id%2CID%2Cimage%2Cname%2Corder%2Curl`

export const GetRoomIdeas = async (_: any, { id }: any) => {

    try {
    // const response = await fetch(
    //     `${baseUrl}`
    // )

    // if (!response.ok) {
    //     throw new Error(
    //         `Error in the VTEX API response: ${response}. Retrying request...`
    //     )
    // }

    // const responseData = await response.json()

    // return responseData

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
        roomIdeas: [
        {
            id: "bathroom",
            ID: "bathroom",
            image: "https://www.lampsplus.com/images/landing-pages/shop-by-room/grid3x3/bathroom.jpg",
            name: "Bathroom",
            order: "4",
            url: "/room_bathroom"
        },
        {
            id: "bedroom",
            ID: "bedroom",
            image: "https://www.lampsplus.com/images/landing-pages/shop-by-room/grid3x3/bedroom.jpg",
            name: "Bedroom",
            order: "5",
            url: "/room_bedroom"
        }]
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
                name: '',
                order: '',
                url: ''
            }]
        }
    }
}

