#!/bin/python
import requests


def more(text):
    count = 0
    for line in text.split("\n"):
        print(line)
        count += 1
        if count % 30 == 0:
            reply = input("Show more (y/n)?")
            if reply == "n":
                break


def main():
    url = "http://python.org/"

    with requests.get(url) as response:
        html = response.text
        # more(html)

        # https://www.w3schools.com/PYTHON/ref_requests_response.asp
        # This is the cookies already collected by the website
        cookies = response.cookies
        print(cookies)

        headers = response.headers
        print(headers)

        server = headers.get("Server")
        print(server)

        cookies = headers.get("Set-Cookie")
        # print(headers.keys())

        for key, value in headers.items():
            print(f"{key}: {value}")


if __name__ == "__main__":
    main()
