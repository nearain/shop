/**
*   start app
*/
require.config({
  paths: {
    'hello': './html/hello.html'
  }
})
define(['text!hello'], function(t) {
  return {
    start: function() {
      console.log('app started');
      console.log(t)
    }
  }
})
