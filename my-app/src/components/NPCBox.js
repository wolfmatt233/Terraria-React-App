import * as React from 'react';
import { Grid, Paper, Button, CardContent } from '@mui/material';
export default function NPCBox(props) {
  // {npc}, index, showInfo 

  return (
      <Grid item sx={{width: '20%', minWidth: '250px'}}>
        <Paper sx={{height: '350px', padding: '5px 10px', position:'relative'}}>

          {/* name and image header */}
          <Paper sx={{
              display:'flex', 
              alignItems:'center', 
              justifyContent:'space-between', 
              padding: '0 7px'
            }}>
            <h2>{ props.npc.name }</h2>
            <img src={ "/images/" + props.npc.img } alt={ props.npc.img } />
          </Paper>

          {/* Description and Spawn Requirements */}
          <CardContent sx={{ marginBottom: '5px' }}>
            <p><b>Description:</b> { props.npc.description }</p>
            <p><b>Spawn Requirement:</b> { props.npc.spawnRequirement }</p>
          </CardContent>
          
          {/* on a button click, open a new compenent to display the npc preferences */}
          <Button sx={{position:'absolute', bottom:'0', left:'5px'}} onClick={() => {
            props.showInfo(props.npc.id)
          }}>Show Preferences</Button>

          {/* on a button click, open a modal to edit a specific npcs info */}
          <Button sx={{position:'absolute', bottom:'0', right:'5px'}}>Edit</Button>
        </Paper>
      </Grid>
  )
}