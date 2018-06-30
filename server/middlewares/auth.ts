import * as Koa from 'koa'

export default async (ctx: Koa.Context, next) => {
    const session = ctx.cookies.get('sessionId')
    let permission = true
    if (!session) {
        permission = false
    }

    if (permission) {
        await next()
        return
    }

    const pathname = ctx.url
    if (/^\/api\//.test(pathname)) {
        ctx.status = 403
        ctx.body = '403 forbidden'
    } else {
        ctx.status = 302
        ctx.set('Location', '/login')
    }

}
