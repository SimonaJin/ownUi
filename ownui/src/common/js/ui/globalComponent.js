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
// tabs
import TabNav from "components/tab/tab";
import TabCont from "components/tab/tabCont";

function plugin(Vue) {
  if (plugin.installed) {
    return;
  }
  Vue.component("TabNav", TabNav);
  Vue.component("TabCont", TabCont);
  Vue.component("YqForm", YqForm);
  Vue.component("YqFormItem", YqFormItem);
	Vue.component("YqFormInput", YqFormInput);
	Vue.component("YqButton", YqButton);
	Vue.component("YqBadge", YqBadge);
	Vue.component("YqIcon", YqIcon);
}
export default plugin;
