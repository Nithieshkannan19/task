import { useState } from 'react';
import Emojis from './emoji';
import Emoji1 from './emoji1';
import Emoji2 from './emoji2';
import Emoji3 from './emoji3';

function App() {
  const [e1, sete1] = useState(false);
  const [e2, sete2] = useState(false);
  const [e3, sete3] = useState(false);
  const [emojis, setemojis] = useState(false);

  const show1 = () => {
    if (e1) {
      sete1(false)
    } else {
      sete1(true)
    }
  }

  const show2 = () => {
    if (e2) {
      sete2(false)
    } else {
      sete2(true)
    }
  }

  const show3 = () => {
    if (e3) {
      sete3(false)
    } else {
      sete3(true)
    }
  }

  const hide1 = () => {
    sete1(false)
  }

  const hide2 = () => {
    sete2(false)
  }

  const hide3 = () => {
    sete3(false)
  }

  const Showemoji = () => {
    if (emojis) {
      setemojis(false)
    } else {
      setemojis(true)
    }
  }

  return (
    <div className='container'>
      <div >
        <button className='textarea' onMouseEnter={Showemoji} onMouseLeave={Showemoji}>
          <div className='hello'>
          <h1>Hello</h1>
          {emojis && <Emojis
            show1={show1} e1={e1} 
            show2={show2} e2={e2}
            show3={show3} e3={e3}
          />}
          </div>
          {e1 && <Emoji1 hide1={hide1} />}
          {e2 && <Emoji2 hide2={hide2} />}
          {e3 && <Emoji3 hide3={hide3} />}
        </button>

      </div>


    </div>
  );

}

export default App;
