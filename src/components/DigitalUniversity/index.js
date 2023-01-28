import "./index.css";

const DigitalUniversity = () => (
  <div className="digital-app-container">
    <h1 className="diversity-head">EdYoda Digital University</h1>
    <p className="diversity-para">Experience the future of education</p>
    <div className="university-list">
      <li className="list-container">
        <p className="list-head">Live Sessions</p>
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674897109/5fd17bd7d94da04b42c9a1a3_Group-Feature-3-v2_fai27w.jpg"
          alt="group feature"
          className="list-image"
        />
      </li>
      <li className="list-container">
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674897558/maxresdefault_oklvoe.jpg"
          alt="maxresdefault oklvoe"
          className="list-image-2"
        />
        <p className="list-head-2">
          100% ASSURED <br /> JOB OPPORTUNITIES
        </p>
      </li>
      <li className="list-container">
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674898270/Student-Success-dark-blue-background_n51cbj.png"
          alt="Student Success dark blue background"
          className="list-image-3"
        />
        <p className="list-head-3">STUDENT COMMUNITY</p>
      </li>
      <li className="list-container">
        <p className="list-head-2">CERTIFICATIONS</p>
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674898936/Professional-Certification-Web-Image-1_vmkoxu.png"
          alt="Professional Certification"
          className="list-image-3"
        />
      </li>
      <li className="list-container">
        <p className="list-head-2">
          GAMIFIED LEARNING <br /> EXPERIENCE
        </p>
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674899257/4-ways-gamification-transforms-elearning-experiences-e1466503692558_zuwn4x.png"
          alt="gamification"
          className="list-image-3"
        />
      </li>
      <li className="list-container">
        <p className="list-head-2">CLASSROOM ACCESS</p>
        <img
          src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1674899572/Providing-Access-to-EdTech-in-the-Classroom-_brbppw.png"
          alt="classroom"
          className="list-image-3"
        />
      </li>

      <h1 className="diversity-para-1">
        Explore our 100% Job Assured Programs
      </h1>
      <div className="university-list">
        <li className="list-container-1">
          <p className="programs-head">Tech Programs</p>
          <ul>
            <li className="list-item">FullStack Developer</li>
            <li className="list-item">Data Scientist</li>
          </ul>
          <button type="button" className="button">
            KNOW MORE
          </button>
        </li>
        <li className="list-container-1">
          <p className="programs-head">Business Programs</p>
          <ul>
            <li className="list-item">Digital Marketing</li>
            <li className="list-item">Customer Support</li>
          </ul>
          <button type="button" className="button">
            KNOW MORE
          </button>
        </li>
      </div>
      <div className="last">
        <h1 className="last-para">Join EdYoda Digital University Today</h1>
        <button className="button" type="button">
          JOIN NOW
        </button>
      </div>
    </div>
  </div>
);

export default DigitalUniversity;
