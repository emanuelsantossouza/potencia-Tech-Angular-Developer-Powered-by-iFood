debugger
const set = 10;
const limit = 20;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${set}&limit=${limit}`;

// Função tradicinal e Verbosa
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (ResponseBody) {
    console.log(ResponseBody);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("programa finalizado!!!");
  });

// Arrow Function
fetch(url)
  .then((response) => response.json())
  .then((responseBody) => console.log(responseBody))
  .catch((error) => console.log(error))
  .finally(console.log("programa finalizado!!!"))
