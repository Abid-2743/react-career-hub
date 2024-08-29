import Diamond from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className="justify-between flex my-10">
            <div className='w-[420px] mt-20'>
                <h2 className="font-bold text-6xl">One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h2>
                <p className='my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>

            <img className='w-[716px] h-[644px]' src={Diamond} alt="" />
        </div>
    );
};
export default Banner;