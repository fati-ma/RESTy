import React from 'react';
import '../styles/form.scss';
import { If, Then, Else } from './If';
import superagent from 'superagent'

class Form extends React.Component {

    constructor(props) {
        super(props);
        // add state.words here and initialize it
        this.state = {
            url: '',
            method: '',
            body:'',
            whilefetchData: false
        }
    }

    handleChange = async (e) => {
        e.preventDefault();
        console.log(e.target.value);

        let url = e.target.url.value;
        let method = e.target.method.value;
        let body = e.target.body.value

        this.setState({ url, method });

        switch (method) {
            case 'GET':
                await superagent
                    .get(url)
                    .then((data) => {
                        let info = { url, method, body };
                        console.log('info:', info);
                        let history;
                        let check;
                        this.setState({ whilefetchData: false });

                        if (localStorage.getItem('history')) {
                            history = JSON.parse(localStorage.getItem('history'));
                            history.forEach((element) => {
                                element.url === info.url && element.method === info.method ? (check = true) : (check = false);
                            });
                            if (check) {
                                this.props.handler(data);
                            } else {
                                history.push(info);
                                localStorage.setItem('history', JSON.stringify(history));
                                this.props.handler(data);
                            }
                        } else {
                            history = [];
                            localStorage.setItem('history', JSON.stringify(history));
                        }
                        console.log('history', history);
                    })
                    .catch((err) => {
                        this.setState({ whilefetchData: false });
                        console.log(err.message);
                        this.props.errorHandler(err.message);
                    });

                break;
            case 'POST':
                superagent.post(url).then((data) => {
                    this.props.handler(data);
                });
                break;
            case 'DELETE':
                superagent.delete(url).then((data) => {
                    this.props.handler(data);
                });
                break;
            case 'PUT':
                superagent.put(url).then((data) => {
                    this.props.handler(data);
                });
                break;

            default:
                break;
        }
    };





    render() {
        return (
            <main>
                <div>
                    <form className='myForm' onSubmit={this.handleChange}>
                        <div className='fix'>
                            <label htmlFor="url">URL</label>
                            <input id="url" type="url" name="url" />
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
                <If condition={this.state.whilefetchData === true}>
                    <Then>
                        <div className='fix'>
                            <img src='https://i.gifer.com/YCZH.gif' alt='loading' width='200px'></img>
                        </div>
                    </Then>
                </If>
            </main>
        )
    }
}

export default Form;