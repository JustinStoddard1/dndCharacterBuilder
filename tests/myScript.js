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