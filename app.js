let cart = document.querySelector('.total-cart');
let tbl = document.querySelector('.show-cart');
let image = document.querySelector('.image-item');
//function to click the button on cart 
let btn1 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 351; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "HawaiianPizza";
  x.setAttribute("src", "images/hawaiian-pizza.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "pizza");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  
}

let btn2 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 451; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/delicious-italian-food.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "pizza");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "ItalianPizza";
}

let btn3 = () => {
  let x = document.createElement("img");
  let holder5 = "";
  for(i = 0; i < 501; i++){
    holder5 = i + " ";
    console.log(holder5);
  }
  x.setAttribute("src", "images/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "pizza");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder5;
  tbl.innerHTML = "AmericanStyle Pizza";
}
//coffee add item
let btn4 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 76; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  x.setAttribute("src", "images/coffee-cups-with-cardboard-grip.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "coffee");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder4;
  tbl.innerHTML = "Small combo";
}

let btn5 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 171; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/covered-paper-coffee-cups-different-sizes-isolated-white.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "coffee");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "SmallToLarge Combo";
}

let btn6 = () => {
  let holder5 = "";
  let x = document.createElement("img");
  for(i = 0; i < 171; i++){
    holder5 = i + " ";
    console.log(holder5);
  }
  x.setAttribute("src", "images/frappe-coffee-white-removebg-preview.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "coffee");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder5;
  tbl.innerHTML = "Small Special Mocha Flavor";
}
//milktea cart 
let btn7 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 51; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "TaroFlavor";
  x.setAttribute("src", "images/cold-coffee-drink.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "milktea");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn8 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 71; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/iced-coffee-removebg-preview.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "milktea");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "MochaFlavor";
}

let btn9 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 81; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/milktea.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "milktea");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "MochaFlavor With Zago";
}
//burger item cart
let btn10 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 81; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "Regular Burger";
  x.setAttribute("src", "images/hamburger-with-cheese-lettuce-tomatoes.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "burger");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn11 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 151; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/roast-beef-cheese-bun-sandwich.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "burger");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Hamburger RoastBeef Cheese";
}

let btn12 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 121; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/bacon-burger.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "burger");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Hamburger With Bacon";
}
//fries item cart
let btn13 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 31; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "Regular Fries";
  x.setAttribute("src", "images/french-fries.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fries");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn14 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 121; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/french-fries (1).jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fries");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Medium Fries";
}

let btn15 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 251; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/potato-fry-with-ketchup-cola-drink.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fries");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Potato Fry With Cola";
}
//somai item cart 
let btn16 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 26; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "Pork Shrimp";
  x.setAttribute("src", "images/porkshrimp.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "somai");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn17 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 76; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/somairice.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fries");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Somai Rice";
}

let btn18 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 151; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/somaiwithegg.PNG");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "somai");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "SomaiRice With Egg";
}
//nachos item cart 
let btn19 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 86; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "Nachos With Mushroom";
  x.setAttribute("src", "images/nachoswithmushroom.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "nachos");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn20 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 51; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/Nachoswcheese.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "nachos");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Nachos With Cheese";
}

let btn21 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 131; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/nachoswbeef.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "nachos");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Nachos With Beef";
}
//fried chicken item cart
let btn22 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 301; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "Bucket FriedChicken";
  x.setAttribute("src", "images/1bucket.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fc");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn23 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 121; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/4pcs.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fc");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "4pcs With Special Sauce";
}

let btn24 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 151; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/buttermilk-removebg-preview.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "fc");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Fried Chicken ButterMilk";
}
//beefsteak item cart
let btn25 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 451; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "BeefSteak With Corn";
  x.setAttribute("src", "images/beefsteak1.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "bs");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn26 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 201; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/regular.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "bs");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "Regular BeefSteak";
}

let btn27 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 501; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/big.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "bs");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "BigSize BeefSteak";
}
//porkchop item cart
let btn28 = () => {
  let holder4 = "";
  let x = document.createElement("img");
    for(i = 0; i < 501; i++){
      holder4 = i + " ";
      console.log(holder4);
  }
  cart.innerHTML = holder4;
  tbl.innerHTML = "RegularTwo PorkChop";
  x.setAttribute("src", "images/2pork-removebg-preview.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "pc");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
}

let btn29 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 251; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/porkwrice.jpg");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "bs");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "PorkChop With Rice";
}

let btn30 = () => {
  let holder8 = "";
  let x = document.createElement("img");
  for(i = 0; i < 351; i++){
    holder8 = i + " ";
    console.log(holder8)
  }
  x.setAttribute("src", "images/porkwegg.png");
  x.setAttribute("width", "100px");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "bs");
  document.querySelector('.image-item').appendChild(x);
  console.log(x);
  cart.innerHTML = holder8;
  tbl.innerHTML = "PorkChop With Rice&Egg";
}
//triggered alert
const alertPlaceholder = document.querySelector('.liveAlertPlaceholder');

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="fade show alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-cls btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
const alertTrigger = document.querySelector('#liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Item Successfully, Added!', 'success')
  })

}

const newAlert = document.querySelector('#newAlertBtn');
if (newAlert) {
  newAlert.addEventListener('click', () => {
    alert('Item Successfully, Added!', 'success')
  }) 

}

const thirdAlert = document.querySelector('#thirdAlertBtn');
if (thirdAlert) {
  thirdAlert.addEventListener('click', () => {
    alert('Item Successfully, Added!', 'success')
  })

}
//clear cart
const clearCart = document.querySelector('.clear-cart');
let clrCart = null;

  if(clearCart){
    clearCart.addEventListener('click', () => {
      cart.innerHTML = clrCart;
      tbl.innerHTML = clrCart;
      image.innerHTML = clrCart;
    })
  }
//audio soundj
       var audio = new Audio("https://audio.jukehost.co.uk/foQjVasCo3AXyXwJGyXduYvFqle5bOzv");

       audio.oncanplaythrough = function(){
        audio.play();
      }

      audio.loop = true;

      audio.onended = function(){
      audio.play();
  }
function emailSend(){
//smtp js
   const eml = document.querySelector('.eml').value;
   const user = document.querySelector('.user').value;
   const cmnt = document.querySelector('.cm').value;
    //write html format 
   let ebody = "<b>Email: </b>" + eml + "<br><b> Username: </b>" + user + "<br><b>Feedback: </b>" + cmnt;
   console.log(ebody)
  //email code here 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kawrusofficial@gmail.com",
    Password : "23718C6AEFDB391B627C3BD3F61EA1EC9939",
    To : "kawrusofficial@gmail.com",
    From : "kawrusofficial@gmail.com",
    Subject : "Email from " + eml,
    Body : ebody
  }).then(
   message => console.log(message)
  );
//form reset
  let form = document.querySelector('.form-contact');
  form.reset();
}