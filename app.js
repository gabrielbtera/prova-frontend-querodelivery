const btn = document.querySelectorAll("button");
const tela = document.getElementById("text-tela");
const telaMin = document.getElementById("text-min");



function main () {
  let valor = '';
  let flag = false;
  let temp = '';
  let flagIsigual = false;

  for (let i = 0; i < btn.length; i++){
    btn[i].onclick = function () {
      
      btn[i].style.boxShadow = '2px 2px 4px rgb(32, 28, 44)';
      
      setTimeout(function(){btn[i].style.boxShadow = '1px 11px 10px rgb(32, 28, 44)'}, 100);

      
      

      if (btn[i].textContent == '%'){
          valor += '/100*';
      }
      else if (btn[i].textContent == 'x'){
        valor += "*";
      }else {
        valor += btn[i].textContent;
      }
      
      
      
      if (btn[i].textContent == "Ac"){
        valor = "0";
        tela.innerText = '0';
        flag = true;
        temp = '';

      }else{

        if (valor[0] == '0'){
          valor = valor.slice(1)
        }

        temp += btn[i].textContent;
      
        if (btn[i].textContent == "="){
        
          try {
        
            valor = eval(valor.slice(0, valor.length -1)) || '0';
            console.log(valor)
            
          } catch (error) {
            if (valor[0] == "="){
              valor = '0';
            }else{
              valor = "error"
              temp = "click Ac"
            }

            
          
          }

          telaMin.innerText = temp;
          temp = valor;
        }

        tela.innerText = temp;
      }
      
    }  
  }
}

main()