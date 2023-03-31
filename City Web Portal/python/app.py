import os;
import json;
from flask import Flask,request,jsonify,redirect,render_template,make_response,Blueprint

app = Flask (__name__,static_url_path='',static_folder='web');

@app.route("/")
def index():
    return app.send_static_file("index.html");


@app.route("/echo",methods=["GET","POST"])
def echoServer():
    if(request.method!="POST"):
       #resp={"response":"ERROR","detail":"No post parameters provided"};
       with open('file.json', 'r+') as f:
        #json.dump(request.form, f);
        f.seek(0);
        return(json.dumps(f.read()));
    else:
       resp={};
       resp["Name"]=request.form.get("Name","");
       resp["Date"]=request.form.get("Date","");
       resp["Review"]=request.form.get("Review","");
       with open('file.json', 'a+') as f:
        json.dump(request.form, f);
        f.seek(0);
        return(json.dumps(f.read()));
