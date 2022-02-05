import React from 'react';

export const JournalEntry = () => {
  return (
      <div className='journal__entry pointer'>
          <div 
          className='journal__entry-picture'
          style={{
              backgroundSize: 'cover',
              backgroundImage: 'url(https://earthsky.org/upl/gravity_forms/6-d184048789a60d766a02a8e43117298b/2022/02/20220130-Rosette-Nebula-STO.jpg)'
          }}
          >

          </div>
          <div className='journal__entry-body'>
              <p className='journal__entry-title'>
                  Un nuevo dia
              </p>
              <p className='journal__entry-content'>
                  Reprehenderit in duis
              </p>


          </div>
          <div className='journal__entry-date-box'>
              <span>Monday</span>
              <h4>28</h4>

          </div>
      </div>
  );
};
