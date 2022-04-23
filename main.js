"use strict"

const users = [{

  "id": 1,

  "name": "Veronika",

  "email": "vgroves0@vistaprint.com",

  "age": 50,

  "city": "Javhlant",

  "gender": "Female",

  "inn": 2604048463

}, {

  "id": 2,

  "name": "Correy",

  "email": "cskidmore1@shop-pro.jp",

  "age": 50,

  "city": "Junglinster",

  "gender": "Male",

  "inn": 5396152028

}, {

  "id": 3,

  "name": "Chrissie",

  "email": "csobieski2@go.com",

  "age": 40,

  "city": "Mercaderes",

  "gender": "Female",

  "inn": 7437115687

}, {

  "id": 4,

  "name": "Adrianna",

  "email": "awharrier3@hud.gov",

  "age": 33,

  "city": "Manuel Cavazos Lerma",

  "gender": "Non-binary",

  "inn": 6292774004

}, {

  "id": 5,

  "name": "Fairlie",

  "email": "feliasen4@bing.com",

  "age": 34,

  "city": "Радовиш",

  "gender": "Female",

  "inn": 5943534093

}]

function drop() {
  /*   console.log (this.nextElementSibling)
   */
  const content = this.nextElementSibling


  const isHide = content.classList.contains("hide")

  if (isHide) {
    content.classList.replace("hide", "show")

  } else {
    content.classList.replace("show", "hide")
  }

}

function createAcc(accordionF, data) {

  const container = document.querySelector(accordionF);



  for (let item of data) {

    const accordion_div = document.createElement('div');
    const title = document.createElement('h2');
    const section = document.createElement('div');
    const accordionImg = document.createElement('div');
    const accordionText = document.createElement('div');


    title.onclick = drop;

    accordion_div.className = "accordion_div";
    title.className = "accordion-title";
    section.className = "accordion-section hide";
    accordionImg.className = "accordionImg";
    accordionText.className = "accordion-text";


    title.innerHTML = item.name;

    accordionImg.innerHTML = item.name;

    section.appendChild(accordionImg);
    container.appendChild(accordion_div);
    accordion_div.appendChild(title);
    accordion_div.appendChild(section);
    section.appendChild(accordionText);


    /* console.log(accordionText)
     */
    for (let elements in item) {
      console.log(elements)
      if (elements != 'id') accordionText.innerHTML += `<div>${elements}: ${item[elements]}</div>`;
    }

  }
}

createAcc(".accordion", users);
