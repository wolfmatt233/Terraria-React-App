import React from "react";
import { useState } from "react";
import { NPCStore } from "../system/NPCStore";
import { Grid, Modal } from "@mui/material";
import NPCBox from "./NPCBox";
import PreferenceBox from "./PreferenceBox";
import EditBox from "./EditBox";
import "./components.css";

export default function NPCDisplay() {
  //npc list from data store
  const [npcData, setNpcData] = useState(NPCStore.npcList);

  //get selected npc data
  const [selectedNPC, setSelectedNPC] = useState({});

  //sets whether the preference modal is open or not, default closed
  const [showNPCModal, setNPCModalOpen] = useState(false);

  //sets whether the edit modal is open
  const [showEditModal, setEditModalOpen] = useState(false);

  //loop through npc list, create an item for each npc
  let npcLoop = npcData.map((npc, ind) => (
    <NPCBox
      key={npc.id}
      npc={npc}
      ind={ind}
      gatherInfo={gatherInfo}
      editInfo={editInfo}
    />
  ));

  return (
    <div>
      {/* Modal used to view NPC Preferences */}
      <Modal
        open={showNPCModal}
        onClose={() => {
          setNPCModalOpen(false);
        }}
      >
        <div>
          <PreferenceBox npc={selectedNPC} />
        </div>
      </Modal>

      {/* Modal used to edit an NPC */}
      <Modal
        open={showEditModal}
        onClose={() => {
          setEditModalOpen(false);
        }}
      >
        <div>
          <EditBox npc={selectedNPC} setEditModalOpen={setEditModalOpen} />
        </div>
      </Modal>

      {/* Grid of NPC's and their information */}
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        className="NPCDisplay"
      >
        {npcLoop}
      </Grid>
    </div>
  );

  function gatherInfo(id) {
    //set the current selected npc used for the preference box
    setSelectedNPC(NPCStore.npcList[id]);

    //open the preference box modal
    setNPCModalOpen(true);
  }

  function editInfo(id) {
    //get selected npc to be edited
    setSelectedNPC(NPCStore.npcList[id]);

    //open the edit modal
    setEditModalOpen(true);
  }
}
