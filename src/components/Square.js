import React from "react"

class Square extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <button className="button" 
                onMouseDown={this.props.onMouseDown} 
                onMouseUp={this.props.onMouseUp}
                onClick={this.props.onClick}
                disabled={this.props.buttonDisabled} 
                name={this.props.name} 
                style={{backgroundColor: this.props.color}}></button>
            </div>
        )
    }
}

export default Square