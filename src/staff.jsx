import React from 'react';
import {BiSolidPhone} from 'react-icons/bi'
import image1 from './assets/image 31.png';
import image2 from './assets/image 33.png';
import image3 from './assets/image 34.png';

const Staff = () => {
    const staff = [
        {
            id: 1,
            image: image1,
            name: "William Scott",
            passion: "Rental Agent",
            phone: "(+89)652 555 320"
        },
        {
            id: 2,
            image: image2,
            name: "William Scott",
            passion: "Rental Agent",
            phone: "(+89)652 555 320"
        },
        {
            id: 3,
            image: image3,
            name: "William Scott",
            passion: "Rental Agent",
            phone: "(+89)652 555 320"
        },
    ];
    return (
        <div className="flex flex-col items-center p-8">
            {/* Heading and Paragraph */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Our Expert Staff</h2>
                <p className="text-gray-700 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed eu odio quis leo laoreet vehicula. Nam ac tortor at 
                    arcu scelerisque pulvinar ut id urna. Nullam sed libero 
                    et tortor porttitor dictum.
                </p>
            </div>
            
            {/* Staff Details */}
            <div className="flex flex-col md:flex-row md:space-x-4">
                {staff.map((data) => (
                    <div key={data.id} className="md:w-1/3">
                        <img src={data.image} alt={`Staff ${data.id}`} className="w-[509px] h-[338px] rounded-md mb-4 md:mb-0" />
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold">{data.name}</h3>
                            <p>{data.passion}</p>
                            <BiSolidPhone/>
                            <p className="text-gray-600">{data.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Staff;
