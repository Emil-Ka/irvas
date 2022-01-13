let modalTime;

function openModal(modal) {
   modal.style.display = "block";
   document.body.style.overflow = "hidden";
}

function closeModal(modal) {
   modal.style.display = "";
   document.body.style.overflow = "";
}

const modal = (triggerSelector, modalSelector, closeSelector, clickOverlay = true) => {
   
   const trigger = document.querySelectorAll(triggerSelector),
         modalBlock = document.querySelector(modalSelector),
         closeBtn = document.querySelector(closeSelector),
         otherModal = document.querySelectorAll(`[data-modal]`);

   trigger.forEach((item, i) => {
      item.addEventListener('click', (event) => {
         if (event.target) {
            event.preventDefault();
         }
         otherModal.forEach(item => {
            closeModal(item);
         });
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
      if (event.target && event.target === modalBlock && clickOverlay) {
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