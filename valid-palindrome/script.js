const isPalindrome = (text) => {
    let textInReverse = reverseString(text);
    return textInReverse === text;
}

const reverseString = (text) => {
    return text.split("").reverse().join("");
}

// Best anser with palindrome and recursion
function isPalindromeBeset(text) {
    const filteredString = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    const checkPalindrome = (left, right) => {
        if(left >= right) return true;

        if(filteredString[left] !== filteredString[right]) return false;
        
        return checkPalindrome(left+1, right-1);
    }

    return checkPalindrome(0, filteredString.length - 1);
}

console.log(isPalindromeBeset("racecar"));