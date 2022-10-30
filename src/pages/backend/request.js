fetch("http://results.nith.ac.in/scheme21/studentresult/result.asp", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "http://results.nith.ac.in/scheme21/studentresult/index.asp",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "RollNumber=21dec002&CSRFToken=%7B53130C61-9E17-40E9-8ED9-7AE986432B7F%7D&RequestVerificationToken=A4EC468A-79B8-8CB2-176E-BE636546C635&B1=Submit",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
});
