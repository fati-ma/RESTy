import React from 'react';
import '../styles/form.scss';
import superagent from 'superagent'

class Form extends React.Component {

    constructor(props) {
        super(props);
        // add state.words here and initialize it
        this.state = {
            url: '',
            method: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        let url = e.target.url.value;
        let method = e.target.method.value;
        this.setState({ url, method });

        superagent.get(url)
            .then(data => {

                // let count = data.body.count; 
                // let results = data.body.results;

                this.props.handler(data)


            })

        // switch (method) {
        //     case 'GET':
        //         superagent.get(url).then((data) => {
        //             this.props.handler(data);
        //         });
        //         break;
        //     case 'POST':
        //         superagent.post(url).then((data) => {
        //             this.props.handler(data);
        //         });
        //         break;
        //     case 'DELETE':
        //         superagent.delete(url).then((data) => {
        //             this.props.handler(data);
        //         });
        //         break;
        //     case 'PUT':
        //         superagent.put(url).then((data) => {
        //             this.props.handler(data);
        //         });
        //         break;

        //     default:
        //         break;
        // }

    }





    render() {
        return (
            <main>
                <div>
                    <form onSubmit={this.handleChange}>
                        <div>
                            <label for="url">URL</label>
                            <input id="url" type="url" name="url" />
                            <button type="submit"> GO </button>
                        </div>
                        <div>
                            <input type="radio" value="Get " name="method" defaultChecked />
                            <label for="method">Get</label>
                            <input type="radio" value="Post " name="method" />
                            <label for="method">Post</label>
                            <input type="radio" value="Delete " name="method" />
                            <label for="method">Delete</label>
                            <input type="radio" value="Put " name="method" />
                            <label for="method">Put</label>
                        </div>
                    </form>


                </div>
            </main>
        )
    }
}

export default Form;