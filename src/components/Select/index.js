import React, { Component } from 'react'
import './index.css';

export default class Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
            provinces: {
                Tehran: ["Tehran", "Shahriar", "Ghods", "Eslam Shahr"],
                Esfahan: ["Esfahan", "Kashan", "Shahin Shahr"],
                Yazd: ["Hamean", "Malayer"],
                Mazanaran: ["Sari", "Babol", "Amol", "Noor"],
            },
            showProvinceCities: []
        }

        this.selectHandler = this.selectHandler.bind(this)

    }

    selectHandler(event) {
        const selectedProvince = event.target.value;

        if (selectedProvince === "-1") {
            this.setState({
                showProvinceCities: []
            })
        } else {
            const selectedProvinceCities = this.state.provinces[selectedProvince];
            this.setState({
                showProvinceCities: selectedProvinceCities
            })
        }
    }

    render() {
        return (
            <div className="Select-content">
                <select onChange={this.selectHandler}>
                    <option value="-1">استان را انتخاب کنید</option>
                    <option value="Tehran">Tehran</option>
                    <option value="Esfahan">Esfahan</option>
                    <option value="Yazd">Yazd</option>
                    <option value="Mazanaran">Mazanaran</option>
                </select>
                <select>
                    {this.state.showProvinceCities.length ? this.state.showProvinceCities.map(city => (
                        <option value={city}>{city}</option>
                    )) : (
                        <option value="-1">شهر را انتخاب کنید</option>
                    )}
                </select>
            </div>
        )
    }
}
