import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard/index';

function App() {
  const [state, setState] = useState(true);
  const iconClick = () => {
    setState(false);
  };
  const iconClick2 = () => {
    setState(true);
  };
  return (
    <div className="container">
      <nav>
        <h1>
          THE <span className='heading'>PRODUCT</span> PLATFORM
        </h1>
        <div className="right">
          <p>
            Learn
            <img src="/arrowvector.svg" alt="" />
          </p>
          <p>
            Practice
            <img src="/arrowvector.svg" alt="" />
          </p>
          <img src="/profilepic.png" alt="" />
        </div>
      </nav>
      <p>Back to Questions</p>
      <div className="body">
        <div className="card">
          <div className="top">
            <div className="">
          <button className='card-btn1'>Design</button>
          <button className='card-btn2'>Technology</button>
          </div>
          <img src="/rocketlogo.png" alt="" />
          </div>
          <p>
            <b>
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup?{' '}</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
            viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
            donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
            magna cursus se?{' '}
          </p>
        </div>
        <UserCard />
      </div>
      {state ? (
        <img
          src="/icon.svg"
          alt=""
          className="select-icon "
          onClick={iconClick}
        />
      ) : (
        <>
          <div className="list">
            <ul>
              <li>
               <span className='menu-list'>Report an issue</span>  <img src="/reporticon.png" alt="" />
              </li>
              <li>
                <span className='menu-list'>Share feebback</span> <img src="/feedbackicon.png" alt="" />
              </li>
              <li>
               <span className='menu-list'>Give suggestion</span>  <img src="/suggestionicon.png" alt="" />
              </li>
              <li>
                <span className='menu-list'>contact us </span><img src="/contacticon.png" alt="" />
              </li>
            </ul>
          </div>
          <img
            src="/cross.svg"
            alt=""
            className="select-icon "
            onClick={iconClick2}
          />
        </>
      )}
    </div>
  );
}

export default App;
