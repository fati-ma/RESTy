import React from 'react';
import '../styles/form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            method: ''
        };
    }

    handleChange = (e) => {

        e.preventDefault();

        let url = e.target.url.value;
        let method = e.target.method.value;
        this.setState({ url, method });

        console.log(this.state.method);
    };

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
                            <label for="method">Get</label>
                            <input type="radio" value="Get " name="method" />
                            <label for="method">Post</label>
                            <input type="radio" value="Post " name="method" />
                            <label for="method">Delete</label>
                            <input type="radio" value="Delete " name="method" />
                            <label for="method">Put</label>
                            <input type="radio" value="Put " name="method" />
                        </div>
                    </form>
                    <div class='spans'>
                        <span>{this.state.method}</span>
                        <span>{this.state.url}</span>
                    </div>
                </div>
            </main>
        );
    }
}

export default Form;