import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class nav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                >
                    <Button secondary>Home</Button>

                </Menu.Item>

                <Menu.Item
                    name='Start Workout'
                    active={activeItem === 'Start Workout'}
                    onClick={this.handleItemClick}
                >
                    <Button secondary>Start Workout</Button>

                </Menu.Item>

                <Menu.Item
                    name='Rewards Tracker'
                    active={activeItem === 'Rewards Tracker'}
                    onClick={this.handleItemClick}
                >
                    <Button secondary>Rewards Tracker</Button>
        </Menu.Item>

                <Menu.Item
                    name='Random Goal OTD'
                    active={activeItem === 'Random Goal OTD'}
                    onClick={this.handleItemClick}
                >
                    <Button secondary>Random Goal OTD</Button>
        </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Login'
                        active={activeItem === 'Login'}
                        onClick={this.handleItemClick}
                    >
                        <Button secondary>Login</Button>

                    </Menu.Item>

                    <Menu.Item
                        name='Sign Up'
                        active={activeItem === 'Sign Up'}
                        onClick={this.handleItemClick}
                    >
                        <Button secondary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}