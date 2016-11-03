* Code Goblin

* You are an aspiring coder abducted tron style by an entity calling itself The Code Goblin. Can you escape from the clutches of The Code Goblin, or will you perish in an abyss of 1's and 0's?

* By Jin Camou, Marty Kovach, and Sailor Winkleman

* November 2016  

* Description

* A web application where a player meets code themed challenges in multiple rooms resulting in player win or loss. Player gains and loses health points / HP.

* Specifications

* Player loads site to arrive on a landing page (intro/narrative section)

* Player enters name and game uses that as players name

* Player clicks Start button

  * Example Input: Start
  * Example Output: player is transported to Intro room

* Player arrives to Intro room for instructions from Unexpected Token (a non-player character / NPC). NPC will instruct player how to navigate, interact with the room, and engage in combat via the Command Line / CL

  * Example Input: CD room-1
  * Example Output: player is transported to Room 1  

  * Example Input: ls room-1
  * Example Output: each object of interest is listed

  * Example Input: atk goblin
  * Example Output: goblin loses health points

* Player arrives to Room 1 where an initial challenge open door directory, find the 3 missing components, add those components to the door directory.  

  * Example Input: ls room-1; CD door; add door.html / door.scripts / door.js  
  * Example Output: name for Room 2 is revealed      

  * Example Input: CD boss-room
  * Example Output: player is transported to Boss Room      

  * Example Input: CD box
  * Example Output: box goblin encounter

* Player arrives to Boss Room to encounter and fight The Code Goblin King

  * Example Input: atk goblin-king  
  * Example Output: Goblin King loses HP

  * Example Input: dfnd player  
  * Example Output: player doesn't attack, and reduces HP lost

* Player wins when The Code Goblin's HP = 0

* Player loses when HP = 0  
