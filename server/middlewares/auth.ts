import * as Koa from 'koa'
import { checkSession } from '../utils/session'


export default async (ctx: Koa.Context, next) => {
    const pathname = ctx.url
    // 登录相关
    if (/^\/api\/login/.test(pathname)) {
        await next()
        return
    }
    const permission = checkSession(ctx)

    if (permission) {
        await next()
        return
    }

    if (/^\/api\//.test(pathname)) {
        ctx.status = 403
        ctx.body = '403 forbidden'
    } else {
        // TODO: for production
        ctx.status = 302
        ctx.set('Location', '/login')
    }

}
