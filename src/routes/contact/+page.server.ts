export const prerender = false

// import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import type { RequestEvent } from '@sveltejs/kit'

export const actions: Actions = {
  default: async ({ request }: RequestEvent) => {
    const formData = await request.formData()

    const response = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    if (!response.name || !response.email || !response.message) {
      return { response, success: false }
    }

    return { response }
  },
}
