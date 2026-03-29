// Back to top
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Dark Mode لكل الصفحات
let darkBtn = document.getElementById("darkBtn");

function setMode() {
  let mode = localStorage.getItem("mode");

  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    darkBtn.innerHTML = "Light Mode"; // لما يكون دارك
  } else {
    document.body.classList.remove("dark-mode");
    darkBtn.innerHTML = "Dark Mode"; // لما يكون لايت
  }
}

setMode();

darkBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }

  setMode();
};

let form = document.getElementById("contactForm");

if (form) {
  form.onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    let valid = true;

    // Name
    if (name.value === "") {
      nameError.innerHTML = "Name is required";
      valid = false;
    } else {
      nameError.innerHTML = "";
    }

    // Email
    if (email.value === "") {
      emailError.innerHTML = "Email is required";
      valid = false;
    } else {
      emailError.innerHTML = "";
    }

    // Message
    if (message.value === "") {
      messageError.innerHTML = "Message is required";
      valid = false;
    } else {
      messageError.innerHTML = "";
    }

    if (valid) {
      alert("Message Sent Successfully!");
      form.reset();
    }
  };
}
