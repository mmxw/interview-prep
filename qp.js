'use strict'

function parse(url) {
  const index = url.indexOf("?")
  const queryString = url.slice(index + 1).split("#")[0]
  const queryParams = queryString.split("&")
  const queryParamsArr = queryParams.map(query => query.split("="))

  const queryParamsObj=queryParamsArr.reduce((obj, [key, value]) => {
    obj[key]=value;
    return obj
  }, {})
  return queryParamsObj
}

console.log(parse('m.com/?a=2&b=1'))
module.exports = parse


