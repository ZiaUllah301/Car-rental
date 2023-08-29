import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            rating: 4.5,
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 2,
            name: 'Jane Smith',
            feedback: 'Sed eu odio quis leo laoreet vehicula. Nam ac tortor at arcu scelerisque pulvinar ut id urna. Nullam sed libero et tortor porttitor dictum.',
          },
          {
            id: 3,
            name: 'Alice Johnson',
            feedback: 'Fusce eu mauris vitae urna dignissim consectetur. In at ante ac dolor sollicitudin tincidunt. Ut vulputate ligula non scelerisque.',
          },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i - 0.5 === rating) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="container mx-auto p-8">
            <div>
            <h2 className="text-3xl font-bold text-start mb-4">Read the best review
                from our users</h2>
            <p className=' items-center text-justify' >There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour,
                or randomised</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {reviews.map((review) => (
                    <div key={review.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <div className="bg-green-500 rounded-lg shadow-lg p-6 h-full">
                            <p className="text-gray-700 mb-4">{review.feedback}</p>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    {renderStars(review.rating)}
                                </div>
                                <div className="flex items-center">
                                    <img src={`https://randomuser.me/api/portraits/men/${review.id}.jpg`} alt={`Client ${review.id}`} className="w-12 h-12 rounded-full" />
                                    <div className="ml-4">
                                        <h3 className="font-semibold">{review.name}</h3>
                                        <p className="text-gray-600">Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
