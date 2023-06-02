
function hola(){


  let texto1 = "";
  let texto2 = 0;

  texto1=String(document.getElementById('nombre').value);
  texto2=parseInt(document.getElementById('edad').value);

  if(texto2 < 18){
    alert(texto1 + "Es menor de edad");
   } else{
        alert(texto1 + "Es mayor de edad")
      }
}