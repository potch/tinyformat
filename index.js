var re = /\{\{([^}]+)\}\}/g;

function format(s, vals) {
  if (!(vals instanceof Array || vals instanceof Object)) {
    vals = Array.prototype.slice.call(arguments, 1);
  }

  return s.replace(re, function(_, match) {
    match = match.trim();
    var val = vals[match];
    if (typeof val === 'undefined') {
      return '';
    } else {
      if (val instanceof Array) {
        return val.join('');
      }
      if (typeof val === 'object') {
        return JSON.stringify(object);
      }
      return val;
    }
  });
}

function template(s) {
  return function(vals) {
    return format(s, vals);
  };
}

module.exports = {
  format: format,
  template: template
};
