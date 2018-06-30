import * as Router from 'koa-router'
import * as SysLogin from '../controllers/system/login'

const router = new Router()

router.get('/api/login', SysLogin.checkLogin)
router.post('/api/login', SysLogin.login)

export default router
