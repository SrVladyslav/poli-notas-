//Created with love by SrVladyslav

exams = [] //list that will contain the acts


function deleteBlank(lis){
	var aux = []
	lis.forEach((e) => {
		if(e != ''){
			aux.push(e)
		}
	})
	return aux
}

//returns the string list with exams names
function getExamsFromFormula(formula){
	//first split
	var f = formula.split('(')
	//f = deleteBlank(f)
	////split ^
	aux = []
	f.forEach((e) =>{
		e.split('^').forEach((l)=>{
			aux.push(l)
		})
	})
	//split )
	aux = []
	f.forEach((e) =>{
		e.split(')').forEach((l)=>{
			aux.push(l)
		})
	})
	f = aux
	aux = []
	//split *
	f.forEach((e) =>{
		e.split('*').forEach((l)=>{
			aux.push(l)
		})
	})
	f = aux
	aux = []
	//split /
	f.forEach((e) =>{
		e.split('/').forEach((l)=>{
			aux.push(l)
		})
	})
	f = aux
	aux = []
	//split +
	f.forEach((e) =>{
		e.split('+').forEach((l)=>{
			aux.push(l)
		})
	})
	f = aux
	aux = []
	//split -
	f.forEach((e) =>{
		e.split('-').forEach((l)=>{
			aux.push(l)
		})
	})
	f = deleteBlank(aux)
	aux = []
	//deliting number variables
	f.forEach((e) => {
		if(isNaN(e)){
			aux.push(e.trim())
		}
	})
	f = aux.filter((v, i, a) => a.indexOf(v) === i)
	console.log(f)
	return f
}

getExamsFromFormula('P1+(P2+(5-P2)/3*P3)+P4')

//operators

//calculates the value from formula
function calculateFormula(formula, ...vars) {
		
} 

calculateFormula('P1+(P2+(5-P2)/3*P3)+P4', 1,2,3,4,5)