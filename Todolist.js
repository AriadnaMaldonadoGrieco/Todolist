window.addEventListener('load', () =>{
    const newform = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const todos = document.querySelector("#tasks");
    

    newform.addEventListener('submit', (e) => {

        //Previene que la pagina se recargue cada vez que hacemos click al boton
        e.preventDefault();

        //Guarda en la variable el input del usuario
        const task = input.value;

        if(!task)  {
            alert ("Oops! Your task is empty! Please write something to make a new task")
            return;
        }

        //Crea los div donde van a estar las tareas
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        //mete el contenido dentro de la task
        task_el.appendChild(task_content_el);


        //Crea el input del usuario como task y lo establece como readonly
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        //mete ese input en el contenido de la task
        task_content_el.appendChild(task_input_el);

        //Crea el contenedor de los botones de accion
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        //Crea el boton de editar
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");

        //Crea el icono de editar
        const editicon = new Image();
        editicon.src = 'editicon.png' ;
        task_edit_el.appendChild(editicon);


         //Crea el boton de guardar
         const task_save_el = document.createElement("button");
         task_save_el.classList.add("save");

        //Crea el icono de guardar
        const saveicon = new Image();
        saveicon.src = 'saveicon.png';
        task_save_el.appendChild(saveicon);
        

        
        //Crea el boton de borrar
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        

        //crea el icono de borrar
        const deleteicon = new Image();
        deleteicon.src = 'deleteicon.png' ;
        task_delete_el.appendChild(deleteicon);


        //mete los botones dentro de su contenedor
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_save_el);
        task_actions_el.appendChild(task_delete_el);
        
        

        //mete el contenedor de los botones en el contenedor de la task
        task_el.appendChild(task_actions_el);

        //mete la task en el contenedor de todas las tareas
        todos.appendChild(task_el);

        //Hace que cuando se agrega una task, se borra del input automaticamente
        input.value = "";
        
        task_edit_el.onclick = function editTheTask (){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            
    
        }
        
        task_save_el.onclick = function saveTheTask (){
            task_input_el.setAttribute("readonly", "readonly");
            
    
        }
        //Nos permite borrar el task
        task_delete_el.addEventListener('click', () => {

            todos.removeChild(task_el);
        });
        
    });
});