

<script lang='ts'>

</script>

<div class='content roboto-font'>
<h1>Which is AI?</h1>
<div class='quotes'>
  <div>QUOTE 1</div>
  <div>QUOTE 2</div>
</div>
<footer>
  <span>High score</span>
  <span>score</span>
</footer>
</div>

<style>
  div.content {
    --padding-x: 0px;
    --padding-y: 2rem;

    height: calc(100% - var(--padding-y)*2);
    width: calc(100% - var(--padding-x)*2);
    padding: var(--padding-y) var(--padding-x);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: center;
  }

  div.quotes {
    flex: 1;
    display: flex;
  }

  div.quotes > div
  {
    flex: 1;
    margin: auto;
  }

  footer {
    display: flex;
    justify-content: space-around;
  }

  footer > * {
    margin: auto;
  }
</style>