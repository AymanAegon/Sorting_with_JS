function mergeSort(input) {
	if (input.length === 1) return input;
	var left = [];
	var right = [];
	for (var i = 0; i < input.length; i++) {
		if (i < Math.floor(input.length/2)) {
			left.push(input[i]);
		} else {
			right.push(input[i]);
		}
	}
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while(leftIndex < left.length && rightIndex < right.length){
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		}else{
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
