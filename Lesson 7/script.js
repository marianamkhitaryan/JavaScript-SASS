
// 1. Գրել ծրագիր, որը կստուգի թիվը պարզ է, թե ոչ

var number = +prompt("Ներմուծել թիվ");

if(number === 1) {
    alert(number + " թիվը ոչ պարզ է, ոչ բաղադրյալ")
}else{
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            var x = number + " թիվը պարզ չէ";
            break
        }else{
            var x = number + " թիվը պարզ է"
        }
    }
    alert(x);
}





