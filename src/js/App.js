import React from 'react';
import DataSets from './components/DataSets';
import MenuBar from './components/MenuBar';
import DenseAppBar from './components/DenseAppBar';
import MediaCard from './components/MediaCard';
import NewMediaCard from './components/NewMediaCard';
// import { DataGrid } from '@material-ui/data-grid'; possibly use in another window
// import { electron } from 'webpack';

// function createCards(){
//     for(int i = 0; i 2; i++){

//     }
// }

function App() {

    // const dataCards = [];

    // for(var i = 0; i < 2; i++){

    //     dataCards.push(<MediaCard />);
    // };
    return (
        <div>
        {/* <DenseAppBar /> */}
        {/* {dataCards}
        <NewMediaCard /> */}
          <DataSets />
        </div>
        // <div>
        // <h1>React Component</h1>
        // <button onClick={() => {
        //     electron.notificationApi.sendNotification("My custom notification!")
        //     }}>Notify</button>
        // </div>
    ) 
}

export default App;