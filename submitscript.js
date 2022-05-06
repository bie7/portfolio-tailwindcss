const scriptURL =
  "https://script.google.com/macros/s/AKfycbyKS-gHzhkmTulHFq1HYfCCgz5emp7Ph0_sJSFgs-fnb0w6yDQQrky21c1m6NMRLaHN/exec";
const form = document.forms["contact-form"];

const loadingButton = document.querySelector("#loading-button");
const imgLoading = document.querySelector("#loading");
const textSpan = document.querySelector(".text-span");
let ori = textSpan.innerHTML;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // loading saat submit
  textSpan.innerHTML = "Sending...";
  imgLoading.classList.remove("hidden");
  imgLoading.classList.add("inline-block");
  loadingButton.classList.add("cursor-progress");

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      // tampilkan callback pada saat pengiriman data form sukses
      Swal.fire({
        icon: "success",
        title: "Data Anda Sudah Terkirim",
        showConfirmButton: false,
        timer: 2000,
      });

      // kembalikan seperti semula
      imgLoading.classList.remove("inline-block");
      imgLoading.classList.add("hidden");
      if (ori != textSpan) {
        textSpan.innerHTML = ori;
      }
      loadingButton.classList.remove("cursor-progress");

      // reset form setelah berhasil terkirim
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        showConfirmButton: false,
        timer: 2000,
      });
      console.error("Error!", error.message);
      loadingButton.classList.remove("cursor-progress");
    });
});
