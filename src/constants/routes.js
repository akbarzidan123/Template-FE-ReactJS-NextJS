// Icons
import ApprovalIcon from 'public/svg/approval.svg';
import ReviseIcon from 'public/svg/revise.svg';

export const ROUTES = [
	{
		name: 'Return to Revise',
		pathname: '/return',
		icon: ReviseIcon,
	},
];

export const SUB_ROUTES = {
	'': {
		name: 'Home',
		data: [],
	},
	'return': {
		name: 'Return to Revise',
		data: [
			{
				name: 'Return / Survey - KYC',
				pathname: '/return',
				parent: 'Return To Revise',
			},
		],
	},
	'survey': {
		name: 'Survey',
		data: [
			{
				name: 'Survey',
				pathname: '',
				parent: 'Survey',
			}
		],
	},
	'kyc': {
		name: 'Kyc',
		data: [
			{
				name: 'Know Your Customer',
				pathname: '',
				parent: 'Kyc',
			}
		],
	},
};
