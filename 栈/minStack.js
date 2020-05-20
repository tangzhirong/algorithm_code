// 最小栈  辅助栈minStack  也可以用一个辅助变量来存储当前最小值
class MinStack {
    constructor() {
        this.dataStack = new Stack();
        this.minStack = new Stack();

        this.push = (value) => {
            this.dataStack.push(value);
            if (this.minStack.isEmpty() || value < this.minStack.top()) {
                this.minStack.push(value);
            }
        }

        this.pop = () => {
            let x = this.dataStack.pop();
            if (x === this.minStack.top()) {
                this.minStack.pop();
            }
        }

        this.top = () => {
            return this.dataStack.top();
        }

        this.getMin = () => {
            return this.minStack.top();
        }
    }
}