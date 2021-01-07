import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  // Use context
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}

export default myMiddleware
