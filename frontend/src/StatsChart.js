import React, { Component } from 'react';

class StatsChart extends Component {

    mapSelectedZones = () => {
        
    }
    
    render() {
        return(
            <div>
                <h3>Information on </h3>
                <table>
                    <tr>
                        <td>Area Percentages</td>
                    </tr>
                    <tr>
                        <td>{Math.round(this.props.zeroPerc)}% OK</td>
                    </tr>
                    <tr>
                        <td>{Math.round(this.props.onePerc)}% Distress</td>
                    </tr>
                    <tr>
                        <td>{Math.round(this.props.twoPerc)}% Danger</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default StatsChart;