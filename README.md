# twitter2snapchat-server [![Build Status](https://travis-ci.org/brandly/twitter2snapchat-server.svg)](https://travis-ci.org/brandly/twitter2snapchat-server)

> API for converting Twitter handles to Snapchat handles

this is intended for finding people already in the public eye. this server depends on [a list of handles](https://github.com/brandly/twitter2snapchat-server/blob/master/handles.txt), so it definitely won't find EVERYONE

if you're on the list and wish you weren't, [tweet at me](https://twitter.com/matthewbrandly) and i'll get you outta there

### contributing

if someone's missing from the list, send me a pull request! each line in `handles.txt` contains a twitter handle, a space, and a corresponding snapchat handle. lines should be sorted alphabetically. all characters are lowercase. no trailing whitespace.

### development

you need to define a `PORT` in a new file called `.env` placed at the root of this repo

```
$ echo 'PORT=3000' > .env
```

and then you can do the usual

```shell
$ npm install
$ npm test
$ npm start
$ open http://localhost:3000/jimmyfallon
```
