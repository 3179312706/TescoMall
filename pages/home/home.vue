<template>
	<view class="home">
		<search-input></search-input>
		<!-- 轮播 -->
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in Swipers" :key='item.goods_id'>
				<image :src="item.image_src" mode=""></image>
			</swiper-item>
		</swiper>
		
		<!-- 导航栏 -->
		<view class="nav">
			<navigator class="nav-item" v-for="item in nav" :key="item.name">
				<image :src="item.image_src" mode=""></image>
			</navigator>
		</view>
		
		<!--热门-->
		<view class="floor">
			<view class="floor_group" v-for="item in  Floor" :key="item.floor_title.name">
				<view class="floor_title">
					<image :src="item.floor_title.image_src" mode=""></image>
				</view>
				<view class="floor_list">
					<navigator v-for="(item2,index) in item.product_list" :key="item2.name">
					<image :src="item2.image_src" mode="index===0?'widthFix':'scaleToFill'"></image>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchInput from '../../components/searchInput/searchInput.vue'
		
	export default {
		data() {
			return {
				Swipers:[],
				nav:[],
				Floor:[]
			}
		},
		onLoad() {
			this.getSwipers();
			this.getNav();
			this.getFloor();
		},
		
		components:{
			searchInput
		},
		
		methods:{
			//获取轮播图数据
			getSwipers(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					success:(res)=>{
						this.Swipers = res.data.message;
					}
				})
			},
			
			//获取导航栏数据
			
			getNav(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
					success:(res)=>{
						this.nav = res.data.message;
					}
				})
			},
			
			//获取楼层数据
			
			getFloor(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
					success:(res)=>{
						this.Floor = res.data.message;
					}
				})
			},
		}
		}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	
	
	.nav{
		display: flex;
		height: 150rpx;
		navigator{
			flex: 1;
			justify-content: space-between;
			image{
				width: 80%;
				height: 100%;
				display: block;
				margin: 0 auto;
			}
		}
		}
		
	.floor{
		.floor_group{
			.floor_title{
				padding: 20rpx 0;
				image{
					width: 100%;
					height: 60rpx;
				}
			}
		}
		.floor_list{
			overflow: hidden;
			height: 420rpx;
			width: 100%;
			navigator{
				float: left;
				width: 33%;
				&:nth-child(1){
						height: 33.33vw* 386/232;
				}
				&:nth-last-child(-n+4){
						height: 33.33vw * 386 / 232 / 2;
						width: 235rpx;
						border-left: 10rpx solid #fff;
				}
				&:nth-child(2),&:nth-child(3){
						border-bottom: 10rpx solid #fff;
				}
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	// 	view{
	// 		width: 120rpx;
	// 		height: 120rpx;
	// 		background-color: #b50e03;
	// 		border-radius: 60rpx;
	// 		margin: 10px auto;
	// 		line-height: 120rpx;
	// 		color: #fff;
	// 		font-size: 44rpx;
	// 	}
	// 	text{
	// 		font-size: 30rpx;
	// 	}
	// 	}
	// }
	
	// .hot-goods{
	// 	background-color: #eee;
	// 	overflow: hidden;
	// 	margin-top: 10px;
	// 		.tit{
	// 			height: 50px;
	// 			line-height: 50px;
	// 			color: #b50e03;
	// 			text-align: center;
	// 			letter-spacing: 20px;
	// 			font-size: 17px;
	// 			font-weight: 500;
	// 			margin: 7rpx 0;
	// 			background-color: #fff;
	// 		}
	// 		.goods_list{
	// 			padding: 0 15rpx;
	// 			display: flex;
	// 			flex-wrap: wrap;
	// 			.goods_item{
	// 				background-color: #fff;
	// 				width: 355rpx;
	// 				margin: 10rpx 0;
	// 				padding: 15rpx;
	// 				box-sizing: border-box;
	// 				image{
	// 					width: 80%;
	// 					height: 150px;
	// 					display: block;
	// 					margin: 0 auto;
	// 				}
	// 				.price{
	// 					color: #b50e03;
	// 					font-size: 30rpx;
	// 					text:nth-child(2){
	// 						color: #ccc;
	// 						font-size: 28rpx;
	// 						margin-left: 17rpx;
	// 						text-decoration: line-through;
	// 					}
	// 				}
	// 				.name{
	// 					font-size: 20rpx;
	// 					line-height: 50rpx;
	// 					padding-bottom: 15rpx;
	// 					padding-top: 10rpx;
	// 				}
	// 			}
	// 		}
	// }
	}
	
	
</style>
