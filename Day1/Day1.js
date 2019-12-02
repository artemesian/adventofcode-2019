var fs = require('fs');


//Part1
fs.readFile('./input1.txt',"utf-8",(err,data)=>{
	if(err){
		throw Error(err)
	}

	//PART 1
	let moduleMassesArr = data.split("\n");
	let sumFuel1 = moduleMassesArr.reduce((sumFuel,moduleMass)=>sumFuel + (Math.floor((moduleMass/3))-2),0)
	console.log("First Total Fuel:",sumFuel1);

	//PART 2
	let sumFuel2 = moduleMassesArr.reduce((sumFuel,moduleMass)=>{
		var massFuel = Math.floor((moduleMass/3))-2;
		totalMassFuel = 0;

		while(massFuel>0){
			totalMassFuel += massFuel;
			massFuel = Math.floor((massFuel/3))-2;
		}
		return sumFuel + totalMassFuel;
	},0)
	console.log("Second Total Fuel:",sumFuel2)
})