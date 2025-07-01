function askForLocation() {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch("https://698f-50-53-19-40.ngrok-free.app", {
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
