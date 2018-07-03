import * as Router from 'koa-router'
import * as SysLogin from '../controllers/login'
import iPoll from '../controllers/poll'

const router = new Router()

router.get('/api/login', SysLogin.checkLogin)
router.post('/api/login', SysLogin.login)
router.get('/api/polling', iPoll.call())

export default router
