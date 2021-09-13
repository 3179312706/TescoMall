<template>
	<view class="cates">
		<search-input></search-input>
		<view class="cates_container">
			<scroll-view class="left_menu" scroll-y>
				<view  class="menu_item" :class="{'active':currentIndex==index}" @click="current(index);handleItemTap($event)"  v-for="(item,index) in Cates" :key="item.cat_name" :data-index="index">{{item.cat_name}}</view>
			</scroll-view>
			<scroll-view scroll-top="0" class="right_content" scroll-y>
				<view class="goods_group" v-for="item1 in rightContent" :key="rightContent.cat_name">
					<view class="goods_title">
						<text class="delimiter">/</text>
						<text class="title">{{item1.cat_name}}</text> 
						<text class="delimiter">/</text>
					</view>
					<view class="goods_list">
						<navigator v-for="item2 in item1.children" :key="item2.cat_name">
							<image :src="item2.cat_icon" mode=""></image>
							<view class="goods_name">{{item2.cat_name}}</view>
						</navigator>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import searchInput from '../../components/searchInput/searchInput.vue'
	
	export default {
		data() {
			return {
				Cates:[],
				rightContent:[],
				currentIndex:0,
				ProductList:[]
			}
		},
		onLoad() {
			const Cates = uni.getStorageSync('cates');
			
			if(!Cates){
				this.getCates();
			}else{
				if(Data.now()-Cates.time>1000*10){
					this.getCates();
				}else{
					this.Cates=Cates.data;
				}
			}
			this.getProductList();
		},
		components:{
			searchInput
		},
		methods: {
			current(index){
				this.currentIndex = index;
			},
			
			handleItemTap(e){
				
				const {index} =  e.currentTarget.dataset;
				
				let right = this.Cates[index].children;
				this.currentIndex = index;
				this.rightContent = right;
			},
		
			
			//获取商品分类数据
			getCates(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/categories',
					success:(res)=>{
						this.Cates = res.data.message;
						this.rightContent = this.Cates[0].children;
						
					}
				})
			},
			
			//获取商品列表数据
			getProductList(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
					success:(res)=>{
						this.ProductList = res.data.message;
						console.log(this.ProductList);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.cates{
		height: 100%;
		.cates_container{
			height: calc(100vh - 90rpx);
			display: flex;
			.left_menu{
				flex: 2;
				.menu_item{
					height: 80rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
					text-align: center;
				}
				.active{
					color:#eb4450;
					border-left: 5rpx solid #eb4450;
				}
			}
			.right_content{
				flex: 5;
				.goods_group{
					.goods_title{
						height: 80rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						.delimiter{
							color: #ccc;
							padding: 0 10rpx;
						}
						.title{
							
						}
					}
					.goods_list{
							display: flex;
							flex-wrap: wrap;
						navigator{
							width: 33%;
							text-align: center;
							image{
								width: 50%;
								height: 90rpx;
								margin-top: 40rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
