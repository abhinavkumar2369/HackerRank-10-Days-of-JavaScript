function regexVar(re) {
    var re = RegExp(/^([aeiou]).*\1$/);
    return re;
}