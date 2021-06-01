# Note
A command line interface tool built using yargs module to add,update,remove,view notes . The data is stored in note.json file and can be updated easily via 

basic commands

# to add/update
node app --title="some text" --body="some body text"

# to remove
node app remove --title="title of text you want to remove"

# to print list
node app list

# to read particular list

node app read --title="title of text you want to read"
