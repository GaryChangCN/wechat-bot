import * as Router from 'koa-router'

const router = new Router()

router.get('*', async (ctx, next) => {
    ctx.body = 'hello world'
})

export default router
