import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Bishwo"
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState =() => {
        this.setState({
            name: 'Anynomous Coder'
        })
    }
    
    render() {
        console.log('LifecylceA render')
        return (
            <div>
                <div>LIFECYCLE A</div>
                <button onClick={this.changeState}>Change Status</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
