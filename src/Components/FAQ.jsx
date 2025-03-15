import React from 'react';

const FAQ = () => {
    return (
        <div className='w-11/12 mx-auto mb-16'>
            <div className='w-1/4 mx-auto border-2 border-[#F19100] mb-6'></div>

            <h2 className='text-4xl text-center font-black mb-8 dark:text-white'>FA<span className='text-[#F19100]'>Q'S </span> </h2>

            <div className="collapse collapse-arrow dark:text-black bg-[#F19100] mb-2" data-aos="fade-up"
                data-aos-duration="3000">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-bold"> What is the purpose of this website?</div>
                <div className="collapse-content">
                    <p>This website is dedicated to showcasing historical artifacts from various cultures and time periods. Our goal is to educate visitors about the significance of these artifacts, their origins, and the stories they tell about human history.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#F19100] mb-2 dark:text-black" data-aos="fade-up"
                data-aos-duration="3000">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">Can I contribute information or artifacts to the collection?</div>
                <div className="collapse-content">
                    <p>Yes, we welcome contributions! If you have historical artifacts or detailed information to share, please contact us. Our team will review your submission to ensure its authenticity and relevance to the collection.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#F19100] mb-2 dark:text-black" data-aos="fade-up"
                data-aos-duration="3000">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">Are the artifacts on display authentic?
                </div>
                <div className="collapse-content">
                    <p>We prioritize authenticity and collaborate with historians, archaeologists, and experts to verify the origin and authenticity of the artifacts in our collection. For items on loan, we ensure proper documentation and provenance.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#F19100] mb-2 dark:text-black" data-aos="fade-up"
                data-aos-duration="3000">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold"> How can I visit the physical location of these artifacts
                </div>
                <div className="collapse-content">
                    <p>If the artifacts are part of a physical museum or exhibition, details about visiting hours, location, and ticketing can be found on our "Visit Us" page. Some items may also be part of traveling exhibitions, and updates are regularly posted.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#F19100] mb-2 dark:text-black" data-aos="fade-up"
                data-aos-duration="3000">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">  Are there educational resources available for students or researchers?
                </div>
                <div className="collapse-content">
                    <p>Yes, we provide detailed articles, videos, and downloadable resources tailored for students, researchers, and educators. Visit the "Education" section to explore study guides, research papers, and lesson plans.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#F19100] mb-2 dark:text-black" data-aos="fade-up"
                data-aos-duration="3000">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold"> How do I know if an artifact has been ethically sourced?
                </div>
                <div className="collapse-content">
                    <p>We adhere to strict ethical guidelines for sourcing artifacts. Each item in our collection is thoroughly vetted to ensure it was acquired legally and ethically, with respect to cultural heritage and international laws.</p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;