/* DOM selection 
   Event listener
   Basic validation
   Create emements
   Append

*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('button');
const bookList = document.querySelector('#bookList');
const formbook = document.querySelector('#form');


formbook.addEventListener('submit', function(e){
    e.preventDefault();
    if(title.value == '' || author.value == '' || year.value==''){
        alert('Please enter something');
    }else{
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        bookList.appendChild(newRow);
    }
})