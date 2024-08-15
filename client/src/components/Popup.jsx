import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const Popup = ({ onClose }) => {
  return (
    <div className="pop">
      <div className="inner">
        <span>My Popup Message</span>
        <div className="mt-20">
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline onClick={onClose}>
              <span className="text-red-500">Sign In</span>
            </Button>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/sign-up">
            <Button gradientDuoTone="greenToBlue" outline onClick={onClose}>
              <span className="text-green-500">Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
