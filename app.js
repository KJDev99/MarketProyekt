const Market = {
  tovarBir: {
    id: 100,
    title: 'Olma',
    price: 5600,
    img: "./imgs/",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  tovarIkki: {
    id: 101,
    title: 'Banan',
    price: 9800,
    img: "./imgs/",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  tovarUch: {
    id: 102,
    title: 'Kivi',
    price: 15600,
    img: "./imgs/",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  tovarTort: {
    id: 103,
    title: 'Shoptoli',
    price: 4600,
    img: "./imgs/",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  tovarBesh: {
    id: 104,
    title: 'Apelsin',
    price: 10600,
    img: "./imgs/",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
  tovarOlti: {
    id: 105,
    title: 'Limon',
    price: 20000,
    img: "./imgs/",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
  },
};

let cardTitle = document.querySelectorAll(".card-title");
console.log(Market.tovarBir.title);
for (let i = 0; i < cardTitle.length; i++) {
    // cardTitle[0].innerHTML = Market.tovarBir.title
    for (const key in Market) {
        // console.log(Market[key].title);
        cardTitle[i].innerHTML = Market[key].title
    }
}

