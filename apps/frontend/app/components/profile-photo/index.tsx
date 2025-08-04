import React from 'react';

interface ProfilePhoto {
  userName: string
  color?: string
  i: number;
}

const ProfilePhoto: React.FC<ProfilePhoto> = ({ userName, color, i }) => {

  const colors = [
    'orange',
    'blue',
    'green',
    'red',
    'purple',
    'grey',
  ];

  if (!color || !colors.includes(color)) {
    color = colors[i];
  }

  const letter = userName.charAt(0).toUpperCase();

  return (
    <div style={{backgroundColor: color}} className={`rounded-[50%] w-15 h-15 flex justify-center items-center text-2xl text-white font-bold`}>{letter}</div>
  );
};

export default ProfilePhoto;