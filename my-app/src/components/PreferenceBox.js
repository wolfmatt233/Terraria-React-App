import * as React from 'react';
import { Grid, Paper } from '@mui/material';

export default function PreferenceBox(preferences, index) {
    //display the preferences for the npc
        //types: love, like, dislike, and hate
        //each of those includes biomes and neighbors arrays

    //get the preference type
    //loop through biomes and display
    //loop through neighbors and display

    return(
        <div>
            <Paper>
                Loves:
                {/* {biomeLoop(loves)} */}
            </Paper>
            <Paper>
                Likes:   
            </Paper>

            <Paper>
                Dislikes:   
            </Paper>
            <Paper>
                Hates:   
            </Paper>
        </div>
    )

    // function biomeLoop(type) {
    //     preferences.type.biomes.map((item, ind) (
    //         <li key={ind}>{ item }</li>
    //     ))
    // }
}