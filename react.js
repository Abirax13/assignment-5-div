document.getElementById("bttn1").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Task Finished");
    }
})

document.getElementById("bttn2").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Task Finished");
    }
})

document.getElementById("bttn3").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Task Finished");
    }
})

document.getElementById("bttn4").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Task Finished");
    }
})

document.getElementById("bttn5").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Task Finished");
    }
})

document.getElementById("bttn6").addEventListener("click", function(){
    this.disabled = true;
    let task= document.getElementById("task-assigned").innerText;
    let finalTask= document.getElementById("total-counter").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask-1;
    let updatedFinalTask = convertedFinalTask+1;
    document.getElementById("task-assigned").innerText=updatedTask;
    document.getElementById("total-counter").innerText=updatedFinalTask;
    alert("Board Updated Successfully!");
    if(convertedTask<=1){
        alert("Task Finished");
    }
})

const colors = ["#E0BBE4", "#D4F4DD", "#B3E5FC", "#FFC1C1","#f4f7ff"];
let colorIndex = 0;

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

document.addEventListener("DOMContentLoaded", function () {
    const messageSection = document.getElementById("massage");
    const clearHistoryBtn = document.getElementById("clear-history");

    function getCurrentTimeDate() {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();
        return `${time} on ${date}`;
    }

    function addMessage(taskName) {
        const message = document.createElement("p");
        message.textContent = `You have completed the task: ${taskName} at ${getCurrentTimeDate()}`;
        message.classList.add("p-2", "rounded-lg", "bg-gray-100", "mt-2");
        messageSection.appendChild(message);
    }

    document.querySelectorAll("[id^='bttn']").forEach(button => {
        button.addEventListener("click", function () {
            const taskName = this.closest(".card-body").querySelector(".card-title").textContent;
            addMessage(taskName);
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        messageSection.innerHTML = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dayNameElement = document.getElementById("day-name");
    const dateElement = document.getElementById("current-date");
    const today = new Date();
    const options = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    dayNameElement.textContent = formattedDate.split(",")[0].toUpperCase();
    dateElement.textContent = formattedDate.split(",").slice(1).join(",").trim();
});
