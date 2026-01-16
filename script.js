let isDressVisible = true;

function toggleDress() {
  const dress = document.getElementById("dress");

  if (isDressVisible) {
    dress.style.display = "none";
    isDressVisible = false;
  } else {
    dress.style.display = "block";
    isDressVisible = true;
  }
}
