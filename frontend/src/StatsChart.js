import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class StatsChart extends Component {

    mapSelectedZones = () => {
        { for (let i=0; i < this.props.selectedZones.length; i++) {
           return <p>{this.props.selectedZones[i]}</p>
        } }
    }
    
    render() {
        console.log(this.props.selectedZones)
        return(
            // <div>
            //     <Chart 
            //         chartType="Histogram"
            //         width={'500px'}
            //         height={'350px'}
            //         loader={<div>Loading Chart</div>}
            //         data={[
            //             ["User Status", "Value"],
            //             ["OK", "green"],
            //             ["Distress", "yellow"],
            //             ["Danger", "red"]
            //         ]}
            //     />
            // </div>
            <div id="stats-chart">
                <br /><h3>Selected Zone Percentages</h3>
                <div>
                    {this.mapSelectedZones()}
                </div>
                <table>
                    {/* <tr>
                        <td>Selected Zone Percentages</td>
                    </tr> */}
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