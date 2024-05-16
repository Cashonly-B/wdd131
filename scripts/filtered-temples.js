// Get the last date and time modified in JavaScript
// In this format 10/10/1001 10:10:10
function getLastModifiedDateTime() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = ('0'+ (lastModified.getMonth() + 1)).slice(-2) + '/' + ('0' + lastModified.getDate()).slice(-2) + '/' + lastModified.getFullYear();
    var formattedTime = ('0'+ lastModified.getHours()).slice(-2) + ':' + ('0' + lastModified.getMinutes()).slice(-2) + ':' + ('0' + lastModified.getSeconds()).slice(-2); 
    return formattedDate + ' ' + formattedTime;
    }
    
// Get the result from the function and put in back in the footer
document.getElementById('lastmodified').textContent = getLastModifiedDateTime();

// Hamburger Button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
/////////////////////////////////////////////
// Temple Pictures
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake City",
      location: "Salt Lake City, Utah",
      dedicated: "1847, July, 28",
      area: 382207,
      imageUrl: 
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
      templeName: "Preston England Temple",
      location: "Lancashire, England",
      dedicated: "1992, October, 19",
      area: 69630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765114-wallpaper.jpg"
    },
    {
      templeName: "Aba Nigeria Temple",
      location: "Aba, Abia State",
      dedicated: "2000, April, 2",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
    }
  ];

// The picture temple cards
/*document.addEventListener("DOMContentLoaded", function() {
    const templeCardsContainer = document.getElementById('templeCards');

    temples.forEach((temple) =>{
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            templeCardsContainer.appendChild(templeCard);
    });
  }); 

// Buttons
const olderLink = document.querySelector("#older");
const newerLink = document.querySelector("#newer");
const largerLink = document.querySelector("#larger");
const smallerLink = document.querySelector("#smaller");

olderLink.addEventListener("click", () => {
    templeCardsContainer{temples.filter(temple => temple.dedicated.)}
})
*/

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector("#templeCards").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#templeCards").appendChild(card);
    })
}

const olderLink = document.querySelector("#older");
const newerLink = document.querySelector("#newer");
const largerLink = document.querySelector("#larger");
const smallerLink = document.querySelector("#smaller");

olderLink.addEventListener("click", () => {
    let older = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    createTempleCard(older);
});
// olderLink.addEventListener("click", () => {
//     let older = temples.filter(temple => temple.location.includes("Utah"));
// });
newerLink.addEventListener("click", () => {
    let newer = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    createTempleCard(newer);
});
largerLink.addEventListener("click", () => {
    let old = temples.filter(temple => temple.area > 90000);
    createTempleCard(old);
});
smallerLink.addEventListener("click", () => {
    let old = temples.filter(temple => temple.area < 10000);
    createTempleCard(old);
});

// Home button
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    createTempleCard(temples);
});