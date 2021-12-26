import Routes from "./Routes";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
