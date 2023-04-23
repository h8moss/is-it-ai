<script>
	import { onDestroy } from "svelte";

  let dotCount = 0;

  $: showSecond = (dotCount%3)+1 > 1;
  $: showThird = (dotCount%3)+1 > 2;

const interval = setInterval(() => dotCount++, 400);


onDestroy(() => clearInterval(interval));

</script>

<div>
  <p>Loading.<span class:transparent={!showSecond}>.</span><span class:transparent={!showThird}>.</span></p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    width: 100%;

    text-align: center;
  }

  span.transparent {
    color: transparent;
  }
</style>