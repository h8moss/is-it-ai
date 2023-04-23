<script lang='ts'>
	import { getContext } from 'svelte';
  import twitterImg from './twitter.png';

  export let score: number;

  const host = getContext('host');
</script>

<div class="twitter-share-button">
  <a 
    href={"https://twitter.com/intent/tweet?" 
     + new URLSearchParams({
       text: 
`I just got a score of ${score} while playing the #IsItAI game! 
 
Play it here: https://${host}`
     }).toString()}
    data-text="" 
    data-show-count="false"
    rel='noreferer'
    target="_blank"
    >
    <img alt='Twitter logo' src={twitterImg} width="20" height="18"/>
      Share
    </a>
</div>

<style>
div.twitter-share-button {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  }

  div.twitter-share-button > a > img {
    margin:0px 0.3rem 0px 0px;
  }

  div.twitter-share-button > a {

    display: flex;
    width: min-content;

    background-color: #1DA1F2;
    color: white;  
    text-decoration: none;
    padding: 0.4rem;
    border-radius: 0.5rem;

    transition-property: background-color;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  div.twitter-share-button > a:hover {
    background-color: #2397de;
  }
</style>