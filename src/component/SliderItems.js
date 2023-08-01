import React from 'react';
import {  Image, Carousel } from 'react-bootstrap';
import FirstCarouselImage from './Assets/images/FirstCarouselImage.svg';
import SecondCarouselImage from './Assets/images/SecondCarouselImage.svg';
import ThirdCarouselImage from './Assets/images/ThirdCarouselImage.svg'

import './Styles/formpage.css';


function SliderItems() {
    return (
        
      <div className="innerCarouselPage">
                        <div>
                            <Carousel indicators={true} controls={false} style={{ width: 80 + '%' }}>
                                <Carousel.Item interval={6000}>

                                    <div className="textbodyx">
                                        <div>
                                            <Image src={FirstCarouselImage} fluid />
                                        </div>
                                        <br />
                                        <div className="carouselTextbody">
                                            <h4 className="headinglogin">Personalized Learning</h4>
                                            <p className="paragraphlogin"> simplifies learning and guarantees mastery in an engaging and
                                                reliable way. With ClassBook, students can learn at their own pace, get personalized feedback,
                                                and collaborate with classmates in a safe and supportive environment.

                                            </p>
                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item interval={6000}>

                                    <div className="textbodyx">
                                        <div>
                                            <Image src={SecondCarouselImage} fluid />
                                        </div>
                                        <br />
                                        <div className="carouselTextbody">
                                            <h4 className="headinglogin">Collaborative learning</h4>
                                            <p className="paragraphlogin"> simplifies learning and guarantees mastery in an engaging and
                                                reliable way. With ClassBook, students can learn at their own pace, get personalized feedback,
                                                and collaborate with classmates in a safe and supportive environment.
                                            </p>
                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item interval={6000}>

                                    <div className="textbodyx">
                                        <div>
                                            <Image src={ThirdCarouselImage} fluid />
                                        </div>
                                        <br />
                                        <div className="carouselTextbody">
                                            <h4 className="headinglogin">Real-time Feedback</h4>
                                            <p className="paragraphlogin">simplifies learning and guarantees mastery in an engaging and
                                                reliable way. With ClassBook, students can learn at their own pace, get personalized feedback,
                                                and collaborate with classmates in a safe and supportive environment.
                                            </p>
                                        </div>
                                    </div>

                                </Carousel.Item>
                            </Carousel>
                        </div>

      </div>
           
    );
}

export default SliderItems;
