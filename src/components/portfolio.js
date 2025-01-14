import '../styles/portfolio.css'

export default function Portfolio() {
	const tags=['MERN','VueJS','Node','ML']
	const work = [
		{
			title:'WeShare',
			summary:'A SNS with functionalities like sign-up/login, uploading posts, viewing user, web-lock etc.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[tags[2]],
			bgUrl:'https://www.shutterstock.com/image-vector/blue-thunder-bolt-light-electric-600nw-2507765715.jpg'
		},
		{
			title:'chatApp',
			summary:'Offers to chat with friends on login is performed. Can send messages to multiple users at a given time. offers option of personal chat.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[tags[1]],
			bgUrl:'https://static.vecteezy.com/system/resources/thumbnails/003/517/732/small/dark-grunge-cement-background-with-scratches-horror-dark-wall-texture-photo.jpg'
		},
		{
			title:'Quiz',
			summary:'An website offering quiz on differnt topic of the world. The website offers 10 multiple choice questions on selected topic and keeps track of the rght answers.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[tags[1]],
			bgUrl:'https://c4.wallpaperflare.com/wallpaper/537/870/560/geometry-cyberspace-lines-abstract-wallpaper-preview.jpg'
		},
		{
			title:'Nuclear',
			summary:'An website offering quiz on differnt topic of the world. The website offers 10 multiple choice questions on selected topic and keeps track of the rght answers.',
			githubLink:'https://aniyagnik/nodejsproject19.git',
			siteLink:'https://project1-19.herokuapp.com/',
			tags:[tags[0],tags[3]],
			bgUrl:'https://media.istockphoto.com/id/1461883500/vector/dark-grainy-color-gradient-wave-background-purple-red-yellow-blue-colors-banner-poster-cover.jpg?s=612x612&w=0&k=20&c=xW7oY-iPou94T8fnpkPlGX83IEh-LeUNOZiMXcoXRSg='
		},
		
	]
	return (
		<div className="portfolio">
			<div className='tags'>
			<span className='tag'>All</span>
			{
				tags.map(tag=>(
					<span className='tag' key={tag}>{tag}</span>
				))
			}
			</div>
			<div className='work'>
				{
					work.map(item=>(
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