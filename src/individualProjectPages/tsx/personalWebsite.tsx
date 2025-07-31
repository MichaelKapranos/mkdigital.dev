import '../css/personalWebsite.css';

const PersonalWebsite: React.FC = () => {
  return (
    <div className="personalWebsite-container">
      <h1 className="personalWebsite-title">Personal Portfolio Website</h1>
      <div className="personalWebsite-content">
        <h2>Overview</h2>
        <p>
          This website was built as a personal portfolio to showcase my technical projects, experience, and skills. It is fully custom-built using React with TypeScript, HTML, and CSS, and deployed using AWS services.
        </p>

        <h2>Infrastructure & Hosting</h2>
        <p>
          I used <strong>AWS Amplify</strong> to host the website, which provides a scalable and secure platform for static web apps. The domain was purchased through <strong>GoDaddy</strong>, and I manually configured <strong>Route 53</strong> to handle DNS routing.
        </p>
        <p>• Domain purchased via GoDaddy</p>
        <p>• SSL certificate provisioned using AWS Certificate Manager (ACM)</p>
        <p>• Manual DNS setup in Route 53 (CNAME records, domain routing)</p>
        <p>• Hosted on AWS Amplify</p>

        <h2>CI/CD Integration</h2>
        <p>
          I integrated the website with Git to enable continuous deployment. Any changes pushed to the repository are automatically built and deployed via Amplify, providing a seamless CI/CD pipeline.
        </p>
        <p>• Git-based deployment pipeline</p>
        <p>• Automatic builds and deploys on push</p>
        <p>• Efficient version control and rollback support</p>

        <h2>Frontend Development</h2>
        <p>
          The site is developed using <strong>React</strong> with <strong>.tsx</strong> files for type safety and modularity. I used standard HTML and CSS for layout and styling, ensuring a responsive and accessible design.
        </p>
        <p>• React with TypeScript (.tsx)</p>
        <p>• HTML and CSS for structure and styling</p>
        <p>• Modular, component-based architecture</p>
        <p>• Designed for responsiveness and clarity</p>

        <h2>Outcome</h2>
        <p>
          The result is a clean, professional portfolio that reflects my technical capabilities and project experience. It’s designed to be easily extendable as I continue to grow and take on new challenges.
        </p>
      </div>
    </div>
  );
};

export default PersonalWebsite;
