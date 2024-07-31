import Projelerim from '@/data/projelerim.json';

export default function Projelerims(){
    console.log(Projelerim);
    return(
        <div className='allProjects'>
            {Projelerim.map(projeler => (
                <div key={projeler.id}>
                    <img key={projeler.id} className='projectsImg' src={projeler.img}></img>
                    <h3 className='projectsTitles'>{projeler.title}</h3>
                    <a href={projeler.btn}><button className='projectsButtons'>Detay Gör</button></a>  
                </div>
            ))}
        </div>
    )
}