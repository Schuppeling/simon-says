import React from 'react';
import Square from './Square'

class App extends React.Component{
  constructor(){
    super()

    this.maxSquares = 3
    this.currSquares = 0
    this.timerId = 0
    this.replayTimerId = 0
    this.order = []
    this.replayCount = 0
    this.state = {
      red: "#ffe6e6",
      green: "#e6ffe6",
      blue: "#e6e6ff",
      yellow: "#ffffe6",
      purple: "#ffe6ff",
      teal: "#e6ffff",
      prevColor: "",
      name: "",
      clicks: 0,
      originalColor: true,
      buttonDisabled: "disabled",
      score: 0
    }

    this.replaySquares = this.replaySquares.bind(this)
    this.handleStartClick = this.handleStartClick.bind(this)
    this.changeSquare = this.changeSquare.bind(this)
    this.handleSquareClick = this.handleSquareClick.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.mouseEvent = this.mouseEvent.bind(this)
    
  }

  handleStartClick(){
    this.timerId = setInterval(this.changeSquare, 500)
  }

  changeSquare(){
    if(!this.state.originalColor){
      this.setState({
        [this.state.name]: this.state.prevColor,
        name: "",
        prevColor: "",
        originalColor: true
      })

      if(this.currSquares === this.maxSquares){
        clearInterval(this.timerId)
        this.timerId = 0
        this.setState({
          buttonDisabled: ""
        })
      }
    }
    else{
      const randomNumber = Math.floor((Math.random() * 6) + 1)
      this.currSquares++

      switch(randomNumber){
        case 1:
          this.setState({
            prevColor: this.state.red,
            name: "red",
            red: "red",
            originalColor: false
          })
          this.order.push(this.state.name)
          break
        case 2:
          this.setState({
            prevColor: this.state.green,
            name: "green",
            green: "green",
            originalColor: false
          })
          this.order.push(this.state.name)
          break
        case 3:
          this.setState({
            prevColor: this.state.blue,
            name: "blue",
            blue: "blue",
            originalColor: false
          })
          this.order.push(this.state.name)
          break
        case 4:
          this.setState({
            prevColor: this.state.yellow,
            name: "yellow",
            yellow: "yellow",
            originalColor: false
          })
          this.order.push(this.state.name)
          break
        case 5:
          this.setState({
            prevColor: this.state.purple,
            name: "purple",
            purple: "purple",
            originalColor: false
          })         
          this.order.push(this.state.name)
          break
        case 6:
          this.setState({
            prevColor: this.state.teal,
            name: "teal",
            teal: "teal",
            originalColor: false
          })
          this.order.push(this.state.name)
          break
        default:
          console.log("Curr Squares: " + this.currSquares)
      }
    }
  }

  handleSquareClick(event){
    const {name} = event.target
    if(name === this.order[this.state.clicks]){
      this.setState(state => {
        return {clicks: state.clicks + 1}
      })
    }
    else{
      alert(`Final Score: ${this.state.score}\n Game Reset`)
      this.resetGame()
    }

    if(this.state.clicks === this.order.length - 1){
      this.maxSquares++
      this.setState({
        clicks: 0,
        score: this.state.score + 1,
        buttonDisabled: "disabled"
      })
      this.replayTimerId = setInterval(this.replaySquares, 500)
    }
  }

  replaySquares(){
    if(!this.state.originalColor){
      this.setState({
        [this.state.name]: this.state.prevColor,
        name: "",
        prevColor: "",
        originalColor: true
      })

      if(this.replayCount === this.order.length){
        clearInterval(this.replayTimerId)
        this.replayCount = 0
        this.replayTimerId = 0
        this.timerId = setInterval(this.changeSquare, 500)
      }
    }
    else{
      if(this.order[this.replayCount] === "red"){
        this.setState({
          prevColor: this.state.red,
          name: this.order[this.replayCount],
          red: this.order[this.replayCount],
          originalColor: false
        })
      }
      if(this.order[this.replayCount] === "green"){
        this.setState({
          prevColor: this.state.green,
          name: this.order[this.replayCount],
          green: this.order[this.replayCount],
          originalColor: false
        })
      }
      if(this.order[this.replayCount] === "blue"){
        this.setState({
          prevColor: this.state.blue,
          name: this.order[this.replayCount],
          blue: this.order[this.replayCount],
          originalColor: false
        })
      }
      if(this.order[this.replayCount] === "yellow"){
        this.setState({
          prevColor: this.state.yellow,
          name: this.order[this.replayCount],
          yellow: this.order[this.replayCount],
          originalColor: false
        })
      }
      if(this.order[this.replayCount] === "purple"){
        this.setState({
          prevColor: this.state.purple,
          name: this.order[this.replayCount],
          purple: this.order[this.replayCount],
          originalColor: false
        })
      }
      if(this.order[this.replayCount] === "teal"){
        this.setState({
          prevColor: this.state.teal,
          name: this.order[this.replayCount],
          teal: this.order[this.replayCount],
          originalColor: false
        })
      }
      this.replayCount++
    }
  }

