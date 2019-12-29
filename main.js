var Parser = require('expr-eval').Parser;


module.export = function getParsedFormula(formula) {
	let pars = new Parser();
	var expr = pars.parse(formula);
	return expr.symbols();
}