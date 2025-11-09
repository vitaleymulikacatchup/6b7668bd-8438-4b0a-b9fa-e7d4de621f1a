"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, ChefHat, Crown, Leaf, Sparkles, Star } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Exquisite Culinary Experience"
          description="Indulge in our carefully crafted dishes using the finest ingredients, paired with exceptional service in an elegant atmosphere"
          tag="Fine Dining"
          tagIcon={Sparkles}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g8390d6ec3c4bcf042cb0cabe8ac6f5fab1f4095b06ee144d3bfa241bcc2c14880f6bc538c4d6acd7cf7a38c93b81b5a544626ab7337295084c6e78442aeb9575_1280.jpg"
          imageAlt="Elegant fine dining restaurant interior"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Our Culinary Philosophy"
          description="At Bella Vista, we believe dining is an art form. Our passionate chefs combine traditional techniques with modern innovation to create unforgettable culinary experiences."
          tag="About Us"
          tagIcon={Crown}
          imagePosition="right"
          bulletPoints={[
            {
              title: "Fresh Ingredients",
              description: "Locally sourced, seasonal ingredients selected daily from premium suppliers",
              icon: Leaf
            },
            {
              title: "Master Craftsmanship",
              description: "Our chefs bring decades of experience from world-renowned kitchens",
              icon: Award
            },
            {
              title: "Elegant Atmosphere",
              description: "Sophisticated ambiance perfect for intimate dinners and special celebrations",
              icon: Sparkles
            }
          ]}
          imageSrc="https://pixabay.com/get/gdcaf690a3a23ea56b10261e6dc22ef5a70040a566fd96091503acf950cebd9f1929545e335adbf572a9c141f925a62834e6cb00743a10f72b6bcd13d098bad84_1280.jpg"
          imageAlt="Master chef preparing gourmet cuisine"
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Dishes"
          description="Discover our chef's carefully curated selection of exceptional dishes, each crafted with precision and passion"
          tag="Our Menu"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Truffle Risotto",
              price: "$48",
              imageSrc: "https://pixabay.com/get/g47b04c264a2dd099490d0b96d0f50f37aed878fa00cf5053a1412d69920ecda4d24ca20df9b094298c9e6504a39572fe8a2ee80fef240cfc726393758bb6106a_1280.jpg",
              imageAlt: "Creamy truffle risotto with parmesan"
            },
            {
              id: "2",
              name: "Wagyu Beef Tenderloin",
              price: "$85",
              imageSrc: "https://pixabay.com/get/gecd59f47a69b3a8d9931ff782895a965b0ccd57cb2b62f6df55622036f58eb74b782c49eee32ef80c8d756111ee7822b74716349b970f0fddbed5cb69a426d31_1280.jpg",
              imageAlt: "Premium wagyu beef tenderloin"
            },
            {
              id: "3",
              name: "Chocolate Soufflé",
              price: "$22",
              imageSrc: "https://pixabay.com/get/gc9849dcdc83caff1b08699b6478afd9c09f2edab4362706c2d08f3984569cda8c9a46e725a0189b0bd1a3c9ae50c680234b21968371850f56da8b0607b03d2cb_1280.jpg",
              imageAlt: "Decadent chocolate soufflé dessert"
            }
          ]}
        />
      </div>
      
      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Experience the excellence that keeps our guests returning for unforgettable dining moments"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Margaret Thompson",
              role: "Food Critic",
              company: "Culinary Review",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5f8c54fa6665d58a20bf160459f840119751101bebabb88df26618079271bba29e344a8903cb6872bbfad7bf5fdfd79d49c683a498a581d046bae2c6b6f87b3c_1280.jpg",
              imageAlt: "Margaret Thompson dining"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Business Executive",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6028322995abd506282b1447e8e4f818e4b541bdaf290246a739a941c41c8385dc8cfeafe298a130d010a443621701de7461dedc3d232372f0570a9df406a18d_1280.jpg",
              imageAlt: "James Rodriguez at restaurant"
            },
            {
              id: "3",
              name: "Sarah & Michael Chen",
              role: "Anniversary Celebration",
              company: "Regular Guests",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gac996d9d6075901cb561b8d0e19cb82f19d4afbcf40b62da6a0d1d30d2068d327015303fd8af957a5dd80b2f421e12c108e5c5a66534926709899493046ad9a5_1280.jpg",
              imageAlt: "Couple celebrating anniversary"
            },
            {
              id: "4",
              name: "The Johnson Family",
              role: "Family Celebration",
              company: "Special Occasions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g12b727e40af4afcf7dbbd3a0c18dacefb56fbd7631519c3b46cc63ed58f6552ec1647bdefaba2e2de905250779be33764cb2904b49f26821801fc7694b75d790_1280.jpg",
              imageAlt: "Family dining celebration"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Reserve Your Table"
          description="Join us for an exceptional dining experience. Book your table today and let us create an unforgettable evening for you."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for reservation"
          buttonText="Book Now"
          termsText="By booking, you agree to our reservation policy. Cancellations accepted up to 24 hours in advance."
          imageSrc="https://pixabay.com/get/g5b297ca573abc78e0f3df05f5d141adca48d3aacf49f188d914b4e6b177c2d16549d408dba2ff45185b2f8acfe7f2f9a2ddb7fd8124bb36d1932e96a083b640f_1280.jpg"
          imageAlt="Elegant restaurant dining room"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "menu" },
                { label: "About", href: "about" },
                { label: "Reviews", href: "reviews" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" },
                { label: "Gift Cards", href: "contact" }
              ]
            },
            {
              title: "Info",
              items: [
                { label: "Hours", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Parking", href: "contact" }
              ]
            }
          ]}
          logoText="Bella Vista"
          copyrightText="© 2025 | Bella Vista Fine Dining"
        />
      </div>
    </ThemeProvider>
  );
}