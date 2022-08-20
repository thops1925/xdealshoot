import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className="flex justify-center items-center flex-col  h-64 bg-gray-900 text-gray-400 ">
            <div className="mb-3">
                <FacebookRoundedIcon className="mx-2 " />
                <InstagramIcon className="mx-2" />
                <GitHubIcon className="mx-2" />
            </div>
            <p className="flex text-sm">
                &copy;2021 ThopsImagery. All right reserved{' '}
            </p>
        </div>
    );
}
