// Hanle toDo list Form
const addForm = document.querySelector(".add");
// Hanle ul list
const list = document.querySelector(".todos");
// Function to generate new li items
const generateTemplate = todo => {
    // Insert new li tag containg new todos
    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    // Append to the old items
    list.innerHTML += html;
};

addForm.addEventListener("submit", (event) => {
    // Prevent the Form from loading
    event.preventDefault();
    // Get user input and remove extra space
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        // Clear form input after submission
        addForm.reset();
    }
});
// Listens to event propagated in UL tag
list.addEventListener("click", (event) => {
    // Check and olny remove li tag
    if (event.target.tagName === "I") {
        event.target.parentNode.remove();
    }
});

// Hanle search Form
const search = document.querySelector(".search input");
// Function to attach and remove class "filtered" from li items in ul
const filterToDo = (term) => {
    // Filter out items that return true
    Array.from(list.children)
    // filter out and convert user input to lower case
      .filter((todo) => {
          return !todo.textContent.toLowerCase().includes(term);
      })
      // Attaches filtered class
      .forEach((todo) => {
          todo.classList.add("filtered");
      }
    );
    // Filter out items that return false
    Array.from(list.children)
    //// filter out and convert user input to lower case
      .filter((todo) => {
          return todo.textContent.toLowerCase().includes(term);
      })
      // Removes filtered class
      .forEach((todo) => {
          todo.classList.remove("filtered");
      }
    );
 
};
// Listens to key up events and call a function to make changes to li items
search.addEventListener("keyup", (event) => {
    const term = search.value.trim().toLowerCase();
    filterToDo(term);
});
