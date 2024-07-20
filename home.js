const main__block = document.querySelector('.main__block');

const box = document.querySelector(".box");
const form = document.querySelector(".form");
const input = document.querySelector(".username");
const input1 = document.querySelector(".username1");
const input2 = document.querySelector(".username2");

let arr = [];

const x = () => {
  const item = arr.map((item) => {
    return `
      <div class="item">
        <h2 class="item__title">${item.name}</h2>
        <p class="item__price">${item.price}$</p>
        <p class="item__description">${item.description}</p>
      </div>
    `;
  });
  box.innerHTML = item.join("");
};

form.addEventListener("submit", (a) => {
  a.preventDefault();

  arr.push({ name: input.value, price: input1.value, description: input2.value });
  input.value = "",input1.value = "",input2.value = "";
  
localStorage.setItem("users", JSON.stringify(arr));
  x();
});



