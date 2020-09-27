from flask_restful import Resource, reqparse
from models.items import ItemModel

class Items(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price',
        type=float,
        required=True,
        help="This field cannot be empty")

    def get(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            return item.json()
        return {'message': 'Item not found'}, 404

    def post(self, name):
        if ItemModel.find_by_name(name):
            return {'message': "An item with name '{}' already exists.".format(name)}, 400

        data = Items.parser.parse_args()

        item = ItemModel(name, data['price'])

        try:
            item.save_to_db()
        except:
            return {'message' : "An error occured inserting the item."}, 500
        
        return item.json(), 201

    def delete(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            item.delete_from_db()
        
        return {'message': 'Item deleted.'}

    def put(self, name):
        data = Items.parser.parse_args()

        item = ItemModel.find_by_name(name)

        if item:
            item.price = data['price']
        else:
            item = ItemModel(name, data['price'])
        
        item.save_to_db()
        return item.json()