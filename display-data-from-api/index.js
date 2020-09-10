const userList = document.querySelector("#userList");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.slice(0, 6).forEach((user) => {
      userList.innerHTML += `<li><h2>${user.name}</h2><p>${user.email}</p><p>${user.phone}</p><p>${user.website}</p></li>`;
    });
  });
