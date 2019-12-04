var fs = require('fs');

fs.readFile('./input1.txt','utf-8',(err,data)=>{
	data = data.split('\n');
	var wire1 = data[0].split(',');
	var wire2 = data[1].split(',');
	const getWirePoints = (wire) =>{ 
		let center = {x:0,y:0};
		let centerCp = {...center};
		let wirePath = wire.map((el,i)=>{
			let point = parseInt(el.slice(1, el.length))
			switch(el[0]) {
				case "U" :centerCp.y+=point;
					break;
				case "R":
					centerCp.x+=point;
					break;
				case "D" :
					centerCp.y-=point;
					break;
				case "L":
					centerCp.x-=point;
					break;
					default : centerCp; break ;
			}
			return {...centerCp};
		})
		return wirePath
	}
	function intersect(a, b) {
	  var setA = new Set(a);
	  console.log(setA)
	  var setB = new Set(b);
	  var intersection = new Set([...setA].filter(x => setB.has(x)));
	  return Array.from(intersection);
	}
	console.log(intersect(getWirePoints(wire1),getWirePoints(wire2)))
})