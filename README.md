# How to run the project

## Installation

On the command line, run:

`git clone https://github.com/bvodola/react-meteor-client-template.git proj-name`

`cd proj-name/server`

`npm install && meteor`

Now, open a new terminal window

`cd proj-name/client`

`npm install`

## Connecting the server to the client

After installing everything, you will have to connect the Meteor server to
the React client to make things work.

Open `./client/src/containers/AppContainer.jsx`;

Change the following line:

`Meteor.connect('ws://192.168.0.117:3000/websocket');`

to your IP address. Run `ifconfig` or `ipconfig` to find out your IP address.

## Running

On the command line, run:

 `npm start`
