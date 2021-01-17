import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        //to update our function we called setState
        window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errorMessage: err.message })       
     );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>         
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner message="Please Accept Location Request" />;
    }
    
    //react always requires we have to define render or will throw an error!!
    // try to never have multiple return statments inside the render method
    //put inside a helper method and then call it  bonus can have styled wrapper
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        
             
      }
    }

ReactDOM.render(<App />, document.querySelector('#root'));
