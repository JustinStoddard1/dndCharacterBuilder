# dndCharacterBuilder
The idea here is to have a simple character builder that can be easily extended with your own custom content by adding to the data folders.

The goals are to have something that could be downloaded and run locally, and relying on very few, if any external data sources, scripts, or libraries. Going with as pure JS, CSS, and HTML as possible... for now.

Todo:
- [ ] Fix custom ability score selections
- [ ] Allow for leveling up
- [ ] Add SRD races
- [ ] Add SRD classes
- [ ] Allow downloading JSON of the full character
- [ ] Allow downloading/printing a character sheet
- [ ] Create a powershell script that assembles the entire data source as one .js file based on specific filters and criteria.
- [ ] Pretty much everything else
- [x] Make it so there's a default selection of ability scores
- [x] When a number is already selected, but another number is chosen, make sure to return that number back to the list
- [x] Remove items from the ability score dropdown if it's already selected on another ability score. Keep the existing, selected item in that field
- [x] If "select" is selected, add that value back to the pool - changed to "remove"
- [x] Roll changes from test into the new one - need to bring the functions and table
