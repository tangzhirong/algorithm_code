// 有效的括号
let isValid = (s) => {
    let arr = [];
    if (s.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < s.length; i ++) {
        let letter;
        switch(s[i]) {
            case '(':
                arr.push(s[i]);
                break;
            case '[':
                arr.push(s[i]);
                break;
            case '{':
                arr.push(s[i]);
                break;
            case ')':
                letter = arr.pop();
                if (letter !== '(') {
                    return false;
                }
                break;
            case ']':
                letter = arr.pop();
                if (letter !== '[') {
                    return false;
                }
                break;
            case '}':
                letter = arr.pop();
                if (letter !== '{') {
                    return false;
                }
                break;
        }
    }
    return arr.length === 0;
}

console.log(isValid('[{}]'));
console.log(isValid('[{]'));