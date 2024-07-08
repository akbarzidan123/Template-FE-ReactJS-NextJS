import PropTypes from "prop-types";
import createNumberMask from "src/utils/createNumberMask";
import MaskedInput from "src/utils/maskedInput";

const defaultMaskOptions = {
	prefix: "$",
	suffix: "",
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: ",",
	allowDecimal: false,
	// decimalSymbol: '.',
	allowNegative: true,
	allowLeadingZeroes: false,
};

const InputCurrency = ({ maskOptions, ...inputProps }) => {
	const currencyMask = createNumberMask({
		...defaultMaskOptions,
		...maskOptions,
	});

	return (
		<MaskedInput
			// placeholder=""
			className="ant-input"
			mask={currencyMask}
			{...inputProps}
		/>
	);
};

InputCurrency.defaultProps = {
	inputMode: "numeric",
	maskOptions: {},
};

InputCurrency.propTypes = {
	inputMode: PropTypes.string,
	maskOptions: PropTypes.object,
};

export default InputCurrency;
