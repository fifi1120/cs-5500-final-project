
import React from 'react';
import './Gallery.css';
import Footer from '../Footer';

function Gallery() {
    const videos = [
        "https://www.youtube.com/embed/NzMs-Oghqy0?si=NZuDpmjIuC7IR0Sc",
        'https://www.youtube.com/embed/xrMVZ5guOc8?si=rOFbyCwLxN5DjP3E',
        'https://www.youtube.com/embed/8_tcGUlxMa8?si=FfbTC3B5XGGyMcRT',
        'https://www.youtube.com/embed/KBnDq1Zaqms?si=mvRvtkHyxCe3mUMJ',
        'https://www.youtube.com/embed/N9l0B2wJS4c?si=rPwPDkeDamHYMh89',
        'https://www.youtube.com/embed/AK6EBgWUamg?si=iUvIZJF-PPQB6KtA'
    ];

    return (
        <div className='main-content'>
            <div className='gallery-container'>
                <h1 className='gallery-title text-center my-4' style={{ fontSize: '3rem' }}>VIDEOS</h1>
                <div className='row justify-content-center'>
                    {videos.map((video, index) => (
                        <div className='col-md-6 mb-4 d-flex justify-content-center' key={index}>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe width='800' height='450'
                                    className='embed-responsive-item'
                                    src={video}
                                    allowFullScreen
                                    title={`video-${index}`}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;

