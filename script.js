// Sample menu data with categories
// const menuData = [
//     {
//       category: "Starters",
//       items: [
//         {
//           name: "Spring Rolls",
//           description: "Crispy and delicious vegetable rolls.",
//           price: "₹120",
//           imageUrl: "rolls.jpg"
//         },
//         {
//           name: "Paneer Tikka",
//           description: "Grilled paneer marinated with spices.",
//           price: "₹180",
//           imageUrl: "rolls.jpg"
//         }
//       ]
//     },
//     {
//       category: "Main Course",
//       items: [
//         {
//           name: "Margherita Pizza",
//           description: "Classic cheese and tomato pizza.",
//           price: "₹200",
//           imageUrl: "biriyani.jpg"
//         },
//         {
//           name: "Pasta Alfredo",
//           description: "Creamy alfredo pasta with mushrooms.",
//           price: "₹250",
//           imageUrl: "biriyani.jpg"
//         }
//       ]
//     },
//     {
//       category: "Salads",
//       items: [
//         {
//           name: "Caesar Salad",
//           description: "Fresh lettuce, croutons, and Caesar dressing.",
//           price: "₹150",
//           imageUrl: "salad.jpg"
//         },
//         {
//           name: "Greek Salad",
//           description: "Mixed greens with olives and feta cheese.",
//           price: "₹170",
//           imageUrl: "salad.jpg"
//         }
//       ]
//     }
//   ];
const menuData = [
  {
    category: "Starters",
    items: [
      { name: "Spring Rolls", description: "Crispy vegetable rolls.", price: 120, imageUrl: "rolls.jpg" },
      { name: "Paneer Tikka", description: "Grilled paneer with spices.", price: 180, imageUrl: "rolls.jpg" },
      { name: "Stuffed Mushrooms", description: "Mushrooms filled with cheese and herbs.", price: 150, imageUrl: "rolls.jpg" },
      { name: "Garlic Bread", description: "Toasted bread with garlic butter.", price: 90, imageUrl: "rolls.jpg" },
      { name: "Chicken Wings", description: "Spicy and crispy wings.", price: 200, imageUrl: "rolls.jpg" }
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Margherita Pizza", description: "Classic cheese and tomato pizza.", price: 200, imageUrl: "biriyani.jpg" },
      { name: "Pasta Alfredo", description: "Creamy alfredo pasta with mushrooms.", price: 250, imageUrl: "biriyani.jpg" },
      { name: "Butter Chicken", description: "Chicken in creamy tomato sauce.", price: 300, imageUrl: "biriyani.jpg" },
      { name: "Veg Biryani", description: "Spiced rice with vegetables.", price: 220, imageUrl: "biriyani.jpg" },
      { name: "Paneer Butter Masala", description: "Paneer in rich butter sauce.", price: 280, imageUrl: "biriyani.jpg" }
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Caesar Salad", description: "Fresh lettuce, croutons, and Caesar dressing.", price: 150, imageUrl: "salad.jpg" },
      { name: "Greek Salad", description: "Mixed greens with olives and feta cheese.", price: 170, imageUrl: "salad.jpg" },
      { name: "Caprese Salad", description: "Tomato, mozzarella, and basil.", price: 140, imageUrl: "salad.jpg" },
      { name: "Quinoa Salad", description: "Quinoa with veggies and herbs.", price: 180, imageUrl: "salad.jpg" },
      { name: "Fruit Salad", description: "Mixed seasonal fruits.", price: 120, imageUrl: "salad.jpg" }
    ]
  },
  {
    category: "Soups",
    items: [
      { name: "Tomato Soup", description: "Creamy tomato soup.", price: 90, imageUrl: "rolls.jpg" },
      { name: "Minestrone Soup", description: "Italian vegetable soup.", price: 100, imageUrl: "rolls.jpg" },
      { name: "Chicken Soup", description: "Warm chicken soup with herbs.", price: 120, imageUrl: "rolls.jpg" },
      { name: "Mushroom Soup", description: "Creamy mushroom soup.", price: 110, imageUrl: "rolls.jpg" },
      { name: "Corn Soup", description: "Sweet corn and veggies.", price: 80, imageUrl: "rolls.jpg" }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Lemonade", description: "Refreshing lemon drink.", price: 50, imageUrl: "salad.jpg" },
      { name: "Iced Tea", description: "Chilled tea with lemon.", price: 60, imageUrl: "salad.jpg" },
      { name: "Smoothie", description: "Blended fruit smoothie.", price: 120, imageUrl: "salad.jpg" },
      { name: "Coffee", description: "Fresh brewed coffee.", price: 70, imageUrl: "salad.jpg" },
      { name: "Mojito", description: "Mint and lime cooler.", price: 80, imageUrl: "salad.jpg" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Brownie", description: "Chocolate brownie.", price: 100, imageUrl: "biriyani.jpg" },
      { name: "Ice Cream", description: "Vanilla ice cream.", price: 80, imageUrl: "biriyani.jpg" },
      { name: "Gulab Jamun", description: "Sweet dumplings in syrup.", price: 90, imageUrl: "biriyani.jpg" },
      { name: "Cheesecake", description: "Creamy cheesecake.", price: 150, imageUrl: "biriyani.jpg" },
      { name: "Fruit Tart", description: "Tart filled with fresh fruits.", price: 130, imageUrl: "biriyani.jpg" }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Veggie Sandwich", description: "Grilled veggie sandwich.", price: 90, imageUrl: "rolls.jpg" },
      { name: "Club Sandwich", description: "Classic club sandwich.", price: 120, imageUrl: "rolls.jpg" },
      { name: "Grilled Cheese", description: "Cheesy grilled sandwich.", price: 100, imageUrl: "rolls.jpg" },
      { name: "Chicken Sandwich", description: "Chicken-filled sandwich.", price: 130, imageUrl: "rolls.jpg" },
      { name: "Egg Sandwich", description: "Egg and mayo sandwich.", price: 80, imageUrl: "rolls.jpg" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Espresso", description: "Strong black coffee.", price: 60, imageUrl: "salad.jpg" },
      { name: "Latte", description: "Milky coffee.", price: 80, imageUrl: "salad.jpg" },
      { name: "Green Tea", description: "Refreshing green tea.", price: 50, imageUrl: "salad.jpg" },
      { name: "Hot Chocolate", description: "Rich chocolate drink.", price: 100, imageUrl: "salad.jpg" },
      { name: "Milkshake", description: "Thick and creamy shake.", price: 120, imageUrl: "salad.jpg" }
    ]
  },
  {
    category: "Burgers",
    items: [
      { name: "Veg Burger", description: "Burger with veggie patty.", price: 120, imageUrl: "biriyani.jpg" },
      { name: "Cheese Burger", description: "Burger with cheese.", price: 150, imageUrl: "biriyani.jpg" },
      { name: "Chicken Burger", description: "Burger with chicken patty.", price: 170, imageUrl: "biriyani.jpg" },
      { name: "Fish Burger", description: "Burger with fish fillet.", price: 180, imageUrl: "biriyani.jpg" },
      { name: "BBQ Burger", description: "Burger with BBQ sauce.", price: 160, imageUrl: "biriyani.jpg" }
    ]
  },
  {
    category: "Pasta",
    items: [
      { name: "Spaghetti Bolognese", description: "Spaghetti with meat sauce.", price: 220, imageUrl: "rolls.jpg" },
      { name: "Penne Arrabbiata", description: "Spicy tomato sauce pasta.", price: 200, imageUrl: "rolls.jpg" },
      { name: "Fettuccine Alfredo", description: "Pasta with alfredo sauce.", price: 250, imageUrl: "rolls.jpg" },
      { name: "Pesto Pasta", description: "Pasta with pesto sauce.", price: 230, imageUrl: "rolls.jpg" },
      { name: "Lasagna", description: "Layered pasta with cheese.", price: 270, imageUrl: "rolls.jpg" }
    ]
  },
  {
    category: "Pizza",
    items: [
      { name: "Pepperoni Pizza", description: "Pizza with pepperoni.", price: 250, imageUrl: "biriyani.jpg" },
      { name: "Hawaiian Pizza", description: "Pizza with pineapple and ham.", price: 240, imageUrl: "biriyani.jpg" },
      { name: "BBQ Chicken Pizza", description: "Pizza with BBQ chicken.", price: 260, imageUrl: "biriyani.jpg" },
      { name: "Veggie Pizza", description: "Pizza with mixed vegetables.", price: 220, imageUrl: "biriyani.jpg" },
      { name: "Mushroom Pizza", description: "Pizza with mushrooms.", price: 230, imageUrl: "biriyani.jpg" }
    ]
  },
  {
    category: "Rice Dishes",
    items: [
      { name: "Fried Rice", description: "Rice with veggies and soy sauce.", price: 150, imageUrl: "salad.jpg" },
      { name: "Egg Fried Rice", description: "Fried Rice with veggies and soy sauce", price: 180, imageUrl: "salad.jpg" }
    ]
  }
  ]
let cart = [];  // Cart array to hold items
let selected = undefined;
function loadMenu(resturanId) {
  console.log(resturanId);
  
  const menuSection = document.getElementById("menu-section");
  const categoryNav = document.querySelector('.category-nav');
  categoryNav.style.overflowX = "auto"; // Ensure horizontal scrolling is enabled
  categoryNav.style.whiteSpace = "nowrap"; // Prevent wrapping, allowing the categories to be on a single line

  menuData.forEach((category, index) => {
    const categoryId = category.category.toLowerCase().replace(/\s+/g, '-');

    // Create category link
    const categoryLink = document.createElement("a");
    categoryLink.href = `#${categoryId}`;
    categoryLink.innerText = category.category;
    categoryLink.classList.add('category-link');
    categoryLink.style.display = "inline-block"; // Make sure links are inline for horizontal scrolling
    categoryLink.addEventListener('click',(e)=>navLinkClick(categoryId,e))
    if(index == 0){
      categoryLink.classList.add('active-link')
    }
    categoryNav.appendChild(categoryLink);

    categoryLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.category-link').forEach(link => link.classList.remove('active-link'));
      categoryLink.classList.add('active-link');

      const categoryHeader = document.getElementById(categoryId);
      const offset = categoryNav.offsetHeight;

      window.scrollTo({
        top: categoryHeader.offsetTop - offset,
        behavior: 'smooth'
      });
    });

    const categoryHeader = document.createElement("h2");
    categoryHeader.innerText = category.category;
    categoryHeader.id = categoryId;
    menuSection.appendChild(categoryHeader);

    category.items.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      menuItem.innerHTML = `        
        <img src="${item.imageUrl}" alt="${item.name}" class="menu-image">
        <div class="menu-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>₹${item.price}</p>
          <button onclick="addToCart('${item.name}', ${item.price})" class="add-cart">Add to Feast</button>
        </div>
      `;
      menuSection.appendChild(menuItem);
    });
  });


  const cartBtn = document.createElement('p');
  cartBtn.classList.add('cart-p');
  cartBtn.innerHTML = `<button onclick="openCartModal()" class="view-cart-button" style="display:none;">View Cart</button>`;
  menuSection.appendChild(cartBtn);

  // IntersectionObserver options to reduce flickering
  const observerOptions = {
    root: null,
    rootMargin: `-${categoryNav.offsetHeight}px 0px 0px 0px`,
    threshold: 0.5 // Adjust this for how much of the section should be in view to trigger the observer
  };

  let debounceTimer;
  const observer = new IntersectionObserver((entries) => {
    clearTimeout(debounceTimer); // Clear any previous timer
  
    // Set a debounce timer to stop updates until scrolling completes
    debounceTimer = setTimeout(() => {
      entries.forEach(entry => {
        const categoryLink = document.querySelector(`a[href="#${entry.target.id}"]`);
  
        if (entry.isIntersecting) {
          let active = document.querySelector(".active-link");
          document.querySelectorAll('.category-link').forEach(link => link.classList.remove('active-link'));
  
          if (categoryLink) {
            categoryLink.classList.add('active-link');
  
            if (document.querySelector('.active-link') !== active) {
              categoryLink.scrollIntoView({
                behavior: "smooth",
                inline: "center"
              });
            }
          }
        }
      });
    }, 250); // Adjust the delay (in milliseconds) as needed
  }, observerOptions);
  
  

