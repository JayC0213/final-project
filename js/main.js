
// Story Page 1

let music = document.getElementById("myChoiceOfMusic");
    music.volume = 0.3;

document.getElementById("story-time-1").addEventListener("click", function() {
    document.getElementById("story-time-2").classList.add("class-fade");
});

document.getElementById("story-time-2").addEventListener("click", function() {
    document.getElementById("story-time-3").classList.add("class-fade");
});

document.getElementById("story-time-3").addEventListener("click", function() {
    document.getElementById("story-time-4").classList.add("class-fade");
});

document.getElementById("story-time-4").addEventListener("click", function() {
    document.getElementById("story-time-1").classList.add("disappear");
    document.getElementById("story-time-2").classList.add("disappear");
    document.getElementById("story-time-3").classList.add("disappear");
    document.getElementById("story-time-4").classList.add("disappear");
    document.getElementById("question-1").classList.add("class-fade");
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response1").classList.add("class-fade");
    document.getElementById("go-next-button2").classList.add("class-fade");
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("response1").classList.add("class-fade");
    document.getElementById("go-next-button2").classList.add("class-fade");
});