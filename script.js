function askForLocation() {
  const output = document.getElementById("output");

  if (!navigator.geolocation) {
    output.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  output.textContent = "🔄 Requesting your location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(5);
      const lon = position.coords.longitude.toFixed(5);
      output.textContent = `✅ Your location: Latitude ${lat}, Longitude ${lon}`;
    },
    (error) => {
      output.textContent = `❌ Permission denied or failed: ${error.message}`;
    }
  );
}
