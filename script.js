//Variaveis
/*============
  VARIABLES
=============*/
const createCategorie = document.querySelector(".create-categorie"); //Create a new categorie text
const createTask = document.querySelector(".create-task"); //Create a new task text
const categorieContainer = document.querySelector(".categories-container"); //Categories Container
const buttonTitle = document.querySelector("body"); //Body
const categorieParagrafTitle = document.getElementsByClassName("title"); //Categories Title
let i = 0;
let x = 0;
let z = 0;
let categorieTitle;
let categorieList;

/*============
  EVENT-LIST
=============*/

createCategorie.addEventListener("click", newCategorie);
buttonTitle.addEventListener("click", addCategorieTitle);
buttonTitle.addEventListener("click", doneAndRemove);
buttonTitle.addEventListener("click", addTask);
buttonTitle.addEventListener("click", removeCategorie);
/*============
  FUNCTIONS
=============*/

if (categorieContainer.childElementCount === 0) {
  createCategorie.classList.add("pulse");
}

//FUNCTION TO CREATE A CATEGORIE

function newCategorie() {
  const newCategorie = document.createElement("div"); //Create Categorie DIV
  newCategorie.classList.add("categorie");
  newCategorie.classList.add(`${i++}`);
  categorieContainer.append(newCategorie);

  let categorieTitle = document.createElement("div"); //Create Categorie Title DIV
  categorieTitle.classList.add("categorie-title");
  categorieTitle.innerHTML = `<form>
  <input class="input-title ${z++}" placeholder="Give me a name!" />
  <button class="button-title ${x++}" type="submit"></button> </form> <i class="fas fa-ban"></i>`;
  newCategorie.append(categorieTitle);

  const categorieList = document.createElement("div"); //Create Categorie List DIV
  categorieList.classList.add("categorie-list");
  newCategorie.append(categorieList);

  const form = document.createElement("form"); //Create Input Form
  form.classList.add("input-form");
  categorieList.append(form);
  form.innerHTML = `<input type="text" class="input" placeholder="ADD" /><button type="submit" class="addBtn"><i class="far fa-plus-square"></i></button>`;

  if (categorieContainer.childElementCount > 0) {
    createCategorie.classList.remove("pulse");
  }
}

//FUNCTION TO ADD CATEGORIE TITLE
function addCategorieTitle(e) {
  const form = e.target.parentNode;
  const title = form.parentNode;
  const input = form.children[0];
  const inputNr = input.classList[1];
  const buttonNr = e.target.classList[1];
  const categorieNr = title.parentNode.classList[1];
  e.preventDefault();
  const inputValue = input.value;

  if (
    inputNr === buttonNr &&
    buttonNr === categorieNr &&
    e.target.classList[0] === "button-title"
  ) {
    title.innerHTML = `<p class="title">${inputValue}</p> <i class="fas fa-ban"></i>`;
  }
}

//FUNCTION TO MARK COMPLETE OR DELETE
function doneAndRemove(e) {
  const className = e.target.classList[1];
  const iconsDiv = e.target.parentNode;
  const todo = iconsDiv.previousElementSibling;
  const iconMinus = iconsDiv.children[0];
  const iconDone = iconsDiv.children[1];
  const todoContainer = iconsDiv.parentNode;

  if (className === "fa-check-square") {
    todo.classList.toggle("done");
    iconDone.classList.toggle("checked");
    iconMinus.classList.toggle("checked");
  }

  if (className === "fa-minus-square") {
    todoContainer.classList.add("removed");
    iconDone.classList.toggle("checked");
    iconMinus.classList.toggle("checked");
    addEventListener("animationend", function (e) {
      todoContainer.remove();
    });
  }
}

//FUNCTION TO ADD A TASK

function addTask(e) {
  e.preventDefault;
  const input = e.target.previousElementSibling;
  const inputForm = input.parentNode;
  const categorieList = inputForm.parentNode;
  const titleDiv = categorieList.previousElementSibling;
  const title = titleDiv.children[0].innerText;

  if (e.target.classList[0] === "addBtn") {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    categorieList.append(todoContainer);

    const text = document.createElement("p");
    text.classList.add("todo-text");
    todoContainer.append(text);

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("todo-icons");
    todoContainer.append(iconContainer);

    text.innerText = input.value;
    iconContainer.innerHTML = ` <i class="far fa-minus-square"></i><i class="far fa-check-square"></i>`;
    inputForm.remove();

    const form = document.createElement("form"); //Create Input Form
    form.classList.add("input-form");
    categorieList.append(form);
    form.innerHTML = `<input type="text" class="input" placeholder="ADD" /><button type="submit" class="addBtn"><i class="far fa-plus-square"></i></button>`;
  }
}

//FUNCTION TO REMOVE A CATEGORIE
function removeCategorie(e) {
  const titleContainer = e.target.parentNode;
  const categorieContainer = titleContainer.parentNode;

  if (e.target.classList[1] === "fa-ban") {
    categorieContainer.classList.add("removeCategorie");
    addEventListener("animationend", function (e) {
      categorieContainer.remove();
    });

    function createPulse() {
      const categorieContainerPulse = document.querySelector(
        ".categories-container"
      );

      const nrOfCategories = categorieContainerPulse.childElementCount - 1;

      if (nrOfCategories === 0) {
        createCategorie.classList.add("pulse");
      }
    }

    createPulse();
  }
}

//ADDING TO THE LOCAL STORAGE
