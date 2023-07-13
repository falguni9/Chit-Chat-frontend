import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route ,Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Homepage /> } />
        <Route path="/chats" element= {<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;
// @chakra-ui/icons @chakra-ui/react @emotion/react @emotion/styled axios framer-motion

// socket.io - client;react - scrollable - feed;

  //  "@chakra-ui/icons": "^1.0.13",
  //   "@chakra-ui/react": "^1.6.2",
  //   "@emotion/react": "^11",
  //   "@emotion/styled": "^11",
  //   "@testing-library/jest-dom": "^5.11.4",
  //   "@testing-library/react": "^11.1.0",
  //   "@testing-library/user-event": "^12.1.10",
  //   "axios": "^0.21.1",
  //   "framer-motion": "^4",
  //   "react": "^17.0.2",
  //   "react-chips": "^0.8.0",
  //   "react-dom": "^17.0.2",
  //   "react-lottie": "^1.2.3",
  //   "react-notification-badge": "^1.5.1",
  //   "react-router-dom": "^5.2.0",
  //   "react-scripts": "4.0.3",
  //   "react-scrollable-feed": "^1.3.1",
  //   "socket.io-client": "^4.1.2",
  //   "web-vitals": "^1.0.1"