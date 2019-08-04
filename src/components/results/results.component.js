import React from 'react';

import { XHR } from '@beyondthesketch/scriptuccinojs';

export class Results extends React.Component {
    componentDidMount() {
        const {
            loadResults,
        } = this.props;

        XHR(
            {
                uri: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02',
                responseType: 'json',
                successFn: (results) => {
                    loadResults(results.features);
                }
            }
        );
    }

    render() {
        const {
            results
        } = this.props;

        return (
            results !== null && results.length
                ? <ul>
                    {
                        results.map(
                            (result, i) => {
                                const {
                                    place,
                                    mag,
                                    magType
                                } = result.properties;

                                return (
                                    <li
                                        key={result.id || i}
                                    >
                                        {result.id}: {place} : {mag}: {magType}
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                : <p>{
                    results === null
                        ? 'Loading'
                        : 'Not found'
                }</p>
        );
    }
}