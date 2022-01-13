const sendData = async (data, url) => {
   let response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
         'Content-Type': 'application/json'
      }
   });
   
   return response;
};




export default sendData;