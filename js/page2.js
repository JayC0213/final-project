// Story Page 2

let music = document.getElementById("myChoiceOfMusic");
    music.volume = 0.3;

document.getElementById("story-time-5").addEventListener("click", function() {
    document.getElementById("story-time-6").classList.add("class-fade");
});

document.getElementById("story-time-6").addEventListener("click", function() {
    document.getElementById("story-time-7").classList.add("class-fade");
});

document.getElementById("story-time-7").addEventListener("click", function() {
    document.getElementById("story-time-8").classList.add("class-fade");
    document.getElementById("story-time-5").classList.add("disappear");
    document.getElementById("story-time-6").classList.add("disappear");
    document.getElementById("story-time-7").classList.add("disappear");
});

document.getElementById("story-time-8").addEventListener("click", function() {
    document.getElementById("story-time-8").classList.add("disappear");
    document.getElementById("question-2").classList.add("class-fade");
});

document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("response2").classList.add("class-fade");
    document.getElementById("go-next-button3").classList.add("class-fade");
});