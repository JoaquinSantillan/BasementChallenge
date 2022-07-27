import '../../styles/footer.css'
import footer from '../../images/footer.svg'
import basemeStudio from '../../images/basement.studio 2018.svg'
export const Footer =()=>{

    return(
        <footer className='footer'>
            <img className='footer-image' src={footer}/>
            <img className='basemenetS' src={basemeStudio}/>
        </footer>
    )
}