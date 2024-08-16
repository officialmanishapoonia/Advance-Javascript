class Queue<T>
{
    que:T[]=[];
    first:number=0;
    rear:number=-1;
    enqueue(item:T)
    {
        this.que.push(item);
        this.rear++;
    }
    dequeue()
    {
        this.que.splice(this.first,1);
        this.first++;
        this.rear--;
        //use shift operation
    }
    peek()
    {
        return this.que[this.first-1];
    }



}

const q1= new Queue<Number>();
q1.enqueue(100);
q1.enqueue(200);
q1.enqueue(300);
q1.enqueue(400);
q1.enqueue(500);

console.log(q1.que);
q1.dequeue();
console.log(q1.que);
console.log(q1.peek());
console.log(q1.que);
