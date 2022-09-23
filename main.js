// select element 
let countSpan = document.querySelector(".quiz-info .count span"); // to add # of Q
let bulletsSpanContainer =document.querySelector(".bullets .spans");


// function to get the data from the Json file 
function getQuestion(){
    let myRequest =new XMLHttpRequest();

    myRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let questionsCount = questionsObject.length;

            // console.log(questionsObject);
            console.log(questionsCount);

            // create bullet + set Questions count 
            createBullets(questionsCount);
        }
    }
    myRequest.open("GET", "html-questions.json", true);
    myRequest.send();
}
getQuestion();

function createBullets(num){
    countSpan.innerHTML = num;

    // create span/ Bulleat
    for(let i =0; i < num; i++){
    let theBullet = document.createElement("span");
    // check if it's first span 
    if(i === 0){
        theBullet.className = "on";
    }
    // append bullets to main bullet container
    bulletsSpanContainer.appendChild(theBullet);
    }

}