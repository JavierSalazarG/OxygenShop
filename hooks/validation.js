//Se recoje los datos de Form y se guarda en data
let dataForm;
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  dataForm = Object.fromEntries(new FormData(e.target));
});

//------------------------

console.log(dataForm);
