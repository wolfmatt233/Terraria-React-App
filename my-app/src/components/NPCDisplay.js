import React from "react"
import { useState } from "react"
import { NPCStore } from "../system/NPCStore"
import { Grid } from '@mui/material';
import NPCBox from "./NPCBox";

export default function NPCDisplay() {
    const[npcData, setNpcData] = useState(NPCStore.npcList)

    //pre-render: loop through npc list, create an item for each npc
    let npcLoop = npcData.map((npc, ind) => (
        <NPCBox key={ ind } npc={ npc } ind={ ind } />
    ))

    return(
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:'30px'}}>
            { npcLoop }
        </Grid>
    )
}

/*
<Container>
    <Row>
        <NPCItem/>
        <NPCItem/>
        <NPCItem/>
    </Row>
    <Row>
        <NPCItem/>
        <NPCItem/>
        <NPCItem/>
    </Row>
    <Row>
        <NPCItem/>
        <NPCItem/>
        <NPCItem/>
    </Row>
    
    <AddNPC/>
</Container>
*/