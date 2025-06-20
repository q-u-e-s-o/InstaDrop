function askForLocation() {
  alert("This website would like to access your location.");

  if (!navigator.geolocation) {
    // Geolocation unsupported, but no page message shown
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Do whatever you want with lat/lon here, silently.
      // For example, send to server:

      // fetch("https://your-server.com/location", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ latitude: lat, longitude: lon })
      // });

      console.log("User location obtained:", lat, lon); // For debugging only
    },
    (error) => {
      console.log("Location access denied or error:", error.message);
      // No user-facing messages
    }
  );
}
