import { Store } from 'zlp'
import { loginStatus, wechatyStatus, wechatyStart, wechatyStop } from './service'
import history from '../lib/history'

class App extends Store {
    store = {
        isLogin: false,
        wechaty: {
            running: false,
            qrcodeUrl: ''
        }
    }

    change (path, value) {
        this.setStore(path, value)
    }

    async init () {
        await this.checkLoginStatus()
        await this.checkWechatyStatus()
    }

    async checkLoginStatus () {
        const login = await loginStatus()
        if (login) {
            this.change('isLogin', true)
        } else {
            this.change('isLogin', false)
            history.replace('/login')
        }
    }

    async checkWechatyStatus () {
        const check = async () => {
            if (!this.store.isLogin) {
                return
            }
            const ret = await wechatyStatus()
            this.change('wechaty.running', ret.running)
            setTimeout(() => {
                check()
            }, 10000)
        }
        check()
    }

    async startWechaty () {
        await wechatyStart()
        this.change('wechaty.running', true)
    }

    async stopWechaty () {
        await wechatyStop()
        this.change('wechaty.running', false)
    }
}

export default new App()
