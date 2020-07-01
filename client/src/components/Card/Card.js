import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = [
  '** ** **.',
  '** ** **',
].join(' ')

const habitCard = () => (
  <Card>
    <Card.Content header='Habit' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />4 Friends
    </Card.Content>
  </Card>
)

export default habitCard;