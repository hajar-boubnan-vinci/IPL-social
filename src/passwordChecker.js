function hasMinimumLength(password) {
  return password.length >= 8;
}

function passwordSpecialCharChecker(password) {
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharPattern.test(password);
}

function passwordDigitChecker(password) {
  const digitPattern = /\d/;
  return digitPattern.test(password);
}

function passwordNoIPLChecker(password) {
  const iplPattern = /ipl/i;
  return !iplPattern.test(password);
}

function passwordChecker(password) {
  return hasMinimumLength(password) &&
         passwordSpecialCharChecker(password) &&
         passwordDigitChecker(password) &&
         passwordNoIPLChecker(password);
}

module.exports = {
  passwordChecker,
  hasMinimumLength,
  passwordSpecialCharChecker,
  passwordDigitChecker,
  passwordNoIPLChecker
};