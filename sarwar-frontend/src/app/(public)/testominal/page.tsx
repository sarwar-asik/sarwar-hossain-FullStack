"use client";

import TestimonialsSection from '@/components/famer/Testimoni';
import React from 'react';

const TestimonialPage = () => {
  const testimonials = [
    {
      name: "John Doe",
      img: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1698441873~exp=1698442473~hmac=843bc89d40dbda978ebe92aedce47ef2675c043c7365f09fdeb61425ed2ec3d5", // Replace with actual image URL
      rating: 5, // You can use a scale like 1 to 5 for rating
      details: "I'm extremely satisfied with the quality of your developing service. The team's dedication and expertise made a significant impact on my project's success.",
      time: "2023-10-15",
    },
    {
      name: "Jane Smith",
      img: "https://img.freepik.com/free-photo/handsome-successful-senior-businessman-showing-thumbs-up-approval_176420-31770.jpg?w=996&t=st=1698441865~exp=1698442465~hmac=66ded2e0fa318b375722a3b958da3b3ccfe09ed36077a6b47188cf03fdcf41d9", // Replace with actual image URL
      rating: 4,
      details: "Your developing service exceeded my expectations. The innovative solutions provided by your team helped us achieve our goals faster.",
      time: "2023-10-10",
    },
    {
      name: "David Johnson",
      img: "https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=996&t=st=1698441851~exp=1698442451~hmac=671015512bb83d16a89ee031ab161c1f851e1e666173890748304c7b0bd549e7", // Replace with actual image URL
      rating: 3,
      details: "While the developing service was decent, I believe there is room for improvement. Some aspects of the project could have been executed more efficiently.",
      time: "2023-09-25",
    },
    {
      name: "Sarah Wilson",
      img: "https://img.freepik.com/free-photo/smiling-caucasian-guy-with-beard-looking-happy_176420-18707.jpg?w=996&t=st=1698441828~exp=1698442428~hmac=1c7c3c7a85823cbac2e48a7befc0ba75a5838da88e723a531b935b591f954409", // Replace with actual image URL
      rating: 5,
      details: "The developing service provided by your team was exceptional. The attention to detail and prompt delivery made our collaboration a success.",
      time: "2023-09-15",
    },
    {
      name: "Michael Brown",
      img: "https://img.freepik.com/free-photo/middle-aged-cheerful-dark-skinned-male-with-shining-smile_273609-28538.jpg?w=996&t=st=1698441822~exp=1698442422~hmac=80eaff4896cadfbd3ea1da7b4caff0522dce53e43c5b9a7124b196ed5ae96a98", // Replace with actual image URL
      rating: 4,
      details: "Your developing service was of high quality and greatly contributed to our project's success. However, there were minor delays in the delivery process.",
      time: "2023-08-30",
    },
    {
      name: "Emily Davis",
      img: "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=996&t=st=1698441807~exp=1698442407~hmac=0d76181a74b60a80f5d5648828e88daa5937da82b569561121169a7197ccb51a", // Replace with actual image URL
      rating: 5,
      details: "I am more than pleased with your developing service. The innovative solutions and timely delivery were crucial for our project's success.",
      time: "2023-08-20",
    },

  ];

  return (
    <div>
      <TestimonialsSection testimonials={testimonials}/>
    </div>
  );
};

export default TestimonialPage;