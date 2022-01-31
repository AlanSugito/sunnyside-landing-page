const comments = document.querySelector(".comments");
const menu = document.querySelector(".burger-menu");
const menus = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    menus.classList.toggle('active-menu')
})


comments.innerHTML = data.map((data) => {
  return `
    <div class="card">
          <img src=${data.picture} alt=${data.name} class="avatar">
          <p>${data.comment}</p>
          <h3 class="name">${data.name}</h3>
          <p class="role">${data.role}</p>
    </div>
    `;
}).join('');
