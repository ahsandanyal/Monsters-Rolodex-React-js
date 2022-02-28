import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { Card } from './components/card/card.component';
import {SearchBox} from './components/search-box/search-box.component';

 class App extends Component{
   constructor(){
     super();

     this.state = {
       monsters:[
        //  {
        //    id: 'asc1',
        //    name:'Frankestein'
        //  },
        //  {
        //   id: 'asr2',
        //   name:'Dracula'
        // },
        // {
        //   id: 'as1w',
        //   name:'Zombie'
        // },
        // {
        //   id: 'asq4',
        //   name:'Frankestein'
        // } 
       ],
       searchField: ''
     };
   }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
     .then(users => this.setState({monsters: users}));
      // then(users => console.log(users));
     
     
   }
   render(){
     const { monsters, searchField } = this.state;
     const filtersMonsters = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase()));

     return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
       
        <SearchBox
        placeholder='search Monsters'
        handleChange={e =>{ 
          this.setState({searchField: e.target.value}
       ,()=> console.log(this.state));
       // console.log(this.state);
       }}
        
        
        />
       <CardList monsters={filtersMonsters}/>
       
      
    </div>
     );
   }
 }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
