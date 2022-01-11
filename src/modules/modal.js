function openModal(modal) {
   modal.style.display = "block";
   document.body.style.overflow = "hidden";
}

function closeModal(modal) {
   modal.style.display = "";
   document.body.style.overflow = "";
}

let modalTime;

const modal = (triggerSelector, modalSelector, closeSelector) => {
   const trigger = document.querySelectorAll(triggerSelector),
         modalBlock = document.querySelector(modalSelector),
         closeBtn = document.querySelector(closeSelector);

   trigger.forEach(item => {
      item.addEventListener('click', (event) => {
         if (event.target) {
            event.preventDefault();
         }
         openModal(modalBlock);
         clearTimeout(modalTime);
      });
   });

   closeBtn.addEventListener('click', (event) => {
      if (event.target) {
         event.preventDefault();
      }
      closeModal(modalBlock);
   });

   modalBlock.addEventListener('click', (event) => {
      if (event.target && event.target === modalBlock) {
         closeModal(modalBlock);
      }
   });
};

const modalTimeout = (modalSelector, time) => {
   const modalBlock = document.querySelector(modalSelector);
   modalTime = setTimeout(() => {
      openModal(modalBlock);
   }, time);
};

export {modal, modalTimeout};