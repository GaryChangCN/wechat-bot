import { get } from "../lib/http"
import sandbox from './sandbox'

class Polling {
    run = false

    constructor () {
        this.call()
    }

    call () {
        if (this.run) {
            get('/api/polling').then(ret => {
                if (!ret.call || !ret.call.name) {
                    return
                }
                const functionName = ret.call.name as string
                const params = ret.call.params as any[]

                if (sandbox.hasOwnProperty(functionName)) {
                    sandbox[functionName](...params)
                } else {
                    throw new Error(`Can not find ${functionName} in sandbox`)
                }
            }).catch(err => {
                console.error(err)
            })
        }
        setTimeout(this.call.bind(this), 1000)
    }

    start () {
        this.run = true
    }

    stop () {
        this.run = false
    }
}

export default new Polling()
