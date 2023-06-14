import emoji1 from '../src/emoji1.jpeg'
import emoji2 from '../src/emoji2.png'
import emoji3 from '../src/emoji3.jpeg'

const Emojis = ({show1,show2,show3,e1,e2,e3}) => {
    return ( 
        <div className='emojis'>
        {!e1 && <button className='e1' onClick={show1}><img src={emoji1} className='emoji1' /></button>}
        {!e2 &&<button className='e2' onClick={show2}><img src={emoji2} className='emoji2' /></button>}
        {!e3 &&<button className='e3' onClick={show3}><img src={emoji3} className='emoji3' /></button>}
      </div>
     );
}
 
export default Emojis;