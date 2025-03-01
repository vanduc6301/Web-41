axios
  .get("https://dummyjson.com/products")
  .then((res) => console.log(res))
  .catch((res) => {
    console.error(res);
  });

//Thêm sản phẩm
axios.post("https://dummyjson.com/products/add", {
  title: "Pencil",
  price: 2000,
}).then((res) => {
    console.log(res);
}).catch((res)=>{
    console.error(res);
});
