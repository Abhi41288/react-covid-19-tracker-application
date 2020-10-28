import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Country.module.css';
import { fetchCountries } from '../../api';


const Country = (props) => {

    const [fetchedCountries, setCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        }
        console.log(fetchCountries);
        fetchApi();
    }, [setCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => props.handleCountryChange(event.target.value)}>
                <option value="">global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;