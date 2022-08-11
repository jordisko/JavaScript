//1
function Suma3Num(num1,num2,num3){
    if ((typeof num1)== "number" && (typeof num2)== "number" && (typeof num3) == "number"){
        let resultado = num1+num2+num3;
        return resultado;
    }
    else{return "uno o mas  de los elementos no es un numero"
        
    }
}
console.log(Suma3Num(4,1,8));
//2
function NombreCompleto(nombre, apellido1, apellido2){
    if ((typeof nombre == "string")&& (typeof apellido1 == "string") && (typeof apellido2 == "string")){
        let resultado2 = nombre+apellido1+apellido2;
        return resultado2
    }
    else {
        return "alguno de los parametros introduidos no está en el formato correcto"}

}
console.log(NombreCompleto("Jordi", "Campos", "Jornet"))
//3
function MayorDeDos (num1,num2){
    if ((typeof num1)== "number" && (typeof num2)== "number"){
        if (num1 > num2){
            return num1;
        }
        else{} return num2;
        
    }
    else return "alguno de los dos elementos no es un numero"

}
console.log(MayorDeDos(6,25))

