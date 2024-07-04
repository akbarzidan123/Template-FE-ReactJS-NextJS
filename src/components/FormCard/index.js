import { Card } from 'antd';
import PropTypes from 'prop-types';

// Style
import classes from './style.module.less';

const FormCard = (props) => {
	return <Card {...props} className={classes.card} />;
};

FormCard.defaultProps = {
	title: 'Application Development Standard',
};

FormCard.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default FormCard;
