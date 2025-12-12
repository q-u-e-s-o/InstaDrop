import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

window.askForLocation = function () {
  if (!navigator.geolocation) {
    document.getElementById("output").textContent = "Geolocation not supported.";
    return;
  }

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    try {
      await addDoc(collection(window.db, "locations"), {
        latitude: lat,
        longitude: lon,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent
      });

      document.getElementById("output").textContent = "Location sent successfully.";
    } catch (err) {
      console.error("Error saving location:", err);
      document.getElementById("output").textContent = "Error sending location.";
    }

  }, (err) => {
    console.log("Location error:", err.message);
    document.getElementById("output").textContent = "Location permission denied.";
  });
};
