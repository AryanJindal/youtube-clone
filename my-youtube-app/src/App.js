import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children: [
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/demo",
        element:<Demo/>
      }
    ]
  }
  
])

function App() {
  return (
    <Provider store={store}>
      {/* {console.log(store)} */}
      <div className="App">
        <Head />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
