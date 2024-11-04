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
        }
  // Add more categories as needed
];
  let cart = [];  // Cart array to hold items

  // Function to load the menu items
  function loadMenu() {
    const menuSection = document.getElementById("menu-section");
    menuData.forEach((category) => {
      const categoryHeader = document.createElement("h2");
      categoryHeader.innerText = category.category;
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
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
          </div>
        `;
        menuSection.appendChild(menuItem);
      });
    });
  }
  
  // Add to cart function
  function addToCart(name, price) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex === -1) {
      cart.push({ name, price, quantity: 1 });
    } else {
      cart[itemIndex].quantity += 1;
    }
    document.querySelector(".view-cart-button").style.display = "block";
    updateCart();
  }
  
  // Update cart function
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";  // Clear previous items
    let totalAmount = 0;
  
    cart.forEach(item => {
      totalAmount += item.price * item.quantity;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${item.name} - ₹${item.price} x ${item.quantity}</span>
        <button onclick="changeQuantity('${item.name}', 1)">+</button>
        <button onclick="changeQuantity('${item.name}', -1)">-</button>
      `;
      cartItems.appendChild(cartItem);
    });
  
    document.getElementById("total-amount").innerText = `Total: ₹${totalAmount}`;
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
    document.getElementById("cart-modal").style.display = "block";
  }
  
  function closeCartModal() {
    document.getElementById("cart-modal").style.display = "none";
  }
  
  // Placeholder for checkout
  function checkout() {
    alert("Checkout is not implemented yet.");
  }
  
  // Load menu on page load
  document.addEventListener("DOMContentLoaded", loadMenu);