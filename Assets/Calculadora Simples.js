function CriaCalculadora() {
    return {
        display: document.querySelector('.display'), // Selecionar a Classe DISPLAY e tudo que esta dentro dela 
        btnClear: document.querySelector('.btn-clear'), // Selecionar a Classe BTN-clear 
        btnOneClear: document.querySelector('.btn-del'), // Selecionar a Classe BTN-Del 
        
        inicia() { // método para iniciar a Calculadora 
            this.CliqueBotoes();
            this.PressEnter();
            this.PressionaBackSpace();
        },
        
        PressionaBackSpace() {    // para pressionar o Espaço do teclado
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
            }
        });
    },
    
    PressEnter(){   // para selecionar o Enter como =
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                this.Make_Account();
            }
        }); 
    },
    
    
    Make_Account() {
            let acc_calc = this.display.value;
            
            try {
                acc_calc = eval(acc_calc)
                if (!acc_calc){
                    alert ('Invalid operation.');
                    return;
                }
                
                this.display.value = String(acc_calc);
            }catch(e) {
                alert ('Invalid operation.');
                return;
            }
        },
        
        clearDisplay() {
            this.display.value = ''; // para quando clicar no Clear 
        },

        delOne() {
                this.display.value = this.display.value.slice(0, -1);
            },

        CliqueBotoes() {
            document,
            addEventListener('click', (e) => { // para pegar todos os elementos que foram clicados | se utilizar a Arrow Function não precisa do bind (this)
                const elem = e.target; // para armazenar em uma contante os elementos clicados 
     // para Selecionar os numeros 
                if (elem.classList.contains('btn-num')) { // no elemento selecionado pelo click tiver a classe BTN-NUM
                    this.btnParaDisplay(elem.innerText); // para pegar o valor do display
                }
     // para fazer a limpeza do display 
                if (elem.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
     // para apagar um numero clicado 
                if (elem.classList.contains('btn-del')) {
                       this.delOne();                                             
                }
    // para fazer a Conta com o =
                if (elem.classList.contains('.btn-eq')) {
                    this.Make_Account();
                }
                this.display.focus();
      });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
          } 
        };
      }



const Calculadora = CriaCalculadora(); // Definindo uma constante para receber a Calculadora 
Calculadora.inicia();   // Para iniciar a Calculadora 