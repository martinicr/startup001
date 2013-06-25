var fs = require('fs');
var outfile = "primenumbers.txt";

var listPrimeNumbers = function(n){
	var count = 0;
	var aggregateMessage = "";
	for(var i = 2; count <= n; i++){
		if(isPrimeNumber(i)){
			count++;
			aggregateMessage += singleMessage(i, count, n);
		}
	}

	console.log(aggregateMessage);
	return aggregateMessage;
};

var singleMessage = function(i, count, n){
	var message = "";
	message += i;
	if(count <= n){
		message += ",";
	}
	return message;
}

var isPrimeNumber = function(n){
	
	if(n == 2){
		return true;
	} else {
		var sr = Math.round(Math.sqrt(n));
		for(var i = 2; i <= sr; i++){
			if(trialDivision(n, i) == 0){
				return false;
			}
		}
		return true;
	}
}

var trialDivision = function(n, m){
	return n % m;
}

var out = listPrimeNumbers(100);

fs.writeFileSync(outfile, out);