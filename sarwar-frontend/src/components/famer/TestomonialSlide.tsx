"use client"
type Testimonial = {
  id: number;
  quote: string;
  author: string;
};
type TestimonialSlideProps = {
  testimonial: Testimonial;
};

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial }) => {
  return (
    <div className="keen-slider__slide">
      <div className="relative max-w-lg mx-auto sm:lg:max-w-xl lg:max-w-2xl lg:mx-0 lg:h-full rtl:pl-12">
        <div className="relative px-10 py-8 overflow-hidden transition transform bg-white rounded-lg shadow-lg sm:rtl:-pr-0 sm:rtl:-pl-0 rtl:pr-0 rtl:pl-0">
          <blockquote className="text-rose-600 font-medium">
            <p>{testimonial.quote}</p>
          </blockquote>

          <footer className="mt-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12">
                  {/* Author's image can be added here */}
                </div>
              </div>
              <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide
