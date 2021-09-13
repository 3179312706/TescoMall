<template>
	<view class="Tabs">
		<view class="Tabs_title" v-for="(item,index) in tabs" :key="index" >
			<view class="title_item" :class="{'active':currentIndex==index}" @click="current(index)">{{item}}</view>
		</view>
		<view class="Tabs_content">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs:["综合","销量","价格"],
				currentIndex:0
			}
		},
		methods: {
			current(index){
				this.currentIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	.Tabs{display: flex;}
	.Tabs_title{
			display:flex;	
			flex: 1;
			text-align: center;
	}
	.title_item{
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		padding:15rpx 0;
	}
	.active{
		color: #eb4450;
		border-bottom: 5rpx solid #eb4450;
	}
</style>
