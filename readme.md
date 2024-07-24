<span style='color: lightblue;'>Portfolio Project - Mixed Messages</span>
=
## Project Description

This project was completed as part of the Codecademy Full-Stack Engineer Course. The task is to build a message generator program. Every time a user runs the program, they should get a new, randomized output. The message that it outputs should be made up of at least three different pieces of data.

### Objectives

* Build a message generator program using JavaScript
* Use Git version control
* Use GitHub
* Use command line
* Develop locally on your computer

### Prerequisites

* JavaScript.
* Git and GitHub (including a readme file)
* Command line in Terminal.
* Use Node.js, as no front end required.

## Solution

To complete this project I decided to create a program that creates a random sports headline each time it is executed.

There are 3 sports:

1. Formula 1
2. WTA Tennis (Womans Tennis)
3. ATP Tennis (Mens Tennis)

The program selects one of these categories at random.

Within each sport, a random selection is made from each of the 4 sets of data included for each sport. These are then formatted and output to the screen as a sports headline.

### Design Features

I have designed this program to enable the addition and deletion of headline elements without code modification, as when the random index is generated, the range of the random number is calculated based on the length of the array holding the elements and not hard coded.

It is also easy to add sport objects to this program. A sport object must merely implement the headline() method and return a formatted string to be output. The contents and number of elements in each data section will not affect the main program in any way as long as the headline() method is implemented in the object. Once an additional sport object is created, it needs to be added to the array of sport objects to be included in the random selection process.

 #### Lessons Learned

Coding this project has helped consolidate the knowledge I have gained so far of the javascript programming language. It is also the first project on which I have used git version control and gitHub. This readme file is also the first time I have used markdown.

So although I would say quite a simple program in itself, it has been a super valuable exercise when taking in to account the use of git, github and writing a (hopefully useful) readme file for the first time.
 
### Requirements & How To Use

This program is a server side program.

Node.js must be installed to run this program.

 Run ***fakeSportHeadline.js*** from the Terminal command line as follows:

 node fakeSportHeadline.js

 A fake headline will be generated and displayed.

 #### Sample outputs

 <span style='color: green;'>*"In Womans Tennis today Sloane Stephens lost in straight sets to Iga Swiatek in the semi final of the US Open at Flushing Meadows"*</span>

  <span style='color: green;'>*"In the world of Formula 1 today, Valtteri Botas was disqualified from the Emilia-Romagna Grand Prix driving for Aston Martin"*</span>

  <span style='color: green;'>*"In Mens Tennis today Roger Federer thrashed Daniil Medvedev in the final of the Championships at Wimbledon"*</span>


### Technologies

* JavaScript.
* Git
* Github
* Node.js
* Markdown

### License

This project is subject to the MIT license - see seperate license file - license.txt










