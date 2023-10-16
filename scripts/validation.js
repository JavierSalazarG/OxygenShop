const url = "https:jsonplaceholder.typicode.com/posts";
const form_contact = document.getElementById("form_contact");
const div__suscription = document.getElementById("div__suscription");

let users = [];

form_contact.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValidate = /^[A-Za-z]{2,100}$/;
  const mailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/;
  const name = document.getElementById("nameInput");
  const mail = document.getElementById("mailInput");
  const conditions = document.getElementById("conditionsInput");
  let validateU = false;
  let validateC = false;
  if (nameValidate.test(name.value)) {
    validateU = true;
    name.style.borderBottom = "1px solid #55dfb4";
  } else {
    validateU = false;
    name.style.borderBottom = "2px solid #fb3b64";
  }
  if (mailValidate.test(mail.value)) {
    validateC = true;
    mail.style.borderBottom = "1px solid #55dfb4";
  } else {
    validateC = false;
    mail.style.borderBottom = "2px solid #fb3b64";
  }
  if (conditions.checked) {
    conditions.style.border = "1px solid #55dfb4";
  } else {
    conditions.style.border = "2px solid #fb3b64";
  }

  if (validateU === true && validateC === true) {
    users.push({
      name: name.value,
      email: mail.value,
    });
    //limpiar campos
    name.value = "";
    mail.value = "";
    conditions.checked = false;
    sendForm(url, users);
    //ressetear campos a los 3 ms
    setTimeout(() => {
      name.style.borderBottom = "1px solid black";
      mail.style.borderBottom = "1px solid black";
      conditions.style.border = "1px solid black";
      div__suscription.style.display = "flex";
    }, 300);
    setTimeout(() => {
      div__suscription.style.display = "none";
    }, 3000);
  }
});

const sendForm = async (url, date) => {
  try {
    const send = await fetch(url, {
      method: "POST",
      body: JSON.stringify(date),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (send.status === 201) {
      console.log(send.status);
    } else {
      console.log(send.status);
    }
  } catch (error) {
    console.error(
      "Se ha producido un error al realizar la petición a la API: " + error
    );
  }
};
