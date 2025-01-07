// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../assets/images/egypt-pyramid.jpg'
import bgimg2 from '../assets/images/greek-architecture.jpg'
import bgimg3 from '../assets/images/mesopotemia.jpg'
import Slide from './Slide'

export default function Carousel() {
    return (
        <div className='mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Explore artifacts that reveal the secrets of our past'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Every artifact holds a glimpse into human history'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Experience the wonders of ancient civilizations'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
} 