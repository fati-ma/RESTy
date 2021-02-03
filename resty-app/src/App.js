import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//import { BrowserRouter, MemoryRouter, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results.js';
import Help from './components/Help';
import History from './components/History';
import { If, Then, Else } from './components/If';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/form.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: [],
      data: {},
      condition: false,
      url: '',
      method: '',
      body: {}

    }
  }

  handleForm = (data) => {
    console.log("data ---> before setState", data)
    let count = data.body.count;
    let results = data.body;
    let headers = data.headers
    this.setState({
      count: count,
      results: results,
      headers: headers
    });
    console.log("headers ---> after setState", data.headers)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.data !== prevState.data) {
      this.setState({ condition: true });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Form handler={this.handleForm} />
              <If condition={this.state.condition}>
                <Then>
                  <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
                </Then>
                <Else>
                  {/* <p>In else</p> */}
                  <div>
                    <img src='https://i.gifer.com/YCZH.gif' alt='loading' width='200px' id='loading'></img>
                  </div>
                </Else>
              </If>
            </Route>
            <Route exact path="/History">
              <section>
                <History />
              </section>
            </Route>
            <Route exact path="/Help">
              <Help />
            </Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}


export default App;