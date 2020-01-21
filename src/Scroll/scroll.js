import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import './assets/scroll.css';
import Photo from '../PhtoGridExample/photo.js';
import Face from './face.jpg'
import Fade from 'react-reveal/Fade';
import TimeLine from '../TimeLine.js'
import Bar from '../bar.js'
import Gallery from '../Gallery/gallery.js'

const ScrollOverPack = ScrollAnim.OverPack;


function Demo() {
    return (<div>
        <div className="pack-page page0">
            <QueueAnim key="0">
                <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
                <div className="page-title" key="title">
                    <p>Intro</p>
                </div>
                </TweenOne>
                <img src={Face} width="300vw" height="400vh" />
                <div className="page-description" key="c">
                    <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
                        <Fade>
                            한 분야의 특기만을 내세울수 있는 '자신감'이 아닌 '부족함'에서 오는 배움의 자세로,<br/>
                            새로운 지식을 빠르게 습득하고 상황에 맞게 적응할 수 있는 항상 성장해 나갈 준비가 되어있는<br/>
                            '성장'하는 개발자 조정현 입니다.
                            <br/><br/>
                            Git Hub : <a href="https://github.com/wjdgus3608">https://github.com/wjdgus3608</a>
                        </Fade>
                    </TweenOne>
                </div>
            </QueueAnim>
        </div>

        <ScrollOverPack
            id="page1"
            className="page1"
            replay
            playScale="50vh"
        >
            <TweenOne className="tween-one" key="1" animation={{ opacity: 1 }}>
                <div className="page-title" key="title">
                    <p>개발 능력</p>
                </div>
            </TweenOne>
            <QueueAnim key="1">
                <TweenOne className="tween-one" key="2" animation={{ opacity: 1 }}>
                    <Fade>
                        c/c++
                        <div key="0" className="demo-content" >
                            <Bar num="60"/>
                        </div>
                        Java
                        <div key="0" className="demo-content" >
                            <Bar num="60"/>
                        </div>
                        JavaScript (ES6)
                        <div key="0" className="demo-content" >
                            <Bar num="50"/>
                        </div>
                        Node.js
                        <div key="0" className="demo-content" >
                            <Bar num="50"/>
                        </div>
                        React.js
                        <div key="0" className="demo-content" >
                            <Bar num="40"/>
                        </div>
                        TypeScript
                        <div key="0" className="demo-content" >
                            <Bar num="20"/>
                        </div>
                        Kotlin
                        <div key="0" className="demo-content" >
                            <Bar num="20"/>
                        </div>
                    </Fade>
                </TweenOne>
               {/* <div key="0" className="demo-content" />
                <div key="1" className="demo-content" style={{ backgroundColor: '#F38EAD' }} />
                <div key="2" className="demo-content" />
                <div key="3" className="demo-content" />*/}
            </QueueAnim>
        </ScrollOverPack>

        <ScrollOverPack
            id="page4"
            className="page2"
            appear={false}
        >
            <QueueAnim key="1">
            <TweenOne className="tween-one" key="3" animation={{ opacity: 1 }}>
                <div className="page-title" key="title">
                    <p>프로젝트</p>
                </div>
            </TweenOne>
                    <Photo/>
            </QueueAnim>
        </ScrollOverPack>

        <ScrollOverPack
            className="pack-page page3"
            always={false}
            id="page2"
        >
            <QueueAnim key="1">
            <TweenOne className="tween-one" key="5" animation={{ opacity: 1 }}>
                <div className="page-title" key="title">
                    <p>활동 이력</p>
                </div>
            </TweenOne>
                <TimeLine/>
            </QueueAnim>
        </ScrollOverPack>

        <ScrollOverPack
            id="page3"
            className="pack-page page4"
            style={{ backgroundColor: '#174270' }}
            playScale={0.8}
        >
            <QueueAnim key="1">
            <TweenOne
                animation={{ opacity: 1 }}
                style={{ opacity: 0 }}
                key="title"
                className="page2-title"
            >
                <div className="page-title" key="title">
                    <p>기타 활동</p>
                </div>
            </TweenOne>
            <Animate key="0" transitionName="fade" transitionAppear>
                <div className="demo-content" />
            </Animate>
            <TweenOne
                className="demo-content"
                animation={{ y: 0, opacity: 1 }}
                key="1"
                style={{ transform: 'translateY(100px)', opacity: 0 }}
            />
                <div key="0" className="demo-content3" >
                    <Gallery/>
                </div>
            </QueueAnim>
        </ScrollOverPack>
    </div>);
}


export default Demo
