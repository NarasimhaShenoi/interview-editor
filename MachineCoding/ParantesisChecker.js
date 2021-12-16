// https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2

// Approach - 1
const isValid = s => {
    let stack = [];

    for (let i =0; i < s.length; i++) {
        let char = stack[stack.length - 1];
        if(s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else if ((s[i] == ")" && char == "(") || (s[i] == "}" && char == "{") || (s[i] == "]" && char == "[")) {
            stack.pop();
        } else return false;
    }
    return stack.length? false: true;
}

console.log(isValid('[[)]]'))

// Approach - 2
const isValid = s => {
    let stack = [];
    let map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let i =0; i < s.length; i++) {
        let char = stack[stack.length - 1];
        if(s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else if (map[s[i]]==char) {
            stack.pop();
        } else return false;
    }
    return stack.length? false: true;
}

console.log(isValid('[[]]'))