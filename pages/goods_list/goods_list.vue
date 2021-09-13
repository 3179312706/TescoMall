<template>
	<view class="goods_list">
		<search-input></search-input>
		<tabs></tabs>
		<block>
			<view class="first_tab">
				<navigator class="goods_item" v-for="item in goodslist" :key="item.goods_id">
					<view class="goods_img">
						<image :src="item.goods_small_logo?item.goods_small_logo:'../../static/material/img.png'" mode="widthFix"></image>
					</view>
					<view class="goods_info">
						<view class="goods_name">{{item.goods_name}}</view>
						<view class="goods_price">￥{{item.goods_price}}</view>
					</view>
				</navigator>
			</view>
		</block>
	</view>
</template>

<script>
	import searchInput from '../../components/searchInput/searchInput.vue'
	import tabs from '../../components/Tabs/Tabs.vue'
	
	export default {
		data() {
			return {
				QueryParams:{
				query:'',
				cid:'',
				pagenum:1,
				pagesize:10
				},
				goodslist:[],
				totalPages:1
			}
		},
		onLoad:function(options) {
			this.QueryParams.cid = options.cid;
			this.getGoodslist()
		},
		onReachBottom(){
			
		},
		components:{
			searchInput,
			tabs
		},
		methods: {
			getGoodslist(){
					uni.request({
						url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
						data:this.QueryParams,
						success:(res)=>{
							this.goodslist = res.data.message.goods;
							const total=res.data.message.total;
							this.totalPages=Math.ceil(total/this.QueryParams.pagesize);
							console.log(this.totalPages)
						}
					})
			}
		}
	}
</script>

<style lang="scss">
	.first_tab{
		height: 100%;
		.goods_item{
			display: flex;
			border-bottom: 1px solid #ccc;
			padding: 30rpx 0;
			.goods_img{
				flex: 2;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 70%
				}
			}
			.goods_info{
				flex: 3;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.goods_name{
					display: -webkit-box;
					overflow: hidden;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2
				}
				.goods_price{
					color: #eb4450;
					font-size: 32rpx;
				}
			}
		}
	}
</style>
