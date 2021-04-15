function validate() {
	var matrix = document.getElementById("matrix");
	var arr = new Array(4);	
	var error = 0;
	
	
	for (var i = 0; i < 4; i++){
		arr[i] = new Array(4);
		for (var j = 0; j < 4; j++){
			var id = "a" + i + j;
			n = document.getElementById(id).value;
			if ((n == 0 || n == 1) && (n != "" || error == 1)){
				arr[i][j] = n;
			}
			else{
				alert("Проверьте правильность ввода");
				error = 1;
				break;
			}
		}
	}
	if (error == 0){
		var res = 0;
		for (var i = 0; i < 4; i++){
			var one = 0;
			for (var j = 0; j < 4; j++){
				if (arr[i][j] == 1){
					one += 1;
				}
			}
			if (one == 1){
				res += 1;
			}
		}
		if (res == 4){
			alert("Отношение является функцией");
		}
		else{
			alert("Отношение НЕ является функцией");
		}
	}
	console.log(arr);
}