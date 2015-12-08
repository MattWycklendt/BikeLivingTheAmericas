import requests
import urllib
import json

location = "42.05161,-124.28230"
s = requests.Session()
params = {'origin': "Anchorage, AK",
        'destination': location,
        'transit_mode': "bike"}

res = s.get('http://maps.googleapis.com/maps/api/directions/json', params=params)

print res.status_code

text_file = open("So_Far.json", "w")
text_file.write(json.dumps(res.json()))
text_file.close()
