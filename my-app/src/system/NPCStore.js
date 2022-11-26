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
                    biomes: [
                        "Forest"
                    ],
                    neighbors: [
                        "Princess",
                        "Clothier",
                        "Zoologist"
                    ]
                },
                dislikes:{
                    biomes:[
                        "Ocean"
                    ],
                    neighbors:[
                        "Steampunker"
                    ]
                },
                hates:{
                    biomes:[
                        
                    ],
                    neighbors:[
                        "Painter"
                    ]
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
                    biomes:[],
                    neighbors:["Arms Dealer"]
                },
                likes:{
                    biomes: ["The Hallow"],
                    neighbors: ["Princess", "Wizards"]
                },
                dislikes:{
                    biomes:["Snow Biome"],
                    neighbors:["Party Girl", "Dryad"]
                },
                hates:{
                    biomes:[],
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
                    biomes:[],
                    neighbors:["Tavernkeep"]
                },
                likes:{
                    biomes: ["Underground",],
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
        {
            id:4,
            name:"Dye Trader",
            img:"Dye_Trader.png",
            description:"Sells the Dye Vat crafting station. Provides rare dyes in exchange for Strange Plants.",
            spawnRequirement:"A player has a dye item or any item used to craft dye in their inventory, in addition to certain other conditions.",
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
    biomeList: [
        {
            id:0,
            name:"Forest",
            img:"Forest.png"
        },
        {
            id:1,
            name:"Snow Biome",
            img:"SnowBiome.png"
        },
        {
            id:2,
            name:"Desert",
            img:"Desert.png"
        },
        {
            id:3,
            name:"Jungle",
            img:"Jungle.png" 
        },
        {
            id:4,
            name:"Ocean",
            img:"Ocean.png"
        },
        {
            id:5,
            name:"Glowing Mushroom Biome",
            img:"GlowingMushroom.png"
        },
        {
            id:6,
            name:"Underground",
            img:"Underground.png"
        },
        {
            id:7,
            name:"Cavern.png",
            img:"Cavern.png"
        },
        {
            id:8,
            name:"The Underworld",
            img:"Underworld.png"
        },
        {
            id:9,
            name:"The Hallow",
            img:"Hallow.png"
        },
    ],
    subscribers: [], //array that holds callbacks
    subscribe: function(callback) { //recieves a callback
        this.subscribers.push(callback); //pushes callback into array
    },
    updateSubscribers: function() {
        this.subscribers.forEach((callback) => { //for each callback in the array, invoke it
            callback();
        });
    },
}

export { NPCStore }