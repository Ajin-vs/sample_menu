// Sample menu data with categories
const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Spring Rolls",
          description: "Crispy and delicious vegetable rolls.",
          price: "₹120",
          imageUrl: "rolls.jpg"
        },
        {
          name: "Paneer Tikka",
          description: "Grilled paneer marinated with spices.",
          price: "₹180",
          imageUrl: "rolls.jpg"
        }
      ]
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Margherita Pizza",
          description: "Classic cheese and tomato pizza.",
          price: "₹200",
          imageUrl: "biriyani.jpg"
        },
        {
          name: "Pasta Alfredo",
          description: "Creamy alfredo pasta with mushrooms.",
          price: "₹250",
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
          price: "₹150",
          imageUrl: "salad.jpg"
        },
        {
          name: "Greek Salad",
          description: "Mixed greens with olives and feta cheese.",
          price: "₹170",
          imageUrl: "salad.jpg"
        }
      ]
    }
  ];
  
  // Function to load menu items dynamically with category headers and collapse buttons
  function loadMenu() {
    const menuSection = document.getElementById("menu-section");
    menuData.forEach((category, index) => {
      // Create category header with collapse button
      const categoryHeader = document.createElement("div");
      categoryHeader.classList.add("category-header");
  
      const categoryTitle = document.createElement("h2");
      categoryTitle.innerText = category.category;
  
      const collapseButton = document.createElement("button");
      collapseButton.classList.add("collapse-button");
      collapseButton.innerText = "▼"; // Initially set to expanded arrow
      collapseButton.onclick = () => toggleCategory(index);
  
      categoryHeader.appendChild(categoryTitle);
      categoryHeader.appendChild(collapseButton);
      menuSection.appendChild(categoryHeader);
  
      // Create menu items container
      const itemsContainer = document.createElement("div");
      itemsContainer.classList.add("items-container");
      itemsContainer.id = `category-${index}`;
      itemsContainer.style.display = "block"; // Initially visible
  
      // Create menu items
      category.items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
  
        menuItem.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.name}" class="menu-image">
          <div class="menu-content">
            <h3 class="menu-title">${item.name}</h3>
            <p class="menu-description">${item.description}</p>
            <p class="menu-price">${item.price}</p>
          </div>
        `;
  
        itemsContainer.appendChild(menuItem);
      });
  
      menuSection.appendChild(itemsContainer);
    });
  }
  
  // Function to toggle the visibility of category items and change arrow
  function toggleCategory(index) {
    const itemsContainer = document.getElementById(`category-${index}`);
    const button = itemsContainer.previousElementSibling.querySelector(".collapse-button");
    
    if (itemsContainer.style.display === "none") {
      itemsContainer.style.display = "block";
      button.innerText = "▼"; // Change to expanded arrow
    } else {
      itemsContainer.style.display = "none";
      button.innerText = "►"; // Change to collapsed arrow
    }
  }
  
  // Load menu on page load
  document.addEventListener("DOMContentLoaded", loadMenu);
  