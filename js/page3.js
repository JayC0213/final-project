// Story Page 3

let music = document.getElementById("myChoiceOfMusic");
    music.volume = 0.3;

document.getElementById("story-time-9").addEventListener("click", function() {
    document.getElementById("story-time-10").classList.add("class-fade");
});

document.getElementById("story-time-10").addEventListener("click", function() {
    document.getElementById("story-time-11").classList.add("class-fade");
});

document.getElementById("story-time-11").addEventListener("click", function() {
    document.getElementById("story-time-12").classList.add("class-fade");
    document.getElementById("story-time-9").classList.add("disappear");
    document.getElementById("story-time-10").classList.add("disappear");
    document.getElementById("story-time-11").classList.add("disappear");
});

document.getElementById("story-time-8").addEventListener("click", function() {
    document.getElementById("story-time-8").classList.add("disappear");
    document.getElementById("question-2").classList.add("class-fade");
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response2").classList.add("class-fade");
    document.getElementById("go-next-button3").classList.add("class-fade");
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("response2").classList.add("class-fade");
    document.getElementById("go-next-button3").classList.add("class-fade");
});