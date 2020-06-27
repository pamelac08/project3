import React, {Component} from "react";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class Signup extends Component {

  state = {

  }
 render() {
 return(
  <div>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
    <Grid.Column style={{ maxWidth: 500}}>
      <Header as='h2' color='teal' textAlign='center'>
         Sign Up 
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Name'
            type='name'
          />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button onClick={()=>console.log ("hello")} color='teal' fluid size='large'>
            Create Account
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  </div>
 )
 }
}

export default Signup;