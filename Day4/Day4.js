let range = [130254,678275];
let combination = [];
for (let i = 130254; i <=678275; i++) {
	combination.push(i)
}
//Part I
const checkCombination = comb =>{
	let double = false
	for (let i = 1; i <= comb.length-1; i++) {
		if(comb[i-1]>comb[i]) return false;
		if(comb[i-1]===comb[i] && !double) {
			double=true;
		};
	}
	return double;
}
var validCombination = combination.filter(el=>checkCombination(el.toString()))

console.log(validCombination.length)

//Part II
	const checkCombination2 = comb =>{
	let double = false;
	let doubleTest = false;
	for (let i = 1; i <= comb.length; i++) {
		if(comb[i-1]>comb[i]) return false;
		if(comb[i-1]===comb[i]) {
			double=true;
			if(comb[i-2]===comb[i-1]) {
				double=false;
			};
		}
		else if(double){
			doubleTest = true;
		}
	}
	return doubleTest;
}
var validCombination2 = combination.filter(el=>checkCombination2(el.toString()))

console.log(validCombination2.length)
