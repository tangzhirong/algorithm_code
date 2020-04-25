// 栈
class Stack {
    constructor() {
        this.data = [];
        this.size = 0;
        this.push = (value) => {
            this.data.push(value);
            this.size ++;
        }
        this.pop = () => {
            try {
                if (this.size) {
                    this.size --;
                    return this.data.pop();
                } else {
                    throw new Error('can not pop, stack is empty');
                }
            } catch(err) {
                console.log(err);
            }
        }
    }
}

const s = new Stack();
s.push(1);
console.log(s.data);
s.push(2);
console.log(s.data);
const t = s.pop();
console.log(s.data);


// 队列
function Quene() {
    this.data = [];
    this.size = 0;
}

Quene.prototype.inquene = function(value) {
    this.data.push(value);
    this.size ++;
}

Quene.prototype.dequene = function() {
    try {
        if (this.size) {
            this.size --;
            return this.data.shift();
        } else {
            throw new Error('can not dequene, stack is empty');
        }
    } catch(err) {
        console.log(err);
    }
}

const q = new Quene();
q.inquene(1);
console.log(q.data);
q.inquene(3);
console.log(q.data);
q.dequene();
console.log(q.data);

