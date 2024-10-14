import Image from 'next/image';
import React from 'react';

const aboutPage = () => {
    return (
        <div>
            <section class="bg-gray-50 py-16">
                <div class="max-w-6xl mx-auto px-4">
                    <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">About CozyCorner</h1>
                    <p class="text-lg text-gray-600 text-center mb-12">
                        At CozyCorner, we believe that everyone deserves a beautiful and comfortable space to call home.
                        Our mission is to provide stylish, affordable furniture that transforms your living space into
                        a haven of comfort and warmth.
                    </p>

                    <div class="flex flex-wrap justify-center gap-10 mb-12">
                        <div class="bg-white shadow-lg rounded-lg p-6 w-80">
                            <div className='w-full rounded-sm mb-4'>
                                <Image src="https://images.pexels.com/photos/5490917/pexels-photo-5490917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" width={500} height={160}>
                                </Image>
                            </div>
                            <h2 class="text-xl font-semibold text-gray-800 mb-4">Our Story</h2>
                            <p class="text-gray-600">
                                CozyCorner was founded with the vision of making quality furniture accessible to all.
                                We curate a collection that brings together modern design and functionality, ensuring
                                every piece tells a story.
                            </p>
                        </div>

                        <div class="bg-white shadow-lg rounded-lg p-6 w-80">
                            <div className='w-full rounded-sm mb-4'>
                                <Image src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" width={500} height={160}>
                                </Image>
                            </div>
                            <h2 class="text-xl font-semibold text-gray-800 mb-4">Our Values</h2>
                            <p class="text-gray-600">
                                We prioritize sustainability and ethical sourcing in everything we do. Each item in our
                                collection reflects our commitment to responsible practices and quality craftsmanship.
                            </p>
                        </div>

                        <div class="bg-white shadow-lg rounded-lg p-6 w-80">
                            <div className='w-full rounded-sm mb-4'>
                                <Image src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" width={500} height={160}>
                                </Image>
                            </div>
                            <h2 class="text-xl font-semibold text-gray-800 mb-4">Our Team</h2>
                            <p class="text-gray-600">
                                Our passionate team is dedicated to helping you find the perfect furniture for your
                                home. We strive to provide exceptional customer service and expert advice.
                            </p>
                        </div>
                    </div>

                    <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
                    <p class="text-lg text-gray-600 text-center mb-12">
                        With a focus on quality, design, and affordability, CozyCorner is your trusted partner in
                        creating a space that feels uniquely yours.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default aboutPage;