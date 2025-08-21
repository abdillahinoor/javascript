const bookingForm = document.getElementById("bookingForm");
const savedPreferencesCard = document.getElementById("savedPreferences");
const clearBtn = document.getElementById("clearBtn");

// Display saved preferences on page load
window.onload = function() {
  const savedPrefs = JSON.parse(localStorage.getItem("preferences"));
  if (savedPrefs) {
    showPreferences(savedPrefs);
  }
};

// Save preferences
bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const preferences = {
    roomType: document.getElementById("roomType").value,
    breakfast: document.getElementById("breakfast").checked ? "Yes" : "No",
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
  showPreferences(preferences);

  bookingForm.reset();
});

// Show preferences card
function showPreferences(prefs) {
  savedPreferencesCard.classList.remove("hidden");
  document.getElementById("savedRoomType").textContent = prefs.roomType;
  document.getElementById("savedBreakfast").textContent = prefs.breakfast;
  document.getElementById("savedCheckin").textContent = prefs.checkin;
  document.getElementById("savedCheckout").textContent = prefs.checkout;
}

// Clear preferences
clearBtn.addEventListener("click", function() {
  localStorage.removeItem("preferences");
  savedPreferencesCard.classList.add("hidden");
});