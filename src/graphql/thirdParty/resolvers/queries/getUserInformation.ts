const baseUrl = `http://demoaccount1.myvtex.com/_v/cms/api/faststore/roomIdea?filters[status]=published`

export const GetUserInformation = async (_: any, { id }: any) => {
  try {
    if (id) {
      // // Check if the user is authenticated by looking for a token in the headers
      // const response = await fetch(
      //   `${baseUrl}`
      // )
      // const authResponseData = await response.json()

      // if (!response.ok) {
      //   const errorText = await response.text()
      //   throw new Error(
      //     `Failed to fetch data from VTEX API. Status: ${response.status}, Status Text: ${response.statusText}, Error Details: ${errorText}`
      //   )
      // }

      // const data = authResponseData

      // console.log('data-------------------', JSON.stringify(data))

      return '12121'
    } else {
      return ''
    }
  } catch (error) {
    console.log(`Error fetching data: ${error}`)
    return ''
  }
}
