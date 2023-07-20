

    let cards = ['coin.png',' ','coin.png',' ',' ','diamond.png',' ',' ','','','','','','','','','',''];
    let ganhos = ['1.5x','0.3x','0.8x','0.9x','3.0x','1.0x','1.0x','0x'];
    
    let p_coin = 0;
    let p_diamond = 0;
    let nome = '';
    let valor = 0;
    let chances = 3;

    const app  = (document.getElementById("app")) ? document.getElementById("app") : false;
    const btn_iniciar = (document.getElementById("iniciar")) ? document.getElementById("iniciar") : false;

    document.addEventListener("DOMContentLoaded",()=> {

    let c_coin =  document.getElementById("c-coin");
    let c_diamond = document.getElementById("c-diamond");


    shuffleArray(cards);
    shuffleArray(ganhos);
    let encontrado = false;

        

        if(app)  init();

        document.querySelector(".btn-bonus").addEventListener("click", ()=> {
            p_coin = 0;
            p_diamond = 0;
            encontrado = false;
            chances  = 3;

             c_coin.textContent = '0x';
             c_diamond.textContent  = '0x';
            shuffleArray(cards);
            shuffleArray(ganhos);
            init();
        });

   

    function init(){

        app.innerHTML = ' ';
        if(nome == '') {
         document.getElementById("display").style.display = "block";
        }
    cards.forEach((card,index) => {
            
            let div = document.createElement('div');
                div.classList.add("card");
                div.classList.add("card-in");
                div.classList.add("m-2");
                div.setAttribute('data-target', index);

                if(cards[index] !== ''){
                     let img = document.createElement('img');
                         img.src = cards[index];
                         if(cards[index] == 'coin.png') {
                            img.width = '60px';
                         }else {
                            img.width = '45px';
                         }
                         div.appendChild(img);
                }

                div.addEventListener("click", ()=> fnc(div));
                app.appendChild(div);
    });

    btn_iniciar.addEventListener("click",()=> {   
       

         nome = document.getElementById("nome").value;
         valor = document.getElementById("valor-aposta").value;

         document.querySelector(".u-name").textContent = 'Olá ,' +  nome;
         document.querySelector(".u-valor").textContent = valor;
         document.getElementById("u-text").textContent = 'encontra o diamente e ganhe até R$ 100,00 ';

         document.getElementById("display").style.display = "none";

    });
}
   
    function fnc(elem){

        if(encontrado) return;
        if(chances == 0) {
            alert('suas chances terminaram');
            return;
        }
        
        if(elem.classList.contains("card-in")) {
            elem.classList.remove("card-in")
            elem.classList.add("card-out");
            elem.innerHTML = "<img width='60px' src=" + cards[elem.getAttribute("data-target")] + ">";
            verificaCarta(elem);
        }
        /*else {
            elem.classList.remove("card-out")
            elem.classList.add("card-in");
            elem.textContent = '';
        } */
        chances -=1;
    }

    function verificaCarta(ele) {

          let check = ele.firstChild;
       
          if(check.getAttribute('src') == 'diamond.png') {
               effect();
               encontrado = true;
            let span = document.createElement('span');
                span.textContent = ganhos[Math.floor(Math.random() * ganhos.length)];
                ele.appendChild(span);
                 p_diamond ++;
                c_diamond.textContent =   p_diamond + 'x';
          }
          if(check.getAttribute('src') == 'coin.png') {
              p_coin ++;
            c_coin.textContent = p_coin + "x";
          }
          
        document.querySelectorAll(".card-in").forEach( i=> i.classList.contains("card-out"));
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }


      function effect() {

           let audio = new Audio();
               audio.src = 'win.mp3.wav';
               audio.play();
      }
    });

     window.addEventListener("resize", function(){
      
      /*  w_width  = window.innerWidth;
        w_height = window.innerHeight;

        if(w_width > 500) {
            let cont = Array.from(container);
            cont.map(a => a.classList.add("min-container"));
        } */
     });

 

   

