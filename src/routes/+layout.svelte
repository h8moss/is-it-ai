<script >
  import './global.css';
  import TwitterCardTags from '$lib/components/TwitterCardTags';
	import { setContext } from 'svelte';

  export let data;

  setContext('host', data.hostname);
</script>

<svelte:head>
  <title>Is it AI?</title>
  <meta name='description' content='An AI guessing game.' />
  <TwitterCardTags />
</svelte:head>

<slot />