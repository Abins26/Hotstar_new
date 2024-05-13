import React,{useState} from 'react'
import disney from "../../images/disney.png"
import marvel from  "../../images/marvel.png"
import starwar from "../../images/starwar.jpg"
import starwar2 from "../../images/imagesstarwar.png"
import pixar from "../../images/pixar.jpeg"
import ngo from "../../images/ngo.png"

const cardsData = [
  { title: 'Card 1', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132",imageUrl: disney },
  { title: 'Card 2', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483", imageUrl: pixar },
  { title: 'Card 3', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549", imageUrl: marvel },
  { title: 'Card 4', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512", imageUrl: starwar2 ,width:"204px",height:'100px' },
  { title: 'Card 5', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208", imageUrl: ngo },
  { title: 'Card 6', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594", imageUrl: 'image5.jpg' },

];
console.log(cardsData);
function Studio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
        <div>
            <div>
                <div className="flex flex-wrap pt-10 pl-40 pr-24 h-56 bg-red-600">
                    {cardsData.map((card, index) => (
                        <div key={index} onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)} className="w-1/6 p-2">
                            <div className="max-w-sm rounded overflow-hidden relative bg-black shadow-lg z-10">
                                <img className="w-screen h-28  hover:bg-transparent transition-opacity duration-800" src={card.imageUrl} alt={card.title} 
                                style={{ opacity: hoveredIndex === index ? 0.3 : 1 }}
                                    />
                                <div>
                                {hoveredIndex === index && (
                                    <video className="w-52 h-28 object-cover absolute inset-0" autoPlay loop muted>
                                        <source src={card.videoUrl} type="video/mp4" />
                                    </video>
                                )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Studio;
