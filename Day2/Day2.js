var fs = require('fs');


fs.readFile('./input1.txt',"utf-8",(err,data)=>{
	if(err){
		throw Error(err)
	}
	var newArr = data.split(',')
	var numNewArr = newArr.map(el=>Number(el));

	const fx=(a,i)=>{
	if(a[i]===1){
		a[a[i+3]]=a[a[i+1]] + a[a[i+2]]
	}
	else if(a[i]===2){
		a[a[i+3]]=a[a[i+1]] * a[a[i+2]]
	}
	else if(a[i]===99){
		return a[0]
	}
	return fx(a,i+4)
}
const fy = (b,i,j) =>{
	var c = [...b]
	c[1] = i;
	c[2] = j;
	return fx(c,0);
}
checkPoint
for (var i = 0; i <= 99; i++) {
	for (var j = 0; j <= 99; j++) {
		var result = fy(numNewArr,i,j);
		if (result===19690720) {
		 console.log(result,i,j);
		 break
		}
	}
}
})
	