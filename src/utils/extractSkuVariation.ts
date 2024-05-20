// This functions returns the product style from the url to show in the recommended button

export const extractSkuVariation = (url: string) => {
    const regex = /__(.*?)\/p/
    const match = url.match(regex)
    return match ? match[1] : ''
}