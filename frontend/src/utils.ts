export const extractPrice = (value: string) => {
    const match = value?.match(/\d+\.\d+|\d+/)
    if(match)
        return parseFloat(match[0])
    else{
        return 0
    }
}