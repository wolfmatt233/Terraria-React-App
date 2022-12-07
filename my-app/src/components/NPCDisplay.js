import React from "react"
import { useState } from "react"
import { NPCStore } from "../system/NPCStore"
import { Grid, Modal } from '@mui/material';
import NPCBox from "./NPCBox";
import PreferenceBox from "./PreferenceBox";

export default function NPCDisplay() {
    //npc list from data store
    const[npcData, setNpcData] = useState(NPCStore.npcList) 

    //get selected npc data
    const[selectedNPC, setSelectedNPC] = useState({})

    //sets whether the modal is open or not, default closed
    const [showNPCModal, setNPCModalOpen] = useState(false)

    //pre-render: loop through npc list, create an item for each npc
    let npcLoop = npcData.map((npc, ind) => (
        <NPCBox key={ npc.id } npc={ npc } ind={ ind } showInfo={showInfo} />
    ))

    return(
        //return a modal for the preference data
        //return a list of npcs and their basic data
        <div>
            <Modal open={showNPCModal} onClose={() => { setNPCModalOpen(false) }}>
                <PreferenceBox key={selectedNPC.id} npc={selectedNPC} preferences={selectedNPC.preferences}/>
            </Modal>

            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:'30px', position:'relative'}}>
                { npcLoop }
            </Grid>
        </div>
    )

    function showInfo(id) {
        //set the current selected npc used for the preference box
        setSelectedNPC(NPCStore.npcList[id])
        
        //open the preference box modal
        setNPCModalOpen(true)
    }
}