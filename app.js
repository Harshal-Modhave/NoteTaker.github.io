// logic for mark as important and update button are as follows:
/*
  1. mark as important: create one object-literal and push the title and note into it.
  2. update: grab the updateButton, when user clicks onto it display that note onto card and make it as editable then follow the same procedure for add note again. 
*/


console.log("Welcome to app.js");

// If user adds a note, add it to the localstorage
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById('addTitle');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  noteObj.push(myObj);
  // noteObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addTxt.value = "";
  addTitle.value = "";
  // addTitle.value = "";
  // console.log(noteObj);
  showNotes();
});

// let updateBtn = document.getElementById('addUpdateBtn');
// updateBtn.addEventListener('click', function(e){
//   let addTxt = document.getElementById('addTxt');

//   let notes = localStorage.getItem('notes');
//   if(notes==null){
//     noteObj = [];
//   }
//   else{
//     noteObj = JSON.parse(notes);
//   }
//   noteObj.innerHTML = new html;
//   localStorage.setItem('notes', JSON.stringify(noteObj));
//   updateNote();
// });

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  let html = "";
  noteObj.forEach(function (element, index) {
    html += `  
      <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <div class="mb-3">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                <button class="btn btn-primary" id="addBtn">Update</button>
            </div>
        </div>
      </div>
    `;
  });
  let notesElm = document.getElementById("notes");
  if (noteObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to display! Use "Add note" button to add note`;
  }
}

function deleteNote(index) {
  // console.log("I am deleting now", index+1);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();
}

// function updateNote(index){
//   let notes = localStorage.getItem('notes');
//   if(notes==null){
//     noteObj = [];
//   }
//   else{
//     noteObj = JSON.parse(notes);
//     noteObj = document.getElementById('addTitle')
//     noteObj.innerHTML = new html;
//   }
// }

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  console.log("Input event is fired", inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});

// further features
// 1. add title
// 2. mark important
// 3. update note
// 4. seperate by seperate user
// 5. sync and host to web server

// function updateNote(index) {
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         noteObj = [];
//     }
//     else {
//         noteObj = JSON.parse(notes);
//     }

// }
