
function test(n){
    var summ=0;

for(var i=1;i<=n;i++){
    //计算阶乘i！
    var sum=1;
    for(var j=1;j<=i;j++){
        sum=sum*j;
    }
    //计算summ=summ+i！
    summ=summ+sum;
    return summ;
}

}