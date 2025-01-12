import '../styles/navbar.css'

export default function Navbar({item, handleClick}) {
    return (
        <div 
            className='link'
            onClick={handleClick}
        >
            {item}
        </div>
    )
}