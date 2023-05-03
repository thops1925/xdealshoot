import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col  h-64 bg-gray-900 text-gray-400  ">
            <div className="mb-3">
                <a alt='fb' href='https://www.facebook.com/thops.lumen/'>
                    <FacebookRoundedIcon className="text-gray-400 hover:text-gray-500 mx-3" />
                </a>
                <a alt='ig' href='https://www.instagram.com/thopzs/'>
                    <InstagramIcon className="text-gray-400 hover:text-gray-500 mx-3" />
                </a>
                <a alt='gh' href='https://github.com/thops1925'>
                    <GitHubIcon className="text-gray-400 hover:text-gray-500 mx-3" />
                </a>

            </div>
            <p className="flex text-sm">
                &copy;2021 ThopsImagery. All right reserved
            </p>
        </footer>
    );
}
