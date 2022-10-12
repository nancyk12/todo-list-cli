const prompt = require(`prompt-sync`)({sigint: true});

/*
1. Display content to the user
2. Promt the user for an action
3. Handle that action accordingly
Start off by adding the comment for each of the these.
*/






let todo_list = []
    welcomeMessage();//welcome user, only runs once

while(true){

    //get user input(option selct returns integer 1-3) runs many times
    //unless user puts in 3, and we breat from the loop
    let opt = selectOption();

    //handle the options the user selects
    if(opt === 1){
    console.log("User selected 1");
    }else if (opt === 2){
        console.log("User selected 2");
    }else if (opt === 3){
        console.log("Exiting program...");
        break;
    } 

}
//define welcome message
function welcomeMessage(){
    console.log("Welcome to the To-Do List Manager Application");
    console.log("========================================================");
}

//define selectOption ask user for iput

function selectOption(opts){
    
    console.log("~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Exit Program");
    const option = Number(prompt('>'));
    return option;
}

