
const files = {
  windows: "RaduNegruRevenge-Windows.rar",
  android: "Radu.Negru.Revenge.apk",
  mac: "RaduNegruRevenge-Mac.zip",
  linux: "RaduNegruRevenge-Linux.rar"
};

const platform = document.body.dataset.platform;
const filename = files[platform];

if (filename) {
  const downloadUrl =
    "https://github.com/Blobu/R.N.Revenge/releases/latest/download/"
    + encodeURIComponent(filename);

  const downloadLink = document.getElementById("download-link");
  const status = document.getElementById("download-status");

  if (downloadLink) {
    downloadLink.href = downloadUrl;
  }

  window.addEventListener("load", () => {
    if (status) {
      status.textContent =
        "Starting download... If nothing happens, click Download manually.";
    }

    // Attempt automatic download
    window.location.assign(downloadUrl);
  });
}
