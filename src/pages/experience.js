import React from 'react'
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';



function experience(){
    return(
		<div className="experience-section mb-5">
      <p className="experiencePage-name text-center pt-5">EXPERIENCE</p>
      <p className="experiencePage-subheading text-center">A variety of experience across different organizations</p>
      <VerticalTimeline className="mt-5">
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Oct'20 - present"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<WorkIcon/>}
			>
				<h3 className="vertical-timeline-element-title">SDE Intern</h3>
				<h4 className="vertical-timeline-element-subtitle"><a href="https://computational-beta.zeblok.com/" style={{textDecoration:'none',color:'#f5aa09'}}>Zeblok Computational Inc. </a> New Jersey, US</h4>
				<p>
				Involved in performing analytics of their data to get meaningful results, end to end testing, platform releases, UI refactoring with backend API's.  
				</p>
  			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="April'20 - July'20"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<WorkIcon/>}
				>
				<h3 className="vertical-timeline-element-title">Frontend Developer Intern</h3>
				<h4 className="vertical-timeline-element-subtitle"><a href="https://computational-beta.zeblok.com/" style={{textDecoration:'none',color:'#f5aa09'}}>Zeblok Computational Inc. </a> New Jersey, US</h4>
				<p>
        Involved in developing admin-side panel of our AI platform, refactoring UI/UX, implemented new features for users. 
				</p>
			</VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Mar'20"
    iconStyle={{ background: '#f5aa09', color: '#fff' }}
    icon={<WorkIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Freelancer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://arkynex.com/" style={{textDecoration:'none',color:'#f5aa09'}}>Arkynex</a>, Pune India</h4>
    <p>
      Developed the Frontend of their Education Startup with admin panel to upload data and hosted it completely on web. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan'20 - feb'20"
    iconStyle={{ background: '#f5aa09', color: '#fff' }}
    icon={<WorkIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.bharatrath.com/" style={{textDecoration:'none',color:'#f5aa09'}}>Bharatrath</a>, Pune India</h4>
    <p>
      Worked on Admin side of its Ecommerce application and implementing new features for users.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#f5aa09', color: '#fff' }}
    icon={<WorkIcon/>}
  />
</VerticalTimeline>
		</div>
    )
}
export default experience