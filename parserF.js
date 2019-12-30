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
	///console.log(f)
	return f
}

///getExamsFromFormula('P1+(P2+(5-P2)/3*P3)+P4')

//gives the parentesis indexes
function calculateParentesis(formula) {
	var leftParentesis = []
	var rigthParentesis = []
	console.log(formula)
	//looking for parentesis indexes
	for(i = 0; i < formula.length; i++){
		if(formula[i] == '('){
			leftParentesis.push(i)
		}else if(formula[i] == ')'){
			rigthParentesis.push(i)
		}
	}
	//solving parentesis
	for(i = 0; i < leftParentesis.length; i ++){

	}

	console.log(leftParentesis, rigthParentesis)
}

//calculates the value from formula changing the parameters by given values ot them
function calculateFormula(formula, vars) {
	//obtaining parameters
	var params = getExamsFromFormula(formula)
	console.log("Params: " +params)
	console.log("Vars: "+vars)
	//replacing formula  by values
	/*for(let i = 0; i < vars.length; i++){
		console.log(formula.search(''+params[i]))
		while(formula.search(params[i]) >= 0){
			if(isNaN(params[i]+'')){
				params[i] = 0
			}
			formula = formula.replace(''+params[i], vars[i]) //replacing given parameters by his value
			formula
		}
		console.log(formula)
	}*/
	for(let i = 0; i < params.length; i++){
		formula = formula.split(params[i]).join(vars[i])
	}
	return formula
}



g=calculateFormula(' (P2+(5-P2)/3*P3)+P4', [1,1,1,1])
console.log("Formula final: "+g)