var data = {
    "name": "abc",
    "desc": "def"
};

data.constraints = {};

data.constraints.customAbilityScoreAtFirstLevelMax = 18;
data.constraints.customAbilityScoreAtFirstLevelMin = 1;

data.abilityScoreArrays = [];

data.abilityScoreArrays.push(
	{
		"name":"standard",
		"description":"Standard (15,14,13,12,10,8)",
		"stats":[15,14,13,12,10,8]
	},
		{
		"name":"wellRounded",
		"description":"Well-Rounded (14,13,13,12,12,10)",
		"stats":[14,13,13,12,12,10]
	},
	{
		"name":"specialized",
		"description":"Specialized (15,15,13,11,9,8)",
		"stats":[15,15,13,11,9,8]
	},
	{
		"name":"heroic",
		"description":"Heroic (17,16,15,14,12,10)",
		"stats":[17,16,15,14,12,10]
	},
	{
		"name":"peasant",
		"description":"Peasant (12,11,10,10,10,8)",
		"stats":[12,11,10,10,10,8]
	},
	{
		"name":"custom",
		"description":"Custom",
		"stats":"*"
	}
);