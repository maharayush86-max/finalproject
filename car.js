const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const dateInput = document.getElementById("date");
const vehicleSelect = document.getElementById("vehicle");

// Set minimum date to today so users can't pick past dates
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Make "Book this..." links automatically pre-select the vehicle in the form
const bookLinks = document.querySelectorAll(".card a");

bookLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const card = link.closest(".card");
    const vehicleName = card.querySelector("h3").textContent;

    for (let option of vehicleSelect.options) {
      if (option.value === vehicleName) {
        vehicleSelect.value = vehicleName;
        break;
      }
    }
  });
});

// Handle form submission with an alert popup
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const vehicle = vehicleSelect.value;
  const pickDate = dateInput.value;

  // Show inline message
  message.textContent = `Thank you, ${name}! Your ${vehicle} is booked for ${pickDate}.`;

  // Show alert popup with vehicle, date, and time
  const bookingTime = new Date().toLocaleTimeString();
  alert(`Booking Confirmed!\n\nName: ${name}\nVehicle: ${vehicle}\nPick-up Date: ${pickDate}\nBooking Time: ${bookingTime}`);

  form.reset();
  dateInput.setAttribute("min", today);
});