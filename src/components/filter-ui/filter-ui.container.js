import { connect } from 'react-redux';

import { setMagFilterAction, setMagTypeFilterAction } from './../../store/actions/filter.actions';

import { FilterUI } from './filter-ui.component';

const mapStateToProps = (state) => (
    {
        mag: state.filters.mag,
        magType: state.filters.magType
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        handleMagChange: (event) => dispatch(setMagFilterAction(parseFloat(event.target.value))),
        handleMagTypeChange: (event) => dispatch(setMagTypeFilterAction(event.target.value))
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterUI);