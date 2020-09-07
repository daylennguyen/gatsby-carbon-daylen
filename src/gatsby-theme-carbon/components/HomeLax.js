import React, {useEffect} from 'react';
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { animated, useSpring } from 'react-spring';

// const Text1 = (props) => <h2>123</h2>;
// class HomeLax extends React.Component
// {
//     handleScroll() {
//         const posY = this?.parallax?.current?.getBoundingClientRect().top;
//         const offset = window.pageYOffset - posY;
//         console.log(offset);
//     }
 
//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll);
//     }

//     render()
//     {
//         return (
//             <Parallax pages={ 3 } scrolling={ false } ref={ ref => (this.parallax = ref)} >
//                 <ParallaxLayer offset={ 0 } speed={ 1 } style={ { backgroundColor: '#805E73' } } />
//                 <ParallaxLayer offset={ .5 } speed={ 2 } style={ { backgroundColor: 'pink' } } >abcde</ParallaxLayer>
//                 <ParallaxLayer offset={ .3 } speed={ 3 } style={ { backgroundColor: 'red' } } />
//             </Parallax>
//         );
//     }
// };
const calc = o => `translateY(${o * 0.1}px)`;
const calc2 = o => `translateY(${o * 0.2}px)`;

const Comp = () => {
    const ref = React.useRef();
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

    const handleScroll = () => {
      const posY = ref.current.getBoundingClientRect().top;
      const offset = window.pageYOffset - posY;
      set({ offset });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
    return (
      <div style={{
        background: '#123456',
        position: 'relative',
        width: '100vw',
        height: '400px',
        
      }}
      ref={ref}
      >
        <animated.div style={{
          background: '#654321',
          position: 'absolute',
          width: '100vw',
          height: '100px',
          transform: offset.interpolate(calc)
        }} />
                <animated.div style={{
          background: 'red',
          position: 'absolute',
          width: '100vw',
          height: '100px',
          transform: offset.interpolate(calc2)
        }} />
      </div>
    )
  }

export default Comp;
