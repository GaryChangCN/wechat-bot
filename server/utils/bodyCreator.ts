import { CallPoll } from "../typings"

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

export function createPollBody (data: CallPoll) {
    return {
        data: {
            __type: 'polling',
            __time: new Date().getTime(),
            call: data
        }
    }
}
