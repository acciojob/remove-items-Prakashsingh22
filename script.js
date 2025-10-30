//your JS code here. If required.
// Get references to the dropdown and button
const select = document.getElementById("colorSelect");
const button = document.querySelector("input[type='button']");

// Add click event
button.addEventListener("click", function() {
  // Get selected option index
  const selectedIndex = select.selectedIndex;

  // Check if any option is selected
  if (selectedIndex !== -1) {
    // Remove the selected option
    select.remove(selectedIndex);
  } else {
    alert("Please select an option to remove.");
  }
});
