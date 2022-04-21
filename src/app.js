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

// Your code goes here
const displayAllCards = document.getElementById('display_all_contacts')


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

