<script lang="ts">
  import { fade } from 'svelte/transition'
  import { browser } from '$app/environment'

  export let id: string
  export let left = 100
  export let top = 100

  type Position = {
    top: number
    left: number
  }

  let component: HTMLDivElement
  let position: Position = { top, left }
  let isMoving = false

  const handleMousedown = (): void => {
    isMoving = true
  }

  const handleMousemove = (evt: MouseEvent) => {
    left += evt.movementX
    top += evt.movementY
  }

  const handleMouseup = () => {
    top = component?.getBoundingClientRect().top + scrollY
    left = component?.getBoundingClientRect().left + scrollX

    browser && localStorage.setItem(id, JSON.stringify({ top, left }))

    isMoving = false
  }

  const setPosition = (node: HTMLDivElement) => {
    position = browser && JSON.parse(localStorage.getItem(id)!)
    top = position?.top ?? top
    left = position?.left ?? left
    browser && localStorage.setItem(id, JSON.stringify({ top, left }))
  }

  const resetPosition = () => {
    const isSure = confirm('Are you sure you want to reset your dragables?')

    if (!isSure) return

    localStorage.clear()
    location.reload()
  }
</script>

<span on:click={resetPosition} on:keypress>Reset Dragables</span>

<div
  bind:this={component}
  use:setPosition
  on:mousedown={handleMousedown}
  in:fade={{ duration: 100 }}
  style="top: {top}px; left: {left}px;"
>
  <slot />
</div>

<svelte:window
  on:mouseup={handleMouseup}
  on:mousemove={evt => isMoving && handleMousemove(evt)}
/>

<style>
  div {
    max-width: calc(var(--spacing) * 20);
    position: absolute;
    padding: var(--spacing);
    background: var(--background, var(--white));
    color: var(--color, var(--black));
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    user-select: none;
    cursor: move;
    border: none;
    overflow: auto;
    box-sizing: border-box;
  }

  div :global(*) {
    pointer-events: none;
  }
  span {
    position: fixed;
    padding: calc(var(--spacing) / 2);
    background-color: var(--white);
    color: var(--black);
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 100ms ease-in-out;
    cursor: pointer;
  }
  span:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    div,
    span {
      display: none;
    }
  }
</style>
