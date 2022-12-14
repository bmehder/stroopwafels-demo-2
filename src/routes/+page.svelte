<script lang="ts">
  import { code } from '$lib/models/prismcode'
  import type { SvelteComponentTyped } from 'svelte'

  import { clickOutside } from 'stroopwafels/clickoutside'
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import Tabs from 'stroopwafels/Tabs.svelte'
  import Tooltip from 'stroopwafels/Tooltip.svelte'
  import Modal from 'stroopwafels/Modal.svelte'
  import Switch from 'stroopwafels/Switch.svelte'

  let modal: SvelteComponentTyped
</script>

<svelte:head>
  <title>Home - Stroopwafels Component Library</title>
  <meta
    name="description"
    content="A demo site to show and test a collection of Svelte Components, Svelte actions, and a stylesheet."
  />
  <style>
    .dark {
      background: radial-gradient(
        circle at 100%,
        #111,
        #111 50%,
        #222 75%,
        #111 75%
      );
    }
  </style>
</svelte:head>

<section id="sveltetube">
  <div>
    <h2>SvelteTube</h2>
    <div class="grid auto auto-format">
      <Sveltetube
        color="#eff0f4"
        radius="1.5rem"
        shadow="0 5px 10px rgba(0,0,0,0.24)"
      />
      <Sveltetube
        id="AdNJ3fydeao"
        color="#eff0f4"
        radius="1.5rem"
        shadow="0 5px 10px rgba(0,0,0,0.24)"
      />
    </div>
  </div>
</section>

<section id="prism">
  <div>
    <h2>Prism</h2>
    <div>
      <Prism code={code.wpRestApiCodeJavaScript} />
      <Prism code={code.wpRestApiCodeTypeScript} />
    </div>
    <h2>Actions</h2>
    <div>
      <Prism code={code.viewportCode} />
      <Prism code={code.clickOutsideCode} />
    </div>
  </div>
</section>

<section id="modal">
  <div class="grid auto">
    <div class="auto-format">
      <h2>Click Outside</h2>
      <div>
        <button use:clickOutside={() => console.log('clicked outside')}
          >Click Outside</button
        >
      </div>
    </div>
    <div class="auto-format">
      <h2>Modal</h2>
      <div>
        <button on:click={() => modal.openModal()}>Open Modal</button>
      </div>
      <Modal
        bind:this={modal}
        --background="var(--white)"
        --color="var(--black)"
        --closeBackground="var(--light)"
        --closeColor="var(--white)"
      >
        <div class="auto-format">
          <h2>I am a Modal!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quae
            nostrum labore quas dolorum voluptatem officia, qui delectus aliquam
            harum corporis laboriosam quibusdam ducimus ipsam sed sunt recusandae!
            Modi facilis illum vero rem sunt ipsa perferendis deleniti molestias ex
            impedit delectus debitis, asperiores velit recusandae beatae voluptatem
            cum omnis, quia earum molestiae repellendus? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Adipisci, quae nostrum labore quas dolorum
            voluptatem officia, qui delectus aliquam harum corporis laboriosam
            quibusdam ducimus ipsam sed sunt recusandae! Modi facilis illum vero rem
            sunt ipsa perferendis deleniti molestias ex impedit delectus debitis,
            asperiores velit recusandae beatae voluptatem cum omnis, quia earum
            molestiae repellendus?
          </p>
        </div>
      </Modal>
    </div>
    <div class="auto-format">
      <h2>Switch</h2>
      <div>
        <Switch
          on:checked={() => console.log('Checked')}
          on:unchecked={() => console.log('Unchecked')}
        />
      </div>
    </div>
  </div>
</section>

<section id="tabs" class="full-bleed">
  <div class="grid auto">
    <div class="auto-format">
      <h2>Tooltip</h2>
      <p>
        Lorem ipsum dolor sit amet, <Tooltip
          message="I'm a tooltip!"
          --background="var(--light)"
          --color="var(--white)">consectetur</Tooltip
        > adipisicing elit. Totam, eos ipsum neque deserunt atque quae inventore necessitatibus
        consequatur hic minus, exercitationem perferendis qui aut error ipsam distinctio
        veritatis. Dicta officiis facilis similique, ipsa tempora voluptatibus eligendi
        dolorum, saepe ipsum tenetur sequi veniam inventore exercitationem nam ratione
        in numquam quo eveniet pariatur iure debitis, deserunt hic molestias quod. Deleniti
        amet rem, eligendi, voluptate reiciendis voluptatibus aliquam non exercitationem
        modi eveniet fugiat, nihil autem saepe.
      </p>
    </div>
    <div class="auto-format">
      <h2>Tabs</h2>
      <Tabs --color="var(--light)" />
    </div>
  </div>
</section>

<section>
  <div><h2>Heading</h2></div>
  <div class="grid columns">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi non facere
      eaque sunt, voluptatem est tempora optio veniam voluptatibus expedita corporis
      temporibus nemo laudantium quaerat obcaecati odio sapiente architecto delectus,
      modi iusto soluta voluptate accusamus? Quibusdam tenetur, qui, harum repellat
      deleniti magni illo enim culpa iusto assumenda ipsa, quo voluptates provident
      iste eius! Laboriosam recusandae aperiam autem mollitia vel quia repellat.
      Autem, molestias iusto! Tempore quos recusandae assumenda odit eum provident
      temporibus veniam reprehenderit voluptas repellendus dolore laudantium
      similique, doloremque quod tempora dignissimos corporis amet quidem cumque
      culpa quas repudiandae aliquam. Quae deleniti et ea expedita consequatur magnam
      assumenda.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consequatur
      modi labore repellendus illo necessitatibus libero a, maxime, distinctio eum
      atque, fugit delectus quibusdam enim similique ratione veniam nobis eius
      corporis eveniet? Porro nihil quaerat numquam et, repellendus in incidunt
      dolores consequatur nam vel doloribus, animi, esse asperiores enim voluptate
      corrupti. Ad ducimus rerum suscipit sapiente impedit delectus dignissimos
      dolore et aliquam incidunt? At accusamus ut quia. Earum mollitia sed commodi
      excepturi sapiente ab maxime numquam architecto cum voluptatum repudiandae
      atque, at assumenda accusantium sequi autem ratione soluta qui quaerat
      similique quibusdam dolorem, aliquam et? Eaque eum consectetur totam quas.
    </p>
  </div>
</section>

<style>
  #tabs {
    padding-bottom: calc(var(--spacing) * 2);
  }
</style>
