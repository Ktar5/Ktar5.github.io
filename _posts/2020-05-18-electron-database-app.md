---
layout: post
title: "ElectronJS Database Viewer App"
date: 2020-05-18
excerpt: "An application I built using Electron / JS / CSS / Vue.JS and a few other libraries for a client that wanted to be able to view, tag, and combine multiple different complicated, custom file formats in an easy interface"
project: true
img: https://i.imgur.com/c7MulHw.gif
github: "Sorry it's proprietary :("
tag: 
- Electron
- JavaScript
- VueJS
- Git Authentication
- Front End
- UI
- UX
- Three.JS
comments: false
---

## Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/B7o245tZOTw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

During my time at Shapescape, I was taked with making a tool that would allow the non-technical staff to be able to upload, download, sort, tag, search, and view all of our assets which included 3d geometry (using Three.JS), 2d images, sound files (uncomplete), and schematics (uncomplete). I focused heavily on trying to make an attractive UI with simple UX design in order to make the application as easy to use.

**Technologies Used:** The major technologies used were VueJS, ElectronJS, Three.JS, and, of course, JavaScript itself.

## Features
**GitHub HTTP Authentication / Repository Downloads**
The main feature of this application is to abstract the complexities of Git/GitHub for the rest of the team. On startup, the app would authenticate with the user, clone all the asset repositories, scan them to generate the tags lists, and generate the views. A large challenge was incorporating multiple OS windows into the application for transferring data from the GitHub login/auth page back to the application, I feel it was due to my inexperience with many of the systems I used at the time of starting development.

**GitHub Commits/Pushes & File Watcher**
In order to maintain ease of use, the app would watch the repository directories for any file changes, and prompt the user to "upload". The upload process created a small modal that asked the user for a short description, and once they hit the "upload" button, it would begin committing the changes, and start pushing the data to the main repository. This allowed the process of pull/commit/push to be completely abstracted to the end user in a much friendlier way.

**Searching**
All assets were able to be searched by their name, tags, or path. I implemented a Fuzzy Search library and, for the most part, displayed results in real-time while typing, even with thousands of assets. To accomplish this, I used a method of object pooling to not have thousands of instances of the data objects, only the ones needed in the currently scrolled-to area. Performance was very important and I put considerable effort into keeping client demands while trying to make search as instant as possible.

**3D Rendering**
Honestly quite simple to implement, using the Three.JS 3d library, I was able to render all the models our team had to offer just as they would appear in game. The models also loaded almost instantaneously except for some of the larger ones, which allowed users to flip through the different models and peruse selections.

**Tagging**
The client asked that assets be able to be "tagged" with descriptive keywords so I created a novel tag system that allowed searching for tags, applying and removing tags, creating tags, and storing tag data with simple UX. This is seen throughout the app in the search bar, and the tagging menus, as well as on loading and in the backend github system.

**Miscellaneous**
There were many other small features not described above. As well, there were also many others features that were planned, however I had to step away from this project (and retire from this company) when a job offer that I simply could not say no to came up. Some of the planned features that I was to implement included: schematic viewing, sound file viewing, and resource pack auto-generation (a Minecraft term).