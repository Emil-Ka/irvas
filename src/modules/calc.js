import sendData from "../services/senddata";
import {modal} from "./modal";

const calc = (inputSelector, buttonSelector, url) => {
   const inputs = document.querySelectorAll(inputSelector),
         button = document.querySelector(buttonSelector);

   inputs.forEach(input => {
      input.addEventListener('input', () => {
         input.value = input.value.replace(/\D/gi, '');
      });
   });

   button.addEventListener('click', () => {
      const obj = {};

      inputs.forEach(input => {
         obj[input.getAttribute('id')] = input.value;
      });

      console.log(obj);

      const json = JSON.stringify(obj);
      sendData(json, url)
      .then(response => response.json())
      .then(resonse => console.log(resonse));
   });
};

export default calc;