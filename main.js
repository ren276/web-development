const currentDate = new Date();
const user = document.getElementById("root");
const cardCount = document.getElementById("totalCount");
const image = document.createElement('img')
const delivery = document.getElementById("delivery");
const letter = document.getElementById("alphabet");
const price = document.getElementById("price");

const ranks = document.getElementsByClassName("ranks");


const productData = [
  {
    shoeName: "Nike Air",
    shoePrice: 2350,
    starRating: 5.0,
    deliveryTime: new Date("14 Jan"),
    shoeImg:'1.png',
    
  },
  {
    shoeName: "Stelatoes",
    shoePrice: 1550,
    starRating: 4.0,
    deliveryTime: new Date("15 Jan"),
    shoeImg: "5.png",
  },
  {
    shoeName: "Woodland",
    shoePrice: 2999,
    starRating: 3.0,
    deliveryTime: new Date("25 Jan"),
    shoeImg: "6.png",
  },
  {
    shoeName: "Campus ",
    shoePrice:999,
    starRating: 5.0,
    deliveryTime: new Date("10 Jan"),
    shoeImg: "3.png",
  },
  {
    shoeName: "The Shoe Box",
    shoePrice: 4999,
    starRating: 2.0,
    deliveryTime: new Date("24 Jan"),
    shoeImg: "4.png",
  },
  {
    shoeName: "Adidas",
    shoePrice: 1999 ,
    starRating: 5.0,
    deliveryTime: new Date("20 Jan"),
    shoeImg: "9.png",
  },
  {
    shoeName: "Funky Shoes",
    shoePrice: 3999,
    starRating: 1.0,
    deliveryTime: new Date("20 Jan"),
    shoeImg: "8.png",
  },
  {
    shoeName: "Step in Shoes",
    shoePrice: 3599,
    starRating: 3.0,
    deliveryTime: new Date("11 Jan"),
    shoeImg: "7.png",
  },
  {
    shoeName: "Westside",
    shoePrice: 5699,
    starRating: 2.0,
    deliveryTime: new Date("18 Jan"),
    shoeImg: "2.png",
  },
];

const cardGenerator = (element) => {
  return `
  <div class="card m-3 mx-4 p-1" style="width: 18rem;">
  <img src="${
    element.shoeImg
  }" class="card-img-top" alt="shoe image" height="250px">
  
  <div class="card-body">

      <div class="d-flex justify-content-between align-items-center">           
          <h5 class="card-title fw-bolder">${element.shoeName}</h5>
          <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
              <img src="star 1.png" alt="star image" class="mx-1" height="17"> <span id="star-rating" class="fw-bold">${
                element.starRating
              }</span>
          </span>
      </div>
    
      <h4 class="fs-1 fw-bold fontcolor-red">&#8377;${element.shoePrice}</h4>
    <p class="card-text">Delivery by: ${element.deliveryTime.toDateString()}</p>
  </div>

</div>`;
};

letter.addEventListener("click", () => {
  console.log("click on letter");
  user.innerHTML = "";
  const letterSort = (first, second) => {
    if (first.shoeName > second.shoeName) {
      return 1;
    } else if (first.shoeName < second.shoeName) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(letterSort).forEach((element) => {
    user.innerHTML += cardGenerator(element);
  });
});

//this will handle the sorting in pricing (high to low)
price.addEventListener("click", () => {
  console.log("click on price");
  user.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseInt(first.shoePrice) > parseInt(second.shoePrice)) {
      return -1;
    } else if (parseInt(first.shoePrice) < parseInt(second.shoePrice)) {
      return 1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(priceSort).forEach((element) => {
    user.innerHTML += cardGenerator(element);
  });
});

//this will handle the sorting according to delivery time
delivery.addEventListener("click", () => {
  user.innerHTML = "";

  const deliveryTimeSort = (first, second) => {
    if (first.deliveryTime - currentDate > second.deliveryTime - currentDate) {
      return 1;
    } else if (
      first.deliveryTime - currentDate <
      second.deliveryTime - currentDate
    ) {
      return -1;
    } else {
      return 0;
    }
  };

  cardCount.innerHTML = 9;
  productData.sort(deliveryTimeSort).forEach((element) => {
    user.innerHTML += cardGenerator(element);
  });
});

// this will handle the click event on the filters
Array.from(ranks).forEach((element) => {
  element.addEventListener("click", (e) => {
    user.innerHTML = "";
    let i = 0;
    const targetRank = parseInt(e.target.innerHTML.split("")[0]);

    productData.forEach((element) => {
      if (parseInt(element.starRating) == targetRank) {
        user.innerHTML += cardGenerator(element);
        i += 1;
      }
    });

    cardCount.innerHTML = i;
  });
});


productData.forEach((element) => {
  user.innerHTML += cardGenerator(element);
});