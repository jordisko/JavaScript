function Suma3Num(num1,num2,num3){
    if ((typeof num1)== "number" && (typeof num2)== "number" && (typeof num3) == "number"){
        let resultado = num1+num2+num3;
        return resultado;
    }
    else{return "uno o mas  de los elementos no es un numero"
        
    }
}
console.log(Suma3Num(4,1,8));