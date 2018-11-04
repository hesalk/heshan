function compressArray(original) {
 
	var compressed = [];
	var copy = original.split(' ');
 
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};
console.log(compressArray("hesham alkurdi hesham"));
 

//-----Tetst2
    function countWord(str)
    {
    let words = str.split(" ");
    let countObj = {};
    for (let word of words) {
        if (word in countObj){
            countObj[word] = countObj[word] + 1;
        }else{
            countObj[word] = 1;
        }
    }
        return countObj
    }
   console.log(countWord("Hesham Hesham"));

//------andra uppgift
function mostCommonWord(str) {
    let countObj = countWord(str)
    let maxCount = 0;
    let wordWithMaxCount
    for (let key in countObj) {
        let value = countObj[key]
        if (value>maxCount){
            maxCount = value
            wordWithMaxCount = key
        }
        
    }
    return wordWithMaxCount
}
   