let scrollTimeout;

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Clear the previous timeout if scrolling is still happening
  clearTimeout(scrollTimeout);

  // Set a new timeout to detect when scrolling has stopped
  scrollTimeout = setTimeout(() => {
    console.log('Scrolling has stopped!');
    selected = undefined
  }, 200); // 200ms delay to wait after scrolling stops (you can adjust this value)
});

  // Observing each category header
  document.querySelectorAll("#menu-section h2").forEach(header => {
    observer.observe(header);
  });
}
function navLinkClick(categoryId, e){
  e.preventDefault();
  selected = categoryId
}
// Call loadMenu on page load
document.addEventListener("DOMContentLoaded", loadMenu);


// Add to cart function
function addToCart(name, price) {
  const menuSection = document.getElementById("menu-section");
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex === -1) {
    cart.push({ name, price, quantity: 1 });
  } else {
    cart[itemIndex].quantity += 1;
  }
  updateCart();
}

// Update cart function
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";  // Clear previous items
  let totalAmount = 0;

  cart.forEach((item, index) => {
    totalAmount += item.price * item.quantity;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div>
        <span>${item.name} - ₹${item.price} </span>
      </div>
      <div class="buttons-container">
        <button onclick="changeQuantity('${item.name}', 1)">+</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${item.name}', -1)">-</button>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });
  const totalItems = cart.length;
  document.getElementById("total-amount").innerText = `Total: ₹${totalAmount}`;
  const cartBtn = document.querySelector(".view-cart-button")

  // cartBtn.style.display = "block";
  cart
  cartBtn.innerHTML = `
    <span class="cart-info-left">${totalItems}</span>
    <span>Your Feast</span>
    <span class="cart-info-right"> ₹${totalAmount.toFixed(2)}</span>
  `;
  cartBtn.style.display = "block"
}

// Change item quantity
function changeQuantity(name, delta) {
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);  // Remove item if quantity is zero
    }
  }
  updateCart();
  if (cart.length === 0) {
    document.querySelector(".view-cart-button").style.display = "none";
    closeCartModal();
  }
}

