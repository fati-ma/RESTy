import React from 'react';
import '../styles/history.scss';
import List from './List'

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      body: {}
    }
  }


  click(e) {
    const obj = { url: e.currentTarget.childNodes[1].firstChild.data, method: e.currentTarget.childNodes[0].firstChild.data };

    const selected = document.getElementById(`url`);
    selected.value = obj.url;
    const radiobtn = document.getElementById(obj.method);
    radiobtn.checked = true;
    const button = document.getElementById('btn');
    button.click();
  }

  render() {
    let queries = localStorage.getItem('queries') ? JSON.parse(localStorage.getItem('queries')) : [];
    let items = queries.map((obj, indx) => {
      return <li key={indx} onClick={this.click}>{JSON.stringify(obj)}</li>
    });
    console.log('items=====>', items)
    return (
      <ul>
        <List>{items}</List>
      </ul>
    )

  }
}

export default History;

