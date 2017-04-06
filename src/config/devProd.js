var serverPath;

if (__DEV__) {
  serverPath = 'http://localhost:5000/'
} else serverPath = 'https://sskickserver.herokuapp.com/';

export default serverPath;
