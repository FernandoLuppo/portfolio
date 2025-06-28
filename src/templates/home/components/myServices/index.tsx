"use client";

import { Section } from "@/layouts";
import { Title } from "@/shared/components";
import { CARD_ITEMS } from "./constants";
import { Card } from "./components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const MyServices = () => {
  return (
    <Section type={800} key={"my-services"} id="services">
      <Title label="Meus Serviços" key="my-services-title" />

      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-9">
        {CARD_ITEMS.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>

      <div className="block md:hidden gap-x-8 gap-y-9 overflow-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={1.1}
        >
          {CARD_ITEMS.map((item) => (
            <SwiperSlide key={item.title}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
