export const dateFormat = (date:string) => {
    const regex = /[T]/g;
    const index = date.search(regex)
    return date.slice(0,index)
}