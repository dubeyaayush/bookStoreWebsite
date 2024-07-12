import React from 'react';
import list1 from '../../public/list1.json'
import Cards1 from './Cards1';
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-40">
        <div className="items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you{" "} 
                <span className="text-pink-500"> here!! :)
                </span>
            </h1>
            <p className="mt-12">Welcome to our course section, designed to enhance your knowledge and skills across various subjects.
               Whether you're seeking professional development, personal enrichment, or academic support, our comprehensive range of courses has something for everyone.
               Learn at your own pace with expert instructors and engaging materials. Start your journey of growth and discovery with us today!
            </p>
            <Link to="/">
                <button className="mt-6 bg-pink-500 text-white px-4 py-3 rounded-md hover:bg-pink-700 duration 300">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list1.map((item) =>(
                    <Cards1 key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course;
