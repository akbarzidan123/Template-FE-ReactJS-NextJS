// Icons
import ApprovalIcon from 'public/svg/approval.svg';
import ReviseIcon from 'public/svg/revise.svg';

export const ROUTES = [
	{
		name: 'Home',
		pathname: '/home',
		icon: ReviseIcon,
	},
];

export const SUB_ROUTES = {
	'': {
		name: 'Home',
		data: [],
	},
	'detail': {
		name: 'detail',
		data: [
			{
				name: 'Home / Detail',
				pathname: '/detail',
				parent: 'Home Detail',
			},
		],
	},
};
