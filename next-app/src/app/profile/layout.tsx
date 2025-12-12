import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Kaali Coder | User Profile - View & Customize Your Developer Profile',
    description: "Access your Kaali Coder user profile to update personal information, manage account settings, and track your activity across projects.",
    robots: {
        index: false,
        follow: false
    }
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return children
};

export default layout;