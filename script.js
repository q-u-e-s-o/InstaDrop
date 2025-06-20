function askForLocation() {
  if (!navigator.geolocation) {
    console.log("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch("https://eo2r3s7lrs1i89x.m.pipedream.net", {
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
