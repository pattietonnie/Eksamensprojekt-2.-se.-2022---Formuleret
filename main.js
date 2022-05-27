// kode inspireret fra: https://www.youtube.com/watch?v=B20Getj_Zk4&t=602s

let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: 'DEN PERSONLIGE KOP - GRØN',
		tag: 'pkgroen',
		price: 320,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - SORT',
		tag: 'pksort',
		price: 320,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - BLÅ',
		tag: 'pkblaa',
		price: 320,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - DOBBELTHANK',
		tag: 'dobbelthank',
		price: 350,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - SORT',
		tag: 'pksort1',
		price: 320,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - GRØN',
		tag: 'pkgron',
		price: 320,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - BLÅ',
		tag: 'pkbla',
		price: 320,
		inCart: 0
	},
	{
		name: 'DEN PERSONLIGE KOP - GRØN//BLÅ',
		tag: 'pkgronbla',
		price: 300,
		inCart: 0
	},
	{
		name: 'TEKTONIKAKOP - BLÅ',
		tag: 'blatt',
		price: 320,
		inCart: 0
	},
	{
		name: 'TEKTONIKAKOP -SAND',
		tag: 'teksand',
		price: 320,
		inCart: 0
	},
	{
		name: 'TEKTONIKAKOP -BRUN',
		tag: 'bruntt',
		price: 340,
		inCart: 0
	},
	{
		name: 'TEKTONIKAKOP -SAND',
		tag: 'sandtt',
		price: 320,
		inCart: 0
	},
	{
		name: 'TEKTONIKAKOP - TYRKIS',
		tag: 'tektyrk',
		price: 280,
		inCart: 0
	},
	{
		name: 'GUL KOP - MED KORK REM',
		tag: 'gulkork',
		price: 280,
		inCart: 0
	},
	{
		name: 'GUL KOP - MED HANK',
		tag: 'gulmedhank',
		price: 280,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - SORT',
		tag: 'sksort2',
		price: 200,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - SORT',
		tag: 'sksort1',
		price: 200,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - SORT',
		tag: 'sksort3',
		price: 200,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - GUL',
		tag: 'skgul1',
		price: 200,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - GUL',
		tag: 'skgul2',
		price: 200,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - GRØN',
		tag: 'skgreen1',
		price: 200,
		inCart: 0
	},
	{
		name: 'STEMPELKANDE KOP - GRØN',
		tag: 'skgreen2',
		price: 200,
		inCart: 0
	},
	{
		name: 'CAFÈ LATTE KRUS- SORT//BLÅ',
		tag: 'latte1',
		price: 230,
		inCart: 0
	},
	{
		name: 'CAFÈ LATTE KRUS- GRØN',
		tag: 'latte2',
		price: 230,
		inCart: 0
	},
	{
		name: 'CAFÈ LATTE KRUS- GUL',
		tag: 'latte3',
		price: 230,
		inCart: 0
	},
	{
		name: 'TVELYS KOP',
		tag: 'tvelys1',
		price: 340,
		inCart: 0
	},
	{
		name: 'TVELYS KOP',
		tag: 'tvelys2',
		price: 280,
		inCart: 0
	},
	{
		name: 'TVELYS KOP',
		tag: 'tvelys3',
		price: 340,
		inCart: 0
	},
	{
		name: 'VESTERHAVSKOP',
		tag: 'vesterhavskop1',
		price: 280,
		inCart: 0
	},
	{
		name: 'VESTERHAVSKOP',
		tag: 'vesterhavskop2',
		price: 280,
		inCart: 0
	},
	{
		name: 'VESTERHAVSKOP',
		tag: 'vesterhavskop3',
		price: 300,
		inCart: 0
	},
];

// dette er et loop der samler alle 'carts' i en, det hjælper til at koden bliver kortere. 
for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i])
	})
}

// dette gør at produkterne bliver i kurven, selvom man reloader siden
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');

	if(productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers ) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1; 
	} 
	else {
		localStorage.setItem('cartNumbers', 1)
		document.querySelector('.cart span').textContent = 1; 
	}
	setItems(product); 
	
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	// dette betyder, "hvis der allerede er noget i kurven"
	if(cartItems != null) {
		if(cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		// det her kalder alle produkter, istedet for et specifikt produkt.
		cartItems[product.tag].inCart += 1; 
	} 
	else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}
	
	localStorage.setItem("productsInCart", JSON.stringify
	(cartItems));
}

function totalCost(product) {
	let cartCost = localStorage.getItem('totalCost');
	

	if(cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + 
		product.price);
	} 
	else {
		localStorage.setItem("totalCost", product.price);
	}

}

function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector
	(".products");
	let cartCost = localStorage.getItem('totalCost');

	if(  cartItems && productContainer ) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<section id="border">
			<button onclick="this.parentNode.remove();basketTotalContainer -='+ parseInt(price) +';border.innerHTML=amount"><img src="./images/cross.png" alt="cross" style="width:1.5rem;"></button>
				<div class="product"> 
					<img src="./images/webshop/${item.tag}.jpg" style="width:18rem;">
					<br>
					<span><p>${item.name}</p></span>
				</div>
				<div class="price"><p>Pris pr. stk. ${item.price}.00 kr</p></div>
				<div class="quantity">
					<span><p>Antal i kurv: ${item.inCart} stk. </p></span>
					</div> 
				<div id="total"> 
					Pris i alt ${item.inCart * item.price}.00 kr
				</div> 
			</section>
			`;
		});

		productContainer.innerHTML += `
		<div id="basketTotalContainer"> 
				<h3> TOTAL: ${cartCost}.00 kr</h3>
				<div class="betaling">
				<button><a href="404.html"><p>BETALING</p></a></button>
				</div>
		</div>
		`
	}


}

// Skulle gerne vise en besked om at kurven er tom, når kurven er tom
function emptyCart() {
	let emptyCart = product.innerHTML();

	if(emptyCart == "")  {
		emptyCart.style.display ='visible';
	} 
	else {
		emptyCart.style.display ='none';
	} 
}

onLoadCartNumbers(); 
displayCart();
