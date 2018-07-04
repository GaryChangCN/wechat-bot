import history from '../lib/history'
import iApp from '../store/app'

const sandbox = {
    test () {
        console.log(...arguments)
    },
    scan (url, code) {
        iApp.change('wechaty.qrcodeUrl', url)
        history.push(`/scan`)
    }
}


export default sandbox
