import dropbox
# import UploadSessionCursor


#Connect to dropbox
dbx = dropbox.Dropbox('CzDOpqjLiK0AAAAAAAAEC4g3rnqNqhPkGHUqGwUrzopn6kIDf0UHJzC1vUdsu2T2')
dbx.users_get_current_account()


#List files from the folder
entries = dbx.files_list_folder(path='/ammalia').entries

links = []

for entry in entries:
	link = dbx.sharing_create_shared_link(entry.path_lower)
	link.url += "&raw=1"
	links.append(link)

print(links)

# #get amount of files found in a folder
# cursor = UploadSessionCursor("session_id") #where to get session id from

# #generate specific URL's for each file and store them in an array
# #For loop to create URL's for all photos found in folder with +'&raw=1'
# data = []
# for num in cursor:
# 	#get path_lower from .entries?
# 	url = dbx.sharing_create_shared_link(path=u'path_lower')




# #get data and store in array found below
# data.append(url)



#return a list of URLS and front end would get that list and render it in html
#add them in a list (like array) outside of the for loop i return that list