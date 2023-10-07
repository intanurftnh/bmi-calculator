// Buatlah aplikasi website untuk menghitung Body Mass Index (BMI) berdasarkan standar yang telah ditetapkan
// User harus memasukkan data Berat Badan dalam KG
// User harus memasukkan data Tinggi Badan dalam CM
document.getElementById("bmi-form").addEventListener("submit", function(i) {
    i.preventDefault();
    let weight = document.getElementById("input-weight");
    let height = document.getElementById("input-height");

    let yourWeight = parseFloat(weight.value); // parseFloat untuk menerima numerik pada string dan mengembalikan kedalam format angka yang sesuai tanpa merubah ke string
    let yourHeight = parseFloat(height.value);

    // Rumus BMI untuk satuan KG dan CM adalah = Berat Badan/(Tinggi Badan/100)^2
    if (!isNaN(yourWeight) && !isNaN(yourHeight)) {
        let bmiCalculate = yourWeight/(yourHeight/100)**2;
        let hasilBmi = "";

        // Aplikasi harus menampilkan status BMI sesuai dengan standar berikut :
        // Underweight = <18.5
        // Normal weight = 18.5 - 24.9
        // Overweight = 25 - 29.9
        // Obesity = BMI of 30 or greater
        if (bmiCalculate < 18.5){
            hasilBmi = "Underweight"
        } else if (bmiCalculate >= 18.5 && bmiCalculate <= 24.9) {
            hasilBmi = "Normal Weight";
        } else if (bmiCalculate > 24.9 && bmiCalculate <= 29.9) {
            hasilBmi = "Overweight";
        } else {
            hasilBmi = "Obesity";
        }

        document.getElementById("hasil-calculate").innerHTML = `<p>Your BMI is <b>${bmiCalculate.toFixed(2)}</b> which means You are <b>${hasilBmi}</b></p>`; // toFixed(2) untuk menampilkan hasil bmi dengan 2 angka dibelakang koma

        // Menghapus nilai yang dimasukkan user sebelumnya
        weight.value = "";
        height.value = "";

    } else {
        document.getElementById("hasil-calculate").innerHTML = "<p>Enter your weight and height again correctly!</p>"
    }
});