import React from "react";
import { Card, Button } from "semantic-ui-react";
import "./style.css";

const HabitCard = (props) => (
  <Card className="habitCard">
    <Card.Content header={props.name} />
    <Card.Content>
      {props.interval} || Target: {props.frequency}{" "}
    </Card.Content>
    <Card.Content>Reward: {props.reward} </Card.Content>
    <Button
      onClick={props.checkComplete}
      value={props.value}
      name={props.counter}
      data-freq={props.frequency}
    >
      Complete One Interval
    </Button>
    <Button onClick={props.delete} value={props.value}>
      Remove Habit
    </Button>
    <Card.Content extra>Total completed: {props.counter}</Card.Content>
  </Card>
);

export default HabitCard;
