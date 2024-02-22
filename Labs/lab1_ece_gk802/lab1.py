#!/bin/python
import requests
import datetime

# 1. παιρνει url απο τον χρηστη
url = input("URL: ")
# url = "http://python.org/" # Doesn't have cookies
# url = "https://www.youtube.com" # Has Cookies


# 2.Πραγματοποιηση αιτηματος http request
with requests.get(url) as response:  # το αντικείμενο response
    # 3. headers 
    headers = response.headers
    h = '\n'.join([f"{header}: {headers[header]}" for header in headers])
    print(f"Headers:\n{h}")

    # 4. Πληροφοριες για την ιστοσελιδα

    print(f'\nSoftware of the server: {headers["Server"] if "Server" in headers.keys() else "No information available"}')

    if "set-cookie" in headers.keys():
        cookies = response.cookies
        for cookie in cookies:
            print(f"\nThe site uses cookie.\nName: {cookie.name}\nValue: {cookie.value}\nExpiration Date: {datetime.datetime.fromtimestamp(float(cookie.expires)) if cookie.expires is not None else 'Does Not Expire'}")        
    else:
        print('\nThe site does not use cookies')
