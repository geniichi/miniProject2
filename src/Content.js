import './Content.css';
import { useState } from 'react';
import Image1 from './images/confident.png';
import Image2 from './images/regretful.png';

const Content = () =>{

    const handleNameChanges = () => {
        const names = ['bob', 'juan', 'peter', 'sir vic'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      }

    const [image, setImage] = useState(Image1);
    const [imagePosition,setimagePosition] = useState('-4px');

    const ImageChange = () => {
      setImage(Image2);
      setimagePosition('-8px');
      setTimeout(() => {
        setImage(Image1);
        setimagePosition('-4px');
      }, 1000);
    };

    return(
            <main>
              <p className='mysample container col-lg-5 col-md-6 col-sm-7'>
                HELLO {handleNameChanges().toUpperCase()} !
                <img src={image} id="imageAbsolute" onMouseOver={ImageChange} style={{bottom: imagePosition}}/>
              </p>
            </main>
    )


}

export default Content;
