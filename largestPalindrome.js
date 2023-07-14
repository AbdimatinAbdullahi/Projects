function isPalindrome(num){
    let str = String(num);
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

   let largestPalindrome = 0;
    for(let i = 999; i >= 100; i--){
        for(let j = i; j >= 100; j--){
        const product = i* j;
            if (isPalindrome(product) && product > largestPalindrome){
            largestPalindrome = product;
            break;
           }
        }
    }

    console.log(largestPalindrome);
