import React from 'react';
// import PropTypes from 'prop-types';

import classes from './style.module.less';

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className={classes.footer}>
			<div>
				<strong className="text-primary">Mandiri Utama Finance</strong>
				<span> 2022 © All Rights Reserved.</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
	// classes: {},
};

export default Footer;
