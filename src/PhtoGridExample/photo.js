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
import img9 from './assets/cart3.jpg'
const data = [
    { img: img1, title: '기타 프로젝트',des:'' },
    { img: img2, title: 'DBLP 프로젝트',des:'b' },
    { img: img3, title: '안드로이드 프로젝트',des:'c' },
    { img: img4, title: '주사위 카드 인식',des:'' },
    { img: img5, title: '숫자카드 인식',des:'' },
    { img: img6, title: '자율주행 카트 영상인식1',des:'' },
    { img: img7, title: '자율주행 카트 영상인식2',des:'' },
    { img: img8, title: '자율주행 카트 영상인식3',des:'' },
    { img: img9, title: '진행중 프로젝트',des:'' }
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
                                        {data[focused].des}
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