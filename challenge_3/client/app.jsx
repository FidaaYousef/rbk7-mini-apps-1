class App extends React.Component {
    constructor(props) {
      super(props);
     //add this.state here
    }
 
       
render() {
    return(
   
        <div id='first'>
           <form action="/certification" method="POST">
                <h1>Form1</h1>
                    <textarea name="name" id="" cols="20" rows="2"></textarea>
                    <textarea name="email" id="" cols="20" rows="2"></textarea>
                    <textarea name="password" id="" cols="20" rows="2"></textarea>
                    <button type="submit">click me</button>
                          
            </form> 

        </div>
        
        )
    }
}


        
ReactDOM.render(<App/>,document.getElementById('app'))