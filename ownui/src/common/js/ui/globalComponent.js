// demo ui
import DemoUiSection from "components/demoUi/demoSection";
import DemoUiTitle from "components/demoUi/demoTitle";
import DemoUiModules from "components/demoUi/demoModules";
// 表单
import YqForm from "components/yqForm/yqForm";
import YqFormItem from "components/yqForm/yqForm-item";
import YqFormInput from "components/yqForm/yqForm-input";
// button
import YqButton from "components/yqButton/yqButton";
// badge
import YqBadge from "components/badge/badge";
// icon
import YqIcon from "components/icon/icon";
// image
import YqImage from "components/image/image";
//snpinner
import YqSpinner from "components/spinner/spinner";
// tabs
import TabNav from "components/tab/tab";
import TabCont from "components/tab/tabCont";

function plugin(Vue) {
  if (plugin.installed) {
    return;
	}
	Vue.component("DemoUiSection", DemoUiSection);
	Vue.component("DemoUiTitle", DemoUiTitle);
	Vue.component("DemoUiModules", DemoUiModules);
  Vue.component("TabNav", TabNav);
  Vue.component("TabCont", TabCont);
  Vue.component("YqForm", YqForm);
  Vue.component("YqFormItem", YqFormItem);
	Vue.component("YqFormInput", YqFormInput);
	Vue.component("YqButton", YqButton);
	Vue.component("YqBadge", YqBadge);
	Vue.component("YqIcon", YqIcon);
	Vue.component("YqImage", YqImage);
	Vue.component("YqSpinner", YqSpinner);
}
export default plugin;
