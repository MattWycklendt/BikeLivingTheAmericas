import json

markup = """
        <li>
            <img alt="{caption}"  src={src}>
            <div class="text">{caption}</div>
        </li>
"""

output = ""

with open('albums.json', 'r') as fd:
    albums = json.loads(json.load(fd))

for album in [albums[0]]:
    album_dir = album['name'].replace(' ', '_')

    with open(album_dir + '/album_data.json', 'r') as fd:
        album_data = json.loads(json.load(fd))

        for img in album_data['data']:
            cap = img.get('name','')
            output = output + markup.format(caption=cap, src=('/img/' + album_dir + '/' + img['id'] + '.jpg'))

    with open('out.html', 'w') as fd:
        fd.write(output)


