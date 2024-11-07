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
  // Sample data
  {
    category: "Starters",
    items: [
      { name: "Spring Rolls", description: "Crispy vegetable rolls.", price: 120, imageUrl: "rolls.jpg" },
      { name: "Paneer Tikka", description: "Grilled paneer with spices.", price: 180, imageUrl: "rolls.jpg" }
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Margherita Pizza",
        description: "Classic cheese and tomato pizza.",
        price: 200,
        imageUrl: "biriyani.jpg"
      },
      {
        name: "Pasta Alfredo",
        description: "Creamy alfredo pasta with mushrooms.",
        price: 250,
        imageUrl: "biriyani.jpg"
      }
    ]
  },
  {
    category: "Salads",
    items: [
      {
        name: "Caesar Salad",
        description: "Fresh lettuce, croutons, and Caesar dressing.",
        price: 150,
        imageUrl: "salad.jpg"
      },
      {
        name: "Greek Salad",
        description: "Mixed greens with olives and feta cheese.",
        price: 170,
        imageUrl: "salad.jpg"
      }
    ]
  },

  // Add more categories as needed
];
let cart = [];  // Cart array to hold items

function loadMenu() {
  const menuSection = document.getElementById("menu-section");
  const categoryNav = document.querySelector('.category-nav'); // Select the category navigation

  menuData.forEach((category) => {
    const categoryId = category.category.toLowerCase().replace(/\s+/g, '-'); // Create a unique ID for the category

    // Create category link
    const categoryLink = document.createElement("a");
    categoryLink.href = `#${categoryId}`; // Set href to the category ID
    categoryLink.innerText = category.category;
    categoryLink.classList.add('category-link');
    categoryLink.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('active-link');
      });

      // Add 'active-link' class to the clicked link
      categoryLink.classList.add('active-link');

      const categoryHeader = document.getElementById(categoryId);

      const offset = categoryNav.offsetHeight; // Get the height of the navbar

      window.scrollTo({
        top: categoryHeader.offsetTop - offset, // Scroll with offset
        behavior: 'smooth'
      });
      // document.getElementById(categoryId).scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the category
    });

    // Append category link to navigation
    categoryNav.appendChild(categoryLink);

    // Create category header in the menu section
    const categoryHeader = document.createElement("h2");
    categoryHeader.innerText = category.category;
    categoryHeader.id = categoryId; // Set the ID for the category header
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

  // Create the View Cart button
  const cartBtn = document.createElement('p');
  cartBtn.classList.add('cart-p');
  cartBtn.innerHTML = `<button onclick="openCartModal()" class="view-cart-button" style="display:none;">View Cart</button>`;

  // Append the cart button to the menu section
  menuSection.appendChild(cartBtn);
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
        <span>${item.name} - ₹${item.price} x ${item.quantity}</span>
      </div>
      <div class="buttons-container">
        <button onclick="changeQuantity('${item.name}', 1)">+</button>
        <button onclick="changeQuantity('${item.name}', -1)">-</button>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });
  const totalItems = cart.length;
  document.getElementById("total-amount").innerText = `Total: ₹${totalAmount}`;
  const cartBtn = document.querySelector(".view-cart-button")

  console.log(cartBtn);
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
// Load menu on page load
document.addEventListener("DOMContentLoaded", loadMenu);