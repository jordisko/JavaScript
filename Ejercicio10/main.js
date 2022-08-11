1//
function CambiaAporO(string){
    console.log(string.replaceAll("o","a"));

}
(CambiaAporO("cachorro"))
2//
function CombruebaAca (string){
    if (string.startsWith("aca")){
        console.log("Esta palabra empieza por aca")
    }
    else 
        console.log("Esta palabra no empieza por aca")
    
}
CombruebaAca("academia");
CombruebaAca("escuela");
3//
function SaludoTriple(){
    num=1
    switch (num) {
    
        case 1:
            console.log("Hola1");
            
        case 2:
            console.log("Hola2");

        case 3:
            console.log("Hola3");
            break;
            
    
        default:
            break;
    }
}
SaludoTriple())



    

