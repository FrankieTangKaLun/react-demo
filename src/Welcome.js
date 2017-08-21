import React from 'react'

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        setInterval(function(){
            this.setState({
                date: new Date()
            })
        }.bind(this))         
    }  
    render() {
        return (
            <div>
                <h1>I am {this.props.name}</h1>
                <h2>{this.state.date.toString()}.</h2>                
            </div>
        )
    }
}

export default Welcome