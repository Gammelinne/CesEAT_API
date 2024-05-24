/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { throttle } from '#start/limiter'

const AuthController = () => import('#controllers/auth_controller')
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    /*Authentification route*/
    router
      .group(() => {
        router.post('/register', [AuthController, 'register'])
        router.post('/login', [AuthController, 'login'])
        router.post('/reset-password', [AuthController, 'resetPassword'])
        router.post('/logout', [AuthController, 'logout']).use(middleware.auth())
      })
      .prefix('v1')
  })
  .prefix('api')
  .use(throttle)
