import Photo from './Photo'
import Title from './Title'
import Button from './Button'
import Body from './Body'
import Footer from './Footer'
import './index.css';

function Card() {
  return (
    <div className="container">
      <Photo />
      <Title />
      <Button />
      <Body />
      <Footer />
    </div>
  );
}

export default Card;
