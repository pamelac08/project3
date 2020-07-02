import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

// const description = [
//   '** ** **.',
//   '** ** **',
// ].join(' ')

const HabitCard = (props) => (
  <Card className="habitCard">
    <Card.Content header='Habit'  />
    <Card.Content description={props.description} />
    <Card.Content extra>
      <Icon name='user' />4 Friends
    </Card.Content>
  </Card>
)

export default HabitCard;
