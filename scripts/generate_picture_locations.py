import json

with open("../gallery/" + 'albums.json', 'r') as fd:
    albums = json.loads(json.load(fd))

pics = {}
for album in albums:
    album_dir = "../img/" + album['name'].replace(' ', '_')

    with open(album_dir + '/album_data.json', 'r') as fd:
        album_data = json.loads(json.load(fd))

        for img in album_data['data']:
            if 'place' in img:
                place = img['place']
                latlong = str(place['location']['latitude']) + str(place['location']['longitude'])
                if latlong in pics:
                    pics[latlong]['ids'].append(img['id'])
                else:
                    pics[latlong] = {
                        'city': place['location']['city'],
                        'position':  {'lat': place['location']['latitude'],
                                      'lng': place['location']['longitude']},
                        'ids': [img['id']],
                        'album': album['name'].replace(' ', '_')
                    }

with open('places.json', 'w') as fd:
    fd.write(json.dumps(list(pics.values()), indent=4))


