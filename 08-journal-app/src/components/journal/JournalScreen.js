import React from 'react';
import { NodeScreen } from '../notes/NodeScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {
  return (
      <div className="journal__main-content">
          <Sidebar/>

          <main>
            {/* <NothingSelected/> */}
            <NodeScreen/>
          </main>
      </div>
  );
};
