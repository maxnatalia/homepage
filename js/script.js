{
  const welcome = () => {
    console.log("Cześć!");
  }

  const onChangedTekstFrida = () => {
    textVote.innerHTML = ("Frida najczęściej mówi <i>Halo</i> i <i>Naprawdę???</i>");
  };

  const onChangedTekstFelek = () => {
    textVote.innerHTML = ("Felek najczęściej zadaje pytanie <i>Co Wy to robicie?</i> często też mówi <i>Cichutkooo</i>");
  };

  const onChangedTekstFrank = () => {
    textVote.innerHTML = ("Frank często pyta <i> Co chcesz? </i>");
  };

  const textVote = document.querySelector(".js-textVote");
  const buttonFridaVote = document.querySelector(".js-buttonFridaVote");
  const buttonFelekVote = document.querySelector(".js-buttonFelekVote");
  const buttonFrankVote = document.querySelector(".js-buttonFrankVote");
  
  const toggleContact = () => {
    containerContact.classList.toggle("js-containerContact");
  };

  const onChangedContact = () => {
    buttonContact.innerText = containerContact.classList.contains("js-containerContact")
      ? "Pokaż kontakt" : "Ukryj kontakt";
  };

  const containerContact = document.querySelector(".js-containerContact");
  const buttonContact = document.querySelector(".js-buttonContact");

  const init = () => {
    buttonContact.addEventListener("click", toggleContact);
    buttonContact.addEventListener("click", onChangedContact);
    buttonFridaVote.addEventListener("click", onChangedTekstFrida);
    buttonFelekVote.addEventListener("click", onChangedTekstFelek);
    buttonFrankVote.addEventListener("click", onChangedTekstFrank);
  }
    welcome();

  init();
}