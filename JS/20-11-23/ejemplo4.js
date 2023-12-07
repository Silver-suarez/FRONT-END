// Crear una función para recorrer un arreglo y a cada número impar sumarle 1, determinar cuántos números impares estaban dentro del arreglo, mostrar el arreglo y retornar el número de elementos.Entrada:    [2,6,87,43,68,8,4,32,6,57,91,12] Salida    [2,6,88,44,68,8,4,32,6,58,92,12]    Impares: 4


var array = [2, 6, 87, 43, 68, 8, 4, 32, 6, 57, 91, 12]
var count = 0
function convertirpar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arr[i] += 1
            console.log(arr[i])
            count++ //sumale 1
        }
        else {
            console.log(arr[i])
        }
    }
    console.log("el numero total de impares fue: " + count)
    console.log("numero total de elementos: " + arr.length)
}
convertirpar(array)