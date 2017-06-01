## Installation

On the command line, run:

`git clone https://github.com/bvodola/react-meteor-client-template.git proj-name`

`cd proj-name/server && npm install`

`cd ../client && npm install`

`npm start`

## Connecting the server to the client

After installing everything following the above steps, you will have to connect the Meteor server to
the React client to make things work.

Open `./client/src/containers/AppContainer.jsx`;

Change the following line:

`Meteor.connect('ws://192.168.0.117:3000/websocket');`

to your IP address. Run `ifconfig` or `ipconfig` to find out your IP address.
