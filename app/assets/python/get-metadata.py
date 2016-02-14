# Install the Python Requests library:
# `pip install requests`

import requests
import json


def send_request():
    # get_metadata
    # POST https://api.dropbox.com/2-beta/files/get_metadata

    try:
        response = requests.post(
            url="https://api.dropbox.com/2-beta/files/get_metadata",
            headers={
                "Authorization": "Bearer [INSERT PERSONAL ACCESS TOKEN HERE]",
            },
            data=json.dumps({
                "path": "/cupcake.png"
            })
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')

# Expected Response
# {
#   "file": {
#     "name": "cupcake.png",
#     "path_lower": "/cupcake.png",
#     "id": "id:CYC1b2afOyMAAAAAAA6Flw",
#     "client_modified": "2016-02-14T05:42:31Z",
#     "server_modified": "2016-02-14T05:42:31Z",
#     "rev": "2055f829aa9b33",
#     "size": 0
#   }
# }