# Status of Ticket:

**GET:** ~~Should be working properly!~~<br>
**_EDIT:_** Works great! 2.0 - will bundle similar interests together

**Save:** ~~Currently only saves to one placeId.~~<br>
**_EDIT:_** Save now adds to proper placeId.

**Edit:** ~~hand in hand with save placeId issues.~~<br>
**_EDIT:_** Edit now works! All features can be edited, as well as if you added the interest to the wrong placeId it can be changed.

**Delete:** ~~works, does not have alert before deleted.~~<br>
**_EDIT:_** Delete now has a working confirm before being deleted.

**Does not refresh DOM yet.**

## Project Setup

1. Clone this repository.
2. `cd src/lib`
3. `npm install`
4. run `grunt`

The web server will be started, and the JavaScript code in the `src/scripts` directory will be compiled into `public/bundle.js`.

1. Open Chome and make sure your developer tools are open.
1. Open [http://localhost:8080](http://localhost:8080) in your browser. This serves your project.
1. Open [http://localhost:8088](http://localhost:8088) in your browser. This serves your json-server.


