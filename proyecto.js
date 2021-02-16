//Variables utiles 

var finalizar = true

do{
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

//Valor Recargo casado
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

//Valor Recargo Hijos
var hijos_recargo = 0.2 // 20%
var propiedad_recargo = 0.35
var salario_recargo = 0.05


//Recargo
var recargo = 0
var recargo_total = 0
var recargo_extra = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")


// Se determina si es mayor de edad
if(edad>18){
procedimiento()
}else{
  alert("Este servicio no esta habilitado para menores de Edad.")
}


function procedimiento(){

  var casado = prompt("¿Está casado actualmente?","SI/NO")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
  }
  
  
  //convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad)
  var edad_conyuge_numero = 0
  //convirtiendo la edad del cónyuge si se esta casado/a
  if("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge)
  }
  
  var hijos = prompt("¿Tiene hijos o hijas?", "SI/NO")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos
  var cantidad_hijos_numero = 0
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuantos hijos tiene? Ingrese solo números")
    //convirtiendo la edad del cónyuge si se esta casado/a
    cantidad_hijos_numero = parseInt(cantidad_hijos)
  }
  
  
  var propiedad = prompt("Si tiene alguna propiedad a su nombre, Ingrese el precio de cotización de su propiedad. De lo contrario ingrese no.")
  


  var salario = prompt("Si posee salario fijo, ingrese la cantidad en numeros. De lo contrario ingrese no.")



  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  
  
  //aqui puede colocar un else if() con el siguiente rango
  if (edad_numero>=25 && edad_numero<50) {
    recargo = precio_base * edad_25
    //Suma todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  
  if (edad_numero>=50) {
    recargo = precio_base * edad_50
    //Suma todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  
  /** 
   * 2. Recargo por la edad del conyuge
   */
  
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
     //Calculamos el recargo en base a la edad
    recargo = precio_base * casado_18
    //suma todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  
  if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    //Calculamos el recargo en base a la edad
    recargo = precio_base * casado_25
    //Suma todos los recargos en base a la edad
    recargo_total = recargo_total + recargo
  }
  
  if(edad_conyuge_numero>=50){
    //Calculamos el recargo en base a la edad
    recargo = precio_base * casado_50
    //Suma todos los recargos en base a la edad
    recargo_total = recargo_total + recargo
  }
  
  
  /**
   * 3. Recargo por la cantidad de hijos 
   */ 
  
  if (cantidad_hijos_numero > 0){
    recargo = precio_base * (hijos_recargo * cantidad_hijos)
    
   }
  

/**
   *  Recargos Extras
   */ 

  if (propiedad != "no") {
    recargo_extra = propiedad * propiedad_recargo
  }

  if (salario != "no") {
    recargo_extra = salario * salario_recargo
  }

  //Suma todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo + recargo_extra
 //SUMA TOTAL
  precio_final = precio_base + recargo_total + recargo_extra

  //Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El precio base es de: Q." + precio_base)
  alert ("El recargo base es de: Q." +recargo_total)
  alert ("El recargo Salario y de Propiedad es: Q." + recargo_extra )
  alert ("El total del seguro es de: Q." + precio_final+ "." )
  
  var resultado = prompt("Si desea realizar otra cotización ingrese SI, si desea salir ingrese SALIR")
  if("SALIR" == resultado.toUpperCase()){
    finalizar = false
  }

}

}while(finalizar)
