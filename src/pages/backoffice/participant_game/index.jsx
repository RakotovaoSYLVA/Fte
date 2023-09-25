import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Liste_participant from './listePG';

export function ParticipantGame() {
    return (
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <div className='MainDash'>
                <h1>Participants Jeux</h1>
                <Liste_participant/>
            </div>
          
        </div>
      </div>
    );
  }