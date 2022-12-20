let products = {
    data: [
      {
        productName: "Tuna Sisig",
        description: "The fish version of pork sisig served in a sizzling plate",
        category: "Tuna",
        image: "sisig.jpeg",
      },
      {
        productName: "Tinolang Manok",
        category: "Chicken",
        description: "A nourishing Filipino chicken soup",
        image: "tinola.jpg",
      },
      {
        productName: "Chopsuey",
        description: "Filipino-style stir fried vegetables",
        category: "Vegetable",
        image: "chopsuey.jpeg",
      },
      {
        productName: "Chicken Salad",
        description: "A salad with chicken as the main ingredient",
        category: "Chicken",
        image: "salad.jpg",
      },
      {
        productName: "Really Green Smoothie",
        description: "Green but sweet and tasty",
        category: "Vegetable",
        image: "smoothie.jpeg",
      },
      {
        productName: "Baked Eggs with Spinach",
        description: "Good for high blood pressure",
        category: "Egg",
        image: "spinach.jpeg",
      },
      {
        productName: "One-Pot Garlicky Shrimp and Broccoli",
        description: "A simple one-pot weeknight dinner",
        category: "Shrimp",
        image: "shrimp.jpeg",
      },
      {
        productName: "Chicken and White Bean Soup",
        description: "Healthy Italian-inspired soup",
        category: "Chicken",
        image: "bean.jpg",
      },
      {
        productName: "Butternut Squash Soup",
        description: "Smooth and creamy",
        category: "Vegetable",
        image: "butternut.jpeg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    let description = document.createElement("h5");
  description.innerText = i.description;
  container.appendChild(description);
  
  
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  