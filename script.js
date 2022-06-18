let nombre = prompt("Hola, estudiante. ¿Cómo te llamas?");

let nota = prompt("¿Cuál fue tu calificación?");

if (nota < 3) {
    console.log(nombre + ", tu nota es: Muy deficiente");
    document.write(nombre + ", tu nota es: Muy deficiente");
} else if (nota >=3 && nota < 5) {
    console.log(nombre + ", tu nota es: Deficiente");
    document.write(nombre + ", tu nota es: Deficiente");
} else if (nota >=5 && nota < 6) {
    console.log(nombre + ", tu nota es: Suficiente");
    document.write(nombre + ", tu nota es: Suficiente");
} else if (nota >=6 && nota < 7) {
    console.log(nombre + ", tu nota es: Bien");
    document.write(nombre + ", tu nota es: Bien");
} else if (nota >=7 && nota < 9) {
    console.log(nombre + ", tu nota es: Notable");
    document.write(nombre + ", tu nota es: Notable");
} else if (nota >=3 && nota < 5) {
    console.log(nombre + ", tu nota es: Sobresaliente");
    document.write(nombre + ", tu nota es: Sobresaliente");
}
