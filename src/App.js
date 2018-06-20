import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// As import '.scss' doesn't run SASS processor, we have to run `build-css` manually and import the result (index.css, not .scss) into the App.js
// See more here: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
import './styles/index.css'; // eslint-disable-line import/no-unresolved
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Homepage from './components/Homepage';
import Export from './components/Export';
// import logo from './assets/images/dxc_logo_hz_wht_rgb_150.png';

class App extends Component {
    // constructor(props, context) {
    //     super(props, context);
    // }
    componentWillMount() {

    }
    render() {
        return (
            <div className="dip-container-fluid">
                <Header />
                <div>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/export" component={Export} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
