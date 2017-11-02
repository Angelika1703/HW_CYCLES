var num = prompt("Введите число");
var seq = "";
var count = 0;
var vert = num;
	while (num != 1) {
		count++;

	if (num % 2 == 0) {
		num /= 2;
	} 
	else {
		num = num*3 + 1;
	}
	if (num > vert) vert = num;
	}
console.log("Последовательность:", sequence);
console.log("Шагов:", count);
console.log("Вершина:", vertex);