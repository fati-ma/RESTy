import React from 'react';
import '../styles/form.scss';
import { If, Then } from './If';
import superagent from 'superagent'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: '',
            body: ''
        }
    }

    handleChange = async (e) => {
        e.preventDefault();
        let url = e.target.url.value;
        let method = e.target.method.value;
        let body = e.target.body.value;

        if (!body) {
            this.setState({ url, method });
        } else {
            this.setState({ url, method, body });
        }
    }

    componentDidUpdate = async (prevProps, prevState, snapshot) => {
        try {
            if (this.state.method !== prevState.method && this.state.url !== prevState.url) {
                if (this.state.method === 'get' || this.state.method === 'delete') {
                    let data = await superagent(this.state.method, this.state.url)
                    this.props.handler(data, this.state);

                }
                else if (this.state.method === 'put' || this.state.method === 'post') {

                    let body = JSON.parse(this.state.body)
                    let record = await superagent(this.state.method, this.state.url).send(body)
                    this.props.handler(record, this.state);

                }
                let check;
                if (localStorage.getItem('queries')) {
                    let queries = JSON.parse(localStorage.getItem('queries'));
                    console.log(queries)
                    queries.forEach(obj => {
                        if (obj.method === this.state.method && obj.url === this.state.url) {
                            check = true;
                        } else { check = false }
                    });
                    if (!check) {
                        let queryArray = JSON.parse(localStorage.getItem('queries'));;
                        queryArray.push(this.state);
                        localStorage.setItem('queries', JSON.stringify(queryArray))
                    }
                } else {
                    let queryArray = [];
                    queryArray.push(this.state);
                    localStorage.setItem('queries', JSON.stringify(queryArray))
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <main>
                <div>
                    <form className='myForm' onSubmit={this.handleChange}>
                        <div className='fix'>
                            <label htmlFor="url">URL</label>
                            <input id="url" type="url" name="url" value={this.state.url.value} />
                            <button id="btn" type="submit">
                                GO
                            </button>
                        </div>
                        <div className='fix'>
                            <input type="radio" value="Get " name="method" defaultChecked />
                            <label htmlFor="method">Get</label>
                            <input type="radio" value="Post " name="method" />
                            <label htmlFor="method">Post</label>
                            <input type="radio" value="Delete " name="method" />
                            <label htmlFor="method">Delete</label>
                            <input type="radio" value="Put " name="method" />
                            <label htmlFor="method">Put</label>
                            <textarea id='body' name='body'></textarea>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default Form;