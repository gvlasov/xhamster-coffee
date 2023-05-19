import './global.less';
import "the-new-css-reset/css/reset.css";
import App from './components/App.svelte';

const app = new App({
	target: document.body
});

export default app;
