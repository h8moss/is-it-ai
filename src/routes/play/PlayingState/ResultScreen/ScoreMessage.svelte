<script lang='ts'>
  const messages = {
    zero: [
      "Maybe this isn't for you...",
      "The AI overlords enjoy your skill at this game",
      "...yikes",
      "Sorry, AI won, it's over",
      "If this was a \"try to score as low as possible\" game, you'd be a world champion",
      "That was... mediocre",
    ],
    lessThree: [
      'Well, at least you tried',
      "Better luck next time",
      "You'll do better next time",
      "At least it's not zero, right?",
      "That was... decent",
    ],
    lessTen: [
      "Fantastic",
      "The AI overlords are pleased",
      "You did amazing!",
      "That was great!",
      "Chat-GPT is pleased",
    ],
    moreThanTen: [
      "Incredible",
      "That was f***king awesome!",
      "You could beat terminator",
      "Now do it again in hard mode!",
    ]
  }

  export let score: number;
</script>

<p>
{#if score === 0}
{messages.zero[Math.floor(Math.random() * messages.zero.length)]}
{:else if score < 3}
{messages.lessThree[Math.floor(Math.random() * messages.lessThree.length)]}
{:else if score < 10}
{messages.lessTen[Math.floor(Math.random() * messages.lessTen.length)]}
{:else}
{messages.moreThanTen[Math.floor(Math.random() * messages.moreThanTen.length)]}
{/if}
</p>