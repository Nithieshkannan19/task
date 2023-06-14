import emoji1 from '../src/emoji1.jpeg'

const Emoji1 = ({hide1}) => {
    return ( 
        <img src={emoji1} className='emoji1' onClick={hide1}/>
     );
}
 
export default Emoji1;