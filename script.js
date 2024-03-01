function changeText() {
    const textElement = document.getElementById("text-to-change");
    textElement.textContent = "The text has changed!";
};

function navigateTo(page) {
  // Check if the target page exists before redirecting
  if (page === "index.html" || page === "index_2.html" || page === "index_3.html") {
    window.location.href = page;
  } else {
    // Handle invalid page attempt (optional)
    alert("Invalid page requested.");
  }
};
