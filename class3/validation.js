function validatename() {
  var name = document.getElementById("uname").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
  } else if (name.length < 8) {
    alert("Name must be at least 8 characters long.");
  }
}

function validatepass() {
  let pass = document.getElementById("upass").value;
  let hasLcase = /[a-z]/.test(pass);
  let hasUcase = /[A-Z]/.test(pass);
  let hasDigit = /\d/.test(pass);
  let hasSpecial = /[\W_]/.test(pass);

  if (pass.trim() === "") {
    alert("Please enter your password.");
  } else if (pass.length < 8) {
    alert("Password must be at least 8 characters long.");
  } else if (!(hasLcase && hasUcase && hasDigit && hasSpecial)) {
    alert(
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
    );
  }
}

function confirmpass() {
  let pass = document.getElementById("upass").value;
  let cpass = document.getElementById("cpass").value;
  if (pass !== cpass) {
    alert("Passwords do not match.");
  }
}

function validateEmail() {
  let mail = document.getElementById("mail").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (mail.trim() === "") {
    alert("Please enter your email.");
  } else if (!emailRegex.test(mail)) {
    alert("Please enter a valid email address.");
  }
}

function submitForm(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let name = formData.get("uname");
  let pass = formData.get("upass");
  let cpass = formData.get("cpass");
  let mail = formData.get("mail");
}