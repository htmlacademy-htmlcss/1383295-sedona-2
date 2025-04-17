// Скрытие лейбла внутри инпута при фокусе на поле ввода

const subscriptionInput = document.querySelector(".subscribing-input")
const label = document.querySelector(".subscribing-control")


document.addEventListener('DOMContentLoaded', function () {
  function toggleLabel() {


    function hideLabel() {
      label.classList.add('visually-hidden')
    }

    function showLabel() {
      label.classList.remove('visually-hidden')
    }

    subscriptionInput.addEventListener('focusin', hideLabel)
    subscriptionInput.addEventListener('focusout', () => {
      if (subscriptionInput.value.length > 0) return
      showLabel()
    })
  }

  toggleLabel()

})

// Модальное окно
const modalMenu = document.querySelector(".modal-container");
const closeModal = document.querySelector(".modal-close-button");
const searchButton = document.querySelector(".search-button");


searchButton.addEventListener('click', ()=> {
  modalMenu.classList.remove("visually-hidden");
})

closeModal.addEventListener('click', ()=> {
  modalMenu.classList.add("visually-hidden");
})
