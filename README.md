# Poké Pong

The brief of the DevelopMe technical challenge was to create a tool which randomly creates pairings for a table tennis touranment bracket from a list of names collected from the user. 

Optional advanced features included:

* ability to record scores for each player, or mark which player won from each pairing, to create the next round of the touranment playoffs
* continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)

This challenge was created using the following:

* React
* Redux
* JavaScript / JSX
* HTML
* CSS
* Bootstrap
* Git & GitHub for version management

For more information on how to get set up and what to install see below. 

## Getting Started

Clone the repository for this challenge
##### `$ git@github.com:Jemisode/poke-pong.git`

Install all the required dependencies
##### `$ npm install`

Run the app in development mode
##### `$ npm start`<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

Alternatively it can be viewed live at[Poké Pong app](https://jemisode.github.io/poke-pong/ "Poké Pong").

## Plan

Firstly I came up with the concept of Poké Pong to fit with the brief requirements of a table tennis touranment. It offered me creative direction to style the app according to the Pokémon theme which I throughly enjoyed.

Secondly I set up React and Redux which was what the challenge was based upon: 

* created the Poké Pong directory 
* Installed all the dependencies
* Added Boostrap into the index.html
* Deleted unwanted files
* Organised folder and file structure to make it easier to navigate as it developed, i.e. component and data folders.

Thirdly my next focus was to plan out the components and visualise how the layout will be presented. From the outset I knew I required:

* a Header component which would contain the title (which later became the Poké Pong logo)
* a Players component which would render the form input and submit button so a user could add a Pokémon player
* a Pairings component which will render the single elimaination tournament bracket - Round of 16, Quarter Final, Semi Final, Final and the winner. The layout of which was based on the CSS Grid layout using React CSS Grid by passing in the required width and gap props.

Fourthly with the challenge set up complete, folder and file organised and initial components created. I then began with using Git and created a Github repository where I would push all the changes I had made over the course of the challenge.

Lastly my attention turned to the styling:

* Created an assets folder for the images 
* Created a bespoke Poké Pong logo
* Added a custom font from Google Fonts for the rounds text 
* Used CSS throughout to customise the Grid layout, fonts and colours of the tournament bracket, header and submit button.

## Issues

I encountered a number of issues throughout the challenge which vary from React and/or Redux difficulties to those regarding the layout:

* Planning the components in a way that managed state in the easiest possible way between the Players and Pairings components
* Creating a responsive layout with React CSS Grid and media queries
* Tested state so it could output an individual added player but it would only update the bracket with the same name instead of mapping over all the names and output 16 different names for the pairings.

## What I learnt 

I wanted to challenge myself in a number of ways so I decided to use React and Redux and aimed to complete the optional advanced features as mentioned in the brief.
 
Although React and Redux was fresh in mind from the previous weeks teaching and the group challenge. I struggled at times with how to approach this challenge and apply the logic which was frustrating. On the other hand while I may not have been able to complete the functionality of the challenge; practising React and Redux has been invaluable to increase my familarity and understanding of these two libraries should I use them in the future.

## To be completed

![Poké Pong app](/src/assets/poke-pong.png "Poké Pong")

* Remove hard coded Pokémon names and write logic to randomly allocate names to the Round of 16
* Ensure a Pokémon name is no shorter than three and no longer than twelve in length 
* Ensure user can only input letters and recognised Pokémon names from Generation 1
* Write logic that ensures winner goes through to the next round (highlighted in yellow) whilst the loser does not progress (highlighted in blue)
* Remove hard coded scores and write logic so it ties in with the above winner-loser pairings
* Address the responsiveness of the CSS Grid so it can viewed on devices with smaller screens without problems regarding the layout