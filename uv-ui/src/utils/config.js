// 配置BaseURL
export function getBaseURL() {
	if (process.env.NODE_ENV === 'development') {
		// 本地开发环境
		return "http://192.168.0.22:8090"
	} else {
		// 生产环境
		return "http://192.168.0.22:8090"
	}
}