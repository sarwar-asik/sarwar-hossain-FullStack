"use client";

import TestimonialsSection from '@/components/famer/Testimoni';
import React from 'react';

const TestimonialPage = () => {
  const testimonials = [
    { id: 1, quote: "Testimonial 1 content", author: "Author 1" },
    { id: 2, quote: "Testimonial 2 content", author: "Author 2" },
    { id: 3, quote: "Testimonial 3 content", author: "Author 3" },
    { id: 4, quote: "Testimonial 4 content", author: "Author 4" },
    { id: 5, quote: "Testimonial 5 content", author: "Author 4" },
    { id: 6, quote: "Testimonial 6 content", author: "Author 4" },
    // Add more testimonials here
  ];

  return (
    <div>
      <h2> Your testomonial</h2>
      <TestimonialsSection testimonials={testimonials}/>
    </div>
  );
};

export default TestimonialPage;