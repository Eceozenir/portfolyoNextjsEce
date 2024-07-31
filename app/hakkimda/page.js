import Hakkimda from '@/data/hakkimda.json'

export default function Hakkimdas() {
    console.log(Hakkimda);
    return (
        <div className='hakkimda'>
            <div className='hakkimdaTexts'>
                {Hakkimda.map(hakkimdalar => (
                    <div key={hakkimdalar.id} className='hakkimdaItem'>
                        <h3 className='hakkimdaTitle'>{hakkimdalar.baslik}</h3>
                        <p className='hakkimdaContent'>{hakkimdalar.icerik}</p>
                    </div>
                ))}
            </div>
            <div className='hakkimdaImage'>
                <img src='ceceDuz2.jpg' alt='Ece Özenir' />
            </div>
        </div>
    )
}