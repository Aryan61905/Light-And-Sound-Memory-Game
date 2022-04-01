# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aryan Roy**

Time spent: **4 to 5** hours spent in total

Link to project: (https://prism-fluffy-cheek.glitch.me/#)

## Required Functionality

The following **required** functionality is complete:

* [ YES ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ YES ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ YES ] Game buttons each light up and play a sound when clicked. 
* [ YES ] Computer plays back sequence of clues including sound and visual cue for each button
* [ YES ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ YES ] User wins the game after guessing a complete pattern
* [ YES ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ YES ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ YES ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ YES ] More than 4 functional game buttons
* [ YES ] Playback speeds up on each turn
* [ YES ] Computer picks a different pattern each time the game is played
* [ YES ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ YES ] Game button appearance change goes beyond color (e.g. add an image)
* [ YES ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ YES ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [YES] Buttons are surrounded in a circular pattern
- [YES] Use of icons with glow effects in Game Title
- [YES] Title text has click effect

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/SftSsw0.gif)
![](https://i.imgur.com/eGshfxW.gif)
![](https://i.imgur.com/YdHmDmL.gif)
![](https://i.imgur.com/lR5Nshz.gif)





## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[For this game I used a number of tutorials as well as websites such as 
w3schools.com, 
youtube videos 
and stackoverflow to fix the bugs]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[ When I saw the tutorial for the game the biggest challenge I was facing was figuring out the scope for each element i.e. how can we make changes by actions on 
other elements. For example: I wanted the user to be able to clearly see all the patterns without covering much space on the screen and also not get confused in 
the layout of the button. The default layout for the game was square buttons and in list layout. Therefore I created a refernece "li" with style vriable as "--i" to 
arrange them in a circular pattern and surround them around the toggle button.
Another difficulty I faced was creating the timer button. With so many if and else cases setting the timer and increasing the speed of the timer was a little tough
However with debugging the program by step by step analyzing I was able to figure out where the functions had to be implemented for succesful implementation of the
timer.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[In my opinion the description did a very good job in explaining the steps for making the game. When trying to add optional and extra features, There were a number of
questions that came in my mind. How are css,html and JavaScript features linked together and how to access them using concepts of inheritance and global variables. 
I am curious to learn more about the extentions of nodeJS such as threeJS, and other features that web development has to offer. ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, I would have tried to add more smooth animations to the game, such as I was trying to create a collapse feature where if the user clicks the starts button the 
music buttons would transition out of the orange toggle in a circular pattern, however the difficulty I was facing was that I could not set it to the start button and the buttons would collapse back if the user 
clicked on the gameButtons. Therefore I wasn't able to implement it. Another Animation I wanted to add was the pop up celebration after winning or losing the game, but then due to time constraints I couldn't do it.]



## Interview Recording URL Link

[https://psu.mediaspace.kaltura.com/media/Aryan+Roy%27s+Zoom+Meeting/1_6u2k716b]


## License

    Copyright [Aryan Roy]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.