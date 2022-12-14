<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<h2>The form was submitted successfully. 😀</h2>

<p>This is the information we received from your form submission:</p>

<ul class="auto-format">
  <li><strong>Name:</strong> {form?.response.name}</li>
  <li><strong>Email:</strong> {form?.response.email}</li>
  <li><strong>Message:</strong> {form?.response.message}</li>
</ul>

<p>We will get back to you as soon as possible.</p>

<p>
  <em
    >*The form submissions are not saved. This form is for testing purposes only.
  </em>
</p>

<div class="grid auto full-bleed">
  <div class="auto-format">
    <h3>Documentation</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt
      possimus magni minus rerum itaque eum architecto. Aut libero perferendis
      doloribus dolorum quae sit, officia sequi, rem voluptatum architecto sed id
      accusantium.
    </p>
    <a class="button" href="/docs">Read The Dox</a>
  </div>
  <div class="auto-format">
    <h3>Blog</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt
      possimus magni minus rerum itaque eum architecto. Aut libero perferendis
      doloribus dolorum quae sit, officia sequi, rem voluptatum architecto sed id
      accusantium.
    </p>
    <a class="button" href="/blog">Read The Blog</a>
  </div>
</div>

<style>
  .auto-format .button {
    width: max-content;
  }

  h3 {
    padding-block: var(--half-spacing);
    padding-inline: var(--spacing);
    background-color: var(--black);
  }
</style>
