import { Store } from 'zlp'
import { sysLogin } from './service'
import history from '../lib/history'

class Login extends Store {
    store = {
        view: {
            token: {
                value: 'admin'
            }
        }
    }

    change (path, value) {
        this.setStore(path, value)
    }

    async login () {
        const token = this.store.view.token.value
        if (!token) {
            alert('密钥不为空')
            return
        }
        const ret = await sysLogin(token)
        ret && history.replace('/')
    }
}

export default new Login()
