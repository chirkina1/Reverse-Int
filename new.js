var reverse = function(x) {
    var massOfDigits = [],nulls = 10, check = true,count = 1,originNum = x;
    if(x>0) {
        while (nulls != 0) {
            if (x < nulls) {
                break;
            }
            else if (x == nulls) {
                count++;
                break;
            }
            else {
                count++;
            }
            nulls = nulls * 10;
        }
    }
    else {
        nulls = -10;
        while (nulls != 0) {
            if (x > nulls) {
                break;
            }
            else if (x == nulls) {
                count++;
                break;
            }
            else {
                count++;
            }
            nulls = nulls * 10;
        }
    }

    nulls = 10;
    if(x<0) {
        check = false;
        x = x*(-1);
    }

    for(var i = 0;i<count;i++) {
        massOfDigits[i] = x%nulls;
        x = parseInt(x/nulls);
    }

    var reverseNum = massOfDigits.join("");
    reverseNum = +reverseNum;

    if( originNum < Math.pow(-2,31) || originNum > Math.pow(2,31))
    {
        return 0;
    }

    if(check == false) {
        reverseNum = reverseNum*(-1);
    }
    return reverseNum;
};
alert(reverse(-180));
