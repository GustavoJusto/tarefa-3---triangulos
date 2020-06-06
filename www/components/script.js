// This is a JavaScript file

function Triangulo()
{
  var lado1 = document.getElementById("lado1").value;
  var lado2 = document.getElementById("lado2").value;
  var lado3 = document.getElementById("lado3").value;
  const imagem = document.querySelector('#imagem');

    if(lado1 == lado2 && lado2 == lado3)
  {
        imagem.setAttribute("src","./equilatero.jpg");  
  }
  else if(lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado3 != lado2 && lado2 == lado1 && lado1 != lado3 || lado2 == lado3 && lado3 != lado1 && lado3 == lado1 && lado1 != lado2 || lado3 == lado2 && lado2 != lado1)
  {
            imagem.setAttribute("src","./isosceles.jpg");  
  }
  else if(lado1 != lado2 && lado1 != lado3 && lado3 != lado2 && lado3 != lado1 && lado2 != lado1 && lado2 != lado3 )
  {
                imagem.setAttribute("src","./escaleno.jpg");  
  }

}
