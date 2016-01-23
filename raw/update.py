import requests
import urllib
import json

start = "28.64041,-114.02190"
location = "31.71189,-116.56990"
s = requests.Session()
params = {'origin': start,
        'destination': location,
        'transit_mode': "bike"}

res = s.get('http://maps.googleapis.com/maps/api/directions/json', params=params)

print res.status_code

text_file = open("So_Far.json", "w")
text_file.write(json.dumps(res.json()))
text_file.close()
