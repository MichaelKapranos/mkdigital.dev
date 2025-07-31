import '../css/magicMirror.css';

const MagicMirror: React.FC = () => {
  return (
    <div className="magicMirror-container">
      <h1 className="magicMirror-title">Magic Mirror</h1>
      <div className="magicMirror-content">
        <h2>Project Overview</h2>
        <p>
          This Magic Mirror was a collaborative project between myself and a designer (DT). The goal was to create a sleek, interactive smart mirror that combines aesthetics with functionality. I handled all software and Raspberry Pi integration, while DT focused on the physical build and design.
        </p>
        <img src="/images/mirror-final.jpg" alt="Finished Magic Mirror" className="project-image" />

        <h2>Hardware & Build</h2>
        <p>
          The mirror was built using a custom wooden frame, spray-painted for a modern finish. A standard monitor was mounted behind the frame and covered with Linarun one-way window film to create the reflective surface. An infrared (IR) touch frame was added to enable touchscreen functionality.
        </p>
        <p>• Custom wooden frame</p>
        <p>• Monitor behind reflective film</p>
        <p>• IR touch frame for interactivity</p>
        <p>• Raspberry Pi as the core controller</p>

        <h2>Software & Features</h2>
        <p>
          The mirror runs on MagicMirror², an open-source modular platform built with Node.js. I configured and extended modules to support touch gestures and dynamic content. Key features include:
        </p>
        <p>• Google Calendar integration</p>
        <p>• Local weather updates</p>
        <p>• YouTube video playback</p>
        <p>• Date and time display</p>
        <p>• Dim mode to hide all modules</p>

        <h2>Technical Highlights</h2>
        <p>
          The project involved scripting for auto-start, brightness control, and secure OAuth2 integration for calendar access. All modules are touch-enabled, allowing seamless interaction without external devices.
        </p>
        <p>• Node.js-based MagicMirror² platform</p>
        <p>• Custom module configuration</p>
        <p>• Touchscreen navigation via IR frame</p>
        <p>• Secure Google Calendar access</p>

        <h2>Outcome</h2>
        <p>
          The final product is a stylish, smart mirror that blends seamlessly into a living space while offering practical daily utilities. It was a rewarding experience combining hardware and software, and collaborating across disciplines.
        </p>
      </div>
    </div>
  );
};

export default MagicMirror;
