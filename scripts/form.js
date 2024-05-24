document.addEventListener("DOMContentLoaded", () => {

function getLastModifiedDateTime() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = ('0'+ (lastModified.getMonth() + 1)).slice(-2) + '/' + ('0' + lastModified.getDate()).slice(-2) + '/' + lastModified.getFullYear();
    var formattedTime = ('0'+ lastModified.getHours()).slice(-2) + ':' + ('0' + lastModified.getMinutes()).slice(-2) + ':' + ('0' + lastModified.getSeconds()).slice(-2); 
    return formattedDate + ' ' + formattedTime;
    }
    
document.getElementById('lastmodified').textContent = getLastModifiedDateTime();
})

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgrating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgrating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgrating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgrating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgrating: 5.0
  }
];   

const productSelect = document.getElementById("product");


// Populate the product select options
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);

    // Initialize localStorage counter for each product if not already set
});

// Drop down menu


const form = document.querySelector(".form1");

console.log(form);
form.addEventListener("submit", () => {
  // e.preventDefault();
  console.log("Add to local storage")
    if (localStorage.getItem("userReviews")){
        let number = parseInt(localStorage.getItem("userReviews"));
        number += 1;
        localStorage.setItem("userReviews", number);
    }
    else {
      localStorage.setItem("userReviews", 1);
      
    };
})

//-----------------------
