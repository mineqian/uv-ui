import {
	defineConfig
} from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			imports: ['vue', 'uni-app'],
		  }),
	],
	resolve: {
		// https://cn.vitejs.dev/config/#resolve-alias
		alias: {
			// 设置路径
			'~': path.resolve(__dirname, './'),
			// 设置别名
			'@': path.resolve(__dirname, './src')
		},
		// https://cn.vitejs.dev/config/#resolve-extensions
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	// server: {
	// 	port: 80,
	// 	host: true,
	// 	open: true,
	// 	proxy: {
	// 		'/dev-api': {
	// 			target: 'http://192.168.0.22:8090',
	// 			changeOrigin: true,
	// 			rewrite: p => p.replace(/^\/dev-api/, ''),
	// 		},
	// 	},
	// },
})