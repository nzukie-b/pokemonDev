import React from "react";
import {Route} from "react-router-dom";
import TeamContainer from "../../containers/TeamCotainer";

const TrainingRoute = () => {
    return (
        <Route path="/training"
               render={() => <TeamContainer/>}/>
    )
}

export default TrainingRoute
