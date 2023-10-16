const url_api =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json";

let prices = [];

//Llamada a API
const getCurrency = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      params: {
        api: "TRUE",
        functionName: "getFields",
        field_id: "occur",
        list_id: "occurrence",
        empty_title: "SKIP",
        data_type: 1,
      },
    });

    if (response.status === 200) {
      const data = await response.json();

      prices.push(data.eur.eur, data.eur.usd, data.eur.gbp);
    } else {
      console.error(
        "Error al obtener los datos. Código de estado: " + response.status
      );
    }
  } catch (error) {
    console.error(
      "Se ha producido un error al realizar la petición a la API: " + error
    );
  }
};

//Asignar los botones y cambio precio
const selectionCoins = () => {
  const buttonEur = document.getElementById("eur");
  const buttonUsd = document.getElementById("usd");
  const buttonGbp = document.getElementById("gbp");

  const precingBasic = document.getElementById("precingBasic");
  const precingProfessional = document.getElementById("precingProfessional");
  const precingPremium = document.getElementById("precingPremium");

  //boton euro
  buttonEur.addEventListener("click", () => {
    precingBasic.innerHTML = "€ 0";
    precingProfessional.innerHTML = "€ 25";
    precingPremium.innerHTML = "€ 60";

    buttonGbp.style.boxShadow = "0 2px 5px #55dfb4";
    buttonUsd.style.boxShadow = "0 2px 5px #55dfb4";
    buttonEur.style.boxShadow = "0 5px 7px #fb3b64";
  });

  //boton dolar
  buttonUsd.addEventListener("click", () => {
    const priceUSD = prices[1];

    let mostrarprecioPremium = (priceUSD * 60).toFixed(2);
    let mostrarprecioProfesional = (priceUSD * 25).toFixed(2);
    precingBasic.innerHTML = "$ 0";
    precingProfessional.innerHTML = `$ ${mostrarprecioProfesional}`;
    precingPremium.innerHTML = `$ ${mostrarprecioPremium}`;
    buttonGbp.style.boxShadow = "0 2px 5px #55dfb4";
    buttonUsd.style.boxShadow = "0 5px 7px #fb3b64";
    buttonEur.style.boxShadow = "0 2px 5px #55dfb4";
  });

  //boton libra
  buttonGbp.addEventListener("click", () => {
    const priceGBP = prices[2];
    let mostrarprecioPremium = (priceGBP * 60).toFixed(2);
    let mostrarprecioProfesional = (priceGBP * 25).toFixed(2);
    precingBasic.innerHTML = "£ 0";
    precingProfessional.innerHTML = `£ ${mostrarprecioProfesional}`;
    precingPremium.innerHTML = `£ ${mostrarprecioPremium}`;
    buttonGbp.style.boxShadow = "0 5px 7px #fb3b64";
    buttonUsd.style.boxShadow = "0 2px 5px #55dfb4";
    buttonEur.style.boxShadow = "0 2px 5px #55dfb4";
  });
};

getCurrency(url_api);
selectionCoins();
