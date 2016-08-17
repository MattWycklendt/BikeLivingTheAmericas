import requests
import json
import os
from urllib.request import urlretrieve

###### DELETE BEFORE COMMIT ###########
TOKEN = "EAACEdEose0cBAFFQrpcZB1ktDgAAUCpYHQ75RngLZBRKSveFzhGH6K8O8wgnOZBu2nJZB4KSFyZA4OoWrZAigUgg6QRuk52yqv2fc15pNqQza9reSaRujQBeR09mZAuBZBh52xKPQtWgD5IMY6HXsxwGNFe0CBSPHnPhF1Venal1awZDZD"
#######################################

r = requests.get("https://graph.facebook.com/me/albums?limit=1000&access_token=" + TOKEN)
bikeLiving_albums = [{'id': d['id'], 'name': d['name']} for d in r.json()['data'] if 'BikeLiving' in d['name']]

with open('albums.json', 'w') as outfile:
    json.dump(json.dumps(bikeLiving_albums), outfile)

for album in bikeLiving_albums:
    print("!!! GETTING ALBUM" + album['name'])
    r = requests.get("https://graph.facebook.com/" + album['id'] + "/photos?limit=1000&access_token=" + TOKEN)
    album_data = r.json()
    album_data['album_name'] = album['name']

    dir_name = album['name'].replace (" ", "_")
    os.mkdir(dir_name)
    with open(dir_name + '/album_data.json', 'w') as outfile:
        json.dump(json.dumps(album_data), outfile)

    for p in album_data['data']:
        print(p['id'])
        urlretrieve(p['images'][0]['source'],
                    dir_name + '/' + p['id'] + ".jpg")
