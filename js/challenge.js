let time = 0;
const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const likeButton = document.getElementById("heart");
const likeSection = document.querySelector(".likes");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("list");
let currentNum;
let count;

let intervalId = setInterval(timerCount, 1000);

minusButton.addEventListener('click', () => {
    time--;
    counter.innerText = time;
});

plusButton.addEventListener('click', () => {
    time++;
    counter.innerText = time;
});

likeButton.addEventListener('click', () => {
    const post = document.createElement("li");
    const numList = likeSection.querySelectorAll('li');
    let match = false;
    let count;
    if(numList.length > 0){
        for(const element of numList){
            if(parseInt(element.innerText.split(" ")[0], 10) === time){
                count = parseInt(element.innerText.split(" ")[4], 10);
                count++;
                element.innerText = `${time} has been liked ${count} times`;
                match = true;
            }
        }
        if(!match){
            count = 1;
            post.innerText = `${time} has been liked ${count} time`;
            likeSection.appendChild(post);
        }
    }
    else{
        count = 1;
        post.innerText = `${time} has been liked ${count} time`;
        likeSection.appendChild(post);
    }
});

pauseButton.addEventListener('click', () => {
    if(pauseButton.innerText === 'pause'){
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
        submitButton.disabled = true;
        clearInterval(intervalId);
        pauseButton.innerText = 'resume';
    }
    else{
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
        submitButton.disabled = false;
        intervalId = setInterval(timerCount, 1000);
        pauseButton.innerText = 'pause';
    }
})

commentForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const comment = document.createElement("p");
    commentList.appendChild(comment);
    comment.innerText = event.target.children[0].value;
    event.target.children[0].value = "";
});

function timerCount() {
    time++
    counter.innerText = time;
}

