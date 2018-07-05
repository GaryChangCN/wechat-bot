import history from '../lib/history'
import iApp from '../store/app'
import { } from '../typings'

const sandbox = {

    scan (url, code) {
        iApp.change('wechaty.qrcodeUrl', url)
        history.push(`/scan`)
    },

    login (user: string) {
        iApp.change('wechaty.user', user)
        console.log(user)
    },

    logout () {
        iApp.change('wechaty.user', null)
    }
}


export default sandbox
