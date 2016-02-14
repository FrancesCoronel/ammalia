# Install the Python Requests library:
# `pip install requests`

import requests


def send_request():
    # upload
    # POST https://api-content.dropbox.com/2-beta/files/upload

    try:
        response = requests.post(
            url="https://api-content.dropbox.com/2-beta/files/upload",
            headers={
                "Dropbox-API-Arg": "{\"path\":\"/cupcake.png\",\"mode\":\"overwrite\"}",
                "Authorization": "Bearer [INSERT PERSONAL ACCESS TOKEN HERE]",
                "Content-Type": "application/octet-stream",
            },
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')

# Expected Response
# {
#   "name": "cupcake.png",
#   "path_lower": "/cupcake.png",
#   "id": "id:CYC1b2afOyMAAAAAAA6Flw",
#   "client_modified": "2016-02-14T05:42:31Z",
#   "server_modified": "2016-02-14T05:42:31Z",
#   "rev": "2055f829aa9b33",
#   "size": 0
# }