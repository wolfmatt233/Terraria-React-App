import * as React from 'react';
import PreferenceBox from './PreferenceBox';
import { Grid, Paper, Button } from '@mui/material';

export default function NPCBox({npc, index}) {
  let prefData = <PreferenceBox preferences={ npc.preferences } index={ index }/>

  return (
    //display an item with NPC details
    <Grid item sx={{width: '20%'}}>

      <Paper sx={{minHeight: '300px', padding: '5px 10px', position:'relative'}}>

        <Paper sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding: '0 7px' }}>
          <h2>{ npc.name }</h2>
          <img src={ "/images/" + npc.img } alt={ npc.img } />
        </Paper>

        <p><b>Description:</b> { npc.description }</p>
        <p><b>Spawn Requirement:</b> { npc.spawnRequirement }</p>
        
        {/* on a button click, open a new compenent to display the npc preferences */}
        <Button sx={{position:'absolute', bottom:'0', left:'0'}} onClick={() => {}}>Show Preferences</Button>

        {/* on a button click, open a modal to edit a specific npcs info */}
        <Button sx={{position:'absolute', bottom:'0', right:'0'}}>Edit</Button>

      </Paper>   

    </Grid>
  );
}