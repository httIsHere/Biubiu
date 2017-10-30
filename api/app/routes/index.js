import Router from 'koa-router'
import banner from './banner'
import ding from './ding'
import extra from './extra'
import live from './live'
import promote from './promote'
import rank from './rank'

const router = Router()

router.use(banner.routes())
router.use(ding.routes())
router.use(extra.routes())
router.use(live.routes())
router.use(promote.routes())
router.use(rank.routes())


export default router