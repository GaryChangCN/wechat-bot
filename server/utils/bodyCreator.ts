export default function (err?: number, data?: any) {
    if (err) {
        return {
            err
        }
    } else {
        return {
            data
        }
    }
}