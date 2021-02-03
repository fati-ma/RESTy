import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import React from 'react';
import Results from './components/Results.js';
import { If, Then, Else } from './components/If';
import History from './components/History';
import './styles/footer.scss';
import './styles/header.scss';
import './styles/form.scss';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: []

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
      <>
        <Header />
        <main>
          <Form handler={this.handleForm} />
          <section>
            <History />
          </section>
          <If condition={this.state.condition}>
            <Then>
              <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
            </Then>
            <Else>
              <p>In else</p>
              <div>
                <img src='https://i.gifer.com/YCZH.gif' alt='loading' width='200px'></img>
              </div>
            </Else>
          </If>
        </main>
        <Footer />
      </>
    )
  }
}

export default App;