import React, {Component} from "react";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class Signup extends Component {

  state = {

  }
 render() {
 return(
  <div>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500}}>
      <Header as='h2' color='green' textAlign='center'>
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

          <Button color='green' fluid size='large'>
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