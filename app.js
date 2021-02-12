const todolist = document.querySelector('#todolist');
const findtodos = document.querySelector('#find');
const addtodos = document.querySelector('#add');


// ADDING TODOS

const generatelist = addinput =>{
    const create = document.createElement('li');
    const html =
    `<li class=listitem>
    <span>${addinput}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`
    create.innerHTML += html;
    todolist.append(create);
};

add.addEventListener('submit', (e) =>{
    e.preventDefault();
    const addinput = addtodos.addtodo.value.trim();
    if(addinput.length){
        const ls = localStorage.getItem('LocalTask');
        if(ls === null){
            mtodo = [];
        }
        else{
            mtodo = JSON.parse(ls);
        }
        mtodo.push(addinput);
        localStorage.setItem('LocalTask',JSON.stringify(mtodo));
        generatelist(addinput);
        addtodos.reset();
    }
});

// REMOVING TODOS

todolist.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        const removels = localStorage.getItem('LocalTask');
        console.log(removels);
        // removels.forEach((item) =>{
            
        // });
    }
});

//SEARCH TODOS

filtertodos = (term) =>{
    Array.from(todolist.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('hide'));

    Array.from(todolist.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('hide'));
};


findtodos.addEventListener('keyup', (e) =>{
    const term = findtodos.findtodo.value.toLowerCase().trim();
    filtertodos(term);
});

// LOCAL STORAGE

// retrive local storage
document.addEventListener('DOMContentLoaded', () =>{
        const ls = localStorage.getItem('LocalTask');
        if(ls == null){
            mtodo = [];
        }
        else{
            mtodo = JSON.parse(ls);
        }
        mtodo.forEach((todo) =>{
            generatelist(todo);
        })
});



