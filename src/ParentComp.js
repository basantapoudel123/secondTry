import React, { PureComponent} from 'react';
import MemoComp from './MemoComp';
// import PureComp from './PureComp';
// import RegularComp from './RegularComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'John'
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                name: "John"
            })
        },2000)
    }
    
    render() {
        console.log('*****Parent Component render*******')
        return (
            <div>
                PARENT COMPONENT
                <MemoComp name={this.state.name}/>
                {/* <RegularComp  name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
