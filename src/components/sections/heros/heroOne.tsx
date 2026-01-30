import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import 'swiper/css';
import { Link } from "react-router-dom";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/img/hero/management3.webp',
    title: 'WELCOME',
    heading: '',
    description: '',
    link: '/',
  },
  {
    id: 2,
    image: '/img/hero/class-377117_1280.webp',
    title: '',
    heading: '',
    description: '',
    link: '/',
  },
  {
    id: 3,
    image: '/img/hero/libary.webp',
    title: 'WELCOME',
    heading: '',
    description: '',
    link: '/',
  },
    {
    id: 4,
    image: '/img/hero/nurseries.jpg',
    title: 'WELCOME',
    heading: '',
    description: '',
    link: '/',
  },
];

const HeroOne = () => {
  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev"><i className="fa fa-arrow-left" /></button>
        <button className="array-next"><i className="fa fa-arrow-right" /></button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={3000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }
      }
        navigation={{
          nextEl: ".array-prev",
          prevEl: ".array-next",
        }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default HeroOne

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div
        className="hero-image bg-cover"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content">

              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{ duration: .5, delay: 0.3 }}
              >
                {slide.title}
              </motion.h6>

              {/* Hidden but preserved for CSS */}
              <motion.h1 style={{ display: 'none' }} />
              <motion.p style={{ display: 'none' }} />
              <motion.div className="hero-button" style={{ display: 'none' }} />

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

}