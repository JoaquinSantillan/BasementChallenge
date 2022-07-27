import '../../styles/home.css'
import headerSvg from '../../images/header.svg'
import poligon from '../../images/Group.svg'
export const BasementHome = ()=>{
    
    
    return(
        <div className='container-home'>
            <div className='container-home-image'>
            <img className='header-image' src={headerSvg}/>
            <div className='contenido-home'>
                <p>A man can’t have enough base­ment swag   —  A man can’t have enough base­ment swag-</p>
            </div>
            <img className='poligon' src={poligon}/>
            <img className='poligon2' src={poligon}/>
            </div>
        </div>
    )
}  