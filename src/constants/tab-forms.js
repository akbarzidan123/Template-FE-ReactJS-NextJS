import Modal from "src/containers/DetailForm/Modal";
import Radio from "src/containers/DetailForm/Radio";
import Table from "src/containers/DetailForm/Table";
import InputText from "src/containers/DetailForm/InputText";
import SubTab1OnTab2 from "src/containers/DetailForm/SubTab1OnTab2";
import SubTab2OnTab1 from "src/containers/DetailForm/SubTab2OnTab1";
import SubTab2OnTab2 from "src/containers/DetailForm/SubTab2OnTab2";
import SubTab3OnTab2 from "src/containers/DetailForm/SubTab3OnTab2";
import DateRange from "src/containers/DetailForm/DateRange";

// SIMULATION TAB
import SubTabSimulation1 from "src/containers/DetailForm/SubTabSimulation1";

export const TAB_FORM_1 = [
  {
    header: "Input Text",
    component: InputText,
  },
  {
    header: "Drop Down",
    component: SubTab2OnTab1,
  },
];

export const TAB_FORM_2 = [
  {
    header: "Date Picker",
    component: SubTab1OnTab2,
  },
  {
  	header: "Combo Box",
  	component: SubTab2OnTab2,
  },
  {
  	header: "Currency Input",
  	component: SubTab3OnTab2,
  },
];

export const TAB_FORM_3 = [
	{
		header: "Radio Button",
		component: Radio,
	},
	{
		header: "Date Range Picker",
		component: DateRange,
	},
	{
		header: "Show Modal",
		component: Modal,
	},
];

export const TAB_FORM_4 = [
	{
		header: "Table",
		component: Table,
	},
  {
    header: "Checkbox",
    component: SubTabSimulation1,
  },
];