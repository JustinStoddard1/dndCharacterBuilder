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

function populate_abilityScoreOptions(arrayName){
	if (arrayName === undefined){
		arrayName = data.abilityScoreArrays[0].name
	}
	
	var statList = data.abilityScoreArrays.find(t => t.name === arrayName).stats;
	
	var innerHTML = '<option value="select">Select</option>\n';	
	statList.forEach((element) => {innerHTML += createSelectOption(element, element)});	
	
	document.getElementById("baseStrengthScore").innerHTML = innerHTML;
	document.getElementById("baseDexterityScore").innerHTML = innerHTML;
	document.getElementById("baseConstitutionScore").innerHTML = innerHTML;
	document.getElementById("baseIntelligenceScore").innerHTML = innerHTML;
	document.getElementById("baseWisdomScore").innerHTML = innerHTML;
	document.getElementById("baseCharismaScore").innerHTML = innerHTML;
	
	/*
	<select id="abilityScoreArray" onchange="change_abilityScoreArray(this.value)">
		<option value="standard">Standard (15,14,13,12,10,8)</option>
		<option value="wellRounded">Well-Rounded (14,13,13,12,12,10)</option>
		<option value="specialized">Specialized (15,15,13,11,9,8)</option>
		<option value="heroic">Heroic (17,16,15,14,12,10)</option>
		<option value="peasant">Peasant (12,11,10,10,10,8)</option>
		<option value="custom">Custom</option>
	</select>
	*/
}

function updateBaseScore(scoreId, value){}

function populate_abilityScoreArrays(){
	var innerHTML = ''
	
	data.abilityScoreArrays.forEach((element) => {
		innerHTML += createSelectOption(element.name, element.description) + "/n"
	});
	
	document.getElementById("abilityScoreArraySelection").innerHTML = innerHTML
	/*
	<option value="standard">Standard (15,14,13,12,10,8)</option>
    <option value="wellRounded">Well-Rounded (14,13,13,12,12,10)</option>
    <option value="specialized">Specialized (15,15,13,11,9,8)</option>
	<option value="heroic">Heroic (17,16,15,14,12,10)</option>
	<option value="peasant">Peasant (12,11,10,10,10,8)</option>
	<option value="custom">Custom</option>
	*/
}

function change_abilityScoreArraySelection(arrayName){
	populate_abilityScoreOptions(arrayName)
}

function get_modifier(val){
	return Math.floor((val - 10)/2);
}

function update_abilityScoreModifier(modifierId, abilityScore){
	document.getElementById(modifierId).innerHTML = get_modifier(abilityScore);
}