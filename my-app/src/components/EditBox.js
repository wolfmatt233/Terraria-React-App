import * as React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, Paper, styled } from "@mui/material"
import { TaskStore, editCommand, NPCStore } from "../system/NPCStore"

export default function EditBox(props) {

    const[NPCProps, setNPCProps] = useState(props.npc)
    const[name, setName] = useState(props.npc.name)
    const[description, setDescription] = useState(props.npc.description)
    const[spawnRequirement, setSpawnRequirement] = useState(props.npc.spawnRequirement)
    
    const TerrariaButton = styled(Button)`
        color: #e5e8e6;
        background-color: #17b34e;
        font-weight: 600;
        margin-bottom: 5px;
        font-family: Terraria-Font;
        border: 2px solid transparent;
        &:hover {
            border-color: #e5e8e6;
            background-color: #17b34e;
        }
    `

    return(
        <Paper className='modalIntro' sx={
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

            <Box sx={{color:'#fcc425', marginTop:'-10px'}}>
                <h2>Edit {props.npc.name} Information</h2>
            </Box>
            <Box
                sx={{ 
                    minWidth: 120,
                    display:'flex',
                    flexDirection:'column',
                }}
                component="form"
                noValidate
                autoComplete="off"
            >
                {/* set state value for each property on change*/}
                <TextField 
                    sx={{marginBottom:'15px'}} 
                    label="Name" 
                    defaultValue={props.npc.name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <TextField 
                    sx={{marginBottom:'15px'}} 
                    label="Description" 
                    multiline 
                    defaultValue={props.npc.description}
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                <TextField sx={{marginBottom:'15px'}} 
                    label="Spawn Requirement" 
                    multiline 
                    defaultValue={props.npc.spawnRequirement}
                    onChange={(e) => {setSpawnRequirement(e.target.value)}}
                />
                <TerrariaButton variant="contained" onClick={() => {

                    //when clicked make new edit command
                    let editCmd = new editCommand(props.npc.id, name, description, spawnRequirement)

                    //pass new edit command to data store
                    NPCStore.editNPC(editCmd)

                    props.setEditModalOpen(false)

                }}>Save</TerrariaButton>
            </Box>
        </Paper>
    )
}

//gather data from text fields
//find npc through id
//insert new data into object
//