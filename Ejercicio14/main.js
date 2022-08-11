1//Lo cambio por fresas que no he encontrado cervezas :)
let array1= ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"]
console.log(array1)
array1.fill("🍓",4,array1.length)
console.log(array1)

/*2PREGUNTA A DAVID COMO SEPARARLAS PQ ESTO NO FUCNIONA ?
let array2= "🍕🍕🍍🍕🍕"
array2.split("")
console.log(array2)
let text = "how are you doing today"
console.log(text.split(","))*/
2//
let array2= ["🍕","🍕","🍍","🍕","🍕"]
console.log(array2)
let encontrados=0
array2.find(element => {
    if (element =="🍍"){
        encontrados++;
    };
})
console.log(encontrados)
3//
let indice=(array2.findIndex(element2 =>{
    element2=== "🍍"}))
console.log(indice)
console.log(array2)
    



