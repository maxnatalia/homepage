{
  const welcome = () => {
    console.log("Cześć!");
  }

  const textVote = document.querySelector(".js-textVote");

  const onChangedTekstFrida = () => {
    textVote.innerHTML = ("Frida najczęściej mówi <i>Halo</i> i <i>Naprawdę???</i>");
  };

  const onChangedTekstFelek = () => {
    textVote.innerHTML = ("Felek najczęściej zadaje pytanie <i>Co Wy to robicie?</i> często też mówi <i>Cichutkooo</i>");
  };

  const onChangedTekstFrank = () => {
    textVote.innerHTML = ("Frank często pyta <i> Co chcesz? </i>");
  };

  const toggleContact = () => {
    const containerContact = document.querySelector(".js-containerContact");
    const themeNameButton = document.querySelector(".js-themeNameButton");
    containerContact.classList.toggle("section__containerContact");
    themeNameButton.innerText = containerContact.classList.contains("section__containerContact")
      ? "Pokaż" : "Ukryj";
  };

  const init = () => {
    const buttonFridaVote = document.querySelector(".js-buttonFridaVote");
    const buttonFelekVote = document.querySelector(".js-buttonFelekVote");
    const buttonFrankVote = document.querySelector(".js-buttonFrankVote");
    buttonFridaVote.addEventListener("click", onChangedTekstFrida);
    buttonFelekVote.addEventListener("click", onChangedTekstFelek);
    buttonFrankVote.addEventListener("click", onChangedTekstFrank);
    const buttonContact = document.querySelector(".js-buttonContact");
    buttonContact.addEventListener("click", toggleContact);
  }
  welcome();
  init();
}
