<script lang='ts'>
	import type { Quote } from "$lib/types";
  import { createEventDispatcher, getContext } from "svelte";
	import ScoreMessage from "./ScoreMessage.svelte";
	import TwitterButton from "./TwitterButton/TwitterButton.svelte";
	import AiGif from "./AiGif/AiGif.svelte";
  
  const dispatch = createEventDispatcher();
  const getScore: () => number = getContext('getScore');

  const score = getScore();

  export let quote: Quote;
  export let isWrong: boolean = false;
</script>

<h1>You picked the {isWrong ? 'robot' : 'human'}!</h1>

<div class='content'>
  {#if isWrong}
  <h2>You got a score of {score}</h2>
  <ScoreMessage {score}/>
  {/if}
  
  <div class='quote'>
    {#if !isWrong}
    <p>{quote.text}</p>
    <p class='author'>-{quote.author}</p>
    {:else}
    <AiGif />
    {/if}
  </div>
{#if isWrong}
<TwitterButton {score}/>
{/if}

  <div class='buttons'>
    {#if !isWrong}
    <button class:isWrong on:click={() => dispatch('continue')}>Continue</button>
    {:else}
    <button class:isWrong on:click={() => dispatch('startOver')}>Start over</button>
    <button class:isWrong on:click={() => dispatch('mainMenu')}>Main menu</button>
    {/if}
  </div>
</div>

<style>
  
  div.content {
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  div.content > div.quote {
    flex: 1;
    width: clamp(300px, 50%, 90%);
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: justify;
    font-style: italic;
  }

  div.buttons {
    display: flex;
    width: 100%;
  }

  div.buttons > button {
    flex: 1;
  }

  div.quote > p.author {
    text-align: right;
  }

  button {
    padding: 1rem;
    border: none;
    color: var(--white);
    background-color: var(--accent);
    border-radius: 1rem;
    margin: 0.5rem;

    cursor: pointer;
  }

  button.isWrong {
    background-color: var(--black);
  }
</style>