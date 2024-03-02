import {useEffect} from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex relative dart:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
              <TooltipComponent content='settings' position = "Top">
                <button>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
