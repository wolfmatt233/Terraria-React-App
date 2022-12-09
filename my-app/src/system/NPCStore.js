let NPCStore = {
    npcList: [
        {
            id:0,
            name:"Guide",
            img:"Guide.png",
            description:"Provides tips and a general guide on how to acquire other NPCs and provides recipes that include an item that is shown to him.",
            spawnRequirement:"Always already present when starting a new world.",
            preferences: {
                loves:{
                    biomes: [],
                    neighbors: []
                },
                likes:{
                    biomes: [ "Forest" ],
                    neighbors: [ "Princess", "Clothier", "Zoologist" ]
                },
                dislikes:{
                    biomes:[ "Ocean" ],
                    neighbors:[ "Steampunker" ]
                },
                hates:{
                    biomes:[],
                    neighbors:[ "Painter" ]
                }
            }
        },
        {
            id:1,
            name:"Merchant",
            img:"Merchant.png",
            description:"Sells basic tools and supplies.",
            spawnRequirement:"All players combined have more than 50 silver in their inventories. Replaces the Guide as the starting NPC when starting a new Not the bees world.",
            preferences: {
                loves:{
                    biomes: [],
                    neighbors: []
                },
                likes:{
                    biomes: ["Forest"],
                    neighbors: ["Princess", "Golfer", "Nurse"]
                },
                dislikes:{
                    biomes:["Desert"],
                    neighbors:["Tax Collector"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Angler"]
                }
            }
        },
        {
            id:2,
            name:"Nurse",
            img:"Nurse.png",
            description:"Heals players and cancels debuffs in exchange for coins.",
            spawnRequirement:"A player has more than 100 health and the Merchant is present.",
            preferences: {
                loves: {
                    biomes:["None"],
                    neighbors:["Arms Dealer"]
                },
                likes:{
                    biomes: ["The Hallow"],
                    neighbors: ["Princess", "Wizard"]
                },
                dislikes:{
                    biomes:["Snow Biome"],
                    neighbors:["Party Girl", "Dryad"]
                },
                hates:{
                    biomes:["None"],
                    neighbors:["Zoologist"]
                }
            }
        },
        {
            id:3,
            name:"Demolitionist",
            img:"Demolitionist.png",
            description:"Sells explosives.",
            spawnRequirement:"A player has an explosive in their inventory and the Merchant is present. Replaces the Guide as the starting NPC when starting a new \"For the Worthy\" world.",
            preferences: {
                loves: {
                    biomes:["None"],
                    neighbors:["Tavernkeep"]
                },
                likes:{
                    biomes: ["Underground","Caverns","The Underworld"],
                    neighbors: ["None"]
                },
                dislikes:{
                    biomes:["Ocean"],
                    neighbors:["Goblin Tinkerer", "Arms Dealer"]
                },
                hates:{
                    biomes:["None"],
                    neighbors:["None"]
                }
            }
        },
        {
            id:4,
            name:"Dye Trader",
            img:"Dye Trader.png",
            description:"Sells the Dye Vat crafting station. Provides rare dyes in exchange for Strange Plants.",
            spawnRequirement:"A player has a dye item or any item used to craft dye in their inventory, in addition to certain other conditions.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:[]
                },
                likes:{
                    biomes: ["Desert"],
                    neighbors: ["Princess", "Arms Dealer", "Painter"]
                },
                dislikes:{
                    biomes:["Forest"],
                    neighbors:["Steampunker"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Pirate"]
                }
            }
        },
        {
            id:5,
            name:"Angler",
            img:"Angler.png",
            description:"Gives fishing quests and rewards players for completing them.",
            spawnRequirement:"Found and spoken to in an Ocean biome.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:[]
                },
                likes:{
                    biomes: ["Ocean"],
                    neighbors: ["Princess", "Party Girl", "Demolitionist", "Tax Collector"]
                },
                dislikes:{
                    biomes:["Desert"],
                    neighbors:[]
                },
                hates:{
                    biomes:[],
                    neighbors:["Tavernkeep"]
                }
            }
        },
        {
            id:6,
            name:"Zoologist",
            img:"Zoologist.png",
            description:"Sells vanity, mount, pet, and critter-themed items.",
            spawnRequirement:"At least 10% of the Bestiary (54 entries) has been filled.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Witch Doctor"]
                },
                likes:{
                    biomes: ["Forest"],
                    neighbors: ["Princess", "Golfer"]
                },
                dislikes:{
                    biomes:["Desert"],
                    neighbors:["Angler"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Arms Dealer"]
                }
            }
        },
        {
            id:7,
            name:"Dryad",
            img:"Dryad.png",
            description:"Sells nature/Corruption/Crimson items, and can report the percentage of Corruption/Crimson and Hallow in the world.",
            spawnRequirement:"The Eye of Cthulhu, Eater of Worlds/Brain of Cthulhu, or Skeletron has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:[]
                },
                likes:{
                    biomes: ["Jungle"],
                    neighbors: ["Princess", "Witch Doctor", "Truffle"]
                },
                dislikes:{
                    biomes:["Desert"],
                    neighbors:["Angler"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Golfer"]
                }
            }
        },
        {
            id:8,
            name:"Painter",
            img:"Painter.png",
            description:"Sells paint, painting tools, and paintings.",
            spawnRequirement:"4 other town NPCs are in the world.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Dryad"]
                },
                likes:{
                    biomes: ["Jungle"],
                    neighbors: ["Princess", "Party Girl"]
                },
                dislikes:{
                    biomes:["Forest"],
                    neighbors:["Cyborg", "Truffle"]
                },
                hates:{
                    biomes:[],
                    neighbors:[]
                }
            }
        },
        {
            id:9,
            name:"Golfer",
            img:"Golfer.png",
            description:"Sells Golf Clubs, Balls, and other golfing items.",
            spawnRequirement:"Found and spoken to in the Underground Desert.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Angler"]
                },
                likes:{
                    biomes: ["Forest"],
                    neighbors: ["Princess", "Painter", "Zoologist"]
                },
                dislikes:{
                    biomes:["Underground", "Caverns", "The Underworld"],
                    neighbors:["Pirate"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Merchant"]
                }
            }
        },
        {
            id:10,
            name:"Arms Dealer",
            img:"Arms Dealer.png",
            description:"Sells guns, bullets, and other ammunition.",
            spawnRequirement:"A player has bullets or a gun that shoots bullets in their inventory.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Nurse"]
                },
                likes:{
                    biomes: ["Desert"],
                    neighbors: ["Princess", "Steampunker"]
                },
                dislikes:{
                    biomes:["Snow Biome"],
                    neighbors:["Golfer"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Demolitionist"]
                }
            }
        },
        {
            id:11,
            name:"Tavernkeep",
            img:"Tavernkeep.png",
            description:"Sells items that summon and help with fighting the Old One's Army, most of them only in exchange for Defender Medals.",
            spawnRequirement:"Found and spoken to after the Eater of Worlds or Brain of Cthulhu has been defeated. ",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Demolitionist"]
                },
                likes:{
                    biomes: ["The Hallow"],
                    neighbors: ["Princess", "Goblin Tinkerer"]
                },
                dislikes:{
                    biomes:["Snow Biome"],
                    neighbors:["Guide"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Dye Trader"]
                }
            }
        },
        {
            id:12,
            name:"Stylist",
            img:"Stylist.png",
            description:"Can change the player's hairstyle and sells Hair Dyes.",
            spawnRequirement:"Found and spoken to in a Spider Cave.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Dye Trader"]
                },
                likes:{
                    biomes: ["Ocean"],
                    neighbors: ["Princess", "Pirate"]
                },
                dislikes:{
                    biomes:["Snow Biome"],
                    neighbors:["Tavernkeep"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Goblin Tinkerer"]
                }
            }
        },
        {
            id:13,
            name:"Goblin Tinkerer",
            img:"Goblin Tinkerer.png",
            description:"Sells items such as the Tinkerer's Workshop, and can reforge items.",
            spawnRequirement:"The Queen Bee has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Mechanic"]
                },
                likes:{
                    biomes: ["Underground", "Caverns", "The Underworld"],
                    neighbors: ["Princess", "Dye Trader"]
                },
                dislikes:{
                    biomes:["Jungle"],
                    neighbors:["Clothier"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Stylist"]
                }
            }
        },
        {
            id:14,
            name:"Witch Doctor",
            img:"Witch Doctor.png",
            description:"Sells the Blowgun, the Imbuing Station, summoner equipment, Fountains, and Leaf Wings. ",
            spawnRequirement:"The Queen Bee has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:[]
                },
                likes:{
                    biomes: ["Jungle"],
                    neighbors: ["Princess", "Dryad", "Guide"]
                },
                dislikes:{
                    biomes:["The Hallow"],
                    neighbors:["Nurse"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Truffle"]
                }
            }
        },
        {
            id:15,
            name:"Clothier",
            img:"Clothier.png",
            description:"Sells some vanity items, including the Familiar set.",
            spawnRequirement:"Skeletron has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Truffle"]
                },
                likes:{
                    biomes: ["Underground", "Caverns", "The Underworld"],
                    neighbors: ["Princess", "Tax Collector"]
                },
                dislikes:{
                    biomes:["The Hallow"],
                    neighbors:["Nurse"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Mechanic"]
                }
            }
        },
        {
            id:16,
            name:"Mechanic",
            img:"Mechanic.png",
            description:"Sells the Wrench, Wire, and other mechanism-related items.",
            spawnRequirement:"Found and spoken to in the Dungeon.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Goblin Tinkerer"]
                },
                likes:{
                    biomes: ["Snow Biome"],
                    neighbors: ["Princess", "Cyborg"]
                },
                dislikes:{
                    biomes:["Underground", "Caverns", "The Underworld"],
                    neighbors:["Arms Dealer"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Clothier"]
                }
            }
        },
        {
            id:17,
            name:"Party Girl",
            img:"Party Girl.png",
            description:"Sells novelty items that create colorful visual effects.",
            spawnRequirement:"1/40 chance of spawning after 14 other town NPCs are in the world. Replaces the Guide as the starting NPC when starting a new Drunk world.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Wizard", "Zoologist"]
                },
                likes:{
                    biomes: ["The Hallow"],
                    neighbors: ["Princess", "Stylist"]
                },
                dislikes:{
                    biomes:["Underground", "Caverns", "The Underworld"],
                    neighbors:["Merchant"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Tax Collector"]
                }
            }
        },
        {
            id:18,
            name:"Wizard",
            img:"Wizard.png",
            description:"Sells magic-related items.",
            spawnRequirement:"Found and spoken to in the Cavern layer.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Golfer"]
                },
                likes:{
                    biomes: ["The Hallow"],
                    neighbors: ["Princess", "Merchant"]
                },
                dislikes:{
                    biomes:["Ocean"],
                    neighbors:["Witch Doctor"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Cyborg"]
                }
            }
        },
        {
            id:19,
            name:"Tax Collector",
            img:"Tax Collector.png",
            description:"Collects property taxes from other NPCs. Earns 50 per NPC present, collectable by the player.",
            spawnRequirement:"A Tortured Soul is transformed with Purification Powder in the Underworld.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Merchant"]
                },
                likes:{
                    biomes: ["Snow Biome"],
                    neighbors: ["Princess", "Party Girl"]
                },
                dislikes:{
                    biomes:["The Hallow"],
                    neighbors:["Demolitionist", "Mechanic"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Santa Claus"]
                }
            }
        },
        {
            id:20,
            name:"Truffle",
            img:"Truffle.png",
            description:"Sells the Autohammer, Mushroom Spear, and other mushroom-themed items.",
            spawnRequirement:"A house is available in an above-ground Glowing Mushroom biome during Hardmode.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Guide"]
                },
                likes:{
                    biomes: ["Glowing Mushroom Biome"],
                    neighbors: ["Princess", "Dryad"]
                },
                dislikes:{
                    biomes:[],
                    neighbors:["Clothier"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Witch Doctor"]
                }
            }
        },
        {
            id:21,
            name:"Pirate",
            img:"Pirate.png",
            description:"Sells the Cannon and other pirate-themed items.",
            spawnRequirement:"A Pirate Invasion has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Angler"]
                },
                likes:{
                    biomes: ["Ocean"],
                    neighbors: ["Princess", "Tavernkeep"]
                },
                dislikes:{
                    biomes:["Underground", "Caverns", "The Underworld"],
                    neighbors:["Stylist"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Guide"]
                }
            }
        },
        {
            id:22,
            name:"Steampunker",
            img:"Steampunker.png",
            description:"Sells the Clentaminator, Teleporter, Jetpack, and other items.",
            spawnRequirement:"A mechanical boss has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:["Cyborg"]
                },
                likes:{
                    biomes: ["Desert"],
                    neighbors: ["Princess", "Painter"]
                },
                dislikes:{
                    biomes:["Jungle"],
                    neighbors:["Party Girl", "Wizard", "Dryad"]
                },
                hates:{
                    biomes:[],
                    neighbors:[]
                }
            }
        },
        {
            id:23,
            name:"Cyborg",
            img:"Cyborg.png",
            description:"Sells the Proximity Mine Launcher, Rockets, and Nanites.",
            spawnRequirement:"Plantera has been defeated.",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:[]
                },
                likes:{
                    biomes: ["Snow Biome"],
                    neighbors: ["Princess", "Stylist", "Pirate", "Steampunker"]
                },
                dislikes:{
                    biomes:["Jungle"],
                    neighbors:["Zoologist"]
                },
                hates:{
                    biomes:[],
                    neighbors:["Wizard"]
                }
            }
        },
        {
            id:24,
            name:"Santa Claus",
            img:"Santa Claus.png",
            description:"Sells the Santa set, colored lights, Christmas trees and their respective decorations.",
            spawnRequirement:"The Frost Legion has been defeated and it is Christmas.",
            preferences: {
                loves: {
                    biomes:["Snow Biome"],
                    neighbors:[]
                },
                likes:{
                    biomes: [],
                    neighbors: ["Princess"]
                },
                dislikes:{
                    biomes:[],
                    neighbors:[]
                },
                hates:{
                    biomes:["Desert"],
                    neighbors:["Tax Collector"]
                }
            }
        },
        {
            id:25,
            name:"Princess",
            img:"Princess.png",
            description:"Sells several vanity and furniture items. Loves up to three NPCs that live nearby and is liked by all NPCs around her. ",
            spawnRequirement:"All other town NPCs are in the world (except for town pets and Santa Claus).",
            preferences: {
                loves: {
                    biomes:[],
                    neighbors:[]
                },
                likes:{
                    biomes: [],
                    neighbors: []
                },
                dislikes:{
                    biomes:[],
                    neighbors:[]
                },
                hates:{
                    biomes:[],
                    neighbors:[]
                }
            }
        },
    ],
}

function editCommand(id, name, desc, spawnReq) {
    //set each property from the
    NPCStore.npcList[id].name = name
    NPCStore.npcList[id].description = desc
    NPCStore.npcList[id].spawnRequirement = spawnReq
}

export { NPCStore, editCommand }