new WOW().init();

const cartButton = document.querySelector("#form-button");
const cardButton = document.querySelector("#form-button1");
const carButton = document.querySelector("#form-button2");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-button")


cartButton.addEventListener("click", function (event) {
 modal.classList.add("modal-open");
});

close.addEventListener("click", function (event) {
 modal.classList.remove("modal-open");
});

cardButton.addEventListener("click", function (event) {
 modal.classList.add("modal-open");
});

close.addEventListener("click", function (event) {
 modal.classList.remove("modal-open");
});

carButton.addEventListener("click", function (event) {
 modal.classList.add("modal-open");
});

close.addEventListener("click", function (event) {
 modal.classList.remove("modal-open");
});

