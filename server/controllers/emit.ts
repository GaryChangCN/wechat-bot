import iPoll from './poll'
import { wechaty, wexin } from './wechaty'

function emit () {
    wechaty.on('scan', (url: string, code: number) => {
        iPoll.add({
            name: 'scan',
            params: [url, code]
        })
    })

    wechaty.on('login', (user) => {
        wexin.login = true
        iPoll.add({
            name: 'login',
            params: [user.name()]
        })
    })

    wechaty.on('logout', () => {
        wexin.login = true
        iPoll.add({
            name: 'logout',
            params: []
        })
    })
}


export default emit

