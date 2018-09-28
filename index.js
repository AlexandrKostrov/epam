var imagesArr = [
  {
    src: "img/pizza1.png",
    name: "marinella",
    composition: "Tomato sauce, mozzarella, and oregano",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza2.png",
    name: "Margherita",
    composition: "Tomato sauce, garlic and basil",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza3.png",
    name: "Marinara",
    composition: "Tomato sauce and seafood",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza4.png",
    name: "Carbonara",
    composition: "Tomato sauce, mozzarella and Parma ham",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza5.png",
    name: "Crudo",
    composition: "Tomato sauce, mozzarella, oregano, and onions",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza6.png",
    name: "Napoletana",
    composition: "Olive oil and rosemary",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza7.png",
    name: "Pugliese",
    composition: "Tomato sauce, mozzarella, ham, and oregano",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza8.png",
    name: "Montanara",
    composition: "Tomato sauce, mozzarella, sausage and french fries",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza9.png",
    name: "Emiliana",
    composition: "Tomato sauce, mozzarella, tuna, and onions",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza10.png",
    name: "Romana",
    composition: "Tomato sauce, mozzarella, and assorted vegetables",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza11.png",
    name: "Fattoria",
    composition: "Tomato sauce, mozzarella, spicy salami, and chilli peppe",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza12.png",
    name: "Schiacciata",
    composition: "Mozzarella, tomato sauce, seafood and porcino mushrooms",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza13.png",
    name: "Cardinale",
    composition: "Tomato sauce, mozzarella and a various vegetable",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza14.png",
    name: "Americana",
    composition: "Mozzarella and sliced ​​tomato",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  },
  {
    src: "img/pizza15.png",
    name: "Valtellina",
    composition: "Tomato sauce, mozzarella, ham, and fried egg",
    calories: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`
  }
];

document.addEventListener("DOMContentLoaded", event => {
  var div = document.querySelector(".contGrid");
  var button = document.querySelector(".btn");
  imagesArr.forEach((elem, index) => {
    var innerDiv = document.createElement("div");
    var img = document.createElement("img");
    var str1 = document.createElement("p");
    var str2 = document.createElement("p");
    var str3 = document.createElement("p");
    innerDiv.classList.add("innerGridDiv");
    innerDiv.classList.add("helperRender");
    str2.classList.add("toogle");
    img.src = elem.src;
    str1.textContent = `Название: ${elem.name}`;
    str2.textContent = `Cостав: ${elem.composition}`;
    str3.textContent = `Калории: ${elem.calories}`;
    img.alt = `pizza ${index}`;
    img.classList.add("imgGrid");
    innerDiv.appendChild(img);
    innerDiv.appendChild(str1);
    innerDiv.appendChild(str2);
    innerDiv.appendChild(str3);
    div.appendChild(innerDiv);
  });
  var pageImages = Array.from(document.getElementsByTagName("img"));
  var pageDivs = Array.from(document.getElementsByClassName("helperRender"));
  var call = Array.from(document.querySelectorAll(".toogle"));
  button.addEventListener("click", event => {
    if (div.classList.contains("contGrid")) {
      div.classList.remove("contGrid");
      div.classList.add("contRow");

      call.forEach(elem => {
        elem.classList.add("hidden");
      });
      pageImages.forEach(elem => {
        elem.classList.remove("imgGrid");
        elem.classList.add("imgRow");
        elem.setAttribute("src", "img/pizza_logo.png");
      });
      pageDivs.forEach(elem => {
        elem.classList.remove("innerGridDiv");
        elem.classList.add("innerRowDiv");
      });
    } else if (div.classList.contains("contRow")) {
      div.classList.remove("contRow");
      div.classList.add("contGrid");
      call.forEach(elem => {
        elem.classList.remove("hidden");
      });
      pageImages.forEach((elem, index) => {
        elem.classList.remove("imgRow");
        elem.classList.add("imgGrid");
        elem.setAttribute("src", `img/pizza${++index}.png`);
      });
      pageDivs.forEach(elem => {
        elem.classList.remove("innerRowDiv");
        elem.classList.add("innerGridDiv");
      });
    }
  });
});

 

 
