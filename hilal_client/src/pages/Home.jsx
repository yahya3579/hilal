
const Home = () => {

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to Hilal.gov.pk</h1>
            <p className="text-lg mb-6">
                This is the official front-end React application for Hilal.gov.pk.
                Explore the site to find important information, services, and updates.
            </p>
            <section className="space-y-4">
                <div className="bg-blue-100 p-4 rounded shadow">
                    <h2 className="text-2xl font-semibold">About Us</h2>
                    <p>
                        Learn more about the mission, vision, and services provided by Hilal.
                    </p>
                </div>
                <div className="bg-green-100 p-4 rounded shadow">
                    <h2 className="text-2xl font-semibold">Services</h2>
                    <p>
                        Access various public services and resources quickly and easily.
                    </p>
                </div>
                <div className="bg-yellow-100 p-4 rounded shadow">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <p>
                        Reach out to us for support or inquiries.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
