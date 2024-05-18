import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="relative w-48 h-64 overflow-hidden rounded-full">
            <Image
                alt="Mursalin Saiyed"
                src="/images/profilePic.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 w-full h-full rounded-full"
            />
        </div>
    );
};

export default ProfilePic;
