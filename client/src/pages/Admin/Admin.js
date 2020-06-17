import React, {Component} from "react";
import { Button, Form, Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import "./style.css"

class Admin extends Component {
    state = {

    }



    render() {
        return(

            <div>
                <div id="insert-div">
                    <form id="insert-form">
                        <Grid textAlign='left' style={{ height: '100vh' }} verticalAlign='middle'>
                            <Grid.Column>
                                <Header as='h2' color='blue' textAlign='center'>
                                    Add a Movement to Database
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                    <Form.Input fluid label="Name of Movement" type="text" />
                                    <Form.Input fluid label="Equipment Required" placeholder="Barbell/Dumbbell/KettleBell" type="text" />
                                    <Form.Input fluid label="Area of Focus" placeholder="Upper/Lower/Full" type="text" />
                                    <Form.Input fluid label="Scaled Option (if applicable)" type="text" />

                                    <Button color='blue' fluid size='large'>
                                        Login
                                    </Button>
                                    </Segment>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </form>
                </div>

                <div id="update-div">
                    <form id="update-form">
                        <Grid textAlign='left' style={{ height: '100vh' }} verticalAlign='middle'>
                            <Grid.Column>
                                <Header as='h2' color='blue' textAlign='center'>
                                    Update/Delete Movements from Database
                                </Header>
                                <Form size='large'>
                                    <Segment stacked>
                                    <Form.Field label="Movement to Update" control={Dropdown} />
                                    <Form.Input fluid label="Equipment Required" placeholder="Barbell/Dumbbell/KettleBell" type="text" />
                                    <Form.Input fluid label="Area of Focus" placeholder="Upper/Lower/Full" type="text" />
                                    <Form.Input fluid label="Scaled Option (if applicable)" type="text" />

                                    <Button color='blue' fluid size='large'>
                                        Login
                                    </Button>
                                    </Segment>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </form>

                </div>

            </div>
        )
    }
}

export default Admin;