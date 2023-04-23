<script lang='ts'>
  import type {Sides, Quote} from '$lib/types';
  import { createEventDispatcher } from 'svelte';
	import IsPicking from './IsPicking.svelte';
  import ResultScreen from './ResultScreen';
  import { goto } from '$app/navigation';

  export let quotes: Record<Sides, Quote>;

  const dispatch = createEventDispatcher();

  let state : ('correct'|'wrong'|'picking') = 'picking';
  let side: Sides|undefined = undefined;

  $: isCorrect = state === 'correct';
  $: isWrong = state === 'wrong';
  $: isPicking = state === 'picking';

  const onPick = (pickedSide: Sides) => {
    side = pickedSide;
    state = quotes[side].isAI ? 'wrong' : 'correct';

    if (!quotes[side].isAI) {
      dispatch('increaseScore');
    }
  }

  const continueGame = () => {
    side = undefined;
    state = 'picking';

    dispatch('requestQuotes');
  }
  
</script>

<div>
  {#if isPicking}
    <IsPicking
      on:pickLeft={() => onPick('left')}
      on:pickRight={() => onPick('right')}
    >
      <p class='quote' slot='left'>{quotes.left.text}</p>
      <p class='quote' slot='right'>{quotes.right.text}</p>
    </IsPicking>
  {:else if !side}
    <p>Something went wrong! :(</p>
  {:else if isCorrect}
    <ResultScreen quote={quotes[side]} on:continue={continueGame}/>
  {:else if isWrong}
    <ResultScreen 
      quote={quotes[side]} 
      isWrong 
      on:mainMenu={() => goto('/')}
      on:startOver={() => window.location.reload()}
    />
  {/if}
</div>

<style>
  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    text-align: center;
  }

  .quote {
    width: clamp(50px, 300px, 90%);
    margin: auto;
    font-style: italic;
  }
</style>