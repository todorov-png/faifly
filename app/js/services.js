'use strict';

function formToJSON(form) {
  const formData = new FormData(form),
        json = JSON.stringify(Object.fromEntries(formData.entries()));

  return json;
}