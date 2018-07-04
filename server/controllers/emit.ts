import iPoll from './poll'
import { wechaty } from './wechaty'

function emit () {
    wechaty.on('scan', (url: string, code: number) => {
        iPoll.add({
            name: 'scan',
            params: [url, code]
        })
    })
}


export default emit

