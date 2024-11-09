"use client";
import React, { useEffect, useState } from 'react';

const CompanyProfilePage = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // Example fetch function to get profile data
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/companyProfile'); // Adjust API endpoint as necessary
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    if (!profileData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h3>{profileData.name}</h3>
            <p><strong>Company Description:</strong> {profileData.description}</p>
            <p><strong>Open Positions:</strong> {profileData.openPositions}</p>
            <p><strong>Reviews:</strong> {profileData.reviews}</p>
            <p><strong>Values:</strong> {profileData.values}</p>
        </div>
    );
};

export default CompanyProfilePage;

