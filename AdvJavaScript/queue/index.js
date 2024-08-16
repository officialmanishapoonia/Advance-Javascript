var Queue = /** @class */ (function () {
    function Queue() {
        this.que = [];
        this.first = 0;
        this.rear = -1;
    }
    Queue.prototype.enqueue = function (item) {
        this.que.push(item);
        this.rear++;
    };
    Queue.prototype.dequeue = function () {
        this.que.splice(this.first, 1);
        this.first++;
    };
    Queue.prototype.peek = function () {
        return this.que[this.first - 1];
    };
    return Queue;
}());
var q1 = new Queue();
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
