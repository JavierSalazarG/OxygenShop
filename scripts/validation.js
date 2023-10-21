const url = "https:jsonplaceholder.typicode.com/posts";
const form_contact = document.getElementById("form_contact");
const div__suscription = document.getElementById("div__suscription");
const p__suscription = document.getElementById("p__suscription");
const span__suscription = document.getElementById("span__suscription");
let validFlagName = false;
let validFlagMail = false;
let users = [];

//Validar formulario
const validationInput = (regex, inputElement, validFlag) => {
  if (regex.test(inputElement.value)) {
    inputElement.style.borderBottom = "1px solid #55dfb4";
    validFlag = true;
  } else {
    inputElement.style.borderBottom = "2px solid #fb3b64";
    validFlag = false;
  }
  return validFlag;
};

//Limpiar campos
const cleanFields = (nameInput, mailInput, conditionsInput, div) => {
  nameInput.value = "";
  mailInput.value = "";
  conditionsInput.checked = false;

  setTimeout(() => {
    nameInput.style.borderBottom = "1px solid black";
    mailInput.style.borderBottom = "1px solid black";
    conditionsInput.style.border = "1px solid black";
    p__suscription.innerHTML = "We have received your message, thank you!";
    span__suscription.style.backgroundColor = " #55dfb4";
    div.style.display = "flex";
  }, 300);
  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
  return nameInput, mailInput, conditionsInput;
};

//Al pulsar submit ....
form_contact.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("nameInput");
  const mail = document.getElementById("mailInput");
  const conditions = document.getElementById("conditionsInput");
  const nameValidate = /^[A-Za-z]{2,100}$/;
  const mailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/;

  //Asigno a laidFlag el return de la funcion que es true o false
  validFlagName = validationInput(nameValidate, name, validFlagName);
  validFlagMail = validationInput(mailValidate, mail, validFlagMail);
  //compruebo el check
  if (conditions.checked) {
    conditions.style.border = "1px solid #55dfb4";
  } else {
    conditions.style.border = "2px solid #fb3b64";
  }

  if (validFlagMail && validFlagName && conditions.checked) {
    users.push({
      name: name.value,
      email: mail.value,
    });
    //llamo a la API y le paso la url y users
    sendForm(url, users);
    //ressetear campos a los 3 ms y limpiamos
    cleanFields(name, mail, conditions, div__suscription);
  } else {
    div__suscription.style.display = "flex";
    p__suscription.innerHTML = "Error validating form";
    span__suscription.style.backgroundColor = "#fb3b64";
    setTimeout(() => {
      div__suscription.style.display = "none";
    }, 4000);
  }
});

const sendForm = (url, data) => {
  try {
    const send = fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("Error: " + send.status);
        }
      })
      .then((response) => {
        console.log("OK" + response);
      });
  } catch (error) {
    alert(
      "Se ha producido un error al realizar la petición a la API: " + error
    );
  }
};
