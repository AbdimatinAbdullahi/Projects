function fiboEvenSum(num){
    let a = 1;
    let b = 2;
    let sum = b;

    while(b <= num){
        let temp  = a;
        a = b;
        b = temp + b;
        if(b % 2 === 0){
            sum += b;
        }
    }
    console.log(sum)
}

fiboEvenSum(4000000)
