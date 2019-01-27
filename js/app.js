const submit = document.getElementById("submit");
      
submit.addEventListener("click", (e) => {
    // Prevent the default behavior of the button
    e.preventDefault();

    // Create the list item element on 'click' + complete/remove buttons
    const newItem = document.createElement("li");
    newItem.classList.add("bg-primary", "p-3");
    let text = document.getElementById("inputTodos").value;

    const completed = document.createElement("button");
    completed.classList.add("btn", "btn-sm", "btn-warning", "float-right");
    completed.innerHTML = "Completed";

    const remove = document.createElement("button");
    remove.classList.add("btn", "btn-sm", "btn-danger", "float-right", "mr-3");
    remove.innerHTML = "Remove";

    newItem.innerHTML = text;
    newItem.appendChild(completed);
    newItem.appendChild(remove);

    // Finally, appending the list items to the ordered list element
    const list = document.getElementById("list");
    list.appendChild(newItem);
    document.getElementById("inputTodos").value = "";

    // Giving functionality to 'completed' and 'remove' buttons
    completed.addEventListener("click", () => {
        newItem.classList.remove("bg-primary");
        newItem.classList.add("bg-secondary");
        newItem.style.textDecoration = "line-through";
    });
    
    remove.addEventListener("click", () => {
        list.removeChild(newItem);
    });
});

