import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import FAQ from "./pages/faq/FAQ";
import Calendar from "./pages/calendar/Calendar";
import Contacts from "./pages/contacts/Contacts";
import Form from "./pages/form/Form";
import Bar from "./pages/bar/Bar";
import Pie from "./pages/pie/Pie";
import Line from "./pages/line/Line";
import Geography from "./pages/geography/Geography";
import Invoices from "./pages/invoices/Invoices";

import TopBar from "./global/TopBar";
import SidebarMenu from "./global/SidebarMenu";
import Header from "./components/Header";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <aside>
            <SidebarMenu />
          </aside>
          <main className="content">
            <TopBar />
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
