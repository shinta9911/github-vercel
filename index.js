document.getElementById("hitung").addEventListener("click", function () {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);

  let operasi = document.querySelector('input[name="operasi"]:checked').value;

  let hasil;

  if (operasi === "penjumlahan") {
    hasil = angka1 + angka2;
  } else if (operasi === "pengurangan") {
    hasil = angka1 - angka2;
  } else if (operasi === "perkalian") {
    hasil = angka1 * angka2;
  } else if (operasi === "pembagian") {
    hasil = angka1 / angka2;
  }

  document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
});
