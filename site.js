/**
 * When Apple approves the app, paste the App Store URL here.
 * Example: "https://apps.apple.com/app/idXXXXXXXX"
 */
const APP_STORE_URL = "";

const button = document.getElementById("download");

if (button instanceof HTMLAnchorElement) {
  if (APP_STORE_URL.trim()) {
    button.href = APP_STORE_URL.trim();
    button.textContent = "Download now";
    button.removeAttribute("aria-disabled");
    button.rel = "noopener noreferrer";
  } else {
    button.href = "#";
    button.textContent = "Coming soon";
    button.setAttribute("aria-disabled", "true");
    button.addEventListener("click", (event) => event.preventDefault());
  }
}
