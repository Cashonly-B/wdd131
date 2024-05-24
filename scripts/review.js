let countDisplay = document.querySelector("#reviewCountDisplay")


let count = localStorage.getItem("userReviews")
console.log(count)

console.log(countDisplay)
countDisplay.textContent = String(count)