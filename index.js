document.getElementById("hitung").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  const operasi = document.querySelector('input[name="operasi"]:checked').value;

  let hasil = 0;

  if (operasi === "penjumlahan") {
    hasil = angka1 + angka2;
  } else if (operasi === "pengurangan") {
    hasil = angka1 - angka2;
  } else if (operasi === "perkalian") {
    hasil = angka1 * angka2;
  } else if (operasi === "pembagian") {
    hasil = angka1 / angka2;
  }

  document.getElementById("hasil").innerText = "Hasil: " + hasil;
