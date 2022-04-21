// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

const contactsLength = contactsList.length

// Your code goes here
const displayAllCards = document.getElementById('display_all_contacts')
const displaySingleCard = document.getElementById('display_single_contact')
const closeBtnTemplate = `
  <span class="icons"><i class="fa-solid fa-circle-xmark"></i></span>
`
const emailTemplate = `
  <address></address>
`
const phoneTemplate = `
  <p></p>
`

function createCards(contactsList) {
  for (const contact of contactsList) {
    const cardDivTemplate = `
      <div id="${contact.ID}"></div>
    `
    displayAllCards.insertAdjacentHTML('afterbegin', cardDivTemplate)
    const divCard = document.getElementById(`${contact.ID}`)

    const cardImageTemplate = `
      <img src="img/${contact.image}" alt="${contact.name}'s Profile Picture">
    `
    divCard.insertAdjacentHTML('beforeend', cardImageTemplate)

    const cardNameTemplate = `
      <h1>${contact.name}</h1>
    `
    divCard.insertAdjacentHTML('beforeend', cardNameTemplate)
  }
}

createCards(contactsList)

function displayCard(evt) {
  for (const contact of contactsList) {
    if (evt.target.id == `${contact.ID}` || evt.target.parentElement.id == `${contact.ID}`) {
      displayAllCards.style.display = `none`
      displaySingleCard.style.display = 'block'

      const singleCardTemplate = `
        <div id="${contact.ID}"></div>
      `
      displaySingleCard.insertAdjacentHTML('beforeend', singleCardTemplate)

      const cardImageTemplate = `
        <img src="img/${contact.image}" alt="${contact.name}'s Profile Picture">
      `
      const singleCard = document.getElementById(`${contact.ID}`)
      singleCard.insertAdjacentHTML('beforeend', cardImageTemplate)
      const singleCardStyleTemplate = `
        <div id="justStyle"></div>
      `
      singleCard.insertAdjacentHTML('beforeend', singleCardStyleTemplate)
      const justStyleDiv = document.getElementById('justStyle')
      const cardNameTemplate = `
        <h1>${contact.name}</h1>
      `
      justStyleDiv.insertAdjacentHTML('beforeend', cardNameTemplate)
      justStyleDiv.insertAdjacentHTML('beforeend', phoneTemplate)
      const phoneSelect = document.querySelector('#justStyle p')
      phoneSelect.insertAdjacentHTML('beforeend', contact.phone)

      justStyleDiv.insertAdjacentHTML('beforeend', emailTemplate)
      const emailSelect = document.querySelector('#justStyle address')
      emailSelect.insertAdjacentHTML('beforeend', contact.email)

      singleCard.insertAdjacentHTML('beforeend', closeBtnTemplate)
    }
  }
}

displayAllCards.addEventListener('click', displayCard)