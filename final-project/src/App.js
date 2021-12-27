import Routes from "./Routes";
import { UserProvider } from "./UserContext";
import { GameProvider } from "./ContextGame";
import { MovieProvider } from "./ContextMovie";

function App() {
  return (

    <UserProvider>
      {/* <MovieProvider>
      <GameProvider> */}
      <Routes />
    {/* </GameProvider>
    </MovieProvider> */}
    </UserProvider>
  );
}

export default App;
