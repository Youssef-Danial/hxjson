function access_object(object, key) {
    for (const element of key.split(".")) {
      object = object[element];
    }
    return object;
  }
  document.addEventListener("htmx:afterRequest", function (e) {
    if (e.srcElement.hasAttribute("hxjson")) {
      response_data = JSON.parse(e.detail.xhr.response);
      console.log(response_data);
      var jsondata_list = e.detail.target.querySelectorAll("[jsondata]");
      for (const element of jsondata_list) {
        element.innerHTML = access_object(
          response_data,
          element.attributes.jsondata.nodeValue
        );
      }
    }
  });
