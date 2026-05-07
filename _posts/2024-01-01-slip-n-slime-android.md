---
layout: post
title: "Android Game Development: Shipping Slip 'n Slime Across 6 Platforms"
date: 2024-01-01
excerpt: "Two years, seven people, one Android game shipped to iOS, Android, PC, Mac, Linux, and SteamDeck. I owned all engineering and product direction, rebuilt the game from LibGDX to Godot, and led the team from prototype to launch."
project: true
img: /assets/images/slime-banner.png
github: "https://github.com/Ktar5/SlimeGame"
tag:
- Android
- Game Development
- Java
- LibGDX
- Godot
- Cross-Platform
- Product
comments: false
---

<div class="stats-callout stats-callout--hero">
  <div class="stat"><span class="stat-number">7</span><span class="stat-label">Person Team</span></div>
  <div class="stat"><span class="stat-number">2 Years</span><span class="stat-label">Development</span></div>
  <div class="stat"><span class="stat-number">6</span><span class="stat-label">Platforms Shipped</span></div>
</div>

<div class="post-video"><iframe src="https://www.youtube.com/embed/LZY76QOgigQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display:block;width:100%;aspect-ratio:16/9;border-radius:4px;"></iframe></div>

Slip 'n Slime is a puzzle game where every move sends you sliding until you hit a wall or die. Simple concept, deep execution. I built it, shipped it across six platforms, and led a seven-person team to get it there.

---

## Android Java from Day One

The first version of Slip 'n Slime was built in **LibGDX**, a raw Java game framework that compiles natively to Android. I wrote Java targeting Android directly, iterating with **Android Studio** and **USB debugging** on physical devices throughout development. Every gameplay loop, every physics interaction, every UI element was tested on-device.

This gave me a ground-level understanding of Android development: the activity lifecycle, input handling on touchscreen hardware, performance profiling, and the constraints of running on a wide range of Android devices.

{% include collage-two-col.html img1="/assets/images/slime-mobile-1.jpg" img2="/assets/images/slime-mobile-2.jpg" %}

---

## Rebuilding in Godot

Raw Java was slowing the team down. I made the decision to rebuild the game from scratch in **Godot** so we could move faster and so my level designers could iterate directly in a visual engine without depending on me for every content change.

I led the full technical migration, making all architecture decisions for the new codebase. The shipped version of the game is the Godot build, released across Android, iOS, Windows, Mac, Linux, and SteamDeck.

{% include collage-full.html img1="/assets/images/slime-level-map.jpg" %}

---

## Leading a 7-Person Team

At peak development, the team was seven people: three full-time staff and four part-time. I made every engineering and product decision, set the technical direction, and managed the roadmap. This wasn't a hobby project with volunteers, I made significant personal financial investment to staff and sustain the team over two years.

My responsibilities:
- All engineering architecture and implementation decisions
- Product direction and feature prioritization
- Hiring and coordinating artists, designers, and contractors
- Android/iOS build pipelines and store submissions
- Playtesting coordination and iteration cycles
