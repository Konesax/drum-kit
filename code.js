for (var i = 0; i < document.querySelectorAll('.drumm').length; i++) {
    document.querySelectorAll(".drumm")[i].addEventListener('click', handleClick);

    function handleClick() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML)
    }
}

document.addEventListener('keypress', function(event){
    makeSound(event.key);
});


function makeSound(key) {
    
    switch(key) {
        case "W":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "S":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "J":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "K":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "L":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(key);
            break;
    }


}