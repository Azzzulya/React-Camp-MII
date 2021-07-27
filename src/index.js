import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


 // <div className="comment">
      //   <div className="UserInfo">
      //     <Image {...author} />
      //     {/* <div className="UserInfo-name"> */}
      //     <div>
      //       {author.author.name}
      //     </div>
      //     {/* <div className="Comment-text">  */}
      //     <div>
      //       {text}
      //     </div>
      //     {/* <div className="Comment-date"> */}
      //     <div>
      //       {date}
      //     </div>
      //   </div>

      //   <h3>Using component dimount for initial data render</h3>
      //   <hr/> 
        // eslint-disable-next-line no-lone-blocks
        {/* <table>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table> */}
      //   {todos && 
      //     todos.map(todo => {
      //       return( 
      //         <table style={{"border":"1px",  'borderStyle':'solid'}}>   
      //           <tr key={todo.id}>
      //             <td>{todo.id}</td>
      //             <td> {todo.title} </td>
      //           </tr>
      //         </table>
      //       );
      //     })
      //   }
      // </div>


        // constructor(){
  //   super()
  //   this.state = {
  //       author: {
  //         avatarUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g",
  //         name: "Tester"
  //       },
  //       text : " Learn react js",
  //       date : "19 Juli 2021"
  //   }
  //   this.getTodos = this.getTodos.bind(this)
  // }

  
  // componentDidMount(){
  //   this.getTodos();
  // }

  // componentWillUnmount(){

  // }

  // tick(){
  //   this.setState({date : new Date()})
  // }

  // async getTodos(){
  //   let data = await Axios
  //                 .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //                 .then((response) => {
  //                   return response
  //                 })
  //                 .catch((error) => {
  //                   console.log(error)
  //                 })
                  
  //                 this.setState({
  //                   todos: data.data
  //                 })
  // }

  // renderTableData = () =>{
  //   const { todos } = this.state
  //   console.log(todos)
  //   return this.state.todos.map(todo => {
  //     const { id, title } = todo;
  //     return(
  //       <tr key={id}>
  //         <td>{id}</td>
  //         <td> {title} </td>
  //       </tr>
  //     );
  //   })
  // }


  // var {text, date, todos, ...author} = this.state
    // console.log(todos);
