import sendData from "../services/senddata";

const form = (formSelector, url, nameDigitalInput) => {
   const forms = document.querySelectorAll(formSelector),
         phoneInputs = document.querySelectorAll(`input[name=${nameDigitalInput}]`);

   phoneInputs.forEach(input => {
      input.addEventListener("input", () => {
         input.value = input.value.replace(/\D/gi, "");
      });
   });

   const message = {
      loading: "Загрузка...",
      success: "Спасибо, скоро мы вам перезвоним",
      failure: "Что-то пошло не так..."
   };

   forms.forEach((form, i) => {
      form.addEventListener('submit', (event) => {
         event.preventDefault();

         const statusBlock = document.createElement("div");
         statusBlock.textContent = message.loading;
         statusBlock.classList.add("status");
         form.appendChild(statusBlock);
         
         const formData = new FormData(form),
               json = JSON.stringify(Object.fromEntries(formData.entries()));
         sendData(json, url)
         .then(response => {
            if (response.ok) {
               return response;
            }
            else {
               statusBlock.textContent = message.failure;
            }
         })
         .then(response => {
            statusBlock.textContent = message.success;
            return response.json();
         })
         .then(response => console.log(response))
         .catch(() => {
            statusBlock.textContent = message.failure;
         })
         .finally(() => {
            setTimeout(() => {
               statusBlock.remove();
            }, 5000);
         });
         forms[i].reset();
      });
   });
};

export default form;