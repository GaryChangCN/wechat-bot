import { post, get } from '../lib/http'
import polling from './polling'
import { wechatyStatus } from '../typings'

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

export async function wechatyStatus () {
    const ret = await get('/api/wechaty/status')
    return ret as wechatyStatus
}

export async function wechatyStart () {
    const ret = await post('/api/wechaty/start')
    return ret as boolean
}

export async function wechatyStop () {
    const ret = await post('/api/wechaty/stop')
    return ret as boolean
}
