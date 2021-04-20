import React from 'react';
import CreateDataSet from './CreateDataSet';
import MediaCard from './MediaCard';
import NewMediaCard from './NewMediaCard';


export class DataSets extends React.Component {

	constructor(props) {
    super(props);
		this.state = {
			currentView: "home",
		}
		this.changeCurrentView = this.changeCurrentView.bind(this);
  }

	changeCurrentView(view) {
		this.setState({currentView: view});
	}


	render() {
		
		const cardList = [];
		cardList.push({name: "dataSet1", card: <MediaCard />});
		cardList.push({name: "dataSet2", card: <MediaCard />});
		cardList.push({name: "newDataSet", card: <NewMediaCard />})
		
		const dataCards = (
			<ul style={{listStyleType: "none"}}>
				{cardList.map(item => 
				<li key={item.name} onClick={()=>{this.setState({currentView: item.name})}}>
					{item.card}
				</li>	)}
			</ul>
		)
		
		if(this.state.currentView === "home") {
			return (
				<div>
				{dataCards}
				</div>
				);
		} else if(this.state.currentView === "newDataSet") {
			return (
				<CreateDataSet _changeCurrentView={this.state.changeCurrentView} />
			);
		}
		
		// return(
		// 	<NewMediaCard />
		// )
	}
	
}

export default DataSets;