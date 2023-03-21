const cardContainer = document.querySelector(".card-one");
const thanksCard = document.querySelector(".thank-you");
const submitBtn = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  thanksCard.classList.remove("hidden");
  cardContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thanksCard.classList.add("hidden");
  cardContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    // console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
    if (rate.innerHTML === "0") {
      rating = "0";
    }
  });
});
