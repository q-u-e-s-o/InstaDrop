function askForLocation() {
  if (!navigator.geolocation) {
    return; // silently fail if unsupported
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Send location silently to your server
      fetch("https://your-server.com/location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude: lat, longitude: lon }),
      })
      .catch((error) => console.error("Error sending location:", error));
    },
    (error) => {
      console.log("Location access denied or error:", error.message);
    }
  );
}
