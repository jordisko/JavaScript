// 1
const qualestunombreyapellido = (nombre, apellido) => {
 
    return (nombre+ " "+ apellido);
}
console.log(qualestunombreyapellido("jordi", "campos"));
//2
const devuelveelparametro = function (dato){
    if ((typeof dato) == "boolean"){
        console.log(dato)
    } 
}
devuelveelparametro(true)
function devuelvemelotodo (...parameter){
    parameter.forEach((i) => {
        console.log(i)
    } )
}
devuelvemelotodo(1,2,3,4,5)

