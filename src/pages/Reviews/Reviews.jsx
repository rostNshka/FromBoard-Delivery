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
          <SwiperSlide key={review.id}>
            <div className="slider-container">
              <div className="slider-container__description">{review.description}</div>
              <span className="slider-container__author">{review.author}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-next">➜</div>
    </div>
    )
}

export default Reviews