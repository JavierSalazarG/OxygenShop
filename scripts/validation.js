const form_contact = document.getElementById("form_contact");

form_contact.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValidate = /^[A-Za-z]{2,100}$/;
  const mailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/;
  const name = document.getElementById("nameInput");
  const mail = document.getElementById("mailInput");
  const conditions = document.getElementById("conditionsInput");

  if (nameValidate.test(name.value)) {
    console.log("nombre valido");
    name.style.borderBottom = "1px solid #55dfb4";
  } else {
    name.style.borderBottom = "2px solid #fb3b64";
  }
  if (mailValidate.test(mail.value)) {
    console.log("correo valido");
    mail.style.borderBottom = "1px solid #55dfb4";
  } else {
    mail.style.borderBottom = "2px solid #fb3b64";
  }
  if (conditions.checked) {
    console.log("checkbox activo");
    conditions.style.border = "1px solid #55dfb4";
  } else {
    conditions.style.border = "2px solid #fb3b64";
  }
});
