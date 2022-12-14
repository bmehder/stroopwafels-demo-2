<script lang="ts">
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
</script>

<aside class="auto-format">
  <div>
    <p>SvelteKit + Supabase</p>
    <Sveltetube id="6ZBxpXOrKpo" />
  </div>
  <div>
    <p>TypeScript</p>
    <Sveltetube id="Giu1uoiNbGk" />
  </div>
  <div>
    <p>CSS</p>
    <Sveltetube id="IbUHqvu_-lI" />
  </div>
</aside>

<style>
  aside {
    padding-block: calc(var(--spacing) * 2);
    padding-inline: var(--spacing);
    background-color: var(--dark);
    color: var(--white);
  }
  aside > div > p {
    padding-bottom: calc(var(--spacing) / 2);
    font-size: 1.25rem;
    font-weight: bold;
  }
  @media (min-width: 769px) {
    aside {
      margin-right: var(--spacing);
    }
  }
</style>
