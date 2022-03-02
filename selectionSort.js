function selectionSort(input) {
	for (var i = 0; i < input.length; i++) {
		let min = i;
		for (var j = i+1; j < input.length; j++) {
			if (input[min] > input[j]) {
				min = j;
			}
		}
		let temp = input[i];
		input[i] = input[min];
		input[min] = temp;
	}
	return input;
}
