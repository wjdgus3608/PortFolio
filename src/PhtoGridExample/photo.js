/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import './photo.css'

import React, { Component } from 'react'
import anime from 'animejs'
import { Flipper, Flipped } from 'react-flip-toolkit';
import img1 from './assets/기타프로젝트.jpg'
import img2 from './assets/DBLP 프로젝트.jpg'
import img3 from './assets/안드로이드 프로젝트2.jpg'
import img4 from './assets/주사위 카드 인식.jpg'
import img5 from './assets/숫자카드 인식.jpg'
import img6 from './assets/cart1.jpg'
import img7 from './assets/cart2.jpg'
import img8 from './assets/cart3.jpg'
import img9 from './assets/msa.jpg'
import img10 from './assets/hyeoncard.jpg'
import img11 from './assets/img11.png'
import img12 from './assets/img12.png'
import img13 from './assets/img13.png'
import img14 from './assets/플랫팜 사진.png'
import img15 from './assets/화해앱.png'
import img16 from './assets/메모앱.png'
const data = [
    { img: img1, title: '기타 프로젝트',type:'Used - WinApi',des:'WinApi를 이용하여 모바일 환경에서만 존재하던 기타 연주 어플리케이션을 컴퓨터 환경에서 구현하였던 개발자로서 첫걸음이었습니다.' },
    { img: img2, title: 'DBLP 프로젝트',type:'Used - C#, C++',des:'DBLP 웹사이트에서 논문과 논문 저자들의 데이터를 실시간으로 연동하여, 공동 저술 관계를 그래프로 시각화하여 나타내는 데에 목표를 둔 프로젝트이며, 데이터 중에서 가장 공동 저술 횟수가 많은 저자의 데이터를 Top-K 만큼 출력하는 기능, 공동 저술을 원하는 사용자끼리 연결해주는 공동 저자 매칭 시스템을 제공하는 프로젝트를 구현하였습니다.' },
    { img: img3, title: '안드로이드 프로젝트',type:'Used - Java, App',des:'인턴 활동을 하며 진행한 프로젝트이며, 안드로이드 스튜디오를 프레임워크로, 서버로부터 전송되는 사용자의 스코어, 공부시간, 노트필기 데이터를 이용해서 사용자들에게 효율적으로 디스플레이 하는 기록탭을 구성하는 프론트엔드 개발 역할을 맡아 수행하였습니다.' },
    { img: img4, title: '주사위 카드 인식',type:'Used - Python, Open-CV',des:'교육용 앱 개발의 기반이 되는 카드 인식 프로그램을 만들기 위해, python 환경에서 open-cv를 통해서 이미지로부터 사각형을 인식하고 해당 이미지 부분을 관심영역(ROI)로 지정한 뒤, blob detection을 이용해서 주사위 눈을 인식하는 프로그램을 성공적으로 구현하였습니다.' },
    { img: img5, title: '숫자카드 인식',type:'Used - Python, Open-CV, 머신러닝',des:'교육용 앱 개발의 기반이 되는 카드 인식 프로그램을 만들기 위해, python 환경에서 open-cv를 통해서 이미지로부터 사각형을 인식하고 해당 이미지 부분을 관심영역(ROI)로 지정한 뒤, 최근접 이웃 알고리즘인 Knn을 이용해서 숫자를 트레이닝 시키고 트레이닝 된 정보를 기반으로 숫자카드를 인식하는 프로그램을 성공적으로 ' },
    { img: img6, title: '자율주행 카트 영상인식1',type:'Used - Python, Open-CV',des:'클라우드 기반 자율주행 카트, 위치 인식 부분을 맡아 졸업 연구를 진행하였습니다. 사전에 부여될 지역 정보를 사람이 인식할 수 있는 건물 단면도(그림1)를 일정한 사각형 크기로 나누어 하나의 노드로 간주하고 그래프화 하는 과정을 거쳤습니다.(그림 2)' },
    { img: img7, title: '자율주행 카트 영상인식2',type:'Used - Python, Open-CV',des:'다음으로, 각 노드는 하나의 지역으로 설정하고 지역의 해당 정보를 가지도록 설계하였고, 기준이 되는 Reference Frame 또한 부여하였습니다. 이 그래프를 통해서 카트가 인식할 수 있는 맵을 가지게 하였습니다.' },
    { img: img8, title: '자율주행 카트 영상인식3',type:'Used - Python, Open-CV',des:'그 다음, OPEN-CV의 Feature Matching 알고리즘의 한 종류인 ORB방식을 사용하여  미리 부여된 맵상의 모든 Reference Frame과 라즈베리 카메라의 실시간 영상을 비교하는 과정을 거쳤습니다. 그 다음, 사전에 부여된 모든 Frame과 현재의 카메라로 보이는 영상을 비교하여 도출된 결과값을 정규화 과정을 거침으로써, 영상을 통해 위치를 인식하고 주행경로를 설정하는 프로젝트를 성공적으로 마무리 하였습니다. ' },
    { img: img9, title: '개발자 커뮤니티 프로젝트',type:'Used - Node.js, Docker ...', des:'개발자 커뮤니티 개발을 주제로 하는 프로젝트를 진행하였으며, MSA 구조를 기반으로 설계를 하여 Git과 Jenkins를 이용한 DevOps를 추구하였씁니다. Docker와 API Gateway를 이용해 서비스를 이미지 형태로 개발 및 배포 하는 구조로 설계하고 개발을 진행하였습니다.' },
    {img: img10, title: '현대카드 개인화 지도 앱 프로젝트',type:'Used - Android Studio(Java), express.js, RoomDB', des:'현대카드에서 진행한 프로젝트이며 거래데이터를 기반으로 맛집을 탐색하는 개인화 지도 앱을 만드는 프로젝트를 진행하였습니다.'},
    {img: img11, title: '프로그래머스 앱 개발챌린지(윈터코딩)',type:'Used - Android Studio(Java)', des:'프로그래머스에서 진행한 윈터 코딩 챌린지에 참여하여 시간표 안드로이드 앱을 성공적으로 제작하였습니다.'},
    {img: img12, title: '프로그래머스 웹 개발챌린지(당근마켓)',type:'Used - Docker, React.js, TypeScript, Express.js, MySQL', des:'프로그래머스에서 진행한 당근마켓 웹개발 챌린지에 참여하여 당근마켓 프론트 엔트 웹을 제작하였습니다.'},
    {img: img13, title: '크롤링 프로그램 개발(외주 프로젝트)',type:'Used - Python, Selenium, BeautifulSoup4', des:'외주 프로젝트로 진행한 프로젝트이며 헬스장 정보를 크롤링하여 데이터 입력을 자동화 하는 크롤링 시스템을 성공적으로 개발하였습니다.'},
    {img: img14, title: '디비 업데이트 프로젝트',type:'Used - Android Studio(Java), SQLite', des:'(주)플랫팜 개발 과제로 진행한 프로젝트이며, 원격 디비를 효과적으로 로컬디비에 업데이트 하는 알고리즘을 구현하는 과제였습니다. 저는 기존 로컬디비 인스턴스를 바탕으로 새로 업데이트 된 디비만 업데이트 하고 캐싱하는 방식을 사용하여 효율적인 업데이트를 하도록 개발하였습니다.'},
    {img: img15, title: '프로그래머스 앱 개발챌린지(버드뷰)',type:'Used - Android Studio(Kotlin)', des:'코틀린으로 개발한 첫 프로젝트이며, 과제에서 주어진 프로토타입과 동일하게 구성함은 물론, 애니메이션, 데이터 통신 및 캐싱 또한 고려하여 빠르고 반응성 좋은 앱을 만들었습니다.'},
    {img: img16, title: '프로그래머스 앱 개발챌린지(라인)',type:'Used - Android Studio(Kotlin), ACC(LiveData, Lifecycles, RoomDB) 구조', des:'MVVM 디자인 패턴을 기반으로 진행하였습니다. 챌린지의 주 목표인 메모에 카메라, 앨범, URL을 통한 이미지 첨부 기능을 가진 메모 앱을 성공적으로 구현하였습니다.'}
]

