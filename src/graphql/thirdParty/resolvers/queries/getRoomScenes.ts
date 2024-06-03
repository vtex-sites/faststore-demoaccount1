const baseUrl = `https://demoaccount1.myvtex.com/api/dataentities/RS/search?_fields=id%2CID%2Cimage%2CcollectionId%2CroomId%2Corder%2Curl`

export const GetRoomScenes = async (_: any, { roomId }: any) => {

    try {
    // const response = await fetch(
    //     `${baseUrl}&_where=roomId=${roomId}`
    // )

    // if (!response.ok) {
    //     throw new Error(
    //         `Error in the VTEX API response: ${response}. Retrying request...`
    //     )
    // }

    // const responseData = await response.json()

    // return responseData

    return [
        {
            id: "bedroom4",
            ID: "bedroom4",
            image: "https://image.lampsplus.com/is/image/b9gt8/240313-transitional-chandeliers_cgi.jpg?qlt=65&wid=850&hei=600&fmt=jpeg&resMode=sharp2&op_usm=2,0.3,3",
            alt: 'bedroom scene 4',
            collectionId: "150",
            roomId: "bedroom",
            order: "4",
            url: "main-bedroom"
        },
        {
            id: "bedroom2",
            ID: "bedroom2",
            image: "https://image.lampsplus.com/is/image/b9gt8/240314-transitional-chandeliers_cgi.jpg?qlt=65&wid=850&hei=600&fmt=jpeg&resMode=sharp2&op_usm=2,0.3,3",
            alt: 'bedroom scene 2',
            collectionId: "146",
            roomId: "bedroom",
            order: "2",
            url: "modern-bedroom"
        },
        {
            id: "bedroom1",
            ID: "bedroom1",
            image: "https://image.lampsplus.com/is/image/b9gt8/240409-contemporary-sconces-wall-lamps-76h58-w-h.jpg?qlt=65&wid=850&hei=600&fmt=jpeg&resMode=sharp2&op_usm=2,0.3,3",
            alt: 'bedroom scene 1',
            collectionId: "145",
            roomId: "bedroom",
            order: "1",
            url: "classic-bedroom"
        },
        {
            id: "bedroom3",
            ID: "bedroom3",
            image: "https://image.lampsplus.com/is/image/b9gt8/240328-glam-luxe-chandeliers_cgi.jpg?qlt=65&wid=850&hei=600&fmt=jpeg&resMode=sharp2&op_usm=2,0.3,3",
            alt: 'bedroom scene 3',
            collectionId: "147",
            roomId: "bedroom",
            order: "3",
            url: "teen-bedroom"
        }]

    } catch (error) {
        console.log(`Error fetching data from VTEX API: ${error}`)
        return [{
            id: '',
            ID: '',
            image: '',
            alt: '',
            collectionId: '',
            roomId: '',
            order: '',
            url: ''
        }]
    }
}

