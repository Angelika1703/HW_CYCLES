function factorial(n){
	var result = 1;
	for (var i = 1; i <= n; i++){
		result = result * i;
	}
		return result;
}
var x = prompt("Введите число");
alert(factorial(x));
