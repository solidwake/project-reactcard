import Photo from './Photo'
import Title from './Title'
import Button from './Button'
import Body from './Body'
import Footer from './Footer'

function Card() {
  return (
    <div className="container">
      <div>
        <Photo />
        <Title />
        <Button />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Card;
