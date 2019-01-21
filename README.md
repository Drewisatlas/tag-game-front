#TAG
## An 8-bit game of strategy

This game is currently in development

##Setup
*Done* set up file
*Done* set up github repo
*Done* Basic Project Setup
*Done* set up static sprite
*Done* set up gameboard
*Done* get sprite on gameboard
*Done* set up redux
*Done* Make CPU Player component
*Done* Get CPU player on board
*Done* Make CPU Player Sprites

##styling and presentation
*Done* fix top row issue
Find a 8 bit text font
build display to communicate to the player

##Basic Movement
*Done* sprite can move with arrows
*Done* Build Boundaries for movement

##refactoring
*Done* Rebuild data structure for 4 players
*Done* render them on page
*Done* Move movement functions into class components
*Done* get random boys to move again

##turn logic
*Done* Basic turn logic
*Done* move 3 spaces trigger next turn
*Done* User moves three spaces and turn will end
*Done* cpu will move 3 spaces and the turn will end.
*Done* display player lives
*Done* display who is it

##Tag Logic
*Done* if you are to the left right or above or below a non player they will be it.
*Done* game state updates the new 'it' player
*Done* Player state updates


## CPU player movement logic
*Done* moving at random
build a function to check if the cpu player is it or not
build a function to determine distance
build a function to calculate movement patterns
it movement logic
not it movement logic

##implement "it" logic
find the closest player for each player, then calculate the their tag spots
build calculate how many x axis moves and y axis moves

iterate through that array and if it can be reached in 3 moves
make 3 directional movements

if not move toward the closest player

##implement "not it" logic
players move away from it
if the player is in the same column or row move away from it in the t pattern, otherwise
check the left and right location and move away or
check the above and below location and move away or
a random movement with a small percentage 10%

##end game logic

##Start Screen
How to play screen

###Stretch
Select a player
Multiple boards
Login
Player Stats
if the it player starts their turn and a player is next to them its an automatic tag and they get to move

5 player spread



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
