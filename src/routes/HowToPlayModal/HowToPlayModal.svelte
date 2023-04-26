<script lang='ts'>
  import { createEventDispatcher } from "svelte";
  import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
  import FaAngleLeft from 'svelte-icons/fa/FaAngleLeft.svelte'
  import MdClose from 'svelte-icons/md/MdClose.svelte'

  import step0Asset from './assets/step0.png';
  import step1Asset from './assets/step1.png';
  import step2Asset from './assets/step2.png';
  import step3And4Asset from './assets/step3_4.png'

  const dispatch = createEventDispatcher();

  const steps = [
    {text: 'Press the play button', img: step0Asset},
    {text: "You'll get 2 quotes, one was said by a human, one was created by Chat-GPT", img: step1Asset},
    {text: "If you pick the human one, you get a point", img: step2Asset},
    {text: "If you pick the machine one, it's game over", img: step3And4Asset},
    {text: "That's it, try to get a high score!", img: step3And4Asset},
  ]

  let step = 0;
  $: stepCanIncrease = step < steps.length-1;
  $: stepCanDecrease = step !== 0;

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='modal' on:click={() => dispatch('close')}>
  <div class='card' on:click|stopPropagation>
    <button class='icon-button close-button' on:click={() => dispatch('close')}><MdClose /></button>
    <h2>How to play?</h2>
    <div class='divider'/>
    <div class='steps'>
      <button on:click={() => step--} disabled={!stepCanDecrease} class='icon-button'><FaAngleLeft /></button>
      <div class='step-data'>
        <img src={steps[step].img} alt={steps[step].text} />
        <p>{steps[step].text}</p>
      </div>
      <button on:click={() => step++} disabled={!stepCanIncrease} class='icon-button'><FaAngleRight/></button>
    </div>
    <div class='pages'>
      {#each steps as _, i}
      <div class='circle' class:selected={i==step}/>
      {/each}
    </div>
    <button class='btn' on:click={() => dispatch('close')}>Close</button>
  </div>
</div>

<style>
  div.modal {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    background-color: rgba(var(--black-values), 0.4);

    display: flex;
  }

  div.modal > div.card {
    background-color: var(--white);
    width: clamp(200px, 90%, 500px);

    margin: auto;

    text-align: center;

    padding: 1rem;
    border-radius: 8px;

    position: relative;
  }

  div.card h2 {
    margin-bottom: 0px;
  }

  div.card .divider {
    height: 1px;
    background: linear-gradient(to left, var(--white), rgba(var(--black-values), 0.5), var(--white));
    width: 100%;
    margin: 2px 0px;
  }

  div.card > div.steps {
    display: flex;
  }

  div.steps > div {
    flex: 1;
  }

  div.pages {
    display: flex;
    margin: auto;
    width: 50%;

    justify-content: space-between;
  }

  div.circle {
    width: 10px;
    height: 10px;

    border-radius: 100%;
    background-color: rgba(var(--black-values), 0.3);

    transition: background-color 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  div.circle.selected {
     background-color: var(--black);
  }

  .icon-button {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;

    cursor: pointer;
    color: rgba(var(--black-values), 0.8);

    transition: color 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    margin: auto;
  }

  .icon-button:hover {
    color: var(--black)
  }

  button.btn {
    padding: 0.5rem;
    margin-top: 0.5rem;

    cursor: pointer;
    background-color: var(--accent);
    color: var(--white);
    border: none;

    border-radius: 10px;

    transition: background-color 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  button.btn:hover {
    background-color: var(--black);
  }

  div.step-data > img {
    width: 100%;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>