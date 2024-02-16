// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//
colorEveryOddTask()
info();
clickingEvents();



function info() {
    let total = getTotalCount()
    let done = getDoneCount()

    document.querySelector(".total").innerHTML = total
    document.querySelector(".left-todo").innerHTML = total - done
}

// document.getElementsByTagName('li').addEventListener("click", function() { this.classList.add("done") });

// oneclick();
//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// let x = document.getElementById("mySelect");

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
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
        if (i % 2 == 0) {
            li[i].classList.add("odd")
        }
    }
}


function clickPress(event) {
    if (event.key == "Enter") {
        let x = document.getElementsById("t-list");
        let list_item = document.createElement("li");
        list_item.text = event.target.value;
        // alert(list_item.text);

        // document.getElementsByClassName("task-list").appendChild(list_item);
        document.getElementsById("task-list").appendChild(list_item);


        // var li = document.createElement("li");
        // li.innerHTML = "Item";

    }
}


// document.getElementById("t-list").addEventListener("keypress", clickPress);

// document.querySelectorAll(".task-list>li").onclick = function () { this.classList.add("done") }

// document.querySelectorAll(".task-list>li").ondblclick = function () { this.classList.remove("done") }

function clickingEvents() {

    let li = document.querySelectorAll("li")

    // let spa = li.se

    for (let d in li) {
        
        li[d].addEventListener("dblclick", function () {
            this.classList.remove("done");
        })
        
        li[d].addEventListener("click", function () {
            this.classList.add("done");
        })
        
        info();
    }

}

