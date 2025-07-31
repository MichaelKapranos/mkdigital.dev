import '../css/piHole.css';

const PiHole: React.FC = () => {
  return (
    <div className="piHole-container">
      <h1 className="piHole-title">Pi-hole</h1>
      <div className="piHole-content">
        <h2>Project Overview</h2>
        <p>
          This project involved setting up a network-wide ad blocker using Pi-hole on a Raspberry Pi 2W. The aim was to improve browsing speed and reduce intrusive content across all devices connected to my home Wi-Fi.
        </p>

        <h2>Setup & Configuration</h2>
        <p>
          I installed the Pi-hole software on the Raspberry Pi 2W and configured it as the primary DNS server for my network. This setup ensures that all Wi-Fi traffic is routed through Pi-hole before reaching the internet, allowing it to block unwanted domains at the network level.
        </p>
        <p>• Raspberry Pi 2W running Pi-hole</p>
        <p>• Pi-hole configured as the DNS resolver</p>
        <p>• Wi-Fi traffic routed through Pi-hole</p>
        <p>• Additional ad blocker installed to enhance filtering</p>

        <h2>Dashboard & Monitoring</h2>
        <p>
          Pi-hole includes a web-based dashboard that provides real-time statistics on DNS queries, blocked domains, and client activity. This gives full visibility into network usage and ad-blocking performance.
        </p>
        <img src="/images/pihole-dashboard.jpg" alt="Pi-hole dashboard display" className="project-image" />

        <h2>Outcome</h2>
        <p>
          The result is a faster, cleaner browsing experience across all devices on the network. This project was a practical and effective way to enhance home network performance using lightweight hardware and open-source tools.
        </p>
      </div>
    </div>
  );
};

export default PiHole;
