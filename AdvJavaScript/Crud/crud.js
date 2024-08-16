import { getTodos,createTodo, deleteTodo,updateTodo } from "./service.js";


(async()=>{
    try{
        let data=await getTodos();
        console.log('READ ALL',data.length);
        const newTodo={
            userId:1,
            title:'New Todo',
            completed:false,
        };
        data=await createTodo(newTodo);
        console.log(data)
        console.log('CREATE',data.length);
        
        const id=201;
        data=await deleteTodo(id);
        console.log('DELETE',data.length);
       
        const updateId=7;
        const updatedTodo={
            userId:6,
            title:'Updated Todo',
            completed:false,
        };

        data=await updateTodo(updateId,updatedTodo);
        console.log('UPDATE',data.length);

    }
    catch(error)
    {
        console.log('Error',error);
    }

})();