# vttl-reactive-1
Find out about reactive to develop an app for table tennis

## To get started

1. make sure node.js and npm are installed. I used v7.10.1 (node) and 4.2.0 (npm)
2. execute npm install to have all the required libraries installed locally
3. `npm start`
4. if this doesn't work, follow the instructions.
> Unable to start server
>  See https://git.io/v5vcn for more information, either install watchman or run the following snippet:
>
> `sudo sysctl -w fs.inotify.max_user_instances=1024`
>
> `sudo sysctl -w fs.inotify.max_user_watches=12288`
>
> `sudo sysctl -w fs.inotify.max_queued_events=9999`

This can also be done by editing /etc/sysctl.conf (note that this file may be regenerated when Ubuntu is updated?)

5. Open your app in the [Expo app](https://expo.io/) using the QR code produced on the console line.
> Note that these are handy at any time:
>
> › Press a to open Android device or emulator, or i to open iOS emulator.
>
> › Press q to display QR code.
>
> › Press r to restart packager, or R to restart packager and clear cache.
>
> › Press d to toggle development mode. (current mode: development)

## To build

1. run either `npm run env`, `npm run env:staging` or `npm run env:production` to set properties for dev of production. This will copy config.json to app.json and insert 'extra' properties in app.json, depending on the environment. 
2. run `npm build` ?? TBD

## Troubleshooting

* If you are running into trouble with watchman, issue the following command

   `watchman watch-project dir`

   where dir is your project directory

* If you can not connect to your device when it is plugged in via USB, check that is in USB mode 'Exchange files' and allow your computer to transfer files.


## Useful links
* [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [unknown image](https://github.com/oblador/react-native-image-progress/issues/22)

## Tools used
* Atom 
* Visual Studio Code
* MySQL Workbench

