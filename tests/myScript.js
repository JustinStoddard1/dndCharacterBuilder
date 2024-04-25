function myFunction() {
    document.getElementById("demo").innerHTML = inData.name;
    window.alert("You changed the paragraph!");
}

function change_myselect(val){
    document.getElementById("demo").innerHTML = val;
}

function change_abilityScoreArray(val){
	document.getElementById("dexterityModifier").innerHTML = 100;
	window.alert("changed!");
}

function populate_abilityScoreArray(){
	document.getElementById("strengthModifier").innerHTML = 100;
	window.alert("loaded");
}

var scoreIds = ["baseStrengthScore", "baseDexterityScore", "baseConstitutionScore", "baseIntelligenceScore", "baseWisdomScore", "baseCharismaScore"];
var origScores = [1,2,3,4,5,6];
var remainingScores = origScores;

scoreIds.forEach((scoreId)=>{
	let innerHTML = '<option value="select">Select</option>\n';
	innerHTML += '<option value="remove">Remove</option>\n';
	remainingScores.forEach((score)=>{
		innerHTML += '<option value="' + score + '">' + score + '</option>\n';
	});
	
	document.getElementById(scoreId).innerHTML = "-";
	document.getElementById(scoreId + "_selector").innerHTML = innerHTML;
});

function update_baseScore(id, value){
	// When one is selected, need to remove it from all lists without affecting the existing values
	
	// If "select" was selected, just return
	if (value === "select"){
		return;
	}
	
	let scoreDisplayId = id.split('_')[0];
	
	// If "Remove" was selected, set the value to "-" and add the number back to the list of available numbers
	if (value === "remove"){
		if (value !== "-"){
			remainingScores.push(parseInt(document.getElementById(scoreDisplayId).innerHTML));
		}
		value = "-";
	}
	else {
		// Get rid of this from the remaining scores
		delete remainingScores[remainingScores.indexOf(parseInt(value))];
	}
	
	remainingScores.sort();
	remainingScores.reverse();
	
	document.getElementById(scoreDisplayId).innerHTML = value;
	
	
	scoreIds.forEach((scoreId)=>{
		//let selectedRemainingScoreIndex = baseScoreSelection[scoreId].remainingScores.indexOf(baseScoreSelection[scoreId].remainingScores[value]) - 1
		//delete baseScoreSelection[scoreId].remainingScores[selectedRemainingScoreIndex];
		//delete abc[abc.indexOf("abc")];
			
		let innerHTML = '<option value="select">Select</option>\n';
		innerHTML += '<option value="remove">Remove</option>\n';
		remainingScores.forEach((score)=>{
			innerHTML += '<option value="' + score + '">' + score + '</option>\n';
		});
		
		document.getElementById(scoreId + "_selector").innerHTML = innerHTML;
	});
}

