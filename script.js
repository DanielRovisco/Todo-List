/*============
  VARIABLES
=============*/
const createTaskBtn = document.querySelector(".create")
const tasksWrap = document.querySelector(".taskWrap")
const inboxWrap = document.querySelector(".inboxDisplay")
const upperText = document.querySelector(".upperText")
const sideNav = document.querySelector(".sidenav")
const allTasks = document.querySelectorAll(".task")

let i = 0;

/*============
  EVENT-LIST
=============*/
createTaskBtn.addEventListener("click", createTaskFunction);
document.addEventListener("keydown", enterTaskName);
document.addEventListener("click", addAndRemoveTask);
sideNav.addEventListener("click", selectPage);
/*============
  FUNCTIONS
=============*/

function createTaskFunction() {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  tasksWrap.appendChild(newTask); //Create and append the task to the task wrap

  const taskInput = document.createElement("input");
  taskInput.classList.add("taskname")
  taskInput.setAttribute("type", "text");
  taskInput.setAttribute("placeHolder", "Task");
  newTask.appendChild(taskInput); //Add the task input to the task

  const doneBtn = document.createElement("i");
  doneBtn.classList.add("fa-circle-check");
  doneBtn.classList.add("fa-regular");
  newTask.appendChild(doneBtn); //Add the done button to the task

  const removeBtn = document.createElement("i");  
  removeBtn.classList.add("fa-ban");
  removeBtn.classList.add("fa-solid");
  newTask.appendChild(removeBtn); //Add the remove button to the task

  i++; //Increment the number of tasks existing in the list
 
  
} //Button to create the task

function enterTaskName(e){

  if (13 === e.keyCode && (e.target.classList.contains("taskname"))){ //if the user presses enter and its input 
    const taskNameP = document.createElement("p"); //Create Paragraph element
    const inputText = e.target.value; //Gets the text of the input element
    const fullTask = e.target.parentNode; //Gets the fullTask 
    // Enter is pressed
    e.target.remove() //The input element is removed
    taskNameP.innerHTML = inputText; //Atributes the text of the input element to the paragraph
    console.log(fullTask); 
    fullTask.prepend(taskNameP)
  }

} //To get the name into the task

function addAndRemoveTask(e){
  const paragraph = e.target.parentNode.childNodes[0];
  const checkBtn = e.target.parentNode.childNodes[3];
  const deleteBtn = e.target.parentNode.childNodes[5];
  const task = paragraph.parentNode;

  //If its the Done Button
  if (e.target.classList.contains("fa-circle-check")){

    paragraph.classList.toggle("completed");
    
  }


  //If its the Remove Button
  if (e.target.classList.contains("fa-ban")){
    task.classList.add("removed");
    task.addEventListener("transitionend", deleteFunction)
    function deleteFunction(){
      task.remove()
    }

    i--
  }
} //Done and remove function

function selectPage(e){
  const item = e.target;
  const itemName = item.childNodes[2].innerHTML;
  upperText.innerHTML = itemName; //Changing the name


  //If its the Inbox
  if(upperText.innerHTML === "Inbox"){
    tasksWrap.style.display = "none";
    inboxWrap.style.display = "flex";
    createTaskBtn.style.opacity =0;

    
  };

  //If its the Tasks
  if(upperText.innerHTML === "Tasks"){
    tasksWrap.style.display = "flex";
    inboxWrap.style.display = "none";
    createTaskBtn.style.opacity =1;

    const numberOfTasks = tasksWrap.childElementCount;
    const task = tasksWrap.children

    for (let i = 0; i < numberOfTasks; i++) {

      let x = 1;
      if (task[i].firstChild.classList.contains("completed")) {
        task[i].style.display = "flex";
      } else{
        task[i].style.display = "flex";

      }
    }
  };

  //If its the Completed 
  if(upperText.innerHTML === "Completed"){
    const numberOfTasks = tasksWrap.childElementCount + 1;
    const task = tasksWrap.children
    const taskName = task.firstChild
    tasksWrap.style.display = "flex";
    inboxWrap.style.display = "none";
    
    
    for (let i = 0; i = numberOfTasks; i++) {
      console.log(i)
      const paragraph = task[i].childNodes[0];

      console.log(numberOfTasks)
      console.log(i)
      console.log(paragraph);

      if (paragraph.classList.contains("completed")) {
        task[i].style.display = "none";
      } 
      
      
    }//Show if its done
    
    
  }
  
  //Select the page and change content 
}
