import * as React from 'react'
import { Grid, Paper, Button, CardContent, styled, Box } from '@mui/material'
import { borderColor, fontFamily, padding } from '@mui/system'

export default function NPCBox(props) {

  const TerrariaButton = styled(Button)(() => ({
    fontWeight: '600',
    marginBottom:'5px',
    fontFamily: 'Terraria-Font',
    color:'#e5e8e6',
    backgroundColor:'#17b34e',
  }))

  return (
      <Grid item sx={{width: '20%', minWidth: '250px'}}>
        <Paper className='NPCBox' sx={
          {
            height: '100%', 
            padding: '5px 10px', 
            position:'relative', 
            backgroundColor:'#583e31',
            borderRadius:'0px'
          }
        }>

          {/* name and image header */}
          <Paper sx={{
              display:'flex', 
              alignItems:'center', 
              justifyContent:'space-between', 
              padding: '0 7px',
              marginTop:'5px',
              backgroundColor:'#17b34e',
              color:'#e5e8e6'
            }}>
            <h2>{ props.npc.name }</h2>
            <img className='bounceIcon' src={ "/images/" + props.npc.img } alt={ props.npc.img } />
          </Paper>

          {/* Description and Spawn Requirements */}
          <CardContent sx={{ marginBottom: '100px', color: '#e5e8e6', lineHeight: '24px', fontSize:'18px', letterSpacing: '1px' }}>
            <p><b>Description:</b> { props.npc.description }</p>
            <p><b>Spawn Requirement:</b> { props.npc.spawnRequirement }</p>
          </CardContent>
          
          <Box sx={{position:'absolute', bottom:'5px', display:'flex', alignItems:'center', flexWrap:'wrap', width:'93%', justifyContent:'space-between'}}>
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