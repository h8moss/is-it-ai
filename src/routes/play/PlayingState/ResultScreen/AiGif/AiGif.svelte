<script lang='ts'>
  import gif1 from './assets/giphy-1.gif';
  import gif2 from './assets/giphy-2.gif';
  import gif3 from './assets/giphy-3.gif';
  import gif4 from './assets/giphy-4.gif';
  import gif5 from './assets/giphy-5.gif';
  import gif6 from './assets/giphy-6.gif';
  import gif7 from './assets/giphy-7.gif';
  import gif8 from './assets/giphy-8.gif';
  import gif9 from './assets/giphy-9.gif';
  import gif10 from './assets/giphy-10.gif';

  const gifs = [
    gif1,gif2,gif3,gif4,gif5,gif6,gif7,gif8,gif9,gif10,
  ];
  const rand = Math.floor(Math.random() * gifs.length);
</script>

<img 
  src={gifs[rand]}
  alt='ai taunting you'
/>