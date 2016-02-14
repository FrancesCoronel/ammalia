# Install the Python Requests library:
# `pip install requests`

import requests


def send_request():
    # get_my_account
    # POST https://api.dropbox.com/2-beta/users/get_current_account

    try:
        response = requests.post(
            url="https://api.dropbox.com/2-beta/users/get_current_account",
            headers={
                "Authorization": "Bearer [INSERT PERSONAL ACCESS TOKEN HERE]",
                "Content-Type": "application/json",
            },
            data="null"
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')

# Expected Response
# {
#   "account_id": "dbid:AADQvDjqVpqhvodXSj6uyIRrHfakY3Z-bfM",
#   "name": {
#     "given_name": "Violet",
#     "surname": "Siegius",
#     "familiar_name": "Violet",
#     "display_name": "Violet Siegius"
#   },
#   "email": "fvcproductions@gmail.com",
#   "email_verified": true,
#   "profile_photo_url": "https://dl-web.dropbox.com/account_photo/get/dbid%3AAADQvDjqVpqhvodXSj6uyIRrHfakY3Z-bfM?vers=1433287836218&size=128x128",
#   "country": "US",
#   "locale": "en",
#   "referral_link": "https://db.tt/BouyytDU",
#   "is_paired": false,
#   "account_type": "basic"
# }