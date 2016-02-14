# Install the Python Requests library:
# `pip install requests`

import requests


def send_request():
    # download
    # POST https://api-content.dropbox.com/2-beta/files/download

    try:
        response = requests.post(
            url="https://api-content.dropbox.com/2-beta/files/download",
            headers={
                "Dropbox-API-Arg": "{\"path\":\"/cupcake.png\"}",
                "Authorization": "Bearer O-meyWYAZlkAAAAAAABIJndtcZLEMTTqKQyjUrMiW97G9w-8GpTv5BM9GWTODon4",
            },
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')

# Expected Response
#
# HTTP/1.1 200 OK
# Server: nginx
# Date: Sun, 14 Feb 2016 06:20:40 GMT
# Content-Type: application/octet-stream
# Content-Length: 0
# Connection: close
# accept-ranges: bytes
# pragma: no-cache
# cache-control: no-cache
# original-content-length: 0
# dropbox-api-result: {"name": "cupcake.png", "path_lower": "/cupcake.png", "id": "id:CYC1b2afOyMAAAAAAA6Flw", "client_modified": "2016-02-14T05:42:31Z", "server_modified": "2016-02-14T05:42:31Z", "rev": "2055f829aa9b33", "size": 0}
# X-Server-Response-Time: 96
# X-Dropbox-Request-Id: e3d651cddefda8748118b7035cf41b2a
# X-Robots-Tag: noindex, nofollow, noimageindex