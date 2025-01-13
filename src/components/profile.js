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
	return (
		<div className="profile">
			<div class='workex'>
				<div className='head'>
					<RiSuitcaseFill color="gold"/>&nbsp;
					work experience</div>
				<div className="workContent">
					{
						exp.map(work=>(
							<div className="workCard" text='light' border='danger' bg='dark'>
								<div class='title'>{work.company}</div>
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
												<div><span>{index+1}.&nbsp;</span>{line}</div>
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
					<FaBookOpen color="gold"/>&nbsp;
					education
				</div>
			</div>
		</div>
	)
}