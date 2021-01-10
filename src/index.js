import React from 'react';
import ReactDOM from 'react-dom';


// class Clock extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       date: new Date(),
//     };
//   }

//   componentDidMount(){
//     this.timerID=setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillMount(){
//     clearInterval(this.timerID);
//   }

//   tick(){
//     this.setState({
//       date: new Date()
//     });
//   }
// render(){
//   return (
//     <div>
//       <h1>Hello , world</h1>
//       <h1>It is {this.state.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }
// }
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById("toggle")
// );

// class Toggle extends React.Component{
//   constructor (props){
//       super(props);
//       this.state={
//           isToggleOn: true,
//       };
//       this.handleClick=this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.setState(state=>({
//       isToggleOn:!state.isToggleOn
//     }));
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//       {this.state.isToggleOn?'On':'Off'}
//       </button>
//     );
//   }
// }

class App extends React.Component{

  state={
    todos:[]
  }

  componentDidMount(){
    fetch('http://localhost:8081/spring5-mvc-hibernate-example/')
    .then(res=> res.json())
    .then((data)=>{this.setState({todos:data.data})
    console.log(this.state.todos);
  })
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className = "col-sm-12">
            <h1>My employees</h1>
            <div className="col-sm-12">
            {this.state.todos.map((todo) => (
              <div className="card" key={todo.id}>
                <div className="card-body">
                  <h5 className="card-title">{todo.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                        {todo.age}      
                  </h6>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}




ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
