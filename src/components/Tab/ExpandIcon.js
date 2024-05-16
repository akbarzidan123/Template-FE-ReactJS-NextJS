import Image from 'next/image';
import PropTypes from 'prop-types';

// Icons
import PlusIcon from 'public/svg/plus.svg';
import MinusIcon from 'public/svg/minus.svg';
import PlusPlainIcon from 'public/svg/plus-plain.svg';
import MinusPlainIcon from 'public/svg/minus-plain.svg';

const ExpandIcon = ({ isActive, plain }) => {
	const Plus = plain ? PlusPlainIcon : PlusIcon;
	const Minus = plain ? MinusPlainIcon : MinusIcon;
	return <Image src={isActive ? Minus : Plus} alt="" />;
};

ExpandIcon.defaultProps = {
	isActive: false,
	plain: false,
};

ExpandIcon.propTypes = {
	isActive: PropTypes.bool,
	plain: PropTypes.bool,
};

export default ExpandIcon;
