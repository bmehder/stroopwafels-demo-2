<script lang="ts">
  import { page } from '$app/stores'
  import type { ActionData } from './$types'
  import Form from './Form.svelte'
  import Success from './Success.svelte'
  import Error from './Error.svelte'

  export let form: ActionData

  let isSubmitted = false

  $: isResponse = !!form?.response
  $: !form?.success && (isSubmitted = false)
</script>

<svelte:head>
  <title>Contact - Stroopwafels Component Library</title>
  <meta
    name="description"
    content="A contact page with a progressively enhanced contact form using SvelteKit Form Actions."
  />
</svelte:head>

<h1 class="section">Contact</h1>

<section>
  {#if form?.success === false}
    <Error />
  {:else if isResponse}
    <Success {form} />
  {:else}
    <Form bind:isSubmitted />
  {/if}
</section>
