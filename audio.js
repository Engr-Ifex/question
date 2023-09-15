let audio = document.querySelector('#audio');
let playPause = document.querySelector('#playPause');
let pause = document.querySelector('#pause');
let num = 0;

playPause.addEventListener('click', function playPause(){
    if(num == 0){
        num = 1;
        audio.play();
      
    }else{
        num = 0;
        audio.pause();
    }
})

// function change(filename){
//     playPause.setAttribute('src', filename);
// }


// playPause.addEventListener('click', function show(){
//     pause.classList.add('show')

//     playPause.classList.add('noshow')
// })