module.exports = {
  "env": {
    "browser": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console":0,
    "indent": 0
    // [
    //   "error",
    //   2,
    //   {
    //     "SwitchCase": 1
    //   }
    // ],
    ,
    "no-unused-vars": 0,
    "linebreak-style": 0,
    // [
    //   "error",
    //   "unix"
    // ], // solve to Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style on windows
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "globals": {
    "WebFont": true,
    "fnSendSns": true,
    "Kakao": true,
    "isMobile": true,
    "TweenMax": true,
    "TimelineMax": true,
    "Linear": true,
    "Power1": true,
    "Bounce": true,
    "Elastic": true,
    "Draggable": true,
    "aprilTweens": true,
    "SplitText": true,
    "ScrollMagic": true,
    "controller": true,
    "jatracker": true,
    "Strong":true,
    "Power3":true,
    "upTween":true,
    "handle":true
  }
};