import React, { Component } from 'react';
import './style.css';
import starSky from './img/starSky.png';
import whatIs5G from './img/what-is-5g.png';
import moon from './img/moon.gif';
import sun from './img/sun.gif';
import satallite from './img/satallite.gif';
import signal from './img/signal.gif';
import OneGImg1 from './img/1G/1G-1.jpg';
import OneGImg2 from './img/1G/1G-2.jpg';
import OneGImg3 from './img/1G/1G-3.jpg';
import OneGImg4 from './img/1G/1G-4.jpeg';
import TwoGImg1 from './img/2G/2G-1.jpg';
import TwoGImg2 from './img/2G/2G-2.jpg';
import TwoGImg3 from './img/2G/2G-3.jpg';
import TwoGImg4 from './img/2G/2G-4.jpg';
import NImg from './img/N.png';
import FourGImg1 from './img/4G/4G-1.jpg';
import FourGImg2 from './img/4G/4G-2.jpg';
import FourGImg3 from './img/4G/4G-3.jpg';
import FourGImg4 from './img/4G/4G-4.jpg';
import FourGImg5 from './img/4G/4G-5.png';
import FourGImg6 from './img/4G/4G-6.png';
import FourGImg7 from './img/4G/4G-7.jpg';
import FourGImg8 from './img/4G/4G-8.jpg';
import FourGImg9 from './img/4G/4G-9.png';
import ShouJi1 from './img/shouji-1.jpeg';
import ShouJi2 from './img/shouji-2.jpeg';
import deathStranding from './img/deathStranding.mp4';
import FiveGImg from './img/5G/5G.jpg';
import FiveGLogo from './img/5G.png';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winHeight: document.documentElement.clientHeight,
			winWidth: document.documentElement.clientWidth,
			offsetX: [],
			offsetY: [],
			forthPageTextSize: 5,
			fifthPageBgcSize: {
				width: '50%',
				height: '50%',
				left: '25%',
				top: '10%'
			},
			wordColor: '#000',
			sixthPageContentBoxPos: {
				top: [10, 35, 0, 90],
				rotateZ: [216, 1207, 1170, 1220],
			},
			eigthPageImgTranslateX: 0,
			eigthPageFlowImgsTop: 0,
		}
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.handleTransToContent = this.handleTransToContent.bind(this);
		this.secondPage = React.createRef();
	}
	render() {
		return (
			<div className="MainRoot">
				<div className="firstPage" onMouseMove={this.handleMouseMove}>
					<div className="star"><img src={starSky} alt="" /></div>
					<div className="moon"><img src={moon} alt="" /></div>
					<div className="sun"><img src={sun} alt="" /></div>
					<div className="satallite"><img src={satallite} alt="" /></div>
					<div className="hero">
						<div className="rotateCube">
							<div className="box">
								<div className="up"></div>
								<div className="down"></div>
								<div className="left"></div>
								<div className="right"></div>
								<div className="front"></div>
								<div className="back"></div>
							</div>
						</div>
						<div className="hero-container">
							<div className="whatIs5G" ref={(div) => this.whatIs5G = div}>
								<img src={whatIs5G} alt="" style={{ transform: [`translateX(${this.state.offsetX[0]}px) translateY(${this.state.offsetY[0]}px)`] }} />
								<div className="hero-glich cc-1" style={{ transform: [`translateX(${this.state.offsetX[0]}px) translateY(${this.state.offsetY[0]}px)`] }}></div>
								<div className="hero-glich cc-2" style={{ transform: [`translateX(${this.state.offsetX[1]}px) translateY(${this.state.offsetY[1]}px)`] }}></div>
								<div className="hero-glich cc-3" style={{ transform: [`translateX(${this.state.offsetX[2]}px) translateY(${this.state.offsetY[2]}px)`] }}></div>
								<div className="hero-glich cc-4" style={{ transform: [`translateX(${this.state.offsetX[3]}px) translateY(${this.state.offsetY[3]}px)`] }}></div>
								<div className="hero-glich cc-5" style={{ transform: [`translateX(${this.state.offsetX[4]}px) translateY(${this.state.offsetY[4]}px)`] }}></div>
								<div className="hero-glich cc-6" style={{ transform: [`translateX(${this.state.offsetX[5]}px) translateY(${this.state.offsetY[5]}px)`] }}></div>
								<div className="hero-glich cc-7" style={{ transform: [`translateX(${this.state.offsetX[6]}px) translateY(${this.state.offsetY[6]}px)`] }}></div>
								<div className="hero-glich cc-8" style={{ transform: [`translateX(${this.state.offsetX[7]}px) translateY(${this.state.offsetY[7]}px)`] }}></div>
								<div className="hero-glich cc-9" style={{ transform: [`translateX(${this.state.offsetX[8]}px) translateY(${this.state.offsetY[8]}px)`] }}></div>
								<div className="hero-glich cc-10" style={{ transform: [`translateX(${this.state.offsetX[9]}px) translateY(${this.state.offsetY[9]}px)`] }}></div>
								<div className="hero-glich cc-11" style={{ transform: [`translateX(${this.state.offsetX[10]}px) translateY(${this.state.offsetY[10]}px)`] }}></div>
								<div className="hero-glich cc-12" style={{ transform: [`translateX(${this.state.offsetX[11]}px) translateY(${this.state.offsetY[11]}px)`] }}></div>
								<div className="hero-glich cc-13" style={{ transform: [`translateX(${this.state.offsetX[12]}px) translateY(${this.state.offsetY[12]}px)`] }}></div>
								<div className="hero-glich cc-14" style={{ transform: [`translateX(${this.state.offsetX[13]}px) translateY(${this.state.offsetY[13]}px)`] }}></div>
								<div className="hero-glich cc-15" style={{ transform: [`translateX(${this.state.offsetX[14]}px) translateY(${this.state.offsetY[14]}px)`] }}></div>
								<div className="hero-glich cc-16" style={{ transform: [`translateX(${this.state.offsetX[15]}px) translateY(${this.state.offsetY[15]}px)`] }}></div>
							</div>
						</div>
						<div className="hero-text-btns">
							<div className="text">
								<p>The Fifth Generation Cellular Network Technology</p>
							</div>
							<div className="btns">
								<a className="btn1" onClick={this.handleTransToContent}>ready to know</a>
								<a className="btn2">check me</a>
							</div>
						</div>
					</div>
					<div className="linerColor"></div>

					<div className="secondPage" ref={this.secondPage}>
						<img className="signalImg" src={signal} alt="" />
						<div className="text">
							<p className="chineseText">我们先来简单了解移动通信技术的发展历史</p>
							<p className="englishText">Let’s first understand the history of mobile communication technology simplely.</p>
						</div>
					</div>

					<div className="thirdPage">
						<div className="text">
							<p className="yearText">1887</p>
							<p className="chineseText">赫兹设计第一副天线，证实电磁波</p>
							<p className="englishText">H.R.Hertz designed the first antenna to confirm the electromagnetic wave</p>
						</div>
					</div>

					<div className="forthPage" ref={(div) => this.forthPage = div}>
						<div className="text" style={{ height: `${this.state.forthPageTextSize * 2}vh` }}>
							<p className="titleText" style={{ fontSize: `${this.state.forthPageTextSize}vw` }}>移动通信技术</p>
						</div>
					</div>

					<div className="fifthPage" ref={(div) => this.fifthPage = div}>
						<div className="bgc" style={{ width: this.state.fifthPageBgcSize.width, height: this.state.fifthPageBgcSize.height, left: this.state.fifthPageBgcSize.left, top: this.state.fifthPageBgcSize.top }}></div>
						<div className="content">
							<div className="intro">
								<p>1G：沟通的起源</p>
								<p>· 模拟通信</p>
								<p>· 只能语音传输</p>
								<p>· 语音品质低，信号差</p>
								<p>· 盗号、串号情况频繁</p>
							</div>
							<div className="imgs">
								<img className="first" src={OneGImg1} alt="" />
								<img className="second" src={OneGImg2} alt="" />
								<img className="third" src={OneGImg3} alt="" />
								<img className="forth" src={OneGImg4} alt="" />
							</div>
							<div className="intro-copy">
								<p>也许你在老电影里看到过“大哥大”的身影，可能只是个模糊的印象，但无论如何，那是一个有一斤多重、出门甚至要专门准备手提包的“大砖头”。</p>
							</div>
						</div>
					</div>

					<div className="sixthPage">
						<div className="bgc"></div>
						<div className="guideSentence">
							<p>随着移动通信技术的不断<span className="colorfulWord" style={{ color: this.state.wordColor }}>发展</span>...</p>
						</div>
						<div className="content" ref={(div) => this.sixthPageContent = div}>
							<div className="intro">
								<p>2G：网络的开始</p>
								<p>· 数字通信的开始</p>
								<p>· 可接入互联网</p>
								<p>· 抗干扰能力大大增加</p>
								<p>· 网络不稳定，传输效率低</p>
							</div>
							<div className="imgs">
								<img className="first" src={TwoGImg1} alt="" />
								<img className="second" src={TwoGImg2} alt="" />
								<img className="third" src={TwoGImg3} alt="" />
								<img className="forth" src={TwoGImg4} alt="" />
							</div>
							<div className="intro-copy">
								<p>在2G网络下除了打电话语音沟通之外，还可以发短信以及上网。</p>
							</div>
							<div className="rotateCube1" style={{ top: `${this.state.sixthPageContentBoxPos.top[0]}%` }}>
								<div className="box" style={{ transform: [`rotateX(6deg) rotateY(232deg) rotateZ(${this.state.sixthPageContentBoxPos.rotateZ[0]}deg)`] }}>
									<div className="up"></div>
									<div className="down"></div>
									<div className="left"></div>
									<div className="right"></div>
									<div className="front"></div>
									<div className="back"></div>
								</div>
							</div>
							<div className="rotateCube2" style={{ top: `${this.state.sixthPageContentBoxPos.top[1]}%` }}>
								<div className="box" style={{ transform: [`rotateX(311deg) rotateY(440deg) rotateZ(${this.state.sixthPageContentBoxPos.rotateZ[1]}deg)`] }}>
									<div className="up"></div>
									<div className="down"></div>
									<div className="left"></div>
									<div className="right"></div>
									<div className="front"></div>
									<div className="back"></div>
								</div>
							</div>
							<div className="rotateCube3" style={{ top: `${this.state.sixthPageContentBoxPos.top[2]}%` }}>
								<div className="box" style={{ transform: [`rotateX(381deg) rotateY(522deg) rotateZ(${this.state.sixthPageContentBoxPos.rotateZ[2]}deg)`] }}>
									<div className="up"></div>
									<div className="down"></div>
									<div className="left"></div>
									<div className="right"></div>
									<div className="front"></div>
									<div className="back"></div>
								</div>
							</div>
							<div className="rotateCube4" style={{ top: `${this.state.sixthPageContentBoxPos.top[3]}%` }}>
								<div className="box" style={{ transform: [`rotateX(340deg) rotateY(500deg) rotateZ(${this.state.sixthPageContentBoxPos.rotateZ[3]}deg)`] }}>
									<div className="up"></div>
									<div className="down"></div>
									<div className="left"></div>
									<div className="right"></div>
									<div className="front"></div>
									<div className="back"></div>
								</div>
							</div>
						</div>
					</div>

					<div className="seventhPage">
						<div className="NImg"><img src={NImg} alt="" /></div>

						<div className="textContent1">
							<p className="title">漫漫地，引来了移动通信新纪元</p>
							<div className="content">
								<div className="first">
									<p>3G：通讯新纪元</p>
									<p>· 完成国际融合和标准化</p>
									<p>· 扩展频谱，提升速率</p>
									<p>· 智能手机时代开启</p>
								</div>
								<p className="second">在3G 之下，我们有了更高频宽和稳定的传输，视频电话和大量数据传送更为普遍，移动通讯也有着更为多样化的应用。因此，3G 也被视为是开启移动通讯新纪元的重要关键。</p>
							</div>
						</div>

						<div className="textContent2">
							<p className="title">速度的革命</p>
							<div className="content">
								<div className="first">
									<p>4G：速度的革命</p>
									<p>· 通信速度极大提升</p>
									<p>· 更丰富的通信功能</p>
									<p>· 包含TD-LTE 和FDD-LTE 两种制式</p>
								</div>
								<p className="second">4G 让手机实现的功能更为丰富。大量且稳定的信息传递，让无论是通信还是娱乐都能一手掌控。</p>
							</div>
						</div>
					</div>

					<div className="eigthPage" ref={(div) => this.eigthPage = div}>
						<div className="flowImgs" ref={(div) => this.eigthPageFlowImgs = div} style={{ transform: `translateX(-${this.state.eigthPageImgTranslateX}px)` }}>
							<div className="flowImgs-img first"><img src={FourGImg4} alt="" /></div>
							<div className="flowImgs-img second"><img src={FourGImg1} alt="" /></div>
							<div className="flowImgs-img third"><img src={FourGImg2} alt="" /></div>
							<div className="flowImgs-img forth"><img src={FourGImg3} alt="" /></div>
							<div className="flowImgs-img fifth"><img src={FourGImg5} alt="" /></div>
							<div className="flowImgs-img sixth"><img src={FourGImg6} alt="" /></div>
							<div className="flowImgs-img seventh"><img src={FourGImg7} alt="" /></div>
							<div className="flowImgs-img eighth"><img src={FourGImg8} alt="" /></div>
							<div className="flowImgs-img ninth"><img src={FourGImg9} alt="" /></div>
						</div>
					</div>

					<div className="ninthPage" ref={(div) => this.ninthPage = div}>
						<p className="title">智能手机与移动通信共进</p>
						<div className="iphoneContainer">
							<div className="iphoneWrap">
								<div className="screen-content" style={{ width: '238px', height: '380px' }} ref={(div) => this.screenContent = div}>
									<div className="content" ref={(div) => this.screenContentContent = div}>
										<h4 style={{ color: '#303f9f' }}><div className="verticalLine"></div>第一代iPhone，定义智能手机</h4>
										<p className="iphone">
											<span style={{ color: '#e65100', fontWeight: '600' }}>2007年的手机都长什么样？</span><br></br>
											<img src={ShouJi1} style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto' }} /><br></br>
											那一年黑莓Curve初次亮相，商务人士兴奋不已；<br></br><br></br>
											诺基亚N95上市，成为当年诺基亚巅峰时期的旗舰，但iPhone的横空出世，打破了原本手机界的格局。<br></br><br></br>
											3.5英寸的电容触摸屏、圆形的铝制机身以及只有一个Home键的物理按钮，让它从当年的千篇一律的手机造型中脱颖而出，成为最受关注的手机。<br></br><br></br>
											当年的iPhone发布会上，乔布斯表示：“我们领先其他手机五年。”这句话从一开始的大言不惭到最后真的成为了现实，即便是五年后的2012年，iPhone的整体制作水准依然高于大部分智能手机。<br></br>
											<img src={ShouJi2} style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto' }} />
										</p>
										<p className="iphone-3G">
											<span style={{ color: '#e65100', fontWeight: '600' }}>2008年 —— iPhone 3G</span><br></br>
											如果说当年iPhone唯一被诟病的地方是数据网络，那么iPhone 3G的推出给竞争对手来了致命一击。<br></br>
										</p>
										<p className="iphone-4">
											<span style={{ color: '#e65100', fontWeight: '600' }}>2010年 —— iPhone 4</span><br></br>
											如果说iPhone的出现打破了手机界的格局，那么iPhone 4则让苹果登上了手机界王者的宝座。<br></br>
											这款产品让世界彻底进入了智能手机时代，由于手机的功能越来越丰富，用户需求越来越大，通信速度必须跟上手机的发展，4G的到来让移动互联网上体验上升了一个档次，至今，我们还在享受着4G带来的生活便利。<br></br><br></br>
										</p>
										<h4 style={{ color: '#303f9f' }}><div className="verticalLine"></div>3G时代，CDMA的家族狂欢</h4><br></br>
										<p className="3G">
											2G在发展后期暴露出来的FDMA的局限，让通信厂商找到了3G发展的方向。3G移动网络必须要面对新的频谱、新的标准、更快的数据传输。而CDMA系统以其频率规划简单、系统容量大、频率复用系数高、抗多径能力强、通信质量好、软容量、软切换等特点显示出巨大的发展潜力。<br></br><br></br>
											于是国际电信联盟(ITU)发布了官方第3代移动通信(3G)标准IMT-2000(国际移动通信2000标准)。在2000年5月确定WCDMA、CDMA2000、TD-SCDMA三大主流无线接口标准;2007年，WiMAX成为3G的第四大标准。<br></br><br></br>
											可见3G虽然标准还是有多家，但是也快成为CDMA的“家族企业”了。WiMAX定位是取代WiFi的一种新的无线传输方式，但后来发现WiMAX定位比较像3.5G一样，提供终端使用者任意上网的连结，这些功能3.5G/LTE都可以达到。<br></br><br></br>
											中国移动的TD-SCDMA为自主研发，因此在3G用户数量、终端数量、运营地区上都存在一定的劣势，所以失去了领跑的机会只能将翻身的希望寄予4G时代。<br></br><br></br>
										</p>
										<h4 style={{ color: '#303f9f' }}><div className="verticalLine"></div>4G时代，真正自由沟通</h4><br></br>
										<p className="4G">
											3G是高速IP数据网络，虽然上网已经变成不是什么奢侈的事情，但是并不能满足人们的需求。所以在3G普及度并不高的时候，4G的研发已经走在路上了。4G系统可称为广带接入和分布网络，可将上网速度提高到超过3G移动技术50倍，可实现三维图像高质量传输。<br></br><br></br>
											4G有多个叫法，国际电信联盟称其为IMT-Advanced技术，其它的还有B3G、BeyondIMT-2000等叫法。<br></br><br></br>
											2009年初，ITU在全世界范围内征集IMT-Advanced候选技术。2009年10月，ITU共计征集到了六个候选技术。这六个技术基本上可以分为两大类，一是基于3GPP的LTE的技术;另外一类是基于IEEE802.16m的技术。<br></br><br></br>
											2012年1月，正式审议通过将LTE-Advanced和WirelessMAN-Advanced(802.16m)技术规范确立为IMT-Advanced(俗称"4G")国际标准，我国主导制定的TD-LTE-Advanced同时成为IMT-Advanced国际标准。<br></br><br></br>
										</p>
										<h4 style={{ color: '#303f9f' }}><div className="verticalLine"></div>这个时代，可以做任何事！</h4><br></br>
										<div className="game" style={{ fontSize: '20px', textAlign: 'center' }}>
											视频直播<br></br><br></br>
											<div className="liveVideo" style={{ width: '80%', margin: '0 auto' }}>
												<video src={deathStranding} style={{ width: '100%', border: 'none', backgroundColor: 'transparent', outline: 'none' }} controls="controls" ref={(video) => this.liveVideo = video}></video><br></br><br></br>
											</div>
											手机游戏<br></br><br></br>
											<div className="mobileGame" style={{ width: '80%', margin: '0 auto' }}>
												<video src={deathStranding} style={{ width: '100%', border: 'none', backgroundColor: 'transparent', outline: 'none' }} controls="controls" ref={(video) => this.mobilGame = video}></video><br></br><br></br>
											</div>
											AND MORE.....<br></br>
										</div>
									</div>
								</div>
								<div className="iphone1" style={{ opacity: '1' }} ref={(div) => this.iphon1 = div}>
									<div className="iphone1-inner">
										<div className="inner-top">
											<div className="inner-top-speaker"></div>
										</div>
										<div className="inner-screen"></div>
										<div className="inner-bottom">
											<div className="inner-bottom-button">
												<div className="icon"></div>
											</div>
										</div>
									</div>
								</div>

								<div className="iphone2" style={{ opacity: '0' }} ref={(div) => this.iphon2 = div}>
									<div className="iphone2-inner">
										<div className="tablet" style={{ opacity: '0' }} ref={(div) => this.tablet = div}>
											<div className="table-left">
												<div className="table-camerca-1">
													<div className="table-camerca-2"></div>
												</div>
											</div>
											<div className="table-screen"></div>
											<div className="table-right">
												<div className="table-right-button"></div>
											</div>
										</div>
										<div className="iphoner2-inner-inner" ref={(div) => this.iphone2InnerInner = div}>
											<div className="inner-top">
												<div className="inner-top-camerca"></div>
												<div className="inner-top-speaker"></div>
											</div>
											<div className="inner-screen"></div>
											<div className="inner-bottom">
												<div className="inner-bottom-button"></div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div className="whiteBgc">
						</div>
					</div>

					<div className="tenthPage">
						<div className="content">
							<div className="title">
								<p className="title-1">物联网的决心</p>
								<div className="fiveG-Img">
									<div className="fiveGImg"><img src={FiveGImg} alt="" /></div>
								</div>
							</div>
							<div className="fiveG-intro">
								<div className="character character1">
										<i className="iconfont icStyle speed">&#xe61b;</i>					
										<div className="title"><p>超高速率</p></div>
										<div className="intro">
											<p>最高下载峰值速率：20GB/s</p>
											<p>下载一部4K高清电影只需要2秒</p>
											<p>如果4G是飞机速度</p>
											<p>5G就是火箭般速度</p>
										</div>
								</div>
								<div className="character character2">
									<i className="iconfont icStyle speed">&#xe601;</i>					
									<div className="title"><p>超低时延</p></div>
									<div className="intro">
										<p>时延为1ms，为4G的1%</p>
										<p>人类最快的眨眼速度是200ms</p>
										<p>也就是说在你一眨眼的瞬间</p>
										<p>主机已可往返处理100次</p>
										<p>如果比作百里赛跑</p>
										<p>发令枪一向</p>
										<p>4G刚迈出一只脚</p>
										<p>5G已经跑了100圈</p>
									</div>
								</div>
								<div className="character character3">
									<i className="iconfont icStyle speed">&#xe609;</i>					
									<div className="title"><p>超高密度</p></div>
									<div className="intro">
										<p>基站数量有望达到4G的1.5倍</p>
										<p>即使在演唱会、火车站这种高人群密度的地方</p>
										<p>每个用户的通信速率依然不受影响</p>
									</div>
								</div>
							</div>
						</div>
						<div className="future-tec">
							<div className="title"><p>未来...</p></div>
							<div className="future-tec-content">
								<div className="content content1">
									<div className="container">
										<div className="left-content">
											<svg className="icon" aria-hidden="true">
												<use xlinkHref="#icon-qiche"></use>
											</svg>
										</div>
										<div className="right-content">
											<div className="container">
												<p className="right-content-title">自动驾驶</p>
												<p className="right-content-content">5G核心网控制面与数据面彻底分离，NFV令网络部署更加灵活，从而使能分布式的边缘计算部署。边缘计算将更多的数据计算和存储从“核心”下沉到“边缘”，部署于接近数据源的地方，一些数据不必再经过网络到达云端处理，从而降低时延和网络负荷，也提升了数据安全性和隐私性。
												这对于时延要求极高、数据处理和存储量极大的自动驾驶领域而言，重要性不言而喻。</p>
											</div>
										</div>
									</div>
								</div>

								<div className="content content2">
									<div className="container">
										<div className="left-content">
											<svg className="icon" aria-hidden="true">
												<use xlinkHref="#icon-VR"></use>
											</svg>
										</div>
										<div className="right-content">
											<div className="container">
												<p className="right-content-title">虚拟现实</p>
												<p className="right-content-content">5G不仅能够使得VR情景体验更加的流畅和真实。而且5G的网络切片和边缘计算可以支持VR在许多场景中的模型应用，更重要的是，成本还比4G低，这就给运营商带来了很大的便利。
												5G还可以使得智能手机的网速实现高速传输，尤其是在手机上观看一些需要花费大量流量的VR视频，以4G的网速来说，别说看了，打开都很难。但是5G就可以使VR的这一问题解决。</p>
											</div>
										</div>
									</div>
								</div>

								<div className="content content3">
									<div className="container">
										<div className="left-content">
											<svg className="icon" aria-hidden="true">
												<use xlinkHref="#icon-mozu"></use>
											</svg>
										</div>
										<div className="right-content">
											<div className="container">
												<p className="right-content-title">远程操控</p>
												<p className="right-content-content">复杂的工业上生产离不开熟练的技术工人，而熟练的技术工人又是稀缺资源。随着人们生活水平的提高，很多人已经不愿意奔波几十里、几百里出门工作了。5G网络的普及很可能让很多人在家里上班。以前在家里办公的可能都是网络工作者，5G出现后，工人也可以在家工作了，只要连接上虚拟现实设备，就可以顺畅的远程操作工厂里面的设备。</p>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div className="end-sentence">
							<p>总之</p>
							<p>你身边的一切</p>
							<p>从汽车、自行车、冰箱、空调、电饭煲甚至桌椅</p>
							<p>未来都将轻松联网</p>
							<p>一切都尽在你的掌握</p>
							<p>如果说4G解决了人与人的连接</p>
							<p>创造了移动互联网时代</p>
							<p>那么5G将不仅提升人与人的联系</p>
							<p>更将解决人与物、物与物的连接</p>
							<p>与各行各业深度融合</p>
							<p>实现智能汽车、数字家庭、智慧城市等</p>
							<p>带来前所未有的产业革命</p>
							<p>开启万物智联的新时代</p>
							<p className="FiveG-logo"><img src={FiveGLogo} alt="logo"/></p>
						</div>

						<div className="finalPage">
							<div className="container">
								<div className="share">
									<p className="share-title">分享：</p>
									<div className="share-content">
										<a href="" className="twitter"><i className="iconfont">&#xe92a;</i></a>
										<a href="" className="weibo"><i className="iconfont">&#xe699;</i></a>
										<a href="" className="weixin"><i className="iconfont">&#xe602;</i></a>
									</div>
								</div>
								<div className="contact">
									<p className="contact-title">联系：</p>
									<div className="contact-content">vortesnail@163.com</div>
								</div>
							</div>
						</div>
				
					</div>
			
				</div>
 
			</div>
		)
	}

	handleTransToContent() {
		// window.scrollTo(0, this.getElementToPageTop(this.secondPage));
		this.secondPage.current.scrollIntoView({ behavior: 'smooth'});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true);
		this.interval1 = setInterval(() => {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			const wordColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
			this.setState({
				wordColor,
			});
		}, 100)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, true);
		clearInterval(this.interval1);
	}

	handleScroll(e) {
		const curScrollTop = e.target.scrollTop;
		const forthPageOffsetY = this.getElementToPageTop(this.forthPage) - 640 + 271;
		const fifthPageOffsetY = this.getElementToPageTop(this.fifthPage) - 539;
		const sixthPageOffsetY = this.getElementToPageTop(this.sixthPageContent) - 636;
		const eigthPageOffsetY = this.getElementToPageTop(this.eigthPage);
		const ninthPageOffsetY = this.getElementToPageTop(this.ninthPage);

		if (curScrollTop >= forthPageOffsetY) {
			const forthPageTextSize = (curScrollTop - forthPageOffsetY) / 960 * 40;
			if (forthPageTextSize < 15) {
				this.setState({
					forthPageTextSize,
				});
			}
		}

		if (curScrollTop >= fifthPageOffsetY) {
			const fifthPageBgcSize = {};
			const speed = 500;
			const percent = (curScrollTop - fifthPageOffsetY) / speed;
			fifthPageBgcSize.width = `${percent * 50 + 50}%`;
			fifthPageBgcSize.height = `${percent * 50 + 50}%`;
			fifthPageBgcSize.left = `${25 - percent * 25}%`;
			fifthPageBgcSize.top = `${10 - percent * 10}%`;
			if ((percent * 50 + 50) <= 110) {
				this.setState({
					fifthPageBgcSize,
				})
			}
		}

		if (curScrollTop >= sixthPageOffsetY) {
			const sixthPageContentBoxPos = this.state.sixthPageContentBoxPos;
			const topSpeed1 = (curScrollTop - sixthPageOffsetY) / 1100;
			const topSpeed2 = (curScrollTop - sixthPageOffsetY) / 1200;
			const topSpeed3 = (curScrollTop - sixthPageOffsetY) / 1300;
			const topSpeed4 = (curScrollTop - sixthPageOffsetY) / 1400;
			sixthPageContentBoxPos.top[0] = topSpeed1 * 30 + 10;
			sixthPageContentBoxPos.top[1] = topSpeed2 * 30 + 35;
			sixthPageContentBoxPos.top[2] = topSpeed3 * 40 + 0;
			sixthPageContentBoxPos.top[3] = topSpeed4 * 10 + 90;
			sixthPageContentBoxPos.rotateZ[0] = topSpeed4 * 80 + 216;
			sixthPageContentBoxPos.rotateZ[1] = topSpeed3 * 80 + 1207;
			sixthPageContentBoxPos.rotateZ[2] = topSpeed2 * 80 + 1170;
			sixthPageContentBoxPos.rotateZ[3] = topSpeed1 * 80 + 1220;
			if (curScrollTop - sixthPageOffsetY < 1400) {
				this.setState({
					sixthPageContentBoxPos,
				})
			}
		}

		if (curScrollTop >= eigthPageOffsetY) {
			const moveDistance = curScrollTop - eigthPageOffsetY;
			const eigthPageImgTranslateX = moveDistance;
			const eigthPageFlowImgsTop = moveDistance;
			if (moveDistance < 2100) {
				this.setState({
					eigthPageImgTranslateX,
					eigthPageFlowImgsTop,
				});
			}
		}

		if (curScrollTop > ninthPageOffsetY + 270) {
			console.log(curScrollTop, ninthPageOffsetY, curScrollTop - ninthPageOffsetY);

			if (curScrollTop - ninthPageOffsetY <= 2226) {
				this.screenContentContent.style.transform = `translateY(-${curScrollTop - ninthPageOffsetY - 270}px)`;
			}
			if (curScrollTop - ninthPageOffsetY <= 675) {
				this.iphon1.style.opacity = 1;
				this.iphon1.style.height = '552px';
				this.iphon2.style.opacity = 0;
				this.tablet.style.opacity = 0;
				this.screenContent.style.width = '238px';
				this.screenContent.style.height = '380px';
			}
			else if (curScrollTop - ninthPageOffsetY > 675 && curScrollTop - ninthPageOffsetY <= 1350) {
				this.iphon1.style.opacity = 0;
				this.iphon1.style.height = '567px';
				this.iphon2.style.opacity = 1;
				this.iphon2.style.width = '272px';
				this.tablet.style.opacity = 0;
				this.iphone2InnerInner.style.opacity = 1;
				this.screenContent.style.width = '248px';
				this.screenContent.style.height = '397px';
			}
			else if (curScrollTop - ninthPageOffsetY > 1350) {
				this.iphon1.style.opacity = 0;
				this.iphon2.style.opacity = 1;
				this.iphon2.style.width = '850px';
				this.tablet.style.opacity = 1;
				this.iphone2InnerInner.style.opacity = 0;
				this.screenContent.style.width = '680px';
				this.screenContent.style.height = '529px';
			}
		}
		
	}

	getElementToPageTop(el) {
		if (el.parentElement) {
			return this.getElementToPageTop(el.parentElement) + el.offsetTop
		}
		return el.offsetTop
	}

	handleMouseMove(e) {
		const ccs = this.whatIs5G.querySelectorAll('.hero-glich');
		const winWidthHalf = this.state.winWidth / 2;
		const winHeightHalf = this.state.winHeight / 2;
		const offsetX = [];
		const offsetY = [];
		for (let i = 0; i < ccs.length; i++) {
			offsetX[i] = (e.clientX - winWidthHalf) / 60;
			offsetY[i] = (e.clientY - winHeightHalf) / 60;
		}
		this.setState({
			offsetX,
			offsetY
		})
	}

}

export default Main;