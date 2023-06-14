import emoji2 from '../src/emoji2.png'

const Emoji2 = ({hide2}) => {
    return ( 
        <img src={emoji2} className='emoji2'  onClick={hide2}/>
     );
}
 
export default Emoji2;