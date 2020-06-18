import React from 'react'
import { Header, Button, Icon,  Grid, } from 'semantic-ui-react'
import { Link } from "react-router-dom";


const Rewards = () => (

  <Grid columns='three' textAlign='left' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <div >
          <Header as='h2' icon textAlign='center'>
            <Icon name='heartbeat' size='massive' circular />
            <Header.Content>Enter a new habit to start earning rewards!</Header.Content>
          </Header>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <Button as={Link} to="/habits" color='green' size='massive'>Get Started</Button>
      </div>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Rewards;