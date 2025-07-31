import '../css/gameServer.css';

const GameServer: React.FC = () => {
  return (
    <div className="gameServer-container">
      <h1 className="gameServer-title">Game Server Box</h1>
      <div className="gameServer-content">
        <h2>Project Overview</h2>
        <p>
          This project was created to strengthen my skills in Linux command line and Docker. I repurposed a small Windows box by wiping it and flashing a minimal Ubuntu installation (no GUI) using a microSD card. The goal was to manage everything through the terminal and build a lightweight, efficient server environment.
        </p>

        <h2>Setup & Configuration</h2>
        <p>
          After installing Ubuntu, I configured the system entirely via the command line. I used the box to host multiple game servers, each isolated in its own Docker container. This allowed me to run them simultaneously while keeping resource usage low and management simple.
        </p>
        <p>• Flashed Ubuntu (no GUI) onto a microSD card</p>
        <p>• Installed and configured via Linux terminal</p>
        <p>• Hosted multiple game servers</p>
        <p>• Each server containerized using Docker</p>
        <p>• Efficient use of system resources and disk space</p>

        <h2>Networking</h2>
        <p>
          To allow external access to the game servers, I configured port forwarding rules on my router. This enabled friends outside my local network to connect and play, while keeping the system secure and isolated.
        </p>
        <p>• Port forwarding for external access</p>
        <p>• Isolated containers for security and stability</p>

        <h2>Outcome</h2>
        <p>
          This project gave me hands-on experience with headless Linux environments, Docker containerization, and network configuration. It was a practical and rewarding way to deepen my understanding of server management and DevOps fundamentals.
        </p>
      </div>
    </div>
  );
};

export default GameServer;
