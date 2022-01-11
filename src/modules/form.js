function sendFormData(formSelector, url) {
   const form = document.querySelector(formSelector),
         formData = new FormData(form),
         json = JSON.stringify(Object.fromEntries(formData.entries()));

   fetch(url, {
      method: 'POST',
      body: json,
      headers: {
         'Content-Type': 'application/json'
      }
   })
   .then(response => response.json())
   .then(response => console.log(response));
}

export default sendFormData;