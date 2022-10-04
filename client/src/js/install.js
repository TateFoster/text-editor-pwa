const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	window.deferredPrompt = event;
	butInstall.style.visibility = "visible";
});

butInstall.addEventListener("click", async () => {
	const promptEvent = window.deferredPrompt;

	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();

	window.deferredPrompt = null;
	butInstall.setAttribute("disabled", true);
	butInstall.textContent = "Installed";
});

// TODO: Implement a click event handler on the `butInstall` element

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
	window.deferredPrompt = null;
});
