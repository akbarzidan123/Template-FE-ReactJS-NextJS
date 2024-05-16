import PropTypes from 'prop-types';

// Style
import classes from './style.module.less';

const Title = ({ text, icon }) => {
	return (
		<div className={classes.container}>
			{icon}
			<span className={classes.title}>{text}</span>
		</div>
	);
};

Title.defaultProps = {
	text: '',
	icon: null,
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.node,
};

export default Title;
