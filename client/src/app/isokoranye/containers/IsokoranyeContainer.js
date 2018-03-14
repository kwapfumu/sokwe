import { connect } from 'react-redux';
import aSokozoSelector from '../selectors/aSokozoSelector';
import IsokoranyeLayout from '../components/IsokoranyeLayout/IsokoranyeLayout';
// Polyfills
import 'babel-polyfill';

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.currentUser,
		ibisokozo: state.ibisokozo,
		aSokozo: aSokozoSelector(state),
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

const IsokoranyeContainer = connect(mapStateToProps, mapDispatchToProps)(IsokoranyeLayout);
export default IsokoranyeContainer;
