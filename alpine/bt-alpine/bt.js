document.addEventListener("alpine:init", () => {
  Alpine.data("todo", () => {
    return {
      items: [
        {
          id: 1,
          text: "Buy Milk",
          done: false,
        },
        {
          id: 2,
          text: "Buy Eggs",
          done: false,
        },
        {
          id: 3,
          text: "Buy Bread",
          done: false,
        },
      ],

      input: "",
      error: null,
      get count() {
        return this.items.filter((item) => !item.done).length;
      },

      init() {
        this.items = JSON.parse(localStorage.getItem("items")) || [];

        this.$watch("items", (value) => {
          localStorage.setItem("items", JSON.stringify(value));
        });
      },

      add() {
        if (this.input.trim() === "") {
          this.error = "I don't ";
          return;
        } else {
          this.error = "";
        }
        this.items.push({
          id: Date.now(),
          text: this.input,
          done: false,
        });

        this.input = "";
      },

      clear() {
        this.items = this.items.filter((item) => !item.done);
      },
      remove(item) {
        this.items = this.items.filter((i) => i.id != item.id);
      },
    };
  });

  Alpine.data("products", () => ({
    loading: true,
    error: null,
    products: [],
    init() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          this.products = res.products;
        })
        .catch((err) => {
          this.error = err;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  }));
});
