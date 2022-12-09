import * as React from 'react';
import { useEffect, useState } from 'react';
import { Paper, Box, MenuItem, styled, TextField } from '@mui/material';
import { fontFamily, minHeight } from '@mui/system';

export default function PreferenceBox(props) {
    
    //selected preference items to be shown
    const[selectedPref, setSelectedPref] = useState([])

    //set the empty biome and neighbor boxes not to display until an option is chosen
    const[notDisplayed, setDisplayed] = useState("none")

    const[prefType, setPrefType] = useState("")

    const handleChange = (event) => {
        //get preferences
        setSelectedPref(event.target.value[0]);

        //set label as preference type
        setPrefType(event.target.value[1])

        //show biomes and neighors div
        setDisplayed("block")
    }

    const PrefItem = styled(Paper)(() => ({
        backgroundColor:'#17b34e',
        padding:'10px', 
        display:'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width:'100%',
        marginRight:'10px',
        marginLeft:'10px',
        height:'45px',
    }))

    const loves = [prefLoop("loves.biomes"),  prefLoop("loves.neighbors")]
    const likes = [prefLoop("likes.biomes"), prefLoop("likes.neighbors")]
    const dislikes = [prefLoop("dislikes.biomes"), prefLoop("dislikes.neighbors")]
    const hates = [prefLoop("hates.biomes"), prefLoop("hates.neighbors")]

    //Modal information to show preference information
    return(
        <div>
            <Paper sx={
                {
                    padding: '20px 15px', 
                    width: '500px', 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor:'#60adfb'
                }
            }>
                <Box sx={{color:'#fcc425', letterSpacing: '1px'}}>
                    <h2>{props.npc.name} Preferences</h2>
                </Box>
                <Box 
                    component="form"
                    noValidate
                >
                    <div className='dropDownTypes'>{prefType}</div>
                    <TextField
                        sx={{width:'100%'}}
                        label="Preferences"
                        select
                        value={selectedPref}
                        onChange={handleChange}
                    >
                        <MenuItem sx={{fontFamily:'Terraria-Font'}}
                            value={[loves, "Loves"]}
                        >Loves</MenuItem>
                        <MenuItem sx={{fontFamily:'Terraria-Font'}}
                            value={[likes, "Likes"]}
                        >Likes</MenuItem>
                        <MenuItem sx={{fontFamily:'Terraria-Font'}}
                            value={[dislikes, "Dislikes"]}
                        >Dislikes</MenuItem>
                        <MenuItem sx={{fontFamily:'Terraria-Font'}}
                            value={[hates, "Hates"]}
                        >Hates</MenuItem>
                    </TextField>
                </Box>

                <Box sx={{display: notDisplayed}}>
                    <img src="/images/grass.png" alt="grass-img" className='grass-img-prefs' />
                </Box>
                <Paper sx={
                    {
                        display: notDisplayed, 
                        padding:'10px', margin:'20px 0', 
                        backgroundColor:'#583e31',
                        color: '#e5e8e6',
                        borderRadius:'0 0 5px 5px',
                        maxWidth:'96%',
                    }
                }>
                    <h3>Biomes</h3>
                    <Box sx={{display:'flex'}}>
                        {selectedPref[0]}
                    </Box>
                </Paper>

                <Box sx={{display: notDisplayed}}>
                    <img src="/images/grass.png" alt="grass-img" className='grass-img-prefs' />
                </Box>
                <Paper sx={
                    {
                        display: notDisplayed, 
                        padding:'10px', margin:'20px 0', 
                        backgroundColor:'#583e31',
                        color: '#e5e8e6',
                        borderRadius:'0 0 5px 5px'
                    }
                }>
                    <h3>Neighbors</h3>
                    <Box sx={{display:'flex'}}>
                        {selectedPref[1]}
                    </Box>
                </Paper>
            </Paper>
        </div>
    )

    function prefLoop(type) {
        //get the location for the array type (either biome or neighbor)
        let prefLocation = "props.npc.preferences." + type

        //if the array is empty, show "None" with the "None" image
        if(eval(prefLocation).length == 0) {
            return (
                <PrefItem>
                    <img className='bounceIcon' src={ "/images/None.png" } alt={ "None.png" }/>
                    N/A
                </PrefItem>
            )
        } else

        //otherwise return an item for the NPC or Biome
        return(
            eval(prefLocation).map((item, ind) => (
                <PrefItem key={ind}>
                    <img className='bounceIcon' src={ "/images/" + item + ".png" } alt={ item + ".png" }/>
                    {item}
                </PrefItem>
            )) 
        )
    }
}