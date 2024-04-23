import React, { useRef, useEffect } from 'react';
import './Testimonials.css';
import next_icon from '../../Assets/next-icon.png';
import back_icon from '../../Assets/back-icon.png';
import user_1 from '../../Assets/user-1.jpg';
import user_2 from '../../Assets/user-2.jpg';
import user_3 from '../../Assets/user-3.jpg';
import user_4 from '../../Assets/user-4.jpg';


const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < -50) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials container'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" className='user-img' />
                <div>
                  <h3>Raja</h3>
                  <span>Saravanampatti, Coimbatore</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde mollitia eveniet laboriosam! Aut ea, facere explicabo cumque consequuntur cupiditate molestiae similique asperiores ratione.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" className='user-img' />
                <div>
                  <h3>Raja</h3>
                  <span>Saravanampatti, Coimbatore</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde mollitia eveniet laboriosam! Aut ea, facere explicabo cumque consequuntur cupiditate molestiae similique asperiores ratione.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" className='user-img' />
                <div>
                  <h3>Raja</h3>
                  <span>Saravanampatti, Coimbatore</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde mollitia eveniet laboriosam! Aut ea, facere explicabo cumque consequuntur cupiditate molestiae similique asperiores ratione.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" className='user-img' />
                <div>
                  <h3>Raja</h3>
                  <span>Saravanampatti, Coimbatore</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde mollitia eveniet laboriosam! Aut ea, facere explicabo cumque consequuntur cupiditate molestiae similique asperiores ratione.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;