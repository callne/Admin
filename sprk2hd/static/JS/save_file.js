const fs = require('fs')
// function save_pic(path){
// fs.readFile(path,'utf-8'(err,data)=>{
// 	if(err){
// 		console.log(err)
// 	}
// 	else{
// 		console.log(data)	
// 	}
// })

// }

function open(path){
	const q = fs.open(path,'r',(err,f)=>{
		
	})
	return q
	
	
}

function save_(b){
	const a =fs.writeFile('../../pages/a.jpg',b['fileList1'][0].url,(err)=>{
		if(err){
			console.log(err)
		} else{
			console.log(111)
		}
	})
}

export {

	open,
	save_
	
}