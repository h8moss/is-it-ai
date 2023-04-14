
<div class="content roboto-font">
<h1>Is it AI?</h1>
<a href='/play' class="btn">Play</a>
<a href='/about'>Learn more</a>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  div.content {
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;
    padding: 1rem;

    justify-content: space-around;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 2.4rem;
  }

  a {
    margin: 0px auto;
  }

  a.btn {
    background-color: var(--hl-color);
    color: white;

    padding: 1.2rem 2rem;
    font-size: 1.5rem;
    border-radius: 1rem;

    text-decoration: none;

    transition-property: background-color;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out
  }

  a.btn:hover {
    background-color: var(--hl-color-darker);
  }
</style>