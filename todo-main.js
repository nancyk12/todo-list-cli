const prompt = require(`prompt-sync`)({sigint: true});

/*
*
*
*Start off your project by creating a loop that loops forever (using a while loop. Inside this loop you'll want to do three things:)

1. Display content to the user
2. Promt the user for an action
3. Handle that action accordingly
Start off by adding the comment for each of the these.


Task: add another option called "clear todo list" that removes all tasks from the todo list
*/

/* Greysons's comments: Hey Nancy, nice clear all feature but this project does not indicate weather items are Complete or Incomplete as showcased in the github instructions. Please add that feature for full credit!
 */

let todo_list = []
    welcomeMessage();//welcome user, only runs once
let statusArray = [];    

while(true){

    //display current todo list to user
    displayTodoList(todo_list);

    //get user input(option selct returns integer 1-3) runs many times
    //unless user puts in 3, and we breat from the loop
    let opt = selectOption();

    //handle the options the user selects
    if(opt === 1){
        const newItem = addTodoItem();
        todo_list.push(newItem);
        statusArray.push(false);

    }else if(opt === 2){
        if(todo_list.length !== 0){  //from Greyson video 10/5/22
            console.log(`\n~ Completing a to-do item ~`);
            console.log(`Which to-do item would like to complete?`);
            displayTodoList(todo_list);
            //complete an item

            let newStatus = Number(prompt('> '));

            //console.log("newStatus check: " + newStatus);
            //console.log("type check: " + typeof newStatus);
            while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
                
                console.log('Please input a number that corresponds to an item in the list: ');
                newStatus = Number(prompt('> '));
            }

            statusArray[newStatus-1] = true;
            } else {
                console.log("Please add something to your to-do list before trying to complete an item");
            }

    }else if (opt ===3){
        clearTodoList();
        
    }else if (opt === 4){
        console.log("Exiting program...");
        break;
    } 

}
//define welcome message
function welcomeMessage(){
    console.log("\nWelcome to the To-Do List Manager Application\n");
    console.log("========================================================\n");
}

function addTodoItem(){
    console.log("~ Creating a new to-do item~");
    console.log("What is this to-do item called?");
    const item = prompt(">");
    return item;
    //console.log("[Incomplete] " + item);// code I added to mark item is incomplete, per Grayson's comments

}   
function completeItem(){
    console.log("~Completing a to-do item~");
    console.log("Which item would you like to complete?");
    const item = prompt(">");
    return item;
}
function clearTodoList(){
    console.log("~Clearing the to-do list~");
    console.log("To clear to-list enter: \n yes \n no");
    const clearList = prompt(">");
        if(clearList == "yes"){
            todo_list.splice(0,todo_list.length);
    }}


function displayTodoList(todo){

    //when there are zero elements in the list, print
    //list is empty
if (todo.length == 0){
    console.log("Your to-do list is empty.\n");
    //if it's not empty, print out dod list items
} else {
    //print how many things there are to do in our list
    console.log(`there are ${todo.length} in our todo-list`);

    //print each entry in the todo list to the user
    for (let i =0; i < todo.length; i++){
        let status = "";

        if(statusArray[i] === false){
            status = "[incomplete]"
        }else if(statusArray[i] === true){
            status = '[complete]'
        } console.log(`${i + 1}. ${status} ${todo[i]}`);
    }

console.log("\n");
}
}

//define selectOption ask user for iput
function selectOption(){
    
    console.log("~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");  
    console.log("[3] Clear to-do list")
    console.log("[4] Exit Program");
    const option = Number(prompt(">"));
    return option;
}
