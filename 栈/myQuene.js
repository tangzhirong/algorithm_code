// 用两个栈实现队列
class Quene {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();

        this.push = (value) => {
            this.stack1.push(value);
        }

        this.pop = () => {
            // 如果stack2为空
            if (this.stack2.size() <= 0) {
                while(this.stack1.size() >= 0) {
                    this.stack2.push(this.stack1.pop());
                }
            }
            return this.stack2.pop();
        }
    }
}