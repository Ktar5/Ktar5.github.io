---
layout: post
title: "Slip 'n Slime, my indie gamedev journey"
date: 2019-10-05
excerpt: "Over the course of the past two-ish years I spent an incredible amount of time developing an indie video game called Slip 'N Slime using the LibGDX game library for Java. It is one of my most proud projects."
project: true
img: https://i.imgur.com/1TcvIWr.png
github: "https://github.com/Ktar5/SlimeGame"
tag: 
- Game Development
- Java
- Custom Tools
comments: false
---

Slip 'n Slime is an indie video game that I created where the goal is to solve puzzles and get to the end of the tunnel, however each time you move, you keep moving until you hit something or die.

**GitHub Link:** [Slip 'n Slime Game](https://github.com/Ktar5/SlimeGame) (Please note that this was not truly meant to be open source, but is for the value it adds to my resume)

## Project Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/Mgd2Pc-gnlo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Technologies Used:** Java, LibGDX Game Framework, JavaFX, MongoDB, and my own tools

## Summary
I love video games, and in freshman year of college, I thought it would be a great time to try my hand at game development. After many attempts, I found something that was fun, so I expanded upon it. I spent thousands of my own money to hire an artist and level designer, while I kept the design, art direction, programming, and any other roles. This game has a rich history to it in my life that makes it difficult to put all into words here, so what you see here will only be a tidbit of the project. This was (is?) an incredibly complex project that I poured my heart into, and I feel this is some of the best programming I've done. The project in its entirety is between 20,000-30,000 lines of code.

## Features
**Complex Interacting Systems**
One of the (many) major challenges in making this game is the amount of different mechanics that need to work together and behave extremely specifically. Movement of the slime and other entities, as well as their interactions had to be frame-and-pixel-perfect. Boxes hitting minecarts that run around track that hit the player that pushes them into a drain that makes them small that pushes them through a hole in the wall that spits them out onto spikes could all happen in one turn.

**Analytics**
Embedded into the software was a custom built analytics tool that used MongoDB to report anonymous player statistics for game design purposes. Here's a screenshot from the database showing example data:
![analytics](https://i.imgur.com/8fj1KbV.png)
![analytics2](https://i.imgur.com/dvtCf0j.png)

**Level Selection Map Editor**
![editor](https://i.imgur.com/BiyZAuH.gif)
[Better description on the dev log for this subject!](https://ktar5.itch.io/slip-n-slime/devlog/105536/log-4-level-selection)

**Tilemap Editor**
A tilemap editor was built into the game, here's a development screenshot that shows off the program.
* Adjust layer opactiy / rendering order / visibility / rename in the top right
* Zoomable, pannable editor view for placing / deleting / rotating tiles
* Transparency support
* Integrated into the game
* Full undo and redo
* Selection tools
* Edit multiple tilemaps and tilesets at the same time
* Export into agnostic JSON files
* Store variables within the tilemap to use in the import

![tilemap](https://i.imgur.com/jPagGVy.png)

## Dev Logs
You can see development logs with cool pictures and fun details over [HERE](https://ktar5.itch.io/slip-n-slime) on itch.io! 
