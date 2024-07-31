import Link from "next/link"

export default function Home() {
  return (
   <>
      <img className="mainPhoto" src="ceceYatay2.jpg"></img>
      <h1 className="mainHeader">Merhaba. </h1>
      <h1 className="mainHeader2">Ben Ece Özenir.</h1>
      <Link href="/cv"><button className="cvBtn">Cv için tıklayınız</button></Link>

      <div className="icons">
            <div className="iconGroup jsGroup">
       <img className="js" src="javascript (1).png" alt="" />
       <h4>Javascript</h4>
            </div>
            <div className="iconGroup">
       <img src="css (1).png" alt="" />
       <h4>CSS</h4>
            </div>
            <div className="iconGroup">
                <img src="files.png" alt="" />
                <h4>HTML</h4>
            </div>
            <div className="iconGroup">
                <img src="atom.png" alt="" />
                <h4>React</h4>
            </div>
        </div>
   </>
  )
}
