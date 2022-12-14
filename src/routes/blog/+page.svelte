<script lang="ts">
  import type { PageData } from './$types'
  import Post from './Post.svelte'

  export let data: PageData
</script>

<svelte:head>
  <title>Blog - Stroopwafels Component Library</title>
  <meta
    name="description"
    content="An example of a blog page that gets content from a WP REST API."
  />
</svelte:head>

<section>
  <h1>Blog</h1>

  <div class="grid auto">
    {#each data.posts as post}
      <Post {post} />
    {/each}
  </div>
</section>
