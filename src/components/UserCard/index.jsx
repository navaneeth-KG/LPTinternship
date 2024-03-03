import React from 'react';
import './UserCard.css'


const UserCard = () => {
  return (
    <div className='usercard'>
      <div className="user-details">
        <img src="/profilepic.png" alt="" />
        <div className="">
          <p><b>Neha Bhat</b> (YOU)</p>
          <p>jun 27,2023</p>
        </div>
      </div>
      <p className='para'>
        Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim
        ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum
        lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit
        elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in
        vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam.
        Bibendum amet mi.... Show more
      </p>
      <input type="text"  placeholder='Add a comment'/>
      <button>post</button>
    </div>
  );
};

export default UserCard;
