<script lang="ts">
  import { draggables } from './data'
  import Draggable from '$lib/components/Draggable.svelte'
</script>

<div class="section auto-format">
  <h1>Draggables</h1>
</div>

<section>
  {#each draggables as { id, top, left, background, color, content }}
    <Draggable {id} {top} {left} --background={background} --color={color}
      >{@html content}
    </Draggable>
  {/each}
</section>
