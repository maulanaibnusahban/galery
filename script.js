// Mendapatkan elemen HTML dengan kelas "container"
const container = document.querySelector(".container");

// Mendapatkan elemen HTML dengan kelas "jumbo"
const jumbo = document.querySelector(".jumbo");

// Mendapatkan semua elemen HTML dengan kelas "thumb"
const thumbs = document.querySelectorAll(".thumb");

// Menambahkan event listener untuk event "click" pada elemen dengan kelas "container"
container.addEventListener("click", function (e) {
  // Memeriksa apakah elemen yang di-klik memiliki kelas "thumb"
  if (e.target.className == "thumb") {
    // Mengganti sumber gambar pada elemen dengan kelas "jumbo" dengan sumber gambar elemen yang di-klik
    jumbo.src = e.target.src;

    // Menambahkan kelas "fade" ke elemen dengan kelas "jumbo" untuk efek transisi
    jumbo.classList.add("fade");

    // Menghapus kelas "fade" dari elemen dengan kelas "jumbo" setelah 500ms
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    // Mengubah kelas semua elemen dengan kelas "thumb" menjadi "thumb"
    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });

    // Menambahkan kelas "active" ke elemen yang di-klik (thumb yang baru dipilih)
    e.target.classList.add("active");
  }
});
