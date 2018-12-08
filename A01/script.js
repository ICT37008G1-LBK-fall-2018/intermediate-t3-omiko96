let ricxvi = prompt('chaweret ori ricxvi').split(' '),
    a = +ricxvi[0],
    b = +ricxvi[1],
    sum = 0;

if((a <= 0 || b <= 0 ) || (a >= 1000 || b >= 1000) || a >= b ){
    alert('shecdoma dapiqsirda');
}else{
    for(a; a<=b; a++){
        sum += a;
    }

    alert(sum);
}