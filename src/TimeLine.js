import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PhotoGrid from "./PhtoGridExample/photo";


function TimeLine() {
return(
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            /* icon={<WorkIcon />}*/
        >
            <h4 className="vertical-timeline-element-subtitle">경희대학교 컴퓨터공학과 입학</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013.7 - 2013.8"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            /* icon={<WorkIcon />}*/
        >
            <h4 className="vertical-timeline-element-subtitle">삼성 드림클래스 강사 활동</h4>
            <p>
                - 저소득층 초등,중등 학생 대상 수학강사 활동
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017.9 - 2017.12"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            /* icon={<WorkIcon />}*/
        >
            <h4 className="vertical-timeline-element-subtitle">프로그래밍 언어 교육봉사</h4>
            <p>
                - 소프트웨어 융합 대학 주관, 인근 고등학생 대상 Python 교육 봉사
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018.7 - 2018.8"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            /*icon={<WorkIcon />}*/
        >
            <h4 className="vertical-timeline-element-subtitle">(주)아나키 인턴</h4>
            <p>
                - 방중 단기 인턴 진행
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            /*icon={<SchoolIcon />}*/
        >
            <h4 className="vertical-timeline-element-subtitle">졸업연구 진행</h4>
            <p>
            - 데이터 거래용 코인개발
            </p>
            <p>
            - 클라우드 기반 자율주행 카트
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019.1 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            /*icon={<SchoolIcon />}*/
        >
            <h4 className="vertical-timeline-element-subtitle">커뮤니티 프로젝트 진행</h4>
            <p>
                - 개발자를 위한 커뮤니티 개발 프로젝트 진행
            </p>
        </VerticalTimelineElement>
        {/*<VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
                Creative Direction, Visual Design
            </p>
        </VerticalTimelineElement>*/}
        {/*<VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<StarIcon />}
        />*/}
    </VerticalTimeline>
)
}

export default TimeLine