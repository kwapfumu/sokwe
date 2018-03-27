import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import aSokozoSelector from '../../selectors/aSokozoSelector';
import Sokoranya from '../components/Sokoranya/Sokoranya';

// eslint-disable-next-line
const mapStateToProps = (state, ownProps) => {
  return {
    aSokozo: aSokozoSelector(state),
  };
};

const SokoranyaContainer = withRouter(connect(mapStateToProps)(Sokoranya));

export default SokoranyaContainer;
