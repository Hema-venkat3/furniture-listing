import products from "../../data/products.json";


let product_listEl = document.getElementById("product_list");

products.forEach((product) =>{
    product_listEl.appendChild(elementStyling(product));
});

function elementStyling(product){
// Create a new element #FBEAEB
let liEl = document.createElement('li');
liEl.style.backgroundColor = '#CFEFBA';
liEl.style.margin = '20px';
liEl.style.textAlign = 'center';
liEl.style.borderRadius = "5px";
liEl.style.lineHeight = "35px";

const h3El = document.createElement('h3');
h3El.style.fontWeight = '600';
h3El.style.fontSize = '30px';
h3El.style.padding = "10px";
h3El.style.color = '#088F8F';
// #1995AD

const imgEl = document.createElement('img');
imgEl.style.width = '300px';
imgEl.style.height = '300px';
imgEl.style.borderRadius = "5px";
imgEl.style.display = 'block';
imgEl.style.margin = 'auto';
imgEl.style.paddingTop = "35px";
imgEl.src = product.imgUrl; // Set the actual image source URL
imgEl.alt = product.title;    // Set alt text for accessibility
imgEl.style.transition = 'transform 0.3s ease';

imgEl.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

imgEl.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

h3El.textContent = product.title;

const pEl = document.createElement('p');
pEl.innerHTML = product.description + '<br>';

const spanEl = document.createElement('span');
spanEl.innerHTML = `Star Ratings: ${product.star_ratings}` + '<br>'; 
// spanEl.style.color = '#1995AD';

const span2El = document.createElement('span');
span2El.style.fontSize = '20px';
span2El.style.fontWeight = '500';
span2El.style.color = '#1995AD';
span2El.innerHTML = `Price : ${product.Price}` + '<br>';

const smallEl = document.createElement('small');
// smallEl.style.color = 'rgb(251,146,60)';
smallEl.style.color = 'gray';
// smallEl.style.fontWeight = '80px'
smallEl.innerHTML = product.delivery + '<br>';

const buttonEl = document.createElement('button');
buttonEl.style.color = 'white';
buttonEl.style.borderRadius = '4px';
buttonEl.style.width = '100px';
buttonEl.style.padding = '5px';
buttonEl.style.background = '#088F8F';
buttonEl.style.margin = '10px';
buttonEl.innerHTML = product.button;
// #1995AD

buttonEl.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
});

buttonEl.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});

liEl.appendChild(imgEl);
liEl.appendChild(h3El);
liEl.appendChild(pEl);
liEl.appendChild(spanEl);
liEl.appendChild(span2El);
liEl.appendChild(smallEl);
liEl.appendChild(buttonEl);

return liEl;
}

console.log(products);









