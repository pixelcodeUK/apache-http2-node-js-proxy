#Apache reverse proxy to Node JS
This repo contains a Vagrantfile that sets up an Apache server with HTTP 2.0 and server push. It runs a simple express JS app, that initiates a server push by adding the *Link* header to the response.

##Running the code

```
vagrant up
```
After Vagrant has finished booting go to *https://localhost:4433* in your host browser to see the app.

##Setup

The Apache config is stored in *000-default.conf*. This is copied over the top of the default one after Apache installation.
