let play= document.getElementById('play');
let cores = ['preto', 'vermelho', 'verde', 'azul', 'branco']
let msg1 = ['Avada Kedavra 100%', 'Expecto Patronum 50%', 'Expelliarmus 10%', 'Crucio 99%', 'Depulso 80%']
let msg2 = ['Expecto Patronum 50%', 'Depulso 80%', 'Avada Kedavra 100%', 'Crucio 99%', 'Expelliarmus 10%']
let botão2= document.getElementById('bts2');
let botão = document.getElementById('bts');
let paragra2= document.getElementById('paragrafo2')
let paragra= document.getElementById('paragrafo');

play.addEventListener('click', function nomes(){
    const play1=document.getElementById('jogador1').value;
    const play2= document.getElementById('jogador2').value;
    let nome1 = document.getElementById('nome1');
    let nome2 = document.getElementById('nome2');
    nome1.innerHTML= ` Jogador 1 : ${play1}`
    nome2.innerHTML= ` Jogador 2: ${play2}`
})

let mudança = (min, max)=>
Math.floor(Math.random() * (max - min + 1 )) + min

botão.addEventListener('click', function mudar(){
    let mudaMsg = ()=>
    msg1[mudança(0, msg1.length - 1)]
    paragra.innerHTML=(mudaMsg())
})

botão2.addEventListener('click',function mudar2(){
    let mudaMsg2 = () =>
    msg2[mudança(0,msg2.length - 1)]
    paragra2.innerHTML = (mudaMsg2())
} )   
