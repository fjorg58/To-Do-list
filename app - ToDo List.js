let input = prompt('What would you like to do?');
const ToDo = ['groceries', 'research insurance'];

while (input !== 'quit' && input !== 'q') {
    if (input === "list") {                             //Handles List items
        console.log('**********')
        for (let i = 0; i < ToDo.length; i++) {
            console.log(`${i}: ${ToDo[i]}`);
        }
        console.log('**********')
    } else if (input === 'new') {                       //Handles New Inputs
        const newToDo = prompt('What is your new To Do Item?');
        ToDo.push(newToDo);
        console.log(`New To Do \"${newToDo}\" added to the list`);
    } else if (input == 'del') {                        //Handles deletes
        const newDel = parseInt(prompt('Enter index to delete'));
        console.log(Number.isNaN(newDel));
        console.log(ToDo.length);
        if (!Number.isNaN(newDel) && newDel < ToDo.length){
        ToDo.splice(newDel, 1);
        console.log(`To Do index \"${newDel}\" was removed from the list`);
        } else{
            console.log('Unknown Index!')
        }
    }

    input = prompt('What would you like to do?');
}
console.log('Ok, quit the app');
