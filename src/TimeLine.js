import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PhotoGrid from "./PhtoGridExample/photo";


function TimeLine() {
return(
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">경희대학교 컴퓨터공학과 입학 (2013)</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">삼성 드림클래스 강사 활동 (2013.7 - 2013.8)</h4>
            <p>
                - 저소득층 초등,중등 학생 대상 수학강사 활동
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">프로그래밍 언어 교육봉사 (2017.9 - 2017.12)</h4>
            <p>
                - 소프트웨어 융합 대학 주관, 인근 고등학생 대상 Python 교육 봉사
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">(주)아나키 인턴 (2018.7 - 2018.8)</h4>
            <p>
                - 방중 단기 인턴 진행
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">졸업연구 진행 (2018 - 2019)</h4>
            <p>
                - 데이터 거래용 코인개발
            </p>
            <p>
                - 클라우드 기반 자율주행 카트
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">커뮤니티 프로젝트 진행 (2019.1 - 2019.2)</h4>
            <p>
                - 개발자를 위한 커뮤니티 개발 프로젝트 진행
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">현대카드 클라이언트 팀 개발자 (2019.6 - 2019.8)</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">경희대학교 졸업 (2019.8)</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
            <h4 className="vertical-timeline-element-subtitle">(주)인디펜던트 개발자 (2019.9 - 2019.12)</h4>
        </VerticalTimelineElement>
    </VerticalTimeline>
)
}

export default TimeLine
