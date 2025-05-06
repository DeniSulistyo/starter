import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const App = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
       <div style={{ padding: '20px' ,}}>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Borang_Visimisi.pdf</p>
            <button>Download</button>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
            <div
                style={{
                    height: '550px',
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '20px',  
                }}
            >
                <Viewer
                    fileUrl={`${process.env.PUBLIC_URL}/borang_example.pdf`}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </div>
        </Worker>
       </div>
    );
};

export default App;
