
// import uviewPlus from 'uview-plus'
import uvUI from '@climblee/uv-ui'
import {createSSRApp} from "vue";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	// app.use(uviewPlus)
	app.use(uvUI);
	return {
		app,
	};
}
