# React Terraria Data Display

[Try it here](https://wolfmatt233.github.io/Terraria-React-App/)

# Component Descriptions

- NPC Data Store with list of NPCs and info
- NPC Display: The central hub where the grid is created along with the modals and states to activate them and pass data to them
- NPC Box: Displays the NPC information and has buttons to activate edit and preference displays
- Preference Box: Displays dropdown list for each type of preference (loves, likes, dislikes, hates) which shows what biomes and neighbors that the NPC prefers in each category
- Edit Box: Displays a form and sends data to store to be changed

# Requirements

- Driven by data nested at least 3 levels deep
- Overlays that provide more detail about an object or piece of information
- Animated transitions between states
- A data store for querying, interacting with, and manipulating data
- One component that modifies and updates the data in some way (changes names, updates stats, adds new items)
- 4+ distinct components
- Written in React

# Plan

- Idea: Terraria NPC's and their happiness including what other NPC's and biomes they like, dislike, and hate
- Use JSON to structure out data
  - an array with multiple objects
  - each object is an NPC
  - each NPC has a name, desc, spawn requirement, and preferences
    - preferences have three different types
    - likes, dislikes, and hates which are all objects
    - these each contain two arrays, biomes and neighbors
- Display data on a card for each npc and their preferences
- After clicking, display preference data -> retrieve other
