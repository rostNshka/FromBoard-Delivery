import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Reviews.scss'
import 'swiper/css'
import { reviewsData } from '@/utils/reviewsData'

const Reviews = () => {
  return (
    <div className="reviews container">
      <div className="custom-prev">➜</div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={2}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        pagination={{ clickable: true }}
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id} className="slider-container">
            <div className="slider__description">{review.description}</div>
            <span className="slider__author">{review.author}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-next">➜</div>
    </div>
    )
}

export default Reviews