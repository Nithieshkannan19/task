import emoji3 from '../src/emoji3.jpeg'

const Emoji3 = ({hide3}) => {
    return ( 
        <img src={emoji3} className='emoji3'  onClick={hide3}/>
     );
}
 
export default Emoji3;