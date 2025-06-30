// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", config)
    .then(response => response.json())
    .then(data => {
      // Append new id to the DOM
      const idElement = document.createElement('p');
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
      return data; // Return data for potential chaining
    })
    .catch(error => {
      // Append error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}