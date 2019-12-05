var range = ["130254","678275"];
var shallowRange1 = range[0].split('').map(el=>Number(el))
var shallowRange2 = range[1].split('').map(el=>Number(el))
console.log(shallowRange1,shallowRange2);
const getDeep = (start,end) =>{
	let deep = []
	for (var i = start ; i <= end; i++) {
		deep.push(i)
	}
	return deep
}
let deepRange = [];
for (var i = 0; i < shallowRange1.length-1; i++) {
	deepRange.push(getDeep(shallowRange1[i],shallowRange2[i]))
}
var double = false;
var combination = [];

function goDeepDownRight (down,right) {
	if (deepRange[down + 1] && test) {
		goDeepDownRight(down+1,right)	
	}
	if(deepRange[down] && !test && deepRange[down] )
		goDeepDownRight(down,right+1)
}

for (var i = 0; i < deepRange[0].length; i++) {
	
}
console.log(deepRange);