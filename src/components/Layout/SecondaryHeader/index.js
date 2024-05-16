import PropTypes from 'prop-types';

// Style
import classes from './style.module.less';

const SecondaryHeader = ({ children, hidden }) => {
	return (
		<div
			className={classes.container}
			style={{ display: hidden ? 'none' : 'flex' }}
		>
			{children}
		</div>
	);
};

SecondaryHeader.defaultProps = {
	children: null,
	hidden: true,
};

SecondaryHeader.propTypes = {
	children: PropTypes.node,
	hidden: PropTypes.bool,
};

export default SecondaryHeader;
