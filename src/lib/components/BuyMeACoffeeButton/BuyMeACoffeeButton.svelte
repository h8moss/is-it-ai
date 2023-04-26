<script lang='ts'>
  export let floating = false;
</script>

<a 
  href="https://www.buymeacoffee.com/danarmentaz" 
  target="_blank"
  class:floating
>
  <img 
    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
    alt="Buy Me A Coffee" 
  >
</a>

<style>
  img {
    height: 45px;
    width: 150px;
  }

  .floating {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
</style>