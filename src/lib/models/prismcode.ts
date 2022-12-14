export const code = {
  viewportCode: `
  // Viewport
    <header
      use:viewport={{ rootMargin: '100%' }}
      on:enterViewport={() => ($isShowBackToTop = false)}
      on:exitViewport={() => ($isShowBackToTop = true)}
    >...
  `,
  wpRestApiCodeTypeScript: `
  // TypeScript
    import type { RequestEvent } from '@sveltejs/kit'
    import type { PageLoad } from './$types';
    import type { WP_REST_API_Posts } from 'wp-types'
  
    export async function load({ fetch }: RequestEvent): PageLoad {
      const BASE_URL = 'https://example.com/wp-json/wp/v2/'
  
      const response = await fetch(BASE_URL + 'posts')
      const posts: WP_REST_API_Posts = await response.json()
  
      return { posts }
    }
    `,
  wpRestApiCodeJavaScript: `
  // JavaScript
    export async function load({ fetch }) {
      const BASE_URL = 'https://example.com/wp-json/wp/v2/'
  
      const response = await fetch(BASE_URL + 'posts')
      const posts = await response.json()
  
      return { posts }
    }
  `,
  clickOutsideCode: `
  // ClickOutside
    <button use:clickOutside={() => console.log('clicked outside')}>
      Click Outside
    </button>
  `,
}
