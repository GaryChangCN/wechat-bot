import { Store } from 'zlp'
import { loginStatus } from './service'
import history from '../lib/history'

class App extends Store {
    store = {
        isLogin: false
    }

    change (path, value) {
        this.setStore(path, value)
    }

    async init () {
        await this.checkLoginStatus()
    }

    async checkLoginStatus () {
        const login = await loginStatus()
        if (login) {
            this.change('isLogin', true)
        } else {
            history.replace('/login')
        }
    }
}

export default new App()
