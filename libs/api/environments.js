module.exports.list = {
  method: "GET",
  path: function(data) { 
    return "/v2/environments" 
  },
  payload: ["pipeline"]
}

module.exports.view = {
  method: "GET",
  path: function(data) { 
    return "/v2/environments/" + data.environment 
  },
  payload: ["pipeline"]
}

module.exports.logs = {
  method: "GET",
  path: function(data) { 
    return "/v2/environments/" + data.environment + "/logs"
  },
  payload: ["pipeline"]
}

module.exports.logs_rollback = {
  method: "POST",
  path: function(data) { 
    return "/v2/environments/" + data.environment + "/logs/" + data.log + "/rollback"
  },
  payload: ["pipeline"]
}

module.exports.create = {
  method: "POST",
  path: function(data) { 
    return "/v2/environments" 
  },
  payload: ["pipeline", "stage", "name"]
}

module.exports.update = {
  method: "POST",
  path: function(data) { 
    return "/v2/environments/" + data.environment 
  },
  payload: ["pipeline", "name"]
}

module.exports.delete = {
  method: "DELTE",
  path: function(data) { 
    return "/v2/environments/" + data.environment 
  },
  payload: ["pipeline"]
}