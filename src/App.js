import React, { Component } from 'react';

import { Cards, Chart, Country } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import corona from './images/image.png'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });

        console.log('initial data set :', this.state.data)
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ data, country: country })

    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={corona} alt="covid -19" />
                <Cards data={data} />
                <Country handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;