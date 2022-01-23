import React from 'react';
import './Team.scss';
import Accordion from './Accordion';

function Team(props) {
    return (
        <div className='team'>
            <div className="team-accordion">
                <div className="container">
                    <h1 className='team__title'>Наша команда</h1>
               
                                <Accordion  items={[
                                    {
                    header: <h4>АРКАДИЙ</h4>,
                    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ex quidem dignissimos corporis ut quaerat eveniet magnam accusantium facilis animi consectetur dolore, eum placeat earum optio magni qui? Molestiae.</div>
                    }, {
                    header: <h4>ЕЛЕНА</h4>,
                    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ex quidem dignissimos corporis ut quaerat eveniet magnam accusantium facilis animi consectetur dolore, eum placeat earum optio magni qui? Molestiae.</div>
                    },
                    {
                    header: <h4>ВИКТОРИЯ</h4>,
                    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ex quidem dignissimos corporis ut quaerat eveniet magnam accusantium facilis animi consectetur dolore, eum placeat earum optio magni qui? Molestiae.</div>
                    },
                    {
                    header: <h4>ХУАН</h4>,
                    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ex quidem dignissimos corporis ut quaerat eveniet magnam accusantium facilis animi consectetur dolore, eum placeat earum optio magni qui? Molestiae.</div>
                    }, {
                    header: <h4>СЕМЕН</h4>,
                    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ex quidem dignissimos corporis ut quaerat eveniet magnam accusantium facilis animi consectetur dolore, eum placeat earum optio magni qui? Molestiae.</div>
                    },
                    {
                    header: <h4>ЖАННА</h4>,
                    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur ex quidem dignissimos corporis ut quaerat eveniet magnam accusantium facilis animi consectetur dolore, eum placeat earum optio magni qui? Molestiae.</div>
                    }
                    ]}/>
                </div>
            </div>
            <div className="team__inner">
                <div className="team__decor-wr">
                
                </div>
                <div className="team__contain">
                    <div className="container">
                        <div className="team__gread grid">
                            <div className="team__item">
                                <img src={process.env.PUBLIC_URL + `images/Team-img/jack-irwin-1.jpg`} alt="Портрет"/>
                                <span className='team__name'>АРКАДИЙ</span>
                            </div>

                            <div className="team__item">
                                <img src={process.env.PUBLIC_URL + `images/Team-img/jack-irwin-2.jpg`} alt="Портрет"/>
                                <span className='team__name'>ЕЛЕНА</span>
                            </div>

                            <div className="team__item">
                                <img src={process.env.PUBLIC_URL + `images/Team-img/jack-irwin-3.jpg`} alt="Портрет"/>
                                <span className='team__name'>ВИКТОРИЯ</span>
                            </div>

                            <div className="team__item">
                                <img src={process.env.PUBLIC_URL + `images/Team-img/jack-irwin-4.jpg`} alt="Портрет"/>
                                <span className='team__name'>ХУАН</span>
                            </div>

                            <div className="team__item">
                                <img src={process.env.PUBLIC_URL + `images/Team-img/jack-irwin-5.jpg`} alt="Портрет"/>
                                <span className='team__name'>СЕМЕН</span>
                            </div>

                            <div className="team__item">
                                <img src={process.env.PUBLIC_URL + `images/Team-img/jack-irwin-6.jpg`} alt="Портрет"/>
                                <div className='team__name'>ЖАННА</div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;