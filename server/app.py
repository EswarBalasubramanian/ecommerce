import os

from flask import Flask
from flask_restful import Resource, Api

from resources.items import Items

from db import db 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///data.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'dada'
api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

api.add_resource(Items, '/items/<string:name>')
if __name__ == '__main__':
    db.init_app(app)
    app.run(port=5000, debug=True)