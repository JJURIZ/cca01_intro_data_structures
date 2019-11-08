let nameText = document.getElementById("name-text"),
    typeText = document.getElementById("type-text"),
    yearText = document.getElementById("year-text"),
    addButton = document.getElementById("add-button"),
    clearButton = document.getElementById("clear-button"),
    displayDiv = document.getElementById("display-area"),
    nextId = 0,
    starTrekData = [];

let StarTrekList = function StarTrekList(nameText, typeText, yearText){
    this.StarTrekList = {};

    this.nameText = nameText;
    this.typeText = typeText;
    this.yearText = yearText;
    this.id = nextId++;

    this.displayItem = function displayItem() {
        return "Title: " + nameText + " - " +
        "Type: " + typeText + " - " +
        "Year: " + yearText;
    }
}

let renderData = function renderData(){
    displayDiv.innerHTML = "";
    for(let i = 0; i < starTrekData.length; i++){
        let currentItem = starTrekData[i];
        displayDiv.innerHTML += i + " : " + currentItem.displayItem() + "<br>";
    }
};

let clearInputs = function clearInputs(){
    nameText.value = "";
    typeText.value = "";
    yearText.value = "";
};

addButton.addEventListener("click", function(){
    if(nameText.value === "" || typeText.value === "" || yearText.value === ""){
        alert("Please complete each field before proceeding.")
        return;
    }
    let newEntry = new StarTrekList(nameText.value, typeText.value, yearText.value);
    starTrekData.push(newEntry);

    clearInputs();
    renderData();
}); 

clearButton.addEventListener("click", function(){
    starTrekData = [];
    renderData();
    clearInputs();
})