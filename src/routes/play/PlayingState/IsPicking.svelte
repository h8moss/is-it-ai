<script lang='ts'>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let leftQuote: HTMLDivElement;
  let rightQuote: HTMLDivElement;

  const setQuotesAfter = (e: MouseEvent) => {
    let pos = e.x;
    let max = document.body.clientWidth;

    let percent = Math.max(0, Math.min(1, (pos/(max/2))-1));
    let reverse = Math.max(0, Math.min(1, 1-(pos/(max/2))));


    rightQuote.style.setProperty('--highlight-opacity', percent.toString())
    leftQuote.style.setProperty('--highlight-opacity', reverse.toString())
  }
</script>

<svelte:body on:mousemove={setQuotesAfter}/>

<h1>Pick the <span class='hl'>human</span> quote</h1>

<div class='quotes'>
  <div class='quote' on:click={() => dispatch('pickLeft')} bind:this={leftQuote}><slot name='left'/></div>
  <div class='divider' />
  <div class='quote' on:click={() => dispatch('pickRight')} bind:this={rightQuote}><slot name='right'/></div>
</div>

<style>
  div.quotes {
    display: flex;
    flex: 1;
  }

  div.quotes > div.quote {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    text-align: center;
  }

  div.quotes > div.quote::before {
    z-index: -1;
    content: '';
    background-color: rgba(var(--highlight-values), var(--highlight-opacity, 0));
    width: 50%;
    height: 100%;

    position: absolute;
    top: 0px;
  }


  div.quotes > div.quote:nth-child(1):before {
    left: 0px
  }

  div.quotes > div.quote:nth-child(2):before {
    left: 50%
  }

  div.quotes > div.divider {
    height: 100%;
    background: linear-gradient(var(--white), var(--accent), var(--white));
    opacity: 0.2;
    width: 2px;
  }

  span.hl {
    color: rgb(var(--highlight))
  }

@media(max-width: 400px) {
    div.quotes {
      flex-direction: column;
    }

    div.quotes > div.divider {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, transparent, var(--accent), transparent);
    }

  }

</style>