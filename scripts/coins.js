const url_api =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json";

const precingBasic = document.getElementById("precingBasic");
const precingProfessional = document.getElementById("precingProfessional");
const precingPremium = document.getElementById("precingPremium");
const buttonEur = document.getElementById("eur");
const buttonUsd = document.getElementById("usd");
const buttonGbp = document.getElementById("gbp");

//funcion crear boton
const buttons = (nameButtons, pricesAPI, symbol) => {
  const colorRed = "0 5px 7px #fb3b64";

  nameButtons.addEventListener("click", () => {
    if (!nameButtons) {
      nameButtons.style.boxShadow = colorRed;
    }
    if (nameButtons != buttonEur) {
      let cantPrecingProfessional = (pricesAPI * 25).toFixed(2);
      let cantPrecingPremium = (pricesAPI * 60).toFixed(2);
      precingBasic.innerHTML = `${symbol} 0`;
      precingProfessional.innerHTML = `${symbol}  ${cantPrecingProfessional}`;
      precingPremium.innerHTML = `${symbol}  ${cantPrecingPremium}`;
      nameButtons.style.boxShadow = "";
    } else {
      precingBasic.innerHTML = "€ 0";
      precingProfessional.innerHTML = "€ 25";
      precingPremium.innerHTML = "€ 60";
      buttonEur.style.boxShadow = colorRed;
    }
  });
};

//Asignar los botones y cambio precio
const selectionCoins = (prices) => {
  //boton euro
  buttons(buttonEur);
  //boton dolar
  buttons(buttonUsd, prices[0], "$");
  //boton libra
  buttons(buttonGbp, prices[1], "£");
};

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
      //guardo la info en prices y lo paso a selectionCoins
      const prices = [data.eur.usd, data.eur.gbp];
      selectionCoins(prices);
    } else {
      alert("Error al obtener los datos. Código de estado: " + response.status);
    }
  } catch (error) {
    alert(
      "Se ha producido un error al realizar la petición a la API: " + error
    );
  }
};

getCurrency(url_api);
