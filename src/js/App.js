import React from 'react';
import MenuBar from './components/menuBar';
import DenseAppBar from './components/denseAppBar';
// import { electron } from 'webpack';

function App() {
    return (
        <DenseAppBar />
        // <div>
        // <h1>React Component</h1>
        // <button onClick={() => {
        //     electron.notificationApi.sendNotification("My custom notification!")
        //     }}>Notify</button>
        // </div>
    )
}

export default App;