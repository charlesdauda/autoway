import AboutImg from '../assets/images/aboutcar.png'
const AboutUs = () => {
    return (
        <section className="flex flex-col md:flex-row bg-white mx-40 mt-40 mb-22 gap-12 items-center">
            <div className="md:w-1/2">
            <h3 className="text-4xl font-extrabold text-slate-900">About Us</h3>
            <p className="text-slate-700 text-md tracking-wide py-3">Autoway is a modern automotive 
                platform designed to make buying and renting vehicles easier, faster, and more 
                convenient. We bring essential automotive services into one seamless digital 
                experience, allowing users to discover vehicles, explore detailed information, 
                compare options, make bookings, and manage their transactions with ease.
                <br/><br/>
                Our goal is to simplify the way people access automotive services through technology, 
                convenience, and transparency. Whether you are looking for a vehicle to rent for a short 
                trip or searching for your next car to purchase, Autoway provides a 
                reliable and user-friendly platform that connects customers with the 
                vehicles and services they need.
                </p>
                    <a href="#" className="inline-block mt-3 px-6 py-3 bg-accent text-black font-semibold
                 hover:bg-accent-dark transition rounded-sm">More Info</a>
            </div>
            <div className="md:w-1/2">
            <img 
            src={AboutImg}
            alt="About Us"
            loading="lazy"
            className="w-full object-cover"
            />
            </div>
        </section>
    )
}

export default AboutUs;