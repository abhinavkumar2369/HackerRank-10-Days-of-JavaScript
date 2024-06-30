function getCount(objects) {
    var count = 0;
    for (var c in objects){
        if (objects[c].x == objects[c].y) count ++;
    }
    return count;
}