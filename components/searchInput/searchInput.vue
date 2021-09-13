<template>
	<view class="search_input">
		<navigator url="../../pages/search/index/index" open-type="navigate" class="search_navigator">搜索</navigator>
	</view>
</template>

<script>
	export default {
		name:"searchInput",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.search_input{
		height: 70rpx;
		padding: 10rpx;
		background-color: #eb4450;
		.search_navigator{
			display: flex;
			height: 100%;
			border-radius: 10rpx;
			justify-content: center;
			align-items: center;
			color: #ccc;
			background-color: #fff;
		}
	}
</style>
