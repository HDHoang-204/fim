import './banner.scss'
import banner from '../../../assets/nghe-noi-em-thich-toi-01-1133.jpg';
import Rating from '@mui/material/Rating';

function Banner() {
    return (
        <div className='banner'>
            <div className="main">
                <div className='text-banner'>
                    <h1>Nghe nói em thích tôi</h1>
                    <div className='icon'>
                        <Rating name="half-rating-read" size="large" defaultValue={4.5} precision={0.5} readOnly />
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className='ct'>Chi tiết</button>
                    <button className='xp'>Xem phim</button>

                </div>
                <div className='image'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner