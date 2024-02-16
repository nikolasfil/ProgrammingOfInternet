
// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// addNewTask('Some task', new Date(2023, 2, 23));
addNewTask('Some task', new Date(2023, 1, 23));
addNewTask('Another task', new Date());
addNewTask('And another task', new Date());

info();
colorEveryOddTask()
clickingEvents();

function info() {
    let total = getTotalCount();
    let done = getDoneCount();

    document.querySelector(".total").innerHTML = total;
    document.querySelector(".left-todo").innerHTML = total - done;
    // alert('A')
}


function getDoneCount() {
    return document.querySelectorAll("li.done").length

}

// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() {
    return document.querySelectorAll("li").length
}

// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    let li = document.querySelectorAll("li")
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("odd");
        if (i % 2 == 0) {
            li[i].classList.add("odd")
        }
    }
}


function clickPress(event) {
    if (event.key == "Enter") {
        if (event.target.value != "") {
            // .toLocaleDateString()
            addNewTask(event.target.value, new Date());
            colorEveryOddTask();
            info();
            event.target.value="";
        }
    }
}


function addNewTask(data, date) {
    let x = document.querySelector(".task-list")
    let list_item = document.createElement("li");
    x.appendChild(list_item)
    list_item.addEventListener("dblclick", function () {
        this.remove();
        info();
        colorEveryOddTask();
    })

    list_item.addEventListener("click", function () {
        this.classList.toggle("done");
        
        info();
    })
    list_item.innerHTML = "<span class='date'>" + date.toLocaleString("el-gr", options) + "<br>" + dating(date).toString() + "</span>" + "<span>" + data + "</span>";
    // list_item.innerHTML = "<span class='date'>" + date.toLocaleString("el-gr",options) +"<br>" + "</span>" + "<span>" + data + "</span>";


}


function dating(date) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    // const firstDate = new Date(2008, 1, 12);
    // const secondDate = new Date(2008, 1, 22);

    const diffDays = Math.floor(Math.abs((new Date() - date) / oneDay));
    // const diffDays = Math.floor((new Date() - date) / oneDay);
    
    if (diffDays==0){
        return "Σημερα"
    }
    else if (diffDays==1){
        return "Χτες"
    }

    // let d = new Date() - date
    return diffDays+" ημέρες πριν"
}

