import * as React from 'react'
import { Grid, Paper, Button, CardContent, styled, Box } from '@mui/material'
import "./components.css"

export default function NPCBox(props) {

  const TerrariaButton = styled(Button)`
    color: #e5e8e6;
    background-color: #17b34e;
    font-weight: 600;
    margin-bottom: 5px;
    font-family: Terraria-Font;
    &:hover {
      border: 2px solid #17b34e;
    }
  `
  return (
      // grid item for each npc
      <Grid item className='grid-item'>

        {/* Display grass on top of each container */}
        <img src="/images/grass.png" alt="grass-img" className='grass-img' />

        {/* NPC Info Continer */}
        <Paper className='NPCBox' sx={{backgroundColor:'#583e31', borderRadius:'0 0 5px 5px'}}>

          {/* Name and Image header */}
          <Paper className='boxHeader' sx={{backgroundColor:'#17b34e', color:'#e5e8e6'}}>
            <h2>{ props.npc.name }</h2>
            <img className='bounceIcon' src={ "/images/" + props.npc.img } alt={ props.npc.img } />
          </Paper>

          {/* Description and Spawn Requirements */}
          <CardContent className='boxContent' sx={{color: '#e5e8e6'}}>
            <p><b>Description:</b> { props.npc.description }</p>
            <p><b>Spawn Requirement:</b> { props.npc.spawnRequirement }</p>
          </CardContent>
          
          <Box className='buttonContainer'>
            {/* on a button click, open a new compenent to display the npc preferences */}
            <TerrariaButton variant='outlined' onClick={() => {
              props.gatherInfo(props.npc.id)
            }}>Show Preferences</TerrariaButton>

          {/* on a button click, open a modal to edit a specific npcs info */}
          <TerrariaButton variant='outlined' onClick={() => {
            props.editInfo(props.npc.id)
          }}>Edit</TerrariaButton>
          </Box>
         
        </Paper>
      </Grid>
  )
}