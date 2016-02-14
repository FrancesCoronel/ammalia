import dropbox
from flask import Flask
from flask import render_template

app = Flask(__name__)
app.debug = True
dbx = dropbox.Dropbox('CzDOpqjLiK0AAAAAAAAEC4g3rnqNqhPkGHUqGwUrzopn6kIDf0UHJzC1vUdsu2T2')
dbx.users_get_current_account()

@app.route('/')
def home():
	
	return render_template('index.html')

@app.route('/images')
def images():
	
	#List files from the folder
	entries = dbx.files_list_folder(path='/ammalia').entries

	dropbox_images = []

	for entry in entries:
		link = dbx.sharing_create_shared_link(entry.path_lower)
		link.url += "&raw=1"
		dropbox_images.append(link)
	
	#return dropbox_images
	return render_template('images.html', images=dropbox_images)

if __name__ == '__main__':
	app.run()

