import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, TextField, Button, Paper } from "@mui/material"

export default function EditBox(props) {

    return(
        <Paper sx={
            {
                padding: '20px 15px', 
                width: '500px', 
                position: 'absolute',
                top: '15vh',
                left: '35%'
            }
        }>
            <h2>Edit {props.npc.name} Information</h2>
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
                <TextField sx={{marginBottom:'15px'}} label="Name" defaultValue={props.npc.name}/>
                <TextField sx={{marginBottom:'15px'}} label="Description"  multiline defaultValue={props.npc.description}/>
                <TextField sx={{marginBottom:'15px'}} label="Spawn Requirement" multiline defaultValue={props.npc.spawnRequirement}/>
                <Button variant="contained" onClick={() => {}}>Save</Button>
            </Box>
        </Paper>
    )
}