//    1.Find all the information about each products

db.query.find({}, { _id: 0 }).toArray()

//  2.Find the product price which are between 400 to 800
db.query.find( {$and:[ { product_price:{$gte:400} },{ product_price:{$lte:800} } ] } ).toArray();

// 3) Find the product price which are not between 400 to 600

db.query.find( { $or: [ { product_price: { $lt: 400 } }, { product_price: { $gt: 600 } } ], } ).toArray();

// 4) List the four product which are grater than 500 in price 

db.query.find( { product_price: { $gt: 500 } }, { _id: 0 } ).toArray();

// 5) Find the product name and product material of each products

db.query.find( {}, { _id: 0 , product_name:1 , product_material:1 } ).toArray();

// 6) Find the product with a row id of 10

db.query.find( { id:"10" }, { _id: 0 } ).toArray();

// 7) Find only the product name and product material

db.query.find( { id:"10" }, { _id: 0 , product_name:1 , product_material:1  } ).toArray();

// 8) Find all products which contain the value of soft in product material 

db.query.find({ product_material : "Soft" }).toArray();


// 9) Find products which contain product color indigo  and product price 492.00


db.query.find({ product_price: 492, product_color: "indigo" }).toArray();


// 10) Delete the products which product price value are same

db.query.deleteOne({product_price: {$eq:36} })

