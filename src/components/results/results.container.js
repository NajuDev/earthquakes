import { connect } from 'react-redux';

import { Results } from './results.component';

import { loadResultsAction } from './../../store/actions/results.actions';

const getFilteredResults = (results, mag, magType) => {
    let newResults = results && [...results];
    if (newResults && mag) {
        newResults = newResults.filter(
            (result) => result.properties.mag === mag
        )
    }
    if (newResults && magType) {
        newResults = newResults.filter(
            (result) => result.properties.magType.toLowerCase().startsWith(magType.toLowerCase().trim())
        )
    }

    return newResults;
};

const mapStateToProps = (state) => {
    const {
        results,
    } = state;
    const {
        mag,
        magType
    } = state.filters;

    return {
        results: getFilteredResults(results, mag, magType)
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        loadResults: (results) => dispatch(loadResultsAction(results))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);
