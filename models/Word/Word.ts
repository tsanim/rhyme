export default interface Word {
    _id?: string
    text: string,
    rhymeWith?: Word[]
}