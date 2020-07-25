import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementValue, decrementValue } from '../../actions/sampleExampleActions';

import './SampleExample.scss';

function SampleExample(props) {
    // const [ count, setCount] = useState(0);
    // onClick={changeValue({ type: "INCREMENT", payload: count + 1 }
    let { actions, count } = props;

    return(
        <div className="sample_example_container">
            <h3>Increment/Decrement</h3>
            <div className="buttons_container">
                <button className="generic_button" name="Inc" onClick={ () => actions.incrementValue(count+1)}>Increment</button>
                <button className="generic_button" name="Dec" onClick={ () => actions.incrementValue(count-1)}>Decrement</button>
            </div>
            <input type="text" value={count || 0} onChange={ (e) => console.log(e)}/>
        </div>
    )
}

const mapStateToProps = state => {
    let { count } = state.containers.exampleReducer;
    return { count };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        incrementValue,
        decrementValue
    }, dispatch),
  });

// const mapDispatchToProps = dispatch => {
//     return {
//         changeValue: () => dispatch(changeValue())
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(SampleExample);
