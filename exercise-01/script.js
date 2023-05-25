const cardArray = [
  {
    titel: "Oranges",
    welcomeText: "orange",
    imgURL: "img/orange.jpg",
    textColor: "#47560C",
    dotStyle:
      "background-color: rgba(253, 117, 30, 1);box-shadow: inset 3px 3px 4px #47560c",
    imgShadow: "  box-shadow: inset 29px 27px 30px -19px #fd751e",
    description:
      "Orange trees are small to medium sized evergreen trees with growth heights up to 10 meters.",
    recipe: ["1L Juice", "10 Oranges", "2 KG"],
  },
  {
    titel: "Apricots",
    welcomeText: "Apricot",
    imgURL: "img/apricot.jpg",
    textColor: "#2E1B10",
    dotStyle: "background-color: #C46015;box-shadow: inset 3px 3px 4px #2E1B10",
    imgShadow: "  box-shadow: inset 29px 27px 30px -19px #C46015",
    description:
      "When apricots are dried, the relative concentration of nutrients is increased with vitamines.",
    recipe: ["1.2L Juice", "100 Apricots", "5 KG"],
  },
  {
    titel: "Bananas",
    welcomeText: "Banana",
    imgURL: "img/banana.jpg",
    textColor: "#58321D",
    dotStyle: "background-color: #FEB378;box-shadow: inset 3px 3px 4px #58321D",
    imgShadow: "  box-shadow: inset 29px 27px 30px -19px #FEB378",
    description:
      'The term "banana" is also used as the common name for the plants that produce the fruit.',
    recipe: ["1L Juice", "2-3 Bananas", "0.36 KG"],
  },
  {
    titel: "Cherrys",
    welcomeText: "cherry",
    imgURL: "img/cherry.jpg",
    textColor: "#425346",
    dotStyle:
      "background-color: rgba(127, 17, 7, 0.77);box-shadow: inset 3px 3px 4px #425346",
    imgShadow:
      "  box-shadow: inset 29px 27px 30px -19px rgba(127, 17, 7, 0.77)",
    description:
      "Raw sweet cherries are 82% water, 16% carbohydrates, 1% protein, and negligible in fat.",
    recipe: ["1.2L Juice", "19 cherrys", "0.75 KG"],
  },
  {
    titel: "Figs",
    welcomeText: "Fig",
    imgURL: "img/fig.jpg",
    textColor: "#513035",
    dotStyle: "background-color: #D2976F;box-shadow: inset 3px 3px 4px #513035",
    imgShadow: "  box-shadow: inset 29px 27px 30px -19px #D2976F",
    description:
      "Figs can be eaten fresh or dried, or processed into jam, rolls, biscuits and other types of desserts.",
    recipe: ["200mL Juice", "12 Figs", "0.72 KG"],
  },
  {
    titel: "Pears",
    welcomeText: "pear",
    imgURL: "img/pear.jpg",
    textColor: "#624234",
    dotStyle: "background-color: #CAD1AA;box-shadow: inset 3px 3px 4px #47560C",
    imgShadow: "  box-shadow: inset 29px 27px 30px -19px #624234",
    description:
      "Pears are fruits produced and consumed around the world, growing on a tree .",
    recipe: ["1L Juice", "5 pears", "1 KG"],
  },
  ,
];

let currentCard = 0;

function changeCard(operation) {
  switch (operation) {
    case "next":
      currentCard++;

      break;
    case "previous":
      currentCard--;
      break;
  }
  renderCard();
}

function renderCard() {
  const card = document.getElementById("card-wrapper");
  const userName = "anja";
  const cardData = cardArray[currentCard % (cardArray.length - 1)];
  card.innerHTML = `
  <div>
  <button id="next-button" class="carousel-buttons" onClick=changeCard("next")>→</button>
  <button id="previous-button" class="carousel-buttons" onClick=changeCard("previous")>←</button>
  <div style="color: ${cardData.textColor}">
  <div class="toprow">
          <p>Hey ${userName}. Embrace your inner ${cardData.welcomeText}</p>
          <div class="dot" style="${cardData.dotStyle}"></div>
        </div>
        <div class="main-image" style="background-image: url('${cardData.imgURL}');${cardData.imgShadow}"></div>
        <div class="describtion">
          <h1>${cardData.titel}</h1>
          <p>
          ${cardData.description}</p>
          <div class="mengenangabe">
            <p>${cardData.recipe[0]}</p>
            <p>${cardData.recipe[1]}</p>
            <p>${cardData.recipe[2]}</p>
          </div>
          </div>
          </div>
          `;
}
