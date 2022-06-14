import pervoe from './img/pervoe.jpeg';
import vtoroe from './img/vtoroe.jpeg';
import tretie from './img/tretie.jpeg';
import chetvertyi from './img/chetvertyi.jpeg';
import pyatyi from './img/pyatyi.jpeg';
import icon from './img/icon.png';
import { compareAsc, format, zonedTimeToUtc } from 'date-fns';

import './App.css';

function App() {
  const date = new Date();
  const dateFormat = format(date, 'k :m MM/dd/yyyy');

  return (
    <div id='wrapper'>
      <div className='header'>
        <img src={icon} className='icon' />;
        <div className='date'> {dateFormat}</div>
      </div>

      <div className='box'>
        <div className='fotki1'> Hey</div>
        <div className='fotki2'>Let's </div>
        <div className='fotki3'>Give </div>
        <div className='fotki4'>All </div>
        <div className='fotki5'>You can </div>
      </div>
    </div>
  );
}

export default App;
