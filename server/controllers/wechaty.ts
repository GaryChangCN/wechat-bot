import { Wechaty } from 'wechaty'
import * as Router from 'koa-router'
import bodyCreator from '../utils/bodyCreator'

export let wechatRunning = false

export const wechaty = Wechaty.instance()

export async function checkStatus (ctx: Router.IRouterContext) {
    ctx.body = bodyCreator(null, {
        running: wechatRunning
    })
}

export async function start (ctx: Router.IRouterContext) {
    await wechaty.start()
    wechatRunning = true
    ctx.body = bodyCreator(null, true)
}

export async function stop (ctx: Router.IRouterContext) {
    if (wechatRunning) {
        await wechaty.stop()
        wechatRunning = false
    }
    ctx.body = bodyCreator(null, true)
}
