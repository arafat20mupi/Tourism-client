


const Banner = () => {
    return (
        <div className="carousel rounded-2xl mt-3  w-full">
            <div id="slide1" className="carousel-item h-screen relative w-full">
                <img src=" https://i.ibb.co/82Hdxq0/VN1-Header-1120x620.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle"> ❮ </a>
                    <a href="#slide2" className="btn btn-circle"> ❯ </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item h-screen relative w-full">
                <img src="https://i.ibb.co/JysWDk3/14-Must-See-Mekong-Delta-Tourist-Attractions-Vinh-Trang-Pagoda-1120extension-1120x732.jpg" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            



            <div id="slide3" className="carousel-item h-screen relative w-full">
                <img src="https://i.ibb.co/T4tWYcW/webp-medium-202112291737-01ea5fd7998148916d9d02aa786dbeb3.webp " className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item h-screen relative w-full">
                <img src="https://i.ibb.co/3djWLrz/18094813-screenshot-2022-03-18-094728-cover-1465x1025.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;