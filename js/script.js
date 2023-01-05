{
  const buttonFridaVote = document.querySelector(".js-buttonFridaVote");
  const buttonFelekVote = document.querySelector(".js-buttonFelekVote");
  const buttonFrankVote = document.querySelector(".js-buttonFrankVote");
  const textVote = document.querySelector(".js-textVote");
  const overlay = document.querySelector(".js-overlay");
  const modal = document.querySelector(".js-modal");
  const closeButton = document.querySelector(".js-closeButton");
  const buttonContact = document.querySelector(".js-buttonContact");

  const openModal = () => {
    overlay.classList.remove("modal__hidden");
    modal.classList.remove("modal__hidden");
  }

  const closeModal = () => {
    overlay.classList.add("modal__hidden");
    modal.classList.add("modal__hidden");
  }

  const closeKeyboardModal = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("modal__hidden")) {
        closeModal();
      }
    });
  }

  const onChangedTekstFrida = () => {
    openModal();
    textVote.innerHTML = ("Frida najczęściej mówi <i>Halo</i> i <i>Naprawdę???</i>");
  };

  const onChangedTekstFelek = () => {
    openModal();
    textVote.innerHTML = ("Felek najczęściej zadaje pytanie <i>Co Wy to robicie?</i> często też mówi <i>Cichutkooo</i>");
  };

  const onChangedTekstFrank = () => {
    openModal();
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
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal)
    buttonFridaVote.addEventListener("click", onChangedTekstFrida);
    buttonFelekVote.addEventListener("click", onChangedTekstFelek);
    buttonFrankVote.addEventListener("click", onChangedTekstFrank);
    buttonContact.addEventListener("click", toggleContact);
    closeKeyboardModal();
  }
  init();
}
