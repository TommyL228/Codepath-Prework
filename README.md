# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tommy Liang**

Time spent: **7** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Display remaining guesses
- [x] Loser audio if player loses game. Congratulations audio if player wins the game.


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x](http://g.recordit.co/VVotERqTVO.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    StackOverflow
    W3Schools
    FreeCodeCamp 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    The most difficult part abuot creating this project was getting the countdown timer to work. I went through many resources like StackOverflow, W3Schools as well as different youtube videos.
    I eventually got the button to display on screen, but when I hit the start button the timer does not countdown. I created a timeLeft variable and set it equal to null so that I can call it later, I eventually called it in the function playClueSequence but it did not work. I then repeated it by calling it in several other functions which did not work as well, so I went back and did more research on google and StackOverflow which I stumbled upon answer saying that to create a setTimeout() that recursively called a secondary setTimeout(). I had a hard time implementing this because I have never used recursion before. Which made me become more curious about how I would have implemented this if I was given more time to study/research about the technique. As the project stands right now I only have the timer showing but not actually counting down.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    After doing this project and seeing what web development is and what it can do makes me more curious about it. I have always thought that backend does most of the heavy lifting while frontend just tries to make
    the interface look stunning for the users. Now I know that is not the case and there is still a lot of theory surrounding web development, from styling with css to using JavaScript to make the webpage more interactive for the user. While doing this project I have wondered where does the backend come into play and how will it affect the whole dynamic of this webpage. This project has also made me question where does
    data structures come into play, I know that in backend data structures plays an important role in making sure if a program can run more efficiently or not. I'm just wondering what does that have to do with the frontend.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
    If i had a couple more hours to work on this project I would definitely try to clean up the code a bit more. The javaScript portion of this project is very messy because of how many functions we are using
    while I could have used classes to keep everything more neat and readable. I would also have more time to figure out how to make the countdown timer work once the game starts. Some addition features I would have loved to add to this game would be instead of just a memory game with colors, I would have done it with cards so it would be more interactive and fun. Another thing I would have done was try to figure out how to make this a multiplayer game adding a bot or a player 2 and keep track of the high scores. One last thing I would have done was try to understand the sound synthesis a bit more, because that part was the most trickiest to understand and how to implement it.   



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Tommy Liang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.