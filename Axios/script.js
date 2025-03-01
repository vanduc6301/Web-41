// // GỬi request dến server
// fetch("//dummyjson.com/test")
//   //Xử lý phản hồi từ server
//   //B1: check request thành công hay thất bại
//   //B2: check response là dạng dữ liệu gì
//   //B3: convert dữ liệu cho phù hợp
//   //B4: Xử lý lỗi nếu dữ liệu ko hợp lệ

//   .then((res) => res.json()) //Chạy sau khi server chạy Bất kể server có phản hồi gì đi nữa
//   //then: xử lý respone
//   .then(console.log);

// /* { status: 'ok', method: 'GET' } */

let pokemons = [];
let next;
let previous;
let count = 0;
function getPokemons() {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
    .then((res) =>
      axios
        .all(res.data.results.map((pokemon) => axios.get(pokemon.url)))
        .then((res) => res.map((item) => item.data))
    )
    .catch((res) => {
      console.error(res);
    });
}
function formatName(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}
function renderPokemonCard(pokemon) {
  $(
    `<a class="pokemon-2" href="pokemon.html?id=${
      pokemon.name
    }" class="poke-link">
    <div class="infor">
                <div class="index">${pokemon.id}</div>
                <div class="name">Bulbasaur</div>
                <div class="type" style="display: flex; gap: 10px">
                  ${formatName(pokemon.name)}
                </div>
              </div>
              <div class="poke-image">
                <img
                  src="${
                    pokemon.sprites.other["official-artwork"].front_default
                  }"
                  alt="${pokemon.name}"
                  width="50"
                  height="50"
                />
              </div>
              </a>`
  )
    .find("pokemon-type")
    .append("pokemon.types.map((item) => ``")
    .end()
    .appendTo(".poke-list");
}
$(function () {
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 1;
  getPokemons(page).then((data) => {
    $(".pagination").pagination({
      dataSource: data,
      pageSize: 20,
      autuHidePrevious: true,
      autoHideNext: true,
      pageNumber: page,
      callback: function (data, pagination) {
        $(".poke-list").empty();
        data.map(renderPokemonCard);

        if (pagination.pageNumber === 1) {
          searchParams.delete("page");
        } else {
          searchParams.set("page", pagination.pageNumber);
        }

        const params = searchParams.toString();

        if (params) {
          history.pushState(null, null, `index.html?${params}`);
        } else {
          history.pushState(null, null, `?${searchParams.toString()}`);
        }
      },
    });
  });
});