class PhotoGrid extends Component {
    applyZIndex = el => {
        debugger
        el.style.zIndex = 3
    }
    applyZIndexHeader = el => {
        el.style.zIndex = 4
    }
    removeZIndex = el => {
        debugger
        el.style.zIndex = ''
    }

    animateIn = () => {
        anime({
            targets: this.el.querySelectorAll('*[data-fade-in]'),
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            elasticity: 0,
            ease: 'easeOutSine',
            delay: (d, i) => i * 60
        })
    }

    state = { focused: false }
    togglefocused = () => {
        this.setState({ focused: !this.state.focused })
    }
    render() {
        const { focused } = this.state

        return (
            <Flipper flipKey={focused}>
                <div className="photoGridExample" ref={el => (this.el = el)}>
                    <div className="photoGrid">
                        {data.map((d, i) => {
                            return (
                                <div>
                                    {i !== focused && (
                                        <div
                                            className="photoGridSquare"
                                            onClick={() => {
                                                this.setState({ focused: i })
                                            }}
                                        >
                                            <Flipped
                                                flipId={`heading-${i}`}
                                                onStart={this.applyZIndexHeader}
                                                onComplete={this.removeZIndex}
                                                translate
                                            >
                                                <h2 className="photoHeading">{data[i].title}</h2>
                                            </Flipped>{' '}
                                            <Flipped
                                                flipId={`img-${i}`}
                                                onStart={this.applyZIndex}
                                                onComplete={this.removeZIndex}
                                            >
                                                <img src={d.img} alt="" className="photoGridImg" />
                                            </Flipped>
                                            <Flipped
                                                flipId={`shader-${i}`}
                                                onStart={this.applyZIndex}
                                                onComplete={this.removeZIndex}
                                            >
                                                <div className="photoGridShader photoGridShaderHidden" />
                                            </Flipped>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    {typeof focused === 'number' && (
                        <div
                            className="photoGridSquareExpanded"
                            onClick={() => {
                                this.setState({ focused: null })
                            }}
                        >
                            <Flipped
                                flipId={`img-${focused}`}
                                onComplete={this.animateIn}
                                onStart={this.applyZIndex}
                            >
                                <img src={data[focused].img} alt="" className="photoGridImg" />
                            </Flipped>

                            <Flipped flipId={`shader-${focused}`} onStart={this.applyZIndex}>
                                <div className="photoGridShader" />
                            </Flipped>
                            <div className="photoGridFocused">
                                <div className="photoGridContentContainer">
                                    <p data-fade-in className="photoGridLead">
                                        {data[focused].title}
                                    </p>
                                    <p data-fade-in>
                                        &nbsp;&nbsp;{data[focused].des}
                                    </p>
                                    <br/>
                                    <p data-fade-in>
                                        {data[focused].type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Flipper>
        )
    }
}

export default PhotoGrid
