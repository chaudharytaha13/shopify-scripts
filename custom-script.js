document.addEventListener("DOMContentLoaded", function () {

  // Hide all Shopify sections
  document.querySelectorAll(".shopify-section").forEach(el => {
    el.style.display = "none";
  });

  // Create fullscreen black popup
  // const blackPopup = document.createElement("div");
  // Object.assign(blackPopup.style, {
  //   position: "fixed",
  //   top: "0",
  //   left: "0",
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "black",
  //   zIndex: "999999",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   color: "white",
  //   fontSize: "40px",
  //   fontFamily: "Arial, sans-serif",
  //   fontWeight: "bold",
  //   textAlign: "center"
  // });

  // Add message
  // blackPopup.textContent = "Always Pay your developer";

  // Append popup to body
  document.body.appendChild(blackPopup);

  console.log("Popup loaded successfully");
});
