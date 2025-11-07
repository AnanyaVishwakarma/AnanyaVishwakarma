import React, {useState} from 'react';
import './ProfileImage.css';

const ProfileImage = ({
    src,
    alt = "Profile",
    size = 'lg',
    fallback = 'AV',
    className = '',
    ...props
}) => {
    const [imageError, setImageError] = useState(false);

    const baseClass = 'profile-image-container';
    const sizeClass = `profile-image-container--${size}`;

    const containerClass = `${baseClass} ${sizeClass} ${className}`.trim();

    const handleImageError = () =>{
        setImageError(true);
    };
    return (
        <div className={containerClass} {...props}>
            <div className="profile-gradient-border">
                {!imageError && src ?(
                    <img src={src} alt={alt}className="profile-image" onError={handleImageError} />
                ):(
                    <div className="profile-placeholder">
                        <span className="profile-initials">{fallback}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileImage;
