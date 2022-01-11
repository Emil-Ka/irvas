const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
   const header = document.querySelector(headerSelector),
         tabs = document.querySelectorAll(tabSelector),
         contents = document.querySelectorAll(contentSelector);

   function hideTabContent() {
      contents.forEach(item => {
         item.style.display = 'none';
      });
      tabs.forEach(tab => {
         tab.classList.remove(activeClass);
      });
   }

   function showTabContent(i = 0) {
      contents[i].style.display = 'block';
      tabs[i].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent();
   
   tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
         hideTabContent();
         showTabContent(i);
      });
   });

   // header.addEventListener('click', (event) => {
   //    const target = event.target;
   //    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
   //       tabs.forEach((tab, i) => {
   //          if (target == tab || target == tab.parentNode) {
   //             hideTabContent();
   //             showTabContent(i);
   //          }
   //       });
   //    }
   // });
};

export default tabs;