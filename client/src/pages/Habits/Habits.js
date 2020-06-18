import React from 'react'
import { Grid, Header, Button, Form, Segment } from 'semantic-ui-react'


const Habits = () => (
    <Grid columns='three' textAlign='left' style={{ height: '100vh' }} verticalAlign='top'>
        <Grid.Row>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
                <Form>
                    <Segment stacked>
                        <Header as='h3'> Enter a New Habit! </Header>
                        <Form.Input fluid label="Habit" type="text" />
                        <Form.Input fluid label="Frequency" type="text" />
                        <Form.Input fluid label="Reward" type="text" />
                        <Button color='olive' fluid size='large'> Add </Button>
                    </Segment>
                </Form>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
        </Grid.Row>
        

    </Grid>

)

export default Habits;
