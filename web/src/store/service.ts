import { post, get } from '../lib/http'
import polling from './polling'

// 启动轮询
polling.start()


export async function sysLogin (password: string) {
    const ret = await post('/api/login', {
        password
    })
    return true
}

export async function loginStatus () {
    try {
        const ret = await get('/api/login')
        if (ret.login) {
            return true
        }
        return false
    } catch (error) {
        return false
    }
}
