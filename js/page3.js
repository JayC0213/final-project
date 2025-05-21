// Story Page 3

let music = document.getElementById("myChoiceOfMusic");
    music.volume = 0.3;

document.getElementById("boba-pic").addEventListener("click", function() {
    document.getElementById("line-4").classList.add("class-fade");
});

document.getElementById("line-4").addEventListener("click", function() {
    document.getElementById("page3-story-1").classList.add("class-fade");
});

document.getElementById("page3-story-1").addEventListener("click", function() {
    document.getElementById("page3-story-2").classList.add("class-fade");
});

document.getElementById("page3-story-2").addEventListener("click", function() {
    document.getElementById("questionare").classList.add("class-fade");
});

document.getElementById("questionare").addEventListener("click", function() {
    document.getElementById("button-next").classList.add("class-fade");
});

document.getElementById("button-next").addEventListener("click", function() {
    document.getElementById("page3-story-3").classList.add("class-fade");
});

document.getElementById("page3-story-3").addEventListener("click", function() {
    document.getElementById("page3-story-4").classList.add("class-fade");
});

document.getElementById("page3-story-4").addEventListener("click", function() {
    document.getElementById("page3-story-5").classList.add("class-fade");
});

document.getElementById("page3-story-5").addEventListener("click", function() {
    document.getElementById("line-1").classList.remove("dialogueFade");
    document.getElementById("line-1").classList.add("disappear");
    document.getElementById("line-2").classList.remove("dialogueFade");
    document.getElementById("line-2").classList.add("disappear");
    document.getElementById("line-3").classList.remove("dialogueFade");
    document.getElementById("line-3").classList.add("disappear");
    document.getElementById("line-4").classList.remove("dialogueFade");
    document.getElementById("line-4").classList.add("disappear");
    document.getElementById("countdown-3").classList.remove("dialogueFade");
    document.getElementById("countdown-3").classList.add("disappear");
    document.getElementById("countdown-2").classList.remove("dialogueFade");
    document.getElementById("countdown-2").classList.add("disappear");
    document.getElementById("countdown-1").classList.remove("dialogueFade");
    document.getElementById("countdown-1").classList.add("disappear");
    document.getElementById("boba-pic").classList.remove("dialogueFade");
    document.getElementById("boba-pic").classList.add("disappear");
    document.getElementById("questionare").classList.add("disappear");
    document.getElementById("button-next").classList.add("disappear");
    document.getElementById("page3-story-1").classList.add("disappear");
    document.getElementById("page3-story-2").classList.add("disappear");
    document.getElementById("page3-story-3").classList.add("disappear");
    document.getElementById("page3-story-4").classList.add("disappear");
    document.getElementById("page3-story-5").classList.add("disappear");
    document.getElementById("page3-story-5").classList.add("class-fade");
    document.getElementById("go-next-button4").classList.add("class-fade");
});