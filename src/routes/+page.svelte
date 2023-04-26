<script lang='ts'>
	import BuyMeACoffeeButton from "$lib/components/BuyMeACoffeeButton/BuyMeACoffeeButton.svelte";
  import HowToPlayModal from "./HowToPlayModal";

  let showModal = false;
</script>

<div class="content">
  <div class='title'>
    <h1>Is it AI?</h1>
    <p>Can you beat the machine?</p>
  </div> 
<a href='/play' class="btn">Play</a>
  <div class='link'>
    <a href='/about'>Learn more</a>
    <button on:click={() => showModal=true}>How to play?</button>
  </div>
  <BuyMeACoffeeButton floating/>
</div>

{#if showModal}
<HowToPlayModal on:close={() => showModal = false} />
{/if}

<style>
  div.title {
    display: flex;
    flex-direction: column;
  }

  div.title > p {
    margin-top: 0px;
  }

  div.content {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;

    justify-content: space-around;
    text-align: center;
  }

  div.link > * {
    margin: 0px auto;

    text-decoration: underline;
    background-color: transparent;
    border: none;
    color: rgba(var(--black-values), 0.7);
    font-size: 1rem;
    cursor: pointer;

    transition: color 100ms ease-in-out;
  }

  div.link > *:hover {
    color: var(--black)
  }

  a.btn {
    background-color: var(--highlight);
    color: var(--black);

    white-space: nowrap;

    padding: 1.2rem 2rem;
    font-size: 1.5rem;
    border-radius: 5px;

    text-decoration: none;

    border: none;

    width: min-content;
    margin-left: auto;
    margin-right: auto;

    cursor: pointer;

    transform: scale(1);

    transition: transform 100ms ease-in-out;
  }

  a.btn:hover {
    transform: scale(1.05);
  }


</style>