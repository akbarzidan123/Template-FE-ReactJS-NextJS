import { Table as AntdTable } from 'antd';

// Style
import classes from './style.module.less';

const Table = (props) => {
	return (
		<div className={classes.table}>
			<AntdTable {...props} />
		</div>
	);
};

export default Table;
