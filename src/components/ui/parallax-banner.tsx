import { ParallaxBanner } from 'react-scroll-parallax';
const Component = () => {
    return (
      <ParallaxBanner
        layers={[{ image: '/static/banner.jpg', speed: -15 }]}
        className="aspect-[2/1]"
      />
    );
  };