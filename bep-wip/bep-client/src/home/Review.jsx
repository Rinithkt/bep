import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// react icons
import {FaStar} from "react-icons/fa6"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import RinPic from "../assets/rinith-profileicon.jpg"
import AvtarPic1 from "../assets/p1.jpg"
import AvtarPic2 from "../assets/p2.jpg"
import AvtarPic3 from "../assets/p3.jpg"
import AvtarPic4 from "../assets/p4.jpg"
import AvtarPic5 from "../assets/p5.jpg"
import AvtarPic6 from "../assets/p6.jpg"
import AvtarPic7 from "../assets/p7.jpg"

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar, AvatarGroup } from 'flowbite-react';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/*swiperslide with shadows*/}

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='flex flex-wrap gap-2'>
              <p className='mb-5'>A perfect blend of convenience and purpose. Exchanging books has never been this meaningful or rewarding!</p>
          {/* stacked avatars*/}
              <AvatarGroup>
              <Avatar img={AvtarPic2} rounded stacked className='w-10 mb-4'/>
              <Avatar img={AvtarPic3} rounded stacked className='w-10 mb-4'/>
              <Avatar img={AvtarPic1} rounded stacked className='w-10 mb-4'/>
              <Avatar img={RinPic} rounded stacked className='w-10 mb-4'/>
              </AvatarGroup>
              <AvatarGroup>
              <Avatar img={AvtarPic4} rounded stacked className='w-10 mb-4'/>
              <Avatar img={AvtarPic5} rounded stacked className='w-10 mb-4'/>
              <Avatar img={AvtarPic6} rounded stacked className='w-10 mb-4'/>
              <Avatar img={AvtarPic7} rounded stacked className='w-10 mb-4'/>
              <Avatar.Counter total={99} href='#' />
              </AvatarGroup>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>An amazing platform! I exchanged a few of my books and discovered incredible new reads. Love the concept of supporting a cause while trading books!</p>
              <Avatar img={RinPic} rounded stacked className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Rinith</h5>
              <p className='text-base'>Well-wisher</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>The charity aspect is what truly won me over. It feels good to know that my love for books can help others too!</p>
              <Avatar img={AvtarPic2} rounded stacked className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Mark Lin</h5>
              <p className='text-base'>CEO, Arihant Books</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Fantastic service! The site is easy to navigate, and the book selection is impressive. I can't wait to use it again!</p>
          {/* stacked avatars*/}
              <Avatar img={AvtarPic3} rounded stacked className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Isabella K.</h5>
              <p className='text-base'>Linkedin</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>The process was so smooth and user-friendly. It's great knowing my exchange fee is making a positive impact!</p>
          {/* stacked avatars*/}
              <Avatar img={AvtarPic4} rounded stacked className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Mark Lin</h5>
              <p className='text-base'>James, Trellix</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Kudos to the Rinith for such an innovative idea. It's not just about books but building a community of passionate readers!</p>
          {/* stacked avatars*/}
              <Avatar img={AvtarPic5} rounded stacked className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Shashi Tharoor</h5>
              <p className='text-base'>Politician</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* text */}
            <div className='mt-7'>
              <p className='mb-5'>Quick, reliable, and impactful. I’ve already recommended this platform to all my colleagues and friends!</p>
          {/* stacked avatars*/}
              <Avatar img={AvtarPic6} rounded stacked className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Elon Musk</h5>
              <p className='text-base'>Businessman</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Review;