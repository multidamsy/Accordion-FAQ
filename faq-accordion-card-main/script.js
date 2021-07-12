const button = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("ans");
var flip = document.getElementsByClassName("float");

function showAns() {
    for (i=0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var ans = this.nextElementSibling;
            if (ans.style.display === "block") {
            ans.style.display = "none";
            } else {
                ans.style.display = "block";
            }
        })
    }
}
showAns();


function flipIcon() {
    for (i=0; i < flip.length; i++) {
        flip[i].addEventListener("click", function(){
            this.classList.toggle("flip");
        })
    }
}
flipIcon();