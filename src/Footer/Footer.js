import React, { Component } from 'react';
import './style.css';


class Footer extends Component {
    constructor(props) {
		super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }
    render() {
        return (
            <div className="bottomNav" ref={(div) => this.bottomNav = div}>
                <div className="container">
                    <ul className="left-container">
                        <li className="share">SHARE</li>
                        <li className="share-icon"><i className="iconfont">&#xe92a;</i></li>
                        <li className="share-icon"><i className="iconfont">&#xe699;</i></li>
                        <li className="share-icon"><i className="iconfont">&#xe602;</i></li>
                    </ul>
                    <div className="middle-container" ref={(div) => this.middleContainer = div}>
                        <div className="year-container" ref={(div) => this.yearContainer = div}>
                            <p>1870</p>
                            <p>1880</p>
                            <p className="use-year  middle-year" ref={(p) => this.firstYear = p}>1887</p>
                            <p className="use-year" >1980</p>
                            <p className="use-year" >1990</p>
                            <p className="use-year" >2000</p>
                            <p className="use-year" >2010</p>
                            <p className="use-year" >2019</p>
                            <p>2020</p>
                            <p>2030</p>
                            <p>2040</p>
                        </div>
                    </div>
                    <div className="right-container">
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, true);
    }
    
    handleScroll(e) {
        const curScrollTop = e.target.scrollTop;
        const yearEleWidth = this.firstYear.offsetWidth;
        const midYearContainerP = this.yearContainer.querySelectorAll('.use-year');
        console.log(curScrollTop, yearEleWidth);

        if (curScrollTop <= 769) {
            this.middleContainer.style.opacity = '0';
        }
        else if (curScrollTop > 769 && curScrollTop < 12425) {
            this.bottomNav.style.opacity = '1';
            this.middleContainer.style.opacity = '1';
            if (curScrollTop > 769 && curScrollTop <= 1762) {
                this.yearContainer.style.transform = `translateX(0px)`;
                this.rebuildYearStyle(midYearContainerP);
                midYearContainerP[0].className += ' middle-year';
            } else if (curScrollTop > 1762 && curScrollTop <= 2579) {
                this.yearContainer.style.transform = `translateX(-${yearEleWidth}px)`;
                this.rebuildYearStyle(midYearContainerP);
                midYearContainerP[1].className += ' middle-year';
            } else if (curScrollTop > 2579 && curScrollTop <= 3570) {
                this.yearContainer.style.transform = `translateX(-${yearEleWidth*2}px)`;
                this.rebuildYearStyle(midYearContainerP);
                midYearContainerP[2].className += ' middle-year';
            } else if (curScrollTop > 3570 && curScrollTop <= 3957) {
                this.yearContainer.style.transform = `translateX(-${yearEleWidth*3}px)`;
                this.rebuildYearStyle(midYearContainerP);
                midYearContainerP[3].className += ' middle-year';
            } else if (curScrollTop > 3957 && curScrollTop <= 10440) {
                this.yearContainer.style.transform = `translateX(-${yearEleWidth*4}px)`;
                this.rebuildYearStyle(midYearContainerP);
                midYearContainerP[4].className += ' middle-year';
            } else if (curScrollTop > 10440) {
                this.yearContainer.style.transform = `translateX(-${yearEleWidth*5}px)`;
                this.rebuildYearStyle(midYearContainerP);
                midYearContainerP[5].className += ' middle-year';
            }
        }
        else if (curScrollTop > 12425) {
            this.bottomNav.style.opacity = '0';
        }
    }

    rebuildYearStyle(midYearContainerP) {
        for (let i = 0, j = midYearContainerP.length; i < j; i++) {
            midYearContainerP[i].className = 'use-year';
        }
    }

}

export default Footer;