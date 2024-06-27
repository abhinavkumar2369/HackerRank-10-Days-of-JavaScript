function vowelsAndConsonants(s) {
    for (const a of s){
        if ('aeiou'.includes(a)){
            console.log(a);
        }
    }
    for (const a of s){
        if (! 'aeiou'.includes(a)){
            console.log(a)
        }
    }
}