import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class AuthController {
  async register({ request }: HttpContext) {
    //TODO: make validation
    const user = await User.create(request.all())
  }
  async login({ request, auth }: HttpContext) {
    const { email, password } = request.all()
    console.log(request.all())
    const user = await User.verifyCredentials(email, password)
    return await auth.use('jwt').generate(user)
  }
  async resetPassword() {
    console.log('resetPassword')
  }
  async logout() {
    console.log('logout')
  }

  async view() {
    return User.all()
  }
}
