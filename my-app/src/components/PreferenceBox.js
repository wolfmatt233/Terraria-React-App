import * as React from 'react';
import { useEffect, useState } from 'react';
import { Paper, InputLabel, Box, FormControl, MenuItem, Select,  } from '@mui/material';

export default function PreferenceBox({npc, preferences}) {
    
    //selected preference items to be shown
    const[selectedPref, setSelectedPref] = useState([])

    //set the empty biome and neighbor boxes not to display until an option is chosen
    const[notDisplayed, setDisplayed] = useState("none")

    const handleChange = (event) => {
        setSelectedPref(event.target.value);
        setDisplayed("block")
    };

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
                    top: '15vh',
                    left: '35%'
                }
            }>
                <h2>{npc.name} Preferences</h2>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-prefs">Preferences</InputLabel>
                        <Select
                            labelId="select-prefs"
                            id="pref-select"
                            value={selectedPref}
                            onChange={handleChange}
                        >
                            <MenuItem value={loves}>Loves</MenuItem>
                            <MenuItem value={likes}>Likes</MenuItem>
                            <MenuItem value={dislikes}>Dislikes</MenuItem>
                            <MenuItem value={hates}>Hates</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Paper sx={{display: notDisplayed, padding:'10px', margin:'20px 0'}}>
                    <h3>Biomes</h3>
                    <Box sx={{display:'flex'}}>
                        {selectedPref[0]}
                    </Box>
                </Paper>
                <Paper sx={{display: notDisplayed, padding:'10px', margin:'20px 0'}}>
                    <h3>Neighbors</h3>
                    <Box sx={{display:'flex'}}>
                        {selectedPref[1]}
                    </Box>
                </Paper>
            </Paper>
        </div>
    )

    function prefLoop(type) {
        let prefLocation = "preferences." + type

        return(
            eval(prefLocation).map((item, ind) => (
                <Paper key={ind} sx={{
                    padding:'10px', 
                    display:'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    width:'100%',
                    marginRight:'10px',
                    marginLeft:'10px'
                }}>
                    <img src={ "/images/" + item + ".png" } alt={ item + ".png" }/>
                    {item}
                </Paper>
            )) 
        )
    }
}