const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA

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

window.addEventListener("appinstalled", (event) => {
	window.deferredPrompt = null;
});
