import React from 'react';
import Image from 'next/image';
import HomeIcon from '/public/assets/navbaricons/home.svg'
import TransferIcon from '/public/assets/navbaricons/transferhorizontal.svg';
import RefreshIcon from '/public/assets/navbaricons/Refresh.svg';
import RoutingIcon from '/public/assets/navbaricons/Routing.svg';
import ChatIcon from '/public/assets/navbaricons/chat.svg';

export const navIcons: Record<string, () => React.JSX.Element> = {
  home: () => <Image src={HomeIcon} width={24} height={24} alt="Home" style={{ filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />,
  transfer: () => <Image src={TransferIcon} width={24} height={24} alt="Transfer" style={{ filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />,
  refresh: () => <Image src={RefreshIcon} width={24} height={24} alt="Refresh" style={{ filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />,
  routing: () => <Image src={RoutingIcon} width={24} height={24} alt="Routing" style={{ filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />,
  chat: () => <Image src={ChatIcon} width={24} height={24} alt="Chat" style={{ filter: 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />,
};
