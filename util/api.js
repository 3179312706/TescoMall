export const myRequest = (options)=>{
	const BASE_URL = ''
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			method:options.method || 'get',
			success:(res)=>{
				if(res.data.status !== 0){
					return uni.showToast({
						title:'数据获取失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"接口请求失败"
				})
				reject(err)
			}
		})
	})
}