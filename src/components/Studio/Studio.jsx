import React from 'react'
import disney from "../../images/disney.webp"

const cardsData = [
  { title: 'Card 1', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132",imageUrl: disney },
  { title: 'Card 2', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483", imageUrl: 'image2.jpg' },
  { title: 'Card 3', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549", imageUrl: 'image3.jpg' },
  { title: 'Card 4', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512", imageUrl: 'image4.jpg' },
  { title: 'Card 5', videoUrl:" https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208", imageUrl: 'image5.jpg' },
];

function Studio() {
    console.log(cardsData);
  return (
        <div>
            <div>
                <div className="flex flex-wrap pt-10 pl-40">
                    {cardsData.map((card, index) => (
                        <div key={index} className="w-1/5 p-2">
                            <div className="max-w-sm rounded overflow-hidden relative bg-black shadow-lg z-10">
                                <img className="w-full h-32   hover:bg-transparent" src={card.imageUrl} alt={card.title} />
                                <div>
                                    <video className="w- h- object-cover absolute inset-0" autoPlay loop muted>
                                        <source src={card.videoUrl} type="video/mp4" />
                                    </video>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Studio
