function bubbleSort(input){
	var n=input.length;
	while(n>0){
		for (var i = 0; i < n-1; i++) {
			if (input[i]>input[i+1]) {
				let temp = input[i];
				input[i] = input[i+1];
				input[i+1] = temp;
			}
		}
		n--;
	}
	return input;
}
