const submitBtn = document.querySelector(".submit_btn");

submitBtn.addEventListener("click", () => {
    document.querySelector(".main_page").classList.add("hidden");
    document.querySelector(".thank_you_page").classList.remove("hidden");
});

function getRating(value){
    document.querySelector("#update").innerHTML = value;
    console.log("successfully updated the rating");
}


