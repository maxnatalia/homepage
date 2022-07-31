console.log("Cześć!");

let buttonFridaVote = document.querySelector(".js-buttonFridaVote");
let buttonFelekVote = document.querySelector(".js-buttonFelekVote");
let buttonFrankVote = document.querySelector(".js-buttonFrankVote");
let textVote = document.querySelector(".js-textVote");

buttonFridaVote.addEventListener("click", () => {
  textVote.innerHTML = ("Frida najczęściej mówi <i>Halo</i> i <i>Naprawdę???</i>");
});

buttonFelekVote.addEventListener("click", () => {
  textVote.innerHTML = ("Felek najczęściej zadaje pytanie <i>Co Wy to robicie?</i> często też mówi <i>Cichutkooo</i>");
});

buttonFrankVote.addEventListener("click", () => {
  textVote.innerHTML = ("Frank często pyta <i> Co chcesz? </i>")
});

let buttonContact = document.querySelector(".js-buttonContact");
let containerContact = document.querySelector(".js-containerContact");

buttonContact.addEventListener("click", () => {
  containerContact.classList.toggle("js-containerContact");
  buttonContact.innerText = containerContact.classList.contains("js-containerContact")
    ? "Pokaż kontakt" : "Ukryj kontakt";
}); 