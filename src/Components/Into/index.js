import React from 'react';
import { connect } from 'react-redux';
import SingleSvg from './../SingleSvg/';
import LeftAside from './../LeftAside/';
import RightAside from './../RightAside/';
import BottomPanel from './../BottomPanel/';
import { getTotal } from './../../actions/';
import './style.css';

class Into extends React.Component {
  constructor(props) {
    super(props);
    this.stateName = this.props.match.params.state
  }
  componentDidMount() {
    this.props.getTotal(this.stateName);
  }

  render() {
    const {state } = this.props;
    return (
        <div className="into">
          <LeftAside />
          <div className="svg-contain">
            <SingleSvg stateName={this.stateName} />
          </div>
          <RightAside state={state} />
          <BottomPanel />
        </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    state: state.total
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTotal : state => {
      dispatch(getTotal(state));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Into);