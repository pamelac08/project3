import React from "react";
import { Message, Grid, Button } from 'semantic-ui-react'
import Navbar from "../../components/Nav/NavBar";


const Random = () => (

   <div>
       <Navbar/>
        <Grid
        columns="three"
        textAlign="left"
        style={{ height: "100vh" }}
        verticalAlign="center">
        <Grid.Row>
            <Grid.Column> </Grid.Column>
            <Grid.Column>
                <Message info>
                    <Message.Header>Your workout</Message.Header>
                    <p>* *</p>
                </Message>
                <Button color='teal' size='massive'>Random WOTD</Button>
            </Grid.Column>
            <Grid.Column> </Grid.Column>
        </Grid.Row>
    </Grid>


   </div>
)
export default Random;
