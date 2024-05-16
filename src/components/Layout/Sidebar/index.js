import { Menu } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

// style
import classes from './style.module.less';

const defaultProps = {};

const propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
};

const Sidebar = ({ routes }) => {
	const router = useRouter();
	const { id } = router.query;
	const [, root, sub] = router?.pathname?.split('/') || ['', '', ''];

	return (
		<Menu
			defaultSelectedKeys={['/']}
			selectedKeys={['/' + (sub && sub !== '[id]' ? sub : root)]}
			defaultOpenKeys={['/' + root]}
			mode="inline"
			className={classes.sidebar}
		>
			{routes.map(({ name, pathname, icon = null }) => {
				const [, _root, _sub] = pathname.split('/');
				return (
					<Menu.Item
						key={`/${_sub && _sub !== '[id]' ? _sub : _root}`}
						icon={icon && <Image src={icon} alt="" />}
						onClick={() => {
							router.push(pathname + (id ? '/' + id : ''));
						}}
					>
						<span>{name}</span>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
