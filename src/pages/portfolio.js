import { useState } from 'react'
import '../styles/portfolio.css'

export default function Portfolio() {
	const skills = {
		all:'all',
		vuejs:'VueJS',
		mern:'MERN',
		nodejs:'NodeJS',
		ml:'ML',
	}
	const projects = [
		{
			title:'WeShare',
			summary:'A SNS with functionalities like sign-up/login, uploading posts, viewing user, web-lock etc.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[skills.mern],
			bgUrl:'https://www.shutterstock.com/image-vector/blue-thunder-bolt-light-electric-600nw-2507765715.jpg'
		},
		{
			title:'breast Cancer Detection',
			summary:'A SNS with functionalities like sign-up/login, uploading posts, viewing user, web-lock etc.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://colab.research.google.com/drive/174ATRx3LLqxnnEBcgk6j8QiJ2r48XkQA?usp=sharing'			,
			tags:[skills.ml],
			bgUrl:'https://www.shutterstock.com/image-vector/blue-thunder-bolt-light-electric-600nw-2507765715.jpg'
		},		
		{
			title:'chatApp',
			summary:'Offers to chat with friends on login is performed. Can send messages to multiple users at a given time. offers option of personal chat.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[skills.mern],
			bgUrl:'https://static.vecteezy.com/system/resources/thumbnails/003/517/732/small/dark-grunge-cement-background-with-scratches-horror-dark-wall-texture-photo.jpg'
		},
		{
			title:'Quiz',
			summary:'An website offering quiz on differnt topic of the world. The website offers 10 multiple choice questions on selected topic and keeps track of the rght answers.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[skills.vuejs],
			bgUrl:'https://c4.wallpaperflare.com/wallpaper/537/870/560/geometry-cyberspace-lines-abstract-wallpaper-preview.jpg'
		},
		{
			title:'Nuclear',
			summary:'An website offering quiz on differnt topic of the world. The website offers 10 multiple choice questions on selected topic and keeps track of the rght answers.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[skills.ml,skills.mern],
			bgUrl:'https://media.istockphoto.com/id/1461883500/vector/dark-grainy-color-gradient-wave-background-purple-red-yellow-blue-colors-banner-poster-cover.jpg?s=612x612&w=0&k=20&c=xW7oY-iPou94T8fnpkPlGX83IEh-LeUNOZiMXcoXRSg='
		},
	]
	
	const [visibleProjects,setVisibleProjects] = useState(projects)
	const [activeSkill,setActiveSkill] = useState(skills.all)

	const handleClick = (skill) => {
		console.log(skill)
		setActiveSkill(skill)
		if(skill===skills.all) {
			setVisibleProjects(projects)
			return;
		}
		const newList = projects.filter(project=>{
			for(const tag of project.tags){
				if(tag===skill) return project
			}
			return null
		})
		setVisibleProjects(newList)
	}
	
	return (
		<div className="portfolio">
			<div className='tags'>
			{
				Object.keys(skills).map((key) => 
					<span className='tag' style={{color:activeSkill===skills[key]?'blue':'white'}}key={skills[key]} onClick={()=>handleClick(skills[key])}>{skills[key]}</span>
				)
			}
			</div>
			<div className='work'>
				{
					visibleProjects.map(item=>(
						<div className='taskCard' key={item.title}>
							<div className='taskTitle'>{item.title}</div>
							<div 
								className='taskBody'
								style={{
									backgroundImage: `url(${item.bgUrl})`
								}}
							>
								<div className='taskSummary'>{item.summary}</div>
								<div className='githubLink'>
								</div>
							</div>
							<div className='siteLink'>
								<a href={item.siteLink} style={{textDecoration:'none'}}>
									<span className='spanName'>site link</span>
								</a>
								<a href={item.githubLink}  style={{textDecoration:'none'}}>
									<span className='spanName'>github link</span>
								</a>
							</div>
							<div className='taskTags'>
							{
								item.tags.map(tag=>(
									<span className='taskTag' key={tag}>{tag}</span>
								))
							}
						</div>							
						</div>
					))
				}
			</div>
		</div>
	)
}