// Open and close cart modal
function openCartModal() {
  document.getElementById("cart-modal").style.display = "flex";
}

function closeCartModal() {
  document.getElementById("cart-modal").style.display = "none";
}

// Placeholder for checkout
function checkout() {
  alert("Checkout is not implemented yet.");
}
// Your existing JavaScript code...

// let lastScrollTop = 0; // Variable to track the last scroll position
// const categoryNav = document.querySelector('.category-nav'); // Select the navigation element

// window.addEventListener('scroll', function() {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

//     if (currentScroll > lastScrollTop) {
//         // Scrolling down, hide the navigation
//         categoryNav.style.top = '0'; // Adjust this value based on the height of your nav
//         categoryNav.style.position = 'fixed'

//     } else {
//         // Scrolling up, show the navigation
//         categoryNav.style.top = '-60px'; // Reset to its original position at the top
//         categoryNav.style.position = 'sticky'
//     }

//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
// });

 // Get the query string from the URL
 const queryString = window.location.search;

 // Parse the query string
 const urlParams = new URLSearchParams(queryString);

 // Retrieve specific query parameters
 const param1 = urlParams.get('param1');
//  const param2 = urlParams.get('param2');

 // Display the parameters on the page or use them as needed
 if (param1) {
  console.log(param1);
  document.addEventListener("DOMContentLoaded", ()=>loadMenu(param1));
  //  document.write(`<p>Parameter 1: ${param1}</p>`);
 }
 else{
  document.addEventListener("DOMContentLoaded", ()=>loadMenu(param1 = ''));
 }
  // Google Drive file ID
  const fileId = "1QY9cvGNiNSKNYVNKp3FeJ9rW8K9qXyyh";

  // Direct download URL format
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

  // Fetch the JSON file and display it
  fetch(url)
      .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
      })
      .then(data => {
        console.log(data);
        
          // document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
          document.getElementById('jsonData').textContent = `Error: ${error.message}`;
      });
// Load menu on page load
