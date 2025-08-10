

export default function Profile_image({ src }) {
    return (
        <div>
            <img
                src={src}
                alt="Profile"
                style={{  width: '250px', height: '300px' , borderRadius: '20px',  // adjust this value for how round you want corners
                    overflow: 'hidden', }}
            />
        </div>
    );
}
