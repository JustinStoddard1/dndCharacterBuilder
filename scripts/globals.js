/* Gloabals
	Everything interacts with these variables and results in a character
*/
var characterInfo = {
	"name":"Unnamed!",
	"baseScore":{
		"strength":"-",
		"dexterity":"-",
		"constitution":"-",
		"intelligence":"-",
		"wisdom":"-",
		"charisma":"-"
	},
	"baseModifier":{
		"strength":"-",
		"dexterity":"-",
		"constitution":"-",
		"intelligence":"-",
		"wisdom":"-",
		"charisma":"-"
	},
	"raceModifier":{
		"strength":"-",
		"dexterity":"-",
		"constitution":"-",
		"intelligence":"-",
		"wisdom":"-",
		"charisma":"-"
	},
	"classModifier":{
		"strength":"-",
		"dexterity":"-",
		"constitution":"-",
		"intelligence":"-",
		"wisdom":"-",
		"charisma":"-"		
	}
}


var selectedAbilityScoreArray = [];			// This should always hold the full content of the selected ability score array
var remainingAbilityScores = []; 	// This contains the remaining ability scores

// Character Stats
var selectedBaseScores = {};
var scoreIds = ["strength_baseScore", "dexterity_baseScore", "constitution_baseScore", "intelligence_baseScore", "wisdom_baseScore", "charisma_baseScore"];
var scoreNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]