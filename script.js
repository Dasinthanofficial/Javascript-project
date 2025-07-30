
let numOf = document.querySelectorAll(".drum").length;

for (var a = 0; a < numOf; a++) {
    document.querySelectorAll(".drum")[a].addEventListener("click", function () {

        let letter = this.innerHTML
        mksourse(letter);

    });
    document.addEventListener("keydown", function (event) {
        console.log(event);
        mksourse(event.key);
    }
    );



    function mksourse(value) {


        switch (value) {
            case "a":
                var song1 = new Audio("sound/guiter.mp3");
                song1.play();
                break;

            case "b":
                var song2 = new Audio("sound/keyboard.mp3");
                song2.play();
                break;

            case "c":
                var song3 = new Audio("sound/piano.mp3");
                song3.play();
                break;

            default:
                console.log("click correct area");



        }

    }
}