  resetGame(){
    clearInterval(this.timerId)
    clearInterval(this.replayTimerId)
    this.maxSquares = 3
    this.currSquares = 0
    this.timerId = 0
    this.replayCount = 0
    this.replayTimerId = 0
    this.order = []
    this.selection = 0

    this.setState({
      red: "#ffe6e6",
      green: "#e6ffe6",
      blue: "#e6e6ff",
      yellow: "#ffffe6",
      purple: "#ffe6ff",
      teal: "#e6ffff",
      prevColor: "",
      name: "",
      clicks: 0,
      originalColor: true,
      buttonDisabled: "disabled",
      score: 0
    })
  }

  mouseEvent(event){
    const {name} = event.target
    let color = ""

    if(event.type === "mousedown"){
      if(name === "red"){
        color = "red" 
      }
      else if(name === "green"){
        color = "green"
      }
      else if(name === "blue"){
        color = "blue"
      }
      else if(name === "yellow"){
        color = "yellow"
      }
      else if(name === "purple"){
        color = "purple"
      }
      else if(name === "teal"){
        color = "teal"
      }
    }
    else{
      if(name === "red"){
        color = "#ffe6e6" 
      }
      else if(name === "green"){
        color = "#e6ffe6"
      }
      else if(name === "blue"){
        color = "#e6e6ff"
      }
      else if(name === "yellow"){
        color = "#ffffe6"
      }
      else if(name === "purple"){
        color = "#ffe6ff"
      }
      else if(name === "teal"){
        color = "#e6ffff"
      }
    }
    
    this.setState({
      [name]: color
    })
  }

  render(){
    return (
      <div>
        <div className="row">
          <Square buttonDisabled={this.state.buttonDisabled} name="red" color={this.state.red} onClick={this.handleSquareClick} onMouseDown={this.mouseEvent} onMouseUp={this.mouseEvent}/> 
          <Square buttonDisabled={this.state.buttonDisabled} name="green" color={this.state.green} onClick={this.handleSquareClick} onMouseDown={this.mouseEvent} onMouseUp={this.mouseEvent}/>
        </div><br/>
        <div className="row">
          <Square buttonDisabled={this.state.buttonDisabled} name="blue" color={this.state.blue} onClick={this.handleSquareClick} onMouseDown={this.mouseEvent} onMouseUp={this.mouseEvent}/> 
          <Square buttonDisabled={this.state.buttonDisabled} name="yellow" color={this.state.yellow} onClick={this.handleSquareClick} onMouseDown={this.mouseEvent} onMouseUp={this.mouseEvent}/>
        </div><br/>
        <div className="row">
          <Square buttonDisabled={this.state.buttonDisabled} name="purple" color={this.state.purple} onClick={this.handleSquareClick} onMouseDown={this.mouseEvent} onMouseUp={this.mouseEvent}/> 
          <Square buttonDisabled={this.state.buttonDisabled} name="teal" color={this.state.teal} onClick={this.handleSquareClick} onMouseDown={this.mouseEvent} onMouseUp={this.mouseEvent}/>
        </div><br/>
        <div className="row">
          <button className="actionButtons" onClick={this.handleStartClick}>Start</button>
          <button className="actionButtons" onClick={this.resetGame}>Reset</button><br/>
        </div>
        <div className="row">
          <p>Score: {this.state.score}</p> 
        </div>
      </div>
    )
  }
}

export default App;
