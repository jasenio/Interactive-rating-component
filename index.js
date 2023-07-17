const submit = document.querySelector("#btn");
submit.addEventListener("click", submitRating);

function submitRating(){
    let selectedRating = 0;
    const ratings = document.querySelectorAll("input");
    for (const rating of ratings){
        if (rating.checked) selectedRating = rating.value;
    }
    selectedRating === 0 ? alert("Please select a rating") : changeState(selectedRating);
}

function changeState(rating){
    const ratingState = document.querySelector(".rating-state");
    const thankState = document.querySelector(".thank-state");
    const displayRating = document.getElementById("rating");
    displayRating.innerText = rating;
    ratingState.hidden = true;
    thankState.style.display = "flex";
}
