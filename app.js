const originalQuotes = [
  {
    quote: "And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Your but will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote: "You either die a he see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];

const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const showAuthor = ref(true);
    const quotes = ref(originalQuotes);
    const totalQuotes = computed(() => quotes.value.length);

    const toggleAuthor = () => {
      showAuthor.value = !showAuthor.value;
    };

    const addQuote = () => {
      quotes.value.unshift({ quote: "Hola y chau", author: "Nadie" });
      console.log(quotes);
    };
    return { quotes, showAuthor, toggleAuthor, addQuote, totalQuotes };
  },
});

app.mount("#miApp");
