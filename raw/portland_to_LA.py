import requests
import urllib
import json

s = requests.Session()
params = {'origin': "Portland, OR",
        'destination': "Los Angeles, CA",
        'transit_mode': "bike"}

res = s.get('http://maps.googleapis.com/maps/api/directions/json', params=params)

print res.status_code

text_file = open("portland_to_LA.json", "w")
text_file.write(json.dumps(res.json()))
text_file.close()
