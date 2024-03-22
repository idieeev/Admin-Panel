import React from 'react'
import { Link } from 'react-router-dom';
const notFound = () => {
  return (
    <div>
      <div className="p-[100px]">
        <h1 className="text-center text-[70px] font-[400]">404 Not Found</h1>
        <h1 className="text-[18px] text-[#8d8d8d] text-center pt-[20px]">
          Your visited page not found. You may go home page.
        </h1>
        <Link to={"/all/"}>
          <button className="w-[200px] h-[50px] bg-red-500 text-[white] block m-[auto] mt-[40px] rounded-md">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
}
export default notFound