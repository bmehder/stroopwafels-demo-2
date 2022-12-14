<script>
  import { page } from '$app/stores'
  import { pages } from '$lib/models/pages'
  import { slides } from '$lib/models/slides'

  import 'stroopwafels/base.css'
  import '$lib/stroopwafels-local.css'
  import '$lib/theme.css'

  import Loading from '$lib/components/Loading.svelte'

  import Outliner from 'stroopwafels/Outliner.svelte'
  import Header from 'stroopwafels/Header/Header.svelte'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import BackToTop from 'stroopwafels/BackToTop.svelte'
  import Footer from 'stroopwafels/Footer.svelte'
</script>

<Loading />
<Outliner --background="var(--light)" --color="white" />

<div class="wrapper">
  <Header
    items={pages}
    logo={`<img src="/stroopwafel.png" alt="stroopwafel" /><div>Svelte Stroopwafels<br><small> Component Library</small></div>`}
    --width="1100px"
    --padding="2rem"
    --background="var(--white)"
    --color="var(--black)"
  />

  {#if $page.route?.id === '/'}
    <div id="slider">
      <Slider {slides} isAutoplay={true} color="white" --height="70vh" />
    </div>
  {/if}

  <main>
    <slot />
  </main>

  <Footer --padding="3rem" --background="#111" />
</div>

<BackToTop --background="var(--light)" />
