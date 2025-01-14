import { RiSuitcaseFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import '../styles/profile.css'

export default function Profile() {
	const exp=[
		{
			company:'Minds2Mentor Privated Limited',
			duration:'September 2020 - November 2020',
			role:'Software Developer Intern',
			crux:[
				'Authentication service',
				'User Cart management service',
				'Administrator UI & Backend privileges'
			],
			certification:'link',
			detail:''
		},
	]
	const education = [
		{
			institute:'Netaji Subhas University of Technology',
			university:'NSUT',
			degree:'M.Tech (CSE)',
			score:'7.6 percentile',
			year:'2026',
			location:'delhi',
		},
		{
			institute:'Maharaja Surajmal Institute of Technology',
			university:'GGIPU',
			degree:'B.Tech (CSE)',
			score:'84.20 %',
			year:'2021',
			location:'delhi',
		},
		{
			institute:'Universal Public School',
			university:'CBSE',
			degree:'12th (PCM)',
			score:'93.40 %',
			year:'2017',
			location:'delhi',
		},
		{
			institute:'Universal Public School',
			university:'CBSE',
			degree:'10th',
			score:'9.5 percentile',
			year:'2015',
			location:'delhi',
		}
	]
	return (
		<div className="profile">
			<div className='workex'>
				<div className='head'>
					<RiSuitcaseFill/>&nbsp;
					work experience</div>
				<div className="workContent">
					{
						exp.map(work=>(
							<div className="workCard" key={work.company} text='light' border='danger' bg='dark'>
								<div className='title'>{work.company}</div>
								<div style={{borderBottom:'1px solid black', fontSize:'0.9em',fontWeight:100}}>
										{work.duration}
									</div>
								<div className="cardHeader">
									{work.role}
								</div>
								<div>
									<div className='text'>
										{
											work.crux.map((line,index)=>
												<div key={index}><span>{index+1}.&nbsp;</span>{line}</div>
											)
										}
									</div>
								</div>
								<div className='footer'>
									<div className="certiBtn">Certificate</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<div className='education'>
				<div className='head'>
					<FaBookOpen />&nbsp;
					education
				</div>
				<div className="eduContent">
					{
						education.map((edu,index)=>(
							<div className="eduCard" key={index}>
								<div 
									className="eduInfo" 
									style={{
										borderLeft: index%2===0?'10px solid crimson':'10px solid white'
									}}
								>
									<div>{edu.year}</div>
									<div>{edu.location}</div>
								</div>
								<div className="studyContent">
									<div className="institute" style={{fontSize:'1.3em',fontWeight:'bold'}}>{edu.institute}</div>
									<div className="degree" style={{color:'cyan', fontSize:'1.4em',fontWeight:'bold'}}>{edu.degree}</div>
									<div className="university" style={{fontSize:'1.1em',color:'gold'}}>{edu.university}</div>
									<div className="score" style={{fontSize:'1.1em',color:'gold'}}>@&nbsp;{edu.score}</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}