import React, { useState } from 'react';
import './career.css';

const Career = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Tour Manager',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We\'re looking for an experienced Tour Manager to coordinate travel logistics, itineraries, and client experiences.',
      responsibilities: [
        'Develop detailed itineraries for clients',
        'Coordinate with local vendors and service providers',
        'Manage travel logistics including transportation and accommodations',
        'Ensure high-quality client experiences throughout the tour',
        'Handle any issues that arise during tours quickly and effectively'
      ],
      requirements: [
        'Previous experience in tour management or hospitality',
        'Excellent organizational and communication skills',
        'Problem-solving abilities and crisis management',
        'Proficiency with travel booking systems',
        'Multilingual skills are a plus'
      ]
    },
    {
      id: 2,
      title: 'Customer Service Representative',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our team to provide exceptional support to our clients before, during, and after their tours.',
      responsibilities: [
        'Answer customer inquiries via phone, email, and chat',
        'Assist with booking procedures and provide information about our services',
        'Address and resolve customer complaints',
        'Maintain customer records and follow up on pending issues',
        'Collaborate with tour managers to ensure seamless experiences'
      ],
      requirements: [
        'Previous customer service experience',
        'Excellent verbal and written communication skills',
        'Ability to remain calm under pressure',
        'Basic computer skills and CRM experience',
        'Availability for occasional weekend shifts'
      ]
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      location: 'On-site',
      type: 'Full-time',
      description: 'We need a creative Marketing Specialist to help grow our brand presence and attract new clients to our tour services.',
      responsibilities: [
        'Develop and implement marketing strategies',
        'Manage social media accounts and create engaging content',
        'Analyze marketing data and adjust campaigns accordingly',
        'Coordinate with external partners for promotional opportunities',
        'Design marketing materials for digital and print use'
      ],
      requirements: [
        'Degree in Marketing or related field',
        '2+ years experience in digital marketing',
        'Proficiency with social media management tools',
        'Basic graphic design skills',
        'Knowledge of SEO and content marketing strategies'
      ]
    }
  ];

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setShowJobDetails(true);
    setFormData({...formData, position: job.title});
    window.scrollTo(0, 0);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleBackToJobs = () => {
    setShowJobDetails(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleFileChange = (e) => {
    setFormData({...formData, resume: e.target.files[0]});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server
    alert('Application submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: selectedJob ? selectedJob.title : '',
      resume: null,
      message: ''
    });
  };

  return (
    <div className="career-container">
      <div className="career-hero">
        <h1>Join Our Team</h1>
        <p>Build your career with sTaggerS and help create unforgettable experiences for travelers around the world.</p>
      </div>

      {!showJobDetails ? (
        <div className="career-content">
          <div className="career-tabs">
            <button 
              className={activeTab === 'openings' ? 'active' : ''} 
              onClick={() => handleTabChange('openings')}
            >
              Current Openings
            </button>
            <button 
              className={activeTab === 'benefits' ? 'active' : ''} 
              onClick={() => handleTabChange('benefits')}
            >
              Benefits & Culture
            </button>
            <button 
              className={activeTab === 'process' ? 'active' : ''} 
              onClick={() => handleTabChange('process')}
            >
              Hiring Process
            </button>
          </div>

          {activeTab === 'openings' && (
            <div className="job-listings">
              <h2>Current Job Openings</h2>
              <div className="jobs-grid">
                {jobs.map(job => (
                  <div className="job-card" key={job.id}>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                      <span><i className="fas fa-clock"></i> {job.type}</span>
                    </div>
                    <p>{job.description}</p>
                    <button onClick={() => handleViewJob(job)}>View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="benefits-section">
              <h2>Why Work With Us</h2>
              
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🌍</div>
                  <h3>Travel Opportunities</h3>
                  <p>Get discounted or free travel experiences with our tour packages.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">💼</div>
                  <h3>Professional Growth</h3>
                  <p>Continuous learning and career advancement opportunities.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🏥</div>
                  <h3>Health Benefits</h3>
                  <p>Comprehensive health, dental, and vision insurance for you and your family.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">⏰</div>
                  <h3>Flexible Schedule</h3>
                  <p>Work-life balance with flexible working hours when possible.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🎉</div>
                  <h3>Team Events</h3>
                  <p>Regular team-building activities and company celebrations.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">💰</div>
                  <h3>Competitive Salary</h3>
                  <p>Above-industry compensation packages based on experience.</p>
                </div>
              </div>
              
              <div className="culture-section">
                <h2>Our Culture</h2>
                <p>At sTaggerS, we believe in creating a workplace that inspires creativity, fosters growth, and celebrates diversity. Our team members are passionate about travel and committed to providing exceptional experiences for our clients.</p>
                
                <div className="culture-values">
                  <div className="value">
                    <h3>Innovation</h3>
                    <p>We encourage new ideas and approaches to enhance our services.</p>
                  </div>
                  
                  <div className="value">
                    <h3>Collaboration</h3>
                    <p>We work together across departments to achieve our common goals.</p>
                  </div>
                  
                  <div className="value">
                    <h3>Excellence</h3>
                    <p>We strive for the highest quality in everything we do.</p>
                  </div>
                  
                  <div className="value">
                    <h3>Respect</h3>
                    <p>We value and respect all individuals, both team members and clients.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="process-section">
              <h2>Our Hiring Process</h2>
              
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Application Review</h3>
                    <p>Our team reviews your application materials to assess your qualifications.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Initial Interview</h3>
                    <p>A phone or video call to discuss your experience and interest in the position.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Skills Assessment</h3>
                    <p>Depending on the role, you may be asked to complete a relevant skills test.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Team Interview</h3>
                    <p>Meet with potential team members and discuss collaborative scenarios.</p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3>Final Decision</h3>
                    <p>We'll make our decision and extend an offer to the selected candidate.</p>
                  </div>
                </div>
              </div>
              
              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                
                <div className="faq-item">
                  <h3>How long does the hiring process take?</h3>
                  <p>Typically, our process takes 2-3 weeks from application to final decision.</p>
                </div>
                
                <div className="faq-item">
                  <h3>Do you offer relocation assistance?</h3>
                  <p>For certain positions, we may offer relocation packages. This is discussed during the interview process.</p>
                </div>
                
                <div className="faq-item">
                  <h3>Can I apply for multiple positions?</h3>
                  <p>Yes, you can apply for multiple positions if you meet the qualifications for each.</p>
                </div>
                
                <div className="faq-item">
                  <h3>What if there are no current openings in my field?</h3>
                  <p>You can submit a general application, and we'll keep your information on file for future opportunities.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="job-details-container">
          <button className="back-button" onClick={handleBackToJobs}>
            &larr; Back to all jobs
          </button>
          
          <div className="job-details">
            <h2>{selectedJob.title}</h2>
            <div className="job-meta">
              <span><i className="fas fa-map-marker-alt"></i> {selectedJob.location}</span>
              <span><i className="fas fa-clock"></i> {selectedJob.type}</span>
            </div>
            
            <div className="job-description">
              <h3>Job Description</h3>
              <p>{selectedJob.description}</p>
            </div>
            
            <div className="job-responsibilities">
              <h3>Responsibilities</h3>
              <ul>
                {selectedJob.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            
            <div className="job-requirements">
              <h3>Requirements</h3>
              <ul>
                {selectedJob.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="application-form">
            <h2>Apply for this Position</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input 
                  type="text" 
                  id="position" 
                  name="position" 
                  value={formData.position} 
                  onChange={handleInputChange} 
                  disabled 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="resume">Upload Resume (PDF)</label>
                <input 
                  type="file" 
                  id="resume" 
                  name="resume" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Cover Letter / Additional Information</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}
      
      <div className="career-contact">
        <h2>Have Questions?</h2>
        <p>Contact our HR team at <a href="mailto:careers@staggers.com">careers@staggers.com</a></p>
      </div>
    </div>
  );
};

export default Career;