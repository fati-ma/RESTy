import React from 'react';
import '../styles/history.scss';
import List from './List'

class History extends React.Component{
  constructor(props){
      super(props);
      this.state ={
       method:'',
       url:'',
       body:{}
     }
  }

  render(){
    let queries = localStorage.getItem('queries') ? JSON.parse(localStorage.getItem('queries')) : [];
    let items = queries.map((obj,indx) => {
      return <li key={indx}>{JSON.stringify(obj)}</li>
    });
    console.log('items=====>',items)
    return (
        <ul>
         <List>{items}</List>
        </ul>
    )
    
}
}

export default History;

