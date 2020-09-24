function fibonacci(){
    let first = 1;
    var second = first+first;
    alert(first);
    alert(second);
    for(let i = 0; i<5; i++){
        first = second + first;
        alert(first);
        second = first + second;
        alert(second)
    }
}
fibonacci();