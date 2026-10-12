// GitHub Release files. Change only if you rename an asset.
const files = {
  windows: "RaduNegruRevenge-Windows.rar",
  android: "Radu.Negru.Revenge.apk",
  mac: "RaduNegruRevenge-Mac.zip",
  linux: "RaduNegruRevenge-Linux.rar"
};

const platform = document.body.dataset.platform;
const filename = files[platform];
const url = `https://github.com/Blobu/R.N.Revenge/releases/latest/download/${encodeURIComponent(filename)}`;
const downloadLink = document.getElementById("download-link");
const status = document.getElementById("download-status");
downloadLink.href = url;

// Attempt the download on page load without navigating away from the tutorial.
// Browser policies / private GitHub authentication may prevent an automatic download.
window.addEventListener("load", () => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.title = "Download";
  iframe.src = url;
  document.body.appendChild(iframe);
  status.textContent = "Your download should start automatically. If it doesn't, use the button below.";
});
