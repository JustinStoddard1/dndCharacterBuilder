data.races.push(
	{
		"name":"Dwarf",
		"source":"SRD",
		"description":"your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature",
		"abilityScoreIncrease":{
			"description":"Your Constitution score increases by 2.",
			"increase":[{
				"constitution":2
			}],
		},
		"age":{
			"description":"Dwarves mature at the same rate as humans, bu they're considered young until they reach the age of 50. On average, htey live about 350 years."
		},
		"alignment":{
			"description":"Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order."
		},
		"size":{
			"size":"medium",
			"description":"Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
		},
		"speed":{
			"walkingSpeed":25,
			"description":"Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
			"sheetNote":"Speed is not reduced by wearing heavy armor."
		},
		"languages":{
			"description":"You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
			"languages":["common","dwarvish"]
		},
		"traits":[
			{
				"name":"Darkvision",
				"description":"Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and darkness as if it were dim light. You can't discern color in darkness, only shades of gray",
				"sheetNote":"See in dim light within 60 feet as if it were bright light, and darkness as if it were dim light. Cannot see colors in darkness.",
			},
			{
				"name":"Dwaren Resilience",
				"description":"You have advantage on saving throws against poison and resistance against poison damage",
				"sheetNote":"Advantage on poison saving throws. Resistance to poison damage."
			},
			{
				"name":"Dwarven Combat Training",
				"description":"You have proficiency with the battleaxe, handaxe, light hammer, and warhammer",
				"proficienceies":["battleaxe","handaxe","light hammer", "warhammer"],
			},
			{
				"name":"Tool Proficiency",
				"description":"You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
				"proficiencies":{
					"selectOption":["smith's tools", "brewer's supplies", "mason's tools"]
				}
			},
			{
				"name":"Stonecutting",
				"description":"Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
				"sheetNote":"When making an Intelligence (History) check related to the origin of stonework, add double proficiency bonus."
			}
		],
		"subraces":
		{
			"name":"Hill Dwarf",
			"description":"As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
			"abilityScoreIncrease":{
				"description":"Your Wisdom score increases by 1.",
				"increase":[{
					"wisdom":1
				}],
			},
			"traits":[
				{
					"name":"Dwarven Toughness",
					"description":"Your hit point maximum increases by 1, and it increases by 1 every time you gain a level",
					"sheetNote":"+1 max HP per level.",
					"events":[
						{
							"trigger":"onLevel",
							"action":{
								"name":"addMaxHP",
								"value":1
							}
						}
					]
				}
			]
		}
	}
);

data.races.push(
	{
		"name":"Elf",
		"source":"SRD"
	}
);

/*
	- "description" are informational, but won't show up on the character sheet.
	- "sheetNote" are snippets that are more consice information.
	- "proficienceies" - add to proficiencies
	- "selectOption" - keyword to create a dropdown
	- "events" - when something else happens, do this thing
		- "onLevel" (including this one)
	- "actions" - the thing that'll happens
		- "addMaxHP" - increase the max HP by this much
*/