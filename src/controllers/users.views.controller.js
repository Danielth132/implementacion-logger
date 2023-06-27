export function login(req, res) {
  res.render("login");
}

export function register(req, res) {
  res.render("register");
}

export function profile(req, res) {
  res.render("profile", {
    //si se utiliza sesiones:
    // user: req.session.user,

    //si se utiliza JWT:
    user: req.user,
  });
}
