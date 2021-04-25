import React from 'react';
import MediaCard from './MediaCard';
import NewMediaCard from './NewMediaCard';


export class DataSets extends React.Component {

	constructor(props) {
    super(props);
		this.state = {
			//currentView: "home",
		}
		// this.changeCurrentView = this.changeCurrentView.bind(this);
		// this.testStateSetting = this.testStateSetting.bind(this);
		this._updateParentState = this._updateParentState.bind(this);
  }

	// changeCurrentView(view) {
	// 	this.setState({currentView: view});
	// }

	// testStateSetting(item){
	// 	console.log("Accessed test state Setting");
	// 	this.props.setParentState({currentView: item});
	// }
	_updateParentState(item) {
		if(item.name = "CreateNewDataSet"){
			this.props.updateParentState({currentView: "DataSetTypeSelection"});
		} else {
			this.props.updateParentState({currentView: item.name});
		}
	}


	render() {
		
		const cardList = [];
		cardList.push({name: "dataSet1", card: <MediaCard />});
		cardList.push({name: "dataSet2", card: <MediaCard />});
		cardList.push({name: "CreateNewDataSet", card: <NewMediaCard />})
		
		const dataCards = (
			<ul style={{listStyleType: "none"}}>
				{cardList.map(item => 
				// <li key={item.name} onClick={()=>{this.setState({currentView: item.name})}}>
				// <li key={item.name} onClick={()=>{this.props.updateParentState({currentView: item.name})}}>
					<li key={item.name} onClick={()=>{this._updateParentState(item)}}>
					{item.card}
				</li>	)}
			</ul>
		)
		
		// if(this.state.currentView === "home") {
		// 	return (
		// 		<div>
		// 		{dataCards}
		// 		</div>
		// 		);
		// } else if(this.state.currentView === "newDataSet") {
		// 	return (
		// 		<CreateDataSet _changeCurrentView={this.state.changeCurrentView} />
		// 	);
		// }
		console.log("Render statement accessed")
		return (
			<div>
				{dataCards}
			</div>
		);
	}
	
}

export default DataSets;