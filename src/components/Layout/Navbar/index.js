import { Menu } from 'antd';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

// Style
import classes from './style.module.less';

const defaultProps = {};

const propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
	leftComponent: PropTypes.node,
	rightComponent: PropTypes.node,
};

const Navbar = ({ routes, leftComponent, rightComponent }) => {
	const router = useRouter();
	const { id } = router.query;

	// eslint-disable-next-line no-unused-vars
	// eslint-disable-next-line no-unsafe-optional-chaining
	const [, root, sub] = router.pathname?.split('/');

	return (
		<div className={classes.container}>
			{leftComponent}
			<Menu
				defaultSelectedKeys={['/']}
				selectedKeys={['/' + (sub && sub !== '[id]' ? sub : root)]}
				defaultOpenKeys={['/' + root]}
				mode="horizontal"
				className={classes.navbar}
			>
				{routes.map(({ name, pathname }) => {
					if (pathname === '') {
						const [, _root, _sub] = router.asPath.split('/');
						return (
							<Menu.Item
								key={`/${_sub && _sub !== '[id]' ? _sub : _root}`}
								onClick={() => {
									router.push(pathname + (id ? '/' + id : ''));
								}}
							>
								<span>{name}</span>
							</Menu.Item>
						);
					}
					const [, _root, _sub] = pathname.split('/');
					return (
						<Menu.Item
							key={`/${_sub && _sub !== '[id]' ? _sub : _root}`}
							onClick={() => {
								router.push(pathname + (id ? '/' + id : ''));
							}}
						>
							<span>{name}</span>
						</Menu.Item>
					);
				})}
			</Menu>
			<div className={classes.rightComponent}>{rightComponent}</div>
		</div>
	);
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
