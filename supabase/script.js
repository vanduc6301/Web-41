const { createClient } = supabase;
const client = createClient(
  "https://yowygzokziruyxjniluy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvd3lnem9remlydXl4am5pbHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMzk3MDUsImV4cCI6MjA1NTcxNTcwNX0.-YPr0HUyA4onUjRoHszyj2PkX97czQyFg4qrX3-aYJg"
);

client
  .from("products")
  .select("*")
  .then((res) => {
    console.log(res);
  });

document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    products: [],
    loading: true,
    error: null,

    async init() {
      const { data, error } = await client
        .from("products")
        .select(`*,category(*),review(*)`);

      if (error) {
        this.error = error;
      } else {
        this.products = data;
      }

      this.loading = false;
    },
    format(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
  }));
});
