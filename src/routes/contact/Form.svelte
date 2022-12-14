<script lang="ts">
  import { enhance } from '$app/forms'

  import Spinner from './Spinner.svelte'

  export let isSubmitted = false
</script>

<form method="POST" on:submit={() => (isSubmitted = true)} use:enhance>
  <div class="form-group">
    <label for="name">Name</label>
    <input
      name="name"
      type="text"
      maxlength="100"
      placeholder="John Doe"
      required
      aria-required="true"
    />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      name="email"
      type="email"
      placeholder="johndoe@email.com"
      required
      aria-required="true"
    />
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea
      name="message"
      rows="6"
      minlength="5"
      maxlength="400"
      placeholder="Enter your message..."
      required
      aria-required="true"
    />
  </div>
  <button class="form-submit" disabled={isSubmitted}>
    {#if isSubmitted}
      <p>The form is submitting...</p>
      <Spinner />
    {:else}
      Submit Form
    {/if}
  </button>
</form>
