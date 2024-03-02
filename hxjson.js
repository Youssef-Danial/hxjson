function access_object(object, key) {
  for (const element of key.split(".")) {
    object = object[element];
  }
  return object;
}
document.addEventListener("htmx:afterRequest", function (e) {
  if (e.detail.xhr.status == 404) {
    // htmx will show error details
    return;
  }
  if (e.srcElement.hasAttribute("hxjson")) {
    //searching the target for jsondata
    response_data = JSON.parse(e.detail.xhr.response);
    var jsondata_list = e.detail.target.querySelectorAll("[jsondata]");
    for (const element of jsondata_list) {
      if (element.hasAttribute("safe")) {
        element.innerHTML = access_object(
          response_data,
          element.attributes.jsondata.nodeValue
        );
      } else {
        element.textContent = access_object(
          response_data,
          element.attributes.jsondata.nodeValue
        );
      }
    }
  }
});
