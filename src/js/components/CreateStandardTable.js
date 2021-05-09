import React from 'react';
import Container from '@material-ui/core/Container';
import { v4 as uuidv4 } from 'uuid';
import { TextField } from '@material-ui/core';

export class CreateStandardTable extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			inputFields: []
		}
		this.handleAddField = this.handleAddField.bind(this);
  }

	handleAddField() {
		this.setState({ inputFields: [...this.state.inputFields, {id: uuidv4(), fieldName: " "}]});
	}

	render() {
		<Container>
			<h1>Create Data Set</h1>
			<form>
				{this.state.inputFields.map(inputField => (
					<div key={inputField.id}>
						{/* <TextField>
							
						</TextField> */}
					</div>
				))}
			</form>

			<button
				type="button"
				style={{width: "400px", height: "40px"}}
				onClick={() => this.handleAddField()}>
				Add Field
			</button>
		</Container>
	}
}

export default CreateStandardTable;