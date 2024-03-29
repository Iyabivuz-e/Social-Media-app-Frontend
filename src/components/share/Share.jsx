import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import './Share.css'

const Share = () => {
  return (
    <div className='share'>
      <div className="share-wrapper">
        <div className="share-top">
            <img 
                src="/assets/person/1.jpeg" 
                alt="profile pic" 
                className="share-profile-image"
             />

             <input 
                className='share-input'
                placeholder="What's on your mind Dio?"
                type="text"
             />
        </div>

        <hr className="share-hr" />

        <div className="share-bottom">
            <div className="share-options">
                <div className="share-option">
                    <PermMediaIcon htmlColor='tomato' className="share-icon"/>
                    <span className="share-option-text">Photo/Video</span>
                </div>
                
                <div className="share-option">
                    <LabelIcon htmlColor='blue' className="share-icon"/>
                    <span className="share-option-text">Tag</span>
                </div>
                <div className="share-option">
                    <LocationOnIcon htmlColor='green' className="share-icon"/>
                    <span className="share-option-text">Location</span>
                </div>
                <div className="share-option">
                    <EmojiEmotionsIcon htmlColor='gold' className="share-icon"/>
                    <span className="share-option-text">Feelings</span>
                </div>
            </div>
            <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
