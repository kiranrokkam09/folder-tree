import React from 'react';
import FolderTree from './components/FolderTree';

function App() {
  let data = [
    {
      "name": "Documents/Document1.jpg",
      "description": "You are inside Documents/Document1.jpg",
      "id": "id-Documents_Document1.jpg",
      "delete":"false"
    },
    {
      "name": "Documents/Document2.jpg",
      "description": "You are inside Documents/Document2.jpg",
      "id": "id-Documents_Document2.jpg",
      "delete":"false"
    },
    {
      "name": "Documents/Document3.jpg",
      "description": "You are inside Documents/Document3.jpg",
      "id": "id-Documents_Document3.jpg",
      "delete":"false"
    },
    {
      "name": "Desktop/Screenshot1.jpg",
      "description": "You are inside Desktop/Screenshot1.jpg",
      "id": "id-Desktop_Screenshot1.jpg",
      "delete":"false"
    },
    {
      "name": "Desktop/videopal.mp4",
      "description": "You are inside Desktop/videopal.mp4",
      "id": "id-Desktop_videopal.mp4",
      "delete":"false"
    },
    {
      "name": "Downloads/Drivers/Printerdriver.dmg",
      "description": "You are inside Downloads/Drivers/Printerdriver.dmg",
      "id": "id-Downloads_Drivers_Printerdriver.dmg",
      "delete":"false"
    },
    {
      "name": "Downloads/Drivers/cameradriver.dmg",
      "description": "You are inside Downloads/Drivers/cameradriver.dmg",
      "id": "id-Downloads_Drivers_cameradriver.dmg",
      "delete":"false"
    },
    {
      "name": "Downloads/Applications/Webstorm.dmg",
      "description": "You are inside Downloads/Applications/Webstorm.dmg",
      "id": "id-Downloads_Applications_Webstorm.dmg",
      "delete":"false"
    },
    {
      "name": "Downloads/Applications/Pycharm.dmg",
      "description": "You are inside Downloads/Applications/Pycharm.dmg",
      "id": "id-Downloads_Applications_Pycharm.dmg",
      "delete":"false"
    },
    {
      "name": "Downloads/Applications/FileZila.dmg",
      "description": "You are inside Downloads/Applications/FileZila.dmg",
      "id": "id-Downloads_Applications_FileZila.dmg",
      "delete":"false"
    },
    {
      "name": "Downloads/Applications/Mattermost.dmg",
      "description": "You are inside Downloads/Applications/Mattermost.dmg",
      "id": "id-Downloads_Applications_Mattermost.dmg",
      "delete":"false"
    },
    {
      "name": "Downloads/chromedriver.dmg",
      "description": "You are inside Downloads/chromedriver.dmg",
      "id": "id-Downloads_chromedriver.dmg",
      "delete":"false"
    }
]
  

  return (
    <div>
      <FolderTree data={data} />
    </div>
  );
}

export default App;