let tentativas = 10;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "Buko No Hero",
        categoria:"ANIMES"
    },
    palavra002 = {
        nome: "Bakugou",
        categoria:"PERSONAGENS"
    },
    palavra003 = {
        nome: "JAPAO",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "One Punch Man",
        categoria:"ANIMES"
    },
    palavra005 = {
        nome: "CANADA",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "NARUTO",
        categoria:"PERSONAGENS"
    },
    palavra007 = {
        nome: "HAIKYU",
        categoria:"ANIME"
    },
    palavra008 = {
        nome: "JUJUTSU KAISEN",
        categoria:"ANIME"
    },
    palavra009 = {
        nome: "RYUNOSUKE TANAKA",
        categoria:"PERSONAGENS"
    },
    palavra010 = {
        nome: "DAICHI SAWAMURA",
        categoria:"PERSONAGENS"
    },
    palavra011 = {
        nome: "KOSHI SUGAWARA",
        categoria:"PERSONAGENS"
    },
    palavra012 = {
        nome: "SUSHI",
        categoria:"COMIDA"
    },
    palavra013 = {
        nome: "FULLMETAL ALCHEMIST",
        categoria:"ANIME"
    },
    palavra014 = {
        nome: "CODE GEASS",
        categoria:"ANIME"
    },
    palavra015 = {
        nome: "HUNTER X HUNTER",
        categoria:"ANIME"
    },
    palavra016 = {
        nome: "SHOKUGEKI NO SOUMA",
        categoria:"ANIME"
    },
    palavra017 = {
        nome: "DEATH NOTE",
        categoria:"ANIME"
    },
    palavra018 = {
        nome: "YU YU HAKUSHO",
        categoria:"ANIME"
    },
    palavra019 = {
        nome: "JOJO BIZARRE ADVENTURE",
        categoria:"ANIME"
    },
    palavra020 = {
        nome: "YKITORI",
        categoria:"COMIDA"
    },
    palavra021 = {
        nome: "YAKINIKU",
        categoria:"COMIDA"
    },
    palavra022 = {
        nome: "RAMEN",
        categoria:"COMIDA"
    },
    palavra023 = {
        nome: "GYUDON",
        categoria:"COMIDA"
    },
    palavra024 = {
        nome: "SOBA",
        categoria:"COMIDA"
    },
    palavra025 = {
        nome: "SHOTO TODOROKI",
        categoria:"PERSONAGEM"
    },
    palavra026 = {
        nome: "KATSUKI BAKUGOU",
        categoria:"PERSONAGEM"
    },
    palavra027 = {
        nome: "IZUKI MIDORIYA",
        categoria:"PERSONAGEM"
    },
    palavra028 = {
        nome: "OKONOMIYAKI",
        categoria:"COMIDA"
    },
    palavra029 = {
        nome: "TAKOYAKI",
        categoria:"COMIDA"
    },
    palavra030 = {
        nome: "SUKIYAKI",
        categoria:"COMIDA"
    },
    palavra031 = {
        nome: "QUIOTO",
        categoria:"CIDADE"
    },
    palavra032 = {
        nome: "OSAKA",
        categoria:"CIDADE"
    },
    palavra033 = {
        nome: "SAPPORO",
        categoria:"CIDADE"
    },
    palavra034 = {
        nome: "TOQUIO",
        categoria:"CIDADE"
    },
    palavra035 = {
        nome: "MORANGO",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SOJA",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "ARROZ",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "PAO DE ALHO",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "TOMATE",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "BOLO DE MORANGO",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "KANAZAWA",
        categoria:"CIDADE"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "SAITAMA",
        categoria:"PERSONAGENS"
    },
    palavra043 = {
        nome: "E se os heróis fugissem, quem nos protegeria?",
        categoria:"FRASES SAITAMA"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria:"TV E CINEMA"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria:"TV E CINEMA"
    },
    palavra053 = {
        nome: "CASA MONSTRO",
        categoria:"TV E CINEMA"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria:"TV E CINEMA"
    },
    palavra055 = {
        nome: "STRANGER THINGS",
        categoria:"TV E CINEMA"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria:"TV E CINEMA"
    },
    palavra057 = {
        nome: "MULHER MARAVILHA",
        categoria:"TV E CINEMA"
    },
    palavra058 = {
        nome: "O INCRIVEL HULK",
        categoria:"TV E CINEMA"
    },
    palavra059 = {
        nome: "GRITO",
        categoria:"TV E CINEMA"
    },
    palavra060 = {
        nome: "PANTANAL",
        categoria:"TV E CINEMA"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});

