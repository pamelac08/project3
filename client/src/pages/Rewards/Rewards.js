import React from "react";
import { Header, Button, Icon, Grid, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./reward.css";
import NavBar from "../../components/Nav/NavBar";

const Rewards = () => (
  <div>
    <NavBar />
    <Container>
      <Grid
        columns="three"
        textAlign="left"
        style={{ height: "100vh" }}
        verticalAlign="top"
      >
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <div>
              <Header as="h2" icon textAlign="center">
                <Icon name="heartbeat" size="massive" color="red" />
                <Header.Content>
                  Enter a new habit to start earning rewards!
                </Header.Content>
              </Header>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button as={Link} to="/habits" color="olive" size="massive">
                Get Started
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default Rewards;
