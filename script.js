// logo click -> go home
function goHome() {
  window.location.href = "index.html";
}

// simple login demo (no backend yet)
function login() {
  let user = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;

  console.log("Login attempt:", user, pass);
  alert("Logged in (demo)");
}
