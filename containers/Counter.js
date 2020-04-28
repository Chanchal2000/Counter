import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCounter,decreaseCounter} from './../action/Counter';
class Counter extends React.Component
{
    render()
    {
        return(<div>
            <button onClick={()=>this.props.increaseCounter()}>+</button>
            <button onClick={()=>this.props.decreaseCounter()}>-</button>
            <h1>{this.props.count}</h1>
        </div>);
    }
}
const mapStateToProps=(store)=>
{
    return({count:store.count});
}
const mapDispatchToProps=(dispatch)=>
{
    return bindActionCreators({increaseCounter,decreaseCounter},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
