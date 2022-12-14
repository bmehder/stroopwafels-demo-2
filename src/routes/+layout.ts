export const prerender = true

import type { RequestEvent } from '@sveltejs/kit'
import type { WP_REST_API_Posts } from 'wp-types'

// Get Posts
export async function load({ fetch }: RequestEvent) {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  const response = await fetch(BASE_URL + 'posts?_embed')
  const posts: WP_REST_API_Posts = await response.json()

  return { posts }
}
