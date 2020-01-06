import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class TicketForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: "",
      issue: "",
    }

    // Setting up functions
    this.onChangeTicketProject = this.onChangeTicketProject.bind(this);
    this.onChangeTicketIssue = this.onChangeTicketIssue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

onChangeTicketProject(e) {
 this.setState({project: e.target.value})
};

onChangeTicketIssue(e) {
 this.setState({issue: e.target.value})
};

onSubmit(e) {
 e.preventDefault();
 e.target.reset();

 console.log(`Ticket successfully created!`);
 console.log(`Project: ${this.state.project}`);
 console.log(`Issue: ${this.state.project}`);

 this.setState({
   project: '', issue: ''
  });
};

render() {
 return (
   <div className="form-wrapper" style={{width: "50%", marginLeft: "25%"}}>
     <Form onSubmit={this.onSubmit}>

       <Form.Group controlId="Project">
         <Form.Label>Project Name</Form.Label>
         <Form.Control type="text" value={this.state.project} onChange={this.onChangeTicketProject}/>
       </Form.Group>

       <Form.Group controlId="Issue">
         <Form.Label>Known Issue</Form.Label>
         <Form.Control type="text" value={this.state.issue} onChange={this.onChangeTicketIssue}/>
       </Form.Group>

       <Button variant="primary" size="sm" block="block" type="submit">
         Create Ticket
       </Button>

       <Button onSubmit={this.onSubmit} id="clear-values" variant="primary" size="sm" block="block" type="reset">
         Clear Values
       </Button>
     </Form>
   </div>
  );
 }
}