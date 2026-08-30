function updateTitle() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("heading").innerText
= `Current Time: ${timeString}`;
}
setInterval(updateTitle, 1000);

let themeButton = document.getElementById("themeToggle");

// Function to toggle dark mode
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light"
    );
});

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


document.getElementById("addTask").addEventListener("click",
function() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText.trim() === "")
return; 
    let newTask = document.createElement("li");
    newTask.innerHTML = `${taskText}
<button class="removeTask">Remove</button>`;
 
    document.getElementById("taskList").appendChild(newTask);
    document.getElementById("taskInput").value
= "";
});
 
// Remove Task
document.getElementById("taskList").addEventListener("click",
function(event) {
    if (event.target.classList.contains("removeTask"))
{
        event.target.parentElement.remove();
    }
});

document.getElementById("contactForm").addEventListener("submit",
function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let modal = document.getElementById("modal");
    let modalMessage = document.getElementById("modalMessage");

    // Check email
    if (!email.includes("@")) {
        modalMessage.innerText = "Invalid email format!";
    }

    // Check message
    else if (message.trim() === "") {
        modalMessage.innerText = "Please enter a message!";
    }

    // Check message word limit
    else if (message.trim().split(/\s+/).length > 50) {
        modalMessage.innerText = "Message must not exceed 50 words!";
    }

    // Successful submission
    else {
        modalMessage.innerText = "Form Submitted Successfully!";
        document.getElementById("contactForm").reset();
    }

    modal.style.display = "block";
});


// Prevent Enter from submitting in Name and Email
document.getElementById("name").addEventListener("keydown",
function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

document.getElementById("email").addEventListener("keydown",
function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

// Close Modal
document.getElementById("closeModal").addEventListener("click",
function() {
    document.getElementById("modal").style.display = "none";
});

// Blue Mode Background
document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "b") {
        document.body.classList.toggle("blue-mode");
    }
});