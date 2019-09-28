# Poké Pong

The brief of the DevelopMe technical challenge was to create a tool which randomly creates pairings for a table tennis touranment bracket from a list of names collected from the user. 

Optional advanced features may include:

* ability to record scores for each player, or mark which player won from each pairing, to create the next round of the touranment playoffs
* continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)

This challenge was created using React and Redux. For more information on how to get set up and what to install see below. 

## Getting Started

Clone the repository for this challenge
### `git@github.com:Jemisode/poke-pong.git`

This will install all the dependencies needed.
### `npm install`

This will run the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
### `npm start`

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
