<template>
	<view>
		<view class="fixed">
			<cu-custom :isBack="true" bgColor="text-white">
				<block slot="backText">返回</block>
				<block slot="content" style="font-size: 16px;font-weight: 800;">商品详情</block>
			</cu-custom>
		</view>
		<scroll-view scroll-y="true" @scroll="scroll" upper-threshold="10">
			<view class="" style="width: ;">
				<image src="../../static/index/shopping-top.png" mode="" style="width: 100%;height: 600upx;"></image>
			</view>
			<view class="bg-white solid-bottom " style="padding-left: 30upx;padding-top: 30upx;">
				<view class="shopping-title">
					无锡阳山水蜜桃250g/个
				</view>
				<view class="text-gray shopping-title-infor">
					“醉”酒一号，一口甜在心！
				</view>
	
				<view class="text-gray text-sm flex justify-between">
					<view class="">
						<text class="text-red" style="font-size: 40rpx;">￥19.9</text>
						<text class="text-gray padding-left-sm" style="text-decoration:line-through;color: #CCCCCC;">￥32.9</text>
					</view>
					<view class="text-gray text-sm" style="margin-right: 30upx;">
						已售 4888份
					</view>
				</view>
			</view>
			<view class="bg-white grid col-3 solid-bottom" style="padding-left: 30upx;">
				<view class="padding-sm" style="font-size: 30rpx;">
					<text class="cuIcon-roundcheck text-green" style="font-weight: 500;font-size: 35rpx;"></text>
					<text class="text-gray">三无退货</text>
				</view>
				<view class="padding-sm" style="font-size: 30rpx;">
					<text class="cuIcon-roundcheck text-green" style="font-weight: 500;font-size: 35rpx;"></text>
					<text class="text-gray">特约供货地</text>
				</view>
				<view class="padding-sm" style="font-size: 30rpx;">
					<text class="cuIcon-roundcheck text-green" style="font-weight: 500;font-size: 35rpx;"></text>
					<text class="text-gray">品控质检</text>
				</view>
			</view>
			<view class="bg-white" style="padding-left: 30upx;padding-top: 30upx;">
				<view class="flex justify-between" style="margin-top: 10upx;">
					<view class="">
						<text class="text-gray" style="font-size: 12px;margin-right: 30upx;">促销</text>
						<image src="../../static/index/manjian.png" mode="" style="width: 70upx;height: 30upx;"></image>
						<text class="text-orange" style="font-size: 12px;margin-left: 30upx;">满188立减20</text>
					</view>
					<view class="">
						<text class="cuIcon-right" style="font-size: 16px; color: #CCCCCC;margin-right: 30upx;"></text>
					</view>
					
				</view>
				<view class="text-gray margin-top" style="font-size: 12px;">
					规格
				</view>
				<view class="margin-top-xs" style="padding-bottom: 30upx;">
					<text class="cu-tag xl  padding-df margin-right-sm" :class="sizeCheckId == index + 1?'bg-yellow text-white':''" @click="sizeCheck" v-for="(item, index) in sizeCheckList" :key="index" :data-id="item.id">{{item.number}}g</text>
				</view>
			</view>
			
			
			<view class="shadow-blur margin-top" style="background-color: rgb(123,197,252);">
				<image src="../../static/wave.gif" mode="scaleToFill" class="gif-black response" style="height:100upx"></image>
			</view>
			<view class=" bg-white" style="padding-left: 30upx;">
				
				<view class="shopping-title padding-top">
					商品详情
				</view>
				<view class="text-gray margin-top" style="font-size: 13px;line-height: 50upx;">
					<view>重量：1500g</view>
					<view>包装：普通</view>
					<view>保质期：到货即可食用</view>
					<view>储存方法：冷藏</view>
				</view>
				<view class="margin-top" style="margin-right: 30upx;">
					<view class="text-gray" v-html="shoppingInformation"></view>
				</view>
				
				
			</view>
			<view class="text-center padding-top bg-white">
				<image src="../../static/logo-1.png" mode="" style="width: 250upx;height: 75upx;"></image>
			</view>
			<view style="margin-bottom: 100upx;">
				<image class="bg-white" src="../../static/bottom.png" mode="" style="width: 100%;height: 100upx;"></image>
			</view>
		</scroll-view>
		
		
		
		
		
		<view class="cu-bar bg-white tabbar shop foot">
			<view class="action text-gray" @click="gotoIndex">
				<view class="">
					<image src="../../static/index/shop-index.png" mode="" style="width: 40upx;height: 40upx;"></image>
				</view>
				首页
			</view>
			<view class="action text-gray">
				<view class="">
					<image src="../../static/index/share.png" mode="" style="width: 40upx;height: 40upx;"></image>
				</view>
				分享
			</view>
			<view class="action text-gray" @click="gotoShopCar">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="">
				<image src="../../static/index/add-car.png" mode="" style="width: 350upx;height: 100upx;"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shoppingInformation:'<div id="articleBody" class="articleBody"><div id="vf"><div id="videoarea" style="width: 480px; height: 360px; border-width: 1px; border-style: solid; border-color: rgb(200, 200, 200); display: none;" align="center"></div></div><!--enpcontent--><p align="center"></p><p>　　<strong>黄河新闻网讯（记者 刘亚男）</strong>8月9日，黄寨镇碧山村举办第二届桃王争霸赛暨碧山鲜桃采摘季启动仪式。</p><p>　　经过专家评选，碧山村桃农陈毛货当选2019年黄寨镇“桃王”。经测评，碧山水蜜桃最大的单果重510g，桃面着色面积达80%以上，含糖量高，折光糖最高达16.5%。汁多味美的碧山水蜜桃获得前来观赛、采摘游客的一致赞赏。</p><p>　　桃王争霸赛暨碧山鲜桃采摘活动的举办为广大消费者与果农搭建起一个互利共享的平台，不仅前来旅游采摘的游客愉悦身心，体验到了亲自采摘、农业观光的乐趣，对于当地果农来说，更是收获满满——碧山因为独特优良的自然环境，出产的瓜果桃李格外味美，但因为过去传统的销售方式，果农们只能凌晨起床摘桃，用三轮车、自行车推到县城去零售，单价只能卖到1至2元一斤。去年起，黄寨镇通过举办系列活动，改变了这一传统的销售方式，吸引游客到田间地头采摘，果品的单价也能提高至5元一斤，不仅果农省了事，还带动了当地乡村游的发展，村民也实现了增收致富。</p><p align="center"></p><p>　　黄寨镇副镇长任佳雯介绍，碧山村全村仅有46户125人，这样一个小山村，依靠种植水蜜桃去年人均年收入达到了两万元。目前，全村共种植桃子700余亩，成熟果树约400余亩。碧山村种植水蜜桃已经有近50年的历史，碧山水蜜桃果型大、色泽美，香气浓郁，汁多甜美，入口即化，含糖量高，是品质上佳的桃子。</p><p>　　为了让桃农增收致富，2017年起，在阳曲县委县政府规划下，该村新建了村民之家、修通拓宽了田间道路，修建铺设了灌溉管网，让旱地变成了水浇地。同时，配套了农家乐和乡村木屋客栈，碧山村的桃树种植也纳入了南留南片区万亩葡果园项目内容，增加种植面积，改进种植技术，提高果实品质。此外，镇上还培训桃农利用抖音等电商，直播销售果品，帮助农民打开销路。</p><p align="center"></p><p>　　阳曲县万亩葡果园品种多样，季季有惊喜，村村有不同，既有五月杏，又有十月梨；既有北留的苹果，又有碧山的鲜桃；既有传统的红枣，又有新种的樱桃。未来黄寨镇将通过持续的推介和宣传，进一步提高碧山果品的知名度，塑造口碑和品牌影响力，持续带动南留南片区万亩葡果园提升产品单价、提高果农收入。</p><!--/enpcontent--><!--enpproperty <articleid>502417</articleid><date>2019-08-10 18:39:51:0</date><author>刘亚男</author><title>到碧山摘桃子啦！阳曲县举办“桃王”争霸赛</title><keyword>碧山 采摘 争霸赛 阳曲县 黄寨镇</keyword><subtitle></subtitle><introtitle></introtitle><siteid>3</siteid><nodeid>10122</nodeid><nodename>国内</nodename><nodesearchname>国内</nodesearchname><picurl></picurl><url>http://news.china.com.cn/live/2019-08/10/content_502417.htm</url><urlpad>null</urlpad><sourcename>黄河新闻网</sourcename><abstract>8月9日，黄寨镇碧山村举办第二届桃王争霸赛暨碧山鲜桃采摘季启动仪式。未来黄寨镇将通过持续的推介和宣传，进一步提高碧山果品的知名度，塑造口碑和品牌影响力，持续带动南留南片区万亩葡果园提升产品单价、提高果农收入。</abstract><channel>1</channel>/enpproperty--></div>',
				
				// 规格选择有关
				sizeCheckList:[
					{"id":1, "number":500},
					{"id":2, "number":1000},
					{"id":3, "number":2500}
				],
				sizeCheckId:"",
			}
		},
		methods: {
			gotoIndex(){
				uni.navigateBack()
			},
			gotoShopCar(){
				uni.navigateTo({
					url:'../car/car'
				})
			},
			sizeCheck(e){
				let id = e.currentTarget.dataset.id;
				this.sizeCheckId = id;
				
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			scrolltoupper(){
				console.log(123456789)
			}
		}
	}
</script>

<style>
.shopping-title{
	font-size: 38rpx;
	font-weight: 900;
	color: #333333;
}
.shopping-title-infor{
	font-size: 30rpx;
}
@import "../../colorui/animation.css";
	
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}

/* css 滤镜 控制黑白底色gif的 */
.gif-black{  
  mix-blend-mode: screen;  
}
.gif-white{  
  mix-blend-mode: multiply; 
}

/* .information-header{
	position: relative;
	top: -100upx;
	border-top-left-radius:50upx;
	border-top-right-radius:50upx; 
	height: 1px;
} */


</style>
