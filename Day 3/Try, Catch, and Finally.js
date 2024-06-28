function reverseString(s) {
    try {
        a = s.split('').reverse().join('');
        return a;
    }
    catch(err) {
    console.log("s.split is not a function")
    }
}