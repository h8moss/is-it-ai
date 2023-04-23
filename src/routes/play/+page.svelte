<script lang='ts'>
  import type { Quote, Sides } from "$lib/types";
	import { setContext } from "svelte";

	import LoadingState from "./LoadingState.svelte";
  import PlayingState from "./PlayingState";

  export let data;

   const getAIQuote = async (): Promise<Quote> =>  {
    const quote = await fetch('/api/ai-quote');
    const json = await quote.json();

    return {
      author: 'Chat-GPT',
      isAI: true,
      text: json.res.content,
    };
  }

 const getHumanQuote = async (): Promise<Quote> =>  {
    const quote = await fetch('/api/human-quote');
    const json = await quote.json();

    return {
      author: json.author,
      isAI: false,
      text: json.text,
    }
  }


  const generateQuotes = async () => {
    const random = Math.random();

    let left: Quote;
    let right: Quote;

    if (random < 0.5) {
      [left, right] = await Promise.all([getAIQuote(), getHumanQuote()])
    } else {
      [right, left] = await Promise.all([getAIQuote(), getHumanQuote()])
    }

    return {left,right};
  }


  let quotePromise: Promise<Record<Sides, Quote>> = generateQuotes();
  let score = 0;

  const getScore = () => score;
  setContext('getScore', getScore);

</script>

<div class='content roboto-font'>
  <div class='game'>
  {#await quotePromise }
    <LoadingState />
  {:then quotes} 
  <PlayingState 
    {quotes} 
    on:requestQuotes={() => quotePromise=generateQuotes()} 
    on:increaseScore={() => score++}
  />
  {:catch e}
    <p>Something went wrong :(</p>
    <p>{e}</p>
  {/await}
  </div>
  <p>Score: {score}</p>
</div>

<style>
  div.content {
    --padding-x: 1rem;
    --padding-y: 1rem;

    width: calc(100% - 2 * var(--padding-x));
    height: calc(100% - 2 * var(--padding-y));
    padding: 1rem;
    
    display: flex;
    flex-direction: column;
  }

  div.content > div.game {
    flex: 1;
  }
</style>
