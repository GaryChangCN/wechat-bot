import * as Koa from 'koa'
import config from '../config'

let sessionStore = ''
let expireTime: number = 0

function guid () {
    function S4 () {
       // tslint:disable-next-line:no-bitwise
       return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}

export function checkSession (ctx: Koa.Context) {
    // TODO: checklogin for dev
    if (process.env.NODE_ENV === 'development') {
        return true
    }

    const session = ctx.cookies.get(config.session.name)

    if (session !== sessionStore) {
        return false
    }
    const now = new Date().getTime()
    if (now > expireTime) {
        return false
    }
    return true
}

export function generateSession (ctx: Koa.Context) {
    const now = new Date().getTime()
    sessionStore = guid().replace(/-/g, '')
    expireTime = now + config.session.expire
    ctx.cookies.set(config.session.name, sessionStore)
}
