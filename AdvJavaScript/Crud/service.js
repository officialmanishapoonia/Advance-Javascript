const url = 'https://jsonplaceholder.typicode.com/todos/';

export const getTodos=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    return data;
};

export const createTodo= async(todo)=>{
    const response=await fetch(url,{
        method:'POST',
        body:JSON.stringify(todo),
        headers:{
            'content-type':'application/json',
        },
    });
    const data=await response.json();
    console.log(data);
    return data;


};

export const deleteTodo=async(id)=>{
    
    const response = await fetch(`${url}${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete the todo item');
    }
    else{
        console.log('Deleted',`${id}`);
    }

    return getTodos();
    
}

export const updateTodo=async(id,todo)=>{
    const response=await fetch(`${url}${id}`,{
        method:'PUT',
        body:JSON.stringify(todo),
        headers:{
            'content-type':'application/json',
        },

    });
    if(!response.ok)
    {
        console.log('failed to update');
    }
    else{
        console.log('updated successfully',`${id}`,'to',todo);
    }
    return getTodos();

}