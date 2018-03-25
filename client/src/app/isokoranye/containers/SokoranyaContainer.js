import { connect } from 'react-redux';
import aSokozoSelector from '../../selectors/aSokozoSelector';
import Sokoranya from '../components/Sokoranya/Sokoranya';

const mapStateToProps = (state, ownProps) => {
	return {
		aSokozo: aSokozoSelector(state),
	};
};

const SokoranyaContainer = connect(mapStateToProps)(Sokoranya);

export default SokoranyaContainer;
