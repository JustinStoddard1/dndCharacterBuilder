function myFunction() {
    document.getElementById("demo").innerHTML = inData.name;
    window.alert("You changed the paragraph!");
}

function change_myselect(val){
    document.getElementById("demo").innerHTML = val;
}

function createSelectOption(value, description){
	return '<option value="' + value + '">' + description + '</option>\n'
}

/*
a.forEach((element) => {
    console.log(element);
});
*/

function populate_abilityScoreOptions(){
	scoreIds.forEach((scoreId)=>{
		let innerHTML = '<option value="select">Select</option>\n';
		innerHTML += '<option value="remove">Remove</option>\n';
		remainingAbilityScores.forEach((score)=>{
			innerHTML += '<option value="' + score + '">' + score + '</option>\n';
		});
		
		document.getElementById(scoreId).innerHTML = "-";
		document.getElementById(scoreId + "_selector").innerHTML = innerHTML;
	});
}

function update_baseScore(id, value){
	// When one is selected, need to remove it from all lists without affecting the existing values
	
	// If "select" was selected, just return
	if (value === "select"){
		return;
	}
	
	let scoreDisplayId = id.split('_')[0];
	let currValue = document.getElementById(scoreDisplayId).innerHTML
	
	// If "Remove" was selected, set the value to "-" and add the number back to the list of available numbers
	if (value === "remove"){
		if (currValue !== "-"){
			remainingAbilityScores.push(parseInt(currValue));
		}
		value = "-";
	}
	else {
		// If there's already a value selected, send it back into the Array
		if (currValue !== "-"){
			remainingAbilityScores.push(parseInt(currValue));
		}
		
		// Get rid of this from the remaining scores
		delete remainingAbilityScores[remainingAbilityScores.indexOf(parseInt(value))];
	}
	
	remainingAbilityScores.sort(function (a, b) {  return a - b;  });
	remainingAbilityScores.reverse();
	
	document.getElementById(scoreDisplayId).innerHTML = value;
	
	
	scoreIds.forEach((scoreId)=>{
		//let selectedRemainingScoreIndex = baseScoreSelection[scoreId].remainingScores.indexOf(baseScoreSelection[scoreId].remainingScores[value]) - 1
		//delete baseScoreSelection[scoreId].remainingScores[selectedRemainingScoreIndex];
		//delete abc[abc.indexOf("abc")];
			
		let innerHTML = '<option value="select">Select</option>\n';
		innerHTML += '<option value="remove">Remove</option>\n';
		remainingAbilityScores.forEach((score)=>{
			innerHTML += '<option value="' + score + '">' + score + '</option>\n';
		});
		
		document.getElementById(scoreId + "_selector").innerHTML = innerHTML;
	});
}

function populate_abilityScoreArrays(){
	let innerHTML = ''
	
	data.abilityScoreArrays.forEach((element) => {
		innerHTML += createSelectOption(element.name, element.description) + "/n";
	});
	
	document.getElementById("abilityScoreArraySelection").innerHTML = innerHTML;
	
	// Set the first element to the current one
	change_abilityScoreArraySelection(data.abilityScoreArrays[0].name);
}

function change_abilityScoreArraySelection(arrayName){
	selectedAbilityScoreArray = data.abilityScoreArrays.find(t => t.name === arrayName).stats;
	remainingAbilityScores = selectedAbilityScoreArray;
	populate_abilityScoreOptions();
}

function get_modifier(val){
	return Math.floor((val - 10)/2);
}

function update_abilityScoreModifier(modifierId, abilityScore){
	document.getElementById(modifierId).innerHTML = get_modifier(abilityScore);
}