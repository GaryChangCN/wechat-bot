import * as Koa from 'koa'

export function checkSession (ctx: Koa.Context) {
    const session = ctx.cookies.get('sessionId')

    let permission = true
    if (!session) {
        permission = false
    }

    return permission
}
