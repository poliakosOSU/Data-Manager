import React from 'react';
import DataSets from './DataSets'; 
import SelectDataSetType from  './SelectDataSetType';

export class Views extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentView: "DataSetSelection",
            currentDataSet: "NULL"
        }
        this.changeCurrentView = this.changeCurrentView.bind(this);
				this.update = this.update.bind(this);
    }

    changeCurrentView(view) {
			this.setState({currentView: view});
		}
		update(updatedStateData){
			this.setState(updatedStateData);
		}

    render() {
			
        if(this.state.currentView === "DataSetSelection"){
					console.log("Option 1 Accessed")
					return(<DataSets updateParentState={this.update}/>)
        } if(this.state.currentView === "DataSetTypeSelection"){
					return(<SelectDataSetType updateParentState={this.update}/>)
        }
    }

}

export default Views;