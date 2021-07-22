import logo from "./logo.svg";
import "./App.css";
import RouterApp from "./routes/router";
import MainLayout from "./layout/main.layout";

function App() {
  return (
    <div className="app">
      <MainLayout>
        <RouterApp></RouterApp>
      </MainLayout>
    </div>
  );
}

export default App;
