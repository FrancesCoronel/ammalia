# Install the Python Requests library:
# `pip install requests`

import requests
import json


def send_request():
    # list_folder
    # POST https://api.dropbox.com/2-beta/files/list_folder

    try:
        response = requests.post(
            url="https://api.dropbox.com/2-beta/files/list_folder",
            headers={
                "Authorization": "Bearer [INSERT PERSONAL ACCESS TOKEN HERE]",
            },
            data=json.dumps({
                "path": ""
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
#   "entries": [
#     {
#       "folder": {
#         "name": "1Password",
#         "path_lower": "/1password",
#         "id": "id:CYC1b2afOyMAAAAAAAAQeQ"
#       }
#     },
#     {
#       "folder": {
#         "name": "Raindrop.io",
#         "path_lower": "/raindrop.io",
#         "id": "id:CYC1b2afOyMAAAAAAAAyGg"
#       }
#     },
#     {
#       "folder": {
#         "name": "Screenshots",
#         "path_lower": "/screenshots",
#         "id": "id:CYC1b2afOyMAAAAAAA6FlA"
#       }
#     },
#     {
#       "folder": {
#         "name": "YNAB",
#         "path_lower": "/ynab",
#         "id": "id:6HHdCVxwOvAAAAAAAAAAAQ"
#       }
#     },
#     {
#       "file": {
#         "name": ".ynabSettings.yroot",
#         "path_lower": "/.ynabsettings.yroot",
#         "id": "id:FCN_JDsHU8AAAAAAAAAAAQ",
#         "client_modified": "2015-12-22T20:13:00Z",
#         "server_modified": "2015-12-22T20:13:03Z",
#         "rev": "2051f329aa9b33",
#         "size": 136
#       }
#     },
#     {
#       "folder": {
#         "name": "Apps",
#         "path_lower": "/apps",
#         "id": "id:CYC1b2afOyMAAAAAAA6Flg"
#       }
#     }
#   ],
#   "cursor": "AAE-UCyb-Xqp2ztoJEXlFKmSAZZ-qcF5oMAmOhJbvoI52boFZqdXH7WDBQxtNmmUgCSEY6KRQjJqegZj97L0jngrJToPE3OX32pv0rfg2peJjxnjX6c21GQW_cTCBVXFDHHal9bRUvQIPV48THeI8OTQ",
#   "has_more": false
# }