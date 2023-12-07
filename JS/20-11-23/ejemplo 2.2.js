var numero = [1, 3, 5, 8, 9, 10, 12, 15, 20];

for (var i = 0; i < numero.length; i++) {
    if (numero[i] % 5 == 0) {
        console.log("el " + numero[i] + " es divisible por 5");
    }
    else{
        console.log("el " + numero[i] + " no es divisible por 5")
    }
}