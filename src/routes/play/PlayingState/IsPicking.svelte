<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<h1>Pick the <span class='blue'>human</span> quote</h1>

<div class='quotes'>
  <div class='quote' on:click={() => dispatch('pickLeft')}><slot name='left'/></div>
  <div class='divider' />
  <div class='quote' on:click={() => dispatch('pickRight')}><slot name='right'/></div>
</div>

<style>
  div.quotes {
    display: flex;
    flex: 1
  }

  
  div.quotes > div.quote {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    text-align: center;
  }

  div.quotes > div.divider {
    height: 100%;
    background: linear-gradient(transparent, black, transparent);
    opacity: 0.2;
    width: 2px;
  }

  span.blue {
    color: var(--hl-color)
  }

@media(max-width: 400px) {
    div.quotes {
      flex-direction: column;
    }

    div.quotes > div.divider {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, transparent, black, transparent);
    }

  }

</style>