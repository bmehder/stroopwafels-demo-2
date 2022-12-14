<script lang="ts">
  import { browser } from '$app/environment'

  import Prism from 'stroopwafels/Prism/Prism.svelte'

  let value: string

  const handleChange = () => {
    browser && document.getElementById(value)!.scrollIntoView()
  }
</script>

<div class="section grid columns">
  <h1>Dox</h1>

  <select bind:value on:change={handleChange}>
    <option>Sveltetube</option>
    <option>Prism</option>
    <option>Tabs</option>
    <option>Header</option>
    <option>Footer</option>
    <option>DarkMode</option>
    <option>BackToTop</option>
    <option>Modal</option>
    <option>Tooltip</option>
    <option value="Viewport">Viewport action</option>
    <option value="Clickoutside">Clickoutside action</option>
    <option>Switch</option>
  </select>
</div>

<section id="Sveltetube">
  <h2>Sveltetube</h2>
  <Prism
    code={`
    <Sveltetube
      id="AdNJ3fydeao"
      title="Rich Harris - Rethinking reactivity"
      poster="/slides/slider1.jpg"
      color="#eff0f4"
      radius="1.5rem"
      shadow="0 5px 10px rgba(0,0,0,0.24)"
    />
  `}
  />

  <h2 id="Prism">Prism</h2>

  <Prism
    code={`
    <Prism code={
      export async function load({ fetch }) {
        const BASE_URL = 'https://example.com/wp-json/wp/v2/'
        
        const response = await fetch(BASE_URL + 'posts')
        const posts = await response.json()
        
        return { posts }
      }
    }`}
  />

  <h2 id="Slider">Slider</h2>

  <Prism
    code={`
    <Slider
      slides={[
        {
          src: 'slides/slider1.jpg',
          text: 'Hello <br /> Slider 1',
          options: { top: '50%', left: '50%' },
        },
        {
          src: 'slides/slider2.jpg',
          text: 'Hello <br /> Slider 2',
          options: { top: '50%', left: '50%' },
        },
      ]}
      duration="{3200}"
      isAutoplay="{true}"
      color="white"
      --height="70vh"
    />
  `}
  />

  <h2 id="Tabs">Tabs</h2>

  <Prism
    code={`
    <Tabs tabs="[
    {
      heading: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat.',
    },
    {
      heading: 'Tab 2',
      content:
        'Blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.',
    },
    {
      heading: 'Tab 3',
      content:
        'Eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente off.',
    },
  ]" --color="var(--light)" />
  `}
  />

  <h2 id="Header">Header</h2>

  <Prism
    code={`
    <Header
      items={
        [
          {
            name: 'Dox',
            url: '/docs',
            children: [
              {
                name: 'NPM',
                url: 'https://www.npmjs.com/package/stroopwafels',
                target: '_blank',
              },
              {
                name: 'GitHub',
                url: 'https://github.com/bmehder/stroopwafels',
                target: '_blank',
              },
              { name: 'Svelte', url: 'https://svelte.dev', target: '_blank' },
              { name: 'SvelteKit', url: 'https://kit.svelte.dev', target: '_blank' },
              { name: 'Draggable', url: '/drag' },
            ],
          },
        ]
      }
      logo={'<img src="/stroopwafel.png" alt="stroopwafel" /><div>Svelte Stroopwafels<br><small> Component Library</small></div>'}
      --width="1100px"
      --padding="2rem"
      --background="#323232"
      --color="white"
    />
  `}
  />

  <h2 id="Footer">Footer</h2>

  <Prism
    code={`
    <Footer
      --padding="3rem"
      --background="#323232"
      --color="white"
      --width="1100px"
      --spacing="1.5rem"
    >
      © Copyright {date} Stroopwafels. All rights reserved.
    </Footer>
  `}
  />

  <h2 id="DarkMode">DarkMode</h2>

  <Prism code={`<DarkMode --width="1.5rem" />`} />

  <h2 id="BackToTop">BackToTop</h2>

  <Prism code={`<BackToTop --background="var(--light)" />`} />

  <h2 id="Modal">Modal</h2>

  <Prism
    code={`      
    <Modal
      bind:this={modal}
      --background="var(--white)"
      --color="var(--black)"
      --closeBackground="var(--light)"
      --closeColor="var(--white)"
    >...content </Modal>

    <button on:click={() => modal.openModal()}>Open Modal</button>
  `}
  />

  <h2 id="Tooltip">Tooltip</h2>

  <Prism
    code={`
    <Tooltip
      message="I'm a tooltip!"
      --background="var(--dark)"
      --color="var(--light)"
    >
      consectetur
    </Tooltip>
  `}
  />

  <h2 id="Viewport">Viewport action</h2>

  <Prism
    code={`
    <header
      use:viewport={{ rootMargin: '100%' }}
      on:enterViewport={() => ($isShowBackToTop = false)}
      on:exitViewport={() => ($isShowBackToTop = true)}
    >...
  `}
  />

  <h2 id="Clickoutside">Clickoutside action</h2>

  <Prism
    code={`
    <button use:clickOutside={() => console.log('clicked outside')}>
      Click Outside
    </button>
  `}
  />

  <h2 id="Switch">Switch</h2>

  <Prism
    code={`
    <Switch on:checked={handleChecked} on:unchecked={handleUnchecked} --background="var(--light)" />
  `}
  />
</section>

<style>
  select {
    padding: calc(var(--spacing) / 2);
    background-color: var(--light);
    color: var(--white);
    border: none;
    /* outline: none; */
  }
  @media (min-width: 769px) {
    .section {
      justify-items: left;
    }
    h1 {
      justify-items: left;
    }
    select {
      justify-self: end;
    }
  }
</style>
