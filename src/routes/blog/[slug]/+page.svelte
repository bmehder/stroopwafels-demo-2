<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const post = data.post[0]

  const src: string = post._embedded?.['wp:featuredmedia']![0]!.source_url
  const title = post.title.rendered
  const content = post.content.rendered
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <img {src} alt={title} />

  <h1>{@html title}</h1>

  <div>{@html content}</div>
</section>
