var quotes = [
"We are all alone, born alone, die alone, and—in spite of True Romance magazines—we shall all someday look back on our lives and see that, in spite of our company, we were alone the whole way. I do not say lonely—at least, not all the time—but essentially, and finally, alone. This is what makes your self-respect so important, and I don't see how you can respect yourself if you must look in the hearts and minds of others for your happiness. - Hunter S. Thompson",
"It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death's final constraint to realize that it has passed away before we knew it was passing. - Seneca",
"No man is free who is not a master of himself. - Epictetus",
"GNU/Linux is not just about technology, it's about community, freedom, and the future of computing. - Mark Shuttleworth",
"Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
"Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau",
"Love never dies a natural death. It dies because we don’t know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings. — Anais Nin",
"The world is changed by your example, not by your opinion- Paulo Coelho",
"You useless piece of shit. You absolute waste of space and air. You uneducated, ignorant, idiotic dumb swine, you’re an absolute embarrassment to humanity and all life as a whole. The magnitude of your failure just now is so indescribably massive that one hundred years into the future your name will be used as moniker of evil for heretics. Even if all of humanity put together their collective intelligence there is no conceivable way they could have thought up a way to fuck up on the unimaginable scale you just did. When Jesus died for our sins, he must not have seen the sacrilegious act we just witnessed you performing, because if he did he would have forsaken humanity long ago so that your birth may have never become reality. After you die, your skeleton will be displayed in a museum after being scientifically researched so that all future generations may learn not to generate your bone structure, because every tiny detail anyone may have in common with you degrades them to a useless piece of trash and a burden to society.Your birth made it so that mankind is worse of in every way you can possibly imagine, and you have made it so that society can never really recover into a state of organization. Everything has forever fallen into a bewildering chaos, through which unrecognizable core, you can only find misfortune. I would say the apocalypse is upon us but this is merely the closest word humans have for the sheer scale of horror that is now reality. You have forever condemned everyone you love and know into an eternal state of suffering, worse than any human concept of hell. - my alter ego to me", 
"The world is not beautiful, and that in a way, lends it a sort of beauty. -kino",
"Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing! - Satsuki Kiryuin",
"The paucity and preponderance of money is the potential difference that keeps the circuit of life functioning. As such, it is safe to surmise that money does give happiness. Although not always, money is akin to a pillar that affluent people can lean onto when shit goes haywire. -WishWash ball jo-knee",
"If you are rich, you can be a bitch. -Viswas paul jhonny",
"Love is not love which alters when it alteration finds. - William Shakespeare",
"Love is the emblem of eternity: it confounds all notion of time: effaces all memory of a beginning, all fear of an end. - Madame de Stae",
"Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused. - Paulo Coelho",
"Love is not a feeling of happiness. Love is a willingness to sacrifice. - Michael Novak",
"When love is not madness, it is not love. - Pedro Calderón de la Barca",
"Why is light given to those in misery, and life to the bitter of soul, to those who long for death that does not come? - Job",
"All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill. (Sutta Nipata 705)",
"Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing, because to this you were called so that you may inherit a blessing. (1 Peter 3:9)"
];
// Shuffle the quotes array
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
shuffle(quotes);

// Get a random quote that hasn't been displayed yet
var loadedQuotes = JSON.parse(localStorage.getItem("loadedQuotes")) || [];
var unusedQuotes = [];
for (var i = 0; i < quotes.length; i++) {
  if (loadedQuotes.indexOf(quotes[i]) === -1) {
    unusedQuotes.push(quotes[i]);
  }
  if (unusedQuotes.length === 1) {
    break;
  }
}
var randomQuote = unusedQuotes[0];
// Store the current quote in local storage
loadedQuotes.push(randomQuote);
localStorage.setItem("loadedQuotes", JSON.stringify(loadedQuotes));
// typedjs stuff
var typed = new Typed(".sed", {
  strings: [randomQuote],
  typeSpeed: 50,
  cursorChar: '<span style="color: green;">_</span>',
  loop: false
});
