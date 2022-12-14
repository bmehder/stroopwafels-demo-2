<script lang="ts">
  import { page } from '$app/stores'

  import Sidebar from '$lib/components/Sidebar.svelte'

  const slug = $page.route.id

  const title = slug?.at(1)?.toUpperCase()! + slug?.slice(2)
</script>

<h1 class="section">{title}</h1>

<div class="grid sidebar">
  <slot />
  <Sidebar />
</div>
