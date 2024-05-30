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