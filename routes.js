const logger = require('./utils/loggerWinston');

const getRoute = (req, res) => {
  logger.info('getRoute');
  res.render('login', {});
};

const getLogin = (req, res) => {
  logger.info('getLogin');

  if (req.isAuthenticated()) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render('profileUser', { user });
  } else {
    res.render('login', {});
  }
};

const getFailLogin = (req, res) => {
  logger.info('getFailLogin');
  res.render('failLogin', {});
};

const getSignUp = (req, res) => {
  logger.info('getSignUp');

  if (req.isAuthenticated()) {
    const { username, password } = req.user;
    const user = { username, password };
    res.render('profileUser', { user });
  } else {
    res.render('signup');
  }
};

const getFailSignUp = (req, res) => {
  logger.info('getFailSignUp');

  res.render('failSignUp', {});
};

const getLogout = (req, res) => {
  logger.info('getLogout');

  const { username } = req.user;
  console.log(username);
  req.session.destroy((err) => {
    if (err) {
      res.send('No se pudo deslogear');
    } else {
      res.render('logout', { user: username });
    }
  });
};

const failRoute = (req, res) => {
  logger.warn('failRoute');
  res.render('failRoute', {});

  res.status(404);
};

const postLogin = (req, res) => {
  logger.info('postLogin');

  const { username, password } = req.user;
  const user = { username, password };
  res.render('profileUser', { user });
};

const postSignUp = (req, res) => {
  logger.info('postSignUp');

  const { username, password } = req.user;
  const user = { username, password };
  res.render('successSignUp', { user });
};

const getInfo = (req, res) => {
  logger.info('getInfo');
  // console.log('prueba peso')
  res.render('info', {});
};

module.exports = { getRoute, getLogin, getInfo, getFailLogin, getSignUp, getFailSignUp, failRoute, getLogout, postLogin, postSignUp };
