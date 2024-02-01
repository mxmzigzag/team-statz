import { Route, Routes } from "react-router-dom";

import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Player from "./pages/Player";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="player/:id" element={<Player />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
